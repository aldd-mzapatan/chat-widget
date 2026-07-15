var J=`/* Inicializar estilos principales */

/* Declarar variables de dise\xF1o (colores, sombras, medidas) */
:host {
  --cb-primary: #572b86;
  --cb-primary-hover: #401d66;
  --cb-primary-text: #ffffff;
  --cb-primary-glow: rgba(87, 43, 134, 0.35);
  --cb-primary-soft: rgba(87, 43, 134, 0.12);
  --cb-link-color: var(--cb-primary);
  --cb-badge-bg: var(--cb-primary-soft);
  --cb-badge-text: var(--cb-primary);
  --cb-badge-border: rgba(87, 43, 134, 0.35);

  --cb-bg: #ffffff;
  --cb-bg-secondary: #f6f5fa;
  --cb-attachment-bg: #e6e3ef;
  --cb-bg-header: #572b86;
  --cb-text: #1a1025;
  --cb-text-secondary: #7c6d94;
  --cb-border: rgba(87, 43, 134, 0.14);
  --cb-border-strong: rgba(87, 43, 134, 0.28);

  --cb-user-bubble: #572b86;
  --cb-user-text: #ffffff;
  --cb-bot-bubble: #ffffff;
  --cb-bot-text: #1a1025;

  --cb-error-bubble: #fecdd3;
  --cb-error-text: #be123c;
  --cb-error-border: rgba(190, 18, 60, 0.35);

  --cb-shadow: 0 16px 48px rgba(0, 0, 0, 0.15), 0 2px 12px rgba(0, 0, 0, 0.06);
  --cb-shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
  --cb-shadow-launcher:
    0 8px 28px rgba(87, 43, 134, 0.45), 0 2px 8px rgba(0, 0, 0, 0.1);

  /* Colores sem\xE1nticos de estado */
  --cb-success: #22c55e;
  --cb-online: #4ade80;
  --cb-danger: #ef4444;
  --cb-danger-bg: #fef2f2;
  --cb-danger-soft: rgba(239, 68, 68, 0.3);

  /* Bloques de c\xF3digo */
  --cb-code-bg: #12101e;
  --cb-code-text: #e2e0f0;
  --cb-code-border: rgba(87, 43, 134, 0.2);
  --cb-font-mono: "Fira Code", "Cascadia Code", "Consolas", monospace;

  /* Botones de la cabecera (capas blancas sobre el degradado primario) */
  --cb-header-btn-hover: rgba(255, 255, 255, 0.18);
  --cb-header-btn-active: rgba(255, 255, 255, 0.26);
  --cb-header-btn-highlight: rgba(255, 255, 255, 0.25);

  /* Curvas de animaci\xF3n con rebote el\xE1stico */
  --cb-ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --cb-ease-out-spring: cubic-bezier(0.34, 1.2, 0.64, 1);
  --cb-ease-standard: cubic-bezier(0.4, 0, 0.2, 1);

  /* Duraciones de transici\xF3n de la ventana */
  --cb-duration-window: 0.28s;
  --cb-duration-resize: 0.2s;

  /* Dimensiones de componentes */
  --cb-launcher-offset: 24px;
  --cb-header-avatar-size: 32px;
  --cb-header-btn-size: 32px;
  --cb-msg-avatar-size: 28px;
  --cb-input-btn-size: 34px;
  --cb-send-btn-size: 38px;
  --cb-icon-size-sm: 18px;
  --cb-icon-size-md: 26px;

  /* Radios y tama\xF1os tipogr\xE1ficos adicionales */
  --cb-radius-input: 16px;
  --cb-font-size-header: 15.5px;
  --cb-font-size-msg: 14px;
  --cb-font-size-input: 13.5px;

  --cb-radius: 18px;
  --cb-radius-sm: 10px;
  --cb-radius-bubble: 20px;
  --cb-window-width: 410px;
  --cb-window-height: 690px;
  --cb-launcher-size: 52px;
  --cb-spacing: 16px;
  --cb-font:
    system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial,
    sans-serif;
  --cb-transition: 0.22s var(--cb-ease-standard);
  --cb-z-index: 9999;

  --cb-scrollbar-width: 3px;
  --cb-scrollbar-color: rgba(87, 43, 134, 0.25);
  --cb-scrollbar-track: transparent;
  --cb-shimmer-gradient: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(87, 43, 134, 0.08) 35%,
    rgba(87, 43, 134, 0.16) 50%,
    rgba(87, 43, 134, 0.08) 65%,
    rgba(255, 255, 255, 0) 100%
  );
  --cb-thinking-highlight: var(--cb-primary);
  --cb-thinking-gradient: linear-gradient(
    90deg,
    rgba(124, 109, 148, 0.45) 0%,
    rgba(124, 109, 148, 0.45) 35%,
    var(--cb-thinking-highlight) 50%,
    rgba(124, 109, 148, 0.45) 65%,
    rgba(124, 109, 148, 0.45) 100%
  );
}

/* Aplicar esquema de colores oscuro */
@media (prefers-color-scheme: dark) {
  :host {
    --cb-bg: #1c1528;
    --cb-bg-secondary: #141020;
    --cb-attachment-bg: #2e2540;
    --cb-link-color: #c4a6f5;
    --cb-text: #f0ecf8;
    --cb-text-secondary: #9b8fb0;
    --cb-border: rgba(87, 43, 134, 0.18);
    --cb-border-strong: rgba(87, 43, 134, 0.35);
    --cb-bot-bubble: #221b32;
    --cb-bot-text: #ede9f5;
    --cb-error-bubble: #2a0a14;
    --cb-error-text: #fb7185;
    --cb-error-border: rgba(251, 113, 133, 0.2);
    --cb-danger-bg: #2a0a14;
    --cb-badge-bg: rgba(196, 166, 245, 0.18);
    --cb-badge-text: #c4a6f5;
    --cb-badge-border: rgba(196, 166, 245, 0.4);
    --cb-shadow:
      0 16px 48px rgba(0, 0, 0, 0.45), 0 2px 12px rgba(0, 0, 0, 0.25);
    --cb-scrollbar-color: rgba(87, 43, 134, 0.3);
    --cb-shimmer-gradient: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(143, 98, 201, 0.08) 35%,
      rgba(143, 98, 201, 0.18) 50%,
      rgba(143, 98, 201, 0.08) 65%,
      rgba(255, 255, 255, 0) 100%
    );
    --cb-thinking-highlight: #ffffff;
    --cb-thinking-gradient: linear-gradient(
      90deg,
      rgba(155, 143, 176, 0.45) 0%,
      rgba(155, 143, 176, 0.45) 35%,
      var(--cb-thinking-highlight) 50%,
      rgba(155, 143, 176, 0.45) 65%,
      rgba(155, 143, 176, 0.45) 100%
    );
  }
}

/* Aplicar esquema de colores claro */
:host-context([data-theme="light"]),
#chat-bubble-window[data-theme="light"] {
  --cb-bg: #ffffff;
  --cb-bg-secondary: #f6f5fa;
  --cb-attachment-bg: #e6e3ef;
  --cb-link-color: var(--cb-primary);
  --cb-text: #1a1025;
  --cb-text-secondary: #7c6d94;
  --cb-border: rgba(87, 43, 134, 0.14);
  --cb-border-strong: rgba(87, 43, 134, 0.28);
  --cb-bot-bubble: #ffffff;
  --cb-bot-text: #1a1025;
  --cb-error-bubble: #fecdd3;
  --cb-error-text: #be123c;
  --cb-error-border: rgba(190, 18, 60, 0.35);
  --cb-danger-bg: #fef2f2;
  --cb-badge-bg: var(--cb-primary-soft);
  --cb-badge-text: var(--cb-primary);
  --cb-badge-border: rgba(87, 43, 134, 0.35);
  --cb-shadow: 0 16px 48px rgba(0, 0, 0, 0.15), 0 2px 12px rgba(0, 0, 0, 0.06);
  --cb-scrollbar-color: rgba(87, 43, 134, 0.25);
  --cb-shimmer-gradient: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(87, 43, 134, 0.08) 35%,
    rgba(87, 43, 134, 0.16) 50%,
    rgba(87, 43, 134, 0.08) 65%,
    rgba(255, 255, 255, 0) 100%
  );
  --cb-thinking-highlight: var(--cb-primary);
  --cb-thinking-gradient: linear-gradient(
    90deg,
    rgba(124, 109, 148, 0.45) 0%,
    rgba(124, 109, 148, 0.45) 35%,
    var(--cb-thinking-highlight) 50%,
    rgba(124, 109, 148, 0.45) 65%,
    rgba(124, 109, 148, 0.45) 100%
  );
}

/* Forzar esquema de colores oscuro */
:host-context([data-theme="dark"]),
#chat-bubble-window[data-theme="dark"] {
  --cb-bg: #1c1528;
  --cb-bg-secondary: #141020;
  --cb-attachment-bg: #2e2540;
  --cb-link-color: #c4a6f5;
  --cb-text: #f0ecf8;
  --cb-text-secondary: #9b8fb0;
  --cb-border: rgba(87, 43, 134, 0.18);
  --cb-border-strong: rgba(87, 43, 134, 0.35);
  --cb-bot-bubble: #221b32;
  --cb-bot-text: #ede9f5;
  --cb-error-bubble: #2a0a14;
  --cb-error-text: #fb7185;
  --cb-error-border: rgba(251, 113, 133, 0.2);
  --cb-danger-bg: #2a0a14;
  --cb-badge-bg: rgba(196, 166, 245, 0.18);
  --cb-badge-text: #c4a6f5;
  --cb-badge-border: rgba(196, 166, 245, 0.4);
  --cb-shadow: 0 16px 48px rgba(0, 0, 0, 0.45), 0 2px 12px rgba(0, 0, 0, 0.25);
  --cb-scrollbar-color: rgba(87, 43, 134, 0.3);
  --cb-shimmer-gradient: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(143, 98, 201, 0.08) 35%,
    rgba(143, 98, 201, 0.18) 50%,
    rgba(143, 98, 201, 0.08) 65%,
    rgba(255, 255, 255, 0) 100%
  );
  --cb-thinking-highlight: #ffffff;
  --cb-thinking-gradient: linear-gradient(
    90deg,
    rgba(155, 143, 176, 0.45) 0%,
    rgba(155, 143, 176, 0.45) 35%,
    var(--cb-thinking-highlight) 50%,
    rgba(155, 143, 176, 0.45) 65%,
    rgba(155, 143, 176, 0.45) 100%
  );
}

/* Normalizar m\xE1rgenes globales */
:where(#chat-bubble-launcher, #chat-bubble-window),
:where(#chat-bubble-launcher, #chat-bubble-window) :where(*) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#chat-bubble-launcher,
#chat-bubble-window {
  font-family: var(--cb-font);
  font-size: 14px;
  line-height: 1.5;
  color: var(--cb-text);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Estilizar bot\xF3n lanzador principal */
#chat-bubble-launcher {
  position: fixed;
  bottom: var(--cb-launcher-offset);
  right: var(--cb-launcher-offset);
  z-index: var(--cb-z-index);
  --cb-drag-x: 0px;
  transform: translate3d(var(--cb-drag-x), 0, 0);
  transition: transform var(--cb-duration-window) var(--cb-ease-out-spring);
}

#chat-bubble-launcher.cb-is-dragging {
  transition: none !important;
}

#chat-bubble-launcher.cb-position--left {
  right: auto;
  left: var(--cb-launcher-offset);
}

.cb-launcher-btn {
  width: var(--cb-launcher-size);
  height: var(--cb-launcher-size);
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: var(--cb-primary);
  color: var(--cb-primary-text);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 7px 24px rgba(87, 43, 134, 0.42),
    0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  position: relative;
  overflow: visible;
  animation: cb-launcher-breathe 3s ease-in-out infinite;
}

/* Pausar la respiraci\xF3n mientras el chat est\xE1 abierto: solo tiene sentido llamar la atenci\xF3n con el chat cerrado */
.cb-launcher-btn.cb-is-open {
  animation-play-state: paused;
}

/* Aura que respira: pulsa un anillo exterior con color primario sin escalar el bot\xF3n */
@keyframes cb-launcher-breathe {
  0%,
  100% {
    box-shadow:
      0 7px 24px rgba(87, 43, 134, 0.42),
      0 2px 8px rgba(0, 0, 0, 0.08),
      0 0 0 0 rgba(87, 43, 134, 0.3);
  }
  50% {
    box-shadow:
      0 7px 24px rgba(87, 43, 134, 0.42),
      0 2px 8px rgba(0, 0, 0, 0.08),
      0 0 12px 4px rgba(87, 43, 134, 0.3);
  }
}

/* Efecto de zoom sutil al pasar el cursor \u2014 entrada y salida gestionadas por transition */
.cb-launcher-btn:hover {
  transform: scale(1.08);
}

.cb-launcher-btn:active {
  transform: scale(0.94);
}

.cb-icon-chat,
.cb-icon-close {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    transform 0.35s cubic-bezier(0.34, 1.4, 0.64, 1),
    opacity 0.2s;
}

.cb-icon-chat {
  overflow: hidden;
  border-radius: 50%;
}

.cb-launcher-btn svg {
  width: var(--cb-icon-size-md);
  height: var(--cb-icon-size-md);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15));
}

.cb-launcher-avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  pointer-events: none;
}

.cb-launcher-btn .cb-icon-chat {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}
.cb-launcher-btn .cb-icon-close {
  opacity: 0;
  transform: scale(0) rotate(-90deg);
}
.cb-launcher-btn.cb-is-open .cb-icon-chat {
  opacity: 0;
  transform: scale(0) rotate(90deg);
}
.cb-launcher-btn.cb-is-open .cb-icon-close {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}

/* Configurar estrellas IA (sparkles) como elementos decorativos alrededor del bot\xF3n */
.cb-sparkle {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  opacity: 0;
  z-index: 10;
  will-change: transform, opacity;
  animation-fill-mode: both;
}

.cb-sparkle svg {
  display: block;
  filter: drop-shadow(0 0 3px currentColor) drop-shadow(0 0 6px currentColor);
}

/* Posicionar arriba-derecha */
.cb-sparkle--1 {
  width: 16px;
  height: 16px;
  top: -9px;
  right: -4px;
  color: #e879f9;
  animation: cb-sparkle-pro 3.6s 0s ease-in-out infinite;
  animation-fill-mode: both;
}

/* Posicionar abajo-izquierda */
.cb-sparkle--3 {
  width: 9px;
  height: 9px;
  bottom: -6px;
  left: 1px;
  color: #c084fc;
  animation: cb-sparkle-pro 3.6s 1.2s ease-in-out infinite;
  animation-fill-mode: both;
}

/* Posicionar abajo-derecha */
.cb-sparkle--5 {
  width: 11px;
  height: 11px;
  bottom: -4px;
  right: -3px;
  color: #c084fc;
  animation: cb-sparkle-pro 3.6s 2.4s ease-in-out infinite;
  animation-fill-mode: both;
}

@keyframes cb-sparkle-pro {
  0% {
    opacity: 0;
    transform: scale(0.3) rotate(-10deg);
  }
  15% {
    opacity: 0;
    transform: scale(0.3) rotate(-10deg);
  }
  40% {
    opacity: 0.95;
    transform: scale(1.15) rotate(15deg);
  }
  60% {
    opacity: 0.7;
    transform: scale(1) rotate(8deg);
  }
  80% {
    opacity: 0;
    transform: scale(0.4) rotate(20deg);
  }
  100% {
    opacity: 0;
    transform: scale(0.3) rotate(-10deg);
  }
}

/* Aplicar hover con aceleraci\xF3n sutil sin filtros adicionales */
.cb-launcher-btn:hover .cb-sparkle--1 {
  animation-duration: 1.4s;
}
.cb-launcher-btn:hover .cb-sparkle--3 {
  animation-duration: 1.6s;
}
.cb-launcher-btn:hover .cb-sparkle--5 {
  animation-duration: 1.2s;
}

/* Configurar estado abierto: apagar sparkles y detener su animaci\xF3n (no solo ocultarla) */
.cb-launcher-btn.cb-is-open .cb-sparkle {
  opacity: 0 !important;
  animation-play-state: paused;
  transition: opacity 0.18s ease;
}

/* Configurar indicador visual de notificaciones nuevas */
.cb-notification-badge {
  position: absolute;
  top: -1px;
  right: -1px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: var(--cb-success);
  display: none;
  z-index: 2;
}

.cb-notification-badge.cb-visible {
  display: block;
}

/* Configurar contenedor principal del chat */
#chat-bubble-window {
  position: fixed;
  bottom: calc(var(--cb-launcher-offset) + var(--cb-launcher-size) + 14px);
  right: var(--cb-launcher-offset);
  width: var(--cb-window-width);
  height: var(--cb-window-height);
  background: var(--cb-bg);
  border-radius: var(--cb-radius);
  box-shadow: var(--cb-shadow);
  border: none;
  display: flex;
  flex-direction: column;
  z-index: var(--cb-z-index);
  overflow: hidden;

  opacity: 0;
  --cb-drag-x: 0px;
  transform: translate3d(var(--cb-drag-x), 24px, 0) scale(0.94);
  pointer-events: none;
  transition:
    opacity var(--cb-duration-window) ease-out,
    transform var(--cb-duration-window) var(--cb-ease-out-spring),
    width var(--cb-duration-resize) var(--cb-ease-standard),
    height var(--cb-duration-resize) var(--cb-ease-standard);
  transform-origin: bottom right;
}

#chat-bubble-window.cb-position--left {
  right: auto;
  left: var(--cb-launcher-offset);
  transform-origin: bottom left;
}

#chat-bubble-window.cb-is-open {
  opacity: 1;
  transform: translate3d(var(--cb-drag-x), 0, 0) scale(1);
  pointer-events: all;
}

#chat-bubble-window.cb-is-dragging {
  transition: none !important;
}

/* Estilizar \xE1rea para redimensionar ventana */
.cb-resize-handle {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 14px;
  cursor: ns-resize;
  z-index: 10;
  background: transparent;
  touch-action: none;
  -webkit-user-select: none;
  user-select: none;
}

/* Dise\xF1ar barra superior de informaci\xF3n */
.cb-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px var(--cb-spacing);
  background-image:
    radial-gradient(
      ellipse 55% 130% at 78% 50%,
      rgba(255, 255, 255, 0.12) 0%,
      transparent 65%
    ),
    linear-gradient(
      100deg,
      var(--cb-primary-hover) 0%,
      #633397 18%,
      #783eb5 25%,
      #633397 32%,
      var(--cb-primary-hover) 50%,
      #633397 68%,
      #783eb5 75%,
      #633397 82%,
      var(--cb-primary-hover) 100%
    );
  background-repeat: no-repeat;
  background-size:
    100% 100%,
    450% 100%;
  background-position:
    0% 0%,
    0% 0%;
  color: var(--cb-primary-text);
  flex-shrink: 0;
  border-radius: var(--cb-radius) var(--cb-radius) 0 0;
  position: relative;
  overflow: visible;
  cursor: move;
  -webkit-user-select: none;
  user-select: none;
  touch-action: none;
  /* Correr animaci\xF3n solo cuando el chat est\xE1 abierto (ver .cb-is-open) para no repintar en la p\xE1gina anfitriona mientras nadie lo ve */
  animation: cb-header-gradient-flow 8s linear infinite paused;
}

/* Reanudar la animaci\xF3n del degradado \xFAnicamente con el chat abierto */
#chat-bubble-window.cb-is-open .cb-header {
  animation-play-state: running;
}

/* Animar en bucle continuo */
@keyframes cb-header-gradient-flow {
  0% {
    background-position:
      0% 0%,
      0% 0%;
  }
  100% {
    background-position:
      0% 0%,
      64.2857% 0%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cb-header {
    animation: none;
    background-position:
      0% 0%,
      50% 0%;
  }

  .cb-launcher-btn,
  .cb-sparkle--1,
  .cb-sparkle--3,
  .cb-sparkle--5,
  .cb-typing-indicator:not(.cb-thinking) span,
  .cb-recording-dot {
    animation: none;
  }

  .cb-streaming-cursor {
    animation: none;
    opacity: 1;
  }

  .cb-thinking-text {
    animation: none;
    background: none;
    -webkit-text-fill-color: var(--cb-text-secondary);
    color: var(--cb-text-secondary);
  }
}

.cb-header-info {
  display: flex;
  align-items: center;
  gap: 11px;
  position: relative;
  z-index: 1;
}

.cb-avatar {
  width: var(--cb-header-avatar-size);
  height: var(--cb-header-avatar-size);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.cb-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cb-avatar svg {
  width: 21px;
  height: 21px;
  color: white;
}

.cb-bot-name {
  display: block;
  font-family: var(--cb-font);
  font-weight: 700;
  font-size: var(--cb-font-size-header);
  line-height: 1.2;
  letter-spacing: -0.01em;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.cb-status {
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: var(--cb-font);
  font-size: 11px;
  font-weight: 400;
  opacity: 0.72;
  margin-top: 2px;
}

.cb-header-actions {
  display: flex;
  align-items: center;
  gap: 2px;
  position: relative;
  z-index: 1;
}

.cb-toggle-size-btn,
.cb-actions-btn,
.cb-close-window-btn {
  width: var(--cb-header-btn-size);
  height: var(--cb-header-btn-size);
  border-radius: 9px;
  border: none;
  cursor: pointer;
  background: rgba(255, 255, 255, 0);
  color: rgba(255, 255, 255, 0.82);
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background var(--cb-transition),
    color var(--cb-transition),
    transform 0.2s;
}

.cb-toggle-size-btn:hover,
.cb-actions-btn:hover,
.cb-close-window-btn:hover {
  background: var(--cb-header-btn-hover);
  color: white;
}

.cb-toggle-size-btn:active,
.cb-actions-btn:active,
.cb-close-window-btn:active {
  background: var(--cb-header-btn-active);
}

.cb-toggle-size-btn svg,
.cb-actions-btn svg,
.cb-close-window-btn svg {
  width: var(--cb-icon-size-sm);
  height: var(--cb-icon-size-sm);
}

/* Dise\xF1ar dropdown de acciones del header */
.cb-actions-dropdown {
  position: relative;
}

.cb-actions-menu {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  min-width: 220px;
  background: var(--cb-bg);
  border-radius: var(--cb-radius);
  box-shadow: var(--cb-shadow);
  padding: 4px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.cb-actions-menu.cb-is-hidden {
  display: none;
}

.cb-actions-menu-item {
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  padding: 9px 12px;
  border: none;
  border-radius: calc(var(--cb-radius) - 4px);
  background: transparent;
  color: var(--cb-text, #1a1a2e);
  font-size: 0.875rem;
  font-family: var(--cb-font, inherit);
  text-align: left;
  cursor: pointer;
  transition: background var(--cb-transition);
}

.cb-actions-menu-item:hover {
  background: var(--cb-primary-soft);
}

.cb-actions-menu-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--cb-icon-size-sm);
  height: var(--cb-icon-size-sm);
  flex-shrink: 0;
  color: var(--cb-text-secondary);
}

.cb-actions-menu-icon svg {
  width: var(--cb-icon-size-sm);
  height: var(--cb-icon-size-sm);
}

/* Posicionar notificaciones flotantes justo debajo del header */
.cb-toast-container {
  position: absolute;
  top: 100%;
  left: 12px;
  right: 12px;
  margin-top: 10px;
  z-index: 30;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  pointer-events: none;
  cursor: default;
}

/* Dise\xF1ar tarjeta individual de notificaci\xF3n de error */
.cb-toast {
  display: flex;
  align-items: center;
  gap: 9px;
  max-width: 100%;
  width: fit-content;
  padding: 11px 12px;
  background: var(--cb-error-bubble);
  color: var(--cb-error-text);
  border: 1px solid var(--cb-error-border);
  border-radius: var(--cb-radius);
  box-shadow: var(--cb-shadow-sm);
  font-family: var(--cb-font);
  font-size: 13px;
  line-height: 1.45;
  pointer-events: auto;

  opacity: 0;
  transform: translateY(-6px) scale(0.97);
  transition:
    opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cb-toast.cb-toast--visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.cb-toast-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--cb-error-text);
}

.cb-toast-icon svg {
  width: 15px;
  height: 15px;
}

.cb-toast-text {
  flex: 1;
  min-width: 0;
  text-align: center;
  word-break: break-word;
  overflow-wrap: break-word;
}

.cb-toast-close {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: var(--cb-error-text);
  opacity: 0.65;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    opacity var(--cb-transition),
    background var(--cb-transition);
}

.cb-toast-close:hover {
  opacity: 1;
  background: rgba(0, 0, 0, 0.06);
}

.cb-toast-close svg {
  width: 12px;
  height: 12px;
}

/* Configurar \xE1rea de desplazamiento de mensajes */
.cb-messages {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 18px 14px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: var(--cb-bg-secondary);
  transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);

  /* Aplicar fondo */
  background-image:
    radial-gradient(
      circle at 20% 20%,
      rgba(87, 43, 134, 0.04) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 80%,
      rgba(87, 43, 134, 0.03) 0%,
      transparent 50%
    );

  scrollbar-width: thin;
  scrollbar-color: var(--cb-scrollbar-color) var(--cb-scrollbar-track);
}

.cb-messages::-webkit-scrollbar {
  width: var(--cb-scrollbar-width);
}
.cb-messages::-webkit-scrollbar-track {
  background: var(--cb-scrollbar-track);
}
.cb-messages::-webkit-scrollbar-thumb {
  background: var(--cb-scrollbar-color);
  border-radius: 100px;
}
.cb-messages::-webkit-scrollbar-thumb:hover {
  background: rgba(87, 43, 134, 0.45);
}

/* Aplicar estilos base y animaci\xF3n a las burbujas */
.cb-message {
  display: flex;
  flex-direction: column;
  max-width: 80%;
  animation: cb-message-appear 0.35s ease-out both;
}

@keyframes cb-message-appear {
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.cb-message--bot {
  align-self: stretch;
  align-items: flex-start;
  max-width: 100%;
  width: 100%;
  flex-direction: row;
  gap: 8px;
}

/* Estilizar imagen de perfil del asistente */
.cb-msg-avatar {
  width: var(--cb-msg-avatar-size);
  height: var(--cb-msg-avatar-size);
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  margin-top: 2px;
  background: rgba(87, 43, 134, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
}

.cb-msg-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cb-msg-avatar svg {
  width: 16px;
  height: 16px;
  color: var(--cb-primary);
}

/* Alinear contenedor de mensaje y marca de tiempo */
.cb-msg-col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  min-width: 0;
}

/* Envolver la burbuja para que el bot\xF3n de responder se ancle a su ancho real */
.cb-msg-bubble-row {
  position: relative;
  display: flex;
  max-width: 92%;
}
.cb-message--user {
  align-self: flex-end;
  align-items: flex-end;
}

/* Configurar padding y tipograf\xEDa del contenido del mensaje */
.cb-message-content {
  padding: 12px 16px;
  word-break: break-word;
  overflow-wrap: break-word;
  font-size: var(--cb-font-size-msg);
  line-height: 1.5;
  font-weight: 400;
}

/* Dise\xF1ar burbuja de respuesta del asistente */
.cb-message--bot .cb-message-content {
  max-width: 100%;
  background: var(--cb-bot-bubble);
  color: var(--cb-bot-text);
  border-radius: 24px;
  box-shadow: none;
  /*border: 1px solid var(--cb-border);*/
  /*padding-left: 16px;*/
}

/* Dise\xF1ar burbuja de mensaje del usuario */
.cb-message--user .cb-message-content {
  background: var(--cb-primary);
  color: var(--cb-user-text);
  border-radius: 24px;
  box-shadow: none;
}

/* Formatear indicador de hora de env\xEDo */
.cb-message-time {
  font-size: 10.5px;
  color: var(--cb-text-secondary);
  margin-top: 4px;
  padding: 0 5px;
  opacity: 0.5;
  letter-spacing: 0.015em;
  font-weight: 500;
}

/* Formatear elementos HTML generados desde Markdown */
.cb-message-content .cb-paragraph {
  margin: 0 0 9px;
}
.cb-message-content .cb-paragraph:last-child {
  margin-bottom: 0;
}
.cb-message-content .cb-list {
  margin: 7px 0;
  padding-left: 18px;
}
.cb-message-content .cb-list li {
  margin-bottom: 4px;
  line-height: 1.45;
}
.cb-message-content .cb-list li .cb-paragraph {
  margin-bottom: 3px;
}
.cb-message-content .cb-list li .cb-paragraph:last-child {
  margin-bottom: 0;
}
.cb-li-hidden {
  display: none !important;
}
.cb-message-content .cb-heading {
  font-weight: 700;
  margin: 9px 0 5px;
  line-height: 1.3;
}
.cb-message-content h1.cb-heading {
  font-size: 16px;
}
.cb-message-content h2.cb-heading {
  font-size: 15px;
}
.cb-message-content h3.cb-heading {
  font-size: 14px;
}

/* Formatear l\xEDnea separadora horizontal */
.cb-message-content .cb-hr {
  border: none;
  border-top: 1px solid var(--cb-border);
  margin: 12px 0;
}

.cb-message--user .cb-hr {
  border-top-color: rgba(255, 255, 255, 0.25);
}

.cb-message-content .cb-code-block {
  background: var(--cb-code-bg);
  color: var(--cb-code-text);
  border-radius: 11px;
  padding: 11px 13px;
  margin: 9px 0;
  overflow-x: auto;
  font-size: 12px;
  line-height: 1.6;
  font-family: var(--cb-font-mono);
  white-space: pre;
  border: 1px solid var(--cb-code-border);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.cb-message-content .cb-inline-code {
  background: rgba(87, 43, 134, 0.1);
  color: var(--cb-link-color);
  padding: 2px 6px;
  border-radius: 5px;
  font-size: 12.5px;
  font-family: var(--cb-font-mono);
  border: 1px solid rgba(87, 43, 134, 0.15);
}

.cb-message--user .cb-inline-code {
  background: rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.95);
  border-color: rgba(255, 255, 255, 0.15);
}

.cb-message-content .cb-link {
  color: var(--cb-link-color);
  text-decoration: underline;
  text-decoration-color: rgba(87, 43, 134, 0.4);
  text-underline-offset: 3px;
  font-weight: 500;
  word-break: break-all;
  transition: text-decoration-color 0.15s;
}

.cb-message-content .cb-link:hover {
  text-decoration-color: var(--cb-link-color);
}

.cb-message--user .cb-link {
  color: rgba(255, 255, 255, 0.92);
  text-decoration-color: rgba(255, 255, 255, 0.4);
}

/* Configurar animaci\xF3n de estado escribiendo */
.cb-typing-wrapper {
  display: none;
}

.cb-typing-wrapper.cb-visible {
  display: flex;
}

.cb-typing-indicator {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 13px 16px;
  background: var(--cb-bot-bubble);
  border-radius: 18px;
  align-self: flex-start;
  animation: cb-message-appear 0.25s ease-out both;
}

.cb-typing-indicator:not(.cb-thinking) span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--cb-primary);
  opacity: 0.35;
  animation: cb-typing-bounce 1.3s infinite ease-in-out;
}

.cb-typing-indicator:not(.cb-thinking) span:nth-child(1) {
  animation-delay: 0s;
}
.cb-typing-indicator:not(.cb-thinking) span:nth-child(2) {
  animation-delay: 0.18s;
}
.cb-typing-indicator:not(.cb-thinking) span:nth-child(3) {
  animation-delay: 0.36s;
}

@keyframes cb-typing-bounce {
  0%,
  60%,
  100% {
    transform: translateY(0);
    opacity: 0.35;
  }
  30% {
    transform: translateY(-7px);
    opacity: 1;
  }
}

/* Animar cursor durante el efecto de escritura */
.cb-streaming-cursor {
  display: inline-block;
  width: 6px;
  height: 15px;
  background: var(--cb-primary);
  margin-left: 4px;
  border-radius: 1px;
  animation: cb-cursor-blink 0.7s infinite alternate ease-in-out;
  vertical-align: middle;
}

@keyframes cb-cursor-blink {
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
}

/* Dise\xF1ar zona inferior de composici\xF3n de texto */
.cb-input-area {
  display: flex;
  align-items: flex-end;
  gap: 9px;
  padding: 10px 12px 13px;
  background: var(--cb-bg);
  border-top: 1px solid var(--cb-border);
  flex-shrink: 0;
  position: relative;
}

/* A\xF1adir borde sutil sobre el \xE1rea de entrada */
.cb-input-area::before {
  content: "";
  position: absolute;
  top: 0;
  left: 20px;
  right: 20px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(87, 43, 134, 0.15),
    transparent
  );
}

#cb-input {
  flex: 1;
  border: none;
  border-radius: var(--cb-radius-input);
  padding: 9px 14px;
  font-family: var(--cb-font);
  font-size: var(--cb-font-size-input);
  font-weight: 400;
  line-height: 1.5;
  color: var(--cb-text);
  background: var(--cb-bg-secondary);
  resize: none;
  outline: none;
  min-height: 38px;
  max-height: 110px;
  overflow-y: auto;
  transition:
    border-color var(--cb-transition),
    box-shadow var(--cb-transition),
    background var(--cb-transition);
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-font-smoothing: antialiased;
}

#cb-input::-webkit-scrollbar {
  display: none;
}

#cb-input::placeholder {
  color: var(--cb-text-secondary);
  opacity: 0.65;
  font-weight: 400;
}

#cb-input:focus {
  outline: none;
  box-shadow: none;
}

#cb-input:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

#cb-send-btn {
  width: var(--cb-send-btn-size);
  height: var(--cb-send-btn-size);
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: var(--cb-primary);
  color: white;
  display: none;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.25s var(--cb-ease-spring);
  position: relative;
  overflow: hidden;
}

#cb-send-btn.cb-visible {
  display: flex;
  animation: cb-pop-in 0.25s var(--cb-ease-spring) both;
}

@keyframes cb-pop-in {
  0% {
    transform: scale(0.6);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

#cb-send-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

#cb-send-btn svg {
  width: var(--cb-icon-size-sm);
  height: var(--cb-icon-size-sm);
  margin-left: 0;
  transition: transform 0.2s;
}

/* Dise\xF1ar vista de presentaci\xF3n inicial del asistente */
.cb-agent-intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 28px 20px 20px;
  gap: 10px;
  flex-shrink: 0;
}

.cb-agent-intro-avatar {
  position: relative;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  overflow: hidden;
  background: rgba(87, 43, 134, 0.1);
  border: none;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.cb-agent-intro-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cb-agent-intro-avatar svg {
  width: 36px;
  height: 36px;
  color: var(--cb-primary);
}

/* Mostrar video en bucle al pasar el cursor sobre el avatar de presentaci\xF3n */
.cb-agent-intro-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  pointer-events: none;
}

.cb-agent-intro-avatar.cb-is-playing img {
  opacity: 0;
}

.cb-agent-intro-avatar.cb-is-playing .cb-agent-intro-video {
  opacity: 1;
}

.cb-agent-intro-name {
  font-family: var(--cb-font);
  font-size: 16px;
  font-weight: 700;
  color: var(--cb-text);
  letter-spacing: -0.02em;
  margin: 0;
  line-height: 1.2;
}

.cb-agent-intro-subtitle {
  font-family: var(--cb-font);
  font-size: 13px;
  color: var(--cb-text);
  font-weight: 300;
  margin: 0;
  opacity: 0.85;
  line-height: 1.4;
}

/* Formatear separador de fecha entre mensajes */
.cb-date-divider {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 0;
  color: var(--cb-text-secondary);
  font-size: 11px;
  font-weight: 500;
  opacity: 0.5;
}

.cb-date-divider::before,
.cb-date-divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--cb-border),
    transparent
  );
}

/* Ajustar dise\xF1o para dispositivos m\xF3viles */
@media (max-width: 480px) {
  #chat-bubble-launcher {
    bottom: 16px;
    right: 16px;
  }

  #chat-bubble-launcher.cb-position--left {
    left: 16px;
    right: auto;
  }

  #chat-bubble-window {
    width: 100vw;
    height: 100dvh;
    bottom: 0;
    right: 0;
    left: 0;
    border-radius: 0;
    border: none;
    outline: none;
  }

  #chat-bubble-window.cb-position--left {
    left: 0;
    right: 0;
  }

  .cb-header {
    border-radius: 0;
    /* Igualar el padding inferior al superior (sin contar el safe-area) para que el
       contenido del header quede centrado verticalmente, no pegado hacia abajo */
    padding-top: max(10px, env(safe-area-inset-top));
    padding-bottom: 10px;
  }

  /* Aumentar el tama\xF1o de los botones del header para facilitar el toque en m\xF3vil */
  .cb-header-actions {
    gap: 4px;
  }

  .cb-actions-btn,
  .cb-close-window-btn {
    width: 40px;
    height: 40px;
  }

  .cb-actions-btn svg,
  .cb-close-window-btn svg {
    width: 20px;
    height: 20px;
  }

  .cb-input-area {
    padding-bottom: max(13px, env(safe-area-inset-bottom));
  }

  .cb-toggle-size-btn {
    display: none;
  }
}

/* Configurar estados de foco para navegaci\xF3n por teclado */
.cb-launcher-btn:focus-visible,
.cb-actions-btn:focus-visible,
#cb-send-btn:focus-visible {
  outline: 2.5px solid var(--cb-primary);
  outline-offset: 3px;
}

#cb-input:focus-visible {
  outline: none;
}

/* Dise\xF1ar bot\xF3n flotante para volver al fondo */
.cb-scroll-bottom-btn {
  position: absolute;
  bottom: calc(100% + 12px);
  left: 50%;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--cb-bg);
  border: 1px solid var(--cb-border);
  color: var(--cb-text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow:
    0 4px 14px rgba(0, 0, 0, 0.08),
    0 2px 5px rgba(0, 0, 0, 0.03);
  z-index: 10;
  padding: 0;

  /* Configurar transici\xF3n de entrada y salida del bot\xF3n flotante */
  opacity: 0;
  transform: translateX(-50%) translateY(8px) scale(0.8);
  pointer-events: none;
  transition:
    opacity 0.22s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.22s cubic-bezier(0.4, 0, 0.2, 1),
    background var(--cb-transition),
    color var(--cb-transition),
    box-shadow var(--cb-transition),
    bottom 0.22s cubic-bezier(0.4, 0, 0.2, 1);
}

.cb-scroll-bottom-btn.cb-visible {
  opacity: 1;
  transform: translateX(-50%) translateY(0) scale(1);
  pointer-events: all;
}

.cb-reply-preview.cb-visible + .cb-input-area .cb-scroll-bottom-btn {
  bottom: calc(100% + 62px);
}

.cb-scroll-bottom-btn:hover {
  background: var(--cb-bg-secondary);
  color: var(--cb-primary);
  box-shadow:
    0 6px 18px rgba(0, 0, 0, 0.12),
    0 3px 6px rgba(0, 0, 0, 0.05);
  transform: translateX(-50%) translateY(-2px) scale(1.05);
}

.cb-scroll-bottom-btn:active {
  transform: translateX(-50%) translateY(0) scale(0.95);
}

.cb-scroll-bottom-btn svg {
  width: var(--cb-icon-size-sm);
  height: var(--cb-icon-size-sm);
  transition: transform 0.22s ease;
}

.cb-scroll-bottom-btn:hover svg {
  transform: translateY(1.5px);
}

.cb-scroll-bottom-btn:focus-visible {
  outline: 2.5px solid var(--cb-primary);
  outline-offset: 3px;
}

/* Dise\xF1ar bot\xF3n para adjuntar im\xE1genes */
.cb-attach-btn {
  width: var(--cb-input-btn-size);
  height: var(--cb-input-btn-size);
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: transparent;
  color: var(--cb-text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0;
  transition:
    background-color var(--cb-transition),
    color var(--cb-transition);
}

.cb-attach-btn:hover {
  background: var(--cb-bg-secondary);
  color: var(--cb-primary);
}

.cb-attach-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.cb-attach-btn svg {
  width: 17px;
  height: 17px;
  min-width: 17px;
}

/* Ocultar el input de archivo nativo, se activa desde el bot\xF3n "+" */
.cb-file-input-hidden {
  display: none;
}

/* Configurar vista previa de la imagen adjunta antes de enviarla */
.cb-attachment-preview {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: var(--cb-attachment-bg);
  border-top: 1px solid var(--cb-border);
  flex-shrink: 0;

  max-height: 0;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  transition:
    max-height 0.22s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.18s ease,
    padding 0.22s ease;
  padding-top: 0;
  padding-bottom: 0;
}

.cb-attachment-preview.cb-visible {
  max-height: 70px;
  opacity: 1;
  pointer-events: all;
  padding: 8px 12px;
}

.cb-attachment-thumb {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background-color: var(--cb-bg);
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  border: 1px solid var(--cb-border);
  cursor: pointer;
}

.cb-attachment-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.cb-attachment-name {
  font-size: 13px;
  font-weight: 500;
  color: var(--cb-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cb-attachment-hint {
  font-size: 11.5px;
  color: var(--cb-text-secondary);
}

.cb-attachment-remove {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: var(--cb-text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  padding: 0;
  transition:
    background-color var(--cb-transition),
    color var(--cb-transition);
}

.cb-attachment-remove:hover {
  background: var(--cb-bg);
  color: var(--cb-error-text);
}

.cb-attachment-remove svg {
  width: 14px;
  height: 14px;
}

/* Configurar burbuja de imagen enviada por el usuario */
.cb-message--user .cb-image-message {
  background: transparent;
  padding: 3px;
  max-width: 240px;
}

.cb-image-message-img {
  display: block;
  width: 100%;
  max-width: 100%;
  border-radius: 20px;
  cursor: pointer;
}

/* Estilizar imagen clicable enviada por el bot v\xEDa markdown */
.cb-image {
  cursor: pointer;
}

/* Configurar burbuja propia para el texto, ya que el contenedor de la imagen es transparente */
.cb-image-message-caption {
  margin: 6px 0 0;
  padding: 8px 12px;
  background: var(--cb-primary);
  color: var(--cb-user-text);
  border-radius: 16px;
  font-size: var(--cb-font-size-msg);
  line-height: 1.4;
  word-break: break-word;
}

/* Dise\xF1ar bot\xF3n para responder a mensajes espec\xEDficos */

.cb-message--bot {
  position: relative;
}

.cb-message-reply-btn {
  position: absolute;
  left: calc(100% + 5px);
  top: 50%;
  transform: translateY(-50%) scale(0.85);
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  opacity: 0;
  pointer-events: none;
  transition:
    opacity 0.18s ease,
    transform 0.18s var(--cb-ease-spring);
  box-shadow: none;
  flex-shrink: 0;
  z-index: 2;
}

.cb-message-reply-btn::before {
  content: "";
  width: 16px;
  height: 16px;
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22%2318c139%22%20d%3D%22M10%209V5l-7%207%207%207v-4.1c5%200%208.5%201.6%2011%205.1-1-5-4-10-11-11Z%22%2F%3E%3C%2Fsvg%3E");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.cb-message--bot:hover .cb-message-reply-btn {
  opacity: 0.8;
  pointer-events: all;
  transform: translateY(-50%) scale(1);
}

.cb-message-reply-btn:hover {
  opacity: 1;
}

.cb-message-reply-btn:active {
  transform: translateY(-50%) scale(0.9);
}

.cb-message-reply-btn:focus-visible {
  outline: 2px solid var(--cb-primary);
  outline-offset: 2px;
  opacity: 1;
  pointer-events: all;
}

/* Configurar barra inferior de mensaje seleccionado */

.cb-reply-preview {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px 8px 10px;
  background: var(--cb-bg-secondary);
  border-top: 1px solid var(--cb-border);
  flex-shrink: 0;

  max-height: 0;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  transition:
    max-height 0.22s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.18s ease,
    padding 0.22s ease;
  padding-top: 0;
  padding-bottom: 0;
}

.cb-reply-preview.cb-visible {
  max-height: 80px;
  opacity: 1;
  pointer-events: all;
  padding: 8px 12px 8px 10px;
}

/* Dise\xF1ar indicador lateral de cita */
.cb-reply-bar {
  width: 3px;
  min-height: 32px;
  background: var(--cb-primary);
  flex-shrink: 0;
  opacity: 0.7;
}

.cb-reply-content {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.cb-reply-label {
  font-size: 11px;
  font-weight: 700;
  color: var(--cb-primary);
  letter-spacing: 0.01em;
}

.cb-reply-text {
  font-size: 12px;
  color: var(--cb-text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
}

.cb-reply-cancel {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: var(--cb-text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  transition:
    background var(--cb-transition),
    color var(--cb-transition);
}

.cb-reply-cancel:hover {
  background: var(--cb-border);
  color: var(--cb-text);
}

.cb-reply-cancel svg {
  width: 12px;
  height: 12px;
}

/* Formatear bloque de texto citado en la burbuja */

.cb-message-quote {
  display: flex;
  align-items: stretch;
  gap: 7px;
  margin-bottom: 6px;
  background: rgba(255, 255, 255, 0.15);
  padding: 6px 10px;
  max-width: 100%;
}

.cb-message-quote-bar {
  width: 2.5px;
  background: rgba(255, 255, 255, 0.7);
  flex-shrink: 0;
}

.cb-message-quote-text {
  font-size: 11.5px;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.45;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
}

/* Configurar animaci\xF3n textual de estado pensando */
.cb-typing-indicator.cb-thinking {
  gap: 0;
  padding: 6px 0;
  background: transparent;
  border: none;
  box-shadow: none;
  position: relative;
  overflow: visible;
}

.cb-typing-indicator.cb-thinking::after {
  display: none;
}

.cb-thinking-spinner {
  display: none;
}

.cb-thinking-text {
  font-size: 13.5px;
  font-weight: 300;
  margin-left: 8px;
  background: var(--cb-thinking-gradient);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  animation: cb-shimmer-text 1.6s linear infinite;
  display: inline-block;
  letter-spacing: 0.3px;
}

@keyframes cb-shimmer-text {
  to {
    background-position: 200% center;
  }
}

/* Dise\xF1ar bot\xF3n para activar grabaci\xF3n de voz */
.cb-mic-btn {
  width: var(--cb-input-btn-size);
  height: var(--cb-input-btn-size);
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: transparent;
  color: var(--cb-text-secondary);
  display: none;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0;

  transition:
    background-color var(--cb-transition),
    color var(--cb-transition);
}

.cb-mic-btn.cb-visible {
  display: flex;
  animation: cb-pop-in 0.25s var(--cb-ease-spring) both;
}

.cb-mic-btn:hover {
  background: var(--cb-bg-secondary);
  color: var(--cb-primary);
}

.cb-mic-btn svg {
  width: 17px;
  height: 17px;
  min-width: 17px;
}

/* Configurar interfaz superpuesta durante grabaci\xF3n */
.cb-recording-ui {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 10px;
  background: var(--cb-bg);
  border-radius: inherit;
  z-index: 5;

  opacity: 0;
  transform: translateY(4px);
  pointer-events: none;
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.cb-recording-ui.cb-visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

/* Animar indicador visual de grabaci\xF3n en curso */
.cb-recording-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--cb-danger);
  flex-shrink: 0;
  animation: cb-pulse-record 1.2s ease-in-out infinite;
}

@keyframes cb-pulse-record {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.75);
  }
}

/* Formatear contador de tiempo de grabaci\xF3n */
.cb-recording-timer {
  font-size: 13px;
  font-weight: 600;
  color: var(--cb-danger);
  letter-spacing: 0.5px;
  min-width: 36px;
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
}

/* Alinear visualizador de niveles de audio */
.cb-recording-wave {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  height: 28px;
}

.cb-recording-bar {
  width: 3px;
  height: 4px;
  border-radius: 2px;
  background: var(--cb-primary);
  opacity: 0.7;
  transition: height 0.08s ease;
  min-height: 4px;
}

/* Dise\xF1ar bot\xF3n para descartar nota de voz */
.cb-recording-cancel {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid var(--cb-border);
  background: var(--cb-bg-secondary);
  color: var(--cb-text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  transition:
    background var(--cb-transition),
    color var(--cb-transition),
    border-color var(--cb-transition);
}

.cb-recording-cancel:hover {
  background: var(--cb-danger-bg);
  color: var(--cb-danger);
  border-color: var(--cb-danger-soft);
}

/* Dise\xF1ar bot\xF3n para enviar nota de voz */
.cb-recording-send {
  width: var(--cb-input-btn-size);
  height: var(--cb-input-btn-size);
  border-radius: 50%;
  border: none;
  background: var(--cb-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  transition:
    background var(--cb-transition),
    transform 0.15s ease,
    box-shadow var(--cb-transition);
  box-shadow: 0 2px 8px rgba(87, 43, 134, 0.35);
}

.cb-recording-send:hover {
  background: var(--cb-primary-hover);
  transform: scale(1.06);
  box-shadow: 0 4px 14px rgba(87, 43, 134, 0.45);
}

/* Configurar reproductor de audio compacto en burbuja */
.cb-message--user .cb-audio-player {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  min-width: 200px;
  max-width: 240px;
}

.cb-audio-play-btn {
  width: var(--cb-input-btn-size);
  height: var(--cb-input-btn-size);
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.22);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  transition:
    background 0.18s ease,
    transform 0.15s ease;
}

.cb-audio-play-btn:hover {
  background: rgba(255, 255, 255, 0.35);
  transform: scale(1.05);
}

.cb-audio-play-btn svg {
  width: 16px;
  height: 16px;
}

.cb-audio-progress-wrapper {
  flex: 1;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.cb-audio-progress-bar {
  height: 100%;
  width: 0%;
  background: white;
  border-radius: 2px;
  transition: width 0.1s linear;
  pointer-events: none;
}

.cb-audio-duration {
  font-size: 11.5px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  min-width: 30px;
  text-align: right;
  letter-spacing: 0.3px;
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
}

/* ==========================================================================
   Panel de Conversaciones Pasadas (Historial)
   ========================================================================== */

.cb-actions-btn.cb-is-active {
  background: var(--cb-header-btn-highlight) !important;
  color: white !important;
}

.cb-history-panel {
  position: absolute;
  left: 0;
  width: 100%;
  background: var(--cb-bg-secondary);
  transform: translateX(-100%);
  transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 9;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
}

.cb-history-panel.cb-is-active {
  transform: translateX(0);
}

.cb-messages.cb-history-active {
  transform: translateX(100%);
}

/* Ocultar el input de mensajes mientras el panel de historial est\xE1 abierto */
#chat-bubble-window.cb-history-open .cb-input-area {
  display: none;
}

.cb-history-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px var(--cb-spacing);
  border-bottom: 1px solid var(--cb-border);
  background: var(--cb-bg);
  flex-shrink: 0;
  box-sizing: border-box;
}

.cb-history-panel-title {
  font-family: var(--cb-font);
  font-weight: 700;
  font-size: 14px;
  color: var(--cb-text);
  letter-spacing: -0.01em;
}

.cb-history-panel-close {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background: transparent;
  color: var(--cb-text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background var(--cb-transition),
    color var(--cb-transition),
    transform 0.2s;
}

.cb-history-panel-close:hover {
  background: var(--cb-border);
  color: var(--cb-text);
  transform: scale(1.08);
}

.cb-history-panel-close:active {
  transform: scale(0.92);
}

.cb-history-panel-close svg {
  width: 16px;
  height: 16px;
}

.cb-history-list {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 6px 0 12px;
  scrollbar-width: thin;
  scrollbar-color: var(--cb-scrollbar-color) var(--cb-scrollbar-track);
}

.cb-history-list::-webkit-scrollbar {
  width: var(--cb-scrollbar-width);
}
.cb-history-list::-webkit-scrollbar-track {
  background: var(--cb-scrollbar-track);
}
.cb-history-list::-webkit-scrollbar-thumb {
  background: var(--cb-scrollbar-color);
  border-radius: 100px;
}

/* Formatear etiqueta de grupo de fecha */
.cb-history-group-label {
  font-family: var(--cb-font);
  font-size: 10.5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--cb-text-secondary);
  padding: 14px var(--cb-spacing) 6px;
  opacity: 0.7;
}

.cb-history-group-label:first-child {
  padding-top: 8px;
}

.cb-history-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px var(--cb-spacing);
  cursor: pointer;
  border-bottom: 1px solid var(--cb-border);
  transition:
    background var(--cb-transition),
    border-left-color var(--cb-transition);
  position: relative;
  box-sizing: border-box;
  border-left: 3px solid transparent;
}

.cb-history-item:last-child {
  border-bottom: none;
}

.cb-history-item:hover {
  background: var(--cb-primary-soft);
  border-left-color: rgba(87, 43, 134, 0.35);
}

.cb-history-item--active {
  background: var(--cb-primary-soft) !important;
  border-left-color: var(--cb-primary) !important;
  cursor: default;
  pointer-events: none;
}

/* Dise\xF1ar estado de confirmaci\xF3n de borrado */
.cb-history-item--confirming {
  background: var(--cb-bg) !important;
  cursor: default;
}

.cb-history-item--confirming .cb-history-item-content {
  opacity: 0.4;
  pointer-events: none;
}

.cb-history-item--confirming .cb-history-item-delete {
  display: none;
}

.cb-history-item-confirm {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
  padding: 10px var(--cb-spacing);
  background: var(--cb-bg);
  animation: cb-confirm-fade-in 0.15s ease;
}

@keyframes cb-confirm-fade-in {
  from {
    opacity: 0;
    transform: translateX(6px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.cb-history-item-confirm-text {
  font-family: var(--cb-font);
  font-size: 12.5px;
  font-weight: 500;
  color: var(--cb-text);
}

.cb-history-item-confirm-actions {
  display: flex;
  gap: 6px;
}

.cb-history-item-confirm-no,
.cb-history-item-confirm-yes {
  font-family: var(--cb-font);
  font-size: 12px;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  padding: 4px 12px;
  cursor: pointer;
  transition:
    background var(--cb-transition),
    color var(--cb-transition);
}

.cb-history-item-confirm-no {
  background: var(--cb-border);
  color: var(--cb-text);
}

.cb-history-item-confirm-no:hover {
  background: var(--cb-border-strong);
}

.cb-history-item-confirm-yes {
  background: var(--cb-danger-soft);
  color: var(--cb-danger);
}

.cb-history-item-confirm-yes:hover {
  background: var(--cb-danger);
  color: #fff;
}

.cb-history-item-content {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
  transition:
    opacity var(--cb-transition),
    transform var(--cb-transition);
}

.cb-history-item:hover .cb-history-item-content {
  transform: translateX(2px);
}

.cb-history-item-title-row {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
}

.cb-history-item-title {
  font-family: var(--cb-font);
  font-weight: 600;
  font-size: 13px;
  color: var(--cb-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.3;
  transition: color var(--cb-transition);
  flex: 1;
  min-width: 0;
}

.cb-history-item:hover .cb-history-item-title {
  color: var(--cb-primary);
}

.cb-history-item-badge {
  flex-shrink: 0;
  font-family: var(--cb-font);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--cb-badge-text);
  background: var(--cb-badge-bg);
  border: 1px solid var(--cb-badge-border);
  border-radius: 999px;
  padding: 1px 7px;
}

.cb-history-item-preview {
  font-family: var(--cb-font);
  font-size: 12px;
  color: var(--cb-text-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  overflow: hidden;
  opacity: 0.85;
  line-height: 1.4;
}

.cb-history-item-meta {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 10.5px;
  color: var(--cb-text-secondary);
  margin-top: 1px;
  opacity: 0.75;
}

.cb-history-item-dot {
  opacity: 0.5;
}

.cb-history-item-delete {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: transparent;
  color: var(--cb-text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateX(6px);
  transition:
    opacity var(--cb-transition),
    background var(--cb-transition),
    color var(--cb-transition),
    transform var(--cb-transition);
  margin-left: 6px;
  flex-shrink: 0;
}

.cb-history-item:hover .cb-history-item-delete {
  opacity: 0.55;
  transform: translateX(0);
}

.cb-history-item-delete:hover {
  opacity: 1 !important;
  background: rgba(239, 68, 68, 0.1);
  color: var(--cb-danger);
  transform: translateX(0) scale(1.06);
}

.cb-history-item-delete:active {
  transform: translateX(0) scale(0.92);
}

.cb-history-item-delete svg {
  width: 15px;
  height: 15px;
}

/* Aplicar animaci\xF3n de barrido al eliminar un \xEDtem */
@keyframes cb-item-swipe-out {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  25% {
    transform: translateX(-6px);
    opacity: 1;
  }
  100% {
    transform: translateX(110%);
    opacity: 0;
  }
}

.cb-history-item--removing {
  animation: cb-item-swipe-out 0.32s cubic-bezier(0.55, 0, 0.75, 0.1)
    var(--cb-swipe-delay, 0ms) both;
  pointer-events: none;
}

/* Estilizar footer con acci\xF3n global de borrado */
.cb-history-panel-footer.cb-is-hidden {
  display: none;
}

.cb-history-panel-footer {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px var(--cb-spacing);
  border-top: 1px solid var(--cb-border);
  background: var(--cb-bg);
  box-sizing: border-box;
  min-height: 48px;
}

.cb-history-clear-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--cb-font);
  font-size: 12.5px;
  font-weight: 500;
  color: var(--cb-text-secondary);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 5px 8px;
  border-radius: 7px;
  transition:
    color var(--cb-transition),
    background var(--cb-transition);
}

.cb-history-clear-btn:hover {
  color: var(--cb-danger);
  background: rgba(239, 68, 68, 0.08);
}

.cb-history-clear-btn svg {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}

/* Dise\xF1ar modal superpuesto de confirmaci\xF3n para "Borrar todo" */
.cb-clear-all-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
  background: rgba(20, 12, 32, 0.45);
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  z-index: 20;
  opacity: 0;
  transition: opacity 0.18s ease;
}

.cb-clear-all-overlay.cb-is-hidden {
  display: none;
}

.cb-clear-all-overlay.cb-is-active {
  opacity: 1;
}

.cb-clear-all-dialog {
  width: 100%;
  max-width: 280px;
  background: var(--cb-bg);
  border-radius: var(--cb-radius);
  box-shadow: var(--cb-shadow);
  padding: 18px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transform: scale(0.92);
  transition: transform 0.18s var(--cb-ease-out-spring, ease);
}

.cb-clear-all-overlay.cb-is-active .cb-clear-all-dialog {
  transform: scale(1);
}

.cb-clear-all-text {
  margin: 0;
  font-family: var(--cb-font);
  font-size: 13.5px;
  font-weight: 600;
  color: var(--cb-text);
  text-align: center;
}

.cb-clear-all-actions {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.cb-clear-all-actions .cb-history-item-confirm-no,
.cb-clear-all-actions .cb-history-item-confirm-yes {
  padding: 7px 16px;
  font-size: 12.5px;
}

/* Configurar estado vac\xEDo mejorado */
.cb-history-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 48px var(--cb-spacing) 32px;
  text-align: center;
}

.cb-history-empty-icon {
  width: 48px;
  height: 48px;
  color: var(--cb-text-secondary);
  opacity: 0.35;
}

.cb-history-empty-icon svg {
  width: 100%;
  height: 100%;
}

.cb-history-empty-title {
  font-family: var(--cb-font);
  font-size: 13.5px;
  font-weight: 600;
  color: var(--cb-text);
  opacity: 0.6;
  margin: 0;
}

.cb-history-empty-sub {
  font-family: var(--cb-font);
  font-size: 12px;
  color: var(--cb-text-secondary);
  opacity: 0.7;
  margin: 0;
  line-height: 1.5;
}

/* Dise\xF1ar lightbox para vista ampliada de im\xE1genes ya publicadas en la conversaci\xF3n */
.cb-lightbox-dialog {
  margin: auto;
  position: fixed;
  inset: 0;
  background-color: transparent;
  border: none;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  padding: 1rem;
  box-sizing: border-box;
  opacity: 0;
  transform: scale(0.92);
  transition:
    opacity 0.25s ease,
    transform 0.25s ease,
    display 0.25s ease allow-discrete,
    overlay 0.25s ease allow-discrete;
  z-index: calc(var(--cb-z-index) + 10);
}

.cb-lightbox-dialog:not([open]) {
  pointer-events: none;
}

.cb-lightbox-dialog[open] {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transform: scale(1);
}

.cb-lightbox-dialog::backdrop {
  background-color: rgba(20, 16, 32, 0.6);
  -webkit-backdrop-filter: blur(0.25rem);
  backdrop-filter: blur(0.25rem);
  opacity: 0;
  transition:
    opacity 0.25s ease,
    backdrop-filter 0.25s ease,
    display 0.25s ease allow-discrete,
    overlay 0.25s ease allow-discrete;
}

.cb-lightbox-dialog[open]::backdrop {
  opacity: 1;
}

/* Proveer fallback para navegadores (como Firefox) que no soportan @starting-style */
.cb-lightbox-dialog[open].is-opening {
  opacity: 0;
  transform: scale(0.92);
}

.cb-lightbox-dialog[open].is-opening::backdrop {
  opacity: 0;
}

.cb-lightbox-dialog.is-closing {
  opacity: 0;
  transform: scale(0.92);
}

.cb-lightbox-dialog.is-closing::backdrop {
  opacity: 0;
}

.cb-lightbox-dialog img {
  max-width: 80vw;
  max-height: 80vh;
  object-fit: contain;
  border-radius: var(--cb-radius, 12px);
  box-shadow: var(--cb-shadow);
}

.cb-lightbox-close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  border-radius: 50%;
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  z-index: 10;
  transition:
    background-color 0.2s,
    color 0.2s;
}

.cb-lightbox-close-btn:hover {
  background: rgba(255, 255, 255, 0.28);
}

/* Dise\xF1ar zona de arrastrar y soltar una imagen sobre la ventana del chat */
.cb-dropzone-overlay {
  position: absolute;
  inset: 0;
  z-index: var(--cb-z-index);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: var(--cb-bg);
  border: 2px dashed var(--cb-primary);
  border-radius: var(--cb-radius);
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--cb-transition);
}

.cb-dropzone-overlay.cb-visible {
  opacity: 1;
}

.cb-dropzone-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--cb-primary);
  font-family: var(--cb-font);
  font-size: 13.5px;
  font-weight: 600;
  text-align: center;
}

.cb-dropzone-content svg {
  width: 32px;
  height: 32px;
}
`;var T="cb_widget_v1_session_id",U="cb_widget_v1_history",M="cb_widget_v1_sessions_index",L="cb_widget_v1_history_";function K(){if(typeof crypto<"u"&&typeof crypto.randomUUID=="function")return crypto.randomUUID();if(typeof crypto<"u"&&typeof crypto.getRandomValues=="function"){let n=new Uint8Array(16);crypto.getRandomValues(n),n[6]=n[6]&15|64,n[8]=n[8]&63|128;let e=Array.from(n).map(t=>t.toString(16).padStart(2,"0")).join("");return`${e.slice(0,8)}-${e.slice(8,12)}-${e.slice(12,16)}-${e.slice(16,20)}-${e.slice(20)}`}return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,n=>{let e=Math.random()*16|0;return(n==="x"?e:e&3|8).toString(16)})}function w(){try{let n=localStorage.getItem(T);return n||(n=K(),localStorage.setItem(T,n)),n}catch{return w._fallbackId||(w._fallbackId=K()),w._fallbackId}}function S(n){try{localStorage.setItem(T,n)}catch{}}function le(n){let e=n.find(t=>t.role==="user");return e?e.text:"Conversaci\xF3n 1"}function B(){try{let n=localStorage.getItem(M);return(n?JSON.parse(n):[]).sort((t,i)=>{let a=new Date(t.lastUserMessageAt||t.lastMessageAt).getTime();return new Date(i.lastUserMessageAt||i.lastMessageAt).getTime()-a})}catch{return[]}}function _(n,e,t){try{let i=B(),a=i.find(l=>l.sessionId===n),r=new Date().toISOString(),s=e||(a?a.title:"Conversaci\xF3n 1"),c=[...D(n)].reverse().find(l=>l.role==="user");if(!c){if(a){let l=i.filter(d=>d.sessionId!==n);localStorage.setItem(M,JSON.stringify(l))}return}let o=c.date;for(a?(a.title=s,a.messageCount=t,a.lastMessageAt=r,a.lastUserMessageAt=o):(a={sessionId:n,title:s,startedAt:r,lastMessageAt:r,lastUserMessageAt:o,messageCount:t,historyKey:`${L}${n}`},i.push(a)),i.sort((l,d)=>{let m=new Date(l.lastUserMessageAt||l.lastMessageAt).getTime();return new Date(d.lastUserMessageAt||d.lastMessageAt).getTime()-m});i.length>20;){let l=i.pop();try{localStorage.removeItem(l.historyKey)}catch{}}localStorage.setItem(M,JSON.stringify(i))}catch(i){console.error("Error saving session to index",i)}}function R(n){try{let t=B().filter(i=>i.sessionId!==n);localStorage.setItem(M,JSON.stringify(t)),localStorage.removeItem(`${L}${n}`)}catch{}}function D(n){try{let e=`${L}${n}`,t=localStorage.getItem(e);return t?JSON.parse(t):[]}catch{return[]}}function G(){try{let n=q();if(n){let e=C(n);if(e&&e.length>0){let t=le(e);_(n,t,e.length)}}localStorage.removeItem(T),localStorage.removeItem(U),w._fallbackId&&delete w._fallbackId,C._fallbackHistory&&delete C._fallbackHistory}catch{}return w()}function C(n){let e=n||q(),t=e?`${L}${e}`:null;try{if(t){let i=localStorage.getItem(t);if(i)return JSON.parse(i);let a=localStorage.getItem(U);if(a)return localStorage.setItem(t,a),localStorage.removeItem(U),JSON.parse(a)}return[]}catch{return C._fallbackHistory||[]}}function A(n,e){let t=e||q(),i=t?`${L}${t}`:null;try{i&&localStorage.setItem(i,JSON.stringify(n))}catch{C._fallbackHistory=n}}function q(){try{return localStorage.getItem(T)}catch{return w._fallbackId||null}}function Q(n){let e=n.trim();return/^javascript:/i.test(e)||/^data:/i.test(e)||/^vbscript:/i.test(e)?"#":e}function H(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function de(n){let e=n.split(/(<[^>]+>)/g),t=!1;return e.map(i=>{if(i.startsWith("<")&&i.endsWith(">"))return i.toLowerCase().startsWith("<a")?t=!0:i.toLowerCase()==="</a>"&&(t=!1),i;if(t)return i;let a=/(?:https?|ftp):\/\/[^\s<>"{}|\\^`[\]]+/g;return i.replace(a,r=>{let s=r.match(/[.,;:!?)"']+$/),h=s?r.slice(0,-s[0].length):r,c=s?s[0]:"",o=h.includes("ayuda.aliaddo.com")?"_self":"_blank";return`<a href="${h}" target="${o}" rel="noopener noreferrer" class="cb-link">${h}</a>${c}`})}).join("")}function he(n,e){return n.replace(/```(\w*)\n?([\s\S]*?)```/g,(t,i,a)=>{let r=e.length,s=i?` class="language-${H(i)}"`:"";return e.push(`<pre class="cb-code-block"><code${s}>${H(a.trim())}</code></pre>`),`\0CODEBLOCK${r}\0`})}function be(n,e){return n.replace(/`([^`\n]+)`/g,(t,i)=>{let a=e.length;return e.push(`<code class="cb-inline-code">${H(i)}</code>`),`\0INLINECODE${a}\0`})}function pe(n,e,t){let i=n;return e.forEach((a,r)=>{i=i.replace(`\0CODEBLOCK${r}\0`,a)}),t.forEach((a,r)=>{i=i.replace(`\0INLINECODE${r}\0`,a)}),i}function ge(n){return n.replace(/\*\*([^*\n]+)\*\*/g,"<strong>$1</strong>").replace(/__([^_\n]+)__/g,"<strong>$1</strong>").replace(/(?<!\*)\*(?!\*)([^*\n]+)(?<!\*)\*(?!\*)/g,"<em>$1</em>").replace(/(?<!_)_(?!_)([^_\n]+)(?<!_)_(?!_)/g,"<em>$1</em>").replace(/~~([^~\n]+)~~/g,"<del>$1</del>")}function ue(n){let e=/!\[([^\]]*)\]\(((?:[^()\s]|\([^()]*\))*)\)/g;return n.replace(e,(t,i,a)=>`<img src="${Q(a)}" alt="${i}" class="cb-image" style="max-width: 100%; border-radius: var(--cb-radius, 12px); margin: 8px 0; display: block;" loading="lazy" />`)}function me(n){let e=/\[([^\]]+)\]\(((?:[^()\s]|\([^()]*\))*)\)/g;return n.replace(e,(t,i,a)=>{let r=Q(a),s=r.includes("ayuda.aliaddo.com")?"_self":"_blank";return`<a href="${r}" target="${s}" rel="noopener noreferrer" class="cb-link">${i}</a>`})}function I(n){let e=n;return e=ge(e),e=ue(e),e=me(e),e=de(e),e}function ee(n){if(!n||typeof n!="string")return"";let e=[],t=[],i=he(n,e);i=H(i),i=be(i,t);let a=i.split(/\r?\n/),r=[],s=null;for(let o=0;o<a.length;o++){let l=a[o],d=l.trim();if(d===""){s&&(r.push(s),s=null);continue}if(/^([-*_])(\s*\1){2,}$/.test(d)){s&&(r.push(s),s=null),r.push({type:"hr"});continue}let m=l.match(/^(#{1,3})\s+(.+)$/);if(m){s&&r.push(s);let g=m[1].length,v=m[2];r.push({type:"heading",level:g,text:v}),s=null;continue}let f=l.match(/^(\s*)[-*]\s+(.+)$/);if(f){let g=f[2];s&&s.type!=="ul"&&(r.push(s),s=null),s||(s={type:"ul",items:[]}),s.items.push(g);continue}let b=l.match(/^\s*(\d+)\.\s+(.+)$/);if(b){let g=b[2];s&&s.type!=="ol"&&(r.push(s),s=null),s||(s={type:"ol",items:[]}),s.items.push(g);continue}if(d.startsWith("|")){s&&s.type!=="table"&&(r.push(s),s=null),s||(s={type:"table",rows:[]}),s.rows.push(d);continue}s&&s.type!=="p"&&(r.push(s),s=null),s||(s={type:"p",lines:[]}),s.lines.push(l)}s&&r.push(s);let c=r.map(o=>{if(o.type==="hr")return'<hr class="cb-hr" />';if(o.type==="heading"){let l=I(o.text);return`<h${o.level} class="cb-heading">${l}</h${o.level}>`}if(o.type==="ul")return`<ul class="cb-list">${o.items.map(d=>`<li>${I(d)}</li>`).join("")}</ul>`;if(o.type==="ol")return`<ol class="cb-list cb-list--ordered">${o.items.map(d=>`<li>${I(d)}</li>`).join("")}</ol>`;if(o.type==="table"){let l=o.rows.map(v=>{let y=v;return y.startsWith("|")&&(y=y.substring(1)),y.endsWith("|")&&(y=y.substring(0,y.length-1)),y.split("|").map(k=>k.trim())}),d=[],m=[],f=!1;if(l.length>1){let v=l[1];f=v.length>0&&v.every(y=>/^[-:\s]+$/.test(y))}l.forEach((v,y)=>{f&&y===1||(f&&y===0?m=v:d.push(v))});let b="";m.length>0&&(b=`<thead><tr>${m.map(v=>`<th style="padding: 8px; border: 1px solid rgba(150,150,150,0.3); background-color: rgba(150,150,150,0.1); text-align: left;">${I(v)}</th>`).join("")}</tr></thead>`);let g=`<tbody>${d.map(v=>`<tr>${v.map(y=>`<td style="padding: 8px; border: 1px solid rgba(150,150,150,0.3);">${I(y)}</td>`).join("")}</tr>`).join("")}</tbody>`;return`<div class="cb-table-wrapper" style="overflow-x: auto; margin: 10px 0;"><table class="cb-table" style="width: 100%; border-collapse: collapse; font-size: 0.9em;">${b}${g}</table></div>`}return o.type==="p"?`<p class="cb-paragraph">${o.lines.map(d=>I(d)).join("<br>")}</p>`:""}).join("");return c=pe(c,e,t),c}function fe(n,e,t,i=null){let a=new AbortController,r=setTimeout(()=>a.abort(),t);return i&&(i.aborted?a.abort():i.addEventListener("abort",()=>a.abort())),fetch(n,{...e,signal:a.signal}).finally(()=>clearTimeout(r))}function ve(n){return new Promise(e=>setTimeout(e,n))}function F(n){return n.name==="AbortError"?"La solicitud tard\xF3 demasiado tiempo. Verifica tu conexi\xF3n e int\xE9ntalo de nuevo.":n.name==="TypeError"&&n.message.includes("Failed to fetch")?"No se pudo conectar con el servidor. Puede ser un problema de CORS o de red. Verifica la URL del webhook y que el servidor permita solicitudes desde este dominio.":n.name==="TypeError"&&n.message.includes("NetworkError")?"Error de red. Verifica tu conexi\xF3n a internet.":`Error de conexi\xF3n: ${n.message}`}async function $(n,e,t,i,a=null){try{return await fe(n,e,t,a)}catch(r){if(i>0&&r.name!=="AbortError")return await ve(1e3),$(n,e,t,i-1,a);throw r}}async function te(n,e,t,i={},a=6e4,r=null,s=null){if(!n)throw new Error("URL del webhook no configurada. Agrega la URL en window.ChatBubbleConfig.webhook.url");let h={chatInput:e.trim(),sessionId:t,metadata:{timestamp:new Date().toISOString(),source:"chat-bubble",userAgent:typeof navigator<"u"?navigator.userAgent:"unknown",...i}},c={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(h)},o;try{o=await $(n,c,a,1,r)}catch(d){throw d.name==="AbortError"&&r&&r.aborted?d:new Error(F(d))}if(!o.ok){try{let d=await o.text();d&&console.error("[ChatBubble] Detalle del error del webhook:",d.slice(0,500))}catch{}throw o.status===401||o.status===403?new Error(`Sin autorizaci\xF3n para acceder al webhook (${o.status}). Verifica la configuraci\xF3n de n8n.`):o.status===404?new Error("Webhook no encontrado (404). Verifica que la URL sea correcta y que el workflow est\xE9 activo en n8n."):o.status===429?new Error("Demasiadas solicitudes (429). Espera un momento antes de enviar otro mensaje."):o.status>=500?new Error(`Error interno del servidor (${o.status}). El servicio de n8n puede estar temporalmente no disponible.`):new Error(`Error HTTP ${o.status}. No se pudo procesar tu solicitud.`)}let l;try{l=await o.json()}catch{throw new Error('La respuesta del servidor no es JSON v\xE1lido. Verifica la configuraci\xF3n del nodo "Respond to Webhook" en n8n.')}if(!l||typeof l.output>"u"){let d=l?.message||l?.text||l?.response||l?.content;if(d)return{output:String(d),sessionId:l.sessionId||t};throw new Error('La respuesta del servidor no contiene el campo "output". Verifica la configuraci\xF3n del workflow en n8n.')}return{output:String(l.output),sessionId:l.sessionId||t}}async function ie(n,e,t,i="",a={},r=6e4,s=null){if(!n)throw new Error("URL del webhook no configurada.");let h=new FormData;h.append("sessionId",t),h.append("metadata",JSON.stringify({type:"image",caption:i||"",mimeType:e.type,fileName:e.name||"",size:e.size,timestamp:new Date().toISOString(),source:"chat-bubble",userAgent:typeof navigator<"u"?navigator.userAgent:"unknown",...a})),i&&h.append("chatInput",i),h.append("imageFile",e,e.name||"image");let c={method:"POST",body:h},o;try{o=await $(n,c,r,1,s)}catch(d){throw d.name==="AbortError"&&s&&s.aborted?d:new Error(F(d))}if(!o.ok){try{let d=await o.text();d&&console.error("[ChatBubble] Detalle del error del webhook:",d.slice(0,500))}catch{}throw o.status===401||o.status===403?new Error(`Sin autorizaci\xF3n para acceder al webhook (${o.status}).`):o.status===404?new Error("Webhook no encontrado (404). Verifica la URL y que el workflow est\xE9 activo."):o.status>=500?new Error(`Error del servidor (${o.status}). El servicio de n8n puede estar temporalmente no disponible.`):new Error(`Error HTTP ${o.status}. No se pudo procesar tu solicitud.`)}let l;try{l=await o.json()}catch{throw new Error("La respuesta del servidor no es JSON v\xE1lido.")}if(!l||typeof l.output>"u"){let d=l?.message||l?.text||l?.response||l?.content;if(d)return{output:String(d),sessionId:l.sessionId||t};throw new Error('La respuesta del servidor no contiene el campo "output".')}return{output:String(l.output),sessionId:l.sessionId||t}}async function ae(n,e,t,i,a="audio/webm",r={},s=6e4,h=null){if(!n)throw new Error("URL del webhook no configurada.");let c=`voice_${Date.now()}.mp3`,o="audio/mpeg",l=new Blob([e],{type:o}),d=new FormData;d.append("sessionId",t),d.append("metadata",JSON.stringify({type:"audio",duration:i,mimeType:o,filename:c,timestamp:new Date().toISOString(),source:"chat-bubble",userAgent:typeof navigator<"u"?navigator.userAgent:"unknown",...r})),d.append("data",l,c);let m={method:"POST",body:d},f;try{f=await $(n,m,s,1,h)}catch(g){throw g.name==="AbortError"&&h&&h.aborted?g:new Error(F(g))}if(!f.ok){try{let g=await f.text();g&&console.error("[ChatBubble] Detalle del error del webhook:",g.slice(0,500))}catch{}throw f.status===401||f.status===403?new Error(`Sin autorizaci\xF3n para acceder al webhook (${f.status}).`):f.status===404?new Error("Webhook no encontrado (404). Verifica la URL y que el workflow est\xE9 activo."):f.status>=500?new Error(`Error del servidor (${f.status}). El servicio de n8n puede estar temporalmente no disponible.`):new Error(`Error HTTP ${f.status}. No se pudo procesar tu solicitud.`)}let b;try{b=await f.json()}catch{throw new Error("La respuesta del servidor no es JSON v\xE1lido.")}if(!b||typeof b.output>"u"){let g=b?.message||b?.text||b?.response||b?.content;if(g)return{output:String(g),sessionId:b.sessionId||t};throw new Error('La respuesta del servidor no contiene el campo "output".')}return{output:String(b.output),sessionId:b.sessionId||t}}var N=class n{constructor(){this.mediaRecorder=null,this.stream=null,this.chunks=[],this.startTime=null,this.tickInterval=null,this.autoStopTimeout=null,this.analyser=null,this.audioCtx=null,this.levelInterval=null,this.seconds=0,this.cancelled=!1,this.mimeType="",this.onTick=null,this.onComplete=null,this.onError=null,this.onLevelChange=null}static getSupportedMimeType(){let e=["audio/webm;codecs=opus","audio/webm","audio/ogg;codecs=opus","audio/ogg","audio/mp4"];for(let t of e)if(MediaRecorder.isTypeSupported(t))return t;return""}static getExtension(e){return e.includes("ogg")?"ogg":e.includes("mp4")?"mp4":"webm"}async start(){this.cancelled=!1,this.chunks=[],this.seconds=0;try{this.stream=await navigator.mediaDevices.getUserMedia({audio:!0,video:!1})}catch(t){let i="No se pudo acceder al micr\xF3fono.";t.name==="NotAllowedError"||t.name==="PermissionDeniedError"?i="Permiso de micr\xF3fono denegado. Habil\xEDtalo en la configuraci\xF3n del navegador.":t.name==="NotFoundError"&&(i="No se encontr\xF3 ning\xFAn micr\xF3fono en este dispositivo."),this.onError&&this.onError(i);return}try{this.audioCtx=new(window.AudioContext||window.webkitAudioContext);let t=this.audioCtx.createMediaStreamSource(this.stream);this.analyser=this.audioCtx.createAnalyser(),this.analyser.fftSize=256,t.connect(this.analyser);let i=new Uint8Array(this.analyser.frequencyBinCount);this.levelInterval=setInterval(()=>{this.analyser.getByteFrequencyData(i);let a=i.reduce((r,s)=>r+s,0)/i.length;this.onLevelChange&&this.onLevelChange(a/255)},80)}catch{}this.mimeType=n.getSupportedMimeType();let e=this.mimeType?{mimeType:this.mimeType}:{};try{this.mediaRecorder=new MediaRecorder(this.stream,e)}catch{this.onError&&this.onError("Error al inicializar la grabaci\xF3n de audio."),this._cleanup();return}this.mediaRecorder.ondataavailable=t=>{t.data&&t.data.size>0&&this.chunks.push(t.data)},this.mediaRecorder.onstop=()=>{if(this.cancelled){this._cleanup();return}let t=this.seconds,i=new Blob(this.chunks,{type:this.mimeType||"audio/webm"});this._cleanup(),this.onComplete&&this.onComplete(i,t)},this.mediaRecorder.start(100),this.startTime=Date.now(),this.tickInterval=setInterval(()=>{this.seconds=Math.floor((Date.now()-this.startTime)/1e3),this.onTick&&this.onTick(this.seconds)},500),this.autoStopTimeout=setTimeout(()=>{this.stop()},30*1e3)}stop(){!this.mediaRecorder||this.mediaRecorder.state==="inactive"||(clearInterval(this.tickInterval),clearTimeout(this.autoStopTimeout),this.seconds=Math.floor((Date.now()-this.startTime)/1e3),this.mediaRecorder.stop())}cancel(){this.cancelled=!0,clearInterval(this.tickInterval),clearTimeout(this.autoStopTimeout),this.mediaRecorder&&this.mediaRecorder.state!=="inactive"?this.mediaRecorder.stop():this._cleanup()}_cleanup(){if(clearInterval(this.levelInterval),clearInterval(this.tickInterval),clearTimeout(this.autoStopTimeout),this.stream&&(this.stream.getTracks().forEach(e=>e.stop()),this.stream=null),this.audioCtx){try{this.audioCtx.close()}catch{}this.audioCtx=null}this.analyser=null,this.mediaRecorder=null}};function z(n){let e=Math.floor(n/60).toString().padStart(2,"0"),t=(n%60).toString().padStart(2,"0");return`${e}:${t}`}function re(){return!!(navigator.mediaDevices&&typeof navigator.mediaDevices.getUserMedia=="function"&&typeof MediaRecorder<"u")}function V(n){return new Promise((e,t)=>{let i=new FileReader;i.onloadend=()=>e(i.result),i.onerror=t,i.readAsDataURL(n)})}async function X(n){return await(await fetch(n)).blob()}var u={chat:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z"/>
    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z"/>
  </svg>`,close:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/>
  </svg>`,reply:"",history:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-9-9c2.39 0 4.68.94 6.4 2.6L20 6.5M20 6.5H15M20 6.5V2" />
  </svg>`,trash:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
  </svg>`,newChat:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd"/>
  </svg>`,newSession:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m-3-3h6" />
  </svg>`,send:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>`,bot:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.5 7.5h-9v9h9v-9Z"/>
    <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd"/>
  </svg>`,chatEmpty:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"/>
  </svg>`,warning:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 1.998-.003 4.5-2.599 4.5H4.645c-2.596 0-3.752-2.502-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd"/>
  </svg>`,chevronDown:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>`,attach:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>`,mic:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
    <line x1="12" y1="19" x2="12" y2="22"></line>
  </svg>`,micStop:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <rect x="6" y="6" width="12" height="12" rx="2"/>
  </svg>`,audioPlay:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z"/>
  </svg>`,audioPause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
  </svg>`,moreHorizontal:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM21 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
  </svg>`,lightboxClose:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>`},P={webhook:{url:""},bot:{name:"Ali",subtitle:"Tu asistente de IA de Aliaddo",avatar:"../public/img/ali-profile-image.png",avatarVideo:null,welcomeMessage:"Hola, soy Ali \u{1F44B}. Tu asistente virtual de Aliaddo \xBFComo puedo ayudarte?",offlineMessage:"En este momento no estoy disponible. Int\xE9ntalo m\xE1s tarde.",typingText:"Escribiendo..."},style:{primaryColor:"#572b86",textColor:"#ffffff",position:"right",borderRadius:"12px",fontFamily:"inherit",theme:"auto"},behavior:{openOnLoad:!1,showTimestamps:!0,enableSoundNotification:!1,maxMessageLength:1e3,requestTimeout:6e4,maxImageSizeMB:5}},W=class{constructor(e){this.config=this._mergeConfig(P,e||{}),this.isOpen=!1,this.isLoading=!1,this.hasNewMessage=!1,this.sessionId=w(),this.messageCount=0,this.chatHistory=[],this.replyingTo=null,this.pendingImage=null,this._attachmentPreviewUrl=null,this.audioRecorder=null,this.isRecording=!1,this._audioSupported=re(),this._activeAudio=null,this.config.webhook.url||console.warn("[ChatBubble] \u26A0\uFE0F No se configur\xF3 una URL de webhook. Agrega window.ChatBubbleConfig.webhook.url antes de cargar el script."),this._init()}async _init(){this._injectStyles(),this._buildDOM(),this._applyConfig(),this._bindEvents(),this._initDraggable(),this.chatHistory=C(this.sessionId),this.chatHistory&&this.chatHistory.length>0?await this._loadHistory():this._showWelcomeMessage(),this.config.behavior.openOnLoad&&setTimeout(()=>this._openChat(),400)}_injectStyles(){}async _loadHistory(){this._insertAgentIntro();let e=[...this.chatHistory];for(let t of e){let i=t.date?new Date(t.date):new Date;if(t.role==="user")if(t.isAudio&&t.audioData)try{let a=await X(t.audioData);this._addUserAudioMessage(a,t.duration||0,i,!1)}catch(a){console.error("Error cargando audio del historial",a)}else if(t.isImage&&t.imageData)try{let a=await X(t.imageData);await this._addUserImageMessage(a,t.caption||"",i,!1)}catch(a){console.error("Error cargando imagen del historial",a)}else this.replyingTo=t.replyingTo||null,this._addUserMessage(t.text,i,!1),this.replyingTo=null;else t.role==="bot"&&this._addBotMessage(t.text,i,!1,!1)}this._scrollToBottom()}_buildDOM(){this.host=document.createElement("div"),this.host.id="chat-bubble-host",document.body.appendChild(this.host),this.shadowRoot=this.host.attachShadow({mode:"open"});let e=document.createElement("style");e.textContent=J,this.shadowRoot.appendChild(e),this.launcher=document.createElement("div"),this.launcher.id="chat-bubble-launcher",this.launcher.setAttribute("role","complementary"),this.launcher.setAttribute("aria-label","Widget de chat"),this.launcher.innerHTML=`
      <button class="cb-launcher-btn" id="cb-launcher-btn" aria-label="Abrir chat" aria-expanded="false" aria-controls="chat-bubble-window">
        <span class="cb-icon-chat" id="cb-launcher-icon-container"></span>
        <span class="cb-icon-close">${u.chevronDown}</span>
        <span class="cb-sparkle cb-sparkle--1" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="currentColor"><path d="M6 0C6.3 3.5 8.5 5.7 12 6C8.5 6.3 6.3 8.5 6 12C5.7 8.5 3.5 6.3 0 6C3.5 5.7 5.7 3.5 6 0Z"/></svg></span>
        <span class="cb-sparkle cb-sparkle--3" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="currentColor"><path d="M6 0C6.3 3.5 8.5 5.7 12 6C8.5 6.3 6.3 8.5 6 12C5.7 8.5 3.5 6.3 0 6C3.5 5.7 5.7 3.5 6 0Z"/></svg></span>
        <span class="cb-sparkle cb-sparkle--5" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="currentColor"><path d="M6 0C6.3 3.5 8.5 5.7 12 6C8.5 6.3 6.3 8.5 6 12C5.7 8.5 3.5 6.3 0 6C3.5 5.7 5.7 3.5 6 0Z"/></svg></span>
      </button>
      <span class="cb-notification-badge" id="cb-notification-badge" aria-label="Nuevo mensaje" role="status"></span>
    `,this.window=document.createElement("div"),this.window.id="chat-bubble-window",this.window.setAttribute("role","application"),this.window.setAttribute("aria-label",`Chat con ${this.config.bot.name}`),this.window.setAttribute("aria-hidden","true"),this.window.innerHTML=`
      <div class="cb-header" id="cb-header">
        <div class="cb-header-info">
          <div class="cb-avatar" id="cb-avatar"></div>
          <div>
            <span class="cb-bot-name" id="cb-bot-name">${this._escapeAttr(this.config.bot.name)}</span>
            <span class="cb-status">En l\xEDnea</span>
          </div>
        </div>
        <div class="cb-header-actions">
          <div class="cb-actions-dropdown" id="cb-actions-dropdown">
            <button class="cb-actions-btn" id="cb-actions-btn" aria-label="M\xE1s acciones" aria-haspopup="true" aria-expanded="false" title="Acciones">
              ${u.moreHorizontal}
            </button>
            <div class="cb-actions-menu cb-is-hidden" id="cb-actions-menu" role="menu">
              <button class="cb-actions-menu-item" id="cb-new-session-btn" role="menuitem">
                <span class="cb-actions-menu-icon">${u.newSession}</span>
                Nuevo chat
              </button>
              <button class="cb-actions-menu-item" id="cb-history-btn" role="menuitem">
                <span class="cb-actions-menu-icon">${u.history}</span>
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
            ${u.close}
          </button>
        </div>
        <div class="cb-toast-container" id="cb-toast-container" role="alert" aria-live="assertive"></div>
      </div>
      <div class="cb-resize-handle" id="cb-resize-handle"></div>

      <div class="cb-dropzone-overlay" id="cb-dropzone-overlay" aria-hidden="true">
        <div class="cb-dropzone-content">
          ${u.attach}
          <span>Suelta la imagen para adjuntarla</span>
        </div>
      </div>

      <div class="cb-messages" id="cb-messages-container" role="log" aria-live="polite" aria-label="Mensajes del chat">
        <div class="cb-message cb-message--bot cb-typing-wrapper" id="cb-typing">
          <div class="cb-msg-avatar">
            ${this.config.bot.avatar?`<img src="${this._escapeAttr(this.config.bot.avatar)}" alt="${this._escapeAttr(this.config.bot.name)}">`:u.bot}
          </div>
          <div class="cb-msg-col">
            <div class="cb-typing-indicator" role="status" aria-label="${this._escapeAttr(this.config.bot.typingText)}" aria-live="polite">
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>
      </div>

      <div class="cb-history-panel" id="cb-history-panel" aria-hidden="true">
        <div class="cb-history-panel-header">
          <span class="cb-history-panel-title" id="cb-history-panel-title">Conversaciones</span>
          <button class="cb-history-panel-close" id="cb-history-panel-close" aria-label="Cerrar panel de historial">
            ${u.close}
          </button>
        </div>
        <div class="cb-history-list" id="cb-history-list"></div>
        <div class="cb-history-panel-footer cb-is-hidden" id="cb-history-panel-footer">
          <button class="cb-history-clear-btn" id="cb-history-clear-btn" aria-label="Borrar todas las conversaciones">
            ${u.trash} Borrar todo
          </button>
        </div>
      </div>

      <div class="cb-clear-all-overlay cb-is-hidden" id="cb-clear-all-overlay" aria-hidden="true">
        <div class="cb-clear-all-dialog" id="cb-clear-all-dialog" role="alertdialog" aria-modal="true" aria-labelledby="cb-clear-all-text">
          <p class="cb-clear-all-text" id="cb-clear-all-text">\xBFBorrar todas las conversaciones?</p>
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
          ${u.close}
        </button>
      </div>

      <div class="cb-attachment-preview" id="cb-attachment-preview" aria-hidden="true">
        <div class="cb-attachment-thumb" id="cb-attachment-thumb" role="button" tabindex="0" aria-label="Ver imagen ampliada" title="Ver imagen ampliada"></div>
        <div class="cb-attachment-info">
          <span class="cb-attachment-name" id="cb-attachment-name"></span>
          <span class="cb-attachment-hint">Imagen adjunta</span>
        </div>
        <button class="cb-attachment-remove" id="cb-attachment-remove" aria-label="Quitar imagen adjunta" title="Quitar imagen">
          ${u.close}
        </button>
      </div>

      <div class="cb-input-area">
        <button id="cb-scroll-bottom-btn" class="cb-scroll-bottom-btn" aria-label="Desplazarse hacia abajo">
          ${u.chevronDown}
        </button>
        <button id="cb-attach-btn" class="cb-attach-btn" aria-label="Adjuntar imagen" title="Adjuntar imagen">
          ${u.attach}
        </button>
        <input type="file" id="cb-file-input" class="cb-file-input-hidden" accept="image/png,image/jpeg,image/webp,image/bmp,image/heic,image/heif" tabindex="-1" aria-hidden="true" />
        <textarea
          id="cb-input"
          placeholder="Preguntarle a Ali"
          rows="1"
          maxlength="${this.config.behavior.maxMessageLength}"
          aria-label="Escribe tu mensaje"
          aria-multiline="true"
        ></textarea>
        <button id="cb-mic-btn" class="cb-mic-btn" aria-label="Grabar mensaje de voz" title="Grabar audio">
          ${u.mic}
        </button>
        <button id="cb-send-btn" aria-label="Enviar mensaje">
          ${u.send}
        </button>
      </div>
    `;let t=document.createElement("dialog");t.className="cb-lightbox-dialog",t.setAttribute("aria-label","Vista ampliada de imagen"),t.innerHTML=`
      <button class="cb-lightbox-close-btn" aria-label="Cerrar imagen" title="Cerrar">
        ${u.lightboxClose}
      </button>
      <img src="" alt="" class="cb-lightbox-image" />
    `,this.shadowRoot.appendChild(this.launcher),this.shadowRoot.appendChild(this.window),this.shadowRoot.appendChild(t);let i=this.launcher.querySelector("#cb-launcher-icon-container"),a=this.window.querySelector("#cb-avatar");if(this.config.bot.avatar){let r=document.createElement("img");r.src=this._escapeAttr(this.config.bot.avatar),r.alt=this._escapeAttr(this.config.bot.name),r.className="cb-launcher-avatar",r.loading="lazy",i.appendChild(r);let s=document.createElement("img");s.src=this._escapeAttr(this.config.bot.avatar),s.alt=this._escapeAttr(this.config.bot.name),s.loading="lazy",a.appendChild(s)}else i.innerHTML=u.chat,a.innerHTML=u.bot;this.launcherBtn=this.shadowRoot.getElementById("cb-launcher-btn"),this.notificationBadge=this.shadowRoot.getElementById("cb-notification-badge"),this.messagesContainer=this.shadowRoot.getElementById("cb-messages-container"),this.typingIndicator=this.shadowRoot.getElementById("cb-typing"),this.emptyState=this.shadowRoot.getElementById("cb-empty-state"),this.input=this.shadowRoot.getElementById("cb-input"),this.sendBtn=this.shadowRoot.getElementById("cb-send-btn"),this.toggleSizeBtn=this.shadowRoot.getElementById("cb-toggle-size-btn"),this.resizeHandle=this.shadowRoot.getElementById("cb-resize-handle"),this.dropzoneOverlay=this.shadowRoot.getElementById("cb-dropzone-overlay"),this.scrollBottomBtn=this.shadowRoot.getElementById("cb-scroll-bottom-btn"),this.toastContainer=this.shadowRoot.getElementById("cb-toast-container"),this.attachBtn=this.shadowRoot.getElementById("cb-attach-btn"),this.fileInput=this.shadowRoot.getElementById("cb-file-input"),this.attachmentPreview=this.shadowRoot.getElementById("cb-attachment-preview"),this.attachmentThumb=this.shadowRoot.getElementById("cb-attachment-thumb"),this.attachmentName=this.shadowRoot.getElementById("cb-attachment-name"),this.attachmentRemoveBtn=this.shadowRoot.getElementById("cb-attachment-remove"),this.replyPreview=this.shadowRoot.getElementById("cb-reply-preview"),this.replyText=this.shadowRoot.getElementById("cb-reply-text"),this.replyCancelBtn=this.shadowRoot.getElementById("cb-reply-cancel"),this.micBtn=this.shadowRoot.getElementById("cb-mic-btn"),this.actionsBtn=this.shadowRoot.getElementById("cb-actions-btn"),this.actionsMenu=this.shadowRoot.getElementById("cb-actions-menu"),this.historyBtn=this.shadowRoot.getElementById("cb-history-btn"),this.historyPanel=this.shadowRoot.getElementById("cb-history-panel"),this.historyList=this.shadowRoot.getElementById("cb-history-list"),this.historyTitle=this.shadowRoot.getElementById("cb-history-panel-title"),this.historyFooter=this.shadowRoot.getElementById("cb-history-panel-footer"),this.historyClearBtn=this.shadowRoot.getElementById("cb-history-clear-btn"),this.clearAllOverlay=this.shadowRoot.getElementById("cb-clear-all-overlay"),this.clearAllDialog=this.shadowRoot.getElementById("cb-clear-all-dialog"),this.clearAllCancelBtn=this.shadowRoot.getElementById("cb-clear-all-cancel-btn"),this.clearAllConfirmBtn=this.shadowRoot.getElementById("cb-clear-all-confirm-btn"),this.historyClearBtn&&this.historyClearBtn.addEventListener("click",()=>this._openClearAllModal()),this.clearAllOverlay&&this.clearAllOverlay.addEventListener("click",r=>{r.target===this.clearAllOverlay&&this._closeClearAllModal()}),this.clearAllCancelBtn&&this.clearAllCancelBtn.addEventListener("click",()=>this._closeClearAllModal()),this.clearAllConfirmBtn&&this.clearAllConfirmBtn.addEventListener("click",()=>{this._closeClearAllModal(),this._clearAllSessions()}),this._updateSendButtonState(),this._initLightbox(),this._initDropZone()}_initLightbox(){this.lightboxDialog=this.shadowRoot.querySelector(".cb-lightbox-dialog"),this.lightboxImg=this.shadowRoot.querySelector(".cb-lightbox-image"),this.lightboxDialog.addEventListener("cancel",e=>{e.preventDefault(),this._closeLightbox()}),this.shadowRoot.addEventListener("click",e=>{let t=e.target;if(t.tagName==="IMG"&&(t.classList.contains("cb-image")||t.classList.contains("cb-image-message-img"))){if(t.closest("a"))return;this._openLightbox(t.src,t.alt),e.preventDefault();return}if(t.closest(".cb-attachment-thumb")&&this._attachmentPreviewUrl){this._openLightbox(this._attachmentPreviewUrl,"Vista previa de la imagen adjunta");return}if(this.lightboxDialog.open){if(t.closest(".cb-lightbox-close-btn")){this._closeLightbox();return}if(t===this.lightboxDialog){this._closeLightbox();return}}}),this.shadowRoot.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||e.target.closest(".cb-attachment-thumb")&&this._attachmentPreviewUrl&&(e.preventDefault(),this._openLightbox(this._attachmentPreviewUrl,"Vista previa de la imagen adjunta"))})}_openLightbox(e,t){this.lightboxImg.src=e,this.lightboxImg.alt=t||"Imagen ampliada",this.lightboxDialog.showModal()}_closeLightbox(){!this.lightboxDialog.open||this.lightboxDialog.classList.contains("is-closing")||(this.lightboxDialog.classList.add("is-closing"),setTimeout(()=>{this.lightboxDialog.close(),this.lightboxDialog.classList.remove("is-closing"),this.lightboxImg.src=""},280))}_applyConfig(){let{style:e}=this.config;e.primaryColor&&e.primaryColor!==P.style.primaryColor&&(this.host.style.setProperty("--cb-primary",e.primaryColor),this.host.style.setProperty("--cb-user-bubble",e.primaryColor),this.host.style.setProperty("--cb-primary-hover",this._darkenColor(e.primaryColor,15))),e.textColor&&e.textColor!==P.style.textColor&&(this.host.style.setProperty("--cb-primary-text",e.textColor),this.host.style.setProperty("--cb-user-text",e.textColor)),e.borderRadius&&e.borderRadius!==P.style.borderRadius&&this.host.style.setProperty("--cb-radius",e.borderRadius),e.fontFamily&&e.fontFamily!=="inherit"&&this.host.style.setProperty("--cb-font",e.fontFamily),e.position==="left"?(this.launcher.classList.add("cb-position--left"),this.window.classList.add("cb-position--left")):(this.launcher.classList.remove("cb-position--left"),this.window.classList.remove("cb-position--left")),e.theme==="light"?this.window.setAttribute("data-theme","light"):e.theme==="dark"?this.window.setAttribute("data-theme","dark"):this.window.removeAttribute("data-theme")}_bindEvents(){this.launcherBtn.addEventListener("click",()=>this._toggleChat()),this.sendBtn.addEventListener("click",()=>this._handleSend()),this.actionsBtn&&this.actionsBtn.addEventListener("click",a=>{a.stopPropagation(),this._toggleActionsMenu()}),this.shadowRoot.addEventListener("click",a=>{if(this.actionsMenu&&!this.actionsMenu.classList.contains("cb-is-hidden")){let r=this.shadowRoot.getElementById("cb-actions-dropdown");r&&!r.contains(a.target)&&this._closeActionsMenu()}}),this.historyBtn&&this.historyBtn.addEventListener("click",()=>{this._closeActionsMenu(),this._toggleHistoryPanel()});let e=this.shadowRoot.getElementById("cb-history-panel-close");e&&e.addEventListener("click",()=>this._closeHistoryPanel());let t=this.shadowRoot.getElementById("cb-new-session-btn");t&&t.addEventListener("click",()=>{this._closeActionsMenu(),this._startNewChat()});let i=this.shadowRoot.getElementById("cb-close-window-btn");i&&i.addEventListener("click",()=>this._closeChat()),this._audioSupported&&this.micBtn?this.micBtn.addEventListener("click",()=>this._handleMicClick()):this.micBtn&&(this.micBtn.style.display="none"),this.toggleSizeBtn.addEventListener("click",()=>this._toggleWideMode()),this.replyCancelBtn.addEventListener("click",()=>{this._clearReply(),this.input.focus()}),this.input.addEventListener("keydown",a=>{a.key==="Enter"&&!a.shiftKey&&(a.preventDefault(),this._handleSend())}),this.input.addEventListener("input",()=>{this._autoResizeTextarea(),this._updateSendButtonState()}),this.input.addEventListener("paste",a=>this._handlePaste(a)),document.addEventListener("keydown",a=>{a.key==="Escape"&&(this.clearAllOverlay&&this.clearAllOverlay.classList.contains("cb-is-active")?(this._closeClearAllModal(),a.stopPropagation()):this.historyPanel&&this.historyPanel.classList.contains("cb-is-active")?(this._closeHistoryPanel(),a.stopPropagation()):this.isOpen&&this._closeChat())}),this.messagesContainer.addEventListener("scroll",()=>this._handleScroll()),this.scrollBottomBtn.addEventListener("click",()=>{this.messagesContainer.scrollTo({top:this.messagesContainer.scrollHeight,behavior:"smooth"})}),this.attachBtn&&this.attachBtn.addEventListener("click",()=>{this.isLoading||this.isRecording||this.fileInput.click()}),this.fileInput&&this.fileInput.addEventListener("change",a=>this._handleFileSelected(a)),this.attachmentRemoveBtn&&this.attachmentRemoveBtn.addEventListener("click",()=>{this._clearPendingImage(),this._updateSendButtonState(),this.input.focus()})}_initDraggable(){this.header=this.shadowRoot.getElementById("cb-header"),this.currentTranslateX=0,this.isDragging=!1,this.isResizing=!1,this.dragStartX=0,this.dragStartY=0,this.dragStartTranslateX=0,this.dragStartHeight=0,this.dragStartBottom=0;let e=r=>{if(!this.isDragging)return;let s=r.clientX-this.dragStartX,h=this.dragStartTranslateX+s,c=this.window.getBoundingClientRect(),o=c.width,l=c.left-this.currentTranslateX,d=12-l,m=window.innerWidth-o-12-l;h=Math.max(d,Math.min(m,h)),this.currentTranslateX=h,this.window.style.setProperty("--cb-drag-x",`${h}px`),this.launcher.style.setProperty("--cb-drag-x",`${h}px`);let f=r.clientY-this.dragStartY,b=this.dragStartHeight-f,g=350,y=this.dragStartBottom-24;b=Math.max(g,Math.min(y,b)),this.window.style.setProperty("--cb-window-height",`${b}px`)},t=r=>{this.isDragging&&(this.isDragging=!1,this.window.classList.remove("cb-is-dragging"),this.launcher.classList.remove("cb-is-dragging"),document.removeEventListener("pointermove",e),document.removeEventListener("pointerup",t),document.removeEventListener("pointercancel",t))};this.header.addEventListener("pointerdown",r=>{if(r.target.closest(".cb-toggle-size-btn")||r.target.closest("#cb-resize-handle")||r.target.closest(".cb-toast-container")||window.innerWidth<=480)return;this.isDragging=!0,this.dragStartX=r.clientX,this.dragStartY=r.clientY,this.dragStartTranslateX=this.currentTranslateX;let s=this.window.getBoundingClientRect();this.dragStartHeight=s.height,this.dragStartBottom=s.bottom,this.window.classList.add("cb-is-dragging"),this.launcher.classList.add("cb-is-dragging"),document.addEventListener("pointermove",e),document.addEventListener("pointerup",t),document.addEventListener("pointercancel",t),r.preventDefault()});let i=r=>{if(!this.isResizing)return;let s=r.clientY-this.dragStartY,h=this.dragStartHeight-s,c=350,l=this.dragStartBottom-24;h=Math.max(c,Math.min(l,h)),this.window.style.setProperty("--cb-window-height",`${h}px`)},a=r=>{this.isResizing&&(this.isResizing=!1,this.window.classList.remove("cb-is-dragging"),document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",a),document.removeEventListener("pointercancel",a))};this.resizeHandle.addEventListener("pointerdown",r=>{if(window.innerWidth<=480)return;this.isResizing=!0,this.dragStartY=r.clientY;let s=this.window.getBoundingClientRect();this.dragStartHeight=s.height,this.dragStartBottom=s.bottom,this.window.classList.add("cb-is-dragging"),document.addEventListener("pointermove",i),document.addEventListener("pointerup",a),document.addEventListener("pointercancel",a),r.stopPropagation(),r.preventDefault()}),this._onWindowResize=()=>{this.currentTranslateX=0,this.window.style.setProperty("--cb-drag-x","0px"),this.launcher.style.setProperty("--cb-drag-x","0px"),this.window.style.removeProperty("--cb-window-height")},window.addEventListener("resize",this._onWindowResize)}_toggleChat(){this.isOpen?this._closeChat():this._openChat()}_toggleWideMode(){this.isWide=!this.isWide;let e=this.toggleSizeBtn,t=e.querySelector("svg");this.isWide?(this.window.style.setProperty("--cb-window-width","650px"),this.window.style.setProperty("--cb-window-height","780px"),this.window.classList.add("cb-is-wide"),e.setAttribute("aria-label","Contraer ventana"),e.setAttribute("title","Contraer ventana"),t.innerHTML='<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="10" y1="14" x2="3" y2="21"></line><line x1="21" y1="3" x2="14" y2="10"></line>'):(this.window.style.removeProperty("--cb-window-width"),this.window.style.removeProperty("--cb-window-height"),this.window.classList.remove("cb-is-wide"),e.setAttribute("aria-label","Ampliar ventana"),e.setAttribute("title","Ampliar ventana"),t.innerHTML='<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>')}_openChat(){this.isOpen=!0,this.window.classList.add("cb-is-open"),this.window.setAttribute("aria-hidden","false"),this.launcherBtn.classList.add("cb-is-open"),this.launcherBtn.setAttribute("aria-expanded","true"),this.launcherBtn.setAttribute("aria-label","Cerrar chat"),this._clearNotificationBadge(),this._scrollToBottom(),this.avatarVideo&&this._avatarVideoVisible&&this.avatarVideo.play().catch(()=>{}),setTimeout(()=>this.input.focus(),300)}_closeChat(){this.isOpen=!1,this.window.classList.remove("cb-is-open"),this.window.setAttribute("aria-hidden","true"),this.launcherBtn.classList.remove("cb-is-open"),this.launcherBtn.setAttribute("aria-expanded","false"),this.launcherBtn.setAttribute("aria-label","Abrir chat"),this.avatarVideo?.pause()}_startNewChat(){this.activeRequest&&this.activeRequest.abort(),this.activeRequest=null,this._setLoadingState(!1),this._clearReply(),this._clearPendingImage(),this.chatHistory&&this.chatHistory.length>0&&_(this.sessionId,this._getHistoryTitle(),this.chatHistory.length),this._clearMessages(),this.sessionId=G(),this.chatHistory=[],this.messageCount=0,this._showWelcomeMessage()}_getTimeString(e=new Date){let t=e.getHours(),i=e.getMinutes().toString().padStart(2,"0"),a=t>=12?"p.m.":"a.m.";return t=t%12,t=t||12,`${t.toString().padStart(2,"0")}:${i} ${a}`}_checkDateDivider(e){let t=e.toDateString();if(this.lastMessageDateString!==t){this.lastMessageDateString=t;let i=document.createElement("div");i.className="cb-date-divider";let a=new Date,r=new Date(a);if(r.setDate(r.getDate()-1),t===a.toDateString())i.textContent="Hoy";else if(t===r.toDateString())i.textContent="Ayer";else{let s=e.getDate().toString().padStart(2,"0"),h=(e.getMonth()+1).toString().padStart(2,"0"),c=e.getFullYear();i.textContent=`${s}/${h}/${c}`}this.messagesContainer.insertBefore(i,this.typingIndicator)}}_addBotMessage(e,t=new Date,i=!0,a=!0){this._hideThinkingIndicator(),this._hideEmptyState(),this._checkDateDivider(t);let r=document.createElement("div");r.className="cb-message cb-message--bot";let s=document.createElement("div");if(s.className="cb-msg-avatar",this.config.bot.avatar){let p=document.createElement("img");p.src=this._escapeAttr(this.config.bot.avatar),p.alt=this._escapeAttr(this.config.bot.name),s.appendChild(p)}else s.innerHTML=u.bot;let h=document.createElement("div");h.className="cb-msg-col";let c=document.createElement("div");c.className="cb-msg-bubble-row";let o=document.createElement("div");if(o.className="cb-message-content",c.appendChild(o),h.appendChild(c),this.config.behavior.showTimestamps){let p=document.createElement("span");p.className="cb-message-time",p.textContent=this._getTimeString(t),h.appendChild(p)}r.appendChild(s),r.appendChild(h);let l=document.createElement("button");l.className="cb-message-reply-btn",l.setAttribute("aria-label","Responder a este mensaje"),l.setAttribute("title","Responder"),l.innerHTML=u.reply,l.addEventListener("click",()=>{let p=o.textContent||o.innerText||"";this._setReply(p.trim())}),c.appendChild(l),this.messagesContainer.insertBefore(r,this.typingIndicator),this.messageCount++,this._scrollToBottom(),i&&(this.chatHistory.push({role:"bot",text:e,date:t.toISOString()}),A(this.chatHistory,this.sessionId),_(this.sessionId,this._getHistoryTitle(),this.chatHistory.length));let d=ee(e);if(!d||d.trim()===""||!a){if(o.innerHTML=d||e,!a)return r;let p=()=>{x||(x=!0,this.activeTyping=null,this._scrollToBottom())},x=!1;return this.activeTyping={complete:p},p(),r}let m=document.createElement("div");m.innerHTML=d,m.querySelectorAll("li").forEach(p=>{p.classList.add("cb-li-hidden")});let b=[];function g(p){if(p.nodeType===Node.TEXT_NODE)b.push({node:p,fullText:p.nodeValue}),p.nodeValue="";else for(let x=0;x<p.childNodes.length;x++)g(p.childNodes[x])}for(g(m);m.firstChild;)o.appendChild(m.firstChild);let v=document.createElement("span");v.className="cb-streaming-cursor";let y=0,k=0,j=!1;this.activeTyping&&this.activeTyping.complete();let O=e.length,oe=Math.max(3,Math.min(15,1e3/(O*.25))),ne=O>150?Math.ceil(O/150):1,Y=()=>{if(j)return;if(y>=b.length){Z();return}let p=b[y];if(k===0){let E=p.node.parentNode;for(;E&&E!==o;)E.classList&&E.classList.contains("cb-li-hidden")&&E.classList.remove("cb-li-hidden"),E=E.parentNode}(v.parentNode!==p.node.parentNode||v.previousSibling!==p.node)&&p.node.parentNode.insertBefore(v,p.node.nextSibling);let x=0;for(;x<ne&&k<p.fullText.length;)p.node.nodeValue+=p.fullText[k],k++,x++;k>=p.fullText.length&&(y++,k=0),this._scrollToBottom(),this.activeTypingTimeout=setTimeout(Y,oe)},Z=()=>{if(j)return;j=!0,clearTimeout(this.activeTypingTimeout),o.querySelectorAll(".cb-li-hidden").forEach(x=>x.classList.remove("cb-li-hidden")),b.forEach(x=>{x.node.nodeValue=x.fullText}),v.remove(),this.activeTyping=null,this._scrollToBottom()};return this.activeTyping={complete:Z},Y(),r}_addUserMessage(e,t=new Date,i=!0){this.activeTyping&&this.activeTyping.complete(),this._hideEmptyState(),this._checkDateDivider(t);let a=document.createElement("div");a.className="cb-message cb-message--user";let r=document.createElement("div");if(r.className="cb-message-content",this.replyingTo){let s=document.createElement("div");s.className="cb-message-quote";let h=document.createElement("div");h.className="cb-message-quote-bar";let c=document.createElement("span");c.className="cb-message-quote-text";let o=80,l=this.replyingTo;c.textContent=this.replyingTo.length>o?this.replyingTo.substring(0,o)+"...":this.replyingTo,s.appendChild(h),s.appendChild(c),r.appendChild(s),this._clearReply(),this.replyingTo=l}if(r.appendChild(document.createTextNode(e)),a.appendChild(r),this.config.behavior.showTimestamps){let s=document.createElement("span");s.className="cb-message-time",s.textContent=this._getTimeString(t),a.appendChild(s)}this.messagesContainer.insertBefore(a,this.typingIndicator),this.messageCount++,i&&(this.chatHistory.push({role:"user",text:e,date:t.toISOString(),replyingTo:this.replyingTo,isAudio:!1}),A(this.chatHistory,this.sessionId),_(this.sessionId,this._getHistoryTitle(),this.chatHistory.length)),this.replyingTo&&(this.replyingTo=null),this._scrollToBottom()}_setReply(e){if(!e)return;this.replyingTo=e;let t=80,i=e.length>t?e.substring(0,t)+"...":e;this.replyText.textContent=i,this.replyPreview.classList.add("cb-visible"),this.replyPreview.setAttribute("aria-hidden","false"),this.input.focus()}_clearReply(){this.replyingTo=null,this.replyPreview.classList.remove("cb-visible"),this.replyPreview.setAttribute("aria-hidden","true"),this.replyText.textContent=""}_showWelcomeMessage(){this._insertAgentIntro(),this.config.bot.welcomeMessage&&setTimeout(()=>{this._addBotMessage(this.config.bot.welcomeMessage)},400)}_setupAvatarVideo(e,t){if(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let a=1.5,r=document.createElement("video");r.className="cb-agent-intro-video",r.muted=!0,r.loop=!1,r.playsInline=!0,r.preload="auto",r.src=this._escapeAttr(t),r.setAttribute("muted",""),r.setAttribute("playsinline",""),r.setAttribute("webkit-playsinline",""),r.setAttribute("disablepictureinpicture",""),r.setAttribute("disableremoteplayback",""),r.setAttribute("aria-hidden","true"),r.tabIndex=-1,e.appendChild(r),r.addEventListener("ended",()=>{r.currentTime=0,r.play().catch(()=>{})}),r.addEventListener("canplay",()=>{e.classList.add("cb-is-playing"),r.playbackRate=a,r.play().catch(()=>{})},{once:!0}),this._avatarVideoObserver?.disconnect(),this._avatarVideoObserver=new IntersectionObserver(([s])=>{this._avatarVideoVisible=s.isIntersecting,s.isIntersecting&&this.isOpen?r.play().catch(()=>{}):r.pause()},{root:this.messagesContainer,threshold:0}),this._avatarVideoObserver.observe(r),this.avatarVideo=r}_insertAgentIntro(){let e=this.messagesContainer.querySelector(".cb-agent-intro");e&&e.remove();let t=document.createElement("div");t.className="cb-agent-intro";let i=document.createElement("div");if(i.className="cb-agent-intro-avatar",this.config.bot.avatar){let s=document.createElement("img");s.src=this._escapeAttr(this.config.bot.avatar),s.alt=this._escapeAttr(this.config.bot.name),i.appendChild(s),this.config.bot.avatarVideo&&this._setupAvatarVideo(i,this.config.bot.avatarVideo)}else i.innerHTML=u.bot;let a=document.createElement("p");a.className="cb-agent-intro-name",a.textContent=this.config.bot.name;let r=document.createElement("p");r.className="cb-agent-intro-subtitle",r.textContent=this.config.bot.subtitle||"",t.appendChild(i),t.appendChild(a),this.config.bot.subtitle&&t.appendChild(r),this.messagesContainer.insertBefore(t,this.messagesContainer.firstChild)}_clearMessages(){this.activeTyping&&(this.activeTyping.complete(),this.activeTyping=null),this.messagesContainer.querySelectorAll(".cb-message:not(#cb-typing), .cb-date-divider, .cb-agent-intro").forEach(t=>t.remove()),this.lastMessageDateString=null}_showTypingIndicator(){this.typingIndicator.classList.add("cb-visible");let e=this.typingIndicator.querySelector(".cb-typing-indicator");e&&(e.classList.remove("cb-thinking"),e.innerHTML=`
        <span></span><span></span><span></span>
      `),this._scrollToBottom()}_hideTypingIndicator(){this.typingIndicator.classList.remove("cb-visible")}_showThinkingIndicator(e){this._hideTypingIndicator();let t=this.typingIndicator;t.classList.add("cb-visible");let i=t.querySelector(".cb-typing-indicator");i&&(i.classList.add("cb-thinking"),i.innerHTML=`<span class="cb-thinking-text">${e}</span>`),this._scrollToBottom()}_hideThinkingIndicator(){this.thinkingTimeout&&(clearTimeout(this.thinkingTimeout),this.thinkingTimeout=null),this.typingIndicator.classList.remove("cb-visible");let e=this.typingIndicator.querySelector(".cb-typing-indicator");e&&(e.classList.remove("cb-thinking"),e.innerHTML=`
        <span></span><span></span><span></span>
      `)}_hideEmptyState(){}_showEmptyState(){}_showNotificationBadge(){this.isOpen||this.notificationBadge.classList.add("cb-visible")}_clearNotificationBadge(){this.notificationBadge.classList.remove("cb-visible")}_showErrorToast(e){if(!this.toastContainer)return;let t=5e3,i=300,a=document.createElement("div");a.className="cb-toast";let r=document.createElement("span");r.className="cb-toast-icon",r.innerHTML=u.warning;let s=document.createElement("span");s.className="cb-toast-text",s.textContent=e;let h=document.createElement("button");h.className="cb-toast-close",h.setAttribute("aria-label","Cerrar notificaci\xF3n"),h.innerHTML=u.close,a.appendChild(r),a.appendChild(s),a.appendChild(h),this.toastContainer.appendChild(a);let c,o=()=>{a.dataset.dismissed||(a.dataset.dismissed="true",clearTimeout(c),a.classList.remove("cb-toast--visible"),setTimeout(()=>a.remove(),i))};h.addEventListener("click",o),c=setTimeout(o,t),requestAnimationFrame(()=>a.classList.add("cb-toast--visible"))}async _handleSend(){let e=this.input.value.trim(),t=this.pendingImage;if(!e&&!t||this.isLoading)return;if(e.length>this.config.behavior.maxMessageLength){this._showErrorToast(`El mensaje es demasiado largo. Por favor, usa menos de ${this.config.behavior.maxMessageLength} caracteres.`);return}if(!this.config.webhook.url){this._showErrorToast("El widget no est\xE1 configurado correctamente. Falta la URL del webhook de n8n.");return}if(this.input.value="",this._autoResizeTextarea(),this._updateSendButtonState(),t){this._clearPendingImage(),this._updateSendButtonState(),this._addUserImageMessage(t,e),this._sendImageToWebhook(t,e);return}this._setLoadingState(!0),this._addUserMessage(e),this._showTypingIndicator();let a=setTimeout(()=>{this.isLoading&&this._showThinkingIndicator("Pensando...")},3e3);this.activeRequest&&this.activeRequest.abort(),this.activeRequest=new AbortController;try{let r=await te(this.config.webhook.url,e,this.sessionId,{},this.config.behavior.requestTimeout,this.activeRequest.signal,s=>{s&&(s.tool||s.event)&&(clearTimeout(a),this._showThinkingIndicator("Pensando..."))});clearTimeout(a),this._hideTypingIndicator(),this._hideThinkingIndicator(),r&&r.output?(this._addBotMessage(r.output),this.isOpen||this._showNotificationBadge(),r.sessionId&&r.sessionId!==this.sessionId&&(this.sessionId=r.sessionId,S(this.sessionId))):this._showErrorToast("Ocurri\xF3 un error al procesar tu mensaje. La respuesta del servidor no tiene el formato esperado.")}catch(r){if(clearTimeout(a),r.name==="AbortError")return;this._hideTypingIndicator(),this._hideThinkingIndicator(),this._showErrorToast(r.message||this.config.bot.offlineMessage)}finally{this._setLoadingState(!1),this.isOpen&&this.input.focus()}}_setLoadingState(e){this.isLoading=e,this.input.disabled=e,this.sendBtn.disabled=e,this.attachBtn&&(this.attachBtn.disabled=e),e?this.sendBtn.setAttribute("aria-busy","true"):this.sendBtn.removeAttribute("aria-busy")}_autoResizeTextarea(){this.input.style.height="auto";let e=100,t=this.input.scrollHeight;this.input.style.height=`${Math.min(t,e)}px`}_updateSendButtonState(){let e=this.input.value.trim().length>0,t=!!this.pendingImage;e||t?(this.sendBtn.classList.add("cb-visible"),this.micBtn&&this.micBtn.classList.remove("cb-visible")):(this.sendBtn.classList.remove("cb-visible"),this.micBtn&&this._audioSupported&&!this.isRecording&&this.micBtn.classList.add("cb-visible"))}_scrollToBottom(){requestAnimationFrame(()=>{this.messagesContainer.scrollTop=this.messagesContainer.scrollHeight})}_handleScroll(){let e=this.messagesContainer,i=e.scrollHeight-e.clientHeight-e.scrollTop>150,a=e.scrollHeight>e.clientHeight,r=this.historyPanel&&this.historyPanel.classList.contains("cb-is-active");i&&a&&!r?this.scrollBottomBtn.classList.add("cb-visible"):this.scrollBottomBtn.classList.remove("cb-visible")}_insertAtCursor(e,t){let i=e.selectionStart,a=e.selectionEnd,r=e.value;e.value=r.substring(0,i)+t+r.substring(a);let s=i+t.length;e.selectionStart=e.selectionEnd=s,e.focus(),this._autoResizeTextarea(),this._updateSendButtonState()}_mergeConfig(e,t){let i={...e};for(let a in t)t[a]!==null&&typeof t[a]=="object"&&!Array.isArray(t[a])&&typeof e[a]=="object"?i[a]=this._mergeConfig(e[a],t[a]):t[a]!==void 0&&t[a]!==null&&(i[a]=t[a]);return i}_escapeAttr(e){return String(e||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}_darkenColor(e,t){if(!e||!e.startsWith("#"))return e;try{let i=parseInt(e.replace("#",""),16),a=Math.max(0,(i>>16)-Math.round(255*t/100)),r=Math.max(0,(i>>8&255)-Math.round(255*t/100)),s=Math.max(0,(i&255)-Math.round(255*t/100));return`#${(a<<16|r<<8|s).toString(16).padStart(6,"0")}`}catch{return e}}_handleMicClick(){this.isRecording?this._stopRecording():this._startRecording()}async _startRecording(){this.isLoading||(this.audioRecorder=new N,this._showRecordingUI(),this.audioRecorder.onLevelChange=e=>{this._recordingBars&&this._recordingBars.forEach((t,i)=>{let a=Math.max(4,Math.round(e*20+Math.random()*8));t.style.height=`${a}px`})},this.audioRecorder.onTick=e=>{this._recordingTimer&&(this._recordingTimer.textContent=z(e))},this.audioRecorder.onComplete=(e,t)=>{this._hideRecordingUI(),this._addUserAudioMessage(e,t),this._sendAudioToWebhook(e,t,this.audioRecorder.mimeType)},this.audioRecorder.onError=e=>{this._hideRecordingUI(),this._showErrorToast(e)},await this.audioRecorder.start(),this.audioRecorder.mediaRecorder&&(this.isRecording=!0,this.micBtn&&this.micBtn.classList.remove("cb-visible")))}_stopRecording(){this.audioRecorder&&this.audioRecorder.stop(),this.isRecording=!1}_cancelRecording(){this.audioRecorder&&this.audioRecorder.cancel(),this.isRecording=!1,this._hideRecordingUI(),this._updateSendButtonState()}_showRecordingUI(){if(this.input.style.visibility="hidden",this.micBtn&&(this.micBtn.style.visibility="hidden"),this.attachBtn&&(this.attachBtn.disabled=!0),!this._recordingOverlay){let e=document.createElement("div");e.className="cb-recording-ui",e.id="cb-recording-ui";let t=document.createElement("span");t.className="cb-recording-dot";let i=document.createElement("span");i.className="cb-recording-timer",i.textContent="00:00",this._recordingTimer=i;let a=document.createElement("div");a.className="cb-recording-wave",this._recordingBars=[];for(let c=0;c<10;c++){let o=document.createElement("span");o.className="cb-recording-bar",a.appendChild(o),this._recordingBars.push(o)}let r=document.createElement("button");r.className="cb-recording-cancel",r.setAttribute("aria-label","Cancelar grabaci\xF3n"),r.title="Cancelar",r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>',r.addEventListener("click",()=>this._cancelRecording());let s=document.createElement("button");s.className="cb-recording-send",s.setAttribute("aria-label","Enviar audio"),s.title="Enviar audio",s.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405Z"/></svg>',s.addEventListener("click",()=>this._stopRecording()),e.appendChild(t),e.appendChild(i),e.appendChild(a),e.appendChild(r),e.appendChild(s),(this.input.closest(".cb-input-area")||this.input.parentElement).appendChild(e),this._recordingOverlay=e,requestAnimationFrame(()=>e.classList.add("cb-visible"))}}_hideRecordingUI(){this.isRecording=!1,this.input.style.visibility="",this.micBtn&&(this.micBtn.style.visibility=""),this.attachBtn&&(this.attachBtn.disabled=!1),this._recordingOverlay&&(this._recordingOverlay.remove(),this._recordingOverlay=null,this._recordingTimer=null,this._recordingBars=null)}async _addUserAudioMessage(e,t,i=new Date,a=!0){this._hideEmptyState(),this._checkDateDivider(i);let r=document.createElement("div");r.className="cb-message cb-message--user";let s=document.createElement("div");s.className="cb-message-content cb-audio-player";let h=URL.createObjectURL(e),c=new Audio(h),o=document.createElement("button");o.className="cb-audio-play-btn",o.setAttribute("aria-label","Reproducir audio"),o.innerHTML=u.audioPlay;let l=document.createElement("div");l.className="cb-audio-progress-wrapper";let d=document.createElement("div");d.className="cb-audio-progress-bar",l.appendChild(d);let m=document.createElement("span");m.className="cb-audio-duration",m.textContent=z(t);let f=!1;if(o.addEventListener("click",()=>{f?c.pause():c.play().catch(()=>{})}),c.addEventListener("play",()=>{this._activeAudio&&this._activeAudio!==c&&this._activeAudio.pause(),this._activeAudio=c,f=!0,o.innerHTML=u.audioPause,o.setAttribute("aria-label","Pausar audio")}),c.addEventListener("pause",()=>{this._activeAudio===c&&(this._activeAudio=null),f=!1,o.innerHTML=u.audioPlay,o.setAttribute("aria-label","Reproducir audio")}),c.addEventListener("ended",()=>{this._activeAudio===c&&(this._activeAudio=null),f=!1,o.innerHTML=u.audioPlay,o.setAttribute("aria-label","Reproducir audio"),d.style.width="0%",m.textContent=z(t)}),c.addEventListener("timeupdate",()=>{let b=isFinite(c.duration)?c.duration:t,g=b?c.currentTime/b*100:0;d.style.width=`${g}%`;let v=Math.max(0,Math.floor(b-c.currentTime));m.textContent=z(v)}),l.addEventListener("click",b=>{if(!c.duration)return;let g=l.getBoundingClientRect(),v=(b.clientX-g.left)/g.width;c.currentTime=v*c.duration}),s.appendChild(o),s.appendChild(l),s.appendChild(m),r.appendChild(s),this.config.behavior.showTimestamps){let b=document.createElement("span");b.className="cb-message-time",b.textContent=this._getTimeString(i),r.appendChild(b)}if(this.messagesContainer.insertBefore(r,this.typingIndicator),this.messageCount++,a)try{let b=await V(e);this.chatHistory.push({role:"user",isAudio:!0,audioData:b,duration:t,date:i.toISOString()}),A(this.chatHistory,this.sessionId),_(this.sessionId,this._getHistoryTitle(),this.chatHistory.length)}catch(b){console.error("Error guardando historial de audio",b)}this._scrollToBottom()}async _sendAudioToWebhook(e,t,i){this.activeRequest&&this.activeRequest.abort(),this.activeRequest=new AbortController,this._showThinkingIndicator("Escuchando..."),this._setLoadingState(!0);try{let a=await ae(this.config.webhook.url,e,this.sessionId,t,i,{},this.config.behavior.requestTimeout,this.activeRequest.signal);if(a.sessionId&&a.sessionId!==this.sessionId&&(this.sessionId=a.sessionId,S(this.sessionId)),a.event==="thinking")return;this._addBotMessage(a.output||"")}catch(a){if(a.name==="AbortError")return;this._hideThinkingIndicator(),this._showErrorToast(a.message||"Error al procesar el audio. Int\xE9ntalo de nuevo.")}finally{this._setLoadingState(!1),this._updateSendButtonState(),this.activeRequest=null,this.isOpen&&this.input.focus()}}_handleFileSelected(e){let t=e.target.files&&e.target.files[0];e.target.value="",t&&this._processAttachedImage(t)}_handlePaste(e){if(this.isLoading||this.isRecording)return;let t=e.clipboardData&&e.clipboardData.items;if(t){for(let i of t)if(i.kind==="file"&&i.type.startsWith("image/")){let a=i.getAsFile();a&&(e.preventDefault(),this._processAttachedImage(a));break}}}_initDropZone(){let e=0,t=i=>i.dataTransfer&&Array.from(i.dataTransfer.types||[]).includes("Files");this.window.addEventListener("dragenter",i=>{!t(i)||this.isLoading||this.isRecording||(i.preventDefault(),e++,this.dropzoneOverlay.classList.add("cb-visible"))}),this.window.addEventListener("dragover",i=>{!t(i)||this.isLoading||this.isRecording||(i.preventDefault(),i.dataTransfer.dropEffect="copy")}),this.window.addEventListener("dragleave",()=>{e=Math.max(0,e-1),e===0&&this.dropzoneOverlay.classList.remove("cb-visible")}),this.window.addEventListener("drop",i=>{if(!t(i)||(i.preventDefault(),e=0,this.dropzoneOverlay.classList.remove("cb-visible"),this.isLoading||this.isRecording))return;let a=Array.from(i.dataTransfer.files||[]);if(!a.length)return;let r=a.find(s=>s.type.startsWith("image/"))||a[0];this._processAttachedImage(r)})}_processAttachedImage(e){let t=(e.type||"").toLowerCase(),i=(e.name||"").toLowerCase();if(t.startsWith("video/")||/\.(mp4|mov|avi|webm|mkv|3gp)$/.test(i)){this._showErrorToast("No se permiten archivos de video.");return}if(t==="image/gif"||i.endsWith(".gif")){this._showErrorToast("Los archivos GIF no son compatibles. Usa JPG, PNG o WEBP.");return}if(!t.startsWith("image/")){this._showErrorToast("Solo se permiten archivos de imagen.");return}let a=this.config.behavior.maxImageSizeMB||5;if(e.size>a*1024*1024){this._showErrorToast(`La imagen supera el tama\xF1o m\xE1ximo permitido (${a}MB).`);return}this.pendingImage=e,this._showAttachmentPreview(e),this._updateSendButtonState(),this.input.focus()}_showAttachmentPreview(e){this._attachmentPreviewUrl&&URL.revokeObjectURL(this._attachmentPreviewUrl);let t=URL.createObjectURL(e);this._attachmentPreviewUrl=t,this.attachmentThumb.style.backgroundImage=`url("${t}")`,this.attachmentName.textContent=e.name||"Imagen",this.attachmentPreview.classList.add("cb-visible"),this.attachmentPreview.setAttribute("aria-hidden","false")}_clearPendingImage(){this.pendingImage=null,this._attachmentPreviewUrl&&(URL.revokeObjectURL(this._attachmentPreviewUrl),this._attachmentPreviewUrl=null),this.attachmentThumb&&(this.attachmentThumb.style.backgroundImage=""),this.attachmentName&&(this.attachmentName.textContent=""),this.attachmentPreview&&(this.attachmentPreview.classList.remove("cb-visible"),this.attachmentPreview.setAttribute("aria-hidden","true"))}async _addUserImageMessage(e,t="",i=new Date,a=!0){this.activeTyping&&this.activeTyping.complete(),this._hideEmptyState(),this._checkDateDivider(i);let r=document.createElement("div");r.className="cb-message cb-message--user";let s=document.createElement("div");s.className="cb-message-content cb-image-message";let h=URL.createObjectURL(e),c=document.createElement("img");if(c.src=h,c.alt=t||"Imagen enviada",c.className="cb-image-message-img",c.loading="lazy",s.appendChild(c),t){let o=document.createElement("p");o.className="cb-image-message-caption",o.textContent=t,s.appendChild(o)}if(r.appendChild(s),this.config.behavior.showTimestamps){let o=document.createElement("span");o.className="cb-message-time",o.textContent=this._getTimeString(i),r.appendChild(o)}if(this.messagesContainer.insertBefore(r,this.typingIndicator),this.messageCount++,a)try{let o=await V(e);this.chatHistory.push({role:"user",isImage:!0,imageData:o,mimeType:e.type||"image/*",fileName:e.name||"",caption:t||"",date:i.toISOString()}),A(this.chatHistory,this.sessionId),_(this.sessionId,this._getHistoryTitle(),this.chatHistory.length)}catch(o){console.error("Error guardando historial de imagen",o)}this._scrollToBottom()}async _sendImageToWebhook(e,t){this.activeRequest&&this.activeRequest.abort(),this.activeRequest=new AbortController,this._showThinkingIndicator("Analizando imagen..."),this._setLoadingState(!0);try{let i=await ie(this.config.webhook.url,e,this.sessionId,t,{},this.config.behavior.requestTimeout,this.activeRequest.signal);i.sessionId&&i.sessionId!==this.sessionId&&(this.sessionId=i.sessionId,S(this.sessionId)),this._addBotMessage(i.output||"")}catch(i){if(i.name==="AbortError")return;this._hideThinkingIndicator(),this._showErrorToast(i.message||"Error al procesar la imagen. Int\xE9ntalo de nuevo.")}finally{this._setLoadingState(!1),this.activeRequest=null,this.isOpen&&this.input.focus()}}_getHistoryTitle(){let e=this.chatHistory.find(t=>t.role==="user");return e?e.text:"Conversaci\xF3n 1"}_formatRelativeDate(e){let t=new Date(e),i=new Date,a=new Date(i);a.setDate(a.getDate()-1);let r=t.getHours(),s=t.getMinutes().toString().padStart(2,"0"),h=r>=12?"p.m.":"a.m.";r=r%12,r=r||12;let c=`${r.toString().padStart(2,"0")}:${s} ${h}`;if(t.toDateString()===i.toDateString())return`Hoy, ${c}`;if(t.toDateString()===a.toDateString())return`Ayer, ${c}`;{let o=t.getDate().toString().padStart(2,"0"),l=(t.getMonth()+1).toString().padStart(2,"0"),d=t.getFullYear();return`${o}/${l}/${d}, ${c}`}}_toggleActionsMenu(){this.actionsMenu&&!this.actionsMenu.classList.contains("cb-is-hidden")?this._closeActionsMenu():(this.actionsMenu.classList.remove("cb-is-hidden"),this.actionsBtn.setAttribute("aria-expanded","true"))}_closeActionsMenu(){this.actionsMenu&&(this.actionsMenu.classList.add("cb-is-hidden"),this.actionsBtn.setAttribute("aria-expanded","false"))}_toggleHistoryPanel(){this.historyPanel.classList.contains("cb-is-active")?this._closeHistoryPanel():this._openHistoryPanel()}_openHistoryPanel(){let e=this.messagesContainer.offsetTop;this.historyPanel.style.top=`${e}px`,this.historyPanel.style.bottom="0px",this._renderHistoryPanel(),this.historyPanel.classList.add("cb-is-active"),this.historyPanel.setAttribute("aria-hidden","false"),this.messagesContainer.classList.add("cb-history-active"),this.window.classList.add("cb-history-open"),this.actionsBtn&&this.actionsBtn.classList.add("cb-is-active"),this.scrollBottomBtn&&this.scrollBottomBtn.classList.remove("cb-visible")}_closeHistoryPanel(){this.historyPanel.classList.remove("cb-is-active"),this.historyPanel.setAttribute("aria-hidden","true"),this.messagesContainer.classList.remove("cb-history-active"),this.window.classList.remove("cb-history-open"),this.actionsBtn&&this.actionsBtn.classList.remove("cb-is-active"),this._handleScroll()}_renderHistoryPanel(){let e=B(),t=e.find(o=>o.sessionId===this.sessionId),i=e.filter(o=>o.sessionId!==this.sessionId);if(this.historyTitle&&(this.historyTitle.textContent=i.length?`Conversaciones \xB7 ${i.length}`:"Conversaciones"),this.historyList.innerHTML="",t&&this.historyList.appendChild(this._buildHistoryItem(t,!0)),i.length===0){let o=document.createElement("div");o.className="cb-history-empty",o.innerHTML=`
        <div class="cb-history-empty-icon">${u.chatEmpty}</div>
        <p class="cb-history-empty-title">Sin conversaciones anteriores</p>
        <p class="cb-history-empty-sub">Tus chats pasados aparecer\xE1n aqu\xED</p>
      `,this.historyList.appendChild(o),this.historyFooter&&this.historyFooter.classList.add("cb-is-hidden");return}this.historyFooter&&this.historyFooter.classList.remove("cb-is-hidden");let a=new Date,r=new Date(a.getFullYear(),a.getMonth(),a.getDate()),s=new Date(r);s.setDate(s.getDate()-1);let h=new Date(r);h.setDate(h.getDate()-7);let c=[{label:"Hoy",items:[]},{label:"Ayer",items:[]},{label:"Esta semana",items:[]},{label:"M\xE1s antiguas",items:[]}];i.forEach(o=>{let l=new Date(o.lastUserMessageAt||o.lastMessageAt),d=new Date(l.getFullYear(),l.getMonth(),l.getDate());d>=r?c[0].items.push(o):d>=s?c[1].items.push(o):d>=h?c[2].items.push(o):c[3].items.push(o)}),c.forEach(o=>{if(o.items.length===0)return;let l=document.createElement("div");l.className="cb-history-group-label",l.textContent=o.label,this.historyList.appendChild(l),o.items.forEach(d=>{this.historyList.appendChild(this._buildHistoryItem(d))})})}_buildHistoryItem(e,t=!1){let i=document.createElement("div");i.className=t?"cb-history-item cb-history-item--active":"cb-history-item",i.setAttribute("role","button"),i.setAttribute("tabindex",t?"-1":"0"),t&&i.setAttribute("aria-disabled","true"),i.dataset.sessionId=e.sessionId;let r=[...D(e.sessionId)].reverse().find(c=>c.role==="bot"),s=r?r.text.replace(/[*_~`#>|[\]!]/g,"").replace(/\s+/g," ").trim().slice(0,200):"",h=e.messageCount===1?"1 mensaje":`${e.messageCount} mensajes`;return i.innerHTML=`
      <div class="cb-history-item-content">
        <div class="cb-history-item-title-row">
          <div class="cb-history-item-title" title="${this._escapeAttr(e.title)}">${this._escapeAttr(e.title)}</div>
          ${t?'<span class="cb-history-item-badge">Actual</span>':""}
        </div>
        ${s?`<div class="cb-history-item-preview">${this._escapeAttr(s)}</div>`:""}
        <div class="cb-history-item-meta">
          <span class="cb-history-item-date">${this._formatRelativeDate(e.lastUserMessageAt||e.lastMessageAt)}</span>
          <span class="cb-history-item-dot">\xB7</span>
          <span class="cb-history-item-count">${h}</span>
        </div>
      </div>
      ${t?"":`<button class="cb-history-item-delete" aria-label="Eliminar conversaci\xF3n" title="Eliminar conversaci\xF3n">
        ${u.trash}
      </button>`}
    `,t||(i.addEventListener("click",c=>{c.target.closest(".cb-history-item-delete")?(c.stopPropagation(),this._confirmDeleteSession(e.sessionId,i)):i.classList.contains("cb-history-item--confirming")||this._loadSession(e.sessionId)}),i.addEventListener("keydown",c=>{(c.key==="Enter"||c.key===" ")&&!i.classList.contains("cb-history-item--confirming")&&(c.preventDefault(),this._loadSession(e.sessionId)),c.key==="Escape"&&i.classList.contains("cb-history-item--confirming")&&this._cancelDeleteSession(i)})),i}_confirmDeleteSession(e,t){if(t.classList.contains("cb-history-item--confirming"))return;t.classList.add("cb-history-item--confirming");let i=document.createElement("div");i.className="cb-history-item-confirm",i.innerHTML=`
      <span class="cb-history-item-confirm-text">\xBFEliminar esta conversaci\xF3n?</span>
      <div class="cb-history-item-confirm-actions">
        <button class="cb-history-item-confirm-no">Cancelar</button>
        <button class="cb-history-item-confirm-yes">Eliminar</button>
      </div>
    `,t.appendChild(i),i.querySelector(".cb-history-item-confirm-yes").addEventListener("click",a=>{a.stopPropagation(),this._deleteSession(e,t)}),i.querySelector(".cb-history-item-confirm-no").addEventListener("click",a=>{a.stopPropagation(),this._cancelDeleteSession(t)}),setTimeout(()=>i.querySelector(".cb-history-item-confirm-no").focus(),0)}_cancelDeleteSession(e){e.classList.remove("cb-history-item--confirming");let t=e.querySelector(".cb-history-item-confirm");t&&t.remove()}async _loadSession(e){this.isLoading||(this.chatHistory&&this.chatHistory.length>0&&_(this.sessionId,this._getHistoryTitle(),this.chatHistory.length),this.sessionId=e,this.chatHistory=D(e),this._clearMessages(),this.chatHistory&&this.chatHistory.length>0?await this._loadHistory():this._showWelcomeMessage(),this._closeHistoryPanel(),S(e),this.input.focus())}_deleteSession(e,t){let i=()=>{R(e),e===this.sessionId?this._startNewChat():this._renderHistoryPanel()};if(t){t.classList.remove("cb-history-item--confirming");let a=t.querySelector(".cb-history-item-confirm");a&&a.remove(),t.classList.add("cb-history-item--removing"),t.addEventListener("animationend",i,{once:!0})}else i()}_openClearAllModal(){this.clearAllOverlay&&(this.clearAllOverlay.classList.remove("cb-is-hidden"),this.clearAllOverlay.setAttribute("aria-hidden","false"),this.clearAllOverlay.offsetWidth,this.clearAllOverlay.classList.add("cb-is-active"),setTimeout(()=>this.clearAllCancelBtn&&this.clearAllCancelBtn.focus(),0))}_closeClearAllModal(){if(!this.clearAllOverlay||!this.clearAllOverlay.classList.contains("cb-is-active"))return;this.clearAllOverlay.classList.remove("cb-is-active"),this.clearAllOverlay.setAttribute("aria-hidden","true");let e=t=>{t.target===this.clearAllOverlay&&(this.clearAllOverlay.classList.add("cb-is-hidden"),this.clearAllOverlay.removeEventListener("transitionend",e))};this.clearAllOverlay.addEventListener("transitionend",e),this.historyClearBtn&&this.historyClearBtn.focus()}_clearAllSessions(){let e=B().filter(i=>i.sessionId!==this.sessionId),t=Array.from(this.historyList.querySelectorAll(".cb-history-item"));if(this.historyFooter&&this.historyFooter.classList.add("cb-is-hidden"),this.historyList.querySelectorAll(".cb-history-group-label").forEach(i=>{i.style.transition="opacity 0.15s ease",i.style.opacity="0"}),t.length===0){e.forEach(i=>R(i.sessionId)),this._renderHistoryPanel();return}t.forEach((i,a)=>{i.style.setProperty("--cb-swipe-delay",`${a*42}ms`),i.classList.add("cb-history-item--removing")}),t[t.length-1].addEventListener("animationend",()=>{e.forEach(i=>R(i.sessionId)),this._renderHistoryPanel()},{once:!0})}};function se(){if(window.__chatBubbleInstance)return;let n=document.currentScript||document.querySelector('script[src*="chat-bubble"]'),e={};if(n){let i=n.getAttribute("data-webhook"),a=n.getAttribute("data-bot-name"),r=n.getAttribute("data-primary-color"),s=n.getAttribute("data-position");i&&(e.webhook={url:i}),a&&(e.bot={name:a}),r&&(e.style={primaryColor:r}),s&&(e.style={...e.style||{},position:s})}let t=Object.assign({},e,window.ChatBubbleConfig||{});e.webhook&&window.ChatBubbleConfig?.webhook&&(t.webhook=Object.assign({},e.webhook,window.ChatBubbleConfig.webhook)),e.bot&&window.ChatBubbleConfig?.bot&&(t.bot=Object.assign({},e.bot,window.ChatBubbleConfig.bot)),e.style&&window.ChatBubbleConfig?.style&&(t.style=Object.assign({},e.style,window.ChatBubbleConfig.style)),window.__chatBubbleInstance=new W(t),window.ChatBubble={open:()=>window.__chatBubbleInstance._openChat(),close:()=>window.__chatBubbleInstance._closeChat(),toggle:()=>window.__chatBubbleInstance._toggleChat(),newChat:()=>window.__chatBubbleInstance._startNewChat(),sendMessage:i=>{window.__chatBubbleInstance&&(window.__chatBubbleInstance.input.value=i,window.__chatBubbleInstance._handleSend())},getSessionId:()=>window.__chatBubbleInstance?.sessionId,destroy:()=>{window.__chatBubbleInstance&&(window.__chatBubbleInstance.activeRequest?.abort(),window.removeEventListener("resize",window.__chatBubbleInstance._onWindowResize),document.getElementById("chat-bubble-host")?.remove(),window.__chatBubbleInstance=null)}}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",se):se();
