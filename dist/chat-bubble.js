// src/chat-bubble.css
var chat_bubble_default = '/* Inicializar estilos principales */\n\n/* Declarar variables de dise\xF1o (colores, sombras, medidas) */\n:host {\n  --cb-primary: #572b86;\n  --cb-primary-hover: #401d66;\n  --cb-primary-text: #ffffff;\n  --cb-primary-glow: rgba(87, 43, 134, 0.35);\n  --cb-primary-soft: rgba(87, 43, 134, 0.12);\n  --cb-link-color: var(--cb-primary);\n\n  --cb-bg: #ffffff;\n  --cb-bg-secondary: #f6f5fa;\n  --cb-attachment-bg: #e6e3ef;\n  --cb-bg-header: #572b86;\n  --cb-text: #1a1025;\n  --cb-text-secondary: #7c6d94;\n  --cb-border: rgba(87, 43, 134, 0.14);\n  --cb-border-strong: rgba(87, 43, 134, 0.28);\n\n  --cb-user-bubble: #572b86;\n  --cb-user-text: #ffffff;\n  --cb-bot-bubble: #ffffff;\n  --cb-bot-text: #1a1025;\n\n  --cb-error-bubble: #fecdd3;\n  --cb-error-text: #be123c;\n  --cb-error-border: rgba(190, 18, 60, 0.35);\n\n  --cb-shadow: 0 16px 48px rgba(0, 0, 0, 0.15), 0 2px 12px rgba(0, 0, 0, 0.06);\n  --cb-shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);\n  --cb-shadow-launcher:\n    0 8px 28px rgba(87, 43, 134, 0.45), 0 2px 8px rgba(0, 0, 0, 0.1);\n\n  /* Colores sem\xE1nticos de estado */\n  --cb-success: #22c55e;\n  --cb-online: #4ade80;\n  --cb-danger: #ef4444;\n  --cb-danger-bg: #fef2f2;\n  --cb-danger-soft: rgba(239, 68, 68, 0.3);\n\n  /* Bloques de c\xF3digo */\n  --cb-code-bg: #12101e;\n  --cb-code-text: #e2e0f0;\n  --cb-code-border: rgba(87, 43, 134, 0.2);\n  --cb-font-mono: "Fira Code", "Cascadia Code", "Consolas", monospace;\n\n  /* Botones de la cabecera (capas blancas sobre el degradado primario) */\n  --cb-header-btn-hover: rgba(255, 255, 255, 0.18);\n  --cb-header-btn-active: rgba(255, 255, 255, 0.26);\n  --cb-header-btn-highlight: rgba(255, 255, 255, 0.25);\n\n  /* Curvas de animaci\xF3n con rebote el\xE1stico */\n  --cb-ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);\n  --cb-ease-out-spring: cubic-bezier(0.34, 1.2, 0.64, 1);\n  --cb-ease-standard: cubic-bezier(0.4, 0, 0.2, 1);\n\n  /* Duraciones de transici\xF3n de la ventana */\n  --cb-duration-window: 0.28s;\n  --cb-duration-resize: 0.2s;\n\n  /* Dimensiones de componentes */\n  --cb-launcher-offset: 24px;\n  --cb-header-avatar-size: 32px;\n  --cb-header-btn-size: 32px;\n  --cb-msg-avatar-size: 28px;\n  --cb-input-btn-size: 34px;\n  --cb-send-btn-size: 38px;\n  --cb-icon-size-sm: 18px;\n  --cb-icon-size-md: 26px;\n\n  /* Radios y tama\xF1os tipogr\xE1ficos adicionales */\n  --cb-radius-input: 16px;\n  --cb-font-size-header: 15.5px;\n  --cb-font-size-msg: 14px;\n  --cb-font-size-input: 13.5px;\n\n  --cb-radius: 18px;\n  --cb-radius-sm: 10px;\n  --cb-radius-bubble: 20px;\n  --cb-window-width: 410px;\n  --cb-window-height: 690px;\n  --cb-launcher-size: 52px;\n  --cb-spacing: 16px;\n  --cb-font:\n    system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial,\n    sans-serif;\n  --cb-transition: 0.22s var(--cb-ease-standard);\n  --cb-z-index: 9999;\n\n  --cb-scrollbar-width: 3px;\n  --cb-scrollbar-color: rgba(87, 43, 134, 0.25);\n  --cb-scrollbar-track: transparent;\n  --cb-shimmer-gradient: linear-gradient(\n    90deg,\n    rgba(255, 255, 255, 0) 0%,\n    rgba(87, 43, 134, 0.08) 35%,\n    rgba(87, 43, 134, 0.16) 50%,\n    rgba(87, 43, 134, 0.08) 65%,\n    rgba(255, 255, 255, 0) 100%\n  );\n  --cb-thinking-highlight: var(--cb-primary);\n  --cb-thinking-gradient: linear-gradient(\n    90deg,\n    rgba(124, 109, 148, 0.45) 0%,\n    rgba(124, 109, 148, 0.45) 35%,\n    var(--cb-thinking-highlight) 50%,\n    rgba(124, 109, 148, 0.45) 65%,\n    rgba(124, 109, 148, 0.45) 100%\n  );\n}\n\n/* Aplicar esquema de colores oscuro */\n@media (prefers-color-scheme: dark) {\n  :host {\n    --cb-bg: #1c1528;\n    --cb-bg-secondary: #141020;\n    --cb-attachment-bg: #2e2540;\n    --cb-link-color: #c4a6f5;\n    --cb-text: #f0ecf8;\n    --cb-text-secondary: #9b8fb0;\n    --cb-border: rgba(87, 43, 134, 0.18);\n    --cb-border-strong: rgba(87, 43, 134, 0.35);\n    --cb-bot-bubble: #221b32;\n    --cb-bot-text: #ede9f5;\n    --cb-error-bubble: #2a0a14;\n    --cb-error-text: #fb7185;\n    --cb-error-border: rgba(251, 113, 133, 0.2);\n    --cb-danger-bg: #2a0a14;\n    --cb-shadow:\n      0 16px 48px rgba(0, 0, 0, 0.45), 0 2px 12px rgba(0, 0, 0, 0.25);\n    --cb-scrollbar-color: rgba(87, 43, 134, 0.3);\n    --cb-shimmer-gradient: linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0) 0%,\n      rgba(143, 98, 201, 0.08) 35%,\n      rgba(143, 98, 201, 0.18) 50%,\n      rgba(143, 98, 201, 0.08) 65%,\n      rgba(255, 255, 255, 0) 100%\n    );\n    --cb-thinking-highlight: #ffffff;\n    --cb-thinking-gradient: linear-gradient(\n      90deg,\n      rgba(155, 143, 176, 0.45) 0%,\n      rgba(155, 143, 176, 0.45) 35%,\n      var(--cb-thinking-highlight) 50%,\n      rgba(155, 143, 176, 0.45) 65%,\n      rgba(155, 143, 176, 0.45) 100%\n    );\n  }\n}\n\n/* Aplicar esquema de colores claro */\n:host-context([data-theme="light"]),\n#chat-bubble-window[data-theme="light"] {\n  --cb-bg: #ffffff;\n  --cb-bg-secondary: #f6f5fa;\n  --cb-attachment-bg: #e6e3ef;\n  --cb-link-color: var(--cb-primary);\n  --cb-text: #1a1025;\n  --cb-text-secondary: #7c6d94;\n  --cb-border: rgba(87, 43, 134, 0.14);\n  --cb-border-strong: rgba(87, 43, 134, 0.28);\n  --cb-bot-bubble: #ffffff;\n  --cb-bot-text: #1a1025;\n  --cb-error-bubble: #fecdd3;\n  --cb-error-text: #be123c;\n  --cb-error-border: rgba(190, 18, 60, 0.35);\n  --cb-danger-bg: #fef2f2;\n  --cb-shadow: 0 16px 48px rgba(0, 0, 0, 0.15), 0 2px 12px rgba(0, 0, 0, 0.06);\n  --cb-scrollbar-color: rgba(87, 43, 134, 0.25);\n  --cb-shimmer-gradient: linear-gradient(\n    90deg,\n    rgba(255, 255, 255, 0) 0%,\n    rgba(87, 43, 134, 0.08) 35%,\n    rgba(87, 43, 134, 0.16) 50%,\n    rgba(87, 43, 134, 0.08) 65%,\n    rgba(255, 255, 255, 0) 100%\n  );\n  --cb-thinking-highlight: var(--cb-primary);\n  --cb-thinking-gradient: linear-gradient(\n    90deg,\n    rgba(124, 109, 148, 0.45) 0%,\n    rgba(124, 109, 148, 0.45) 35%,\n    var(--cb-thinking-highlight) 50%,\n    rgba(124, 109, 148, 0.45) 65%,\n    rgba(124, 109, 148, 0.45) 100%\n  );\n}\n\n/* Forzar esquema de colores oscuro */\n:host-context([data-theme="dark"]),\n#chat-bubble-window[data-theme="dark"] {\n  --cb-bg: #1c1528;\n  --cb-bg-secondary: #141020;\n  --cb-attachment-bg: #2e2540;\n  --cb-link-color: #c4a6f5;\n  --cb-text: #f0ecf8;\n  --cb-text-secondary: #9b8fb0;\n  --cb-border: rgba(87, 43, 134, 0.18);\n  --cb-border-strong: rgba(87, 43, 134, 0.35);\n  --cb-bot-bubble: #221b32;\n  --cb-bot-text: #ede9f5;\n  --cb-error-bubble: #2a0a14;\n  --cb-error-text: #fb7185;\n  --cb-error-border: rgba(251, 113, 133, 0.2);\n  --cb-danger-bg: #2a0a14;\n  --cb-shadow: 0 16px 48px rgba(0, 0, 0, 0.45), 0 2px 12px rgba(0, 0, 0, 0.25);\n  --cb-scrollbar-color: rgba(87, 43, 134, 0.3);\n  --cb-shimmer-gradient: linear-gradient(\n    90deg,\n    rgba(255, 255, 255, 0) 0%,\n    rgba(143, 98, 201, 0.08) 35%,\n    rgba(143, 98, 201, 0.18) 50%,\n    rgba(143, 98, 201, 0.08) 65%,\n    rgba(255, 255, 255, 0) 100%\n  );\n  --cb-thinking-highlight: #ffffff;\n  --cb-thinking-gradient: linear-gradient(\n    90deg,\n    rgba(155, 143, 176, 0.45) 0%,\n    rgba(155, 143, 176, 0.45) 35%,\n    var(--cb-thinking-highlight) 50%,\n    rgba(155, 143, 176, 0.45) 65%,\n    rgba(155, 143, 176, 0.45) 100%\n  );\n}\n\n/* Normalizar m\xE1rgenes globales */\n:where(#chat-bubble-launcher, #chat-bubble-window),\n:where(#chat-bubble-launcher, #chat-bubble-window) :where(*) {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n#chat-bubble-launcher,\n#chat-bubble-window {\n  font-family: var(--cb-font);\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--cb-text);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n/* Estilizar bot\xF3n lanzador principal */\n#chat-bubble-launcher {\n  position: fixed;\n  bottom: var(--cb-launcher-offset);\n  right: var(--cb-launcher-offset);\n  z-index: var(--cb-z-index);\n  --cb-drag-x: 0px;\n  transform: translate3d(var(--cb-drag-x), 0, 0);\n  transition: transform var(--cb-duration-window) var(--cb-ease-out-spring);\n}\n\n#chat-bubble-launcher.cb-is-dragging {\n  transition: none !important;\n}\n\n#chat-bubble-launcher.cb-position--left {\n  right: auto;\n  left: var(--cb-launcher-offset);\n}\n\n.cb-launcher-btn {\n  width: var(--cb-launcher-size);\n  height: var(--cb-launcher-size);\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n  background: var(--cb-primary);\n  color: var(--cb-primary-text);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow:\n    0 7px 24px rgba(87, 43, 134, 0.42),\n    0 2px 8px rgba(0, 0, 0, 0.08);\n  transition: transform 0.3s ease;\n  position: relative;\n  overflow: visible;\n  animation: cb-launcher-breathe 3s ease-in-out infinite;\n}\n\n/* Pausar la respiraci\xF3n mientras el chat est\xE1 abierto: solo tiene sentido llamar la atenci\xF3n con el chat cerrado */\n.cb-launcher-btn.cb-is-open {\n  animation-play-state: paused;\n}\n\n/* Aura que respira: pulsa un anillo exterior con color primario sin escalar el bot\xF3n */\n@keyframes cb-launcher-breathe {\n  0%,\n  100% {\n    box-shadow:\n      0 7px 24px rgba(87, 43, 134, 0.42),\n      0 2px 8px rgba(0, 0, 0, 0.08),\n      0 0 0 0 rgba(87, 43, 134, 0.3);\n  }\n  50% {\n    box-shadow:\n      0 7px 24px rgba(87, 43, 134, 0.42),\n      0 2px 8px rgba(0, 0, 0, 0.08),\n      0 0 12px 4px rgba(87, 43, 134, 0.3);\n  }\n}\n\n/* Efecto de zoom sutil al pasar el cursor \u2014 entrada y salida gestionadas por transition */\n.cb-launcher-btn:hover {\n  transform: scale(1.08);\n}\n\n.cb-launcher-btn:active {\n  transform: scale(0.94);\n}\n\n.cb-icon-chat,\n.cb-icon-close {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition:\n    transform 0.35s cubic-bezier(0.34, 1.4, 0.64, 1),\n    opacity 0.2s;\n}\n\n.cb-icon-chat {\n  overflow: hidden;\n  border-radius: 50%;\n}\n\n.cb-launcher-btn svg {\n  width: var(--cb-icon-size-md);\n  height: var(--cb-icon-size-md);\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15));\n}\n\n.cb-launcher-avatar {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n  pointer-events: none;\n}\n\n.cb-launcher-btn .cb-icon-chat {\n  opacity: 1;\n  transform: scale(1) rotate(0deg);\n}\n.cb-launcher-btn .cb-icon-close {\n  opacity: 0;\n  transform: scale(0) rotate(-90deg);\n}\n.cb-launcher-btn.cb-is-open .cb-icon-chat {\n  opacity: 0;\n  transform: scale(0) rotate(90deg);\n}\n.cb-launcher-btn.cb-is-open .cb-icon-close {\n  opacity: 1;\n  transform: scale(1) rotate(0deg);\n}\n\n/* Configurar estrellas IA (sparkles) como elementos decorativos alrededor del bot\xF3n */\n.cb-sparkle {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n  opacity: 0;\n  z-index: 10;\n  will-change: transform, opacity;\n  animation-fill-mode: both;\n}\n\n.cb-sparkle svg {\n  display: block;\n  filter: drop-shadow(0 0 3px currentColor) drop-shadow(0 0 6px currentColor);\n}\n\n/* Posicionar arriba-derecha */\n.cb-sparkle--1 {\n  width: 16px;\n  height: 16px;\n  top: -9px;\n  right: -4px;\n  color: #e879f9;\n  animation: cb-sparkle-pro 3.6s 0s ease-in-out infinite;\n  animation-fill-mode: both;\n}\n\n/* Posicionar abajo-izquierda */\n.cb-sparkle--3 {\n  width: 9px;\n  height: 9px;\n  bottom: -6px;\n  left: 1px;\n  color: #c084fc;\n  animation: cb-sparkle-pro 3.6s 1.2s ease-in-out infinite;\n  animation-fill-mode: both;\n}\n\n/* Posicionar abajo-derecha */\n.cb-sparkle--5 {\n  width: 11px;\n  height: 11px;\n  bottom: -4px;\n  right: -3px;\n  color: #c084fc;\n  animation: cb-sparkle-pro 3.6s 2.4s ease-in-out infinite;\n  animation-fill-mode: both;\n}\n\n@keyframes cb-sparkle-pro {\n  0% {\n    opacity: 0;\n    transform: scale(0.3) rotate(-10deg);\n  }\n  15% {\n    opacity: 0;\n    transform: scale(0.3) rotate(-10deg);\n  }\n  40% {\n    opacity: 0.95;\n    transform: scale(1.15) rotate(15deg);\n  }\n  60% {\n    opacity: 0.7;\n    transform: scale(1) rotate(8deg);\n  }\n  80% {\n    opacity: 0;\n    transform: scale(0.4) rotate(20deg);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(0.3) rotate(-10deg);\n  }\n}\n\n/* Aplicar hover con aceleraci\xF3n sutil sin filtros adicionales */\n.cb-launcher-btn:hover .cb-sparkle--1 {\n  animation-duration: 1.4s;\n}\n.cb-launcher-btn:hover .cb-sparkle--3 {\n  animation-duration: 1.6s;\n}\n.cb-launcher-btn:hover .cb-sparkle--5 {\n  animation-duration: 1.2s;\n}\n\n/* Configurar estado abierto: apagar sparkles y detener su animaci\xF3n (no solo ocultarla) */\n.cb-launcher-btn.cb-is-open .cb-sparkle {\n  opacity: 0 !important;\n  animation-play-state: paused;\n  transition: opacity 0.18s ease;\n}\n\n/* Configurar indicador visual de notificaciones nuevas */\n.cb-notification-badge {\n  position: absolute;\n  top: -1px;\n  right: -1px;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: var(--cb-success);\n  display: none;\n  z-index: 2;\n}\n\n.cb-notification-badge.cb-visible {\n  display: block;\n}\n\n/* Configurar contenedor principal del chat */\n#chat-bubble-window {\n  position: fixed;\n  bottom: calc(var(--cb-launcher-offset) + var(--cb-launcher-size) + 14px);\n  right: var(--cb-launcher-offset);\n  width: var(--cb-window-width);\n  height: var(--cb-window-height);\n  background: var(--cb-bg);\n  border-radius: var(--cb-radius);\n  box-shadow: var(--cb-shadow);\n  border: none;\n  display: flex;\n  flex-direction: column;\n  z-index: var(--cb-z-index);\n  overflow: hidden;\n\n  opacity: 0;\n  --cb-drag-x: 0px;\n  transform: translate3d(var(--cb-drag-x), 24px, 0) scale(0.94);\n  pointer-events: none;\n  transition:\n    opacity var(--cb-duration-window) ease-out,\n    transform var(--cb-duration-window) var(--cb-ease-out-spring),\n    width var(--cb-duration-resize) var(--cb-ease-standard),\n    height var(--cb-duration-resize) var(--cb-ease-standard);\n  transform-origin: bottom right;\n}\n\n#chat-bubble-window.cb-position--left {\n  right: auto;\n  left: var(--cb-launcher-offset);\n  transform-origin: bottom left;\n}\n\n#chat-bubble-window.cb-is-open {\n  opacity: 1;\n  transform: translate3d(var(--cb-drag-x), 0, 0) scale(1);\n  pointer-events: all;\n}\n\n#chat-bubble-window.cb-is-dragging {\n  transition: none !important;\n}\n\n/* Estilizar \xE1rea para redimensionar ventana */\n.cb-resize-handle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 14px;\n  cursor: ns-resize;\n  z-index: 10;\n  background: transparent;\n  touch-action: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n/* Dise\xF1ar barra superior de informaci\xF3n */\n.cb-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 7px var(--cb-spacing);\n  background-image:\n    radial-gradient(\n      ellipse 55% 130% at 78% 50%,\n      rgba(255, 255, 255, 0.12) 0%,\n      transparent 65%\n    ),\n    linear-gradient(\n      100deg,\n      var(--cb-primary-hover) 0%,\n      #633397 18%,\n      #783eb5 25%,\n      #633397 32%,\n      var(--cb-primary-hover) 50%,\n      #633397 68%,\n      #783eb5 75%,\n      #633397 82%,\n      var(--cb-primary-hover) 100%\n    );\n  background-repeat: no-repeat;\n  background-size:\n    100% 100%,\n    450% 100%;\n  background-position:\n    0% 0%,\n    0% 0%;\n  color: var(--cb-primary-text);\n  flex-shrink: 0;\n  border-radius: var(--cb-radius) var(--cb-radius) 0 0;\n  position: relative;\n  overflow: visible;\n  cursor: move;\n  -webkit-user-select: none;\n  user-select: none;\n  touch-action: none;\n  /* Correr animaci\xF3n solo cuando el chat est\xE1 abierto (ver .cb-is-open) para no repintar en la p\xE1gina anfitriona mientras nadie lo ve */\n  animation: cb-header-gradient-flow 8s linear infinite paused;\n}\n\n/* Reanudar la animaci\xF3n del degradado \xFAnicamente con el chat abierto */\n#chat-bubble-window.cb-is-open .cb-header {\n  animation-play-state: running;\n}\n\n/* Animar en bucle continuo */\n@keyframes cb-header-gradient-flow {\n  0% {\n    background-position:\n      0% 0%,\n      0% 0%;\n  }\n  100% {\n    background-position:\n      0% 0%,\n      64.2857% 0%;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .cb-header {\n    animation: none;\n    background-position:\n      0% 0%,\n      50% 0%;\n  }\n\n  .cb-launcher-btn,\n  .cb-sparkle--1,\n  .cb-sparkle--3,\n  .cb-sparkle--5,\n  .cb-typing-indicator:not(.cb-thinking) span,\n  .cb-recording-dot {\n    animation: none;\n  }\n\n  .cb-streaming-cursor {\n    animation: none;\n    opacity: 1;\n  }\n\n  .cb-thinking-text {\n    animation: none;\n    background: none;\n    -webkit-text-fill-color: var(--cb-text-secondary);\n    color: var(--cb-text-secondary);\n  }\n}\n\n.cb-header-info {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  position: relative;\n  z-index: 1;\n}\n\n.cb-avatar {\n  width: var(--cb-header-avatar-size);\n  height: var(--cb-header-avatar-size);\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  border: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n\n.cb-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.cb-avatar svg {\n  width: 21px;\n  height: 21px;\n  color: white;\n}\n\n.cb-bot-name {\n  display: block;\n  font-family: var(--cb-font);\n  font-weight: 700;\n  font-size: var(--cb-font-size-header);\n  line-height: 1.2;\n  letter-spacing: -0.01em;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n\n.cb-status {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-family: var(--cb-font);\n  font-size: 11px;\n  font-weight: 400;\n  opacity: 0.72;\n  margin-top: 2px;\n}\n\n.cb-header-actions {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  position: relative;\n  z-index: 1;\n}\n\n.cb-toggle-size-btn,\n.cb-actions-btn,\n.cb-close-window-btn {\n  width: var(--cb-header-btn-size);\n  height: var(--cb-header-btn-size);\n  border-radius: 9px;\n  border: none;\n  cursor: pointer;\n  background: rgba(255, 255, 255, 0);\n  color: rgba(255, 255, 255, 0.82);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition:\n    background var(--cb-transition),\n    color var(--cb-transition),\n    transform 0.2s;\n}\n\n.cb-toggle-size-btn:hover,\n.cb-actions-btn:hover,\n.cb-close-window-btn:hover {\n  background: var(--cb-header-btn-hover);\n  color: white;\n}\n\n.cb-toggle-size-btn:active,\n.cb-actions-btn:active,\n.cb-close-window-btn:active {\n  background: var(--cb-header-btn-active);\n}\n\n.cb-toggle-size-btn svg,\n.cb-actions-btn svg,\n.cb-close-window-btn svg {\n  width: var(--cb-icon-size-sm);\n  height: var(--cb-icon-size-sm);\n}\n\n/* Dise\xF1ar dropdown de acciones del header */\n.cb-actions-dropdown {\n  position: relative;\n}\n\n.cb-actions-menu {\n  position: absolute;\n  top: calc(100% + 10px);\n  right: 0;\n  min-width: 220px;\n  background: var(--cb-bg);\n  border-radius: var(--cb-radius);\n  box-shadow: var(--cb-shadow);\n  padding: 4px;\n  z-index: 100;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n\n.cb-actions-menu.cb-is-hidden {\n  display: none;\n}\n\n.cb-actions-menu-item {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  width: 100%;\n  padding: 9px 12px;\n  border: none;\n  border-radius: calc(var(--cb-radius) - 4px);\n  background: transparent;\n  color: var(--cb-text, #1a1a2e);\n  font-size: 0.875rem;\n  font-family: var(--cb-font, inherit);\n  text-align: left;\n  cursor: pointer;\n  transition: background var(--cb-transition);\n}\n\n.cb-actions-menu-item:hover {\n  background: var(--cb-primary-soft);\n}\n\n.cb-actions-menu-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: var(--cb-icon-size-sm);\n  height: var(--cb-icon-size-sm);\n  flex-shrink: 0;\n  color: var(--cb-text-secondary);\n}\n\n.cb-actions-menu-icon svg {\n  width: var(--cb-icon-size-sm);\n  height: var(--cb-icon-size-sm);\n}\n\n/* Posicionar notificaciones flotantes justo debajo del header */\n.cb-toast-container {\n  position: absolute;\n  top: 100%;\n  left: 12px;\n  right: 12px;\n  margin-top: 10px;\n  z-index: 30;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  pointer-events: none;\n  cursor: default;\n}\n\n/* Dise\xF1ar tarjeta individual de notificaci\xF3n de error */\n.cb-toast {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  max-width: 100%;\n  width: fit-content;\n  padding: 11px 12px;\n  background: var(--cb-error-bubble);\n  color: var(--cb-error-text);\n  border: 1px solid var(--cb-error-border);\n  border-radius: var(--cb-radius);\n  box-shadow: var(--cb-shadow-sm);\n  font-family: var(--cb-font);\n  font-size: 13px;\n  line-height: 1.45;\n  pointer-events: auto;\n\n  opacity: 0;\n  transform: translateY(-6px) scale(0.97);\n  transition:\n    opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),\n    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.cb-toast.cb-toast--visible {\n  opacity: 1;\n  transform: translateY(0) scale(1);\n}\n\n.cb-toast-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  color: var(--cb-error-text);\n}\n\n.cb-toast-icon svg {\n  width: 15px;\n  height: 15px;\n}\n\n.cb-toast-text {\n  flex: 1;\n  min-width: 0;\n  text-align: center;\n  word-break: break-word;\n  overflow-wrap: break-word;\n}\n\n.cb-toast-close {\n  flex-shrink: 0;\n  width: 20px;\n  height: 20px;\n  padding: 0;\n  border: none;\n  border-radius: 6px;\n  background: transparent;\n  color: var(--cb-error-text);\n  opacity: 0.65;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition:\n    opacity var(--cb-transition),\n    background var(--cb-transition);\n}\n\n.cb-toast-close:hover {\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.06);\n}\n\n.cb-toast-close svg {\n  width: 12px;\n  height: 12px;\n}\n\n/* Configurar \xE1rea de desplazamiento de mensajes */\n.cb-messages {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 18px 14px 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  background: var(--cb-bg-secondary);\n  transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);\n\n  /* Aplicar fondo */\n  background-image:\n    radial-gradient(\n      circle at 20% 20%,\n      rgba(87, 43, 134, 0.04) 0%,\n      transparent 50%\n    ),\n    radial-gradient(\n      circle at 80% 80%,\n      rgba(87, 43, 134, 0.03) 0%,\n      transparent 50%\n    );\n\n  scrollbar-width: thin;\n  scrollbar-color: var(--cb-scrollbar-color) var(--cb-scrollbar-track);\n}\n\n.cb-messages::-webkit-scrollbar {\n  width: var(--cb-scrollbar-width);\n}\n.cb-messages::-webkit-scrollbar-track {\n  background: var(--cb-scrollbar-track);\n}\n.cb-messages::-webkit-scrollbar-thumb {\n  background: var(--cb-scrollbar-color);\n  border-radius: 100px;\n}\n.cb-messages::-webkit-scrollbar-thumb:hover {\n  background: rgba(87, 43, 134, 0.45);\n}\n\n/* Aplicar estilos base y animaci\xF3n a las burbujas */\n.cb-message {\n  display: flex;\n  flex-direction: column;\n  max-width: 80%;\n  animation: cb-message-appear 0.35s ease-out both;\n}\n\n@keyframes cb-message-appear {\n  from {\n    opacity: 0;\n    transform: translateY(8px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n\n.cb-message--bot {\n  align-self: stretch;\n  align-items: flex-start;\n  max-width: 100%;\n  width: 100%;\n  flex-direction: row;\n  gap: 8px;\n}\n\n/* Estilizar imagen de perfil del asistente */\n.cb-msg-avatar {\n  width: var(--cb-msg-avatar-size);\n  height: var(--cb-msg-avatar-size);\n  border-radius: 50%;\n  overflow: hidden;\n  flex-shrink: 0;\n  margin-top: 2px;\n  background: rgba(87, 43, 134, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.cb-msg-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.cb-msg-avatar svg {\n  width: 16px;\n  height: 16px;\n  color: var(--cb-primary);\n}\n\n/* Alinear contenedor de mensaje y marca de tiempo */\n.cb-msg-col {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  flex: 1;\n  min-width: 0;\n}\n\n/* Envolver la burbuja para que el bot\xF3n de responder se ancle a su ancho real */\n.cb-msg-bubble-row {\n  position: relative;\n  display: flex;\n  max-width: 92%;\n}\n.cb-message--user {\n  align-self: flex-end;\n  align-items: flex-end;\n}\n\n/* Configurar padding y tipograf\xEDa del contenido del mensaje */\n.cb-message-content {\n  padding: 12px 16px;\n  word-break: break-word;\n  overflow-wrap: break-word;\n  font-size: var(--cb-font-size-msg);\n  line-height: 1.5;\n  font-weight: 400;\n}\n\n/* Dise\xF1ar burbuja de respuesta del asistente */\n.cb-message--bot .cb-message-content {\n  max-width: 100%;\n  background: var(--cb-bot-bubble);\n  color: var(--cb-bot-text);\n  border-radius: 24px;\n  box-shadow: none;\n  /*border: 1px solid var(--cb-border);*/\n  /*padding-left: 16px;*/\n}\n\n/* Dise\xF1ar burbuja de mensaje del usuario */\n.cb-message--user .cb-message-content {\n  background: var(--cb-primary);\n  color: var(--cb-user-text);\n  border-radius: 24px;\n  box-shadow: none;\n}\n\n/* Formatear indicador de hora de env\xEDo */\n.cb-message-time {\n  font-size: 10.5px;\n  color: var(--cb-text-secondary);\n  margin-top: 4px;\n  padding: 0 5px;\n  opacity: 0.5;\n  letter-spacing: 0.015em;\n  font-weight: 500;\n}\n\n/* Formatear elementos HTML generados desde Markdown */\n.cb-message-content .cb-paragraph {\n  margin: 0 0 9px;\n}\n.cb-message-content .cb-paragraph:last-child {\n  margin-bottom: 0;\n}\n.cb-message-content .cb-list {\n  margin: 7px 0;\n  padding-left: 18px;\n}\n.cb-message-content .cb-list li {\n  margin-bottom: 4px;\n  line-height: 1.45;\n}\n.cb-message-content .cb-list li .cb-paragraph {\n  margin-bottom: 3px;\n}\n.cb-message-content .cb-list li .cb-paragraph:last-child {\n  margin-bottom: 0;\n}\n.cb-li-hidden {\n  display: none !important;\n}\n.cb-message-content .cb-heading {\n  font-weight: 700;\n  margin: 9px 0 5px;\n  line-height: 1.3;\n}\n.cb-message-content h1.cb-heading {\n  font-size: 16px;\n}\n.cb-message-content h2.cb-heading {\n  font-size: 15px;\n}\n.cb-message-content h3.cb-heading {\n  font-size: 14px;\n}\n\n/* Formatear l\xEDnea separadora horizontal */\n.cb-message-content .cb-hr {\n  border: none;\n  border-top: 1px solid var(--cb-border);\n  margin: 12px 0;\n}\n\n.cb-message--user .cb-hr {\n  border-top-color: rgba(255, 255, 255, 0.25);\n}\n\n.cb-message-content .cb-code-block {\n  background: var(--cb-code-bg);\n  color: var(--cb-code-text);\n  border-radius: 11px;\n  padding: 11px 13px;\n  margin: 9px 0;\n  overflow-x: auto;\n  font-size: 12px;\n  line-height: 1.6;\n  font-family: var(--cb-font-mono);\n  white-space: pre;\n  border: 1px solid var(--cb-code-border);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);\n}\n\n.cb-message-content .cb-inline-code {\n  background: rgba(87, 43, 134, 0.1);\n  color: var(--cb-link-color);\n  padding: 2px 6px;\n  border-radius: 5px;\n  font-size: 12.5px;\n  font-family: var(--cb-font-mono);\n  border: 1px solid rgba(87, 43, 134, 0.15);\n}\n\n.cb-message--user .cb-inline-code {\n  background: rgba(255, 255, 255, 0.2);\n  color: rgba(255, 255, 255, 0.95);\n  border-color: rgba(255, 255, 255, 0.15);\n}\n\n.cb-message-content .cb-link {\n  color: var(--cb-link-color);\n  text-decoration: underline;\n  text-decoration-color: rgba(87, 43, 134, 0.4);\n  text-underline-offset: 3px;\n  font-weight: 500;\n  word-break: break-all;\n  transition: text-decoration-color 0.15s;\n}\n\n.cb-message-content .cb-link:hover {\n  text-decoration-color: var(--cb-link-color);\n}\n\n.cb-message--user .cb-link {\n  color: rgba(255, 255, 255, 0.92);\n  text-decoration-color: rgba(255, 255, 255, 0.4);\n}\n\n/* Configurar animaci\xF3n de estado escribiendo */\n.cb-typing-wrapper {\n  display: none;\n}\n\n.cb-typing-wrapper.cb-visible {\n  display: flex;\n}\n\n.cb-typing-indicator {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 13px 16px;\n  background: var(--cb-bot-bubble);\n  border-radius: 18px;\n  align-self: flex-start;\n  animation: cb-message-appear 0.25s ease-out both;\n}\n\n.cb-typing-indicator:not(.cb-thinking) span {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--cb-primary);\n  opacity: 0.35;\n  animation: cb-typing-bounce 1.3s infinite ease-in-out;\n}\n\n.cb-typing-indicator:not(.cb-thinking) span:nth-child(1) {\n  animation-delay: 0s;\n}\n.cb-typing-indicator:not(.cb-thinking) span:nth-child(2) {\n  animation-delay: 0.18s;\n}\n.cb-typing-indicator:not(.cb-thinking) span:nth-child(3) {\n  animation-delay: 0.36s;\n}\n\n@keyframes cb-typing-bounce {\n  0%,\n  60%,\n  100% {\n    transform: translateY(0);\n    opacity: 0.35;\n  }\n  30% {\n    transform: translateY(-7px);\n    opacity: 1;\n  }\n}\n\n/* Animar cursor durante el efecto de escritura */\n.cb-streaming-cursor {\n  display: inline-block;\n  width: 6px;\n  height: 15px;\n  background: var(--cb-primary);\n  margin-left: 4px;\n  border-radius: 1px;\n  animation: cb-cursor-blink 0.7s infinite alternate ease-in-out;\n  vertical-align: middle;\n}\n\n@keyframes cb-cursor-blink {\n  0% {\n    opacity: 0.1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n/* Dise\xF1ar zona inferior de composici\xF3n de texto */\n.cb-input-area {\n  display: flex;\n  align-items: flex-end;\n  gap: 9px;\n  padding: 10px 12px 13px;\n  background: var(--cb-bg);\n  border-top: 1px solid var(--cb-border);\n  flex-shrink: 0;\n  position: relative;\n}\n\n/* A\xF1adir borde sutil sobre el \xE1rea de entrada */\n.cb-input-area::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 20px;\n  right: 20px;\n  height: 1px;\n  background: linear-gradient(\n    90deg,\n    transparent,\n    rgba(87, 43, 134, 0.15),\n    transparent\n  );\n}\n\n#cb-input {\n  flex: 1;\n  border: none;\n  border-radius: var(--cb-radius-input);\n  padding: 9px 14px;\n  font-family: var(--cb-font);\n  font-size: var(--cb-font-size-input);\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--cb-text);\n  background: var(--cb-bg-secondary);\n  resize: none;\n  outline: none;\n  min-height: 38px;\n  max-height: 110px;\n  overflow-y: auto;\n  transition:\n    border-color var(--cb-transition),\n    box-shadow var(--cb-transition),\n    background var(--cb-transition);\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  -webkit-font-smoothing: antialiased;\n}\n\n#cb-input::-webkit-scrollbar {\n  display: none;\n}\n\n#cb-input::placeholder {\n  color: var(--cb-text-secondary);\n  opacity: 0.65;\n  font-weight: 400;\n}\n\n#cb-input:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n#cb-input:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n\n#cb-send-btn {\n  width: var(--cb-send-btn-size);\n  height: var(--cb-send-btn-size);\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n  background: var(--cb-primary);\n  color: white;\n  display: none;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: transform 0.25s var(--cb-ease-spring);\n  position: relative;\n  overflow: hidden;\n}\n\n#cb-send-btn.cb-visible {\n  display: flex;\n  animation: cb-pop-in 0.25s var(--cb-ease-spring) both;\n}\n\n@keyframes cb-pop-in {\n  0% {\n    transform: scale(0.6);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n#cb-send-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n\n#cb-send-btn svg {\n  width: var(--cb-icon-size-sm);\n  height: var(--cb-icon-size-sm);\n  margin-left: 0;\n  transition: transform 0.2s;\n}\n\n/* Dise\xF1ar vista de presentaci\xF3n inicial del asistente */\n.cb-agent-intro {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 28px 20px 20px;\n  gap: 10px;\n  flex-shrink: 0;\n}\n\n.cb-agent-intro-avatar {\n  position: relative;\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  overflow: hidden;\n  background: rgba(87, 43, 134, 0.1);\n  border: none;\n  box-shadow: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n.cb-agent-intro-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.cb-agent-intro-avatar svg {\n  width: 36px;\n  height: 36px;\n  color: var(--cb-primary);\n}\n\n/* Mostrar video en bucle al pasar el cursor sobre el avatar de presentaci\xF3n */\n.cb-agent-intro-video {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.cb-agent-intro-avatar.cb-is-playing img {\n  opacity: 0;\n}\n\n.cb-agent-intro-avatar.cb-is-playing .cb-agent-intro-video {\n  opacity: 1;\n}\n\n.cb-agent-intro-name {\n  font-family: var(--cb-font);\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--cb-text);\n  letter-spacing: -0.02em;\n  margin: 0;\n  line-height: 1.2;\n}\n\n.cb-agent-intro-subtitle {\n  font-family: var(--cb-font);\n  font-size: 13px;\n  color: var(--cb-text);\n  font-weight: 300;\n  margin: 0;\n  opacity: 0.85;\n  line-height: 1.4;\n}\n\n/* Formatear separador de fecha entre mensajes */\n.cb-date-divider {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 6px 0;\n  color: var(--cb-text-secondary);\n  font-size: 11px;\n  font-weight: 500;\n  opacity: 0.5;\n}\n\n.cb-date-divider::before,\n.cb-date-divider::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: linear-gradient(\n    90deg,\n    transparent,\n    var(--cb-border),\n    transparent\n  );\n}\n\n/* Ajustar dise\xF1o para dispositivos m\xF3viles */\n@media (max-width: 480px) {\n  #chat-bubble-launcher {\n    bottom: 16px;\n    right: 16px;\n  }\n\n  #chat-bubble-launcher.cb-position--left {\n    left: 16px;\n    right: auto;\n  }\n\n  #chat-bubble-window {\n    width: 100vw;\n    height: 100dvh;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    border-radius: 0;\n    border: none;\n    outline: none;\n  }\n\n  #chat-bubble-window.cb-position--left {\n    left: 0;\n    right: 0;\n  }\n\n  .cb-header {\n    border-radius: 0;\n    /* Igualar el padding inferior al superior (sin contar el safe-area) para que el\n       contenido del header quede centrado verticalmente, no pegado hacia abajo */\n    padding-top: max(10px, env(safe-area-inset-top));\n    padding-bottom: 10px;\n  }\n\n  /* Aumentar el tama\xF1o de los botones del header para facilitar el toque en m\xF3vil */\n  .cb-header-actions {\n    gap: 4px;\n  }\n\n  .cb-actions-btn,\n  .cb-close-window-btn {\n    width: 40px;\n    height: 40px;\n  }\n\n  .cb-actions-btn svg,\n  .cb-close-window-btn svg {\n    width: 20px;\n    height: 20px;\n  }\n\n  .cb-input-area {\n    padding-bottom: max(13px, env(safe-area-inset-bottom));\n  }\n\n  .cb-toggle-size-btn {\n    display: none;\n  }\n}\n\n/* Configurar estados de foco para navegaci\xF3n por teclado */\n.cb-launcher-btn:focus-visible,\n.cb-actions-btn:focus-visible,\n#cb-send-btn:focus-visible {\n  outline: 2.5px solid var(--cb-primary);\n  outline-offset: 3px;\n}\n\n#cb-input:focus-visible {\n  outline: none;\n}\n\n/* Dise\xF1ar bot\xF3n flotante para volver al fondo */\n.cb-scroll-bottom-btn {\n  position: absolute;\n  bottom: calc(100% + 12px);\n  left: 50%;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: var(--cb-bg);\n  border: 1px solid var(--cb-border);\n  color: var(--cb-text-secondary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow:\n    0 4px 14px rgba(0, 0, 0, 0.08),\n    0 2px 5px rgba(0, 0, 0, 0.03);\n  z-index: 10;\n  padding: 0;\n\n  /* Configurar transici\xF3n de entrada y salida del bot\xF3n flotante */\n  opacity: 0;\n  transform: translateX(-50%) translateY(8px) scale(0.8);\n  pointer-events: none;\n  transition:\n    opacity 0.22s cubic-bezier(0.4, 0, 0.2, 1),\n    transform 0.22s cubic-bezier(0.4, 0, 0.2, 1),\n    background var(--cb-transition),\n    color var(--cb-transition),\n    box-shadow var(--cb-transition),\n    bottom 0.22s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.cb-scroll-bottom-btn.cb-visible {\n  opacity: 1;\n  transform: translateX(-50%) translateY(0) scale(1);\n  pointer-events: all;\n}\n\n.cb-reply-preview.cb-visible + .cb-input-area .cb-scroll-bottom-btn {\n  bottom: calc(100% + 62px);\n}\n\n.cb-scroll-bottom-btn:hover {\n  background: var(--cb-bg-secondary);\n  color: var(--cb-primary);\n  box-shadow:\n    0 6px 18px rgba(0, 0, 0, 0.12),\n    0 3px 6px rgba(0, 0, 0, 0.05);\n  transform: translateX(-50%) translateY(-2px) scale(1.05);\n}\n\n.cb-scroll-bottom-btn:active {\n  transform: translateX(-50%) translateY(0) scale(0.95);\n}\n\n.cb-scroll-bottom-btn svg {\n  width: var(--cb-icon-size-sm);\n  height: var(--cb-icon-size-sm);\n  transition: transform 0.22s ease;\n}\n\n.cb-scroll-bottom-btn:hover svg {\n  transform: translateY(1.5px);\n}\n\n.cb-scroll-bottom-btn:focus-visible {\n  outline: 2.5px solid var(--cb-primary);\n  outline-offset: 3px;\n}\n\n/* Dise\xF1ar bot\xF3n para adjuntar im\xE1genes */\n.cb-attach-btn {\n  width: var(--cb-input-btn-size);\n  height: var(--cb-input-btn-size);\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n  background: transparent;\n  color: var(--cb-text-secondary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  padding: 0;\n  transition:\n    background-color var(--cb-transition),\n    color var(--cb-transition);\n}\n\n.cb-attach-btn:hover {\n  background: var(--cb-bg-secondary);\n  color: var(--cb-primary);\n}\n\n.cb-attach-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.cb-attach-btn svg {\n  width: 17px;\n  height: 17px;\n  min-width: 17px;\n}\n\n/* Ocultar el input de archivo nativo, se activa desde el bot\xF3n "+" */\n.cb-file-input-hidden {\n  display: none;\n}\n\n/* Configurar vista previa de la imagen adjunta antes de enviarla */\n.cb-attachment-preview {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  background: var(--cb-attachment-bg);\n  border-top: 1px solid var(--cb-border);\n  flex-shrink: 0;\n\n  max-height: 0;\n  overflow: hidden;\n  opacity: 0;\n  pointer-events: none;\n  transition:\n    max-height 0.22s cubic-bezier(0.4, 0, 0.2, 1),\n    opacity 0.18s ease,\n    padding 0.22s ease;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.cb-attachment-preview.cb-visible {\n  max-height: 70px;\n  opacity: 1;\n  pointer-events: all;\n  padding: 8px 12px;\n}\n\n.cb-attachment-thumb {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  background-color: var(--cb-bg);\n  background-size: cover;\n  background-position: center;\n  flex-shrink: 0;\n  border: 1px solid var(--cb-border);\n  cursor: pointer;\n}\n\n.cb-attachment-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n\n.cb-attachment-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--cb-text);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.cb-attachment-hint {\n  font-size: 11.5px;\n  color: var(--cb-text-secondary);\n}\n\n.cb-attachment-remove {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: var(--cb-text-secondary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  flex-shrink: 0;\n  padding: 0;\n  transition:\n    background-color var(--cb-transition),\n    color var(--cb-transition);\n}\n\n.cb-attachment-remove:hover {\n  background: var(--cb-bg);\n  color: var(--cb-error-text);\n}\n\n.cb-attachment-remove svg {\n  width: 14px;\n  height: 14px;\n}\n\n/* Configurar burbuja de imagen enviada por el usuario */\n.cb-message--user .cb-image-message {\n  background: transparent;\n  padding: 3px;\n  max-width: 240px;\n}\n\n.cb-image-message-img {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  border-radius: 20px;\n  cursor: pointer;\n}\n\n/* Estilizar imagen clicable enviada por el bot v\xEDa markdown */\n.cb-image {\n  cursor: pointer;\n}\n\n/* Configurar burbuja propia para el texto, ya que el contenedor de la imagen es transparente */\n.cb-image-message-caption {\n  margin: 6px 0 0;\n  padding: 8px 12px;\n  background: var(--cb-primary);\n  color: var(--cb-user-text);\n  border-radius: 16px;\n  font-size: var(--cb-font-size-msg);\n  line-height: 1.4;\n  word-break: break-word;\n}\n\n/* Dise\xF1ar bot\xF3n para responder a mensajes espec\xEDficos */\n\n.cb-message--bot {\n  position: relative;\n}\n\n.cb-message-reply-btn {\n  position: absolute;\n  left: calc(100% + 5px);\n  top: 50%;\n  transform: translateY(-50%) scale(0.85);\n  width: 24px;\n  height: 24px;\n  border: none;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  padding: 0;\n  opacity: 0;\n  pointer-events: none;\n  transition:\n    opacity 0.18s ease,\n    transform 0.18s var(--cb-ease-spring);\n  box-shadow: none;\n  flex-shrink: 0;\n  z-index: 2;\n}\n\n.cb-message-reply-btn::before {\n  content: "";\n  width: 16px;\n  height: 16px;\n  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22%2318c139%22%20d%3D%22M10%209V5l-7%207%207%207v-4.1c5%200%208.5%201.6%2011%205.1-1-5-4-10-11-11Z%22%2F%3E%3C%2Fsvg%3E");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.cb-message--bot:hover .cb-message-reply-btn {\n  opacity: 0.8;\n  pointer-events: all;\n  transform: translateY(-50%) scale(1);\n}\n\n.cb-message-reply-btn:hover {\n  opacity: 1;\n}\n\n.cb-message-reply-btn:active {\n  transform: translateY(-50%) scale(0.9);\n}\n\n.cb-message-reply-btn:focus-visible {\n  outline: 2px solid var(--cb-primary);\n  outline-offset: 2px;\n  opacity: 1;\n  pointer-events: all;\n}\n\n/* Configurar barra inferior de mensaje seleccionado */\n\n.cb-reply-preview {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px 8px 10px;\n  background: var(--cb-bg-secondary);\n  border-top: 1px solid var(--cb-border);\n  flex-shrink: 0;\n\n  max-height: 0;\n  overflow: hidden;\n  opacity: 0;\n  pointer-events: none;\n  transition:\n    max-height 0.22s cubic-bezier(0.4, 0, 0.2, 1),\n    opacity 0.18s ease,\n    padding 0.22s ease;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.cb-reply-preview.cb-visible {\n  max-height: 80px;\n  opacity: 1;\n  pointer-events: all;\n  padding: 8px 12px 8px 10px;\n}\n\n/* Dise\xF1ar indicador lateral de cita */\n.cb-reply-bar {\n  width: 3px;\n  min-height: 32px;\n  background: var(--cb-primary);\n  flex-shrink: 0;\n  opacity: 0.7;\n}\n\n.cb-reply-content {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.cb-reply-label {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--cb-primary);\n  letter-spacing: 0.01em;\n}\n\n.cb-reply-text {\n  font-size: 12px;\n  color: var(--cb-text-secondary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.4;\n}\n\n.cb-reply-cancel {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: var(--cb-text-secondary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  padding: 0;\n  flex-shrink: 0;\n  transition:\n    background var(--cb-transition),\n    color var(--cb-transition);\n}\n\n.cb-reply-cancel:hover {\n  background: var(--cb-border);\n  color: var(--cb-text);\n}\n\n.cb-reply-cancel svg {\n  width: 12px;\n  height: 12px;\n}\n\n/* Formatear bloque de texto citado en la burbuja */\n\n.cb-message-quote {\n  display: flex;\n  align-items: stretch;\n  gap: 7px;\n  margin-bottom: 6px;\n  background: rgba(255, 255, 255, 0.15);\n  padding: 6px 10px;\n  max-width: 100%;\n}\n\n.cb-message-quote-bar {\n  width: 2.5px;\n  background: rgba(255, 255, 255, 0.7);\n  flex-shrink: 0;\n}\n\n.cb-message-quote-text {\n  font-size: 11.5px;\n  color: rgba(255, 255, 255, 0.82);\n  line-height: 1.45;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  word-break: break-word;\n}\n\n/* Configurar animaci\xF3n textual de estado pensando */\n.cb-typing-indicator.cb-thinking {\n  gap: 0;\n  padding: 6px 0;\n  background: transparent;\n  border: none;\n  box-shadow: none;\n  position: relative;\n  overflow: visible;\n}\n\n.cb-typing-indicator.cb-thinking::after {\n  display: none;\n}\n\n.cb-thinking-spinner {\n  display: none;\n}\n\n.cb-thinking-text {\n  font-size: 13.5px;\n  font-weight: 300;\n  margin-left: 8px;\n  background: var(--cb-thinking-gradient);\n  background-size: 200% auto;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  color: transparent;\n  animation: cb-shimmer-text 1.6s linear infinite;\n  display: inline-block;\n  letter-spacing: 0.3px;\n}\n\n@keyframes cb-shimmer-text {\n  to {\n    background-position: 200% center;\n  }\n}\n\n/* Dise\xF1ar bot\xF3n para activar grabaci\xF3n de voz */\n.cb-mic-btn {\n  width: var(--cb-input-btn-size);\n  height: var(--cb-input-btn-size);\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n  background: transparent;\n  color: var(--cb-text-secondary);\n  display: none;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  padding: 0;\n\n  transition:\n    background-color var(--cb-transition),\n    color var(--cb-transition);\n}\n\n.cb-mic-btn.cb-visible {\n  display: flex;\n  animation: cb-pop-in 0.25s var(--cb-ease-spring) both;\n}\n\n.cb-mic-btn:hover {\n  background: var(--cb-bg-secondary);\n  color: var(--cb-primary);\n}\n\n.cb-mic-btn svg {\n  width: 17px;\n  height: 17px;\n  min-width: 17px;\n}\n\n/* Configurar interfaz superpuesta durante grabaci\xF3n */\n.cb-recording-ui {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 10px;\n  background: var(--cb-bg);\n  border-radius: inherit;\n  z-index: 5;\n\n  opacity: 0;\n  transform: translateY(4px);\n  pointer-events: none;\n  transition:\n    opacity 0.2s ease,\n    transform 0.2s ease;\n}\n\n.cb-recording-ui.cb-visible {\n  opacity: 1;\n  transform: translateY(0);\n  pointer-events: auto;\n}\n\n/* Animar indicador visual de grabaci\xF3n en curso */\n.cb-recording-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: var(--cb-danger);\n  flex-shrink: 0;\n  animation: cb-pulse-record 1.2s ease-in-out infinite;\n}\n\n@keyframes cb-pulse-record {\n  0%,\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.5;\n    transform: scale(0.75);\n  }\n}\n\n/* Formatear contador de tiempo de grabaci\xF3n */\n.cb-recording-timer {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--cb-danger);\n  letter-spacing: 0.5px;\n  min-width: 36px;\n  flex-shrink: 0;\n  font-variant-numeric: tabular-nums;\n}\n\n/* Alinear visualizador de niveles de audio */\n.cb-recording-wave {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  height: 28px;\n}\n\n.cb-recording-bar {\n  width: 3px;\n  height: 4px;\n  border-radius: 2px;\n  background: var(--cb-primary);\n  opacity: 0.7;\n  transition: height 0.08s ease;\n  min-height: 4px;\n}\n\n/* Dise\xF1ar bot\xF3n para descartar nota de voz */\n.cb-recording-cancel {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: 1px solid var(--cb-border);\n  background: var(--cb-bg-secondary);\n  color: var(--cb-text-secondary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  padding: 0;\n  flex-shrink: 0;\n  transition:\n    background var(--cb-transition),\n    color var(--cb-transition),\n    border-color var(--cb-transition);\n}\n\n.cb-recording-cancel:hover {\n  background: var(--cb-danger-bg);\n  color: var(--cb-danger);\n  border-color: var(--cb-danger-soft);\n}\n\n/* Dise\xF1ar bot\xF3n para enviar nota de voz */\n.cb-recording-send {\n  width: var(--cb-input-btn-size);\n  height: var(--cb-input-btn-size);\n  border-radius: 50%;\n  border: none;\n  background: var(--cb-primary);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  padding: 0;\n  flex-shrink: 0;\n  transition:\n    background var(--cb-transition),\n    transform 0.15s ease,\n    box-shadow var(--cb-transition);\n  box-shadow: 0 2px 8px rgba(87, 43, 134, 0.35);\n}\n\n.cb-recording-send:hover {\n  background: var(--cb-primary-hover);\n  transform: scale(1.06);\n  box-shadow: 0 4px 14px rgba(87, 43, 134, 0.45);\n}\n\n/* Configurar reproductor de audio compacto en burbuja */\n.cb-message--user .cb-audio-player {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  min-width: 200px;\n  max-width: 240px;\n}\n\n.cb-audio-play-btn {\n  width: var(--cb-input-btn-size);\n  height: var(--cb-input-btn-size);\n  border-radius: 50%;\n  border: none;\n  background: rgba(255, 255, 255, 0.22);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  padding: 0;\n  flex-shrink: 0;\n  transition:\n    background 0.18s ease,\n    transform 0.15s ease;\n}\n\n.cb-audio-play-btn:hover {\n  background: rgba(255, 255, 255, 0.35);\n  transform: scale(1.05);\n}\n\n.cb-audio-play-btn svg {\n  width: 16px;\n  height: 16px;\n}\n\n.cb-audio-progress-wrapper {\n  flex: 1;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 2px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n\n.cb-audio-progress-bar {\n  height: 100%;\n  width: 0%;\n  background: white;\n  border-radius: 2px;\n  transition: width 0.1s linear;\n  pointer-events: none;\n}\n\n.cb-audio-duration {\n  font-size: 11.5px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.85);\n  min-width: 30px;\n  text-align: right;\n  letter-spacing: 0.3px;\n  font-variant-numeric: tabular-nums;\n  flex-shrink: 0;\n}\n\n/* ==========================================================================\n   Panel de Conversaciones Pasadas (Historial)\n   ========================================================================== */\n\n.cb-actions-btn.cb-is-active {\n  background: var(--cb-header-btn-highlight) !important;\n  color: white !important;\n}\n\n.cb-history-panel {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  background: var(--cb-bg-secondary);\n  transform: translateX(-100%);\n  transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 9;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n\n.cb-history-panel.cb-is-active {\n  transform: translateX(0);\n}\n\n.cb-messages.cb-history-active {\n  transform: translateX(100%);\n}\n\n.cb-history-panel-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 11px var(--cb-spacing);\n  border-bottom: 1px solid var(--cb-border);\n  background: var(--cb-bg);\n  flex-shrink: 0;\n  box-sizing: border-box;\n}\n\n.cb-history-panel-title {\n  font-family: var(--cb-font);\n  font-weight: 700;\n  font-size: 14px;\n  color: var(--cb-text);\n  letter-spacing: -0.01em;\n}\n\n.cb-history-panel-close {\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  border: none;\n  cursor: pointer;\n  background: transparent;\n  color: var(--cb-text-secondary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition:\n    background var(--cb-transition),\n    color var(--cb-transition),\n    transform 0.2s;\n}\n\n.cb-history-panel-close:hover {\n  background: var(--cb-border);\n  color: var(--cb-text);\n  transform: scale(1.08);\n}\n\n.cb-history-panel-close:active {\n  transform: scale(0.92);\n}\n\n.cb-history-panel-close svg {\n  width: 16px;\n  height: 16px;\n}\n\n.cb-history-list {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 6px 0 12px;\n  scrollbar-width: thin;\n  scrollbar-color: var(--cb-scrollbar-color) var(--cb-scrollbar-track);\n}\n\n.cb-history-list::-webkit-scrollbar {\n  width: var(--cb-scrollbar-width);\n}\n.cb-history-list::-webkit-scrollbar-track {\n  background: var(--cb-scrollbar-track);\n}\n.cb-history-list::-webkit-scrollbar-thumb {\n  background: var(--cb-scrollbar-color);\n  border-radius: 100px;\n}\n\n/* Formatear etiqueta de grupo de fecha */\n.cb-history-group-label {\n  font-family: var(--cb-font);\n  font-size: 10.5px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--cb-text-secondary);\n  padding: 14px var(--cb-spacing) 6px;\n  opacity: 0.7;\n}\n\n.cb-history-group-label:first-child {\n  padding-top: 8px;\n}\n\n.cb-history-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px var(--cb-spacing);\n  cursor: pointer;\n  border-bottom: 1px solid var(--cb-border);\n  transition:\n    background var(--cb-transition),\n    border-left-color var(--cb-transition);\n  position: relative;\n  box-sizing: border-box;\n  border-left: 3px solid transparent;\n}\n\n.cb-history-item:last-child {\n  border-bottom: none;\n}\n\n.cb-history-item:hover {\n  background: var(--cb-primary-soft);\n  border-left-color: rgba(87, 43, 134, 0.35);\n}\n\n.cb-history-item--active {\n  background: var(--cb-primary-soft) !important;\n  border-left-color: var(--cb-primary) !important;\n  cursor: default;\n  pointer-events: none;\n}\n\n/* Dise\xF1ar estado de confirmaci\xF3n de borrado */\n.cb-history-item--confirming {\n  background: var(--cb-bg) !important;\n  cursor: default;\n}\n\n.cb-history-item--confirming .cb-history-item-content {\n  opacity: 0.4;\n  pointer-events: none;\n}\n\n.cb-history-item--confirming .cb-history-item-delete {\n  display: none;\n}\n\n.cb-history-item-confirm {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 8px;\n  padding: 10px var(--cb-spacing);\n  background: var(--cb-bg);\n  animation: cb-confirm-fade-in 0.15s ease;\n}\n\n@keyframes cb-confirm-fade-in {\n  from {\n    opacity: 0;\n    transform: translateX(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n\n.cb-history-item-confirm-text {\n  font-family: var(--cb-font);\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--cb-text);\n}\n\n.cb-history-item-confirm-actions {\n  display: flex;\n  gap: 6px;\n}\n\n.cb-history-item-confirm-no,\n.cb-history-item-confirm-yes {\n  font-family: var(--cb-font);\n  font-size: 12px;\n  font-weight: 500;\n  border: none;\n  border-radius: 6px;\n  padding: 4px 12px;\n  cursor: pointer;\n  transition:\n    background var(--cb-transition),\n    color var(--cb-transition);\n}\n\n.cb-history-item-confirm-no {\n  background: var(--cb-border);\n  color: var(--cb-text);\n}\n\n.cb-history-item-confirm-no:hover {\n  background: var(--cb-border-strong);\n}\n\n.cb-history-item-confirm-yes {\n  background: var(--cb-danger-soft);\n  color: var(--cb-danger);\n}\n\n.cb-history-item-confirm-yes:hover {\n  background: var(--cb-danger);\n  color: #fff;\n}\n\n.cb-history-item-content {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  transition:\n    opacity var(--cb-transition),\n    transform var(--cb-transition);\n}\n\n.cb-history-item:hover .cb-history-item-content {\n  transform: translateX(2px);\n}\n\n.cb-history-item-title {\n  font-family: var(--cb-font);\n  font-weight: 600;\n  font-size: 13px;\n  color: var(--cb-text);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.3;\n  transition: color var(--cb-transition);\n}\n\n.cb-history-item:hover .cb-history-item-title {\n  color: var(--cb-primary);\n}\n\n.cb-history-item-preview {\n  font-family: var(--cb-font);\n  font-size: 12px;\n  color: var(--cb-text-secondary);\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  line-clamp: 2;\n  overflow: hidden;\n  opacity: 0.85;\n  line-height: 1.4;\n}\n\n.cb-history-item-meta {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 10.5px;\n  color: var(--cb-text-secondary);\n  margin-top: 1px;\n  opacity: 0.75;\n}\n\n.cb-history-item-dot {\n  opacity: 0.5;\n}\n\n.cb-history-item-delete {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  background: transparent;\n  color: var(--cb-text-secondary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transform: translateX(6px);\n  transition:\n    opacity var(--cb-transition),\n    background var(--cb-transition),\n    color var(--cb-transition),\n    transform var(--cb-transition);\n  margin-left: 6px;\n  flex-shrink: 0;\n}\n\n.cb-history-item:hover .cb-history-item-delete {\n  opacity: 0.55;\n  transform: translateX(0);\n}\n\n.cb-history-item-delete:hover {\n  opacity: 1 !important;\n  background: rgba(239, 68, 68, 0.1);\n  color: var(--cb-danger);\n  transform: translateX(0) scale(1.06);\n}\n\n.cb-history-item-delete:active {\n  transform: translateX(0) scale(0.92);\n}\n\n.cb-history-item-delete svg {\n  width: 15px;\n  height: 15px;\n}\n\n/* Aplicar animaci\xF3n de barrido al eliminar un \xEDtem */\n@keyframes cb-item-swipe-out {\n  0% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  25% {\n    transform: translateX(-6px);\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(110%);\n    opacity: 0;\n  }\n}\n\n.cb-history-item--removing {\n  animation: cb-item-swipe-out 0.32s cubic-bezier(0.55, 0, 0.75, 0.1)\n    var(--cb-swipe-delay, 0ms) both;\n  pointer-events: none;\n}\n\n/* Estilizar footer con acci\xF3n global de borrado */\n.cb-history-panel-footer.cb-is-hidden {\n  display: none;\n}\n\n.cb-history-panel-footer {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px var(--cb-spacing);\n  border-top: 1px solid var(--cb-border);\n  background: var(--cb-bg);\n  box-sizing: border-box;\n  min-height: 48px;\n}\n\n.cb-history-clear-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-family: var(--cb-font);\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--cb-text-secondary);\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 5px 8px;\n  border-radius: 7px;\n  transition:\n    color var(--cb-transition),\n    background var(--cb-transition);\n}\n\n.cb-history-clear-btn:hover {\n  color: var(--cb-danger);\n  background: rgba(239, 68, 68, 0.08);\n}\n\n.cb-history-clear-btn svg {\n  width: 14px;\n  height: 14px;\n  flex-shrink: 0;\n}\n\n/* Dise\xF1ar modal superpuesto de confirmaci\xF3n para "Borrar todo" */\n.cb-clear-all-overlay {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  box-sizing: border-box;\n  background: rgba(20, 12, 32, 0.45);\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n  z-index: 20;\n  opacity: 0;\n  transition: opacity 0.18s ease;\n}\n\n.cb-clear-all-overlay.cb-is-hidden {\n  display: none;\n}\n\n.cb-clear-all-overlay.cb-is-active {\n  opacity: 1;\n}\n\n.cb-clear-all-dialog {\n  width: 100%;\n  max-width: 280px;\n  background: var(--cb-bg);\n  border-radius: var(--cb-radius);\n  box-shadow: var(--cb-shadow);\n  padding: 18px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  transform: scale(0.92);\n  transition: transform 0.18s var(--cb-ease-out-spring, ease);\n}\n\n.cb-clear-all-overlay.cb-is-active .cb-clear-all-dialog {\n  transform: scale(1);\n}\n\n.cb-clear-all-text {\n  margin: 0;\n  font-family: var(--cb-font);\n  font-size: 13.5px;\n  font-weight: 600;\n  color: var(--cb-text);\n  text-align: center;\n}\n\n.cb-clear-all-actions {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n}\n\n.cb-clear-all-actions .cb-history-item-confirm-no,\n.cb-clear-all-actions .cb-history-item-confirm-yes {\n  padding: 7px 16px;\n  font-size: 12.5px;\n}\n\n/* Configurar estado vac\xEDo mejorado */\n.cb-history-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 48px var(--cb-spacing) 32px;\n  text-align: center;\n}\n\n.cb-history-empty-icon {\n  width: 48px;\n  height: 48px;\n  color: var(--cb-text-secondary);\n  opacity: 0.35;\n}\n\n.cb-history-empty-icon svg {\n  width: 100%;\n  height: 100%;\n}\n\n.cb-history-empty-title {\n  font-family: var(--cb-font);\n  font-size: 13.5px;\n  font-weight: 600;\n  color: var(--cb-text);\n  opacity: 0.6;\n  margin: 0;\n}\n\n.cb-history-empty-sub {\n  font-family: var(--cb-font);\n  font-size: 12px;\n  color: var(--cb-text-secondary);\n  opacity: 0.7;\n  margin: 0;\n  line-height: 1.5;\n}\n\n/* Dise\xF1ar lightbox para vista ampliada de im\xE1genes ya publicadas en la conversaci\xF3n */\n.cb-lightbox-dialog {\n  margin: auto;\n  position: fixed;\n  inset: 0;\n  background-color: transparent;\n  border: none;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  padding: 1rem;\n  box-sizing: border-box;\n  opacity: 0;\n  transform: scale(0.92);\n  transition:\n    opacity 0.25s ease,\n    transform 0.25s ease,\n    display 0.25s ease allow-discrete,\n    overlay 0.25s ease allow-discrete;\n  z-index: calc(var(--cb-z-index) + 10);\n}\n\n.cb-lightbox-dialog:not([open]) {\n  pointer-events: none;\n}\n\n.cb-lightbox-dialog[open] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 1;\n  transform: scale(1);\n}\n\n.cb-lightbox-dialog::backdrop {\n  background-color: rgba(20, 16, 32, 0.6);\n  -webkit-backdrop-filter: blur(0.25rem);\n  backdrop-filter: blur(0.25rem);\n  opacity: 0;\n  transition:\n    opacity 0.25s ease,\n    backdrop-filter 0.25s ease,\n    display 0.25s ease allow-discrete,\n    overlay 0.25s ease allow-discrete;\n}\n\n.cb-lightbox-dialog[open]::backdrop {\n  opacity: 1;\n}\n\n/* Proveer fallback para navegadores (como Firefox) que no soportan @starting-style */\n.cb-lightbox-dialog[open].is-opening {\n  opacity: 0;\n  transform: scale(0.92);\n}\n\n.cb-lightbox-dialog[open].is-opening::backdrop {\n  opacity: 0;\n}\n\n.cb-lightbox-dialog.is-closing {\n  opacity: 0;\n  transform: scale(0.92);\n}\n\n.cb-lightbox-dialog.is-closing::backdrop {\n  opacity: 0;\n}\n\n.cb-lightbox-dialog img {\n  max-width: 80vw;\n  max-height: 80vh;\n  object-fit: contain;\n  border-radius: var(--cb-radius, 12px);\n  box-shadow: var(--cb-shadow);\n}\n\n.cb-lightbox-close-btn {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background: rgba(255, 255, 255, 0.15);\n  color: #fff;\n  border-radius: 50%;\n  width: 2.2rem;\n  height: 2.2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border: none;\n  z-index: 10;\n  transition:\n    background-color 0.2s,\n    color 0.2s;\n}\n\n.cb-lightbox-close-btn:hover {\n  background: rgba(255, 255, 255, 0.28);\n}\n\n/* Dise\xF1ar zona de arrastrar y soltar una imagen sobre la ventana del chat */\n.cb-dropzone-overlay {\n  position: absolute;\n  inset: 0;\n  z-index: var(--cb-z-index);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  background: var(--cb-bg);\n  border: 2px dashed var(--cb-primary);\n  border-radius: var(--cb-radius);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity var(--cb-transition);\n}\n\n.cb-dropzone-overlay.cb-visible {\n  opacity: 1;\n}\n\n.cb-dropzone-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  color: var(--cb-primary);\n  font-family: var(--cb-font);\n  font-size: 13.5px;\n  font-weight: 600;\n  text-align: center;\n}\n\n.cb-dropzone-content svg {\n  width: 32px;\n  height: 32px;\n}\n';

// src/utils/session.js
var SESSION_KEY = "cb_widget_v1_session_id";
var HISTORY_KEY = "cb_widget_v1_history";
var SESSIONS_INDEX_KEY = "cb_widget_v1_sessions_index";
var HISTORY_PREFIX = "cb_widget_v1_history_";
function generateUUID() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  if (typeof crypto !== "undefined" && typeof crypto.getRandomValues === "function") {
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);
    bytes[6] = bytes[6] & 15 | 64;
    bytes[8] = bytes[8] & 63 | 128;
    const hex = Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join("");
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
}
function getOrCreateSessionId() {
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
function setActiveSessionId(sessionId) {
  try {
    localStorage.setItem(SESSION_KEY, sessionId);
  } catch (e) {
  }
}
function getTitleFromHistory(history) {
  const firstUserMsg = history.find((m) => m.role === "user");
  return firstUserMsg ? firstUserMsg.text : "Conversaci\xF3n 1";
}
function getSessionsIndex() {
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
function saveSessionToIndex(sessionId, title, messageCount) {
  try {
    const index = getSessionsIndex();
    let session = index.find((s) => s.sessionId === sessionId);
    const now = (/* @__PURE__ */ new Date()).toISOString();
    const finalTitle = title || (session ? session.title : "Conversaci\xF3n 1");
    const history = getHistoryBySessionId(sessionId);
    const lastUserMsg = [...history].reverse().find((m) => m.role === "user");
    if (!lastUserMsg) {
      if (session) {
        const filteredIndex = index.filter((s) => s.sessionId !== sessionId);
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
    index.sort((a, b) => {
      const timeA = new Date(a.lastUserMessageAt || a.lastMessageAt).getTime();
      const timeB = new Date(b.lastUserMessageAt || b.lastMessageAt).getTime();
      return timeB - timeA;
    });
    while (index.length > 20) {
      const removed = index.pop();
      try {
        localStorage.removeItem(removed.historyKey);
      } catch (err) {
      }
    }
    localStorage.setItem(SESSIONS_INDEX_KEY, JSON.stringify(index));
  } catch (e) {
    console.error("Error saving session to index", e);
  }
}
function deleteSessionFromIndex(sessionId) {
  try {
    const index = getSessionsIndex();
    const filtered = index.filter((s) => s.sessionId !== sessionId);
    localStorage.setItem(SESSIONS_INDEX_KEY, JSON.stringify(filtered));
    localStorage.removeItem(`${HISTORY_PREFIX}${sessionId}`);
  } catch (e) {
  }
}
function getHistoryBySessionId(sessionId) {
  try {
    const key = `${HISTORY_PREFIX}${sessionId}`;
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}
function clearSession() {
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
  } catch (e) {
  }
  return getOrCreateSessionId();
}
function getChatHistory(sessionId) {
  const activeSessionId = sessionId || getCurrentSessionId();
  const dynamicKey = activeSessionId ? `${HISTORY_PREFIX}${activeSessionId}` : null;
  try {
    if (dynamicKey) {
      const data = localStorage.getItem(dynamicKey);
      if (data) {
        return JSON.parse(data);
      }
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
function saveChatHistory(historyArray, sessionId) {
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
function getCurrentSessionId() {
  try {
    return localStorage.getItem(SESSION_KEY);
  } catch (e) {
    return getOrCreateSessionId._fallbackId || null;
  }
}

// src/utils/markdown.js
function sanitizeUrl(url) {
  const trimmed = url.trim();
  if (/^javascript:/i.test(trimmed) || /^data:/i.test(trimmed) || /^vbscript:/i.test(trimmed)) {
    return "#";
  }
  return trimmed;
}
function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
function linkifyUrls(text) {
  const parts = text.split(/(<[^>]+>)/g);
  let inAnchor = false;
  return parts.map((part) => {
    if (part.startsWith("<") && part.endsWith(">")) {
      if (part.toLowerCase().startsWith("<a")) {
        inAnchor = true;
      } else if (part.toLowerCase() === "</a>") {
        inAnchor = false;
      }
      return part;
    }
    if (inAnchor) {
      return part;
    }
    const urlRegex = /(?:https?|ftp):\/\/[^\s<>"{}|\\^`[\]]+/g;
    return part.replace(urlRegex, (url) => {
      const trailing = url.match(/[.,;:!?)"']+$/);
      const cleanUrl = trailing ? url.slice(0, -trailing[0].length) : url;
      const suffix = trailing ? trailing[0] : "";
      const target = cleanUrl.includes("ayuda.aliaddo.com") ? "_self" : "_blank";
      return `<a href="${cleanUrl}" target="${target}" rel="noopener noreferrer" class="cb-link">${cleanUrl}</a>${suffix}`;
    });
  }).join("");
}
function extractCodeBlocks(text, blocks) {
  return text.replace(/```(\w*)\n?([\s\S]*?)```/g, (_, lang, code) => {
    const index = blocks.length;
    const langAttr = lang ? ` class="language-${escapeHtml(lang)}"` : "";
    blocks.push(
      `<pre class="cb-code-block"><code${langAttr}>${escapeHtml(code.trim())}</code></pre>`
    );
    return `\0CODEBLOCK${index}\0`;
  });
}
function extractInlineCode(text, blocks) {
  return text.replace(/`([^`\n]+)`/g, (_, code) => {
    const index = blocks.length;
    blocks.push(`<code class="cb-inline-code">${escapeHtml(code)}</code>`);
    return `\0INLINECODE${index}\0`;
  });
}
function restoreCodeBlocks(text, codeBlocks, inlineBlocks) {
  let result = text;
  codeBlocks.forEach((block, i) => {
    result = result.replace(`\0CODEBLOCK${i}\0`, block);
  });
  inlineBlocks.forEach((block, i) => {
    result = result.replace(`\0INLINECODE${i}\0`, block);
  });
  return result;
}
function parseInlineStyles(text) {
  return text.replace(/\*\*([^*\n]+)\*\*/g, "<strong>$1</strong>").replace(/__([^_\n]+)__/g, "<strong>$1</strong>").replace(/(?<!\*)\*(?!\*)([^*\n]+)(?<!\*)\*(?!\*)/g, "<em>$1</em>").replace(/(?<!_)_(?!_)([^_\n]+)(?<!_)_(?!_)/g, "<em>$1</em>").replace(/~~([^~\n]+)~~/g, "<del>$1</del>");
}
function parseMarkdownImages(text) {
  const markdownImageRegex = /!\[([^\]]*)\]\(((?:[^()\s]|\([^()]*\))*)\)/g;
  return text.replace(markdownImageRegex, (_, altText, url) => {
    const cleanUrl = sanitizeUrl(url);
    return `<img src="${cleanUrl}" alt="${altText}" class="cb-image" style="max-width: 100%; border-radius: var(--cb-radius, 12px); margin: 8px 0; display: block;" loading="lazy" />`;
  });
}
function parseMarkdownLinks(text) {
  const markdownLinkRegex = /\[([^\]]+)\]\(((?:[^()\s]|\([^()]*\))*)\)/g;
  return text.replace(markdownLinkRegex, (_, linkText, url) => {
    const cleanUrl = sanitizeUrl(url);
    const target = cleanUrl.includes("ayuda.aliaddo.com") ? "_self" : "_blank";
    return `<a href="${cleanUrl}" target="${target}" rel="noopener noreferrer" class="cb-link">${linkText}</a>`;
  });
}
function parseInline(text) {
  let processed = text;
  processed = parseInlineStyles(processed);
  processed = parseMarkdownImages(processed);
  processed = parseMarkdownLinks(processed);
  processed = linkifyUrls(processed);
  return processed;
}
function parseMarkdown(text) {
  if (!text || typeof text !== "string")
    return "";
  const codeBlocks = [];
  const inlineBlocks = [];
  let processed = extractCodeBlocks(text, codeBlocks);
  processed = escapeHtml(processed);
  processed = extractInlineCode(processed, inlineBlocks);
  const lines = processed.split(/\r?\n/);
  const blocks = [];
  let currentBlock = null;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    if (trimmed === "") {
      if (currentBlock) {
        blocks.push(currentBlock);
        currentBlock = null;
      }
      continue;
    }
    if (/^([-*_])(\s*\1){2,}$/.test(trimmed)) {
      if (currentBlock) {
        blocks.push(currentBlock);
        currentBlock = null;
      }
      blocks.push({ type: "hr" });
      continue;
    }
    const headingMatch = line.match(/^(#{1,3})\s+(.+)$/);
    if (headingMatch) {
      if (currentBlock) {
        blocks.push(currentBlock);
      }
      const level = headingMatch[1].length;
      const headingText = headingMatch[2];
      blocks.push({
        type: "heading",
        level,
        text: headingText
      });
      currentBlock = null;
      continue;
    }
    const uListMatch = line.match(/^(\s*)[-*]\s+(.+)$/);
    if (uListMatch) {
      const itemText = uListMatch[2];
      if (currentBlock && currentBlock.type !== "ul") {
        blocks.push(currentBlock);
        currentBlock = null;
      }
      if (!currentBlock) {
        currentBlock = { type: "ul", items: [] };
      }
      currentBlock.items.push(itemText);
      continue;
    }
    const oListMatch = line.match(/^\s*(\d+)\.\s+(.+)$/);
    if (oListMatch) {
      const itemText = oListMatch[2];
      if (currentBlock && currentBlock.type !== "ol") {
        blocks.push(currentBlock);
        currentBlock = null;
      }
      if (!currentBlock) {
        currentBlock = { type: "ol", items: [] };
      }
      currentBlock.items.push(itemText);
      continue;
    }
    if (trimmed.startsWith("|")) {
      if (currentBlock && currentBlock.type !== "table") {
        blocks.push(currentBlock);
        currentBlock = null;
      }
      if (!currentBlock) {
        currentBlock = { type: "table", rows: [] };
      }
      currentBlock.rows.push(trimmed);
      continue;
    }
    if (currentBlock && currentBlock.type !== "p") {
      blocks.push(currentBlock);
      currentBlock = null;
    }
    if (!currentBlock) {
      currentBlock = { type: "p", lines: [] };
    }
    currentBlock.lines.push(line);
  }
  if (currentBlock) {
    blocks.push(currentBlock);
  }
  const htmlBlocks = blocks.map((block) => {
    if (block.type === "hr") {
      return '<hr class="cb-hr" />';
    }
    if (block.type === "heading") {
      const processedText = parseInline(block.text);
      return `<h${block.level} class="cb-heading">${processedText}</h${block.level}>`;
    }
    if (block.type === "ul") {
      const itemsHtml = block.items.map((item) => {
        const processedText = parseInline(item);
        return `<li>${processedText}</li>`;
      }).join("");
      return `<ul class="cb-list">${itemsHtml}</ul>`;
    }
    if (block.type === "ol") {
      const itemsHtml = block.items.map((item) => {
        const processedText = parseInline(item);
        return `<li>${processedText}</li>`;
      }).join("");
      return `<ol class="cb-list cb-list--ordered">${itemsHtml}</ol>`;
    }
    if (block.type === "table") {
      const tableRows = block.rows.map((row) => {
        let cleanRow = row;
        if (cleanRow.startsWith("|"))
          cleanRow = cleanRow.substring(1);
        if (cleanRow.endsWith("|"))
          cleanRow = cleanRow.substring(0, cleanRow.length - 1);
        return cleanRow.split("|").map((cell) => cell.trim());
      });
      const dataRows = [];
      let headers = [];
      let hasSeparator = false;
      if (tableRows.length > 1) {
        const secondRow = tableRows[1];
        hasSeparator = secondRow.length > 0 && secondRow.every((cell) => /^[-:\s]+$/.test(cell));
      }
      tableRows.forEach((row, idx) => {
        if (hasSeparator && idx === 1)
          return;
        if (hasSeparator && idx === 0) {
          headers = row;
        } else {
          dataRows.push(row);
        }
      });
      let thead = "";
      if (headers.length > 0) {
        thead = `<thead><tr>${headers.map((h) => `<th style="padding: 8px; border: 1px solid rgba(150,150,150,0.3); background-color: rgba(150,150,150,0.1); text-align: left;">${parseInline(h)}</th>`).join("")}</tr></thead>`;
      }
      let tbody = `<tbody>${dataRows.map((row) => {
        return `<tr>${row.map((cell) => `<td style="padding: 8px; border: 1px solid rgba(150,150,150,0.3);">${parseInline(cell)}</td>`).join("")}</tr>`;
      }).join("")}</tbody>`;
      return `<div class="cb-table-wrapper" style="overflow-x: auto; margin: 10px 0;"><table class="cb-table" style="width: 100%; border-collapse: collapse; font-size: 0.9em;">${thead}${tbody}</table></div>`;
    }
    if (block.type === "p") {
      const processedLines = block.lines.map((line) => parseInline(line)).join("<br>");
      return `<p class="cb-paragraph">${processedLines}</p>`;
    }
    return "";
  });
  let htmlResult = htmlBlocks.join("");
  htmlResult = restoreCodeBlocks(htmlResult, codeBlocks, inlineBlocks);
  return htmlResult;
}

// src/utils/api.js
var DEFAULT_TIMEOUT = 6e4;
var RETRY_DELAY = 1e3;
var MAX_RETRIES = 1;
function fetchWithTimeout(url, options, timeout, signal = null) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  if (signal) {
    if (signal.aborted)
      controller.abort();
    else
      signal.addEventListener("abort", () => controller.abort());
  }
  return fetch(url, { ...options, signal: controller.signal }).finally(() => clearTimeout(timeoutId));
}
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function classifyError(error) {
  if (error.name === "AbortError") {
    return "La solicitud tard\xF3 demasiado tiempo. Verifica tu conexi\xF3n e int\xE9ntalo de nuevo.";
  }
  if (error.name === "TypeError" && error.message.includes("Failed to fetch")) {
    return "No se pudo conectar con el servidor. Puede ser un problema de CORS o de red. Verifica la URL del webhook y que el servidor permita solicitudes desde este dominio.";
  }
  if (error.name === "TypeError" && error.message.includes("NetworkError")) {
    return "Error de red. Verifica tu conexi\xF3n a internet.";
  }
  return `Error de conexi\xF3n: ${error.message}`;
}
async function fetchWithRetry(url, options, timeout, retriesLeft, signal = null) {
  try {
    const response = await fetchWithTimeout(url, options, timeout, signal);
    return response;
  } catch (error) {
    if (retriesLeft > 0 && error.name !== "AbortError") {
      await delay(RETRY_DELAY);
      return fetchWithRetry(url, options, timeout, retriesLeft - 1, signal);
    }
    throw error;
  }
}
async function sendMessage(webhookUrl, chatInput, sessionId, extraMetadata = {}, timeout = DEFAULT_TIMEOUT, signal = null, onProgress = null) {
  if (!webhookUrl) {
    throw new Error("URL del webhook no configurada. Agrega la URL en window.ChatBubbleConfig.webhook.url");
  }
  const payload = {
    chatInput: chatInput.trim(),
    sessionId,
    metadata: {
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      source: "chat-bubble",
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "unknown",
      ...extraMetadata
    }
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(payload)
  };
  let response;
  try {
    response = await fetchWithRetry(webhookUrl, options, timeout, MAX_RETRIES, signal);
  } catch (error) {
    if (error.name === "AbortError" && signal && signal.aborted)
      throw error;
    throw new Error(classifyError(error));
  }
  if (!response.ok) {
    try {
      const errorBody = await response.text();
      if (errorBody)
        console.error("[ChatBubble] Detalle del error del webhook:", errorBody.slice(0, 500));
    } catch (_) {
    }
    if (response.status === 401 || response.status === 403) {
      throw new Error(`Sin autorizaci\xF3n para acceder al webhook (${response.status}). Verifica la configuraci\xF3n de n8n.`);
    }
    if (response.status === 404) {
      throw new Error(`Webhook no encontrado (404). Verifica que la URL sea correcta y que el workflow est\xE9 activo en n8n.`);
    }
    if (response.status === 429) {
      throw new Error(`Demasiadas solicitudes (429). Espera un momento antes de enviar otro mensaje.`);
    }
    if (response.status >= 500) {
      throw new Error(`Error interno del servidor (${response.status}). El servicio de n8n puede estar temporalmente no disponible.`);
    }
    throw new Error(`Error HTTP ${response.status}. No se pudo procesar tu solicitud.`);
  }
  let data;
  try {
    data = await response.json();
  } catch (error) {
    throw new Error('La respuesta del servidor no es JSON v\xE1lido. Verifica la configuraci\xF3n del nodo "Respond to Webhook" en n8n.');
  }
  if (!data || typeof data.output === "undefined") {
    const possibleOutput = data?.message || data?.text || data?.response || data?.content;
    if (possibleOutput) {
      return {
        output: String(possibleOutput),
        sessionId: data.sessionId || sessionId
      };
    }
    throw new Error('La respuesta del servidor no contiene el campo "output". Verifica la configuraci\xF3n del workflow en n8n.');
  }
  return {
    output: String(data.output),
    sessionId: data.sessionId || sessionId
  };
}
async function sendImageMessage(webhookUrl, imageFile, sessionId, caption = "", extraMetadata = {}, timeout = DEFAULT_TIMEOUT, signal = null) {
  if (!webhookUrl) {
    throw new Error("URL del webhook no configurada.");
  }
  const formData = new FormData();
  formData.append("sessionId", sessionId);
  formData.append(
    "metadata",
    JSON.stringify({
      type: "image",
      caption: caption || "",
      mimeType: imageFile.type,
      fileName: imageFile.name || "",
      size: imageFile.size,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      source: "chat-bubble",
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "unknown",
      ...extraMetadata
    })
  );
  if (caption)
    formData.append("chatInput", caption);
  formData.append("imageFile", imageFile, imageFile.name || "image");
  const options = {
    method: "POST",
    // Omitir Content-Type para permitir generación automática de boundary
    body: formData
  };
  let response;
  try {
    response = await fetchWithRetry(webhookUrl, options, timeout, MAX_RETRIES, signal);
  } catch (error) {
    if (error.name === "AbortError" && signal && signal.aborted)
      throw error;
    throw new Error(classifyError(error));
  }
  if (!response.ok) {
    try {
      const errorBody = await response.text();
      if (errorBody)
        console.error("[ChatBubble] Detalle del error del webhook:", errorBody.slice(0, 500));
    } catch (_) {
    }
    if (response.status === 401 || response.status === 403) {
      throw new Error(`Sin autorizaci\xF3n para acceder al webhook (${response.status}).`);
    }
    if (response.status === 404) {
      throw new Error(`Webhook no encontrado (404). Verifica la URL y que el workflow est\xE9 activo.`);
    }
    if (response.status >= 500) {
      throw new Error(`Error del servidor (${response.status}). El servicio de n8n puede estar temporalmente no disponible.`);
    }
    throw new Error(`Error HTTP ${response.status}. No se pudo procesar tu solicitud.`);
  }
  let data;
  try {
    data = await response.json();
  } catch (_) {
    throw new Error("La respuesta del servidor no es JSON v\xE1lido.");
  }
  if (!data || typeof data.output === "undefined") {
    const possibleOutput = data?.message || data?.text || data?.response || data?.content;
    if (possibleOutput) {
      return { output: String(possibleOutput), sessionId: data.sessionId || sessionId };
    }
    throw new Error('La respuesta del servidor no contiene el campo "output".');
  }
  return {
    output: String(data.output),
    sessionId: data.sessionId || sessionId
  };
}
async function sendAudioMessage(webhookUrl, audioBlob, sessionId, duration, mimeType = "audio/webm", extraMetadata = {}, timeout = DEFAULT_TIMEOUT, signal = null) {
  if (!webhookUrl) {
    throw new Error("URL del webhook no configurada.");
  }
  let ext = "webm";
  if (mimeType.includes("ogg"))
    ext = "ogg";
  else if (mimeType.includes("mp4"))
    ext = "mp4";
  const filename = `voice_${Date.now()}.${ext}`;
  const formData = new FormData();
  formData.append("sessionId", sessionId);
  formData.append(
    "metadata",
    JSON.stringify({
      type: "audio",
      duration,
      mimeType,
      filename,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      source: "chat-bubble",
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "unknown",
      ...extraMetadata
    })
  );
  formData.append("audioFile", audioBlob, filename);
  const options = {
    method: "POST",
    // Omitir Content-Type para permitir generación automática de boundary
    body: formData
  };
  let response;
  try {
    response = await fetchWithRetry(webhookUrl, options, timeout, MAX_RETRIES, signal);
  } catch (error) {
    if (error.name === "AbortError" && signal && signal.aborted)
      throw error;
    throw new Error(classifyError(error));
  }
  if (!response.ok) {
    try {
      const errorBody = await response.text();
      if (errorBody)
        console.error("[ChatBubble] Detalle del error del webhook:", errorBody.slice(0, 500));
    } catch (_) {
    }
    if (response.status === 401 || response.status === 403) {
      throw new Error(`Sin autorizaci\xF3n para acceder al webhook (${response.status}).`);
    }
    if (response.status === 404) {
      throw new Error(`Webhook no encontrado (404). Verifica la URL y que el workflow est\xE9 activo.`);
    }
    if (response.status >= 500) {
      throw new Error(`Error del servidor (${response.status}). El servicio de n8n puede estar temporalmente no disponible.`);
    }
    throw new Error(`Error HTTP ${response.status}. No se pudo procesar tu solicitud.`);
  }
  let data;
  try {
    data = await response.json();
  } catch (_) {
    throw new Error("La respuesta del servidor no es JSON v\xE1lido.");
  }
  if (!data || typeof data.output === "undefined") {
    const possibleOutput = data?.message || data?.text || data?.response || data?.content;
    if (possibleOutput) {
      return { output: String(possibleOutput), sessionId: data.sessionId || sessionId };
    }
    throw new Error('La respuesta del servidor no contiene el campo "output".');
  }
  return {
    output: String(data.output),
    sessionId: data.sessionId || sessionId
  };
}

// src/utils/audio.js
var MAX_RECORDING_SECONDS = 30;
var AudioRecorder = class _AudioRecorder {
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
    this.mimeType = "";
    this.onTick = null;
    this.onComplete = null;
    this.onError = null;
    this.onLevelChange = null;
  }
  // Obtener formato de audio soportado
  static getSupportedMimeType() {
    const candidates = [
      "audio/webm;codecs=opus",
      "audio/webm",
      "audio/ogg;codecs=opus",
      "audio/ogg",
      "audio/mp4"
    ];
    for (const type of candidates) {
      if (MediaRecorder.isTypeSupported(type))
        return type;
    }
    return "";
  }
  // Determinar extensión de archivo
  static getExtension(mimeType) {
    if (mimeType.includes("ogg"))
      return "ogg";
    if (mimeType.includes("mp4"))
      return "mp4";
    return "webm";
  }
  // Iniciar grabación de audio
  async start() {
    this.cancelled = false;
    this.chunks = [];
    this.seconds = 0;
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
    } catch (err) {
      let msg = "No se pudo acceder al micr\xF3fono.";
      if (err.name === "NotAllowedError" || err.name === "PermissionDeniedError") {
        msg = "Permiso de micr\xF3fono denegado. Habil\xEDtalo en la configuraci\xF3n del navegador.";
      } else if (err.name === "NotFoundError") {
        msg = "No se encontr\xF3 ning\xFAn micr\xF3fono en este dispositivo.";
      }
      if (this.onError)
        this.onError(msg);
      return;
    }
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
        if (this.onLevelChange)
          this.onLevelChange(avg / 255);
      }, 80);
    } catch (_) {
    }
    this.mimeType = _AudioRecorder.getSupportedMimeType();
    const options = this.mimeType ? { mimeType: this.mimeType } : {};
    try {
      this.mediaRecorder = new MediaRecorder(this.stream, options);
    } catch (err) {
      if (this.onError)
        this.onError("Error al inicializar la grabaci\xF3n de audio.");
      this._cleanup();
      return;
    }
    this.mediaRecorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0)
        this.chunks.push(e.data);
    };
    this.mediaRecorder.onstop = () => {
      if (this.cancelled) {
        this._cleanup();
        return;
      }
      const duration = this.seconds;
      const blob = new Blob(this.chunks, { type: this.mimeType || "audio/webm" });
      this._cleanup();
      if (this.onComplete)
        this.onComplete(blob, duration);
    };
    this.mediaRecorder.start(100);
    this.startTime = Date.now();
    this.tickInterval = setInterval(() => {
      this.seconds = Math.floor((Date.now() - this.startTime) / 1e3);
      if (this.onTick)
        this.onTick(this.seconds);
    }, 500);
    this.autoStopTimeout = setTimeout(() => {
      this.stop();
    }, MAX_RECORDING_SECONDS * 1e3);
  }
  // Finalizar grabación
  stop() {
    if (!this.mediaRecorder || this.mediaRecorder.state === "inactive")
      return;
    clearInterval(this.tickInterval);
    clearTimeout(this.autoStopTimeout);
    this.seconds = Math.floor((Date.now() - this.startTime) / 1e3);
    this.mediaRecorder.stop();
  }
  // Cancelar grabación
  cancel() {
    this.cancelled = true;
    clearInterval(this.tickInterval);
    clearTimeout(this.autoStopTimeout);
    if (this.mediaRecorder && this.mediaRecorder.state !== "inactive") {
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
      try {
        this.audioCtx.close();
      } catch (_) {
      }
      this.audioCtx = null;
    }
    this.analyser = null;
    this.mediaRecorder = null;
  }
};
function formatDuration(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}
function isAudioRecordingSupported() {
  return !!(navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === "function" && typeof MediaRecorder !== "undefined");
}
function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
async function base64ToBlob(base64Data) {
  const response = await fetch(base64Data);
  return await response.blob();
}

// src/chat-bubble.js
var ICONS = {
  chat: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z"/>
    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z"/>
  </svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/>
  </svg>`,
  reply: "",
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
  </svg>`
};
var DEFAULT_CONFIG = {
  webhook: {
    url: ""
  },
  bot: {
    name: "Ali",
    subtitle: "Tu asistente de IA de Aliaddo",
    avatar: "../public/img/ali-profile-image.png",
    avatarVideo: null,
    welcomeMessage: "Hola, soy Ali \u{1F44B}. Tu asistente virtual de Aliaddo \xBFComo puedo ayudarte?",
    offlineMessage: "En este momento no estoy disponible. Int\xE9ntalo m\xE1s tarde.",
    typingText: "Escribiendo..."
  },
  style: {
    primaryColor: "#572b86",
    textColor: "#ffffff",
    position: "right",
    borderRadius: "12px",
    fontFamily: "inherit",
    theme: "auto"
  },
  behavior: {
    openOnLoad: false,
    showTimestamps: true,
    enableSoundNotification: false,
    maxMessageLength: 1e3,
    requestTimeout: 6e4,
    maxImageSizeMB: 5
  }
};
var ChatBubble = class {
  constructor(config) {
    this.config = this._mergeConfig(DEFAULT_CONFIG, config || {});
    this.isOpen = false;
    this.isLoading = false;
    this.hasNewMessage = false;
    this.sessionId = getOrCreateSessionId();
    this.messageCount = 0;
    this.chatHistory = [];
    this.replyingTo = null;
    this.pendingImage = null;
    this._attachmentPreviewUrl = null;
    this.audioRecorder = null;
    this.isRecording = false;
    this._audioSupported = isAudioRecordingSupported();
    this._activeAudio = null;
    if (!this.config.webhook.url) {
      console.warn(
        "[ChatBubble] \u26A0\uFE0F No se configur\xF3 una URL de webhook. Agrega window.ChatBubbleConfig.webhook.url antes de cargar el script."
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
  _injectStyles() {
  }
  async _loadHistory() {
    this._insertAgentIntro();
    const oldHistory = [...this.chatHistory];
    for (const msg of oldHistory) {
      const dateObj = msg.date ? new Date(msg.date) : /* @__PURE__ */ new Date();
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
              false
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
        this._addBotMessage(msg.text, dateObj, false, false);
      }
    }
    this._scrollToBottom();
  }
  _buildDOM() {
    this.host = document.createElement("div");
    this.host.id = "chat-bubble-host";
    document.body.appendChild(this.host);
    this.shadowRoot = this.host.attachShadow({ mode: "open" });
    const styleEl = document.createElement("style");
    styleEl.textContent = chat_bubble_default;
    this.shadowRoot.appendChild(styleEl);
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
    this.window = document.createElement("div");
    this.window.id = "chat-bubble-window";
    this.window.setAttribute("role", "application");
    this.window.setAttribute("aria-label", `Chat con ${this.config.bot.name}`);
    this.window.setAttribute("aria-hidden", "true");
    this.window.innerHTML = `
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
            ${ICONS.close}
          </button>
        </div>
        <div class="cb-history-list" id="cb-history-list"></div>
        <div class="cb-history-panel-footer cb-is-hidden" id="cb-history-panel-footer">
          <button class="cb-history-clear-btn" id="cb-history-clear-btn" aria-label="Borrar todas las conversaciones">
            ${ICONS.trash} Borrar todo
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
          ${ICONS.close}
        </button>
      </div>

      <div class="cb-attachment-preview" id="cb-attachment-preview" aria-hidden="true">
        <div class="cb-attachment-thumb" id="cb-attachment-thumb" role="button" tabindex="0" aria-label="Ver imagen ampliada" title="Ver imagen ampliada"></div>
        <div class="cb-attachment-info">
          <span class="cb-attachment-name" id="cb-attachment-name"></span>
          <span class="cb-attachment-hint">Imagen adjunta</span>
        </div>
        <button class="cb-attachment-remove" id="cb-attachment-remove" aria-label="Quitar imagen adjunta" title="Quitar imagen">
          ${ICONS.close}
        </button>
      </div>

      <div class="cb-input-area">
        <button id="cb-scroll-bottom-btn" class="cb-scroll-bottom-btn" aria-label="Desplazarse hacia abajo">
          ${ICONS.chevronDown}
        </button>
        <button id="cb-attach-btn" class="cb-attach-btn" aria-label="Adjuntar imagen" title="Adjuntar imagen">
          ${ICONS.attach}
        </button>
        <input type="file" id="cb-file-input" class="cb-file-input-hidden" accept="image/png,image/jpeg,image/webp,image/bmp,image/heic,image/heif" tabindex="-1" aria-hidden="true" />
        <textarea
          id="cb-input"
          placeholder="Preguntarle a Ali..."
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
    `;
    const lightboxDialog = document.createElement("dialog");
    lightboxDialog.className = "cb-lightbox-dialog";
    lightboxDialog.setAttribute("aria-label", "Vista ampliada de imagen");
    lightboxDialog.innerHTML = `
      <button class="cb-lightbox-close-btn" aria-label="Cerrar imagen" title="Cerrar">
        ${ICONS.lightboxClose}
      </button>
      <img src="" alt="" class="cb-lightbox-image" />
    `;
    this.shadowRoot.appendChild(this.launcher);
    this.shadowRoot.appendChild(this.window);
    this.shadowRoot.appendChild(lightboxDialog);
    const launcherContainer = this.launcher.querySelector(
      "#cb-launcher-icon-container"
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
    this.launcherBtn = this.shadowRoot.getElementById("cb-launcher-btn");
    this.notificationBadge = this.shadowRoot.getElementById(
      "cb-notification-badge"
    );
    this.messagesContainer = this.shadowRoot.getElementById(
      "cb-messages-container"
    );
    this.typingIndicator = this.shadowRoot.getElementById("cb-typing");
    this.emptyState = this.shadowRoot.getElementById("cb-empty-state");
    this.input = this.shadowRoot.getElementById("cb-input");
    this.sendBtn = this.shadowRoot.getElementById("cb-send-btn");
    this.toggleSizeBtn = this.shadowRoot.getElementById("cb-toggle-size-btn");
    this.resizeHandle = this.shadowRoot.getElementById("cb-resize-handle");
    this.dropzoneOverlay = this.shadowRoot.getElementById(
      "cb-dropzone-overlay"
    );
    this.scrollBottomBtn = this.shadowRoot.getElementById(
      "cb-scroll-bottom-btn"
    );
    this.toastContainer = this.shadowRoot.getElementById("cb-toast-container");
    this.attachBtn = this.shadowRoot.getElementById("cb-attach-btn");
    this.fileInput = this.shadowRoot.getElementById("cb-file-input");
    this.attachmentPreview = this.shadowRoot.getElementById(
      "cb-attachment-preview"
    );
    this.attachmentThumb = this.shadowRoot.getElementById(
      "cb-attachment-thumb"
    );
    this.attachmentName = this.shadowRoot.getElementById("cb-attachment-name");
    this.attachmentRemoveBtn = this.shadowRoot.getElementById(
      "cb-attachment-remove"
    );
    this.replyPreview = this.shadowRoot.getElementById("cb-reply-preview");
    this.replyText = this.shadowRoot.getElementById("cb-reply-text");
    this.replyCancelBtn = this.shadowRoot.getElementById("cb-reply-cancel");
    this.micBtn = this.shadowRoot.getElementById("cb-mic-btn");
    this.actionsBtn = this.shadowRoot.getElementById("cb-actions-btn");
    this.actionsMenu = this.shadowRoot.getElementById("cb-actions-menu");
    this.historyBtn = this.shadowRoot.getElementById("cb-history-btn");
    this.historyPanel = this.shadowRoot.getElementById("cb-history-panel");
    this.historyList = this.shadowRoot.getElementById("cb-history-list");
    this.historyTitle = this.shadowRoot.getElementById(
      "cb-history-panel-title"
    );
    this.historyFooter = this.shadowRoot.getElementById(
      "cb-history-panel-footer"
    );
    this.historyClearBtn = this.shadowRoot.getElementById(
      "cb-history-clear-btn"
    );
    this.clearAllOverlay = this.shadowRoot.getElementById(
      "cb-clear-all-overlay"
    );
    this.clearAllDialog = this.shadowRoot.getElementById("cb-clear-all-dialog");
    this.clearAllCancelBtn = this.shadowRoot.getElementById(
      "cb-clear-all-cancel-btn"
    );
    this.clearAllConfirmBtn = this.shadowRoot.getElementById(
      "cb-clear-all-confirm-btn"
    );
    if (this.historyClearBtn) {
      this.historyClearBtn.addEventListener(
        "click",
        () => this._openClearAllModal()
      );
    }
    if (this.clearAllOverlay) {
      this.clearAllOverlay.addEventListener("click", (e) => {
        if (e.target === this.clearAllOverlay)
          this._closeClearAllModal();
      });
    }
    if (this.clearAllCancelBtn) {
      this.clearAllCancelBtn.addEventListener(
        "click",
        () => this._closeClearAllModal()
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
    this.lightboxDialog.addEventListener("cancel", (e) => {
      e.preventDefault();
      this._closeLightbox();
    });
    this.shadowRoot.addEventListener("click", (e) => {
      const target = e.target;
      if (target.tagName === "IMG" && (target.classList.contains("cb-image") || target.classList.contains("cb-image-message-img"))) {
        if (target.closest("a"))
          return;
        this._openLightbox(target.src, target.alt);
        e.preventDefault();
        return;
      }
      if (target.closest(".cb-attachment-thumb") && this._attachmentPreviewUrl) {
        this._openLightbox(
          this._attachmentPreviewUrl,
          "Vista previa de la imagen adjunta"
        );
        return;
      }
      if (this.lightboxDialog.open) {
        if (target.closest(".cb-lightbox-close-btn")) {
          this._closeLightbox();
          return;
        }
        if (target === this.lightboxDialog) {
          this._closeLightbox();
          return;
        }
      }
    });
    this.shadowRoot.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ")
        return;
      if (e.target.closest(".cb-attachment-thumb") && this._attachmentPreviewUrl) {
        e.preventDefault();
        this._openLightbox(
          this._attachmentPreviewUrl,
          "Vista previa de la imagen adjunta"
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
    if (!this.lightboxDialog.open || this.lightboxDialog.classList.contains("is-closing"))
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
    if (style.primaryColor && style.primaryColor !== DEFAULT_CONFIG.style.primaryColor) {
      this.host.style.setProperty("--cb-primary", style.primaryColor);
      this.host.style.setProperty("--cb-user-bubble", style.primaryColor);
      this.host.style.setProperty(
        "--cb-primary-hover",
        this._darkenColor(style.primaryColor, 15)
      );
    }
    if (style.textColor && style.textColor !== DEFAULT_CONFIG.style.textColor) {
      this.host.style.setProperty("--cb-primary-text", style.textColor);
      this.host.style.setProperty("--cb-user-text", style.textColor);
    }
    if (style.borderRadius && style.borderRadius !== DEFAULT_CONFIG.style.borderRadius) {
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
    this.sendBtn.addEventListener("click", () => this._handleSend());
    if (this.actionsBtn) {
      this.actionsBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this._toggleActionsMenu();
      });
    }
    this.shadowRoot.addEventListener("click", (e) => {
      if (this.actionsMenu && !this.actionsMenu.classList.contains("cb-is-hidden")) {
        const dropdown = this.shadowRoot.getElementById("cb-actions-dropdown");
        if (dropdown && !dropdown.contains(e.target)) {
          this._closeActionsMenu();
        }
      }
    });
    if (this.historyBtn) {
      this.historyBtn.addEventListener("click", () => {
        this._closeActionsMenu();
        this._toggleHistoryPanel();
      });
    }
    const closeHistoryBtn = this.shadowRoot.getElementById(
      "cb-history-panel-close"
    );
    if (closeHistoryBtn) {
      closeHistoryBtn.addEventListener(
        "click",
        () => this._closeHistoryPanel()
      );
    }
    const newSessionBtn = this.shadowRoot.getElementById("cb-new-session-btn");
    if (newSessionBtn) {
      newSessionBtn.addEventListener("click", () => {
        this._closeActionsMenu();
        this._startNewChat();
      });
    }
    const closeWindowBtn = this.shadowRoot.getElementById(
      "cb-close-window-btn"
    );
    if (closeWindowBtn) {
      closeWindowBtn.addEventListener("click", () => this._closeChat());
    }
    if (this._audioSupported && this.micBtn) {
      this.micBtn.addEventListener("click", () => this._handleMicClick());
    } else if (this.micBtn) {
      this.micBtn.style.display = "none";
    }
    this.toggleSizeBtn.addEventListener("click", () => this._toggleWideMode());
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
    this.input.addEventListener("paste", (e) => this._handlePaste(e));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (this.clearAllOverlay && this.clearAllOverlay.classList.contains("cb-is-active")) {
          this._closeClearAllModal();
          e.stopPropagation();
        } else if (this.historyPanel && this.historyPanel.classList.contains("cb-is-active")) {
          this._closeHistoryPanel();
          e.stopPropagation();
        } else if (this.isOpen) {
          this._closeChat();
        }
      }
    });
    this.messagesContainer.addEventListener(
      "scroll",
      () => this._handleScroll()
    );
    this.scrollBottomBtn.addEventListener("click", () => {
      this.messagesContainer.scrollTo({
        top: this.messagesContainer.scrollHeight,
        behavior: "smooth"
      });
    });
    if (this.attachBtn) {
      this.attachBtn.addEventListener("click", () => {
        if (this.isLoading || this.isRecording)
          return;
        this.fileInput.click();
      });
    }
    if (this.fileInput) {
      this.fileInput.addEventListener(
        "change",
        (e) => this._handleFileSelected(e)
      );
    }
    if (this.attachmentRemoveBtn) {
      this.attachmentRemoveBtn.addEventListener("click", () => {
        this._clearPendingImage();
        this._updateSendButtonState();
        this.input.focus();
      });
    }
  }
  _initDraggable() {
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
      if (!this.isDragging)
        return;
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
      const margin = 24;
      const maxHeight = this.dragStartBottom - margin;
      nextHeight = Math.max(minHeight, Math.min(maxHeight, nextHeight));
      this.window.style.setProperty("--cb-window-height", `${nextHeight}px`);
    };
    const onPointerUpDrag = (e) => {
      if (!this.isDragging)
        return;
      this.isDragging = false;
      this.window.classList.remove("cb-is-dragging");
      this.launcher.classList.remove("cb-is-dragging");
      document.removeEventListener("pointermove", onPointerMoveDrag);
      document.removeEventListener("pointerup", onPointerUpDrag);
      document.removeEventListener("pointercancel", onPointerUpDrag);
    };
    this.header.addEventListener("pointerdown", (e) => {
      if (e.target.closest(".cb-toggle-size-btn") || e.target.closest("#cb-resize-handle") || e.target.closest(".cb-toast-container") || window.innerWidth <= 480) {
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
      if (!this.isResizing)
        return;
      const deltaY = e.clientY - this.dragStartY;
      let nextHeight = this.dragStartHeight - deltaY;
      const minHeight = 350;
      const margin = 24;
      const maxHeight = this.dragStartBottom - margin;
      nextHeight = Math.max(minHeight, Math.min(maxHeight, nextHeight));
      this.window.style.setProperty("--cb-window-height", `${nextHeight}px`);
    };
    const onPointerUpResize = (e) => {
      if (!this.isResizing)
        return;
      this.isResizing = false;
      this.window.classList.remove("cb-is-dragging");
      document.removeEventListener("pointermove", onPointerMoveResize);
      document.removeEventListener("pointerup", onPointerUpResize);
      document.removeEventListener("pointercancel", onPointerUpResize);
    };
    this.resizeHandle.addEventListener("pointerdown", (e) => {
      if (window.innerWidth <= 480)
        return;
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
      svg.innerHTML = '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="10" y1="14" x2="3" y2="21"></line><line x1="21" y1="3" x2="14" y2="10"></line>';
    } else {
      this.window.style.removeProperty("--cb-window-width");
      this.window.style.removeProperty("--cb-window-height");
      this.window.classList.remove("cb-is-wide");
      btn.setAttribute("aria-label", "Ampliar ventana");
      btn.setAttribute("title", "Ampliar ventana");
      svg.innerHTML = '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>';
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
    if (this.avatarVideo && this._avatarVideoVisible) {
      this.avatarVideo.play().catch(() => {
      });
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
    this.avatarVideo?.pause();
  }
  // Administrar ciclo de vida de la sesión
  _startNewChat() {
    if (this.activeRequest)
      this.activeRequest.abort();
    this.activeRequest = null;
    this._setLoadingState(false);
    this._clearReply();
    this._clearPendingImage();
    if (this.chatHistory && this.chatHistory.length > 0) {
      saveSessionToIndex(
        this.sessionId,
        this._getHistoryTitle(),
        this.chatHistory.length
      );
    }
    this._clearMessages();
    this.sessionId = clearSession();
    this.chatHistory = [];
    this.messageCount = 0;
    this._showWelcomeMessage();
  }
  // Procesar formato de hora y fecha
  _getTimeString(dateObj = /* @__PURE__ */ new Date()) {
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
      const today = /* @__PURE__ */ new Date();
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
  _addBotMessage(text, dateObj = /* @__PURE__ */ new Date(), save = true, isAnimated = true) {
    this._hideThinkingIndicator();
    this._hideEmptyState();
    this._checkDateDivider(dateObj);
    const message = document.createElement("div");
    message.className = "cb-message cb-message--bot";
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
    const col = document.createElement("div");
    col.className = "cb-msg-col";
    const bubbleRow = document.createElement("div");
    bubbleRow.className = "cb-msg-bubble-row";
    const content = document.createElement("div");
    content.className = "cb-message-content";
    bubbleRow.appendChild(content);
    col.appendChild(bubbleRow);
    if (this.config.behavior.showTimestamps) {
      const time = document.createElement("span");
      time.className = "cb-message-time";
      time.textContent = this._getTimeString(dateObj);
      col.appendChild(time);
    }
    message.appendChild(avatarEl);
    message.appendChild(col);
    const replyBtn = document.createElement("button");
    replyBtn.className = "cb-message-reply-btn";
    replyBtn.setAttribute("aria-label", "Responder a este mensaje");
    replyBtn.setAttribute("title", "Responder");
    replyBtn.innerHTML = ICONS.reply;
    replyBtn.addEventListener("click", () => {
      const plainText = content.textContent || content.innerText || "";
      this._setReply(plainText.trim());
    });
    bubbleRow.appendChild(replyBtn);
    this.messagesContainer.insertBefore(message, this.typingIndicator);
    this.messageCount++;
    this._scrollToBottom();
    if (save) {
      this.chatHistory.push({
        role: "bot",
        text,
        date: dateObj.toISOString()
      });
      saveChatHistory(this.chatHistory, this.sessionId);
      saveSessionToIndex(
        this.sessionId,
        this._getHistoryTitle(),
        this.chatHistory.length
      );
    }
    const htmlString = parseMarkdown(text);
    if (!htmlString || htmlString.trim() === "" || !isAnimated) {
      content.innerHTML = htmlString || text;
      if (!isAnimated) {
        return message;
      }
      const finish2 = () => {
        if (isFinished2)
          return;
        isFinished2 = true;
        this.activeTyping = null;
        this._scrollToBottom();
      };
      let isFinished2 = false;
      this.activeTyping = { complete: finish2 };
      finish2();
      return message;
    }
    const temp = document.createElement("div");
    temp.innerHTML = htmlString;
    const listItems = temp.querySelectorAll("li");
    listItems.forEach((li) => {
      li.classList.add("cb-li-hidden");
    });
    const textNodes = [];
    function collectTextNodes(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        textNodes.push({
          node,
          fullText: node.nodeValue
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
    const msPerChar = Math.max(3, Math.min(15, 1e3 / (totalLength * 0.25)));
    const charsPerTick = totalLength > 150 ? Math.ceil(totalLength / 150) : 1;
    const streamText = () => {
      if (isFinished)
        return;
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
      if (cursor.parentNode !== active.node.parentNode || cursor.previousSibling !== active.node) {
        active.node.parentNode.insertBefore(cursor, active.node.nextSibling);
      }
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
      this._scrollToBottom();
      this.activeTypingTimeout = setTimeout(streamText, msPerChar);
    };
    const finish = () => {
      if (isFinished)
        return;
      isFinished = true;
      clearTimeout(this.activeTypingTimeout);
      const hiddenItems = content.querySelectorAll(".cb-li-hidden");
      hiddenItems.forEach((li) => li.classList.remove("cb-li-hidden"));
      textNodes.forEach((item) => {
        item.node.nodeValue = item.fullText;
      });
      cursor.remove();
      this.activeTyping = null;
      this._scrollToBottom();
    };
    this.activeTyping = {
      complete: finish
    };
    streamText();
    return message;
  }
  // Insertar mensaje del usuario en el chat
  _addUserMessage(text, dateObj = /* @__PURE__ */ new Date(), save = true) {
    if (this.activeTyping) {
      this.activeTyping.complete();
    }
    this._hideEmptyState();
    this._checkDateDivider(dateObj);
    const message = document.createElement("div");
    message.className = "cb-message cb-message--user";
    const content = document.createElement("div");
    content.className = "cb-message-content";
    if (this.replyingTo) {
      const quote = document.createElement("div");
      quote.className = "cb-message-quote";
      const quoteBar = document.createElement("div");
      quoteBar.className = "cb-message-quote-bar";
      const quoteText = document.createElement("span");
      quoteText.className = "cb-message-quote-text";
      const maxLen = 80;
      const originalReply = this.replyingTo;
      quoteText.textContent = this.replyingTo.length > maxLen ? this.replyingTo.substring(0, maxLen) + "..." : this.replyingTo;
      quote.appendChild(quoteBar);
      quote.appendChild(quoteText);
      content.appendChild(quote);
      this._clearReply();
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
        text,
        date: dateObj.toISOString(),
        replyingTo: this.replyingTo,
        isAudio: false
      });
      saveChatHistory(this.chatHistory, this.sessionId);
      saveSessionToIndex(
        this.sessionId,
        this._getHistoryTitle(),
        this.chatHistory.length
      );
    }
    if (this.replyingTo) {
      this.replyingTo = null;
    }
    this._scrollToBottom();
  }
  // Activar modo de respuesta con cita
  _setReply(text) {
    if (!text)
      return;
    this.replyingTo = text;
    const maxPreviewLength = 80;
    const preview = text.length > maxPreviewLength ? text.substring(0, maxPreviewLength) + "..." : text;
    this.replyText.textContent = preview;
    this.replyPreview.classList.add("cb-visible");
    this.replyPreview.setAttribute("aria-hidden", "false");
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
    this._insertAgentIntro();
    if (this.config.bot.welcomeMessage) {
      setTimeout(() => {
        this._addBotMessage(this.config.bot.welcomeMessage);
      }, 400);
    }
  }
  // Configurar el video en bucle que reemplaza la foto de perfil al hacer hover
  _setupAvatarVideo(avatarWrap, videoSrc) {
    const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion)
      return;
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
    video.addEventListener("ended", () => {
      video.currentTime = 0;
      video.play().catch(() => {
      });
    });
    video.addEventListener(
      "canplay",
      () => {
        avatarWrap.classList.add("cb-is-playing");
        video.playbackRate = SPEED;
        video.play().catch(() => {
        });
      },
      { once: true }
    );
    this._avatarVideoObserver?.disconnect();
    this._avatarVideoObserver = new IntersectionObserver(
      ([entry]) => {
        this._avatarVideoVisible = entry.isIntersecting;
        if (entry.isIntersecting && this.isOpen) {
          video.play().catch(() => {
          });
        } else {
          video.pause();
        }
      },
      { root: this.messagesContainer, threshold: 0 }
    );
    this._avatarVideoObserver.observe(video);
    this.avatarVideo = video;
  }
  // Construir cabecera de presentación
  _insertAgentIntro() {
    const existing = this.messagesContainer.querySelector(".cb-agent-intro");
    if (existing)
      existing.remove();
    const intro = document.createElement("div");
    intro.className = "cb-agent-intro";
    const avatarWrap = document.createElement("div");
    avatarWrap.className = "cb-agent-intro-avatar";
    if (this.config.bot.avatar) {
      const img = document.createElement("img");
      img.src = this._escapeAttr(this.config.bot.avatar);
      img.alt = this._escapeAttr(this.config.bot.name);
      avatarWrap.appendChild(img);
      if (this.config.bot.avatarVideo) {
        this._setupAvatarVideo(avatarWrap, this.config.bot.avatarVideo);
      }
    } else {
      avatarWrap.innerHTML = ICONS.bot;
    }
    const name = document.createElement("p");
    name.className = "cb-agent-intro-name";
    name.textContent = this.config.bot.name;
    const subtitle = document.createElement("p");
    subtitle.className = "cb-agent-intro-subtitle";
    subtitle.textContent = this.config.bot.subtitle || "";
    intro.appendChild(avatarWrap);
    intro.appendChild(name);
    if (this.config.bot.subtitle)
      intro.appendChild(subtitle);
    this.messagesContainer.insertBefore(
      intro,
      this.messagesContainer.firstChild
    );
  }
  // Eliminar historial de mensajes del DOM
  _clearMessages() {
    if (this.activeTyping) {
      this.activeTyping.complete();
      this.activeTyping = null;
    }
    const messages = this.messagesContainer.querySelectorAll(
      ".cb-message:not(#cb-typing), .cb-date-divider, .cb-agent-intro"
    );
    messages.forEach((el) => el.remove());
    this.lastMessageDateString = null;
  }
  // Mostrar animación de escritura
  _showTypingIndicator() {
    this.typingIndicator.classList.add("cb-visible");
    const indicator = this.typingIndicator.querySelector(
      ".cb-typing-indicator"
    );
    if (indicator) {
      indicator.classList.remove("cb-thinking");
      indicator.innerHTML = `
        <span></span><span></span><span></span>
      `;
    }
    this._scrollToBottom();
  }
  _hideTypingIndicator() {
    this.typingIndicator.classList.remove("cb-visible");
  }
  _showThinkingIndicator(message) {
    this._hideTypingIndicator();
    const typingEl = this.typingIndicator;
    typingEl.classList.add("cb-visible");
    const indicator = typingEl.querySelector(".cb-typing-indicator");
    if (indicator) {
      indicator.classList.add("cb-thinking");
      indicator.innerHTML = `<span class="cb-thinking-text">${message}</span>`;
    }
    this._scrollToBottom();
  }
  _hideThinkingIndicator() {
    if (this.thinkingTimeout) {
      clearTimeout(this.thinkingTimeout);
      this.thinkingTimeout = null;
    }
    this.typingIndicator.classList.remove("cb-visible");
    const indicator = this.typingIndicator.querySelector(
      ".cb-typing-indicator"
    );
    if (indicator) {
      indicator.classList.remove("cb-thinking");
      indicator.innerHTML = `
        <span></span><span></span><span></span>
      `;
    }
  }
  _hideEmptyState() {
  }
  _showEmptyState() {
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
    if (!this.toastContainer)
      return;
    const TOAST_DURATION_MS = 5e3;
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
    closeBtn.setAttribute("aria-label", "Cerrar notificaci\xF3n");
    closeBtn.innerHTML = ICONS.close;
    toast.appendChild(icon);
    toast.appendChild(text);
    toast.appendChild(closeBtn);
    this.toastContainer.appendChild(toast);
    let dismissTimer;
    const dismiss = () => {
      if (toast.dataset.dismissed)
        return;
      toast.dataset.dismissed = "true";
      clearTimeout(dismissTimer);
      toast.classList.remove("cb-toast--visible");
      setTimeout(() => toast.remove(), TOAST_EXIT_MS);
    };
    closeBtn.addEventListener("click", dismiss);
    dismissTimer = setTimeout(dismiss, TOAST_DURATION_MS);
    requestAnimationFrame(() => toast.classList.add("cb-toast--visible"));
  }
  // Manejar envío de mensajes de texto
  async _handleSend() {
    const text = this.input.value.trim();
    const image = this.pendingImage;
    if (!text && !image || this.isLoading)
      return;
    if (text.length > this.config.behavior.maxMessageLength) {
      this._showErrorToast(
        `El mensaje es demasiado largo. Por favor, usa menos de ${this.config.behavior.maxMessageLength} caracteres.`
      );
      return;
    }
    if (!this.config.webhook.url) {
      this._showErrorToast(
        "El widget no est\xE1 configurado correctamente. Falta la URL del webhook de n8n."
      );
      return;
    }
    this.input.value = "";
    this._autoResizeTextarea();
    this._updateSendButtonState();
    if (image) {
      this._clearPendingImage();
      this._updateSendButtonState();
      this._addUserImageMessage(image, text);
      this._sendImageToWebhook(image, text);
      return;
    }
    this._setLoadingState(true);
    this._addUserMessage(text);
    this._showTypingIndicator();
    const THINKING_DELAY_MS = 3e3;
    const thinkingTimer = setTimeout(() => {
      if (this.isLoading) {
        this._showThinkingIndicator("Pensando...");
      }
    }, THINKING_DELAY_MS);
    if (this.activeRequest)
      this.activeRequest.abort();
    this.activeRequest = new AbortController();
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
          if (intermediate && (intermediate.tool || intermediate.event)) {
            clearTimeout(thinkingTimer);
            this._showThinkingIndicator("Pensando...");
          }
        }
      );
      clearTimeout(thinkingTimer);
      this._hideTypingIndicator();
      this._hideThinkingIndicator();
      if (response && response.output) {
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
          "Ocurri\xF3 un error al procesar tu mensaje. La respuesta del servidor no tiene el formato esperado."
        );
      }
    } catch (error) {
      clearTimeout(thinkingTimer);
      if (error.name === "AbortError")
        return;
      this._hideTypingIndicator();
      this._hideThinkingIndicator();
      this._showErrorToast(error.message || this.config.bot.offlineMessage);
    } finally {
      this._setLoadingState(false);
      if (this.isOpen)
        this.input.focus();
    }
  }
  // Actualizar estado general de la interfaz
  _setLoadingState(loading) {
    this.isLoading = loading;
    this.input.disabled = loading;
    this.sendBtn.disabled = loading;
    if (this.attachBtn)
      this.attachBtn.disabled = loading;
    if (loading) {
      this.sendBtn.setAttribute("aria-busy", "true");
    } else {
      this.sendBtn.removeAttribute("aria-busy");
    }
  }
  // Ajustar altura de la caja de texto automáticamente
  _autoResizeTextarea() {
    this.input.style.height = "auto";
    const maxHeight = 100;
    const scrollHeight = this.input.scrollHeight;
    this.input.style.height = `${Math.min(scrollHeight, maxHeight)}px`;
  }
  // Alternar visibilidad entre botón de envío y micrófono
  _updateSendButtonState() {
    const hasText = this.input.value.trim().length > 0;
    const hasImage = !!this.pendingImage;
    if (hasText || hasImage) {
      this.sendBtn.classList.add("cb-visible");
      if (this.micBtn)
        this.micBtn.classList.remove("cb-visible");
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
  // Mostrar u ocultar botón de desplazamiento rápido
  _handleScroll() {
    const container = this.messagesContainer;
    const threshold = 150;
    const isScrolledUp = container.scrollHeight - container.clientHeight - container.scrollTop > threshold;
    const hasScrollbar = container.scrollHeight > container.clientHeight;
    const isHistoryActive = this.historyPanel && this.historyPanel.classList.contains("cb-is-active");
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
    const newCursorPos = start + text.length;
    input.selectionStart = input.selectionEnd = newCursorPos;
    input.focus();
    this._autoResizeTextarea();
    this._updateSendButtonState();
  }
  // Funciones de utilidad internas
  // Combinar objetos de configuración de forma recursiva
  _mergeConfig(defaults, overrides) {
    const result = { ...defaults };
    for (const key in overrides) {
      if (overrides[key] !== null && typeof overrides[key] === "object" && !Array.isArray(overrides[key]) && typeof defaults[key] === "object") {
        result[key] = this._mergeConfig(defaults[key], overrides[key]);
      } else if (overrides[key] !== void 0 && overrides[key] !== null) {
        result[key] = overrides[key];
      }
    }
    return result;
  }
  // Reemplazar caracteres especiales HTML
  _escapeAttr(str) {
    return String(str || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  _darkenColor(hex, percent) {
    if (!hex || !hex.startsWith("#"))
      return hex;
    try {
      const num = parseInt(hex.replace("#", ""), 16);
      const r = Math.max(0, (num >> 16) - Math.round(255 * percent / 100));
      const g = Math.max(
        0,
        (num >> 8 & 255) - Math.round(255 * percent / 100)
      );
      const b = Math.max(0, (num & 255) - Math.round(255 * percent / 100));
      return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, "0")}`;
    } catch (e) {
      return hex;
    }
  }
  // Gestionar funciones de grabación de voz
  // Alternar estado de grabación activa
  _handleMicClick() {
    if (this.isRecording) {
      this._stopRecording();
    } else {
      this._startRecording();
    }
  }
  // Inicializar proceso y componentes de grabación
  async _startRecording() {
    if (this.isLoading)
      return;
    this.audioRecorder = new AudioRecorder();
    this._showRecordingUI();
    this.audioRecorder.onLevelChange = (level) => {
      if (this._recordingBars) {
        this._recordingBars.forEach((bar, i) => {
          const height = Math.max(
            4,
            Math.round(level * 20 + Math.random() * 8)
          );
          bar.style.height = `${height}px`;
        });
      }
    };
    this.audioRecorder.onTick = (seconds) => {
      if (this._recordingTimer) {
        this._recordingTimer.textContent = formatDuration(seconds);
      }
    };
    this.audioRecorder.onComplete = (blob, duration) => {
      this._hideRecordingUI();
      this._addUserAudioMessage(blob, duration);
      this._sendAudioToWebhook(blob, duration, this.audioRecorder.mimeType);
    };
    this.audioRecorder.onError = (msg) => {
      this._hideRecordingUI();
      this._showErrorToast(msg);
    };
    await this.audioRecorder.start();
    if (!this.audioRecorder.mediaRecorder)
      return;
    this.isRecording = true;
    if (this.micBtn)
      this.micBtn.classList.remove("cb-visible");
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
  _showRecordingUI() {
    this.input.style.visibility = "hidden";
    if (this.micBtn)
      this.micBtn.style.visibility = "hidden";
    if (this.attachBtn)
      this.attachBtn.disabled = true;
    if (!this._recordingOverlay) {
      const overlay = document.createElement("div");
      overlay.className = "cb-recording-ui";
      overlay.id = "cb-recording-ui";
      const dot = document.createElement("span");
      dot.className = "cb-recording-dot";
      const timer = document.createElement("span");
      timer.className = "cb-recording-timer";
      timer.textContent = "00:00";
      this._recordingTimer = timer;
      const wave = document.createElement("div");
      wave.className = "cb-recording-wave";
      this._recordingBars = [];
      for (let i = 0; i < 10; i++) {
        const bar = document.createElement("span");
        bar.className = "cb-recording-bar";
        wave.appendChild(bar);
        this._recordingBars.push(bar);
      }
      const cancelBtn = document.createElement("button");
      cancelBtn.className = "cb-recording-cancel";
      cancelBtn.setAttribute("aria-label", "Cancelar grabaci\xF3n");
      cancelBtn.title = "Cancelar";
      cancelBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>`;
      cancelBtn.addEventListener("click", () => this._cancelRecording());
      const sendBtn = document.createElement("button");
      sendBtn.className = "cb-recording-send";
      sendBtn.setAttribute("aria-label", "Enviar audio");
      sendBtn.title = "Enviar audio";
      sendBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405Z"/></svg>`;
      sendBtn.addEventListener("click", () => this._stopRecording());
      overlay.appendChild(dot);
      overlay.appendChild(timer);
      overlay.appendChild(wave);
      overlay.appendChild(cancelBtn);
      overlay.appendChild(sendBtn);
      const inputArea = this.input.closest(".cb-input-area") || this.input.parentElement;
      inputArea.appendChild(overlay);
      this._recordingOverlay = overlay;
      requestAnimationFrame(() => overlay.classList.add("cb-visible"));
    }
  }
  // Destruir controles de grabación y restaurar interfaz
  _hideRecordingUI() {
    this.isRecording = false;
    this.input.style.visibility = "";
    if (this.micBtn)
      this.micBtn.style.visibility = "";
    if (this.attachBtn)
      this.attachBtn.disabled = false;
    if (this._recordingOverlay) {
      this._recordingOverlay.remove();
      this._recordingOverlay = null;
      this._recordingTimer = null;
      this._recordingBars = null;
    }
  }
  // Insertar reproductor de mensaje de voz propio en el chat
  async _addUserAudioMessage(blob, duration, dateObj = /* @__PURE__ */ new Date(), save = true) {
    this._hideEmptyState();
    this._checkDateDivider(dateObj);
    const message = document.createElement("div");
    message.className = "cb-message cb-message--user";
    const content = document.createElement("div");
    content.className = "cb-message-content cb-audio-player";
    const audioUrl = URL.createObjectURL(blob);
    const audio = new Audio(audioUrl);
    const playBtn = document.createElement("button");
    playBtn.className = "cb-audio-play-btn";
    playBtn.setAttribute("aria-label", "Reproducir audio");
    playBtn.innerHTML = ICONS.audioPlay;
    const progressWrapper = document.createElement("div");
    progressWrapper.className = "cb-audio-progress-wrapper";
    const progressBar = document.createElement("div");
    progressBar.className = "cb-audio-progress-bar";
    progressWrapper.appendChild(progressBar);
    const durationEl = document.createElement("span");
    durationEl.className = "cb-audio-duration";
    durationEl.textContent = formatDuration(duration);
    let isPlaying = false;
    playBtn.addEventListener("click", () => {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(() => {
        });
      }
    });
    audio.addEventListener("play", () => {
      if (this._activeAudio && this._activeAudio !== audio) {
        this._activeAudio.pause();
      }
      this._activeAudio = audio;
      isPlaying = true;
      playBtn.innerHTML = ICONS.audioPause;
      playBtn.setAttribute("aria-label", "Pausar audio");
    });
    audio.addEventListener("pause", () => {
      if (this._activeAudio === audio)
        this._activeAudio = null;
      isPlaying = false;
      playBtn.innerHTML = ICONS.audioPlay;
      playBtn.setAttribute("aria-label", "Reproducir audio");
    });
    audio.addEventListener("ended", () => {
      if (this._activeAudio === audio)
        this._activeAudio = null;
      isPlaying = false;
      playBtn.innerHTML = ICONS.audioPlay;
      playBtn.setAttribute("aria-label", "Reproducir audio");
      progressBar.style.width = "0%";
      durationEl.textContent = formatDuration(duration);
    });
    audio.addEventListener("timeupdate", () => {
      const total = isFinite(audio.duration) ? audio.duration : duration;
      const pct = total ? audio.currentTime / total * 100 : 0;
      progressBar.style.width = `${pct}%`;
      const remaining = Math.max(0, Math.floor(total - audio.currentTime));
      durationEl.textContent = formatDuration(remaining);
    });
    progressWrapper.addEventListener("click", (e) => {
      if (!audio.duration)
        return;
      const rect = progressWrapper.getBoundingClientRect();
      const pct = (e.clientX - rect.left) / rect.width;
      audio.currentTime = pct * audio.duration;
    });
    content.appendChild(playBtn);
    content.appendChild(progressWrapper);
    content.appendChild(durationEl);
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
          duration,
          date: dateObj.toISOString()
        });
        saveChatHistory(this.chatHistory, this.sessionId);
        saveSessionToIndex(
          this.sessionId,
          this._getHistoryTitle(),
          this.chatHistory.length
        );
      } catch (err) {
        console.error("Error guardando historial de audio", err);
      }
    }
    this._scrollToBottom();
  }
  // Transmitir archivo de audio al servidor
  async _sendAudioToWebhook(blob, duration, mimeType) {
    if (this.activeRequest)
      this.activeRequest.abort();
    this.activeRequest = new AbortController();
    this._showThinkingIndicator("Escuchando...");
    this._setLoadingState(true);
    try {
      const result = await sendAudioMessage(
        this.config.webhook.url,
        blob,
        this.sessionId,
        duration,
        mimeType,
        {},
        this.config.behavior.requestTimeout,
        this.activeRequest.signal
      );
      if (result.sessionId && result.sessionId !== this.sessionId) {
        this.sessionId = result.sessionId;
        setActiveSessionId(this.sessionId);
      }
      if (result.event === "thinking") {
        return;
      }
      this._addBotMessage(result.output || "");
    } catch (error) {
      if (error.name === "AbortError")
        return;
      this._hideThinkingIndicator();
      this._showErrorToast(
        error.message || "Error al procesar el audio. Int\xE9ntalo de nuevo."
      );
    } finally {
      this._setLoadingState(false);
      this._updateSendButtonState();
      this.activeRequest = null;
      if (this.isOpen)
        this.input.focus();
    }
  }
  // Gestionar adjuntos de imagen
  // Validar y guardar la imagen elegida por el usuario
  _handleFileSelected(e) {
    const file = e.target.files && e.target.files[0];
    e.target.value = "";
    if (!file)
      return;
    this._processAttachedImage(file);
  }
  // Capturar imágenes pegadas con Ctrl+V (p. ej. una captura de pantalla)
  _handlePaste(e) {
    if (this.isLoading || this.isRecording)
      return;
    const items = e.clipboardData && e.clipboardData.items;
    if (!items)
      return;
    for (const item of items) {
      if (item.kind === "file" && item.type.startsWith("image/")) {
        const file = item.getAsFile();
        if (file) {
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
    const isFileDrag = (e) => e.dataTransfer && Array.from(e.dataTransfer.types || []).includes("Files");
    this.window.addEventListener("dragenter", (e) => {
      if (!isFileDrag(e) || this.isLoading || this.isRecording)
        return;
      e.preventDefault();
      dragCounter++;
      this.dropzoneOverlay.classList.add("cb-visible");
    });
    this.window.addEventListener("dragover", (e) => {
      if (!isFileDrag(e) || this.isLoading || this.isRecording)
        return;
      e.preventDefault();
      e.dataTransfer.dropEffect = "copy";
    });
    this.window.addEventListener("dragleave", () => {
      dragCounter = Math.max(0, dragCounter - 1);
      if (dragCounter === 0)
        this.dropzoneOverlay.classList.remove("cb-visible");
    });
    this.window.addEventListener("drop", (e) => {
      if (!isFileDrag(e))
        return;
      e.preventDefault();
      dragCounter = 0;
      this.dropzoneOverlay.classList.remove("cb-visible");
      if (this.isLoading || this.isRecording)
        return;
      const files = Array.from(e.dataTransfer.files || []);
      if (!files.length)
        return;
      const file = files.find((f) => f.type.startsWith("image/")) || files[0];
      this._processAttachedImage(file);
    });
  }
  // Validar una imagen (de archivo o portapapeles) y dejarla lista para enviar
  _processAttachedImage(file) {
    const type = (file.type || "").toLowerCase();
    const name = (file.name || "").toLowerCase();
    if (type.startsWith("video/") || /\.(mp4|mov|avi|webm|mkv|3gp)$/.test(name)) {
      this._showErrorToast("No se permiten archivos de video.");
      return;
    }
    if (type === "image/gif" || name.endsWith(".gif")) {
      this._showErrorToast(
        "Los archivos GIF no son compatibles. Usa JPG, PNG o WEBP."
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
        `La imagen supera el tama\xF1o m\xE1ximo permitido (${maxMB}MB).`
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
    this.attachmentPreview.classList.add("cb-visible");
    this.attachmentPreview.setAttribute("aria-hidden", "false");
  }
  // Descartar la imagen adjunta pendiente de envío
  _clearPendingImage() {
    this.pendingImage = null;
    if (this._attachmentPreviewUrl) {
      URL.revokeObjectURL(this._attachmentPreviewUrl);
      this._attachmentPreviewUrl = null;
    }
    if (this.attachmentThumb)
      this.attachmentThumb.style.backgroundImage = "";
    if (this.attachmentName)
      this.attachmentName.textContent = "";
    if (this.attachmentPreview) {
      this.attachmentPreview.classList.remove("cb-visible");
      this.attachmentPreview.setAttribute("aria-hidden", "true");
    }
  }
  // Insertar imagen enviada por el usuario en el chat
  async _addUserImageMessage(fileOrBlob, caption = "", dateObj = /* @__PURE__ */ new Date(), save = true) {
    if (this.activeTyping)
      this.activeTyping.complete();
    this._hideEmptyState();
    this._checkDateDivider(dateObj);
    const message = document.createElement("div");
    message.className = "cb-message cb-message--user";
    const content = document.createElement("div");
    content.className = "cb-message-content cb-image-message";
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
          date: dateObj.toISOString()
        });
        saveChatHistory(this.chatHistory, this.sessionId);
        saveSessionToIndex(
          this.sessionId,
          this._getHistoryTitle(),
          this.chatHistory.length
        );
      } catch (err) {
        console.error("Error guardando historial de imagen", err);
      }
    }
    this._scrollToBottom();
  }
  // Transmitir archivo de imagen al servidor
  async _sendImageToWebhook(file, caption) {
    if (this.activeRequest)
      this.activeRequest.abort();
    this.activeRequest = new AbortController();
    this._showThinkingIndicator("Analizando imagen...");
    this._setLoadingState(true);
    try {
      const result = await sendImageMessage(
        this.config.webhook.url,
        file,
        this.sessionId,
        caption,
        {},
        this.config.behavior.requestTimeout,
        this.activeRequest.signal
      );
      if (result.sessionId && result.sessionId !== this.sessionId) {
        this.sessionId = result.sessionId;
        setActiveSessionId(this.sessionId);
      }
      this._addBotMessage(result.output || "");
    } catch (error) {
      if (error.name === "AbortError")
        return;
      this._hideThinkingIndicator();
      this._showErrorToast(
        error.message || "Error al procesar la imagen. Int\xE9ntalo de nuevo."
      );
    } finally {
      this._setLoadingState(false);
      this.activeRequest = null;
      if (this.isOpen)
        this.input.focus();
    }
  }
  // Obtener título para el índice derivado del primer mensaje de usuario
  _getHistoryTitle() {
    const firstUserMsg = this.chatHistory.find((m) => m.role === "user");
    return firstUserMsg ? firstUserMsg.text : "Conversaci\xF3n 1";
  }
  // Formatear fecha relativa para ítems de historial
  _formatRelativeDate(dateStr) {
    const dateObj = new Date(dateStr);
    const today = /* @__PURE__ */ new Date();
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
    const isOpen = this.actionsMenu && !this.actionsMenu.classList.contains("cb-is-hidden");
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
  _toggleHistoryPanel() {
    if (this.historyPanel.classList.contains("cb-is-active")) {
      this._closeHistoryPanel();
    } else {
      this._openHistoryPanel();
    }
  }
  // Abrir panel de historial con transición
  _openHistoryPanel() {
    const top = this.messagesContainer.offsetTop;
    const bottom = this.window.clientHeight - (this.messagesContainer.offsetTop + this.messagesContainer.clientHeight);
    this.historyPanel.style.top = `${top}px`;
    this.historyPanel.style.bottom = `${Math.max(0, bottom)}px`;
    this._renderHistoryPanel();
    this.historyPanel.classList.add("cb-is-active");
    this.historyPanel.setAttribute("aria-hidden", "false");
    this.messagesContainer.classList.add("cb-history-active");
    if (this.actionsBtn)
      this.actionsBtn.classList.add("cb-is-active");
    if (this.scrollBottomBtn) {
      this.scrollBottomBtn.classList.remove("cb-visible");
    }
  }
  // Cerrar panel de historial
  _closeHistoryPanel() {
    this.historyPanel.classList.remove("cb-is-active");
    this.historyPanel.setAttribute("aria-hidden", "true");
    this.messagesContainer.classList.remove("cb-history-active");
    if (this.actionsBtn)
      this.actionsBtn.classList.remove("cb-is-active");
    this._handleScroll();
  }
  // Renderizar la lista de sesiones guardadas agrupadas por fecha
  _renderHistoryPanel() {
    const sessions = getSessionsIndex().filter(
      (s) => s.sessionId !== this.sessionId
    );
    if (this.historyTitle) {
      this.historyTitle.textContent = sessions.length ? `Conversaciones \xB7 ${sessions.length}` : "Conversaciones";
    }
    if (sessions.length === 0) {
      this.historyList.innerHTML = `
        <div class="cb-history-empty">
          <div class="cb-history-empty-icon">${ICONS.chatEmpty}</div>
          <p class="cb-history-empty-title">Sin conversaciones anteriores</p>
          <p class="cb-history-empty-sub">Tus chats pasados aparecer\xE1n aqu\xED</p>
        </div>`;
      if (this.historyFooter)
        this.historyFooter.classList.add("cb-is-hidden");
      return;
    }
    if (this.historyFooter) {
      this.historyFooter.classList.remove("cb-is-hidden");
    }
    this.historyList.innerHTML = "";
    const now = /* @__PURE__ */ new Date();
    const startOfToday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );
    const startOfYesterday = new Date(startOfToday);
    startOfYesterday.setDate(startOfYesterday.getDate() - 1);
    const startOfWeek = new Date(startOfToday);
    startOfWeek.setDate(startOfWeek.getDate() - 7);
    const groups = [
      { label: "Hoy", items: [] },
      { label: "Ayer", items: [] },
      { label: "Esta semana", items: [] },
      { label: "M\xE1s antiguas", items: [] }
    ];
    sessions.forEach((session) => {
      const d = new Date(session.lastUserMessageAt || session.lastMessageAt);
      const dayStart = new Date(d.getFullYear(), d.getMonth(), d.getDate());
      if (dayStart >= startOfToday)
        groups[0].items.push(session);
      else if (dayStart >= startOfYesterday)
        groups[1].items.push(session);
      else if (dayStart >= startOfWeek)
        groups[2].items.push(session);
      else
        groups[3].items.push(session);
    });
    groups.forEach((group) => {
      if (group.items.length === 0)
        return;
      const label = document.createElement("div");
      label.className = "cb-history-group-label";
      label.textContent = group.label;
      this.historyList.appendChild(label);
      group.items.forEach((session) => {
        this.historyList.appendChild(this._buildHistoryItem(session));
      });
    });
  }
  // Construir un ítem de historial individual
  _buildHistoryItem(session) {
    const item = document.createElement("div");
    item.className = "cb-history-item";
    item.setAttribute("role", "button");
    item.setAttribute("tabindex", "0");
    item.dataset.sessionId = session.sessionId;
    const sessionHistory = getHistoryBySessionId(session.sessionId);
    const lastBotMsg = [...sessionHistory].reverse().find((m) => m.role === "bot");
    const previewText = lastBotMsg ? lastBotMsg.text.replace(/[*_~`#>|[\]!]/g, "").replace(/\s+/g, " ").trim().slice(0, 200) : "";
    const countText = session.messageCount === 1 ? "1 mensaje" : `${session.messageCount} mensajes`;
    item.innerHTML = `
      <div class="cb-history-item-content">
        <div class="cb-history-item-title" title="${this._escapeAttr(session.title)}">${this._escapeAttr(session.title)}</div>
        ${previewText ? `<div class="cb-history-item-preview">${this._escapeAttr(previewText)}</div>` : ""}
        <div class="cb-history-item-meta">
          <span class="cb-history-item-date">${this._formatRelativeDate(session.lastUserMessageAt || session.lastMessageAt)}</span>
          <span class="cb-history-item-dot">\xB7</span>
          <span class="cb-history-item-count">${countText}</span>
        </div>
      </div>
      <button class="cb-history-item-delete" aria-label="Eliminar conversaci\xF3n" title="Eliminar conversaci\xF3n">
        ${ICONS.trash}
      </button>
    `;
    item.addEventListener("click", (e) => {
      if (e.target.closest(".cb-history-item-delete")) {
        e.stopPropagation();
        this._confirmDeleteSession(session.sessionId, item);
      } else if (!item.classList.contains("cb-history-item--confirming")) {
        this._loadSession(session.sessionId);
      }
    });
    item.addEventListener("keydown", (e) => {
      if ((e.key === "Enter" || e.key === " ") && !item.classList.contains("cb-history-item--confirming")) {
        e.preventDefault();
        this._loadSession(session.sessionId);
      }
      if (e.key === "Escape" && item.classList.contains("cb-history-item--confirming")) {
        this._cancelDeleteSession(item);
      }
    });
    return item;
  }
  // Mostrar confirmación inline antes de eliminar
  _confirmDeleteSession(sessionId, item) {
    if (item.classList.contains("cb-history-item--confirming"))
      return;
    item.classList.add("cb-history-item--confirming");
    const confirmEl = document.createElement("div");
    confirmEl.className = "cb-history-item-confirm";
    confirmEl.innerHTML = `
      <span class="cb-history-item-confirm-text">\xBFEliminar esta conversaci\xF3n?</span>
      <div class="cb-history-item-confirm-actions">
        <button class="cb-history-item-confirm-no">Cancelar</button>
        <button class="cb-history-item-confirm-yes">Eliminar</button>
      </div>
    `;
    item.appendChild(confirmEl);
    confirmEl.querySelector(".cb-history-item-confirm-yes").addEventListener("click", (e) => {
      e.stopPropagation();
      this._deleteSession(sessionId, item);
    });
    confirmEl.querySelector(".cb-history-item-confirm-no").addEventListener("click", (e) => {
      e.stopPropagation();
      this._cancelDeleteSession(item);
    });
    setTimeout(
      () => confirmEl.querySelector(".cb-history-item-confirm-no").focus(),
      0
    );
  }
  // Cancelar confirmación de borrado
  _cancelDeleteSession(item) {
    item.classList.remove("cb-history-item--confirming");
    const confirmEl = item.querySelector(".cb-history-item-confirm");
    if (confirmEl)
      confirmEl.remove();
  }
  // Cargar una conversación seleccionada
  async _loadSession(sessionId) {
    if (this.isLoading)
      return;
    if (this.chatHistory && this.chatHistory.length > 0) {
      saveSessionToIndex(
        this.sessionId,
        this._getHistoryTitle(),
        this.chatHistory.length
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
      if (confirmEl)
        confirmEl.remove();
      itemEl.classList.add("cb-history-item--removing");
      itemEl.addEventListener("animationend", doDelete, { once: true });
    } else {
      doDelete();
    }
  }
  // Mostrar el modal de confirmación de borrado total sobre el chat
  _openClearAllModal() {
    if (!this.clearAllOverlay)
      return;
    this.clearAllOverlay.classList.remove("cb-is-hidden");
    this.clearAllOverlay.setAttribute("aria-hidden", "false");
    void this.clearAllOverlay.offsetWidth;
    this.clearAllOverlay.classList.add("cb-is-active");
    setTimeout(
      () => this.clearAllCancelBtn && this.clearAllCancelBtn.focus(),
      0
    );
  }
  // Cerrar el modal de confirmación de borrado total
  _closeClearAllModal() {
    if (!this.clearAllOverlay || !this.clearAllOverlay.classList.contains("cb-is-active"))
      return;
    this.clearAllOverlay.classList.remove("cb-is-active");
    this.clearAllOverlay.setAttribute("aria-hidden", "true");
    const onTransitionEnd = (e) => {
      if (e.target !== this.clearAllOverlay)
        return;
      this.clearAllOverlay.classList.add("cb-is-hidden");
      this.clearAllOverlay.removeEventListener(
        "transitionend",
        onTransitionEnd
      );
    };
    this.clearAllOverlay.addEventListener("transitionend", onTransitionEnd);
    if (this.historyClearBtn)
      this.historyClearBtn.focus();
  }
  // Eliminar todas las conversaciones con animación escalonada
  _clearAllSessions() {
    const sessions = getSessionsIndex().filter(
      (s) => s.sessionId !== this.sessionId
    );
    const items = Array.from(
      this.historyList.querySelectorAll(".cb-history-item")
    );
    if (this.historyFooter)
      this.historyFooter.classList.add("cb-is-hidden");
    this.historyList.querySelectorAll(".cb-history-group-label").forEach((label) => {
      label.style.transition = "opacity 0.15s ease";
      label.style.opacity = "0";
    });
    if (items.length === 0) {
      sessions.forEach((s) => deleteSessionFromIndex(s.sessionId));
      this._renderHistoryPanel();
      return;
    }
    items.forEach((item, i) => {
      item.style.setProperty("--cb-swipe-delay", `${i * 42}ms`);
      item.classList.add("cb-history-item--removing");
    });
    items[items.length - 1].addEventListener(
      "animationend",
      () => {
        sessions.forEach((s) => deleteSessionFromIndex(s.sessionId));
        this._renderHistoryPanel();
      },
      { once: true }
    );
  }
};
function initChatBubble() {
  if (window.__chatBubbleInstance)
    return;
  const scriptTag = document.currentScript || document.querySelector('script[src*="chat-bubble"]');
  const scriptConfig = {};
  if (scriptTag) {
    const webhook = scriptTag.getAttribute("data-webhook");
    const botName = scriptTag.getAttribute("data-bot-name");
    const color = scriptTag.getAttribute("data-primary-color");
    const position = scriptTag.getAttribute("data-position");
    if (webhook)
      scriptConfig.webhook = { url: webhook };
    if (botName)
      scriptConfig.bot = { name: botName };
    if (color)
      scriptConfig.style = { primaryColor: color };
    if (position)
      scriptConfig.style = {
        ...scriptConfig.style || {},
        position
      };
  }
  const config = Object.assign({}, scriptConfig, window.ChatBubbleConfig || {});
  if (scriptConfig.webhook && window.ChatBubbleConfig?.webhook) {
    config.webhook = Object.assign(
      {},
      scriptConfig.webhook,
      window.ChatBubbleConfig.webhook
    );
  }
  if (scriptConfig.bot && window.ChatBubbleConfig?.bot) {
    config.bot = Object.assign(
      {},
      scriptConfig.bot,
      window.ChatBubbleConfig.bot
    );
  }
  if (scriptConfig.style && window.ChatBubbleConfig?.style) {
    config.style = Object.assign(
      {},
      scriptConfig.style,
      window.ChatBubbleConfig.style
    );
  }
  window.__chatBubbleInstance = new ChatBubble(config);
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
          window.__chatBubbleInstance._onWindowResize
        );
        document.getElementById("chat-bubble-host")?.remove();
        window.__chatBubbleInstance = null;
      }
    }
  };
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initChatBubble);
} else {
  initChatBubble();
}
//# sourceMappingURL=chat-bubble.js.map
