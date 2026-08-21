// Configurar cliente HTTP para comunicación con webhook

const DEFAULT_TIMEOUT = 90000;
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

// Traducir errores técnicos a mensajes amigables, sin jerga técnica
function classifyError(error) {
  if (error.name === 'AbortError') {
    return 'La respuesta está tardando más de lo normal. Inténtalo de nuevo en unos segundos.';
  }
  if (error.name === 'TypeError') {
    return 'No se pudo establecer conexión. Verifica tu conexión a internet e inténtalo de nuevo.';
  }
  return 'Ocurrió un problema al enviar tu mensaje. Inténtalo de nuevo.';
}

// Traducir códigos de estado HTTP a mensajes amigables, sin exponer el código al usuario
function friendlyStatusError(status) {
  if (status === 401 || status === 403) {
    return 'No tienes permiso para usar el asistente en este momento. Contacta al administrador del sitio.';
  }
  if (status === 404) {
    return 'El asistente no está disponible en este momento. Contacta al administrador del sitio.';
  }
  if (status === 429) {
    return 'Estás enviando mensajes muy rápido. Espera un momento antes de volver a intentarlo.';
  }
  if (status >= 500) {
    return 'El asistente no está disponible en este momento. Inténtalo de nuevo en unos minutos.';
  }
  return 'Ocurrió un problema al procesar tu mensaje. Inténtalo de nuevo.';
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
    throw new Error('El asistente no está disponible en este momento. Contacta al administrador del sitio.');
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
    // Registrar el detalle técnico solo en consola, nunca mostrarlo al usuario
    try {
      const errorBody = await response.text();
      if (errorBody) console.error('[ChatBubble] Detalle del error del webhook:', errorBody.slice(0, 500));
    } catch (_) {}

    throw new Error(friendlyStatusError(response.status));
  }

  // Decodificar respuesta JSON
  let data;
  try {
    data = await response.json();
  } catch (error) {
    throw new Error('No se pudo obtener una respuesta válida. Inténtalo de nuevo.');
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
    throw new Error('No se pudo obtener una respuesta válida. Inténtalo de nuevo.');
  }

  return {
    output: String(data.output),
    sessionId: data.sessionId || sessionId,
  };
}

// Enviar archivo de imagen al webhook en formato multipart
export async function sendImageMessage(
  webhookUrl,
  imageFile,
  sessionId,
  caption = '',
  extraMetadata = {},
  timeout = DEFAULT_TIMEOUT,
  signal = null
) {
  if (!webhookUrl) {
    throw new Error('El asistente no está disponible en este momento. Contacta al administrador del sitio.');
  }

  const formData = new FormData();
  formData.append('sessionId', sessionId);
  formData.append(
    'metadata',
    JSON.stringify({
      type: 'image',
      caption: caption || '',
      mimeType: imageFile.type,
      fileName: imageFile.name || '',
      size: imageFile.size,
      timestamp: new Date().toISOString(),
      source: 'chat-bubble',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
      ...extraMetadata,
    })
  );
  if (caption) formData.append('chatInput', caption);
  formData.append('imageFile', imageFile, imageFile.name || 'image');

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
    // Registrar el detalle técnico solo en consola, nunca mostrarlo al usuario
    try {
      const errorBody = await response.text();
      if (errorBody) console.error('[ChatBubble] Detalle del error del webhook:', errorBody.slice(0, 500));
    } catch (_) {}

    throw new Error(friendlyStatusError(response.status));
  }

  let data;
  try {
    data = await response.json();
  } catch (_) {
    throw new Error('No se pudo obtener una respuesta válida. Inténtalo de nuevo.');
  }

  if (!data || typeof data.output === 'undefined') {
    const possibleOutput = data?.message || data?.text || data?.response || data?.content;
    if (possibleOutput) {
      return { output: String(possibleOutput), sessionId: data.sessionId || sessionId };
    }
    throw new Error('No se pudo obtener una respuesta válida. Inténtalo de nuevo.');
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
    throw new Error('El asistente no está disponible en este momento. Contacta al administrador del sitio.');
  }

  const filename = `voice_${Date.now()}.mp3`;

  // Declarar el audio como audio/mpeg (aunque el códec real siga siendo el grabado por el navegador) para simplificar su procesamiento con modelos como Gemini
  const outgoingMimeType = 'audio/mpeg';
  const outgoingBlob = new Blob([audioBlob], { type: outgoingMimeType });

  const formData = new FormData();
  formData.append('sessionId', sessionId);
  formData.append(
    'metadata',
    JSON.stringify({
      type: 'audio',
      duration,
      mimeType: outgoingMimeType,
      filename,
      timestamp: new Date().toISOString(),
      source: 'chat-bubble',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
      ...extraMetadata,
    })
  );
  formData.append('data', outgoingBlob, filename);

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
    // Registrar el detalle técnico solo en consola, nunca mostrarlo al usuario
    try {
      const errorBody = await response.text();
      if (errorBody) console.error('[ChatBubble] Detalle del error del webhook:', errorBody.slice(0, 500));
    } catch (_) {}

    throw new Error(friendlyStatusError(response.status));
  }

  let data;
  try {
    data = await response.json();
  } catch (_) {
    throw new Error('No se pudo obtener una respuesta válida. Inténtalo de nuevo.');
  }

  if (!data || typeof data.output === 'undefined') {
    const possibleOutput = data?.message || data?.text || data?.response || data?.content;
    if (possibleOutput) {
      return { output: String(possibleOutput), sessionId: data.sessionId || sessionId };
    }
    throw new Error('No se pudo obtener una respuesta válida. Inténtalo de nuevo.');
  }

  return {
    output: String(data.output),
    sessionId: data.sessionId || sessionId,
  };
}
