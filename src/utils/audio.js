// Grabar audio desde el navegador

const MAX_RECORDING_SECONDS = 30;

/*
  Encapsular grabación de audio con MediaRecorder.
  Callbacks: onTick, onComplete, onError, onLevelChange.
*/
export class AudioRecorder {
  constructor() {
    this.mediaRecorder = null;
    this.stream = null;
    this.chunks = [];
    this.startTime = null;
    this.tickInterval = null;
    this.autoStopTimeout = null;
    this.analyser = null;
    this.audioCtx = null;
    this.levelInterval = null;
    this.seconds = 0;
    this.cancelled = false;
    this.mimeType = '';

    // Callbacks
    this.onTick = null;
    this.onComplete = null;
    this.onError = null;
    this.onLevelChange = null;
  }

  // Obtener formato de audio soportado
  static getSupportedMimeType() {
    const candidates = [
      'audio/webm;codecs=opus',
      'audio/webm',
      'audio/ogg;codecs=opus',
      'audio/ogg',
      'audio/mp4',
    ];
    for (const type of candidates) {
      if (MediaRecorder.isTypeSupported(type)) return type;
    }
    return '';
  }

  // Determinar extensión de archivo
  static getExtension(mimeType) {
    if (mimeType.includes('ogg')) return 'ogg';
    if (mimeType.includes('mp4')) return 'mp4';
    return 'webm';
  }

  // Iniciar grabación de audio
  async start() {
    this.cancelled = false;
    this.chunks = [];
    this.seconds = 0;

    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
    } catch (err) {
      let msg = 'No se pudo acceder al micrófono.';
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        msg = 'Permiso de micrófono denegado. Habilítalo en la configuración del navegador.';
      } else if (err.name === 'NotFoundError') {
        msg = 'No se encontró ningún micrófono en este dispositivo.';
      }
      if (this.onError) this.onError(msg);
      return;
    }

    // Configurar analizador de audio
    try {
      this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const source = this.audioCtx.createMediaStreamSource(this.stream);
      this.analyser = this.audioCtx.createAnalyser();
      this.analyser.fftSize = 256;
      source.connect(this.analyser);

      const dataArray = new Uint8Array(this.analyser.frequencyBinCount);
      this.levelInterval = setInterval(() => {
        this.analyser.getByteFrequencyData(dataArray);
        const avg = dataArray.reduce((sum, v) => sum + v, 0) / dataArray.length;
        if (this.onLevelChange) this.onLevelChange(avg / 255);
      }, 80);
    } catch (_) {
      // Ignorar errores del analizador
    }

    // Inicializar MediaRecorder
    this.mimeType = AudioRecorder.getSupportedMimeType();
    const options = this.mimeType ? { mimeType: this.mimeType } : {};

    try {
      this.mediaRecorder = new MediaRecorder(this.stream, options);
    } catch (err) {
      if (this.onError) this.onError('Error al inicializar la grabación de audio.');
      this._cleanup();
      return;
    }

    this.mediaRecorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) this.chunks.push(e.data);
    };

    this.mediaRecorder.onstop = () => {
      if (this.cancelled) {
        this._cleanup();
        return;
      }
      const duration = this.seconds;
      const blob = new Blob(this.chunks, { type: this.mimeType || 'audio/webm' });
      this._cleanup();
      if (this.onComplete) this.onComplete(blob, duration);
    };

    this.mediaRecorder.start(100);
    this.startTime = Date.now();

    // Actualizar tiempo
    this.tickInterval = setInterval(() => {
      this.seconds = Math.floor((Date.now() - this.startTime) / 1000);
      if (this.onTick) this.onTick(this.seconds);
    }, 500);

    // Detener automáticamente al límite de tiempo
    this.autoStopTimeout = setTimeout(() => {
      this.stop();
    }, MAX_RECORDING_SECONDS * 1000);
  }

  // Finalizar grabación
  stop() {
    if (!this.mediaRecorder || this.mediaRecorder.state === 'inactive') return;
    clearInterval(this.tickInterval);
    clearTimeout(this.autoStopTimeout);
    this.seconds = Math.floor((Date.now() - this.startTime) / 1000);
    this.mediaRecorder.stop();
  }

  // Cancelar grabación
  cancel() {
    this.cancelled = true;
    clearInterval(this.tickInterval);
    clearTimeout(this.autoStopTimeout);
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      this.mediaRecorder.stop();
    } else {
      this._cleanup();
    }
  }

  // Liberar recursos de audio
  _cleanup() {
    clearInterval(this.levelInterval);
    clearInterval(this.tickInterval);
    clearTimeout(this.autoStopTimeout);

    if (this.stream) {
      this.stream.getTracks().forEach((t) => t.stop());
      this.stream = null;
    }
    if (this.audioCtx) {
      try { this.audioCtx.close(); } catch (_) {}
      this.audioCtx = null;
    }
    this.analyser = null;
    this.mediaRecorder = null;
  }
}

// Formatear duración a MM:SS
export function formatDuration(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

// Verificar soporte de grabación
export function isAudioRecordingSupported() {
  return !!(
    navigator.mediaDevices &&
    typeof navigator.mediaDevices.getUserMedia === 'function' &&
    typeof MediaRecorder !== 'undefined'
  );
}

// Convertir Blob a Base64 para persistencia
export function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

// Convertir Base64 a Blob
export async function base64ToBlob(base64Data) {
  const response = await fetch(base64Data);
  return await response.blob();
}
