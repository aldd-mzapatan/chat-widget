// Inicializar módulo principal del widget

import cssContent from "./chat-bubble.css";
import {
  getOrCreateSessionId,
  clearSession,
  getChatHistory,
  saveChatHistory,
  saveSessionToIndex,
  getSessionsIndex,
  getHistoryBySessionId,
  deleteSessionFromIndex,
  setActiveSessionId,
} from "./utils/session.js";
import { parseMarkdown, escapeText } from "./utils/markdown.js";
import {
  sendMessage,
  sendAudioMessage,
  sendImageMessage,
} from "./utils/api.js";
import {
  AudioRecorder,
  MAX_RECORDING_SECONDS,
  isAudioRecordingSupported,
  blobToBase64,
  base64ToBlob,
} from "./utils/audio.js";

// Definir recursos gráficos SVG en línea
const ICONS = {
  chat: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z"/>
    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z"/>
  </svg>`,

  close: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/>
  </svg>`,

  reply: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11Z" />
  </svg>`,

  stop: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <rect x="6.5" y="6.5" width="11" height="11" rx="2.5"></rect>
  </svg>`,

  sparkle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
    <path d="M6 0C6.3 3.5 8.5 5.7 12 6C8.5 6.3 6.3 8.5 6 12C5.7 8.5 3.5 6.3 0 6C3.5 5.7 5.7 3.5 6 0Z"/>
  </svg>`,

  arrowLeft: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>`,

  copy: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <rect x="9" y="9" width="12" height="12" rx="2.5"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>`,

  check: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>`,

  retry: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M3 12a9 9 0 0 1 15.5-6.2L21 8"></path>
    <polyline points="21 3 21 8 16 8"></polyline>
    <path d="M21 12a9 9 0 0 1-15.5 6.2L3 16"></path>
    <polyline points="3 21 3 16 8 16"></polyline>
  </svg>`,

  history: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-9-9c2.39 0 4.68.94 6.4 2.6L20 6.5M20 6.5H15M20 6.5V2" />
  </svg>`,

  trash: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
  </svg>`,

  newChat: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd"/>
  </svg>`,

  newSession: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m-3-3h6" />
  </svg>`,

  send: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>`,

  bot: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.5 7.5h-9v9h9v-9Z"/>
    <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd"/>
  </svg>`,

  chatEmpty: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"/>
  </svg>`,

  warning: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 1.998-.003 4.5-2.599 4.5H4.645c-2.596 0-3.752-2.502-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd"/>
  </svg>`,

  chevronDown: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>`,

  attach: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>`,

  mic: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
    <line x1="12" y1="19" x2="12" y2="22"></line>
  </svg>`,

  micStop: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <rect x="6" y="6" width="12" height="12" rx="2"/>
  </svg>`,

  audioPlay: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z"/>
  </svg>`,

  audioPause: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
  </svg>`,

  moreHorizontal: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM21 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
  </svg>`,

  lightboxClose: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>`,
};

// Declarar configuración predeterminada del sistema
const DEFAULT_CONFIG = {
  webhook: {
    url: "",
  },
  bot: {
    name: "Ali",
    subtitle: "Tu asistente de IA de Aliaddo",
    avatar: "../public/img/ali-profile-image.png",
    avatarVideo: null,
    welcomeMessage:
      "Hola, soy Ali 👋. Tu asistente virtual de Aliaddo ¿Como puedo ayudarte?",
    offlineMessage: "En este momento no estoy disponible. Inténtalo más tarde.",
    typingText: "Escribiendo...",
    statusText: "En línea",
    inputPlaceholder: null,
    suggestions: [],
    thinkingSteps: [
      { after: 3000, text: "Pensando…" },
      { after: 8000, text: "Revisando la información…" },
      { after: 15000, text: "Preparando tu respuesta…" },
      { after: 30000, text: "Está tardando más de lo normal…" },
    ],
  },
  style: {
    primaryColor: "#572b86",
    textColor: "#ffffff",
    position: "right",
    borderRadius: "18px",
    fontFamily: "inherit",
    theme: "auto",
  },
  behavior: {
    openOnLoad: false,
    showTimestamps: true,
    enableSoundNotification: false,
    maxMessageLength: 1000,
    requestTimeout: 90000,
    maxImageSizeMB: 5,
  },
};

// Definir clase principal del chat
class ChatBubble {
  constructor(config) {
    this.config = this._mergeConfig(DEFAULT_CONFIG, config || {});
    this.isOpen = false;
    this.isLoading = false;
    this.hasNewMessage = false;
    this.sessionId = getOrCreateSessionId();
    this.messageCount = 0;
    this.chatHistory = [];
    // Guardar referencia al mensaje seleccionado
    this.replyingTo = null;
    this._waitTimers = [];
    this._stopRequested = false;

    // Guardar imagen adjunta pendiente de envío
    this.pendingImage = null;
    this._attachmentPreviewUrl = null;

    // Inicializar estado de grabación de voz
    this.audioRecorder = null;
    this.isRecording = false;
    this._audioSupported = isAudioRecordingSupported();

    // Referenciar el audio en reproducción para permitir solo uno a la vez
    this._activeAudio = null;

    // Advertir si no hay URL de webhook configurada
    if (!this.config.webhook.url) {
      console.warn(
        "[ChatBubble] ⚠️ No se configuró una URL de webhook. " +
          "Agrega window.ChatBubbleConfig.webhook.url antes de cargar el script.",
      );
    }

    this._init();
  }

  // Ejecutar secuencia de arranque
  async _init() {
    this._injectStyles();
    this._buildDOM();
    this._applyConfig();
    this._bindEvents();
    this._initDraggable();

    // Cargar historial
    this.chatHistory = getChatHistory(this.sessionId);
    if (this.chatHistory && this.chatHistory.length > 0) {
      await this._loadHistory();
    } else {
      this._showWelcomeMessage();
    }

    if (this.config.behavior.openOnLoad) {
      setTimeout(() => this._openChat(), 400);
    }
  }

  _injectStyles() {}

  async _loadHistory() {
    this._insertAgentIntro();
    const oldHistory = [...this.chatHistory];

    // Desactivar animaciones temporales y procesar
    for (const msg of oldHistory) {
      const dateObj = msg.date ? new Date(msg.date) : new Date();
      if (msg.role === "user") {
        if (msg.isAudio && msg.audioData) {
          try {
            const blob = await base64ToBlob(msg.audioData);
            this._addUserAudioMessage(blob, msg.duration || 0, dateObj, false);
          } catch (e) {
            console.error("Error cargando audio del historial", e);
          }
        } else if (msg.isImage && msg.imageData) {
          try {
            const blob = await base64ToBlob(msg.imageData);
            await this._addUserImageMessage(
              blob,
              msg.caption || "",
              dateObj,
              false,
            );
          } catch (e) {
            console.error("Error cargando imagen del historial", e);
          }
        } else {
          this.replyingTo = msg.replyingTo || null;
          this._addUserMessage(msg.text, dateObj, false);
          this.replyingTo = null;
        }
      } else if (msg.role === "bot") {
        this._addBotMessage(msg.text, dateObj, false, false); // isAnimated=false
      }
    }
    this._showSuggestions();
    this._scrollToBottom();
  }

  _buildDOM() {
    // Crear elemento anfitrión en el documento
    this.host = document.createElement("div");
    this.host.id = "chat-bubble-host";
    document.body.appendChild(this.host);

    // Crear Shadow DOM para aislamiento de estilos
    this.shadowRoot = this.host.attachShadow({ mode: "open" });

    // Inyectar CSS compilado
    const styleEl = document.createElement("style");
    styleEl.textContent = cssContent;
    this.shadowRoot.appendChild(styleEl);

    // Construir botón flotante de apertura
    this.launcher = document.createElement("div");
    this.launcher.id = "chat-bubble-launcher";
    this.launcher.setAttribute("role", "complementary");
    this.launcher.setAttribute("aria-label", "Widget de chat");
    this.launcher.innerHTML = `
      <button class="cb-launcher-btn" id="cb-launcher-btn" aria-label="Abrir chat" aria-expanded="false" aria-controls="chat-bubble-window">
        <span class="cb-icon-chat" id="cb-launcher-icon-container"></span>
        <span class="cb-icon-close">${ICONS.chevronDown}</span>
        <span class="cb-sparkle cb-sparkle--1" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="currentColor"><path d="M6 0C6.3 3.5 8.5 5.7 12 6C8.5 6.3 6.3 8.5 6 12C5.7 8.5 3.5 6.3 0 6C3.5 5.7 5.7 3.5 6 0Z"/></svg></span>
        <span class="cb-sparkle cb-sparkle--3" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="currentColor"><path d="M6 0C6.3 3.5 8.5 5.7 12 6C8.5 6.3 6.3 8.5 6 12C5.7 8.5 3.5 6.3 0 6C3.5 5.7 5.7 3.5 6 0Z"/></svg></span>
        <span class="cb-sparkle cb-sparkle--5" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="currentColor"><path d="M6 0C6.3 3.5 8.5 5.7 12 6C8.5 6.3 6.3 8.5 6 12C5.7 8.5 3.5 6.3 0 6C3.5 5.7 5.7 3.5 6 0Z"/></svg></span>
      </button>
      <span class="cb-notification-badge" id="cb-notification-badge" aria-label="Nuevo mensaje" role="status"></span>
    `;

    // Construir contenedor de la ventana principal
    this.window = document.createElement("div");
    this.window.id = "chat-bubble-window";
    this.window.setAttribute("role", "application");
    this.window.setAttribute("aria-label", `Chat con ${this.config.bot.name}`);
    this.window.setAttribute("aria-hidden", "true");
    this.window.innerHTML = `
      <div class="cb-header" id="cb-header">
        <div class="cb-header-info">
          <button class="cb-header-back-btn" id="cb-header-back-btn" aria-label="Volver al chat" title="Volver al chat">
            ${ICONS.arrowLeft}
          </button>
          <div class="cb-avatar" id="cb-avatar"></div>
          <div class="cb-header-text">
            <span class="cb-bot-name" id="cb-bot-name">${this._escapeAttr(this.config.bot.name)}</span>
            <span class="cb-status">${this._escapeAttr(this.config.bot.statusText || "")}</span>
          </div>
          <span class="cb-header-title" id="cb-header-title">Conversaciones</span>
        </div>
        <div class="cb-header-actions">
          <div class="cb-actions-dropdown" id="cb-actions-dropdown">
            <button class="cb-actions-btn" id="cb-actions-btn" aria-label="Más acciones" aria-haspopup="true" aria-expanded="false" title="Acciones">
              ${ICONS.moreHorizontal}
            </button>
            <div class="cb-actions-menu cb-is-hidden" id="cb-actions-menu" role="menu">
              <button class="cb-actions-menu-item" id="cb-new-session-btn" role="menuitem">
                <span class="cb-actions-menu-icon">${ICONS.newSession}</span>
                Nuevo chat
              </button>
              <button class="cb-actions-menu-item" id="cb-history-btn" role="menuitem">
                <span class="cb-actions-menu-icon">${ICONS.history}</span>
                Historial de chats
              </button>
            </div>
          </div>
          <button class="cb-toggle-size-btn" id="cb-toggle-size-btn" aria-label="Ampliar ventana" title="Ampliar ventana">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          </button>
          <button class="cb-close-window-btn" id="cb-close-window-btn" aria-label="Cerrar chat" title="Cerrar">
            ${ICONS.close}
          </button>
        </div>
        <div class="cb-toast-container" id="cb-toast-container" role="alert" aria-live="assertive"></div>
      </div>
      <div class="cb-resize-handle" id="cb-resize-handle"></div>

      <div class="cb-dropzone-overlay" id="cb-dropzone-overlay" aria-hidden="true">
        <div class="cb-dropzone-content">
          ${ICONS.attach}
          <span>Suelta la imagen para adjuntarla</span>
        </div>
      </div>

      <div class="cb-messages" id="cb-messages-container" role="log" aria-live="polite" aria-label="Mensajes del chat">
        <div class="cb-message cb-message--bot cb-typing-wrapper" id="cb-typing">
          <div class="cb-msg-avatar">
            ${this.config.bot.avatar ? `<img src="${this._escapeAttr(this.config.bot.avatar)}" alt="${this._escapeAttr(this.config.bot.name)}">` : ICONS.bot}
          </div>
          <div class="cb-msg-col">
            <div class="cb-typing-indicator" role="status" aria-live="polite"></div>
          </div>
        </div>
      </div>

      <div class="cb-history-panel" id="cb-history-panel" aria-hidden="true">
        <div class="cb-history-panel-top">
          <button class="cb-history-new-btn" id="cb-history-new-btn">
            ${ICONS.newSession}
            <span>Nueva conversación</span>
          </button>
        </div>
        <div class="cb-history-list" id="cb-history-list" aria-labelledby="cb-header-title"></div>
        <div class="cb-history-panel-footer cb-is-hidden" id="cb-history-panel-footer">
          <button class="cb-history-clear-btn" id="cb-history-clear-btn" aria-label="Borrar todas las conversaciones">
            ${ICONS.trash} Borrar todo
          </button>
        </div>
      </div>

      <div class="cb-clear-all-overlay cb-is-hidden" id="cb-clear-all-overlay" aria-hidden="true">
        <div class="cb-clear-all-dialog" id="cb-clear-all-dialog" role="alertdialog" aria-modal="true" tabindex="-1" aria-labelledby="cb-clear-all-text" aria-describedby="cb-clear-all-desc">
          <div class="cb-clear-all-icon" aria-hidden="true">${ICONS.trash}</div>
          <p class="cb-clear-all-text" id="cb-clear-all-text">¿Borrar todas las conversaciones?</p>
          <p class="cb-clear-all-desc" id="cb-clear-all-desc"></p>
          <div class="cb-clear-all-actions">
            <button class="cb-history-item-confirm-no" id="cb-clear-all-cancel-btn">Cancelar</button>
            <button class="cb-history-item-confirm-yes" id="cb-clear-all-confirm-btn">Borrar todo</button>
          </div>
        </div>
      </div>

      <div class="cb-reply-preview" id="cb-reply-preview" aria-hidden="true">
        <div class="cb-reply-bar"></div>
        <div class="cb-reply-content">
          <span class="cb-reply-label">${this._escapeAttr(this.config.bot.name)}</span>
          <span class="cb-reply-text" id="cb-reply-text"></span>
        </div>
        <button class="cb-reply-cancel" id="cb-reply-cancel" aria-label="Cancelar respuesta">
          ${ICONS.close}
        </button>
      </div>

      <div class="cb-input-area">
        <button id="cb-scroll-bottom-btn" class="cb-scroll-bottom-btn" aria-label="Desplazarse hacia abajo">
          ${ICONS.chevronDown}
        </button>
        <div class="cb-composer">
          <div class="cb-attachment-preview" id="cb-attachment-preview" aria-hidden="true">
            <div class="cb-attachment-chip">
              <div class="cb-attachment-thumb" id="cb-attachment-thumb" role="button" tabindex="0" aria-label="Ver imagen ampliada" title="Ver imagen ampliada"></div>
              <div class="cb-attachment-info">
                <span class="cb-attachment-name" id="cb-attachment-name"></span>
                <span class="cb-attachment-hint" id="cb-attachment-meta"></span>
              </div>
              <button class="cb-attachment-remove" id="cb-attachment-remove" aria-label="Quitar imagen adjunta" title="Quitar imagen">
                ${ICONS.close}
              </button>
            </div>
          </div>
          <div class="cb-composer-row">
            <button id="cb-attach-btn" class="cb-attach-btn" aria-label="Adjuntar imagen" title="Adjuntar imagen">
              ${ICONS.attach}
            </button>
            <input type="file" id="cb-file-input" class="cb-file-input-hidden" accept="image/png,image/jpeg,image/webp,image/bmp,image/heic,image/heif" tabindex="-1" aria-hidden="true" />
            <textarea
              id="cb-input"
              placeholder="${this._escapeAttr(this.config.bot.inputPlaceholder || `Pregúntale a ${this.config.bot.name}`)}"
              rows="1"
              maxlength="${this.config.behavior.maxMessageLength}"
              aria-label="Escribe tu mensaje"
              aria-multiline="true"
            ></textarea>
            <button id="cb-mic-btn" class="cb-mic-btn" aria-label="Grabar mensaje de voz" title="Grabar audio">
              ${ICONS.mic}
            </button>
            <button id="cb-send-btn" aria-label="Enviar mensaje">
              ${ICONS.send}
            </button>
          </div>
        </div>
      </div>
    `;

    // Construir diálogo de vista ampliada de imagen (lightbox)
    const lightboxDialog = document.createElement("dialog");
    lightboxDialog.className = "cb-lightbox-dialog";
    lightboxDialog.setAttribute("aria-label", "Vista ampliada de imagen");
    lightboxDialog.innerHTML = `
      <button class="cb-lightbox-close-btn" aria-label="Cerrar imagen" title="Cerrar">
        ${ICONS.lightboxClose}
      </button>
      <img src="" alt="" class="cb-lightbox-image" />
    `;

    // Insertar elementos en Shadow DOM
    this.shadowRoot.appendChild(this.launcher);
    this.shadowRoot.appendChild(this.window);
    this.shadowRoot.appendChild(lightboxDialog);

    const launcherContainer = this.launcher.querySelector(
      "#cb-launcher-icon-container",
    );
    const headerAvatarContainer = this.window.querySelector("#cb-avatar");

    if (this.config.bot.avatar) {
      const launcherImg = document.createElement("img");
      launcherImg.src = this._escapeAttr(this.config.bot.avatar);
      launcherImg.alt = this._escapeAttr(this.config.bot.name);
      launcherImg.className = "cb-launcher-avatar";
      launcherImg.loading = "lazy";
      launcherContainer.appendChild(launcherImg);

      const headerImg = document.createElement("img");
      headerImg.src = this._escapeAttr(this.config.bot.avatar);
      headerImg.alt = this._escapeAttr(this.config.bot.name);
      headerImg.loading = "lazy";
      headerAvatarContainer.appendChild(headerImg);
    } else {
      launcherContainer.innerHTML = ICONS.chat;
      headerAvatarContainer.innerHTML = ICONS.bot;
    }

    // Almacenar referencias a elementos del DOM
    this.launcherBtn = this.shadowRoot.getElementById("cb-launcher-btn");
    this.notificationBadge = this.shadowRoot.getElementById(
      "cb-notification-badge",
    );
    this.messagesContainer = this.shadowRoot.getElementById(
      "cb-messages-container",
    );
    this.typingIndicator = this.shadowRoot.getElementById("cb-typing");
    this.emptyState = this.shadowRoot.getElementById("cb-empty-state");
    this.input = this.shadowRoot.getElementById("cb-input");
    this.sendBtn = this.shadowRoot.getElementById("cb-send-btn");

    this.toggleSizeBtn = this.shadowRoot.getElementById("cb-toggle-size-btn");
    this.resizeHandle = this.shadowRoot.getElementById("cb-resize-handle");
    this.dropzoneOverlay = this.shadowRoot.getElementById(
      "cb-dropzone-overlay",
    );
    this.scrollBottomBtn = this.shadowRoot.getElementById(
      "cb-scroll-bottom-btn",
    );
    this.toastContainer = this.shadowRoot.getElementById("cb-toast-container");
    this.attachBtn = this.shadowRoot.getElementById("cb-attach-btn");
    this.fileInput = this.shadowRoot.getElementById("cb-file-input");
    this.attachmentPreview = this.shadowRoot.getElementById(
      "cb-attachment-preview",
    );
    this.attachmentThumb = this.shadowRoot.getElementById(
      "cb-attachment-thumb",
    );
    this.attachmentName = this.shadowRoot.getElementById("cb-attachment-name");
    this.attachmentMeta = this.shadowRoot.getElementById("cb-attachment-meta");
    this.attachmentRemoveBtn = this.shadowRoot.getElementById(
      "cb-attachment-remove",
    );
    this.replyPreview = this.shadowRoot.getElementById("cb-reply-preview");
    this.replyText = this.shadowRoot.getElementById("cb-reply-text");
    this.replyCancelBtn = this.shadowRoot.getElementById("cb-reply-cancel");
    this.micBtn = this.shadowRoot.getElementById("cb-mic-btn");

    // Almacenar referencias para el historial y acciones del header
    this.actionsBtn = this.shadowRoot.getElementById("cb-actions-btn");
    this.actionsMenu = this.shadowRoot.getElementById("cb-actions-menu");
    this.historyBtn = this.shadowRoot.getElementById("cb-history-btn");
    this.historyPanel = this.shadowRoot.getElementById("cb-history-panel");
    this.historyList = this.shadowRoot.getElementById("cb-history-list");
    this.headerBackBtn = this.shadowRoot.getElementById("cb-header-back-btn");
    this.historyFooter = this.shadowRoot.getElementById(
      "cb-history-panel-footer",
    );
    this.historyClearBtn = this.shadowRoot.getElementById(
      "cb-history-clear-btn",
    );
    this.clearAllOverlay = this.shadowRoot.getElementById(
      "cb-clear-all-overlay",
    );
    this.clearAllDialog = this.shadowRoot.getElementById("cb-clear-all-dialog");
    this.clearAllCancelBtn = this.shadowRoot.getElementById(
      "cb-clear-all-cancel-btn",
    );
    this.clearAllConfirmBtn = this.shadowRoot.getElementById(
      "cb-clear-all-confirm-btn",
    );

    if (this.historyClearBtn) {
      this.historyClearBtn.addEventListener("click", (e) =>
        this._openClearAllModal(e.detail === 0),
      );
    }
    if (this.clearAllOverlay) {
      // Cerrar al hacer clic en el fondo (fuera del diálogo)
      this.clearAllOverlay.addEventListener("click", (e) => {
        if (e.target === this.clearAllOverlay) this._closeClearAllModal();
      });
    }
    if (this.clearAllCancelBtn) {
      this.clearAllCancelBtn.addEventListener("click", () =>
        this._closeClearAllModal(),
      );
    }
    if (this.clearAllConfirmBtn) {
      this.clearAllConfirmBtn.addEventListener("click", () => {
        this._closeClearAllModal();
        this._clearAllSessions();
      });
    }

    this._updateSendButtonState();
    this._initLightbox();
    this._initDropZone();
  }

  // Configurar el lightbox de vista ampliada para imágenes del chat y la vista previa adjunta
  _initLightbox() {
    this.lightboxDialog = this.shadowRoot.querySelector(".cb-lightbox-dialog");
    this.lightboxImg = this.shadowRoot.querySelector(".cb-lightbox-image");

    // Interceptar Escape para disparar la animación de cierre en vez de un cierre abrupto
    this.lightboxDialog.addEventListener("cancel", (e) => {
      e.preventDefault();
      this._closeLightbox();
    });

    this.shadowRoot.addEventListener("click", (e) => {
      const target = e.target;

      if (
        target.tagName === "IMG" &&
        (target.classList.contains("cb-image") ||
          target.classList.contains("cb-image-message-img"))
      ) {
        // Dejar pasar el click si la imagen está envuelta en un enlace
        if (target.closest("a")) return;
        this._openLightbox(target.src, target.alt);
        e.preventDefault();
        return;
      }

      // Ampliar la miniatura de vista previa antes de enviarla
      if (
        target.closest(".cb-attachment-thumb") &&
        this._attachmentPreviewUrl
      ) {
        this._openLightbox(
          this._attachmentPreviewUrl,
          "Vista previa de la imagen adjunta",
        );
        return;
      }

      if (this.lightboxDialog.open) {
        if (target.closest(".cb-lightbox-close-btn")) {
          this._closeLightbox();
          return;
        }
        // Cerrar al hacer clic en el backdrop (el propio <dialog>)
        if (target === this.lightboxDialog) {
          this._closeLightbox();
          return;
        }
      }
    });

    // Permitir abrir la vista previa adjunta también desde el teclado (role="button")
    this.shadowRoot.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      if (
        e.target.closest(".cb-attachment-thumb") &&
        this._attachmentPreviewUrl
      ) {
        e.preventDefault();
        this._openLightbox(
          this._attachmentPreviewUrl,
          "Vista previa de la imagen adjunta",
        );
      }
    });
  }

  _openLightbox(src, alt) {
    this.lightboxImg.src = src;
    this.lightboxImg.alt = alt || "Imagen ampliada";
    this.lightboxDialog.showModal();
  }

  _closeLightbox() {
    if (
      !this.lightboxDialog.open ||
      this.lightboxDialog.classList.contains("is-closing")
    )
      return;
    this.lightboxDialog.classList.add("is-closing");
    setTimeout(() => {
      this.lightboxDialog.close();
      this.lightboxDialog.classList.remove("is-closing");
      this.lightboxImg.src = "";
    }, 280);
  }

  _applyConfig() {
    const { style } = this.config;

    if (
      style.primaryColor &&
      style.primaryColor !== DEFAULT_CONFIG.style.primaryColor
    ) {
      this.host.style.setProperty("--cb-primary", style.primaryColor);
      this.host.style.setProperty("--cb-user-bubble", style.primaryColor);
      this.host.style.setProperty(
        "--cb-primary-hover",
        this._darkenColor(style.primaryColor, 15),
      );
    }

    if (style.textColor && style.textColor !== DEFAULT_CONFIG.style.textColor) {
      this.host.style.setProperty("--cb-primary-text", style.textColor);
      this.host.style.setProperty("--cb-user-text", style.textColor);
    }

    if (
      style.borderRadius &&
      style.borderRadius !== DEFAULT_CONFIG.style.borderRadius
    ) {
      this.host.style.setProperty("--cb-radius", style.borderRadius);
    }

    if (style.fontFamily && style.fontFamily !== "inherit") {
      this.host.style.setProperty("--cb-font", style.fontFamily);
    }

    if (style.position === "left") {
      this.launcher.classList.add("cb-position--left");
      this.window.classList.add("cb-position--left");
    } else {
      this.launcher.classList.remove("cb-position--left");
      this.window.classList.remove("cb-position--left");
    }

    if (style.theme === "light") {
      this.window.setAttribute("data-theme", "light");
    } else if (style.theme === "dark") {
      this.window.setAttribute("data-theme", "dark");
    } else {
      this.window.removeAttribute("data-theme");
    }
  }

  // Asignar controladores de eventos del DOM
  _bindEvents() {
    this.launcherBtn.addEventListener("click", () => this._toggleChat());

    this.sendBtn.addEventListener("click", () =>
      this.isLoading ? this._stopResponse() : this._handleSend(),
    );

    // Configurar dropdown de acciones del header
    if (this.actionsBtn) {
      this.actionsBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this._toggleActionsMenu();
      });
    }

    // Cerrar dropdown al hacer clic fuera
    this.shadowRoot.addEventListener("click", (e) => {
      if (
        this.actionsMenu &&
        !this.actionsMenu.classList.contains("cb-is-hidden")
      ) {
        const dropdown = this.shadowRoot.getElementById("cb-actions-dropdown");
        if (dropdown && !dropdown.contains(e.target)) {
          this._closeActionsMenu();
        }
      }
    });

    if (this.historyBtn) {
      // detail === 0 indica activación por teclado: solo entonces mover el foco
      this.historyBtn.addEventListener("click", (e) => {
        this._closeActionsMenu();
        this._toggleHistoryPanel(e.detail === 0);
      });
    }

    this.headerBackBtn.addEventListener("click", () => {
      this._closeHistoryPanel();
      this.input.focus();
    });

    const historyNewBtn = this.shadowRoot.getElementById("cb-history-new-btn");
    historyNewBtn.addEventListener("click", () => {
      this._closeHistoryPanel();
      this._startNewChat();
      this.input.focus();
    });

    const newSessionBtn = this.shadowRoot.getElementById("cb-new-session-btn");
    if (newSessionBtn) {
      newSessionBtn.addEventListener("click", () => {
        this._closeActionsMenu();
        this._startNewChat();
      });
    }

    const closeWindowBtn = this.shadowRoot.getElementById(
      "cb-close-window-btn",
    );
    if (closeWindowBtn) {
      closeWindowBtn.addEventListener("click", () => this._closeChat());
    }

    // Manejar clic en el micrófono
    if (this._audioSupported && this.micBtn) {
      this.micBtn.addEventListener("click", (e) =>
        this._handleMicClick(e.detail === 0),
      );
    } else if (this.micBtn) {
      this.micBtn.style.display = "none";
    }

    this.toggleSizeBtn.addEventListener("click", () => this._toggleWideMode());
    // Restaurar estado al cancelar cita
    this.replyCancelBtn.addEventListener("click", () => {
      this._clearReply();
      this.input.focus();
    });

    this.input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        this._handleSend();
      }
    });

    this.input.addEventListener("input", () => {
      this._autoResizeTextarea();
      this._updateSendButtonState();
    });

    // Permitir adjuntar una imagen pegándola directamente (Ctrl+V)
    this.input.addEventListener("paste", (e) => this._handlePaste(e));

    // Cerrar chat o panel al presionar Escape
    document.addEventListener("keydown", (e) => {
      if (this.isRecording && this.isOpen) {
        if (e.key === "Escape") {
          e.preventDefault();
          this._cancelRecording();
          return;
        }
        if (e.key === "Enter" && !e.composedPath().some((el) => el.tagName === "BUTTON")) {
          e.preventDefault();
          this._stopRecording();
          return;
        }
      }
      if (e.key === "Escape") {
        if (
          this.clearAllOverlay &&
          this.clearAllOverlay.classList.contains("cb-is-active")
        ) {
          this._closeClearAllModal();
          e.stopPropagation();
        } else if (
          this.historyPanel &&
          this.historyPanel.classList.contains("cb-is-active")
        ) {
          this._closeHistoryPanel();
          e.stopPropagation();
        } else if (this.isOpen) {
          this._closeChat();
        }
      }
    });

    // Detectar posición de desplazamiento para botón de scroll
    this.messagesContainer.addEventListener("scroll", () =>
      this._handleScroll(),
    );

    // Desplazar vista hasta el último mensaje
    this.scrollBottomBtn.addEventListener("click", () => {
      this.messagesContainer.scrollTo({
        top: this.messagesContainer.scrollHeight,
        behavior: "smooth",
      });
    });

    // Abrir selector nativo de archivos al pulsar adjuntar
    if (this.attachBtn) {
      this.attachBtn.addEventListener("click", () => {
        if (this.isLoading || this.isRecording) return;
        this.fileInput.click();
      });
    }

    // Procesar imagen elegida por el usuario
    if (this.fileInput) {
      this.fileInput.addEventListener("change", (e) =>
        this._handleFileSelected(e),
      );
    }

    // Quitar imagen adjunta antes de enviarla
    if (this.attachmentRemoveBtn) {
      this.attachmentRemoveBtn.addEventListener("click", () => {
        this._clearPendingImage();
        this._updateSendButtonState();
        this.input.focus();
      });
    }
  }

  _initDraggable() {
    // Seleccionar cabecera para arrastre
    this.header = this.shadowRoot.getElementById("cb-header");
    this.currentTranslateX = 0;

    this.isDragging = false;
    this.isResizing = false;

    this.dragStartX = 0;
    this.dragStartY = 0;
    this.dragStartTranslateX = 0;
    this.dragStartHeight = 0;
    this.dragStartBottom = 0;

    const onPointerMoveDrag = (e) => {
      if (!this.isDragging) return;

      const deltaX = e.clientX - this.dragStartX;
      let nextX = this.dragStartTranslateX + deltaX;

      const rect = this.window.getBoundingClientRect();
      const windowWidth = rect.width;
      const baselineLeft = rect.left - this.currentTranslateX;

      const minX = 12 - baselineLeft;
      const maxX = window.innerWidth - windowWidth - 12 - baselineLeft;

      nextX = Math.max(minX, Math.min(maxX, nextX));

      this.currentTranslateX = nextX;
      this.window.style.setProperty("--cb-drag-x", `${nextX}px`);
      this.launcher.style.setProperty("--cb-drag-x", `${nextX}px`);

      const deltaY = e.clientY - this.dragStartY;
      let nextHeight = this.dragStartHeight - deltaY;

      const minHeight = 350;
      // Calcular límite inferior de la ventana
      const margin = 24;
      const maxHeight = this.dragStartBottom - margin;

      nextHeight = Math.max(minHeight, Math.min(maxHeight, nextHeight));

      this.window.style.setProperty("--cb-window-height", `${nextHeight}px`);
    };

    const onPointerUpDrag = (e) => {
      if (!this.isDragging) return;
      this.isDragging = false;
      this.window.classList.remove("cb-is-dragging");
      this.launcher.classList.remove("cb-is-dragging");

      document.removeEventListener("pointermove", onPointerMoveDrag);
      document.removeEventListener("pointerup", onPointerUpDrag);
      document.removeEventListener("pointercancel", onPointerUpDrag);
    };

    this.header.addEventListener("pointerdown", (e) => {
      if (
        e.target.closest(".cb-toggle-size-btn") ||
        e.target.closest("#cb-resize-handle") ||
        e.target.closest(".cb-toast-container") ||
        window.innerWidth <= 480
      ) {
        return;
      }

      this.isDragging = true;
      this.dragStartX = e.clientX;
      this.dragStartY = e.clientY;
      this.dragStartTranslateX = this.currentTranslateX;

      const rect = this.window.getBoundingClientRect();
      this.dragStartHeight = rect.height;
      this.dragStartBottom = rect.bottom;

      this.window.classList.add("cb-is-dragging");
      this.launcher.classList.add("cb-is-dragging");

      document.addEventListener("pointermove", onPointerMoveDrag);
      document.addEventListener("pointerup", onPointerUpDrag);
      document.addEventListener("pointercancel", onPointerUpDrag);

      e.preventDefault();
    });

    const onPointerMoveResize = (e) => {
      if (!this.isResizing) return;

      const deltaY = e.clientY - this.dragStartY;
      let nextHeight = this.dragStartHeight - deltaY;

      const minHeight = 350;
      // Calcular límite inferior de la ventana
      const margin = 24;
      const maxHeight = this.dragStartBottom - margin;

      nextHeight = Math.max(minHeight, Math.min(maxHeight, nextHeight));

      this.window.style.setProperty("--cb-window-height", `${nextHeight}px`);
    };

    const onPointerUpResize = (e) => {
      if (!this.isResizing) return;
      this.isResizing = false;
      this.window.classList.remove("cb-is-dragging");

      document.removeEventListener("pointermove", onPointerMoveResize);
      document.removeEventListener("pointerup", onPointerUpResize);
      document.removeEventListener("pointercancel", onPointerUpResize);
    };

    this.resizeHandle.addEventListener("pointerdown", (e) => {
      if (window.innerWidth <= 480) return;

      this.isResizing = true;
      this.dragStartY = e.clientY;

      const rect = this.window.getBoundingClientRect();
      this.dragStartHeight = rect.height;
      this.dragStartBottom = rect.bottom;

      this.window.classList.add("cb-is-dragging");

      document.addEventListener("pointermove", onPointerMoveResize);
      document.addEventListener("pointerup", onPointerUpResize);
      document.addEventListener("pointercancel", onPointerUpResize);

      e.stopPropagation();
      e.preventDefault();
    });

    this._onWindowResize = () => {
      this.currentTranslateX = 0;
      this.window.style.setProperty("--cb-drag-x", "0px");
      this.launcher.style.setProperty("--cb-drag-x", "0px");
      this.window.style.removeProperty("--cb-window-height");
    };
    window.addEventListener("resize", this._onWindowResize);
  }

  // Controlar apertura y cierre de la ventana
  _toggleChat() {
    if (this.isOpen) {
      this._closeChat();
    } else {
      this._openChat();
    }
  }

  _toggleWideMode() {
    this.isWide = !this.isWide;
    const btn = this.toggleSizeBtn;
    const svg = btn.querySelector("svg");

    if (this.isWide) {
      this.window.style.setProperty("--cb-window-width", "650px");
      this.window.style.setProperty("--cb-window-height", "780px");
      this.window.classList.add("cb-is-wide");
      btn.setAttribute("aria-label", "Contraer ventana");
      btn.setAttribute("title", "Contraer ventana");
      svg.innerHTML =
        '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="10" y1="14" x2="3" y2="21"></line><line x1="21" y1="3" x2="14" y2="10"></line>';
    } else {
      this.window.style.removeProperty("--cb-window-width");
      this.window.style.removeProperty("--cb-window-height");
      this.window.classList.remove("cb-is-wide");
      btn.setAttribute("aria-label", "Ampliar ventana");
      btn.setAttribute("title", "Ampliar ventana");
      svg.innerHTML =
        '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>';
    }
  }

  _openChat() {
    this.isOpen = true;
    this.window.classList.add("cb-is-open");
    this.window.setAttribute("aria-hidden", "false");
    this.launcherBtn.classList.add("cb-is-open");
    this.launcherBtn.setAttribute("aria-expanded", "true");
    this.launcherBtn.setAttribute("aria-label", "Cerrar chat");

    this._clearNotificationBadge();

    this._scrollToBottom();

    // Reanudar el video del avatar si sigue visible dentro del scroll
    if (this.avatarVideo && this._avatarVideoVisible) {
      this.avatarVideo.play().catch(() => {});
    }

    setTimeout(() => this.input.focus(), 300);
  }

  _closeChat() {
    this.isOpen = false;
    this.window.classList.remove("cb-is-open");
    this.window.setAttribute("aria-hidden", "true");
    this.launcherBtn.classList.remove("cb-is-open");
    this.launcherBtn.setAttribute("aria-expanded", "false");
    this.launcherBtn.setAttribute("aria-label", "Abrir chat");

    // Pausar el video del avatar: no tiene sentido decodificarlo con el chat cerrado
    this.avatarVideo?.pause();
  }

  // Administrar ciclo de vida de la sesión
  _startNewChat() {
    if (this.activeRequest) this.activeRequest.abort();
    this.activeRequest = null;
    this._hideThinkingIndicator();
    // Reiniciar estado de carga para desbloquear el input
    this._setLoadingState(false);
    this._clearReply();
    this._clearPendingImage();

    // Persistir sesión actual en el índice antes de limpiar si tiene historial
    if (this.chatHistory && this.chatHistory.length > 0) {
      saveSessionToIndex(
        this.sessionId,
        this._getHistoryTitle(),
        this.chatHistory.length,
      );
    }

    this._clearMessages();
    this.sessionId = clearSession();
    this.chatHistory = [];
    this.messageCount = 0;
    this._showWelcomeMessage();
  }

  // Procesar formato de hora y fecha
  _getTimeString(dateObj = new Date()) {
    let hours = dateObj.getHours();
    const minutes = dateObj.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "p.m." : "a.m.";
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${hours.toString().padStart(2, "0")}:${minutes} ${ampm}`;
  }

  _checkDateDivider(dateObj) {
    const dateStr = dateObj.toDateString();
    if (this.lastMessageDateString !== dateStr) {
      this.lastMessageDateString = dateStr;

      const divider = document.createElement("div");
      divider.className = "cb-date-divider";

      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);

      if (dateStr === today.toDateString()) {
        divider.textContent = "Hoy";
      } else if (dateStr === yesterday.toDateString()) {
        divider.textContent = "Ayer";
      } else {
        const day = dateObj.getDate().toString().padStart(2, "0");
        const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
        const year = dateObj.getFullYear();
        divider.textContent = `${day}/${month}/${year}`;
      }

      this.messagesContainer.insertBefore(divider, this.typingIndicator);
    }
  }

  // Insertar mensaje del asistente en el chat
  _addBotMessage(text, dateObj = new Date(), save = true, isAnimated = true) {
    this._hideThinkingIndicator();
    this._hideEmptyState();
    this._checkDateDivider(dateObj);

    const message = document.createElement("div");
    message.className = "cb-message cb-message--bot";

    // Configurar avatar junto al mensaje
    const avatarEl = document.createElement("div");
    avatarEl.className = "cb-msg-avatar";
    if (this.config.bot.avatar) {
      const img = document.createElement("img");
      img.src = this._escapeAttr(this.config.bot.avatar);
      img.alt = this._escapeAttr(this.config.bot.name);
      avatarEl.appendChild(img);
    } else {
      avatarEl.innerHTML = ICONS.bot;
    }

    // Agrupar contenido y marca de tiempo
    const col = document.createElement("div");
    col.className = "cb-msg-col";

    // Envolver la burbuja para anclar el botón de responder a su ancho real
    const bubbleRow = document.createElement("div");
    bubbleRow.className = "cb-msg-bubble-row";

    const content = document.createElement("div");
    content.className = "cb-message-content";

    bubbleRow.appendChild(content);
    col.appendChild(bubbleRow);

    // Agrupar hora y acciones del mensaje en una sola fila bajo la burbuja
    const meta = document.createElement("div");
    meta.className = "cb-msg-meta";

    if (this.config.behavior.showTimestamps) {
      const time = document.createElement("span");
      time.className = "cb-message-time";
      time.textContent = this._getTimeString(dateObj);
      meta.appendChild(time);
    }

    const actions = document.createElement("div");
    actions.className = "cb-msg-actions";

    if (navigator.clipboard && window.isSecureContext) {
      actions.appendChild(this._createCopyButton(content));
    }

    const replyBtn = document.createElement("button");
    replyBtn.className = "cb-msg-action-btn";
    replyBtn.setAttribute("aria-label", "Responder a este mensaje");
    replyBtn.setAttribute("title", "Responder");
    replyBtn.innerHTML = ICONS.reply;
    replyBtn.addEventListener("click", () => {
      // Extraer texto limpio para la cita
      const plainText = content.textContent || content.innerText || "";
      this._setReply(plainText.trim());
    });
    actions.appendChild(replyBtn);

    meta.appendChild(actions);
    col.appendChild(meta);

    message.appendChild(avatarEl);
    message.appendChild(col);

    // Añadir mensaje al DOM
    this.messagesContainer.insertBefore(message, this.typingIndicator);
    this.messageCount++;
    this._scrollToBottom();

    if (save) {
      this.chatHistory.push({
        role: "bot",
        text: text,
        date: dateObj.toISOString(),
      });
      saveChatHistory(this.chatHistory, this.sessionId);
      saveSessionToIndex(
        this.sessionId,
        this._getHistoryTitle(),
        this.chatHistory.length,
      );
    }

    // Convertir Markdown a HTML
    const htmlString = parseMarkdown(text);

    if (!htmlString || htmlString.trim() === "" || !isAnimated) {
      content.innerHTML = htmlString || text;
      if (!isAnimated) {
        return message;
      }
      const finish = () => {
        if (isFinished) return;
        isFinished = true;
        this.activeTyping = null;
        this._scrollToBottom();
      };
      let isFinished = false;
      this.activeTyping = { complete: finish };
      finish();
      return message;
    }

    const temp = document.createElement("div");
    temp.innerHTML = htmlString;

    // Ocultar elementos de lista vacíos temporalmente
    const listItems = temp.querySelectorAll("li");
    listItems.forEach((li) => {
      li.classList.add("cb-li-hidden");
    });

    const textNodes = [];
    function collectTextNodes(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        textNodes.push({
          node: node,
          fullText: node.nodeValue,
        });
        node.nodeValue = "";
      } else {
        for (let i = 0; i < node.childNodes.length; i++) {
          collectTextNodes(node.childNodes[i]);
        }
      }
    }
    collectTextNodes(temp);

    while (temp.firstChild) {
      content.appendChild(temp.firstChild);
    }

    const cursor = document.createElement("span");
    cursor.className = "cb-streaming-cursor";

    let nodeIndex = 0;
    let charIndex = 0;
    let isFinished = false;

    if (this.activeTyping) {
      this.activeTyping.complete();
    }
    const totalLength = text.length;
    const msPerChar = Math.max(3, Math.min(15, 1000 / (totalLength * 0.25)));
    const charsPerTick = totalLength > 150 ? Math.ceil(totalLength / 150) : 1;

    const streamText = () => {
      if (isFinished) return;

      if (nodeIndex >= textNodes.length) {
        finish();
        return;
      }

      const active = textNodes[nodeIndex];

      if (charIndex === 0) {
        let parent = active.node.parentNode;
        while (parent && parent !== content) {
          if (parent.classList && parent.classList.contains("cb-li-hidden")) {
            parent.classList.remove("cb-li-hidden");
          }
          parent = parent.parentNode;
        }
      }

      if (
        cursor.parentNode !== active.node.parentNode ||
        cursor.previousSibling !== active.node
      ) {
        active.node.parentNode.insertBefore(cursor, active.node.nextSibling);
      }
      // Medir antes de crecer el texto para no arrastrar al usuario que subió a leer
      const stickToBottom = this._isNearBottom();
      let count = 0;
      while (count < charsPerTick && charIndex < active.fullText.length) {
        active.node.nodeValue += active.fullText[charIndex];
        charIndex++;
        count++;
      }

      if (charIndex >= active.fullText.length) {
        nodeIndex++;
        charIndex = 0;
      }

      if (stickToBottom) this._scrollToBottom();

      this.activeTypingTimeout = setTimeout(streamText, msPerChar);
    };

    const finish = () => {
      if (isFinished) return;
      isFinished = true;
      clearTimeout(this.activeTypingTimeout);
      const stickToBottom = this._isNearBottom();

      // Restaurar visibilidad de elementos de lista
      const hiddenItems = content.querySelectorAll(".cb-li-hidden");
      hiddenItems.forEach((li) => li.classList.remove("cb-li-hidden"));

      // Asegurar inserción completa del texto
      textNodes.forEach((item) => {
        item.node.nodeValue = item.fullText;
      });

      cursor.remove();
      this.activeTyping = null;
      if (stickToBottom) this._scrollToBottom();
    };

    this.activeTyping = {
      complete: finish,
    };

    streamText();

    return message;
  }

  _createCopyButton(content) {
    const btn = document.createElement("button");
    btn.className = "cb-msg-action-btn";
    btn.setAttribute("aria-label", "Copiar mensaje");
    btn.setAttribute("title", "Copiar");
    btn.innerHTML = ICONS.copy;

    let resetTimer;
    btn.addEventListener("click", async () => {
      // Completar la animación de escritura para copiar el texto íntegro
      if (this.activeTyping && content.querySelector(".cb-streaming-cursor")) {
        this.activeTyping.complete();
      }
      try {
        await navigator.clipboard.writeText(content.innerText.trim());
      } catch {
        this._showErrorToast("No se pudo copiar el mensaje.");
        return;
      }
      clearTimeout(resetTimer);
      btn.classList.add("cb-is-done");
      btn.innerHTML = ICONS.check;
      btn.setAttribute("aria-label", "Mensaje copiado");
      resetTimer = setTimeout(() => {
        btn.classList.remove("cb-is-done");
        btn.innerHTML = ICONS.copy;
        btn.setAttribute("aria-label", "Copiar mensaje");
      }, 1600);
    });
    return btn;
  }

  // Insertar mensaje del usuario en el chat
  _addUserMessage(text, dateObj = new Date(), save = true) {
    if (this.activeTyping) {
      this.activeTyping.complete();
    }
    this._hideEmptyState();
    this._checkDateDivider(dateObj);

    const message = document.createElement("div");
    message.className = "cb-message cb-message--user";

    const content = document.createElement("div");
    content.className = "cb-message-content";

    // Incluir bloque de cita si existe
    if (this.replyingTo) {
      const quote = document.createElement("div");
      quote.className = "cb-message-quote";

      const quoteBar = document.createElement("div");
      quoteBar.className = "cb-message-quote-bar";

      const quoteText = document.createElement("span");
      quoteText.className = "cb-message-quote-text";
      // Limitar longitud del texto citado
      const maxLen = 80;
      const originalReply = this.replyingTo;
      quoteText.textContent =
        this.replyingTo.length > maxLen
          ? this.replyingTo.substring(0, maxLen) + "..."
          : this.replyingTo;

      quote.appendChild(quoteBar);
      quote.appendChild(quoteText);
      content.appendChild(quote);

      // Restablecer estado de cita
      this._clearReply();

      // Restaurar temporalmente para guardarlo
      this.replyingTo = originalReply;
    }

    content.appendChild(document.createTextNode(text));

    message.appendChild(content);

    if (this.config.behavior.showTimestamps) {
      const time = document.createElement("span");
      time.className = "cb-message-time";
      time.textContent = this._getTimeString(dateObj);
      message.appendChild(time);
    }

    this.messagesContainer.insertBefore(message, this.typingIndicator);
    this.messageCount++;

    if (save) {
      this.chatHistory.push({
        role: "user",
        text: text,
        date: dateObj.toISOString(),
        replyingTo: this.replyingTo,
        isAudio: false,
      });
      saveChatHistory(this.chatHistory, this.sessionId);
      saveSessionToIndex(
        this.sessionId,
        this._getHistoryTitle(),
        this.chatHistory.length,
      );
    }

    if (this.replyingTo) {
      this.replyingTo = null; // Limpiar definitivamente
    }

    this._scrollToBottom();
    return message;
  }

  // Activar modo de respuesta con cita
  _setReply(text) {
    if (!text) return;

    this.replyingTo = text;

    // Limitar longitud del texto para la vista previa
    const maxPreviewLength = 80;
    const preview =
      text.length > maxPreviewLength
        ? text.substring(0, maxPreviewLength) + "..."
        : text;

    this.replyText.textContent = preview;
    this.replyPreview.classList.add("cb-visible");
    this.replyPreview.setAttribute("aria-hidden", "false");

    // Foco automático en el campo de texto
    this.input.focus();
  }

  // Cancelar modo de respuesta y limpiar cita
  _clearReply() {
    this.replyingTo = null;
    this.replyPreview.classList.remove("cb-visible");
    this.replyPreview.setAttribute("aria-hidden", "true");
    this.replyText.textContent = "";
  }

  // Desplegar saludo inicial
  _showWelcomeMessage() {
    // Mostrar información del asistente
    this._insertAgentIntro();

    if (this.config.bot.welcomeMessage) {
      setTimeout(() => {
        this._addBotMessage(this.config.bot.welcomeMessage);
        this._showSuggestions();
      }, 400);
    } else {
      this._showSuggestions();
    }
  }

  // Mostrar preguntas sugeridas mientras la conversación no tenga mensajes del usuario
  _showSuggestions() {
    const suggestions = (this.config.bot.suggestions || []).filter(
      (s) => typeof s === "string" && s.trim(),
    );
    if (!suggestions.length) return;
    if (this.chatHistory.some((m) => m.role === "user")) return;

    this._hideSuggestions();
    const list = document.createElement("div");
    list.className = "cb-suggestions";
    list.setAttribute("role", "group");
    list.setAttribute("aria-label", "Preguntas sugeridas");

    suggestions.forEach((text, i) => {
      const chip = document.createElement("button");
      chip.className = "cb-suggestion-chip";
      chip.style.setProperty("--cb-chip-delay", `${i * 60}ms`);
      chip.textContent = text;
      chip.addEventListener("click", () => {
        if (this.isLoading) return;
        this.input.value = text;
        this._handleSend();
      });
      list.appendChild(chip);
    });

    this.messagesContainer.insertBefore(list, this.typingIndicator);
    this._scrollToBottom();
  }

  _hideSuggestions() {
    this.messagesContainer.querySelector(".cb-suggestions")?.remove();
  }

  // Configurar el video en bucle que reemplaza la foto de perfil al hacer hover
  _setupAvatarVideo(avatarWrap, videoSrc) {
    const reducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const SPEED = 1.5;

    const video = document.createElement("video");
    video.className = "cb-agent-intro-video";
    video.muted = true;
    video.loop = false;
    video.playsInline = true;
    video.preload = "auto";
    video.src = this._escapeAttr(videoSrc);
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.setAttribute("disablepictureinpicture", "");
    video.setAttribute("disableremoteplayback", "");
    video.setAttribute("aria-hidden", "true");
    video.tabIndex = -1;
    avatarWrap.appendChild(video);

    // Reiniciar y repetir al terminar
    video.addEventListener("ended", () => {
      video.currentTime = 0;
      video.play().catch(() => {});
    });

    // Arrancar en cuanto el navegador tenga suficientes datos
    video.addEventListener(
      "canplay",
      () => {
        avatarWrap.classList.add("cb-is-playing");
        video.playbackRate = SPEED;
        video.play().catch(() => {});
      },
      { once: true },
    );

    // Pausar el video cuando no es visible (chat cerrado o desplazado fuera de la
    // vista) para no seguir decodificando frames en segundo plano
    this._avatarVideoObserver?.disconnect();
    this._avatarVideoObserver = new IntersectionObserver(
      ([entry]) => {
        this._avatarVideoVisible = entry.isIntersecting;
        if (entry.isIntersecting && this.isOpen) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { root: this.messagesContainer, threshold: 0 },
    );
    this._avatarVideoObserver.observe(video);
    this.avatarVideo = video;
  }

  // Construir cabecera de presentación
  _insertAgentIntro() {
    // Evitar duplicados de la presentación
    const existing = this.messagesContainer.querySelector(".cb-agent-intro");
    if (existing) existing.remove();

    const intro = document.createElement("div");
    intro.className = "cb-agent-intro";

    // Configurar imagen del asistente
    const avatarWrap = document.createElement("div");
    avatarWrap.className = "cb-agent-intro-avatar";
    if (this.config.bot.avatar) {
      const img = document.createElement("img");
      img.src = this._escapeAttr(this.config.bot.avatar);
      img.alt = this._escapeAttr(this.config.bot.name);
      avatarWrap.appendChild(img);

      // Reproducir un video en bucle al pasar el cursor sobre el avatar
      if (this.config.bot.avatarVideo) {
        this._setupAvatarVideo(avatarWrap, this.config.bot.avatarVideo);
      }
    } else {
      avatarWrap.innerHTML = ICONS.bot;
    }

    // Configurar nombre del asistente
    const name = document.createElement("p");
    name.className = "cb-agent-intro-name";
    name.textContent = this.config.bot.name;

    // Configurar descripción del asistente
    const subtitle = document.createElement("p");
    subtitle.className = "cb-agent-intro-subtitle";
    subtitle.textContent = this.config.bot.subtitle || "";

    intro.appendChild(avatarWrap);
    intro.appendChild(name);
    if (this.config.bot.subtitle) intro.appendChild(subtitle);

    // Colocar presentación al inicio del chat
    this.messagesContainer.insertBefore(
      intro,
      this.messagesContainer.firstChild,
    );
  }

  // Eliminar historial de mensajes del DOM
  _clearMessages() {
    if (this.activeTyping) {
      this.activeTyping.complete();
      this.activeTyping = null;
    }
    // Excluir el typing indicator (#cb-typing) para no perder la referencia del DOM
    const messages = this.messagesContainer.querySelectorAll(
      ".cb-message:not(#cb-typing), .cb-date-divider, .cb-agent-intro, .cb-suggestions",
    );
    messages.forEach((el) => el.remove());
    this.lastMessageDateString = null;
  }

  // Mostrar animación de escritura
  _showTypingIndicator() {
    this.typingIndicator.classList.add("cb-visible");
    const indicator = this.typingIndicator.querySelector(
      ".cb-typing-indicator",
    );
    indicator.classList.remove("cb-thinking");
    indicator.innerHTML = `<span class="cb-typing-dot"></span><span class="cb-typing-dot"></span><span class="cb-typing-dot"></span><span class="cb-sr-only"></span>`;
    indicator.querySelector(".cb-sr-only").textContent =
      this.config.bot.typingText || "";
    this._scrollToBottom();
  }

  _hideTypingIndicator() {
    this.typingIndicator.classList.remove("cb-visible");
  }

  // Mostrar u actualizar el texto de estado; si ya está visible, solo cambiar el texto con transición
  _showThinkingIndicator(message) {
    const typingEl = this.typingIndicator;
    typingEl.classList.add("cb-visible");

    const indicator = typingEl.querySelector(".cb-typing-indicator");
    if (!indicator.classList.contains("cb-thinking")) {
      indicator.classList.add("cb-thinking");
      indicator.innerHTML = `<span class="cb-thinking-icon">${ICONS.sparkle}</span>`;
    }
    indicator.querySelector(".cb-thinking-text")?.remove();
    const text = document.createElement("span");
    text.className = "cb-thinking-text";
    text.textContent = message;
    indicator.appendChild(text);

    this._scrollToBottom();
  }

  _hideThinkingIndicator() {
    this._clearWaitingTimers();
    this.typingIndicator.classList.remove("cb-visible");
    const indicator = this.typingIndicator.querySelector(
      ".cb-typing-indicator",
    );
    indicator.classList.remove("cb-thinking");
    indicator.innerHTML = "";
  }

  // Iniciar la espera: puntos (o un texto inicial) y luego etapas por tiempo transcurrido
  _startWaiting(initialText = null) {
    this._hideThinkingIndicator();
    this._stopRequested = false;

    const steps = (this.config.bot.thinkingSteps || []).filter(
      (step) => step && step.text && step.after >= 0,
    );
    if (initialText) {
      this._showThinkingIndicator(initialText);
    } else {
      this._showTypingIndicator();
    }

    // Con texto inicial (imagen/audio) omitir la primera etapa genérica, que lo repetiría
    (initialText ? steps.slice(1) : steps).forEach((step) => {
      this._waitTimers.push(
        setTimeout(() => {
          if (this.isLoading) this._showThinkingIndicator(step.text);
        }, step.after),
      );
    });
  }

  _clearWaitingTimers() {
    (this._waitTimers || []).forEach(clearTimeout);
    this._waitTimers = [];
  }

  // Cancelar la petición en curso a pedido del usuario
  _stopResponse() {
    if (!this.isLoading || !this.activeRequest) return;
    this._stopRequested = true;
    this.activeRequest.abort();
  }

  _hideEmptyState() {
    this._hideSuggestions();
  }

  // Gestionar notificaciones visuales
  _showNotificationBadge() {
    if (!this.isOpen) {
      this.notificationBadge.classList.add("cb-visible");
    }
  }

  _clearNotificationBadge() {
    this.notificationBadge.classList.remove("cb-visible");
  }

  // Mostrar notificación flotante de error debajo del header
  _showErrorToast(message) {
    if (!this.toastContainer) return;

    const TOAST_DURATION_MS = 5000;
    const TOAST_EXIT_MS = 300;

    const toast = document.createElement("div");
    toast.className = "cb-toast";

    const icon = document.createElement("span");
    icon.className = "cb-toast-icon";
    icon.innerHTML = ICONS.warning;

    const text = document.createElement("span");
    text.className = "cb-toast-text";
    text.textContent = message;

    const closeBtn = document.createElement("button");
    closeBtn.className = "cb-toast-close";
    closeBtn.setAttribute("aria-label", "Cerrar notificación");
    closeBtn.innerHTML = ICONS.close;

    toast.appendChild(icon);
    toast.appendChild(text);
    toast.appendChild(closeBtn);
    this.toastContainer.appendChild(toast);

    let dismissTimer;
    const dismiss = () => {
      if (toast.dataset.dismissed) return;
      toast.dataset.dismissed = "true";
      clearTimeout(dismissTimer);
      toast.classList.remove("cb-toast--visible");
      setTimeout(() => toast.remove(), TOAST_EXIT_MS);
    };

    closeBtn.addEventListener("click", dismiss);
    dismissTimer = setTimeout(dismiss, TOAST_DURATION_MS);

    // Forzar reflow antes de animar la entrada
    requestAnimationFrame(() => toast.classList.add("cb-toast--visible"));
  }

  // Manejar envío de mensajes de texto
  async _handleSend() {
    const text = this.input.value.trim();
    const image = this.pendingImage;

    if ((!text && !image) || this.isLoading) return;

    // Limitar longitud del mensaje
    if (text.length > this.config.behavior.maxMessageLength) {
      this._showErrorToast(
        `El mensaje es demasiado largo. Por favor, usa menos de ${this.config.behavior.maxMessageLength} caracteres.`,
      );
      return;
    }

    // Advertir si falta la configuración del webhook
    if (!this.config.webhook.url) {
      this._showErrorToast(
        "El asistente no está disponible en este momento. Contacta al administrador del sitio.",
      );
      return;
    }

    // Bloquear entrada durante envío
    this.input.value = "";
    this._autoResizeTextarea();
    this._updateSendButtonState();

    // Delegar al flujo de envío de imagen si hay una adjunta
    if (image) {
      this._clearPendingImage();
      this._updateSendButtonState();
      this._addUserImageMessage(image, text);
      this._sendImageToWebhook(image, text);
      return;
    }

    // Insertar mensaje enviado en la interfaz
    const messageEl = this._addUserMessage(text);
    await this._requestBotReply(text, messageEl);
  }

  // Solicitar respuesta al webhook; si falla, marcar el mensaje para reintentar
  async _requestBotReply(text, messageEl) {
    this._setLoadingState(true);

    if (this.activeRequest) this.activeRequest.abort();
    this.activeRequest = new AbortController();
    this._startWaiting();

    try {
      const response = await sendMessage(
        this.config.webhook.url,
        text,
        this.sessionId,
        {},
        this.config.behavior.requestTimeout,
        this.activeRequest.signal,
        // Manejar eventos de progreso del webhook
        (intermediate) => {
          const indicator = this.typingIndicator.querySelector(
            ".cb-typing-indicator",
          );
          if (
            intermediate &&
            (intermediate.tool || intermediate.event) &&
            !indicator.classList.contains("cb-thinking")
          ) {
            this._showThinkingIndicator(
              this.config.bot.thinkingSteps?.[0]?.text || "Pensando…",
            );
          }
        },
      );

      // Procesar respuesta exitosa
      this._hideThinkingIndicator();

      if (response && response.output) {
        // Insertar respuesta final en el chat
        this._addBotMessage(response.output);

        if (!this.isOpen) {
          this._showNotificationBadge();
        }

        if (response.sessionId && response.sessionId !== this.sessionId) {
          this.sessionId = response.sessionId;
          setActiveSessionId(this.sessionId);
        }
      } else {
        this._showErrorToast(
          "No se pudo obtener una respuesta válida. Inténtalo de nuevo.",
        );
        this._markMessageFailed(messageEl, text);
      }
    } catch (error) {
      if (error.name === "AbortError") {
        if (this._stopRequested) {
          this._hideThinkingIndicator();
          this._markMessageFailed(messageEl, text, true);
        }
        return;
      }
      this._hideThinkingIndicator();
      this._showErrorToast(error.message || this.config.bot.offlineMessage);
      this._markMessageFailed(messageEl, text);
    } finally {
      this._setLoadingState(false);
      if (this.isOpen) this.input.focus();
    }
  }

  _markMessageFailed(messageEl, text, stopped = false) {
    if (!messageEl || !messageEl.isConnected) return;
    messageEl.querySelector(".cb-msg-failed")?.remove();
    if (!stopped) messageEl.classList.add("cb-message--failed");

    const row = document.createElement("div");
    row.className = stopped ? "cb-msg-failed cb-msg-failed--stopped" : "cb-msg-failed";

    const label = document.createElement("span");
    label.textContent = stopped ? "Respuesta detenida" : "No se pudo enviar";

    const retryBtn = document.createElement("button");
    retryBtn.className = "cb-msg-retry-btn";
    retryBtn.innerHTML = `${ICONS.retry}<span>Reintentar</span>`;
    retryBtn.addEventListener("click", () => {
      if (this.isLoading) return;
      row.remove();
      messageEl.classList.remove("cb-message--failed");
      this._requestBotReply(text, messageEl);
    });

    row.appendChild(label);
    row.appendChild(retryBtn);
    messageEl.appendChild(row);
    this._scrollToBottom();
  }

  // Actualizar estado general de la interfaz
  _setLoadingState(loading) {
    this.isLoading = loading;
    if (this.attachBtn) this.attachBtn.disabled = loading;

    this.sendBtn.classList.toggle("cb-is-stop", loading);
    this.sendBtn.innerHTML = loading ? ICONS.stop : ICONS.send;
    const label = loading ? "Detener respuesta" : "Enviar mensaje";
    this.sendBtn.setAttribute("aria-label", label);
    this.sendBtn.setAttribute("title", loading ? "Detener" : "");
    this._updateSendButtonState();
  }

  // Ajustar altura de la caja de texto automáticamente
  _autoResizeTextarea() {
    this.input.style.height = "auto";
    const maxHeight = 100; // ~4 líneas
    const scrollHeight = this.input.scrollHeight;
    this.input.style.height = `${Math.min(scrollHeight, maxHeight)}px`;
  }

  // Alternar visibilidad entre botón de envío y micrófono
  _updateSendButtonState() {
    if (this.isLoading) {
      this.sendBtn.classList.add("cb-visible");
      if (this.micBtn) this.micBtn.classList.remove("cb-visible");
      return;
    }
    const hasText = this.input.value.trim().length > 0;
    const hasImage = !!this.pendingImage;
    if (hasText || hasImage) {
      this.sendBtn.classList.add("cb-visible");
      if (this.micBtn) this.micBtn.classList.remove("cb-visible");
    } else {
      this.sendBtn.classList.remove("cb-visible");
      if (this.micBtn && this._audioSupported && !this.isRecording) {
        this.micBtn.classList.add("cb-visible");
      }
    }
  }

  // Controlar desplazamiento del historial de mensajes
  _scrollToBottom() {
    requestAnimationFrame(() => {
      this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    });
  }

  _isNearBottom(threshold = 80) {
    const c = this.messagesContainer;
    return c.scrollHeight - c.clientHeight - c.scrollTop < threshold;
  }

  // Mostrar u ocultar botón de desplazamiento rápido
  _handleScroll() {
    const container = this.messagesContainer;
    const threshold = 150; // px desde el fondo para mostrar el botón

    // Calcular distancia restante al fondo del contenedor
    const isScrolledUp =
      container.scrollHeight - container.clientHeight - container.scrollTop >
      threshold;
    const hasScrollbar = container.scrollHeight > container.clientHeight;

    const isHistoryActive =
      this.historyPanel && this.historyPanel.classList.contains("cb-is-active");

    if (isScrolledUp && hasScrollbar && !isHistoryActive) {
      this.scrollBottomBtn.classList.add("cb-visible");
    } else {
      this.scrollBottomBtn.classList.remove("cb-visible");
    }
  }

  // Insertar cadena en la posición actual del cursor
  _insertAtCursor(input, text) {
    const start = input.selectionStart;
    const end = input.selectionEnd;
    const value = input.value;

    input.value = value.substring(0, start) + text + value.substring(end);

    // Actualizar posición del cursor tras la inserción
    const newCursorPos = start + text.length;
    input.selectionStart = input.selectionEnd = newCursorPos;

    input.focus();

    // Actualizar estado de interfaz tras la edición
    this._autoResizeTextarea();
    this._updateSendButtonState();
  }

  // Funciones de utilidad internas

  // Combinar objetos de configuración de forma recursiva
  _mergeConfig(defaults, overrides) {
    const result = { ...defaults };
    for (const key in overrides) {
      if (
        overrides[key] !== null &&
        typeof overrides[key] === "object" &&
        !Array.isArray(overrides[key]) &&
        typeof defaults[key] === "object"
      ) {
        result[key] = this._mergeConfig(defaults[key], overrides[key]);
      } else if (overrides[key] !== undefined && overrides[key] !== null) {
        result[key] = overrides[key];
      }
    }
    return result;
  }

  // Reemplazar caracteres especiales HTML
  _escapeAttr(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  _darkenColor(hex, percent) {
    if (!hex || !hex.startsWith("#")) return hex;
    try {
      const num = parseInt(hex.replace("#", ""), 16);
      const r = Math.max(0, (num >> 16) - Math.round((255 * percent) / 100));
      const g = Math.max(
        0,
        ((num >> 8) & 0xff) - Math.round((255 * percent) / 100),
      );
      const b = Math.max(0, (num & 0xff) - Math.round((255 * percent) / 100));
      return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
    } catch (e) {
      return hex;
    }
  }

  // Gestionar funciones de grabación de voz

  // Alternar estado de grabación activa
  _handleMicClick(moveFocus = false) {
    if (this.isRecording) {
      this._stopRecording();
    } else {
      this._startRecording(moveFocus);
    }
  }

  // Inicializar proceso y componentes de grabación
  async _startRecording(moveFocus = false) {
    if (this.isLoading) return;

    this.audioRecorder = new AudioRecorder();

    // Desplegar interfaz de controles de grabación
    this._showRecordingUI(moveFocus);

    // Desplazar la onda: cada lectura de nivel entra por la derecha
    this.audioRecorder.onLevelChange = (level) => {
      this._pushRecordingLevel(level);
    };

    this.audioRecorder.onTick = (seconds) => {
      this._updateRecordingTime(seconds);
    };

    // Procesar archivo al finalizar la grabación
    this.audioRecorder.onComplete = (blob, duration) => {
      this._hideRecordingUI();
      this._addUserAudioMessage(blob, duration);
      this._sendAudioToWebhook(blob, duration, this.audioRecorder.mimeType);
    };

    // Manejar errores de captura de audio
    this.audioRecorder.onError = (msg) => {
      this._hideRecordingUI();
      this._showErrorToast(msg);
    };

    await this.audioRecorder.start();

    // Cancelar si no se pudo acceder al micrófono
    if (!this.audioRecorder.mediaRecorder) return;

    this.isRecording = true;
    if (this.micBtn) this.micBtn.classList.remove("cb-visible");
    this._recordingOverlay?.classList.add("cb-is-live");
    this._announceRecording("Grabando audio");
  }

  // Finalizar grabación y disparar procesamiento
  _stopRecording() {
    if (this.audioRecorder) {
      this.audioRecorder.stop();
    }
    this.isRecording = false;
  }

  // Abortar grabación descartando el audio
  _cancelRecording() {
    if (this.audioRecorder) {
      this.audioRecorder.cancel();
    }
    this.isRecording = false;
    this._hideRecordingUI();
    this._updateSendButtonState();
  }

  // Mostrar la UI de grabación sobre el área de input
  _showRecordingUI(moveFocus = false) {
    // Esconder controles estándar del área de texto
    this.input.style.visibility = "hidden";
    if (this.micBtn) this.micBtn.style.visibility = "hidden";
    if (this.attachBtn) this.attachBtn.disabled = true;
    if (this._recordingOverlay) return;

    const overlay = document.createElement("div");
    overlay.className = "cb-recording-ui";
    overlay.id = "cb-recording-ui";
    overlay.style.setProperty("--cb-rec-max", `${MAX_RECORDING_SECONDS}s`);

    const cancelBtn = document.createElement("button");
    cancelBtn.className = "cb-recording-cancel";
    cancelBtn.setAttribute("aria-label", "Descartar grabación");
    cancelBtn.title = "Descartar (Esc)";
    cancelBtn.innerHTML = ICONS.trash;
    cancelBtn.addEventListener("click", () => this._cancelRecording());

    const status = document.createElement("div");
    status.className = "cb-recording-status";
    status.innerHTML = `<span class="cb-recording-dot" aria-hidden="true"></span>`;
    const timer = document.createElement("span");
    timer.className = "cb-recording-timer";
    timer.textContent = this._formatClock(0);
    status.appendChild(timer);
    this._recordingTimer = timer;

    // Onda desplazable: barras de altura fija escaladas según el nivel
    const wave = document.createElement("div");
    wave.className = "cb-recording-wave";
    wave.setAttribute("aria-hidden", "true");
    this._recordingBars = [];
    this._recordingLevels = [];
    for (let i = 0; i < 48; i++) {
      const bar = document.createElement("span");
      bar.className = "cb-recording-bar";
      wave.appendChild(bar);
      this._recordingBars.push(bar);
      this._recordingLevels.push(0);
    }

    // Botón enviar con anillo que se completa al llegar al límite de duración
    const sendBtn = document.createElement("button");
    sendBtn.className = "cb-recording-send";
    sendBtn.setAttribute("aria-label", "Enviar audio");
    sendBtn.title = "Enviar (Enter)";
    sendBtn.innerHTML = `
      <svg class="cb-recording-ring" viewBox="0 0 40 40" aria-hidden="true">
        <circle class="cb-recording-ring-track" cx="20" cy="20" r="18.5"></circle>
        <circle class="cb-recording-ring-fill" cx="20" cy="20" r="18.5" pathLength="100"></circle>
      </svg>
      ${ICONS.send}`;
    sendBtn.addEventListener("click", () => this._stopRecording());
    this._recordingSendBtn = sendBtn;

    // Región para anunciar cambios de estado una sola vez
    const live = document.createElement("span");
    live.className = "cb-sr-only";
    live.setAttribute("aria-live", "polite");
    this._recordingLive = live;

    overlay.append(cancelBtn, status, wave, sendBtn, live);
    const composer =
      this.input.closest(".cb-composer") || this.input.parentElement;
    composer.appendChild(overlay);
    this._recordingOverlay = overlay;

    requestAnimationFrame(() => overlay.classList.add("cb-visible"));
    if (moveFocus) sendBtn.focus({ preventScroll: true });
  }

  _formatClock(seconds) {
    return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
  }

  _pushRecordingLevel(level) {
    if (!this._recordingBars) return;
    // Amplificar: el promedio espectral de la voz suele quedar bajo 0.3
    const value = Math.min(1, Math.pow(level * 3.2, 0.85));
    this._recordingLevels.shift();
    this._recordingLevels.push(value);
    this._recordingBars.forEach((bar, i) => {
      const v = this._recordingLevels[i];
      bar.style.transform = `scaleY(${Math.max(0.12, v)})`;
      bar.classList.toggle("cb-is-on", v > 0);
    });
  }

  _updateRecordingTime(seconds) {
    if (!this._recordingTimer) return;
    this._recordingTimer.textContent = this._formatClock(seconds);
    const remaining = MAX_RECORDING_SECONDS - seconds;
    const ending = remaining <= 5;
    if (ending && !this._recordingOverlay.classList.contains("cb-is-ending")) {
      this._recordingOverlay.classList.add("cb-is-ending");
      this._announceRecording(`Quedan ${remaining} segundos`);
    }
  }

  _announceRecording(text) {
    if (this._recordingLive) this._recordingLive.textContent = text;
  }

  // Destruir controles de grabación y restaurar interfaz
  _hideRecordingUI() {
    this.isRecording = false;
    this.input.style.visibility = "";
    if (this.micBtn) this.micBtn.style.visibility = "";
    if (this.attachBtn) this.attachBtn.disabled = false;

    if (this._recordingOverlay) {
      this._recordingOverlay.remove();
      this._recordingOverlay = null;
      this._recordingTimer = null;
      this._recordingBars = null;
      this._recordingLevels = null;
      this._recordingSendBtn = null;
      this._recordingLive = null;
    }
  }

  // Calcular picos reales del audio para dibujar la onda del reproductor
  async _getWaveformPeaks(blob, count) {
    try {
      const buffer = await blob.arrayBuffer();
      const ctx = new OfflineAudioContext(1, 1, 44100);
      const audio = await ctx.decodeAudioData(buffer);
      const data = audio.getChannelData(0);
      const size = Math.floor(data.length / count) || 1;
      const peaks = [];
      for (let i = 0; i < count; i++) {
        let sum = 0;
        for (let j = 0; j < size; j++) sum += Math.abs(data[i * size + j] || 0);
        peaks.push(sum / size);
      }
      const max = Math.max(...peaks) || 1;
      return peaks.map((p) => p / max);
    } catch {
      return null;
    }
  }

  // Insertar reproductor de mensaje de voz propio en el chat
  async _addUserAudioMessage(
    blob,
    duration,
    dateObj = new Date(),
    save = true,
  ) {
    this._hideEmptyState();
    this._checkDateDivider(dateObj);

    const message = document.createElement("div");
    message.className = "cb-message cb-message--user";

    const content = document.createElement("div");
    content.className = "cb-message-content cb-audio-player";

    // Generar URL temporal para archivo de audio
    const audioUrl = URL.createObjectURL(blob);
    const audio = new Audio(audioUrl);

    // Configurar control de reproducción
    const playBtn = document.createElement("button");
    playBtn.className = "cb-audio-play-btn";
    playBtn.setAttribute("aria-label", "Reproducir audio");
    playBtn.innerHTML = ICONS.audioPlay;

    // Construir onda en dos capas: base tenue y capa reproducida recortada según el avance
    const WAVE_BARS = 30;
    const wave = document.createElement("div");
    wave.className = "cb-audio-wave";
    wave.tabIndex = 0;
    wave.setAttribute("role", "slider");
    wave.setAttribute("aria-label", "Posición del audio");
    wave.setAttribute("aria-valuemin", "0");
    wave.setAttribute("aria-valuemax", String(Math.round(duration)));
    wave.setAttribute("aria-valuenow", "0");

    const baseLayer = document.createElement("div");
    baseLayer.className = "cb-audio-wave-layer";
    const playedLayer = document.createElement("div");
    playedLayer.className = "cb-audio-wave-layer cb-audio-wave-layer--played";
    playedLayer.setAttribute("aria-hidden", "true");
    const knob = document.createElement("span");
    knob.className = "cb-audio-knob";
    knob.setAttribute("aria-hidden", "true");

    const bars = [];
    for (let i = 0; i < WAVE_BARS; i++) {
      // Altura provisional hasta decodificar el audio
      const h = (0.3 + 0.25 * Math.abs(Math.sin(i * 1.7))).toFixed(2);
      for (const layer of [baseLayer, playedLayer]) {
        const bar = document.createElement("span");
        bar.className = "cb-audio-wave-bar";
        bar.style.setProperty("--h", h);
        layer.appendChild(bar);
        bars.push(bar);
      }
    }
    wave.append(baseLayer, playedLayer, knob);

    this._getWaveformPeaks(blob, WAVE_BARS).then((peaks) => {
      if (!peaks) return;
      // Escala perceptual para que los tramos suaves no queden planos
      peaks.forEach((p, i) => {
        const h = Math.max(0.18, Math.sqrt(p)).toFixed(2);
        bars[i * 2].style.setProperty("--h", h);
        bars[i * 2 + 1].style.setProperty("--h", h);
      });
    });

    const getTotal = () => (isFinite(audio.duration) ? audio.duration : duration);
    const render = () => {
      const total = getTotal();
      const pct = total ? Math.min(100, (audio.currentTime / total) * 100) : 0;
      wave.style.setProperty("--p", `${pct}%`);
      wave.setAttribute("aria-valuenow", String(Math.floor(audio.currentTime)));
      wave.setAttribute(
        "aria-valuetext",
        `${this._formatClock(Math.floor(audio.currentTime))} de ${this._formatClock(Math.round(total))}`,
      );
    };

    // Animar el avance a 60 fps mientras suena; timeupdate solo llega ~4 veces por segundo
    let rafId = null;
    const loop = () => {
      render();
      rafId = requestAnimationFrame(loop);
    };

    const seekTo = (seconds) => {
      const total = getTotal();
      audio.currentTime = Math.max(0, Math.min(total, seconds));
      wave.classList.add("cb-is-started");
      render();
    };

    // Arrastrar o hacer clic sobre la onda para buscar
    const seekFromPointer = (e) => {
      const rect = wave.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      seekTo(ratio * getTotal());
    };
    wave.addEventListener("pointerdown", (e) => {
      wave.setPointerCapture(e.pointerId);
      wave.classList.add("cb-is-seeking");
      seekFromPointer(e);
    });
    wave.addEventListener("pointermove", (e) => {
      if (wave.hasPointerCapture(e.pointerId)) seekFromPointer(e);
    });
    const endSeek = () => wave.classList.remove("cb-is-seeking");
    wave.addEventListener("pointerup", endSeek);
    wave.addEventListener("pointercancel", endSeek);

    wave.addEventListener("keydown", (e) => {
      const step = { ArrowRight: 2, ArrowUp: 2, ArrowLeft: -2, ArrowDown: -2 }[e.key];
      if (step) {
        e.preventDefault();
        seekTo(audio.currentTime + step);
      } else if (e.key === "Home" || e.key === "End") {
        e.preventDefault();
        seekTo(e.key === "Home" ? 0 : getTotal());
      } else if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        playBtn.click();
      }
    });

    // Control de velocidad a la derecha de la onda
    const RATES = [1, 1.5, 2];
    let rateIndex = 0;
    const speedBtn = document.createElement("button");
    speedBtn.className = "cb-audio-speed";
    const updateSpeed = () => {
      const rate = RATES[rateIndex];
      speedBtn.textContent = `${rate}×`;
      speedBtn.setAttribute("aria-label", `Velocidad de reproducción ${rate}x`);
      audio.playbackRate = rate;
    };
    updateSpeed();
    speedBtn.addEventListener("click", () => {
      rateIndex = (rateIndex + 1) % RATES.length;
      updateSpeed();
    });


    // Sincronizar estado del reproductor con interfaz visual
    let isPlaying = false;

    playBtn.addEventListener("click", () => {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(() => {});
      }
    });

    const setPlaying = (playing) => {
      isPlaying = playing;
      content.classList.toggle("cb-is-playing", playing);
      playBtn.innerHTML = playing ? ICONS.audioPause : ICONS.audioPlay;
      playBtn.setAttribute(
        "aria-label",
        playing ? "Pausar audio" : "Reproducir audio",
      );
      cancelAnimationFrame(rafId);
      if (playing) loop();
    };

    audio.addEventListener("play", () => {
      // Pausar cualquier otro audio de la conversación antes de reproducir este
      if (this._activeAudio && this._activeAudio !== audio) {
        this._activeAudio.pause();
      }
      this._activeAudio = audio;
      audio.playbackRate = RATES[rateIndex];
      wave.classList.add("cb-is-started");
      setPlaying(true);
    });

    audio.addEventListener("pause", () => {
      if (this._activeAudio === audio) this._activeAudio = null;
      setPlaying(false);
      render();
    });

    audio.addEventListener("ended", () => {
      if (this._activeAudio === audio) this._activeAudio = null;
      setPlaying(false);
      audio.currentTime = 0;
      wave.classList.remove("cb-is-started");
      wave.style.setProperty("--p", "0%");
    });

    content.append(playBtn, wave, speedBtn);
    message.appendChild(content);

    if (this.config.behavior.showTimestamps) {
      const time = document.createElement("span");
      time.className = "cb-message-time";
      time.textContent = this._getTimeString(dateObj);
      message.appendChild(time);
    }

    this.messagesContainer.insertBefore(message, this.typingIndicator);
    this.messageCount++;

    if (save) {
      try {
        const base64Audio = await blobToBase64(blob);
        this.chatHistory.push({
          role: "user",
          isAudio: true,
          audioData: base64Audio,
          duration: duration,
          date: dateObj.toISOString(),
        });
        saveChatHistory(this.chatHistory, this.sessionId);
        saveSessionToIndex(
          this.sessionId,
          this._getHistoryTitle(),
          this.chatHistory.length,
        );
      } catch (err) {
        console.error("Error guardando historial de audio", err);
      }
    }

    this._scrollToBottom();
  }

  // Transmitir archivo de audio al servidor
  async _sendAudioToWebhook(blob, duration, mimeType) {
    if (this.activeRequest) this.activeRequest.abort();
    this.activeRequest = new AbortController();

    this._setLoadingState(true);
    this._startWaiting("Escuchando…");

    try {
      const result = await sendAudioMessage(
        this.config.webhook.url,
        blob,
        this.sessionId,
        duration,
        mimeType,
        {},
        this.config.behavior.requestTimeout,
        this.activeRequest.signal,
      );

      if (result.sessionId && result.sessionId !== this.sessionId) {
        this.sessionId = result.sessionId;
        setActiveSessionId(this.sessionId);
      }

      if (result.event === "thinking") {
        // Ignorar evento de pensamiento y esperar respuesta
        return;
      }

      this._addBotMessage(result.output || "");
    } catch (error) {
      if (error.name === "AbortError") {
        if (this._stopRequested) this._hideThinkingIndicator();
        return;
      }
      this._hideThinkingIndicator();
      this._showErrorToast(
        error.message || "Error al procesar el audio. Inténtalo de nuevo.",
      );
    } finally {
      this._setLoadingState(false);
      this._updateSendButtonState();
      this.activeRequest = null;
      if (this.isOpen) this.input.focus();
    }
  }

  // Gestionar adjuntos de imagen

  // Validar y guardar la imagen elegida por el usuario
  _handleFileSelected(e) {
    const file = e.target.files && e.target.files[0];
    // Permitir volver a elegir el mismo archivo más adelante
    e.target.value = "";

    if (!file) return;
    this._processAttachedImage(file);
  }

  // Capturar imágenes pegadas con Ctrl+V (p. ej. una captura de pantalla)
  _handlePaste(e) {
    if (this.isLoading || this.isRecording) return;

    const items = e.clipboardData && e.clipboardData.items;
    if (!items) return;

    for (const item of items) {
      if (item.kind === "file" && item.type.startsWith("image/")) {
        const file = item.getAsFile();
        if (file) {
          // Evitar que el navegador pegue el nombre del archivo como texto
          e.preventDefault();
          this._processAttachedImage(file);
        }
        break;
      }
    }
  }

  // Configurar arrastrar y soltar una imagen sobre la ventana del chat
  _initDropZone() {
    let dragCounter = 0;
    let internalDrag = false;

    // Bloquear el arrastre de avatares y marcar arrastres originados dentro del widget
    this.shadowRoot.addEventListener("dragstart", (e) => {
      if (
        e.target.closest?.(
          ".cb-avatar, .cb-msg-avatar, .cb-agent-intro-avatar, .cb-launcher-btn",
        )
      ) {
        e.preventDefault();
        return;
      }
      internalDrag = true;
    });
    this.shadowRoot.addEventListener("dragend", () => {
      internalDrag = false;
    });

    // Aceptar solo archivos traídos desde fuera, no imágenes del propio chat
    const isFileDrag = (e) =>
      !internalDrag &&
      e.dataTransfer &&
      Array.from(e.dataTransfer.types || []).includes("Files");

    this.window.addEventListener("dragenter", (e) => {
      if (!isFileDrag(e) || this.isLoading || this.isRecording) return;
      e.preventDefault();
      dragCounter++;
      this.dropzoneOverlay.classList.add("cb-visible");
    });

    this.window.addEventListener("dragover", (e) => {
      if (!isFileDrag(e) || this.isLoading || this.isRecording) return;
      // Prevenir el comportamiento por defecto del navegador (abrir el archivo)
      e.preventDefault();
      e.dataTransfer.dropEffect = "copy";
    });

    this.window.addEventListener("dragleave", () => {
      dragCounter = Math.max(0, dragCounter - 1);
      if (dragCounter === 0)
        this.dropzoneOverlay.classList.remove("cb-visible");
    });

    this.window.addEventListener("drop", (e) => {
      if (!isFileDrag(e)) return;
      e.preventDefault();
      dragCounter = 0;
      this.dropzoneOverlay.classList.remove("cb-visible");

      if (this.isLoading || this.isRecording) return;
      const files = Array.from(e.dataTransfer.files || []);
      if (!files.length) return;

      // Delegar la validación de tipo/tamaño a _processAttachedImage (mismo camino que el botón "+")
      const file = files.find((f) => f.type.startsWith("image/")) || files[0];
      this._processAttachedImage(file);
    });
  }

  // Validar una imagen (de archivo o portapapeles) y dejarla lista para enviar
  _processAttachedImage(file) {
    const type = (file.type || "").toLowerCase();
    const name = (file.name || "").toLowerCase();

    // Rechazar video, incluso si llega con un tipo MIME no estándar
    if (
      type.startsWith("video/") ||
      /\.(mp4|mov|avi|webm|mkv|3gp)$/.test(name)
    ) {
      this._showErrorToast("No se permiten archivos de video.");
      return;
    }

    // Rechazar GIF explícitamente: el análisis de imágenes del bot no lo soporta
    if (type === "image/gif" || name.endsWith(".gif")) {
      this._showErrorToast(
        "Los archivos GIF no son compatibles. Usa JPG, PNG o WEBP.",
      );
      return;
    }

    if (!type.startsWith("image/")) {
      this._showErrorToast("Solo se permiten archivos de imagen.");
      return;
    }

    const maxMB = this.config.behavior.maxImageSizeMB || 5;
    if (file.size > maxMB * 1024 * 1024) {
      this._showErrorToast(
        `La imagen supera el tamaño máximo permitido (${maxMB}MB).`,
      );
      return;
    }

    this.pendingImage = file;
    this._showAttachmentPreview(file);
    this._updateSendButtonState();
    this.input.focus();
  }

  // Mostrar miniatura de la imagen adjunta sobre el input
  _showAttachmentPreview(file) {
    if (this._attachmentPreviewUrl) {
      URL.revokeObjectURL(this._attachmentPreviewUrl);
    }
    const url = URL.createObjectURL(file);
    this._attachmentPreviewUrl = url;

    this.attachmentThumb.style.backgroundImage = `url("${url}")`;
    this.attachmentName.textContent = file.name || "Imagen";
    this.attachmentName.title = file.name || "";
    const type = (file.type.split("/")[1] || "imagen").replace("jpeg", "jpg");
    this.attachmentMeta.textContent = `${type.toUpperCase()} · ${this._formatFileSize(file.size)}`;
    this.attachmentPreview.classList.add("cb-visible");
    this.attachmentPreview.setAttribute("aria-hidden", "false");
  }

  // Descartar la imagen adjunta pendiente de envío
  _formatFileSize(bytes) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1).replace(".", ",")} MB`;
  }

  _clearPendingImage() {
    this.pendingImage = null;
    if (this._attachmentPreviewUrl) {
      URL.revokeObjectURL(this._attachmentPreviewUrl);
      this._attachmentPreviewUrl = null;
    }
    if (this.attachmentThumb) this.attachmentThumb.style.backgroundImage = "";
    if (this.attachmentName) this.attachmentName.textContent = "";
    if (this.attachmentPreview) {
      this.attachmentPreview.classList.remove("cb-visible");
      this.attachmentPreview.setAttribute("aria-hidden", "true");
    }
  }

  // Insertar imagen enviada por el usuario en el chat
  async _addUserImageMessage(
    fileOrBlob,
    caption = "",
    dateObj = new Date(),
    save = true,
  ) {
    if (this.activeTyping) this.activeTyping.complete();
    this._hideEmptyState();
    this._checkDateDivider(dateObj);

    const message = document.createElement("div");
    message.className = "cb-message cb-message--user";

    const content = document.createElement("div");
    content.className = "cb-message-content cb-image-message";

    // Mostrar la imagen mediante una URL temporal de objeto
    // No revocar la URL tras la carga: el lightbox reabre este mismo blob al hacer clic
    const imageUrl = URL.createObjectURL(fileOrBlob);
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = caption || "Imagen enviada";
    img.className = "cb-image-message-img";
    img.loading = "lazy";
    content.appendChild(img);

    if (caption) {
      const captionEl = document.createElement("p");
      captionEl.className = "cb-image-message-caption";
      captionEl.textContent = caption;
      content.appendChild(captionEl);
    }

    message.appendChild(content);

    if (this.config.behavior.showTimestamps) {
      const time = document.createElement("span");
      time.className = "cb-message-time";
      time.textContent = this._getTimeString(dateObj);
      message.appendChild(time);
    }

    this.messagesContainer.insertBefore(message, this.typingIndicator);
    this.messageCount++;

    if (save) {
      try {
        const base64Image = await blobToBase64(fileOrBlob);
        this.chatHistory.push({
          role: "user",
          isImage: true,
          imageData: base64Image,
          mimeType: fileOrBlob.type || "image/*",
          fileName: fileOrBlob.name || "",
          caption: caption || "",
          date: dateObj.toISOString(),
        });
        saveChatHistory(this.chatHistory, this.sessionId);
        saveSessionToIndex(
          this.sessionId,
          this._getHistoryTitle(),
          this.chatHistory.length,
        );
      } catch (err) {
        console.error("Error guardando historial de imagen", err);
      }
    }

    this._scrollToBottom();
  }

  // Transmitir archivo de imagen al servidor
  async _sendImageToWebhook(file, caption) {
    if (this.activeRequest) this.activeRequest.abort();
    this.activeRequest = new AbortController();

    this._setLoadingState(true);
    this._startWaiting("Analizando imagen…");

    try {
      const result = await sendImageMessage(
        this.config.webhook.url,
        file,
        this.sessionId,
        caption,
        {},
        this.config.behavior.requestTimeout,
        this.activeRequest.signal,
      );

      if (result.sessionId && result.sessionId !== this.sessionId) {
        this.sessionId = result.sessionId;
        setActiveSessionId(this.sessionId);
      }

      this._addBotMessage(result.output || "");
    } catch (error) {
      if (error.name === "AbortError") {
        if (this._stopRequested) this._hideThinkingIndicator();
        return;
      }
      this._hideThinkingIndicator();
      this._showErrorToast(
        error.message || "Error al procesar la imagen. Inténtalo de nuevo.",
      );
    } finally {
      this._setLoadingState(false);
      this.activeRequest = null;
      if (this.isOpen) this.input.focus();
    }
  }

  // Obtener título para el índice derivado del primer mensaje de usuario
  _getHistoryTitle() {
    const firstUserMsg = this.chatHistory.find((m) => m.role === "user");
    return firstUserMsg ? firstUserMsg.text : "Conversación 1";
  }

  // Formatear fecha relativa para ítems de historial
  _formatRelativeDate(dateStr) {
    const dateObj = new Date(dateStr);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    let hours = dateObj.getHours();
    const minutes = dateObj.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "p.m." : "a.m.";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const timeStr = `${hours.toString().padStart(2, "0")}:${minutes} ${ampm}`;

    if (dateObj.toDateString() === today.toDateString()) {
      return `Hoy, ${timeStr}`;
    } else if (dateObj.toDateString() === yesterday.toDateString()) {
      return `Ayer, ${timeStr}`;
    } else {
      const day = dateObj.getDate().toString().padStart(2, "0");
      const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
      const year = dateObj.getFullYear();
      return `${day}/${month}/${year}, ${timeStr}`;
    }
  }

  // Abrir o cerrar el dropdown de acciones del header
  _toggleActionsMenu() {
    const isOpen =
      this.actionsMenu && !this.actionsMenu.classList.contains("cb-is-hidden");
    if (isOpen) {
      this._closeActionsMenu();
    } else {
      this.actionsMenu.classList.remove("cb-is-hidden");
      this.actionsBtn.setAttribute("aria-expanded", "true");
    }
  }

  // Cerrar el dropdown de acciones del header
  _closeActionsMenu() {
    if (this.actionsMenu) {
      this.actionsMenu.classList.add("cb-is-hidden");
      this.actionsBtn.setAttribute("aria-expanded", "false");
    }
  }

  // Alternar visibilidad del panel de historial
  _toggleHistoryPanel(moveFocus = false) {
    if (this.historyPanel.classList.contains("cb-is-active")) {
      this._closeHistoryPanel();
    } else {
      this._openHistoryPanel(moveFocus);
    }
  }

  // Abrir panel de historial con transición
  _openHistoryPanel(moveFocus = false) {
    // Usar offsetTop para que sea inmune al movimiento de la ventana; el panel
    // ocupa hasta el borde inferior porque el input de mensajes queda oculto
    const top = this.messagesContainer.offsetTop;

    this.historyPanel.style.top = `${top}px`;
    this.historyPanel.style.bottom = "0px";

    this._renderHistoryPanel();

    // Animar la entrada solo al abrir, no en cada re-render tras eliminar
    clearTimeout(this._historyEnterTimer);
    this.historyList.classList.add("cb-is-entering");
    this._historyEnterTimer = setTimeout(
      () => this.historyList.classList.remove("cb-is-entering"),
      600,
    );

    this.historyPanel.classList.add("cb-is-active");
    this.historyPanel.setAttribute("aria-hidden", "false");
    this.messagesContainer.classList.add("cb-history-active");
    this.window.classList.add("cb-history-open");
    if (this.actionsBtn) this.actionsBtn.classList.add("cb-is-active");
    if (moveFocus) this.headerBackBtn.focus({ preventScroll: true });

    if (this.scrollBottomBtn) {
      this.scrollBottomBtn.classList.remove("cb-visible");
    }
  }

  // Cerrar panel de historial
  _closeHistoryPanel() {
    this.historyPanel.classList.remove("cb-is-active");
    this.historyPanel.setAttribute("aria-hidden", "true");
    this.messagesContainer.classList.remove("cb-history-active");
    this.window.classList.remove("cb-history-open");
    if (this.actionsBtn) this.actionsBtn.classList.remove("cb-is-active");

    // Restaurar estado del botón de scroll si es necesario
    this._handleScroll();
  }

  // Renderizar la lista de sesiones guardadas agrupadas por fecha
  _renderHistoryPanel() {
    const sessions = getSessionsIndex();
    const hasOtherSessions = sessions.some(
      (s) => s.sessionId !== this.sessionId,
    );

    this.historyList.innerHTML = "";
    this.historyFooter?.classList.toggle("cb-is-hidden", !hasOtherSessions);

    if (sessions.length === 0) {
      const empty = document.createElement("div");
      empty.className = "cb-history-empty";
      empty.innerHTML = `
        <div class="cb-history-empty-icon">${ICONS.chatEmpty}</div>
        <p class="cb-history-empty-title">Aún no tienes conversaciones</p>
        <p class="cb-history-empty-sub">Tus chats aparecerán aquí</p>
      `;
      this.historyList.appendChild(empty);
      return;
    }

    // Agrupar por fecha
    const now = new Date();
    const startOfToday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
    );
    const startOfYesterday = new Date(startOfToday);
    startOfYesterday.setDate(startOfYesterday.getDate() - 1);
    const startOfWeek = new Date(startOfToday);
    startOfWeek.setDate(startOfWeek.getDate() - 7);

    const groups = [
      { label: "Hoy", items: [] },
      { label: "Ayer", items: [] },
      { label: "Últimos 7 días", items: [] },
      { label: "Anteriores", items: [] },
    ];

    sessions.forEach((session) => {
      const d = new Date(session.lastUserMessageAt || session.lastMessageAt);
      const dayStart = new Date(d.getFullYear(), d.getMonth(), d.getDate());
      if (dayStart >= startOfToday) groups[0].items.push(session);
      else if (dayStart >= startOfYesterday) groups[1].items.push(session);
      else if (dayStart >= startOfWeek) groups[2].items.push(session);
      else groups[3].items.push(session);
    });

    let index = 0;
    groups.forEach((group) => {
      if (group.items.length === 0) return;

      const section = document.createElement("div");
      section.className = "cb-history-group";
      section.setAttribute("role", "group");

      const label = document.createElement("div");
      label.className = "cb-history-group-label";
      label.id = `cb-history-group-${group.label.replace(/\s+/g, "-")}`;
      label.textContent = group.label;
      section.setAttribute("aria-labelledby", label.id);
      section.appendChild(label);

      group.items.forEach((session) => {
        const item = this._buildHistoryItem(
          session,
          session.sessionId === this.sessionId,
        );
        item.style.setProperty("--cb-item-delay", `${Math.min(index, 8) * 30}ms`);
        index++;
        section.appendChild(item);
      });

      this.historyList.appendChild(section);
    });
  }

  // Convertir el último mensaje del bot en una vista previa de una línea, sin markdown ni emojis
  _getHistoryPreview(sessionId) {
    const history = getHistoryBySessionId(sessionId);
    const lastBotMsg = [...history].reverse().find((m) => m.role === "bot");
    if (!lastBotMsg || !lastBotMsg.text) return "";
    return lastBotMsg.text
      .replace(/```[\s\S]*?```/g, " ")
      .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1")
      .replace(/^\s*(?:[-*+]|\d+[.)])\s+/gm, "")
      .replace(/^\s*#{1,6}\s+/gm, "")
      .replace(/[*_~`>|]/g, "")
      .replace(/[\p{Extended_Pictographic}\uFE0F\u200D]/gu, "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 160);
  }

  // Formatear la hora del ítem de forma compacta según su antigüedad
  _formatHistoryTime(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    const startOfToday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
    );
    const diffDays = Math.floor(
      (startOfToday - new Date(date.getFullYear(), date.getMonth(), date.getDate())) /
        86400000,
    );

    if (diffDays <= 0) return this._getTimeString(date);
    if (diffDays === 1) return "Ayer";
    if (diffDays < 7) {
      const weekday = date.toLocaleDateString("es", { weekday: "short" });
      return weekday.charAt(0).toUpperCase() + weekday.slice(1).replace(".", "");
    }
    return date
      .toLocaleDateString("es", {
        day: "numeric",
        month: "short",
        ...(date.getFullYear() !== now.getFullYear() && { year: "numeric" }),
      })
      .replace(".", "");
  }

  // Construir un ítem de historial individual
  _buildHistoryItem(session, isActive = false) {
    const item = document.createElement("div");
    item.className = isActive
      ? "cb-history-item cb-history-item--active"
      : "cb-history-item";
    item.setAttribute("role", "button");
    item.setAttribute("tabindex", isActive ? "-1" : "0");
    if (isActive) {
      item.setAttribute("aria-current", "true");
      item.setAttribute("aria-disabled", "true");
    }
    item.dataset.sessionId = session.sessionId;

    const dateStr = session.lastUserMessageAt || session.lastMessageAt;
    const previewText = this._getHistoryPreview(session.sessionId);
    const countText =
      session.messageCount === 1
        ? "1 mensaje"
        : `${session.messageCount} mensajes`;
    const tooltip = `${this._formatRelativeDate(dateStr)} · ${countText}`;

    item.innerHTML = `
      <div class="cb-history-item-content">
        <div class="cb-history-item-title-row">
          <span class="cb-history-item-title">${this._escapeAttr(session.title)}</span>
          <time class="cb-history-item-time" datetime="${this._escapeAttr(dateStr)}" title="${this._escapeAttr(tooltip)}">${this._escapeAttr(this._formatHistoryTime(dateStr))}</time>
          ${
            isActive
              ? ""
              : `<button class="cb-history-item-delete" aria-label="Eliminar conversación" title="Eliminar conversación">${ICONS.trash}</button>`
          }
        </div>
        ${previewText ? `<div class="cb-history-item-preview">${this._escapeAttr(previewText)}</div>` : ""}
      </div>
    `;
    item.setAttribute(
      "aria-label",
      `${session.title}${isActive ? " (conversación actual)" : ""}, ${tooltip}`,
    );

    if (isActive) return item;

    item.addEventListener("click", (e) => {
      if (e.target.closest(".cb-history-item-delete")) {
        e.stopPropagation();
        this._confirmDeleteSession(session.sessionId, item, e.detail === 0);
      } else if (!item.classList.contains("cb-history-item--confirming")) {
        this._loadSession(session.sessionId);
      }
    });

    item.addEventListener("keydown", (e) => {
      if (e.target !== item) return;
      if (
        (e.key === "Enter" || e.key === " ") &&
        !item.classList.contains("cb-history-item--confirming")
      ) {
        e.preventDefault();
        this._loadSession(session.sessionId);
      }
      if (
        e.key === "Escape" &&
        item.classList.contains("cb-history-item--confirming")
      ) {
        this._cancelDeleteSession(item);
      }
    });

    return item;
  }

  // Mostrar confirmación inline antes de eliminar
  _confirmDeleteSession(sessionId, item, moveFocus = false) {
    if (item.classList.contains("cb-history-item--confirming")) return;
    item.classList.add("cb-history-item--confirming");

    const confirmEl = document.createElement("div");
    confirmEl.className = "cb-history-item-confirm";
    confirmEl.innerHTML = `
      <span class="cb-history-item-confirm-text">¿Eliminar esta conversación?</span>
      <div class="cb-history-item-confirm-actions">
        <button class="cb-history-item-confirm-no">Cancelar</button>
        <button class="cb-history-item-confirm-yes">Eliminar</button>
      </div>
    `;

    item.appendChild(confirmEl);

    confirmEl
      .querySelector(".cb-history-item-confirm-yes")
      .addEventListener("click", (e) => {
        e.stopPropagation();
        this._deleteSession(sessionId, item);
      });

    confirmEl
      .querySelector(".cb-history-item-confirm-no")
      .addEventListener("click", (e) => {
        e.stopPropagation();
        this._cancelDeleteSession(item);
      });

    if (moveFocus) {
      setTimeout(
        () => confirmEl.querySelector(".cb-history-item-confirm-no").focus(),
        0,
      );
    }
  }

  // Cancelar confirmación de borrado
  _cancelDeleteSession(item) {
    item.classList.remove("cb-history-item--confirming");
    const confirmEl = item.querySelector(".cb-history-item-confirm");
    if (confirmEl) confirmEl.remove();
  }

  // Cargar una conversación seleccionada
  async _loadSession(sessionId) {
    if (this.isLoading) return;

    // Guardar el estado de la sesión actual antes de cambiar
    if (this.chatHistory && this.chatHistory.length > 0) {
      saveSessionToIndex(
        this.sessionId,
        this._getHistoryTitle(),
        this.chatHistory.length,
      );
    }

    this.sessionId = sessionId;
    this.chatHistory = getHistoryBySessionId(sessionId);

    this._clearMessages();

    if (this.chatHistory && this.chatHistory.length > 0) {
      await this._loadHistory();
    } else {
      this._showWelcomeMessage();
    }

    this._closeHistoryPanel();

    // Guardar el sessionId activo en localStorage
    setActiveSessionId(sessionId);

    this.input.focus();
  }

  // Eliminar una sesión con animación de barrido
  _deleteSession(sessionId, itemEl) {
    const doDelete = () => {
      deleteSessionFromIndex(sessionId);
      if (sessionId === this.sessionId) {
        this._startNewChat();
      } else {
        this._renderHistoryPanel();
      }
    };

    if (itemEl) {
      itemEl.classList.remove("cb-history-item--confirming");
      const confirmEl = itemEl.querySelector(".cb-history-item-confirm");
      if (confirmEl) confirmEl.remove();
      itemEl.classList.add("cb-history-item--removing");
      itemEl.addEventListener("animationend", doDelete, { once: true });
    } else {
      doDelete();
    }
  }

  // Mostrar el modal de confirmación de borrado total sobre el chat
  _openClearAllModal(fromKeyboard = false) {
    if (!this.clearAllOverlay) return;
    const count = getSessionsIndex().filter(
      (s) => s.sessionId !== this.sessionId,
    ).length;
    this.shadowRoot.getElementById("cb-clear-all-desc").textContent =
      `Se eliminará${count === 1 ? " 1 conversación" : `n ${count} conversaciones guardadas`}. La conversación actual se conserva.`;
    this.clearAllOverlay.classList.remove("cb-is-hidden");
    this.clearAllOverlay.setAttribute("aria-hidden", "false");
    // Forzar reflow para que la transición de entrada se anime
    void this.clearAllOverlay.offsetWidth;
    this.clearAllOverlay.classList.add("cb-is-active");
    // Llevar el foco al diálogo; al botón solo con teclado para no mostrar el anillo tras un clic
    setTimeout(
      () =>
        (fromKeyboard ? this.clearAllCancelBtn : this.clearAllDialog)?.focus(),
      0,
    );
  }

  // Cerrar el modal de confirmación de borrado total
  _closeClearAllModal() {
    if (
      !this.clearAllOverlay ||
      !this.clearAllOverlay.classList.contains("cb-is-active")
    )
      return;
    this.clearAllOverlay.classList.remove("cb-is-active");
    this.clearAllOverlay.setAttribute("aria-hidden", "true");
    const onTransitionEnd = (e) => {
      if (e.target !== this.clearAllOverlay) return;
      this.clearAllOverlay.classList.add("cb-is-hidden");
      this.clearAllOverlay.removeEventListener(
        "transitionend",
        onTransitionEnd,
      );
    };
    this.clearAllOverlay.addEventListener("transitionend", onTransitionEnd);
    if (this.historyClearBtn) this.historyClearBtn.focus();
  }

  // Eliminar todas las conversaciones con animación escalonada
  _clearAllSessions() {
    const sessions = getSessionsIndex().filter(
      (s) => s.sessionId !== this.sessionId,
    );
    const items = Array.from(
      this.historyList.querySelectorAll(
        ".cb-history-item:not(.cb-history-item--active)",
      ),
    );

    // Ocultar footer inmediatamente para evitar doble render
    if (this.historyFooter) this.historyFooter.classList.add("cb-is-hidden");

    // Desvanecer etiquetas de grupo
    this.historyList
      .querySelectorAll(".cb-history-group-label")
      .forEach((label) => {
        label.style.transition = "opacity 0.15s ease";
        label.style.opacity = "0";
      });

    if (items.length === 0) {
      sessions.forEach((s) => deleteSessionFromIndex(s.sessionId));
      this._renderHistoryPanel();
      return;
    }

    // Animar cada ítem con escalonado
    items.forEach((item, i) => {
      item.style.setProperty("--cb-swipe-delay", `${i * 42}ms`);
      item.classList.add("cb-history-item--removing");
    });

    // Esperar al último ítem y luego borrar + re-renderizar
    items[items.length - 1].addEventListener(
      "animationend",
      () => {
        sessions.forEach((s) => deleteSessionFromIndex(s.sessionId));
        this._renderHistoryPanel();
      },
      { once: true },
    );
  }
}

// Ejecutar script de arranque automático
function initChatBubble() {
  if (window.__chatBubbleInstance) return;

  // Extraer parámetros de configuración del elemento script
  const scriptTag =
    document.currentScript ||
    document.querySelector('script[src*="chat-bubble"]');

  const scriptConfig = {};
  if (scriptTag) {
    const webhook = scriptTag.getAttribute("data-webhook");
    const botName = scriptTag.getAttribute("data-bot-name");
    const color = scriptTag.getAttribute("data-primary-color");
    const position = scriptTag.getAttribute("data-position");

    if (webhook) scriptConfig.webhook = { url: webhook };
    if (botName) scriptConfig.bot = { name: botName };
    if (color) scriptConfig.style = { primaryColor: color };
    if (position)
      scriptConfig.style = {
        ...(scriptConfig.style || {}),
        position,
      };
  }

  // Fusionar configuración global sobre parámetros HTML
  const config = Object.assign({}, scriptConfig, window.ChatBubbleConfig || {});
  if (scriptConfig.webhook && window.ChatBubbleConfig?.webhook) {
    config.webhook = Object.assign(
      {},
      scriptConfig.webhook,
      window.ChatBubbleConfig.webhook,
    );
  }
  if (scriptConfig.bot && window.ChatBubbleConfig?.bot) {
    config.bot = Object.assign(
      {},
      scriptConfig.bot,
      window.ChatBubbleConfig.bot,
    );
  }
  if (scriptConfig.style && window.ChatBubbleConfig?.style) {
    config.style = Object.assign(
      {},
      scriptConfig.style,
      window.ChatBubbleConfig.style,
    );
  }
  window.__chatBubbleInstance = new ChatBubble(config);

  // Registrar métodos públicos en objeto global
  window.ChatBubble = {
    open: () => window.__chatBubbleInstance._openChat(),
    close: () => window.__chatBubbleInstance._closeChat(),
    toggle: () => window.__chatBubbleInstance._toggleChat(),
    newChat: () => window.__chatBubbleInstance._startNewChat(),
    sendMessage: (text) => {
      if (window.__chatBubbleInstance) {
        window.__chatBubbleInstance.input.value = text;
        window.__chatBubbleInstance._handleSend();
      }
    },
    getSessionId: () => window.__chatBubbleInstance?.sessionId,
    destroy: () => {
      if (window.__chatBubbleInstance) {
        window.__chatBubbleInstance.activeRequest?.abort();
        window.removeEventListener(
          "resize",
          window.__chatBubbleInstance._onWindowResize,
        );
        // Eliminar componente completo del DOM
        document.getElementById("chat-bubble-host")?.remove();
        window.__chatBubbleInstance = null;
      }
    },
  };
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initChatBubble);
} else {
  initChatBubble();
}
