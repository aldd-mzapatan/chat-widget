// Gestionar la sesión del usuario

const SESSION_KEY = 'cb_widget_v1_session_id';
const HISTORY_KEY = 'cb_widget_v1_history';
const SESSIONS_INDEX_KEY = 'cb_widget_v1_sessions_index';
const HISTORY_PREFIX = 'cb_widget_v1_history_';

// Generar identificador único (UUID)
function generateUUID() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }

  // Generar UUID usando crypto.getRandomValues
  if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    const hex = Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
    return `${hex.slice(0,8)}-${hex.slice(8,12)}-${hex.slice(12,16)}-${hex.slice(16,20)}-${hex.slice(20)}`;
  }

  // Generar UUID básico con Math.random
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Recuperar sesión existente o inicializar una nueva
export function getOrCreateSessionId() {
  try {
    let sessionId = localStorage.getItem(SESSION_KEY);
    if (!sessionId) {
      sessionId = generateUUID();
      localStorage.setItem(SESSION_KEY, sessionId);
    }
    return sessionId;
  } catch (e) {
    if (!getOrCreateSessionId._fallbackId) {
      getOrCreateSessionId._fallbackId = generateUUID();
    }
    return getOrCreateSessionId._fallbackId;
  }
}

// Establecer la sesión activa
export function setActiveSessionId(sessionId) {
  try {
    localStorage.setItem(SESSION_KEY, sessionId);
  } catch (e) {}
}

// Obtener título derivado del primer mensaje de usuario
function getTitleFromHistory(history) {
  const firstUserMsg = history.find(m => m.role === 'user');
  return firstUserMsg ? firstUserMsg.text : 'Conversación 1';
}

// Recuperar el índice de sesiones ordenado por lastUserMessageAt (o lastMessageAt como fallback) desc
export function getSessionsIndex() {
  try {
    const data = localStorage.getItem(SESSIONS_INDEX_KEY);
    const index = data ? JSON.parse(data) : [];
    return index.sort((a, b) => {
      const timeA = new Date(a.lastUserMessageAt || a.lastMessageAt).getTime();
      const timeB = new Date(b.lastUserMessageAt || b.lastMessageAt).getTime();
      return timeB - timeA;
    });
  } catch (e) {
    return [];
  }
}

// Guardar o actualizar una sesión en el índice
export function saveSessionToIndex(sessionId, title, messageCount) {
  try {
    const index = getSessionsIndex();
    let session = index.find(s => s.sessionId === sessionId);
    const now = new Date().toISOString();
    const finalTitle = title || (session ? session.title : 'Conversación 1');

    // Obtener la hora del último mensaje del usuario desde el historial
    const history = getHistoryBySessionId(sessionId);
    const lastUserMsg = [...history].reverse().find(m => m.role === 'user');
    
    // Si no hay mensaje de usuario, no agregamos ni mantenemos la sesión en el índice
    if (!lastUserMsg) {
      if (session) {
        const filteredIndex = index.filter(s => s.sessionId !== sessionId);
        localStorage.setItem(SESSIONS_INDEX_KEY, JSON.stringify(filteredIndex));
      }
      return;
    }

    const lastUserMessageAt = lastUserMsg.date;

    if (session) {
      session.title = finalTitle;
      session.messageCount = messageCount;
      session.lastMessageAt = now;
      session.lastUserMessageAt = lastUserMessageAt;
    } else {
      session = {
        sessionId,
        title: finalTitle,
        startedAt: now,
        lastMessageAt: now,
        lastUserMessageAt,
        messageCount,
        historyKey: `${HISTORY_PREFIX}${sessionId}`
      };
      index.push(session);
    }

    // Ordenar por fecha del último mensaje del usuario descendente
    index.sort((a, b) => {
      const timeA = new Date(a.lastUserMessageAt || a.lastMessageAt).getTime();
      const timeB = new Date(b.lastUserMessageAt || b.lastMessageAt).getTime();
      return timeB - timeA;
    });

    // Límite de 20 sesiones
    while (index.length > 20) {
      const removed = index.pop();
      try {
        localStorage.removeItem(removed.historyKey);
      } catch (err) {}
    }

    localStorage.setItem(SESSIONS_INDEX_KEY, JSON.stringify(index));
  } catch (e) {
    console.error("Error saving session to index", e);
  }
}

// Eliminar una sesión del índice y su clave de historial dinámica
export function deleteSessionFromIndex(sessionId) {
  try {
    const index = getSessionsIndex();
    const filtered = index.filter(s => s.sessionId !== sessionId);
    localStorage.setItem(SESSIONS_INDEX_KEY, JSON.stringify(filtered));
    localStorage.removeItem(`${HISTORY_PREFIX}${sessionId}`);
  } catch (e) {}
}

// Recuperar historial de una sesión específica
export function getHistoryBySessionId(sessionId) {
  try {
    const key = `${HISTORY_PREFIX}${sessionId}`;
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

// Eliminar la sesión actual
export function clearSession() {
  try {
    const sessionId = getCurrentSessionId();
    if (sessionId) {
      const history = getChatHistory(sessionId);
      if (history && history.length > 0) {
        const title = getTitleFromHistory(history);
        saveSessionToIndex(sessionId, title, history.length);
      }
    }
    localStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(HISTORY_KEY);
    if (getOrCreateSessionId._fallbackId) {
      delete getOrCreateSessionId._fallbackId;
    }
    if (getChatHistory._fallbackHistory) {
      delete getChatHistory._fallbackHistory;
    }
  } catch (e) {}
  return getOrCreateSessionId();
}

// Recuperar historial de chat persistido (dinámico + migración legacy)
export function getChatHistory(sessionId) {
  const activeSessionId = sessionId || getCurrentSessionId();
  const dynamicKey = activeSessionId ? `${HISTORY_PREFIX}${activeSessionId}` : null;
  try {
    if (dynamicKey) {
      const data = localStorage.getItem(dynamicKey);
      if (data) {
        return JSON.parse(data);
      }

      // Migración silenciosa de clave legacy fija
      const legacyData = localStorage.getItem(HISTORY_KEY);
      if (legacyData) {
        localStorage.setItem(dynamicKey, legacyData);
        localStorage.removeItem(HISTORY_KEY);
        return JSON.parse(legacyData);
      }
    }
    return [];
  } catch (e) {
    return getChatHistory._fallbackHistory || [];
  }
}

// Guardar historial de chat dinámico
export function saveChatHistory(historyArray, sessionId) {
  const activeSessionId = sessionId || getCurrentSessionId();
  const dynamicKey = activeSessionId ? `${HISTORY_PREFIX}${activeSessionId}` : null;
  try {
    if (dynamicKey) {
      localStorage.setItem(dynamicKey, JSON.stringify(historyArray));
    }
  } catch (e) {
    getChatHistory._fallbackHistory = historyArray;
  }
}

// Obtener identificador de sesión activa
export function getCurrentSessionId() {
  try {
    return localStorage.getItem(SESSION_KEY);
  } catch (e) {
    return getOrCreateSessionId._fallbackId || null;
  }
}
