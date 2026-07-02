// Configurar cliente HTTP para comunicación con webhook

const DEFAULT_TIMEOUT = 30000;
const RETRY_DELAY = 1000;
const MAX_RETRIES = 1;

// Realizar petición HTTP con límite de tiempo
function fetchWithTimeout(url, options, timeout, signal = null) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  if (signal) {
    if (signal.aborted) controller.abort();
    else signal.addEventListener('abort', () => controller.abort());
  }

  return fetch(url, { ...options, signal: controller.signal })
    .finally(() => clearTimeout(timeoutId));
}

// Pausar ejecución temporalmente
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Traducir errores técnicos a mensajes legibles
function classifyError(error) {
  if (error.name === 'AbortError') {
    return 'La solicitud tardó demasiado tiempo. Verifica tu conexión e inténtalo de nuevo.';
  }
  if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
    return 'No se pudo conectar con el servidor. Puede ser un problema de CORS o de red. Verifica la URL del webhook y que el servidor permita solicitudes desde este dominio.';
  }
  if (error.name === 'TypeError' && error.message.includes('NetworkError')) {
    return 'Error de red. Verifica tu conexión a internet.';
  }
  return `Error de conexión: ${error.message}`;
}

// Ejecutar petición HTTP con reintentos automáticos
async function fetchWithRetry(url, options, timeout, retriesLeft, signal = null) {
  try {
    const response = await fetchWithTimeout(url, options, timeout, signal);
    return response;
  } catch (error) {
    if (retriesLeft > 0 && error.name !== 'AbortError') {
      // Reintentar si falla por red o servidor
      await delay(RETRY_DELAY);
      return fetchWithRetry(url, options, timeout, retriesLeft - 1, signal);
    }
    throw error;
  }
}

// Enviar mensaje de texto al webhook
export async function sendMessage(webhookUrl, chatInput, sessionId, extraMetadata = {}, timeout = DEFAULT_TIMEOUT, signal = null, onProgress = null) {
  if (!webhookUrl) {
    throw new Error('URL del webhook no configurada. Agrega la URL en window.ChatBubbleConfig.webhook.url');
  }

  const payload = {
    chatInput: chatInput.trim(),
    sessionId,
    metadata: {
      timestamp: new Date().toISOString(),
      source: 'chat-bubble',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
      ...extraMetadata,
    },
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  let response;

  try {
    response = await fetchWithRetry(webhookUrl, options, timeout, MAX_RETRIES, signal);
  } catch (error) {
    if (error.name === 'AbortError' && signal && signal.aborted) throw error;
    throw new Error(classifyError(error));
  }

  // Procesar errores de respuesta HTTP
  if (!response.ok) {
    let errorDetail = '';
    try {
      const errorBody = await response.text();
      if (errorBody) errorDetail = `: ${errorBody.slice(0, 200)}`;
    } catch (_) {}

    if (response.status === 401 || response.status === 403) {
      throw new Error(`Sin autorización para acceder al webhook (${response.status}). Verifica la configuración de n8n.`);
    }
    if (response.status === 404) {
      throw new Error(`Webhook no encontrado (404). Verifica que la URL sea correcta y que el workflow esté activo en n8n.`);
    }
    if (response.status === 429) {
      throw new Error(`Demasiadas solicitudes (429). Espera un momento antes de enviar otro mensaje.`);
    }
    if (response.status >= 500) {
      throw new Error(`Error interno del servidor (${response.status}). El servicio de n8n puede estar temporalmente no disponible${errorDetail}`);
    }
    throw new Error(`Error HTTP ${response.status}${errorDetail}`);
  }

  // Decodificar respuesta JSON
  let data;
  try {
    data = await response.json();
  } catch (error) {
    throw new Error('La respuesta del servidor no es JSON válido. Verifica la configuración del nodo "Respond to Webhook" en n8n.');
  }

  // Validar formato de respuesta del servidor
  if (!data || typeof data.output === 'undefined') {
    // Buscar campo de respuesta en rutas alternativas
    const possibleOutput = data?.message || data?.text || data?.response || data?.content;
    if (possibleOutput) {
      return {
        output: String(possibleOutput),
        sessionId: data.sessionId || sessionId,
      };
    }
    throw new Error('La respuesta del servidor no contiene el campo "output". Verifica la configuración del workflow en n8n.');
  }

  return {
    output: String(data.output),
    sessionId: data.sessionId || sessionId,
  };
}

// Enviar archivo de audio al webhook en formato multipart
export async function sendAudioMessage(
  webhookUrl,
  audioBlob,
  sessionId,
  duration,
  mimeType = 'audio/webm',
  extraMetadata = {},
  timeout = DEFAULT_TIMEOUT,
  signal = null
) {
  if (!webhookUrl) {
    throw new Error('URL del webhook no configurada.');
  }

  // Extraer extensión de archivo según tipo MIME
  let ext = 'webm';
  if (mimeType.includes('ogg')) ext = 'ogg';
  else if (mimeType.includes('mp4')) ext = 'mp4';

  const filename = `voice_${Date.now()}.${ext}`;

  const formData = new FormData();
  formData.append('sessionId', sessionId);
  formData.append(
    'metadata',
    JSON.stringify({
      type: 'audio',
      duration,
      mimeType,
      filename,
      timestamp: new Date().toISOString(),
      source: 'chat-bubble',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
      ...extraMetadata,
    })
  );
  formData.append('audioFile', audioBlob, filename);

  const options = {
    method: 'POST',
    // Omitir Content-Type para permitir generación automática de boundary
    body: formData,
  };

  let response;
  try {
    response = await fetchWithRetry(webhookUrl, options, timeout, MAX_RETRIES, signal);
  } catch (error) {
    if (error.name === 'AbortError' && signal && signal.aborted) throw error;
    throw new Error(classifyError(error));
  }

  if (!response.ok) {
    let errorDetail = '';
    try {
      const errorBody = await response.text();
      if (errorBody) errorDetail = `: ${errorBody.slice(0, 200)}`;
    } catch (_) {}

    if (response.status === 401 || response.status === 403) {
      throw new Error(`Sin autorización para acceder al webhook (${response.status}).`);
    }
    if (response.status === 404) {
      throw new Error(`Webhook no encontrado (404). Verifica la URL y que el workflow esté activo.`);
    }
    if (response.status >= 500) {
      throw new Error(`Error del servidor (${response.status})${errorDetail}`);
    }
    throw new Error(`Error HTTP ${response.status}${errorDetail}`);
  }

  let data;
  try {
    data = await response.json();
  } catch (_) {
    throw new Error('La respuesta del servidor no es JSON válido.');
  }

  if (!data || typeof data.output === 'undefined') {
    const possibleOutput = data?.message || data?.text || data?.response || data?.content;
    if (possibleOutput) {
      return { output: String(possibleOutput), sessionId: data.sessionId || sessionId };
    }
    throw new Error('La respuesta del servidor no contiene el campo "output".');
  }

  return {
    output: String(data.output),
    sessionId: data.sessionId || sessionId,
  };
}
