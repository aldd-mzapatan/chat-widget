// src/chat-bubble.css
var chat_bubble_default = '/* Inicializar estilos principales */\n\n/* Declarar variables de dise\xF1o (colores, sombras, medidas) */\n:host {\n  --cb-primary: #572b86;\n  --cb-primary-hover: #401d66;\n  --cb-primary-text: #ffffff;\n\n  /* Escala de transparencias de la marca: valores literales como respaldo sin color-mix() */\n  --cb-primary-a04: rgba(87, 43, 134, 0.04);\n  --cb-primary-a08: rgba(87, 43, 134, 0.08);\n  --cb-primary-a12: rgba(87, 43, 134, 0.12);\n  --cb-primary-a16: rgba(87, 43, 134, 0.16);\n  --cb-primary-a24: rgba(87, 43, 134, 0.24);\n  --cb-primary-a32: rgba(87, 43, 134, 0.32);\n  --cb-primary-a40: rgba(87, 43, 134, 0.4);\n\n  /* Variantes claras de la marca para modo oscuro y decoraci\xF3n */\n  --cb-primary-light: #c4a6f5;\n  --cb-primary-light-a18: rgba(196, 166, 245, 0.18);\n  --cb-primary-light-a40: rgba(196, 166, 245, 0.4);\n  --cb-sparkle-1: #e879f9;\n  --cb-sparkle-2: #c084fc;\n\n  --cb-primary-soft: var(--cb-primary-a12);\n  --cb-link-color: var(--cb-primary);\n  --cb-badge-bg: var(--cb-primary-soft);\n  --cb-badge-text: var(--cb-primary);\n  --cb-badge-border: var(--cb-primary-a32);\n\n  --cb-bg: #ffffff;\n  --cb-bg-secondary: #f6f5fa;\n  --cb-attachment-bg: #e6e3ef;\n  --cb-bg-header: var(--cb-primary);\n  --cb-text: #1a1025;\n  --cb-text-secondary: #6e5f86;\n  --cb-border: var(--cb-primary-a16);\n  --cb-border-strong: var(--cb-primary-a32);\n  --cb-surface-edge: rgba(26, 16, 37, 0.08);\n  --cb-hover: rgba(26, 16, 37, 0.05);\n  --cb-active: rgba(26, 16, 37, 0.09);\n  --cb-composer-border: rgba(26, 16, 37, 0.14);\n  --cb-ambient-glow: var(--cb-primary-a12);\n  --cb-pattern-dot: var(--cb-primary-a16);\n\n  --cb-user-bubble: var(--cb-primary);\n  --cb-user-text: #ffffff;\n  --cb-bot-bubble: #f3f1f7;\n  --cb-bot-text: #1a1025;\n\n  --cb-error-bubble: #fecdd3;\n  --cb-error-text: #be123c;\n  --cb-error-border: rgba(190, 18, 60, 0.35);\n\n  /* Escala de elevaci\xF3n: 1 superficies, 2 flotantes, 3 ventana y men\xFAs */\n  --cb-elev-1: 0 1px 2px rgba(16, 10, 30, 0.06), 0 1px 3px rgba(16, 10, 30, 0.04);\n  --cb-elev-2: 0 4px 14px rgba(16, 10, 30, 0.08), 0 2px 5px rgba(16, 10, 30, 0.04);\n  --cb-elev-3: 0 16px 48px rgba(16, 10, 30, 0.15), 0 2px 12px rgba(16, 10, 30, 0.06);\n  --cb-shadow: var(--cb-elev-3);\n  --cb-shadow-sm: var(--cb-elev-2);\n  --cb-shadow-launcher:\n    0 7px 24px var(--cb-primary-a40), 0 2px 8px rgba(0, 0, 0, 0.08);\n\n  /* Colores sem\xE1nticos de estado */\n  --cb-success: #22c55e;\n  --cb-online: #4ade80;\n  --cb-danger: #ef4444;\n  --cb-danger-bg: #fef2f2;\n  --cb-danger-soft: rgba(239, 68, 68, 0.3);\n\n  /* Bloques de c\xF3digo */\n  --cb-code-bg: #12101e;\n  --cb-code-text: #e2e0f0;\n  --cb-code-border: var(--cb-primary-a24);\n  --cb-font-mono: "Fira Code", "Cascadia Code", "Consolas", monospace;\n\n  /* Curvas de animaci\xF3n con rebote el\xE1stico */\n  --cb-ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);\n  --cb-ease-out-spring: cubic-bezier(0.34, 1.2, 0.64, 1);\n  --cb-ease-standard: cubic-bezier(0.4, 0, 0.2, 1);\n\n  /* Duraciones de transici\xF3n de la ventana */\n  --cb-duration-window: 0.28s;\n  --cb-duration-resize: 0.2s;\n\n  /* Dimensiones de componentes */\n  --cb-launcher-offset: 24px;\n  --cb-header-avatar-size: 32px;\n  --cb-header-btn-size: 32px;\n  --cb-msg-avatar-size: 28px;\n  --cb-input-btn-size: 34px;\n  --cb-icon-size-sm: 18px;\n  --cb-icon-size-md: 26px;\n\n  /* Escala tipogr\xE1fica */\n  --cb-text-2xs: 11px;\n  --cb-text-xs: 12px;\n  --cb-text-sm: 13px;\n  --cb-text-md: 14px;\n  --cb-text-lg: 16px;\n  --cb-text-xl: 20px;\n\n  /* Radios y tama\xF1os tipogr\xE1ficos por componente */\n  --cb-font-size-header: var(--cb-text-lg);\n  --cb-font-size-msg: var(--cb-text-md);\n  --cb-font-size-input: var(--cb-text-md);\n\n  --cb-radius: 18px;\n  --cb-radius-sm: 10px;\n  --cb-radius-bubble: 20px;\n  --cb-window-width: 410px;\n  --cb-window-height: 690px;\n  --cb-launcher-size: 52px;\n  --cb-spacing: 16px;\n  --cb-font:\n    system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial,\n    sans-serif;\n  --cb-transition: 0.22s var(--cb-ease-standard);\n  --cb-z-index: 9999;\n\n  --cb-scrollbar-width: 3px;\n  --cb-scrollbar-color: var(--cb-primary-a24);\n  --cb-scrollbar-color-hover: var(--cb-primary-a40);\n  --cb-scrollbar-track: transparent;\n  --cb-thinking-highlight: var(--cb-primary);\n  --cb-thinking-gradient: linear-gradient(\n    90deg,\n    rgba(124, 109, 148, 0.45) 0%,\n    rgba(124, 109, 148, 0.45) 35%,\n    var(--cb-thinking-highlight) 50%,\n    rgba(124, 109, 148, 0.45) 65%,\n    rgba(124, 109, 148, 0.45) 100%\n  );\n}\n\n/* Derivar la escala de la marca desde --cb-primary para que un primaryColor personalizado se propague a todo */\n@supports (color: color-mix(in srgb, red 50%, blue)) {\n  :host {\n    --cb-primary-a04: color-mix(in srgb, var(--cb-primary) 4%, transparent);\n    --cb-primary-a08: color-mix(in srgb, var(--cb-primary) 8%, transparent);\n    --cb-primary-a12: color-mix(in srgb, var(--cb-primary) 12%, transparent);\n    --cb-primary-a16: color-mix(in srgb, var(--cb-primary) 16%, transparent);\n    --cb-primary-a24: color-mix(in srgb, var(--cb-primary) 24%, transparent);\n    --cb-primary-a32: color-mix(in srgb, var(--cb-primary) 32%, transparent);\n    --cb-primary-a40: color-mix(in srgb, var(--cb-primary) 40%, transparent);\n    --cb-primary-light: color-mix(in oklch, var(--cb-primary), white 55%);\n    --cb-primary-light-a18: color-mix(\n      in srgb,\n      var(--cb-primary-light) 18%,\n      transparent\n    );\n    --cb-primary-light-a40: color-mix(\n      in srgb,\n      var(--cb-primary-light) 40%,\n      transparent\n    );\n    --cb-sparkle-1: color-mix(in oklch, var(--cb-primary), white 50%);\n    --cb-sparkle-2: color-mix(in oklch, var(--cb-primary), white 40%);\n  }\n}\n\n/* Conservar la saturaci\xF3n en las variantes claras cuando hay sintaxis de color relativa */\n@supports (color: oklch(from red l c h)) {\n  :host {\n    --cb-primary-light: oklch(from var(--cb-primary) 0.78 calc(c * 0.8) h);\n    --cb-sparkle-1: oklch(from var(--cb-primary) 0.75 0.2 calc(h + 15));\n    --cb-sparkle-2: oklch(from var(--cb-primary) 0.72 0.18 h);\n  }\n}\n\n/* Aplicar esquema de colores oscuro */\n@media (prefers-color-scheme: dark) {\n  :host {\n    --cb-bg: #1c1528;\n    --cb-bg-secondary: #141020;\n    --cb-attachment-bg: #2e2540;\n    --cb-link-color: var(--cb-primary-light);\n    --cb-text: #f0ecf8;\n    --cb-text-secondary: #9b8fb0;\n    --cb-border: rgba(255, 255, 255, 0.08);\n    --cb-border-strong: rgba(255, 255, 255, 0.16);\n    --cb-surface-edge: rgba(255, 255, 255, 0.08);\n    --cb-hover: rgba(255, 255, 255, 0.06);\n    --cb-active: rgba(255, 255, 255, 0.1);\n    --cb-composer-border: rgba(255, 255, 255, 0.12);\n    --cb-ambient-glow: var(--cb-primary-a32);\n    --cb-pattern-dot: rgba(255, 255, 255, 0.07);\n    --cb-bot-bubble: #2a2239;\n    --cb-bot-text: #ede9f5;\n    --cb-error-bubble: #2a0a14;\n    --cb-error-text: #fb7185;\n    --cb-error-border: rgba(251, 113, 133, 0.2);\n    --cb-danger-bg: #2a0a14;\n    --cb-badge-bg: var(--cb-primary-light-a18);\n    --cb-badge-text: var(--cb-primary-light);\n    --cb-badge-border: var(--cb-primary-light-a40);\n    --cb-elev-1: 0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2);\n    --cb-elev-2: 0 4px 14px rgba(0, 0, 0, 0.35), 0 2px 5px rgba(0, 0, 0, 0.2);\n    --cb-elev-3: 0 16px 48px rgba(0, 0, 0, 0.45), 0 2px 12px rgba(0, 0, 0, 0.25);\n    --cb-scrollbar-color: rgba(255, 255, 255, 0.14);\n    --cb-scrollbar-color-hover: rgba(255, 255, 255, 0.24);\n    --cb-thinking-highlight: #ffffff;\n    --cb-thinking-gradient: linear-gradient(\n      90deg,\n      rgba(155, 143, 176, 0.45) 0%,\n      rgba(155, 143, 176, 0.45) 35%,\n      var(--cb-thinking-highlight) 50%,\n      rgba(155, 143, 176, 0.45) 65%,\n      rgba(155, 143, 176, 0.45) 100%\n    );\n  }\n}\n\n/* Aplicar esquema de colores claro */\n:host-context([data-theme="light"]),\n#chat-bubble-window[data-theme="light"] {\n  --cb-hover: rgba(26, 16, 37, 0.05);\n  --cb-active: rgba(26, 16, 37, 0.09);\n  --cb-composer-border: rgba(26, 16, 37, 0.14);\n  --cb-ambient-glow: var(--cb-primary-a12);\n  --cb-pattern-dot: var(--cb-primary-a16);\n  --cb-shadow: var(--cb-elev-3);\n  --cb-shadow-sm: var(--cb-elev-2);\n  --cb-bg: #ffffff;\n  --cb-bg-secondary: #f6f5fa;\n  --cb-attachment-bg: #e6e3ef;\n  --cb-link-color: var(--cb-primary);\n  --cb-text: #1a1025;\n  --cb-text-secondary: #6e5f86;\n  --cb-border: var(--cb-primary-a16);\n  --cb-border-strong: var(--cb-primary-a32);\n  --cb-surface-edge: rgba(26, 16, 37, 0.08);\n  --cb-bot-bubble: #f3f1f7;\n  --cb-bot-text: #1a1025;\n  --cb-error-bubble: #fecdd3;\n  --cb-error-text: #be123c;\n  --cb-error-border: rgba(190, 18, 60, 0.35);\n  --cb-danger-bg: #fef2f2;\n  --cb-badge-bg: var(--cb-primary-soft);\n  --cb-badge-text: var(--cb-primary);\n  --cb-badge-border: var(--cb-primary-a32);\n  --cb-elev-1: 0 1px 2px rgba(16, 10, 30, 0.06), 0 1px 3px rgba(16, 10, 30, 0.04);\n  --cb-elev-2: 0 4px 14px rgba(16, 10, 30, 0.08), 0 2px 5px rgba(16, 10, 30, 0.04);\n  --cb-elev-3: 0 16px 48px rgba(16, 10, 30, 0.15), 0 2px 12px rgba(16, 10, 30, 0.06);\n  --cb-scrollbar-color: var(--cb-primary-a24);\n  --cb-scrollbar-color-hover: var(--cb-primary-a40);\n  --cb-thinking-highlight: var(--cb-primary);\n  --cb-thinking-gradient: linear-gradient(\n    90deg,\n    rgba(124, 109, 148, 0.45) 0%,\n    rgba(124, 109, 148, 0.45) 35%,\n    var(--cb-thinking-highlight) 50%,\n    rgba(124, 109, 148, 0.45) 65%,\n    rgba(124, 109, 148, 0.45) 100%\n  );\n}\n\n/* Forzar esquema de colores oscuro */\n:host-context([data-theme="dark"]),\n#chat-bubble-window[data-theme="dark"] {\n  --cb-shadow: var(--cb-elev-3);\n  --cb-shadow-sm: var(--cb-elev-2);\n  --cb-bg: #1c1528;\n  --cb-bg-secondary: #141020;\n  --cb-attachment-bg: #2e2540;\n  --cb-link-color: var(--cb-primary-light);\n  --cb-text: #f0ecf8;\n  --cb-text-secondary: #9b8fb0;\n  --cb-border: rgba(255, 255, 255, 0.08);\n  --cb-border-strong: rgba(255, 255, 255, 0.16);\n  --cb-surface-edge: rgba(255, 255, 255, 0.08);\n  --cb-hover: rgba(255, 255, 255, 0.06);\n  --cb-active: rgba(255, 255, 255, 0.1);\n  --cb-composer-border: rgba(255, 255, 255, 0.12);\n  --cb-ambient-glow: var(--cb-primary-a32);\n  --cb-pattern-dot: rgba(255, 255, 255, 0.07);\n  --cb-bot-bubble: #2a2239;\n  --cb-bot-text: #ede9f5;\n  --cb-error-bubble: #2a0a14;\n  --cb-error-text: #fb7185;\n  --cb-error-border: rgba(251, 113, 133, 0.2);\n  --cb-danger-bg: #2a0a14;\n  --cb-badge-bg: var(--cb-primary-light-a18);\n  --cb-badge-text: var(--cb-primary-light);\n  --cb-badge-border: var(--cb-primary-light-a40);\n  --cb-elev-1: 0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2);\n  --cb-elev-2: 0 4px 14px rgba(0, 0, 0, 0.35), 0 2px 5px rgba(0, 0, 0, 0.2);\n  --cb-elev-3: 0 16px 48px rgba(0, 0, 0, 0.45), 0 2px 12px rgba(0, 0, 0, 0.25);\n  --cb-scrollbar-color: rgba(255, 255, 255, 0.14);\n  --cb-scrollbar-color-hover: rgba(255, 255, 255, 0.24);\n  --cb-thinking-highlight: #ffffff;\n  --cb-thinking-gradient: linear-gradient(\n    90deg,\n    rgba(155, 143, 176, 0.45) 0%,\n    rgba(155, 143, 176, 0.45) 35%,\n    var(--cb-thinking-highlight) 50%,\n    rgba(155, 143, 176, 0.45) 65%,\n    rgba(155, 143, 176, 0.45) 100%\n  );\n}\n\n/* Impedir arrastrar o seleccionar las im\xE1genes de avatar */\n.cb-avatar img,\n.cb-msg-avatar img,\n.cb-agent-intro-avatar img,\n.cb-agent-intro-avatar video,\n.cb-launcher-avatar {\n  -webkit-user-drag: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n/* Normalizar m\xE1rgenes globales */\n:where(#chat-bubble-launcher, #chat-bubble-window),\n:where(#chat-bubble-launcher, #chat-bubble-window) :where(*) {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n#chat-bubble-launcher,\n#chat-bubble-window {\n  font-family: var(--cb-font);\n  font-size: var(--cb-text-md);\n  line-height: 1.5;\n  color: var(--cb-text);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n/* Estilizar bot\xF3n lanzador principal */\n#chat-bubble-launcher {\n  position: fixed;\n  bottom: var(--cb-launcher-offset);\n  right: var(--cb-launcher-offset);\n  z-index: var(--cb-z-index);\n  --cb-drag-x: 0px;\n  transform: translate3d(var(--cb-drag-x), 0, 0);\n  transition: transform var(--cb-duration-window) var(--cb-ease-out-spring);\n}\n\n#chat-bubble-launcher.cb-is-dragging {\n  transition: none !important;\n}\n\n#chat-bubble-launcher.cb-position--left {\n  right: auto;\n  left: var(--cb-launcher-offset);\n}\n\n.cb-launcher-btn {\n  width: var(--cb-launcher-size);\n  height: var(--cb-launcher-size);\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n  background: var(--cb-primary);\n  color: var(--cb-primary-text);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: var(--cb-shadow-launcher);\n  transition: transform 0.3s ease;\n  position: relative;\n  overflow: visible;\n  animation: cb-launcher-breathe 3s ease-in-out infinite;\n}\n\n/* Pausar la respiraci\xF3n mientras el chat est\xE1 abierto: solo tiene sentido llamar la atenci\xF3n con el chat cerrado */\n.cb-launcher-btn.cb-is-open {\n  animation-play-state: paused;\n}\n\n/* Aura que respira: pulsa un anillo exterior con color primario sin escalar el bot\xF3n */\n@keyframes cb-launcher-breathe {\n  0%,\n  100% {\n    box-shadow:\n      0 7px 24px var(--cb-primary-a40),\n      0 2px 8px rgba(0, 0, 0, 0.08),\n      0 0 0 0 var(--cb-primary-a32);\n  }\n  50% {\n    box-shadow:\n      0 7px 24px var(--cb-primary-a40),\n      0 2px 8px rgba(0, 0, 0, 0.08),\n      0 0 12px 4px var(--cb-primary-a32);\n  }\n}\n\n/* Efecto de zoom sutil al pasar el cursor \u2014 entrada y salida gestionadas por transition */\n.cb-launcher-btn:hover {\n  transform: scale(1.08);\n}\n\n.cb-launcher-btn:active {\n  transform: scale(0.94);\n}\n\n.cb-icon-chat,\n.cb-icon-close {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition:\n    transform 0.35s cubic-bezier(0.34, 1.4, 0.64, 1),\n    opacity 0.2s;\n}\n\n.cb-icon-chat {\n  overflow: hidden;\n  border-radius: 50%;\n}\n\n.cb-launcher-btn svg {\n  width: var(--cb-icon-size-md);\n  height: var(--cb-icon-size-md);\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15));\n}\n\n.cb-launcher-avatar {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n  pointer-events: none;\n}\n\n.cb-launcher-btn .cb-icon-chat {\n  opacity: 1;\n  transform: scale(1) rotate(0deg);\n}\n.cb-launcher-btn .cb-icon-close {\n  opacity: 0;\n  transform: scale(0) rotate(-90deg);\n}\n.cb-launcher-btn.cb-is-open .cb-icon-chat {\n  opacity: 0;\n  transform: scale(0) rotate(90deg);\n}\n.cb-launcher-btn.cb-is-open .cb-icon-close {\n  opacity: 1;\n  transform: scale(1) rotate(0deg);\n}\n\n/* Configurar estrellas IA (sparkles) como elementos decorativos alrededor del bot\xF3n */\n.cb-sparkle {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n  opacity: 0;\n  z-index: 10;\n  will-change: transform, opacity;\n  animation-fill-mode: both;\n}\n\n.cb-sparkle svg {\n  display: block;\n  filter: drop-shadow(0 0 3px currentColor) drop-shadow(0 0 6px currentColor);\n}\n\n/* Posicionar arriba-derecha */\n.cb-sparkle--1 {\n  width: 16px;\n  height: 16px;\n  top: -9px;\n  right: -4px;\n  color: var(--cb-sparkle-1);\n  animation: cb-sparkle-pro 3.6s 0s ease-in-out infinite;\n  animation-fill-mode: both;\n}\n\n/* Posicionar abajo-izquierda */\n.cb-sparkle--3 {\n  width: 9px;\n  height: 9px;\n  bottom: -6px;\n  left: 1px;\n  color: var(--cb-sparkle-2);\n  animation: cb-sparkle-pro 3.6s 1.2s ease-in-out infinite;\n  animation-fill-mode: both;\n}\n\n/* Posicionar abajo-derecha */\n.cb-sparkle--5 {\n  width: 11px;\n  height: 11px;\n  bottom: -4px;\n  right: -3px;\n  color: var(--cb-sparkle-2);\n  animation: cb-sparkle-pro 3.6s 2.4s ease-in-out infinite;\n  animation-fill-mode: both;\n}\n\n@keyframes cb-sparkle-pro {\n  0% {\n    opacity: 0;\n    transform: scale(0.3) rotate(-10deg);\n  }\n  15% {\n    opacity: 0;\n    transform: scale(0.3) rotate(-10deg);\n  }\n  40% {\n    opacity: 0.95;\n    transform: scale(1.15) rotate(15deg);\n  }\n  60% {\n    opacity: 0.7;\n    transform: scale(1) rotate(8deg);\n  }\n  80% {\n    opacity: 0;\n    transform: scale(0.4) rotate(20deg);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(0.3) rotate(-10deg);\n  }\n}\n\n/* Aplicar hover con aceleraci\xF3n sutil sin filtros adicionales */\n.cb-launcher-btn:hover .cb-sparkle--1 {\n  animation-duration: 1.4s;\n}\n.cb-launcher-btn:hover .cb-sparkle--3 {\n  animation-duration: 1.6s;\n}\n.cb-launcher-btn:hover .cb-sparkle--5 {\n  animation-duration: 1.2s;\n}\n\n/* Configurar estado abierto: apagar sparkles y detener su animaci\xF3n (no solo ocultarla) */\n.cb-launcher-btn.cb-is-open .cb-sparkle {\n  opacity: 0 !important;\n  animation-play-state: paused;\n  transition: opacity 0.18s ease;\n}\n\n/* Configurar indicador visual de notificaciones nuevas */\n.cb-notification-badge {\n  position: absolute;\n  top: -1px;\n  right: -1px;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: var(--cb-success);\n  display: none;\n  z-index: 2;\n}\n\n.cb-notification-badge.cb-visible {\n  display: block;\n}\n\n/* Configurar contenedor principal del chat */\n#chat-bubble-window {\n  position: fixed;\n  bottom: calc(var(--cb-launcher-offset) + var(--cb-launcher-size) + 14px);\n  right: var(--cb-launcher-offset);\n  width: var(--cb-window-width);\n  height: var(--cb-window-height);\n  background: var(--cb-bg);\n  border-radius: var(--cb-radius);\n  box-shadow: var(--cb-shadow);\n  border: none;\n  /* Definir el borde de la superficie con outline para no alterar el tama\xF1o ni recortar el header */\n  outline: 1px solid var(--cb-surface-edge);\n  outline-offset: -1px;\n  display: flex;\n  flex-direction: column;\n  z-index: var(--cb-z-index);\n  overflow: hidden;\n\n  opacity: 0;\n  --cb-drag-x: 0px;\n  transform: translate3d(var(--cb-drag-x), 24px, 0) scale(0.94);\n  pointer-events: none;\n  transition:\n    opacity var(--cb-duration-window) ease-out,\n    transform var(--cb-duration-window) var(--cb-ease-out-spring),\n    width var(--cb-duration-resize) var(--cb-ease-standard),\n    height var(--cb-duration-resize) var(--cb-ease-standard);\n  transform-origin: bottom right;\n}\n\n#chat-bubble-window.cb-position--left {\n  right: auto;\n  left: var(--cb-launcher-offset);\n  transform-origin: bottom left;\n}\n\n#chat-bubble-window.cb-is-open {\n  opacity: 1;\n  transform: translate3d(var(--cb-drag-x), 0, 0) scale(1);\n  pointer-events: all;\n}\n\n#chat-bubble-window.cb-is-dragging {\n  transition: none !important;\n}\n\n/* Estilizar \xE1rea para redimensionar ventana */\n.cb-resize-handle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 14px;\n  cursor: ns-resize;\n  z-index: 12;\n  background: transparent;\n  touch-action: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n/* Dise\xF1ar barra superior de informaci\xF3n */\n.cb-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 10px 10px var(--cb-spacing);\n  background: var(--cb-bg);\n  color: var(--cb-text);\n  border-bottom: 1px solid var(--cb-border);\n  flex-shrink: 0;\n  border-radius: var(--cb-radius) var(--cb-radius) 0 0;\n  position: relative;\n  z-index: 11;\n  overflow: visible;\n  cursor: move;\n  -webkit-user-select: none;\n  user-select: none;\n  touch-action: none;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .cb-launcher-btn,\n  .cb-sparkle--1,\n  .cb-sparkle--3,\n  .cb-sparkle--5,\n  .cb-typing-dot,\n  .cb-thinking-icon,\n  .cb-typing-wrapper.cb-visible .cb-msg-avatar::before,\n  .cb-recording-dot {\n    animation: none;\n  }\n\n  .cb-streaming-cursor {\n    animation: none;\n    opacity: 1;\n  }\n\n  .cb-thinking-text {\n    animation: none !important;\n    background: none;\n    -webkit-text-fill-color: var(--cb-text-secondary);\n    color: var(--cb-text-secondary);\n  }\n}\n\n.cb-header-info {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  min-width: 0;\n  min-height: 40px;\n  position: relative;\n  z-index: 1;\n}\n\n.cb-header-text {\n  min-width: 0;\n}\n\n/* Alternar la cabecera entre identidad del asistente y t\xEDtulo del historial */\n.cb-header-info .cb-header-back-btn,\n.cb-header-info .cb-header-title {\n  display: none;\n}\n\n.cb-header-title {\n  font-family: var(--cb-font);\n  font-weight: 600;\n  font-size: var(--cb-font-size-header);\n  letter-spacing: -0.01em;\n  color: var(--cb-text);\n  white-space: nowrap;\n}\n\n#chat-bubble-window.cb-history-open .cb-header-info {\n  gap: 6px;\n  margin-left: -6px;\n}\n\n#chat-bubble-window.cb-history-open .cb-avatar,\n#chat-bubble-window.cb-history-open .cb-header-text {\n  display: none;\n}\n\n#chat-bubble-window.cb-history-open .cb-actions-dropdown {\n  display: none;\n}\n\n#chat-bubble-window.cb-history-open .cb-header-back-btn {\n  display: flex;\n}\n\n#chat-bubble-window.cb-history-open .cb-header-title {\n  display: block;\n  animation: cb-fade-slide-in 0.2s var(--cb-ease-standard) both;\n}\n\n@keyframes cb-fade-slide-in {\n  from {\n    opacity: 0;\n    transform: translateX(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n\n.cb-avatar {\n  width: var(--cb-header-avatar-size);\n  height: var(--cb-header-avatar-size);\n  border-radius: 50%;\n  background: var(--cb-primary-a12);\n  border: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  overflow: hidden;\n}\n\n.cb-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.cb-avatar svg {\n  width: 21px;\n  height: 21px;\n  color: var(--cb-primary);\n}\n\n.cb-bot-name {\n  display: block;\n  font-family: var(--cb-font);\n  font-weight: 600;\n  font-size: var(--cb-font-size-header);\n  line-height: 1.2;\n  letter-spacing: -0.01em;\n  color: var(--cb-text);\n}\n\n.cb-status {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-family: var(--cb-font);\n  font-size: var(--cb-text-xs);\n  font-weight: 400;\n  color: var(--cb-text-secondary);\n  margin-top: 2px;\n}\n\n.cb-status:not(:empty)::before {\n  content: "";\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--cb-success);\n  box-shadow: 0 0 0 2px color-mix(in srgb, var(--cb-success) 22%, transparent);\n}\n\n.cb-status:empty {\n  display: none;\n}\n\n.cb-header-actions {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  position: relative;\n  z-index: 1;\n}\n\n.cb-header-back-btn,\n.cb-toggle-size-btn,\n.cb-actions-btn,\n.cb-close-window-btn {\n  width: var(--cb-header-btn-size);\n  height: var(--cb-header-btn-size);\n  border-radius: 10px;\n  border: none;\n  cursor: pointer;\n  background: transparent;\n  color: var(--cb-text-secondary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition:\n    background var(--cb-transition),\n    color var(--cb-transition),\n    transform 0.2s;\n}\n\n.cb-header-back-btn:hover,\n.cb-toggle-size-btn:hover,\n.cb-actions-btn:hover,\n.cb-close-window-btn:hover {\n  background: var(--cb-hover);\n  color: var(--cb-text);\n}\n\n.cb-header-back-btn:active,\n.cb-toggle-size-btn:active,\n.cb-actions-btn:active,\n.cb-close-window-btn:active {\n  background: var(--cb-active);\n}\n\n.cb-header-back-btn svg,\n.cb-toggle-size-btn svg,\n.cb-actions-btn svg,\n.cb-close-window-btn svg {\n  width: var(--cb-icon-size-sm);\n  height: var(--cb-icon-size-sm);\n}\n\n/* Dise\xF1ar dropdown de acciones del header */\n.cb-actions-dropdown {\n  position: relative;\n}\n\n.cb-actions-menu {\n  position: absolute;\n  top: calc(100% + 10px);\n  right: 0;\n  min-width: 220px;\n  background: var(--cb-bg);\n  border-radius: var(--cb-radius);\n  box-shadow: var(--cb-shadow);\n  padding: 4px;\n  z-index: 100;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n\n.cb-actions-menu.cb-is-hidden {\n  display: none;\n}\n\n.cb-actions-menu-item {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  width: 100%;\n  padding: 9px 12px;\n  border: none;\n  border-radius: calc(var(--cb-radius) - 4px);\n  background: transparent;\n  color: var(--cb-text, #1a1a2e);\n  font-size: var(--cb-text-md);\n  font-family: var(--cb-font, inherit);\n  text-align: left;\n  cursor: pointer;\n  transition: background var(--cb-transition);\n}\n\n.cb-actions-menu-item:hover {\n  background: var(--cb-primary-soft);\n}\n\n.cb-actions-menu-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: var(--cb-icon-size-sm);\n  height: var(--cb-icon-size-sm);\n  flex-shrink: 0;\n  color: var(--cb-text-secondary);\n}\n\n.cb-actions-menu-icon svg {\n  width: var(--cb-icon-size-sm);\n  height: var(--cb-icon-size-sm);\n}\n\n/* Posicionar notificaciones flotantes justo debajo del header */\n.cb-toast-container {\n  position: absolute;\n  top: 100%;\n  left: 12px;\n  right: 12px;\n  margin-top: 10px;\n  z-index: 30;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  pointer-events: none;\n  cursor: default;\n}\n\n/* Dise\xF1ar tarjeta individual de notificaci\xF3n de error */\n.cb-toast {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  max-width: 100%;\n  width: fit-content;\n  padding: 11px 12px;\n  background: var(--cb-error-bubble);\n  color: var(--cb-error-text);\n  border: 1px solid var(--cb-error-border);\n  border-radius: var(--cb-radius);\n  box-shadow: var(--cb-shadow-sm);\n  font-family: var(--cb-font);\n  font-size: var(--cb-text-sm);\n  line-height: 1.45;\n  pointer-events: auto;\n\n  opacity: 0;\n  transform: translateY(-6px) scale(0.97);\n  transition:\n    opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),\n    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.cb-toast.cb-toast--visible {\n  opacity: 1;\n  transform: translateY(0) scale(1);\n}\n\n.cb-toast-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  color: var(--cb-error-text);\n}\n\n.cb-toast-icon svg {\n  width: 15px;\n  height: 15px;\n}\n\n.cb-toast-text {\n  flex: 1;\n  min-width: 0;\n  text-align: center;\n  word-break: break-word;\n  overflow-wrap: break-word;\n}\n\n.cb-toast-close {\n  flex-shrink: 0;\n  width: 20px;\n  height: 20px;\n  padding: 0;\n  border: none;\n  border-radius: 6px;\n  background: transparent;\n  color: var(--cb-error-text);\n  opacity: 0.65;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition:\n    opacity var(--cb-transition),\n    background var(--cb-transition);\n}\n\n.cb-toast-close:hover {\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.06);\n}\n\n.cb-toast-close svg {\n  width: 12px;\n  height: 12px;\n}\n\n/* Configurar \xE1rea de desplazamiento de mensajes */\n.cb-messages {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 20px 16px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  background-color: var(--cb-bg);\n  background-image:\n    radial-gradient(\n      ellipse 90% 55% at 50% 0%,\n      var(--cb-ambient-glow) 0%,\n      transparent 70%\n    ),\n    linear-gradient(to bottom, transparent 0%, var(--cb-bg) 65%),\n    radial-gradient(circle, var(--cb-pattern-dot) 1px, transparent 1.5px);\n  background-size:\n    100% 100%,\n    100% 100%,\n    18px 18px;\n  background-position:\n    0 0,\n    0 0,\n    center top;\n  transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);\n\n  /* Mostrar la barra de desplazamiento solo al pasar el cursor */\n  scrollbar-width: thin;\n  scrollbar-color: transparent transparent;\n}\n\n.cb-messages:hover {\n  scrollbar-color: var(--cb-scrollbar-color) var(--cb-scrollbar-track);\n}\n\n.cb-messages::-webkit-scrollbar {\n  width: var(--cb-scrollbar-width);\n}\n.cb-messages::-webkit-scrollbar-track {\n  background: var(--cb-scrollbar-track);\n}\n.cb-messages::-webkit-scrollbar-thumb {\n  background: transparent;\n  border-radius: 100px;\n}\n.cb-messages:hover::-webkit-scrollbar-thumb {\n  background: var(--cb-scrollbar-color);\n}\n.cb-messages::-webkit-scrollbar-thumb:hover {\n  background: var(--cb-scrollbar-color-hover);\n}\n\n/* Aplicar estilos base y animaci\xF3n a las burbujas */\n.cb-message {\n  display: flex;\n  flex-direction: column;\n  max-width: 80%;\n  animation: cb-message-appear 0.35s ease-out both;\n}\n\n@keyframes cb-message-appear {\n  from {\n    opacity: 0;\n    transform: translateY(8px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n\n.cb-message--bot {\n  align-self: stretch;\n  align-items: flex-start;\n  max-width: 100%;\n  width: 100%;\n  flex-direction: row;\n  gap: 8px;\n}\n\n/* Estilizar imagen de perfil del asistente */\n.cb-msg-avatar {\n  width: var(--cb-msg-avatar-size);\n  height: var(--cb-msg-avatar-size);\n  border-radius: 50%;\n  overflow: hidden;\n  flex-shrink: 0;\n  margin-top: 2px;\n  background: var(--cb-primary-a08);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.cb-msg-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.cb-msg-avatar svg {\n  width: 16px;\n  height: 16px;\n  color: var(--cb-primary);\n}\n\n/* Alinear contenedor de mensaje y marca de tiempo */\n.cb-msg-col {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  flex: 1;\n  min-width: 0;\n}\n\n/* Envolver la burbuja para que el bot\xF3n de responder se ancle a su ancho real */\n.cb-msg-bubble-row {\n  position: relative;\n  display: flex;\n  max-width: 92%;\n}\n.cb-message--user {\n  align-self: flex-end;\n  align-items: flex-end;\n}\n\n/* Configurar padding y tipograf\xEDa del contenido del mensaje */\n.cb-message-content {\n  padding: 10px 14px;\n  word-break: break-word;\n  overflow-wrap: break-word;\n  font-size: var(--cb-font-size-msg);\n  line-height: 1.55;\n  font-weight: 400;\n}\n\n/* Dise\xF1ar burbuja de respuesta del asistente */\n.cb-message--bot .cb-message-content {\n  max-width: 100%;\n  background: var(--cb-bot-bubble);\n  color: var(--cb-bot-text);\n  border-radius: 6px 18px 18px 18px;\n}\n\n/* Dise\xF1ar burbuja de mensaje del usuario */\n.cb-message--user .cb-message-content {\n  background: var(--cb-user-bubble);\n  color: var(--cb-user-text);\n  border-radius: 18px 18px 6px 18px;\n}\n\n/* Formatear indicador de hora de env\xEDo */\n.cb-message-time {\n  font-size: var(--cb-text-2xs);\n  color: var(--cb-text-secondary);\n  margin-top: 4px;\n  padding: 0 4px;\n  letter-spacing: 0.015em;\n  font-weight: 500;\n  font-variant-numeric: tabular-nums;\n}\n\n/* Alinear hora y acciones bajo la burbuja del asistente */\n.cb-msg-meta {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  min-height: 26px;\n  margin-top: 2px;\n}\n\n.cb-msg-meta .cb-message-time {\n  margin-top: 0;\n}\n\n.cb-msg-actions {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  opacity: 0;\n  transition: opacity 0.16s ease;\n}\n\n.cb-message--bot:hover .cb-msg-actions,\n.cb-msg-actions:focus-within {\n  opacity: 1;\n}\n\n/* Mantener visibles las acciones en pantallas t\xE1ctiles, donde no existe hover */\n@media (hover: none) {\n  .cb-msg-actions {\n    opacity: 1;\n  }\n}\n\n.cb-msg-action-btn {\n  width: 26px;\n  height: 26px;\n  border: none;\n  border-radius: 8px;\n  background: transparent;\n  color: var(--cb-text-secondary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  padding: 0;\n  transition:\n    background var(--cb-transition),\n    color var(--cb-transition);\n}\n\n.cb-msg-action-btn:hover {\n  background: var(--cb-hover);\n  color: var(--cb-text);\n}\n\n.cb-msg-action-btn.cb-is-done {\n  color: var(--cb-success);\n}\n\n.cb-msg-action-btn svg {\n  width: 15px;\n  height: 15px;\n}\n\n/* Marcar mensaje del usuario que no obtuvo respuesta */\n.cb-message--failed .cb-message-content {\n  opacity: 0.7;\n}\n\n.cb-msg-failed {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 4px;\n  padding: 0 4px;\n  font-size: var(--cb-text-xs);\n  color: var(--cb-error-text);\n}\n\n.cb-msg-failed--stopped {\n  color: var(--cb-text-secondary);\n}\n\n.cb-msg-failed--stopped .cb-msg-retry-btn {\n  border-color: var(--cb-composer-border);\n  color: var(--cb-text);\n}\n\n.cb-msg-failed--stopped .cb-msg-retry-btn:hover {\n  background: var(--cb-hover);\n}\n\n.cb-msg-retry-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 8px;\n  border: 1px solid var(--cb-error-border);\n  border-radius: 999px;\n  background: transparent;\n  color: var(--cb-error-text);\n  font-family: var(--cb-font);\n  font-size: var(--cb-text-xs);\n  font-weight: 600;\n  cursor: pointer;\n  transition: background var(--cb-transition);\n}\n\n.cb-msg-retry-btn:hover {\n  background: var(--cb-danger-bg);\n}\n\n.cb-msg-retry-btn svg {\n  width: 12px;\n  height: 12px;\n}\n\n/* Dise\xF1ar preguntas sugeridas del estado inicial */\n.cb-suggestions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding-left: calc(var(--cb-msg-avatar-size) + 8px);\n}\n\n.cb-suggestion-chip {\n  padding: 7px 12px;\n  border: 1px solid var(--cb-composer-border);\n  border-radius: 999px;\n  background: var(--cb-bg);\n  color: var(--cb-text);\n  font-family: var(--cb-font);\n  font-size: var(--cb-text-sm);\n  line-height: 1.3;\n  text-align: left;\n  cursor: pointer;\n  animation: cb-message-appear 0.3s ease-out var(--cb-chip-delay, 0ms) both;\n  transition:\n    border-color var(--cb-transition),\n    background var(--cb-transition),\n    color var(--cb-transition);\n}\n\n.cb-suggestion-chip:hover {\n  border-color: var(--cb-primary-a40);\n  background: var(--cb-primary-a04);\n  color: var(--cb-link-color);\n}\n\n/* Formatear elementos HTML generados desde Markdown */\n.cb-message-content .cb-paragraph {\n  margin: 0 0 9px;\n}\n.cb-message-content .cb-paragraph:last-child {\n  margin-bottom: 0;\n}\n.cb-message-content .cb-list {\n  margin: 7px 0;\n  padding-left: 18px;\n}\n.cb-message-content .cb-list li {\n  margin-bottom: 4px;\n  line-height: 1.45;\n}\n.cb-message-content .cb-list li .cb-paragraph {\n  margin-bottom: 3px;\n}\n.cb-message-content .cb-list li .cb-paragraph:last-child {\n  margin-bottom: 0;\n}\n.cb-li-hidden {\n  display: none !important;\n}\n.cb-message-content .cb-heading {\n  font-weight: 700;\n  margin: 9px 0 5px;\n  line-height: 1.3;\n}\n.cb-message-content h1.cb-heading {\n  font-size: var(--cb-text-lg);\n}\n.cb-message-content h2.cb-heading {\n  font-size: 15px;\n}\n.cb-message-content h3.cb-heading {\n  font-size: var(--cb-text-md);\n}\n\n/* Formatear l\xEDnea separadora horizontal */\n.cb-message-content .cb-hr {\n  border: none;\n  border-top: 1px solid var(--cb-border);\n  margin: 12px 0;\n}\n\n.cb-message--user .cb-hr {\n  border-top-color: rgba(255, 255, 255, 0.25);\n}\n\n.cb-message-content .cb-code-block {\n  background: var(--cb-code-bg);\n  color: var(--cb-code-text);\n  border-radius: 11px;\n  padding: 11px 13px;\n  margin: 9px 0;\n  overflow-x: auto;\n  font-size: var(--cb-text-xs);\n  line-height: 1.6;\n  font-family: var(--cb-font-mono);\n  white-space: pre;\n  border: 1px solid var(--cb-code-border);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);\n}\n\n.cb-message-content .cb-inline-code {\n  background: var(--cb-primary-a12);\n  color: var(--cb-link-color);\n  padding: 2px 6px;\n  border-radius: 5px;\n  font-size: var(--cb-text-sm);\n  font-family: var(--cb-font-mono);\n  border: 1px solid var(--cb-primary-a16);\n}\n\n.cb-message--user .cb-inline-code {\n  background: rgba(255, 255, 255, 0.2);\n  color: rgba(255, 255, 255, 0.95);\n  border-color: rgba(255, 255, 255, 0.15);\n}\n\n.cb-message-content .cb-link {\n  color: var(--cb-link-color);\n  text-decoration: underline;\n  text-decoration-color: var(--cb-primary-a40);\n  text-underline-offset: 3px;\n  font-weight: 500;\n  word-break: break-all;\n  transition: text-decoration-color 0.15s;\n}\n\n.cb-message-content .cb-link:hover {\n  text-decoration-color: var(--cb-link-color);\n}\n\n.cb-message--user .cb-link {\n  color: rgba(255, 255, 255, 0.92);\n  text-decoration-color: rgba(255, 255, 255, 0.4);\n}\n\n/* Configurar animaci\xF3n de estado escribiendo */\n.cb-typing-wrapper {\n  display: none;\n}\n\n.cb-typing-wrapper.cb-visible {\n  display: flex;\n}\n\n.cb-typing-indicator {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 13px 16px;\n  background: var(--cb-bot-bubble);\n  border-radius: 6px 18px 18px 18px;\n  align-self: flex-start;\n  animation: cb-message-appear 0.25s ease-out both;\n}\n\n.cb-typing-dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--cb-primary);\n  opacity: 0.35;\n  animation: cb-typing-bounce 1.3s infinite ease-in-out;\n}\n\n.cb-typing-dot:nth-child(1) {\n  animation-delay: 0s;\n}\n.cb-typing-dot:nth-child(2) {\n  animation-delay: 0.18s;\n}\n.cb-typing-dot:nth-child(3) {\n  animation-delay: 0.36s;\n}\n\n@keyframes cb-typing-bounce {\n  0%,\n  60%,\n  100% {\n    transform: translateY(0);\n    opacity: 0.35;\n  }\n  30% {\n    transform: translateY(-7px);\n    opacity: 1;\n  }\n}\n\n/* Animar cursor durante el efecto de escritura */\n.cb-streaming-cursor {\n  display: inline-block;\n  width: 6px;\n  height: 15px;\n  background: var(--cb-primary);\n  margin-left: 4px;\n  border-radius: 1px;\n  animation: cb-cursor-blink 0.7s infinite alternate ease-in-out;\n  vertical-align: middle;\n}\n\n@keyframes cb-cursor-blink {\n  0% {\n    opacity: 0.1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n/* Dise\xF1ar zona inferior de composici\xF3n de texto */\n.cb-input-area {\n  display: flex;\n  align-items: flex-end;\n  padding: 8px 12px 12px;\n  background: var(--cb-bg);\n  flex-shrink: 0;\n  position: relative;\n}\n\n/* Agrupar controles de escritura en una sola tarjeta */\n.cb-composer {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n  background: var(--cb-bg);\n  border: 1px solid var(--cb-composer-border);\n  border-radius: 22px;\n  box-shadow: var(--cb-elev-1);\n  position: relative;\n  transition:\n    border-color var(--cb-transition),\n    box-shadow var(--cb-transition);\n}\n\n.cb-composer-row {\n  display: flex;\n  align-items: flex-end;\n  gap: 2px;\n}\n\n.cb-composer:focus-within {\n  border-color: var(--cb-primary-a40);\n  box-shadow:\n    0 0 0 3px var(--cb-primary-a12),\n    var(--cb-elev-1);\n}\n\n/* A\xF1adir borde sutil sobre el \xE1rea de entrada */\n\n#cb-input {\n  flex: 1;\n  min-width: 0;\n  border: none;\n  border-radius: 0;\n  padding: 7px 6px;\n  font-family: var(--cb-font);\n  font-size: var(--cb-font-size-input);\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--cb-text);\n  background: transparent;\n  resize: none;\n  outline: none;\n  min-height: 34px;\n  max-height: 110px;\n  overflow-y: auto;\n  transition:\n    border-color var(--cb-transition),\n    box-shadow var(--cb-transition),\n    background var(--cb-transition);\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  -webkit-font-smoothing: antialiased;\n}\n\n#cb-input::-webkit-scrollbar {\n  display: none;\n}\n\n#cb-input::placeholder {\n  color: var(--cb-text-secondary);\n  opacity: 1;\n  font-weight: 400;\n}\n\n#cb-input:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n#cb-input:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n\n#cb-send-btn {\n  width: var(--cb-input-btn-size);\n  height: var(--cb-input-btn-size);\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n  background: var(--cb-primary);\n  color: white;\n  display: none;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: transform 0.25s var(--cb-ease-spring);\n  position: relative;\n  overflow: hidden;\n}\n\n#cb-send-btn.cb-visible {\n  display: flex;\n  animation: cb-pop-in 0.25s var(--cb-ease-spring) both;\n}\n\n@keyframes cb-pop-in {\n  0% {\n    transform: scale(0.6);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n#cb-send-btn.cb-is-stop {\n  background: var(--cb-text);\n  color: var(--cb-bg);\n  animation: none;\n}\n\n#cb-send-btn.cb-is-stop svg {\n  width: 14px;\n  height: 14px;\n}\n\n#cb-send-btn.cb-is-stop:hover {\n  background: var(--cb-text);\n  opacity: 0.85;\n}\n\n#cb-send-btn:not(:disabled):not(.cb-is-stop):hover {\n  background: var(--cb-primary-hover);\n}\n\n#cb-send-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n\n#cb-send-btn svg {\n  width: var(--cb-icon-size-sm);\n  height: var(--cb-icon-size-sm);\n  margin-left: 0;\n  transition: transform 0.2s;\n}\n\n/* Dise\xF1ar vista de presentaci\xF3n inicial del asistente */\n.cb-agent-intro {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 28px 20px 8px;\n  gap: 6px;\n  flex-shrink: 0;\n}\n\n.cb-agent-intro-avatar {\n  position: relative;\n  width: 64px;\n  height: 64px;\n  margin-bottom: 6px;\n  border-radius: 50%;\n  overflow: hidden;\n  background: var(--cb-primary-a12);\n  border: none;\n  box-shadow:\n    0 0 0 4px var(--cb-bg),\n    0 0 0 5px var(--cb-border);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n.cb-agent-intro-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.cb-agent-intro-avatar svg {\n  width: 36px;\n  height: 36px;\n  color: var(--cb-primary);\n}\n\n/* Mostrar video en bucle al pasar el cursor sobre el avatar de presentaci\xF3n */\n.cb-agent-intro-video {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.cb-agent-intro-avatar.cb-is-playing img {\n  opacity: 0;\n}\n\n.cb-agent-intro-avatar.cb-is-playing .cb-agent-intro-video {\n  opacity: 1;\n}\n\n.cb-agent-intro-name {\n  font-family: var(--cb-font);\n  font-size: var(--cb-text-lg);\n  font-weight: 700;\n  color: var(--cb-text);\n  letter-spacing: -0.02em;\n  margin: 0;\n  line-height: 1.2;\n}\n\n.cb-agent-intro-subtitle {\n  font-family: var(--cb-font);\n  font-size: var(--cb-text-sm);\n  color: var(--cb-text-secondary);\n  font-weight: 400;\n  margin: 0;\n  line-height: 1.4;\n}\n\n/* Formatear separador de fecha entre mensajes */\n.cb-date-divider {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 6px 0;\n  color: var(--cb-text-secondary);\n  font-size: var(--cb-text-2xs);\n  font-weight: 500;\n}\n\n.cb-date-divider::before,\n.cb-date-divider::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: linear-gradient(\n    90deg,\n    transparent,\n    var(--cb-border),\n    transparent\n  );\n}\n\n/* Ajustar dise\xF1o para dispositivos m\xF3viles */\n@media (max-width: 480px) {\n  #chat-bubble-launcher {\n    bottom: 16px;\n    right: 16px;\n  }\n\n  #chat-bubble-launcher.cb-position--left {\n    left: 16px;\n    right: auto;\n  }\n\n  #chat-bubble-window {\n    width: 100vw;\n    height: 100dvh;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    border-radius: 0;\n    border: none;\n    outline: none;\n  }\n\n  #chat-bubble-window.cb-position--left {\n    left: 0;\n    right: 0;\n  }\n\n  .cb-header {\n    border-radius: 0;\n    /* Igualar el padding inferior al superior (sin contar el safe-area) para que el\n       contenido del header quede centrado verticalmente, no pegado hacia abajo */\n    padding-top: max(10px, env(safe-area-inset-top));\n    padding-bottom: 10px;\n  }\n\n  /* Aumentar el tama\xF1o de los botones del header para facilitar el toque en m\xF3vil */\n  .cb-header-actions {\n    gap: 4px;\n  }\n\n  .cb-header-back-btn,\n  .cb-actions-btn,\n  .cb-close-window-btn {\n    width: 40px;\n    height: 40px;\n  }\n\n  .cb-header-back-btn svg,\n  .cb-actions-btn svg,\n  .cb-close-window-btn svg {\n    width: 20px;\n    height: 20px;\n  }\n\n  .cb-input-area {\n    padding-bottom: max(13px, env(safe-area-inset-bottom));\n  }\n\n  .cb-toggle-size-btn {\n    display: none;\n  }\n}\n\n/* Usar 16px como m\xEDnimo en pantallas t\xE1ctiles para evitar el zoom autom\xE1tico de iOS al enfocar el campo */\n@media (pointer: coarse) {\n  #cb-input {\n    font-size: var(--cb-text-lg);\n  }\n}\n\n/* Configurar estados de foco para navegaci\xF3n por teclado */\n.cb-launcher-btn:focus-visible,\n.cb-actions-btn:focus-visible,\n#cb-send-btn:focus-visible {\n  outline: 2.5px solid var(--cb-primary);\n  outline-offset: 3px;\n}\n\n#chat-bubble-window button:focus-visible,\n.cb-history-item:focus-visible,\n.cb-attachment-thumb:focus-visible {\n  outline: 2px solid var(--cb-link-color);\n  outline-offset: 2px;\n}\n\n#cb-input:focus-visible {\n  outline: none;\n}\n\n/* Dise\xF1ar bot\xF3n flotante para volver al fondo */\n.cb-scroll-bottom-btn {\n  position: absolute;\n  bottom: calc(100% + 12px);\n  left: 50%;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: var(--cb-bg);\n  border: 1px solid var(--cb-border);\n  color: var(--cb-text-secondary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow:\n    0 4px 14px rgba(0, 0, 0, 0.08),\n    0 2px 5px rgba(0, 0, 0, 0.03);\n  z-index: 10;\n  padding: 0;\n\n  /* Configurar transici\xF3n de entrada y salida del bot\xF3n flotante */\n  opacity: 0;\n  transform: translateX(-50%) translateY(8px) scale(0.8);\n  pointer-events: none;\n  transition:\n    opacity 0.22s cubic-bezier(0.4, 0, 0.2, 1),\n    transform 0.22s cubic-bezier(0.4, 0, 0.2, 1),\n    background var(--cb-transition),\n    color var(--cb-transition),\n    box-shadow var(--cb-transition),\n    bottom 0.22s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.cb-scroll-bottom-btn.cb-visible {\n  opacity: 1;\n  transform: translateX(-50%) translateY(0) scale(1);\n  pointer-events: all;\n}\n\n.cb-reply-preview.cb-visible + .cb-input-area .cb-scroll-bottom-btn {\n  bottom: calc(100% + 62px);\n}\n\n.cb-scroll-bottom-btn:hover {\n  background: var(--cb-bg-secondary);\n  color: var(--cb-primary);\n  box-shadow:\n    0 6px 18px rgba(0, 0, 0, 0.12),\n    0 3px 6px rgba(0, 0, 0, 0.05);\n  transform: translateX(-50%) translateY(-2px) scale(1.05);\n}\n\n.cb-scroll-bottom-btn:active {\n  transform: translateX(-50%) translateY(0) scale(0.95);\n}\n\n.cb-scroll-bottom-btn svg {\n  width: var(--cb-icon-size-sm);\n  height: var(--cb-icon-size-sm);\n  transition: transform 0.22s ease;\n}\n\n.cb-scroll-bottom-btn:hover svg {\n  transform: translateY(1.5px);\n}\n\n.cb-scroll-bottom-btn:focus-visible {\n  outline: 2.5px solid var(--cb-primary);\n  outline-offset: 3px;\n}\n\n/* Dise\xF1ar bot\xF3n para adjuntar im\xE1genes */\n.cb-attach-btn {\n  width: var(--cb-input-btn-size);\n  height: var(--cb-input-btn-size);\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n  background: transparent;\n  color: var(--cb-text-secondary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  padding: 0;\n  transition:\n    background-color var(--cb-transition),\n    color var(--cb-transition);\n}\n\n.cb-attach-btn:hover {\n  background: var(--cb-hover);\n  color: var(--cb-primary);\n}\n\n.cb-attach-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.cb-attach-btn svg {\n  width: 17px;\n  height: 17px;\n  min-width: 17px;\n}\n\n/* Ocultar el input de archivo nativo, se activa desde el bot\xF3n "+" */\n.cb-file-input-hidden {\n  display: none;\n}\n\n/* Mostrar la imagen adjunta como chip dentro del composer, antes de enviarla */\n.cb-attachment-preview {\n  max-height: 0;\n  overflow: hidden;\n  opacity: 0;\n  pointer-events: none;\n  transition:\n    max-height 0.22s var(--cb-ease-standard),\n    opacity 0.18s ease;\n}\n\n.cb-attachment-preview.cb-visible {\n  max-height: 80px;\n  opacity: 1;\n  pointer-events: auto;\n}\n\n.cb-attachment-chip {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: fit-content;\n  max-width: 100%;\n  margin: 3px 3px 4px;\n  padding: 6px 34px 6px 6px;\n  border: 1px solid var(--cb-composer-border);\n  border-radius: 14px;\n  background: var(--cb-bg-secondary);\n}\n\n.cb-attachment-thumb {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  background-color: var(--cb-bg);\n  background-size: cover;\n  background-position: center;\n  flex-shrink: 0;\n  box-shadow: inset 0 0 0 1px var(--cb-surface-edge);\n  cursor: zoom-in;\n  transition: transform 0.15s var(--cb-ease-standard);\n}\n\n.cb-attachment-thumb:hover {\n  transform: scale(1.04);\n}\n\n.cb-attachment-info {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  gap: 1px;\n}\n\n.cb-attachment-name {\n  max-width: 200px;\n  font-size: var(--cb-text-sm);\n  font-weight: 600;\n  color: var(--cb-text);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.cb-attachment-hint {\n  font-size: var(--cb-text-2xs);\n  font-weight: 500;\n  color: var(--cb-text-secondary);\n  letter-spacing: 0.02em;\n}\n\n.cb-attachment-remove {\n  position: absolute;\n  top: 6px;\n  right: 6px;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  border: none;\n  background: var(--cb-hover);\n  color: var(--cb-text-secondary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  padding: 0;\n  transition:\n    background-color var(--cb-transition),\n    color var(--cb-transition);\n}\n\n.cb-attachment-remove:hover {\n  background: var(--cb-danger-bg);\n  color: var(--cb-danger);\n}\n\n.cb-attachment-remove svg {\n  width: 12px;\n  height: 12px;\n}\n\n/* Configurar burbuja de imagen enviada por el usuario */\n.cb-message--user .cb-image-message {\n  padding: 4px;\n  max-width: 248px;\n}\n\n.cb-image-message-img {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  max-height: 300px;\n  object-fit: cover;\n  border-radius: 14px 14px 4px 14px;\n  cursor: zoom-in;\n}\n\n/* Redondear tambi\xE9n abajo cuando la imagen lleva texto debajo */\n.cb-image-message-img:not(:last-child) {\n  border-radius: 14px;\n}\n\n/* Estilizar imagen clicable enviada por el bot v\xEDa markdown */\n.cb-image {\n  cursor: pointer;\n}\n\n/* Configurar burbuja propia para el texto, ya que el contenedor de la imagen es transparente */\n.cb-image-message-caption {\n  margin: 0;\n  padding: 7px 10px 5px;\n  color: var(--cb-user-text);\n  font-size: var(--cb-font-size-msg);\n  line-height: 1.45;\n  word-break: break-word;\n}\n\n/* Posicionar mensaje del asistente como referencia de capas */\n.cb-message--bot {\n  position: relative;\n}\n\n/* Configurar barra inferior de mensaje seleccionado */\n\n.cb-reply-preview {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px 8px 10px;\n  background: var(--cb-bg-secondary);\n  border-top: 1px solid var(--cb-border);\n  flex-shrink: 0;\n\n  max-height: 0;\n  overflow: hidden;\n  opacity: 0;\n  pointer-events: none;\n  transition:\n    max-height 0.22s cubic-bezier(0.4, 0, 0.2, 1),\n    opacity 0.18s ease,\n    padding 0.22s ease;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.cb-reply-preview.cb-visible {\n  max-height: 80px;\n  opacity: 1;\n  pointer-events: all;\n  padding: 8px 12px 8px 10px;\n}\n\n/* Dise\xF1ar indicador lateral de cita */\n.cb-reply-bar {\n  width: 3px;\n  min-height: 32px;\n  background: var(--cb-primary);\n  flex-shrink: 0;\n  opacity: 0.7;\n}\n\n.cb-reply-content {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.cb-reply-label {\n  font-size: var(--cb-text-2xs);\n  font-weight: 700;\n  color: var(--cb-primary);\n  letter-spacing: 0.01em;\n}\n\n.cb-reply-text {\n  font-size: var(--cb-text-xs);\n  color: var(--cb-text-secondary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.4;\n}\n\n.cb-reply-cancel {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: var(--cb-text-secondary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  padding: 0;\n  flex-shrink: 0;\n  transition:\n    background var(--cb-transition),\n    color var(--cb-transition);\n}\n\n.cb-reply-cancel:hover {\n  background: var(--cb-border);\n  color: var(--cb-text);\n}\n\n.cb-reply-cancel svg {\n  width: 12px;\n  height: 12px;\n}\n\n/* Formatear bloque de texto citado en la burbuja */\n\n.cb-message-quote {\n  display: flex;\n  align-items: stretch;\n  gap: 7px;\n  margin-bottom: 6px;\n  background: rgba(255, 255, 255, 0.15);\n  padding: 6px 10px;\n  max-width: 100%;\n}\n\n.cb-message-quote-bar {\n  width: 2.5px;\n  background: rgba(255, 255, 255, 0.7);\n  flex-shrink: 0;\n}\n\n.cb-message-quote-text {\n  font-size: var(--cb-text-xs);\n  color: rgba(255, 255, 255, 0.82);\n  line-height: 1.45;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  word-break: break-word;\n}\n\n/* Configurar animaci\xF3n textual de estado pensando */\n.cb-typing-indicator.cb-thinking {\n  gap: 7px;\n  padding: 6px 0;\n  background: transparent;\n  border: none;\n  box-shadow: none;\n  position: relative;\n  overflow: visible;\n}\n\n/* Destello de marca que gira y respira junto al texto de estado */\n.cb-thinking-icon {\n  display: flex;\n  width: 14px;\n  height: 14px;\n  color: var(--cb-link-color);\n  animation: cb-sparkle-think 2.4s var(--cb-ease-standard) infinite;\n}\n\n.cb-thinking-icon svg {\n  width: 100%;\n  height: 100%;\n}\n\n@keyframes cb-sparkle-think {\n  0%,\n  100% {\n    transform: rotate(0deg) scale(0.85);\n    opacity: 0.7;\n  }\n  50% {\n    transform: rotate(90deg) scale(1.1);\n    opacity: 1;\n  }\n}\n\n.cb-thinking-text {\n  font-size: var(--cb-text-md);\n  font-weight: 500;\n  background: var(--cb-thinking-gradient);\n  background-size: 200% auto;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  color: transparent;\n  animation:\n    cb-shimmer-text 1.6s linear infinite,\n    cb-step-in 0.32s var(--cb-ease-standard) both;\n  display: inline-block;\n  letter-spacing: 0.2px;\n}\n\n@keyframes cb-shimmer-text {\n  to {\n    background-position: 200% center;\n  }\n}\n\n/* Entrar cada etapa nueva con un fundido ascendente */\n@keyframes cb-step-in {\n  from {\n    opacity: 0;\n    transform: translateY(4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n/* Anillo de marca girando alrededor del avatar mientras el asistente procesa */\n.cb-typing-wrapper .cb-msg-avatar {\n  position: relative;\n  overflow: visible;\n}\n\n.cb-typing-wrapper .cb-msg-avatar img {\n  border-radius: 50%;\n}\n\n.cb-typing-wrapper.cb-visible .cb-msg-avatar::before {\n  content: "";\n  position: absolute;\n  inset: -3px;\n  border-radius: 50%;\n  background: conic-gradient(\n    from 0deg,\n    var(--cb-link-color),\n    var(--cb-primary-a12) 40%,\n    transparent 60%,\n    var(--cb-link-color)\n  );\n  -webkit-mask: radial-gradient(\n    farthest-side,\n    transparent calc(100% - 2px),\n    #000 calc(100% - 2px)\n  );\n  mask: radial-gradient(\n    farthest-side,\n    transparent calc(100% - 2px),\n    #000 calc(100% - 2px)\n  );\n  animation: cb-ring-spin 1.2s linear infinite;\n}\n\n@keyframes cb-ring-spin {\n  to {\n    transform: rotate(1turn);\n  }\n}\n\n/* Ocultar visualmente texto destinado solo a lectores de pantalla */\n.cb-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  white-space: nowrap;\n}\n\n/* Dise\xF1ar bot\xF3n para activar grabaci\xF3n de voz */\n.cb-mic-btn {\n  width: var(--cb-input-btn-size);\n  height: var(--cb-input-btn-size);\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n  background: transparent;\n  color: var(--cb-text-secondary);\n  display: none;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  padding: 0;\n\n  transition:\n    background-color var(--cb-transition),\n    color var(--cb-transition);\n}\n\n.cb-mic-btn.cb-visible {\n  display: flex;\n  animation: cb-pop-in 0.25s var(--cb-ease-spring) both;\n}\n\n.cb-mic-btn:hover {\n  background: var(--cb-hover);\n  color: var(--cb-primary);\n}\n\n.cb-mic-btn svg {\n  width: 17px;\n  height: 17px;\n  min-width: 17px;\n}\n\n/* Configurar interfaz superpuesta durante grabaci\xF3n */\n.cb-recording-ui {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 5px;\n  background: var(--cb-bg);\n  border-radius: inherit;\n  z-index: 5;\n  opacity: 0;\n  transform: scale(0.98);\n  pointer-events: none;\n  transition:\n    opacity 0.2s var(--cb-ease-standard),\n    transform 0.2s var(--cb-ease-standard);\n}\n\n.cb-recording-ui.cb-visible {\n  opacity: 1;\n  transform: scale(1);\n  pointer-events: auto;\n}\n\n/* Descartar: bot\xF3n fantasma con \xEDcono de basura */\n.cb-recording-cancel {\n  width: var(--cb-input-btn-size);\n  height: var(--cb-input-btn-size);\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: var(--cb-text-secondary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  padding: 0;\n  flex-shrink: 0;\n  transition:\n    background var(--cb-transition),\n    color var(--cb-transition);\n}\n\n.cb-recording-cancel:hover {\n  background: var(--cb-danger-bg);\n  color: var(--cb-danger);\n}\n\n.cb-recording-cancel svg {\n  width: 17px;\n  height: 17px;\n}\n\n.cb-recording-status {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  flex-shrink: 0;\n}\n\n/* Punto de grabaci\xF3n con halo pulsante */\n.cb-recording-dot {\n  position: relative;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--cb-danger);\n  flex-shrink: 0;\n}\n\n.cb-recording-dot::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  background: var(--cb-danger);\n  animation: cb-rec-halo 1.4s ease-out infinite;\n}\n\n@keyframes cb-rec-halo {\n  from {\n    transform: scale(1);\n    opacity: 0.55;\n  }\n  to {\n    transform: scale(2.6);\n    opacity: 0;\n  }\n}\n\n.cb-recording-timer {\n  min-width: 30px;\n  font-size: var(--cb-text-sm);\n  font-weight: 600;\n  color: var(--cb-text);\n  font-variant-numeric: tabular-nums;\n  transition: color var(--cb-transition);\n}\n\n/* Avisar en rojo los \xFAltimos segundos antes del l\xEDmite */\n.cb-recording-ui.cb-is-ending .cb-recording-timer {\n  color: var(--cb-danger);\n}\n\n/* Onda desplazable: barras fijas escaladas verticalmente */\n.cb-recording-wave {\n  flex: 1;\n  min-width: 0;\n  height: 26px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 2px;\n  overflow: hidden;\n  -webkit-mask-image: linear-gradient(to right, transparent, #000 18%);\n  mask-image: linear-gradient(to right, transparent, #000 18%);\n}\n\n.cb-recording-bar {\n  flex-shrink: 0;\n  width: 3px;\n  height: 100%;\n  border-radius: 3px;\n  background: var(--cb-composer-border);\n  transform: scaleY(0.12);\n  transition:\n    transform 0.08s linear,\n    background 0.2s ease;\n}\n\n.cb-recording-bar.cb-is-on {\n  background: var(--cb-link-color);\n}\n\n/* Enviar con anillo de progreso hacia el l\xEDmite de duraci\xF3n */\n.cb-recording-send {\n  position: relative;\n  width: var(--cb-input-btn-size);\n  height: var(--cb-input-btn-size);\n  border-radius: 50%;\n  border: none;\n  background: var(--cb-primary);\n  color: var(--cb-primary-text);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  padding: 0;\n  flex-shrink: 0;\n  overflow: visible;\n  transition: background var(--cb-transition);\n}\n\n.cb-recording-send:hover {\n  background: var(--cb-primary-hover);\n}\n\n.cb-recording-send > svg:not(.cb-recording-ring) {\n  width: var(--cb-icon-size-sm);\n  height: var(--cb-icon-size-sm);\n}\n\n.cb-recording-ring {\n  position: absolute;\n  inset: -4px;\n  width: calc(100% + 8px);\n  height: calc(100% + 8px);\n  transform: rotate(-90deg);\n  pointer-events: none;\n}\n\n.cb-recording-ring circle {\n  fill: none;\n  stroke-width: 2;\n}\n\n.cb-recording-ring-track {\n  stroke: var(--cb-primary-a16);\n}\n\n.cb-recording-ring-fill {\n  stroke: var(--cb-link-color);\n  stroke-linecap: round;\n  stroke-dasharray: 100;\n  stroke-dashoffset: 100;\n  transition: stroke var(--cb-transition);\n}\n\n.cb-recording-ui.cb-is-live .cb-recording-ring-fill {\n  animation: cb-rec-ring var(--cb-rec-max, 30s) linear forwards;\n}\n\n.cb-recording-ui.cb-is-ending .cb-recording-ring-fill {\n  stroke: var(--cb-danger);\n}\n\n@keyframes cb-rec-ring {\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .cb-recording-dot::after {\n    animation: none;\n  }\n  .cb-recording-bar {\n    transition: none;\n  }\n}\n\n/* Configurar reproductor de audio compacto en burbuja */\n.cb-message--user .cb-audio-player {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 10px 8px 8px;\n  width: 268px;\n  max-width: 100%;\n}\n\n.cb-audio-play-btn {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: none;\n  background: #fff;\n  color: var(--cb-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  padding: 0;\n  flex-shrink: 0;\n  box-shadow: 0 2px 6px rgba(16, 10, 30, 0.18);\n  transition: transform 0.15s var(--cb-ease-spring);\n}\n\n.cb-audio-play-btn:hover {\n  transform: scale(1.06);\n}\n\n.cb-audio-play-btn:active {\n  transform: scale(0.94);\n}\n\n.cb-audio-play-btn svg {\n  width: 16px;\n  height: 16px;\n}\n\n/* Onda en dos capas: la reproducida se recorta seg\xFAn --p para un avance continuo */\n.cb-audio-wave {\n  --p: 0%;\n  position: relative;\n  flex: 1;\n  min-width: 0;\n  height: 28px;\n  cursor: pointer;\n  touch-action: none;\n  border-radius: 4px;\n}\n\n.cb-audio-wave:focus-visible {\n  outline: 2px solid rgba(255, 255, 255, 0.9);\n  outline-offset: 3px;\n}\n\n.cb-audio-wave-layer {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.cb-audio-wave-layer--played {\n  clip-path: inset(0 calc(100% - var(--p)) 0 0);\n}\n\n.cb-audio-wave-bar {\n  width: 3px;\n  height: calc(var(--h, 0.4) * 100%);\n  min-height: 3px;\n  border-radius: 3px;\n  background: rgba(255, 255, 255, 0.38);\n  transition: height 0.35s var(--cb-ease-standard);\n}\n\n.cb-audio-wave-layer--played .cb-audio-wave-bar {\n  background: #fff;\n}\n\n/* Perilla de posici\xF3n: aparece al iniciar la reproducci\xF3n o al buscar */\n.cb-audio-knob {\n  position: absolute;\n  top: 50%;\n  left: var(--p);\n  width: 12px;\n  height: 12px;\n  margin: -6px 0 0 -6px;\n  border-radius: 50%;\n  background: #fff;\n  box-shadow: 0 1px 4px rgba(16, 10, 30, 0.35);\n  transform: scale(0);\n  transition: transform 0.18s var(--cb-ease-spring);\n  pointer-events: none;\n}\n\n.cb-audio-wave.cb-is-started .cb-audio-knob,\n.cb-audio-wave:hover .cb-audio-knob,\n.cb-audio-wave:focus-visible .cb-audio-knob {\n  transform: scale(1);\n}\n\n.cb-audio-wave.cb-is-seeking .cb-audio-knob {\n  transform: scale(1.25);\n}\n\n/* Control de velocidad tipo p\xEDldora */\n.cb-audio-speed {\n  flex-shrink: 0;\n  min-width: 36px;\n  padding: 2px 8px;\n  border: none;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.2);\n  color: #fff;\n  font-family: var(--cb-font);\n  font-size: var(--cb-text-2xs);\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n  line-height: 1.6;\n  cursor: pointer;\n  transition: background var(--cb-transition);\n}\n\n.cb-audio-speed:hover {\n  background: rgba(255, 255, 255, 0.32);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .cb-audio-wave-bar,\n  .cb-audio-knob {\n    transition: none;\n  }\n}\n\n/* ==========================================================================\n   Panel de Conversaciones Pasadas (Historial)\n   ========================================================================== */\n\n.cb-actions-btn.cb-is-active {\n  background: var(--cb-primary-a12) !important;\n  color: var(--cb-link-color) !important;\n}\n\n.cb-history-panel {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  background: var(--cb-bg);\n  transform: translateX(-100%);\n  transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 9;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n\n.cb-history-panel.cb-is-active {\n  transform: translateX(0);\n}\n\n.cb-messages.cb-history-active {\n  transform: translateX(100%);\n}\n\n/* Ocultar el input de mensajes mientras el panel de historial est\xE1 abierto */\n#chat-bubble-window.cb-history-open .cb-input-area {\n  display: none;\n}\n\n.cb-history-panel-top {\n  flex-shrink: 0;\n  padding: 12px 12px 4px;\n}\n\n.cb-history-new-btn {\n  width: 100%;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  border: 1px solid var(--cb-composer-border);\n  border-radius: 12px;\n  background: var(--cb-bg);\n  color: var(--cb-text);\n  font-family: var(--cb-font);\n  font-size: var(--cb-text-sm);\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: var(--cb-elev-1);\n  transition:\n    border-color var(--cb-transition),\n    background var(--cb-transition),\n    color var(--cb-transition);\n}\n\n.cb-history-new-btn:hover {\n  border-color: var(--cb-primary-a40);\n  background: var(--cb-primary-a04);\n  color: var(--cb-link-color);\n}\n\n.cb-history-new-btn svg {\n  width: 18px;\n  height: 18px;\n}\n\n.cb-history-list {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 6px 0 12px;\n  scrollbar-width: thin;\n  scrollbar-color: var(--cb-scrollbar-color) var(--cb-scrollbar-track);\n}\n\n.cb-history-list::-webkit-scrollbar {\n  width: var(--cb-scrollbar-width);\n}\n.cb-history-list::-webkit-scrollbar-track {\n  background: var(--cb-scrollbar-track);\n}\n.cb-history-list::-webkit-scrollbar-thumb {\n  background: var(--cb-scrollbar-color);\n  border-radius: 100px;\n}\n\n/* Formatear etiqueta de grupo de fecha */\n.cb-history-group-label {\n  font-family: var(--cb-font);\n  font-size: var(--cb-text-2xs);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--cb-text-secondary);\n  padding: 14px 20px 6px;\n}\n\n.cb-history-group:first-child .cb-history-group-label {\n  padding-top: 8px;\n}\n\n.cb-history-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 2px 8px;\n  padding: 10px 12px;\n  cursor: pointer;\n  border-radius: 12px;\n  transition: background var(--cb-transition);\n  position: relative;\n  box-sizing: border-box;\n}\n\n\n.cb-history-item:hover {\n  background: var(--cb-hover);\n}\n\n.cb-history-item--active {\n  background: var(--cb-primary-a08) !important;\n  cursor: default;\n  pointer-events: none;\n}\n\n/* Dise\xF1ar estado de confirmaci\xF3n de borrado */\n.cb-history-item--confirming {\n  background: var(--cb-bg) !important;\n  cursor: default;\n}\n\n.cb-history-item--confirming .cb-history-item-content {\n  opacity: 0;\n  pointer-events: none;\n}\n\n.cb-history-item--confirming .cb-history-item-delete {\n  display: none !important;\n}\n\n/* Confirmar el borrado en l\xEDnea, sobre el propio \xEDtem */\n.cb-history-item-confirm {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 0 8px 0 12px;\n  border-radius: inherit;\n  background: var(--cb-danger-bg);\n  box-shadow: inset 0 0 0 1px var(--cb-error-border);\n  animation: cb-confirm-fade-in 0.16s var(--cb-ease-standard);\n}\n\n@keyframes cb-confirm-fade-in {\n  from {\n    opacity: 0;\n    transform: scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n.cb-history-item-confirm-text {\n  min-width: 0;\n  font-family: var(--cb-font);\n  font-size: var(--cb-text-sm);\n  font-weight: 600;\n  color: var(--cb-text);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.cb-history-item-confirm-actions {\n  display: flex;\n  gap: 6px;\n  flex-shrink: 0;\n}\n\n/* Botones de confirmaci\xF3n: secundario neutro y primario destructivo */\n.cb-history-item-confirm-no,\n.cb-history-item-confirm-yes {\n  font-family: var(--cb-font);\n  font-size: var(--cb-text-xs);\n  font-weight: 600;\n  line-height: 1;\n  border-radius: 8px;\n  padding: 7px 12px;\n  cursor: pointer;\n  transition:\n    background var(--cb-transition),\n    border-color var(--cb-transition),\n    color var(--cb-transition),\n    box-shadow var(--cb-transition);\n}\n\n.cb-history-item-confirm-no {\n  background: var(--cb-bg);\n  border: 1px solid var(--cb-composer-border);\n  color: var(--cb-text);\n}\n\n.cb-history-item-confirm-no:hover {\n  background: var(--cb-hover);\n}\n\n.cb-history-item-confirm-yes {\n  background: var(--cb-danger);\n  border: 1px solid var(--cb-danger);\n  color: #fff;\n  box-shadow: 0 1px 2px rgba(220, 38, 38, 0.3);\n}\n\n.cb-history-item-confirm-yes:hover {\n  background: #dc2626;\n  border-color: #dc2626;\n}\n\n.cb-history-item-content {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  transition: opacity var(--cb-transition);\n}\n\n.cb-history-item-title-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n  min-height: 20px;\n}\n\n/* Marcar la conversaci\xF3n actual con un punto de marca en lugar de un badge */\n.cb-history-item--active .cb-history-item-title-row::before {\n  content: "";\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--cb-link-color);\n  flex-shrink: 0;\n}\n\n.cb-history-item-title {\n  flex: 1;\n  min-width: 0;\n  font-family: var(--cb-font);\n  font-weight: 600;\n  font-size: var(--cb-text-sm);\n  color: var(--cb-text);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.35;\n}\n\n.cb-history-item-time {\n  flex-shrink: 0;\n  font-family: var(--cb-font);\n  font-size: var(--cb-text-2xs);\n  font-weight: 500;\n  color: var(--cb-text-secondary);\n  font-variant-numeric: tabular-nums;\n}\n\n.cb-history-item-preview {\n  font-family: var(--cb-font);\n  font-size: var(--cb-text-xs);\n  color: var(--cb-text-secondary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.4;\n}\n\n.cb-history-item--active .cb-history-item-preview {\n  padding-left: 15px;\n}\n\n/* Mostrar el bot\xF3n de eliminar en lugar de la hora al pasar el cursor o enfocar */\n.cb-history-item-delete {\n  display: none;\n  width: 26px;\n  height: 26px;\n  margin: -3px -4px -3px 0;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  background: transparent;\n  color: var(--cb-text-secondary);\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition:\n    background var(--cb-transition),\n    color var(--cb-transition);\n}\n\n@media (hover: hover) {\n  .cb-history-item:hover .cb-history-item-time,\n  .cb-history-item:focus-within .cb-history-item-time {\n    display: none;\n  }\n\n  .cb-history-item:hover .cb-history-item-delete,\n  .cb-history-item:focus-within .cb-history-item-delete {\n    display: flex;\n  }\n}\n\n/* Mantener visible el bot\xF3n de eliminar en pantallas t\xE1ctiles */\n@media (hover: none) {\n  .cb-history-item-delete {\n    display: flex;\n  }\n}\n\n.cb-history-item-delete:hover {\n  background: color-mix(in srgb, var(--cb-danger) 10%, transparent);\n  color: var(--cb-danger);\n}\n\n.cb-history-item-delete svg {\n  width: 15px;\n  height: 15px;\n}\n\n/* Animar la entrada escalonada de los \xEDtems al abrir el panel */\n.cb-history-list.cb-is-entering .cb-history-item {\n  animation: cb-message-appear 0.28s ease-out var(--cb-item-delay, 0ms) both;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .cb-history-list.cb-is-entering .cb-history-item {\n    animation: none;\n  }\n}\n\n/* Aplicar animaci\xF3n de barrido al eliminar un \xEDtem */\n@keyframes cb-item-swipe-out {\n  0% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  25% {\n    transform: translateX(-6px);\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(110%);\n    opacity: 0;\n  }\n}\n\n.cb-history-item--removing {\n  animation: cb-item-swipe-out 0.32s cubic-bezier(0.55, 0, 0.75, 0.1)\n    var(--cb-swipe-delay, 0ms) both;\n  pointer-events: none;\n}\n\n/* Estilizar footer con acci\xF3n global de borrado */\n.cb-history-panel-footer.cb-is-hidden {\n  display: none;\n}\n\n.cb-history-panel-footer {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px var(--cb-spacing);\n  border-top: 1px solid var(--cb-border);\n  background: var(--cb-bg);\n  box-sizing: border-box;\n  min-height: 48px;\n}\n\n.cb-history-clear-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-family: var(--cb-font);\n  font-size: var(--cb-text-sm);\n  font-weight: 500;\n  color: var(--cb-text-secondary);\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 5px 8px;\n  border-radius: 7px;\n  transition:\n    color var(--cb-transition),\n    background var(--cb-transition);\n}\n\n.cb-history-clear-btn:hover {\n  color: var(--cb-danger);\n  background: rgba(239, 68, 68, 0.08);\n}\n\n.cb-history-clear-btn svg {\n  width: 14px;\n  height: 14px;\n  flex-shrink: 0;\n}\n\n/* Dise\xF1ar modal superpuesto de confirmaci\xF3n para "Borrar todo" */\n.cb-clear-all-overlay {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  box-sizing: border-box;\n  background: rgba(16, 10, 30, 0.4);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  z-index: 20;\n  opacity: 0;\n  transition: opacity 0.18s ease;\n}\n\n.cb-clear-all-overlay.cb-is-hidden {\n  display: none;\n}\n\n.cb-clear-all-overlay.cb-is-active {\n  opacity: 1;\n}\n\n.cb-clear-all-dialog {\n  width: 100%;\n  max-width: 300px;\n  background: var(--cb-bg);\n  border-radius: var(--cb-radius);\n  box-shadow:\n    var(--cb-elev-3),\n    0 0 0 1px var(--cb-surface-edge);\n  padding: 24px 20px 20px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  transform: translateY(8px) scale(0.96);\n  transition: transform 0.2s var(--cb-ease-out-spring, ease);\n}\n\n.cb-clear-all-dialog:focus {\n  outline: none;\n}\n\n.cb-clear-all-overlay.cb-is-active .cb-clear-all-dialog {\n  transform: translateY(0) scale(1);\n}\n\n.cb-clear-all-icon {\n  width: 44px;\n  height: 44px;\n  margin-bottom: 14px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--cb-danger-bg);\n  color: var(--cb-danger);\n  box-shadow: 0 0 0 6px color-mix(in srgb, var(--cb-danger-bg) 50%, transparent);\n}\n\n.cb-clear-all-icon svg {\n  width: 20px;\n  height: 20px;\n}\n\n.cb-clear-all-text {\n  margin: 0;\n  font-family: var(--cb-font);\n  font-size: var(--cb-text-lg);\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: var(--cb-text);\n}\n\n.cb-clear-all-desc {\n  margin: 6px 0 0;\n  font-family: var(--cb-font);\n  font-size: var(--cb-text-sm);\n  line-height: 1.5;\n  color: var(--cb-text-secondary);\n}\n\n.cb-clear-all-actions {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  width: 100%;\n  margin-top: 20px;\n}\n\n.cb-clear-all-actions .cb-history-item-confirm-no,\n.cb-clear-all-actions .cb-history-item-confirm-yes {\n  padding: 10px 14px;\n  border-radius: 10px;\n  font-size: var(--cb-text-sm);\n}\n\n/* Configurar estado vac\xEDo mejorado */\n.cb-history-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 48px var(--cb-spacing) 32px;\n  text-align: center;\n}\n\n.cb-history-empty-icon {\n  width: 48px;\n  height: 48px;\n  color: var(--cb-text-secondary);\n  opacity: 0.35;\n}\n\n.cb-history-empty-icon svg {\n  width: 100%;\n  height: 100%;\n}\n\n.cb-history-empty-title {\n  font-family: var(--cb-font);\n  font-size: var(--cb-text-md);\n  font-weight: 600;\n  color: var(--cb-text);\n  opacity: 0.6;\n  margin: 0;\n}\n\n.cb-history-empty-sub {\n  font-family: var(--cb-font);\n  font-size: var(--cb-text-xs);\n  color: var(--cb-text-secondary);\n  opacity: 0.7;\n  margin: 0;\n  line-height: 1.5;\n}\n\n/* Dise\xF1ar lightbox para vista ampliada de im\xE1genes ya publicadas en la conversaci\xF3n */\n.cb-lightbox-dialog {\n  margin: auto;\n  position: fixed;\n  inset: 0;\n  background-color: transparent;\n  border: none;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  padding: 1rem;\n  box-sizing: border-box;\n  opacity: 0;\n  transform: scale(0.92);\n  transition:\n    opacity 0.25s ease,\n    transform 0.25s ease,\n    display 0.25s ease allow-discrete,\n    overlay 0.25s ease allow-discrete;\n  z-index: calc(var(--cb-z-index) + 10);\n}\n\n.cb-lightbox-dialog:not([open]) {\n  pointer-events: none;\n}\n\n.cb-lightbox-dialog[open] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 1;\n  transform: scale(1);\n}\n\n.cb-lightbox-dialog::backdrop {\n  background-color: rgba(20, 16, 32, 0.6);\n  -webkit-backdrop-filter: blur(0.25rem);\n  backdrop-filter: blur(0.25rem);\n  opacity: 0;\n  transition:\n    opacity 0.25s ease,\n    backdrop-filter 0.25s ease,\n    display 0.25s ease allow-discrete,\n    overlay 0.25s ease allow-discrete;\n}\n\n.cb-lightbox-dialog[open]::backdrop {\n  opacity: 1;\n}\n\n/* Proveer fallback para navegadores (como Firefox) que no soportan @starting-style */\n.cb-lightbox-dialog[open].is-opening {\n  opacity: 0;\n  transform: scale(0.92);\n}\n\n.cb-lightbox-dialog[open].is-opening::backdrop {\n  opacity: 0;\n}\n\n.cb-lightbox-dialog.is-closing {\n  opacity: 0;\n  transform: scale(0.92);\n}\n\n.cb-lightbox-dialog.is-closing::backdrop {\n  opacity: 0;\n}\n\n.cb-lightbox-dialog img {\n  max-width: 80vw;\n  max-height: 80vh;\n  object-fit: contain;\n  border-radius: var(--cb-radius, 12px);\n  box-shadow: var(--cb-shadow);\n}\n\n.cb-lightbox-close-btn {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background: rgba(255, 255, 255, 0.15);\n  color: #fff;\n  border-radius: 50%;\n  width: 2.2rem;\n  height: 2.2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border: none;\n  z-index: 10;\n  transition:\n    background-color 0.2s,\n    color 0.2s;\n}\n\n.cb-lightbox-close-btn:hover {\n  background: rgba(255, 255, 255, 0.28);\n}\n\n/* Dise\xF1ar zona de arrastrar y soltar una imagen sobre la ventana del chat */\n.cb-dropzone-overlay {\n  position: absolute;\n  inset: 0;\n  z-index: var(--cb-z-index);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  background: var(--cb-bg);\n  border: 2px dashed var(--cb-primary);\n  border-radius: var(--cb-radius);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity var(--cb-transition);\n}\n\n.cb-dropzone-overlay.cb-visible {\n  opacity: 1;\n}\n\n.cb-dropzone-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  color: var(--cb-primary);\n  font-family: var(--cb-font);\n  font-size: var(--cb-text-md);\n  font-weight: 600;\n  text-align: center;\n}\n\n.cb-dropzone-content svg {\n  width: 32px;\n  height: 32px;\n}\n';

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
function extractImagesAndLinks(text, blocks) {
  let result = text;
  const markdownImageRegex = /!\[([^\]]*)\]\(((?:[^()\s]|\([^()]*\))*)\)/g;
  result = result.replace(markdownImageRegex, (_, altText, url) => {
    const cleanUrl = sanitizeUrl(url);
    const html = `<img src="${cleanUrl}" alt="${altText}" class="cb-image" style="max-width: 100%; border-radius: var(--cb-radius, 12px); margin: 8px 0; display: block;" loading="lazy" />`;
    const index = blocks.length;
    blocks.push(html);
    return `\0LINK${index}\0`;
  });
  const markdownLinkRegex = /\[([^\]]+)\]\(((?:[^()\s]|\([^()]*\))*)\)/g;
  result = result.replace(markdownLinkRegex, (_, linkText, url) => {
    const cleanUrl = sanitizeUrl(url);
    const target = cleanUrl.includes("ayuda.aliaddo.com") ? "_self" : "_blank";
    const processedText = parseInlineStyles(linkText);
    const html = `<a href="${cleanUrl}" target="${target}" rel="noopener noreferrer" class="cb-link">${processedText}</a>`;
    const index = blocks.length;
    blocks.push(html);
    return `\0LINK${index}\0`;
  });
  return result;
}
function restoreImagesAndLinks(text, blocks) {
  let result = text;
  blocks.forEach((html, i) => {
    result = result.replace(`\0LINK${i}\0`, html);
  });
  return result;
}
function parseInline(text) {
  const linkBlocks = [];
  let processed = extractImagesAndLinks(text, linkBlocks);
  processed = parseInlineStyles(processed);
  processed = linkifyUrls(processed);
  processed = restoreImagesAndLinks(processed, linkBlocks);
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
var DEFAULT_TIMEOUT = 9e4;
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
    return "La respuesta est\xE1 tardando m\xE1s de lo normal. Int\xE9ntalo de nuevo en unos segundos.";
  }
  if (error.name === "TypeError") {
    return "No se pudo establecer conexi\xF3n. Verifica tu conexi\xF3n a internet e int\xE9ntalo de nuevo.";
  }
  return "Ocurri\xF3 un problema al enviar tu mensaje. Int\xE9ntalo de nuevo.";
}
function friendlyStatusError(status) {
  if (status === 401 || status === 403) {
    return "No tienes permiso para usar el asistente en este momento. Contacta al administrador del sitio.";
  }
  if (status === 404) {
    return "El asistente no est\xE1 disponible en este momento. Contacta al administrador del sitio.";
  }
  if (status === 429) {
    return "Est\xE1s enviando mensajes muy r\xE1pido. Espera un momento antes de volver a intentarlo.";
  }
  if (status >= 500) {
    return "El asistente no est\xE1 disponible en este momento. Int\xE9ntalo de nuevo en unos minutos.";
  }
  return "Ocurri\xF3 un problema al procesar tu mensaje. Int\xE9ntalo de nuevo.";
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
    throw new Error("El asistente no est\xE1 disponible en este momento. Contacta al administrador del sitio.");
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
    throw new Error(friendlyStatusError(response.status));
  }
  let data;
  try {
    data = await response.json();
  } catch (error) {
    throw new Error("No se pudo obtener una respuesta v\xE1lida. Int\xE9ntalo de nuevo.");
  }
  if (!data || typeof data.output === "undefined") {
    const possibleOutput = data?.message || data?.text || data?.response || data?.content;
    if (possibleOutput) {
      return {
        output: String(possibleOutput),
        sessionId: data.sessionId || sessionId
      };
    }
    throw new Error("No se pudo obtener una respuesta v\xE1lida. Int\xE9ntalo de nuevo.");
  }
  return {
    output: String(data.output),
    sessionId: data.sessionId || sessionId
  };
}
async function sendImageMessage(webhookUrl, imageFile, sessionId, caption = "", extraMetadata = {}, timeout = DEFAULT_TIMEOUT, signal = null) {
  if (!webhookUrl) {
    throw new Error("El asistente no est\xE1 disponible en este momento. Contacta al administrador del sitio.");
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
    throw new Error(friendlyStatusError(response.status));
  }
  let data;
  try {
    data = await response.json();
  } catch (_) {
    throw new Error("No se pudo obtener una respuesta v\xE1lida. Int\xE9ntalo de nuevo.");
  }
  if (!data || typeof data.output === "undefined") {
    const possibleOutput = data?.message || data?.text || data?.response || data?.content;
    if (possibleOutput) {
      return { output: String(possibleOutput), sessionId: data.sessionId || sessionId };
    }
    throw new Error("No se pudo obtener una respuesta v\xE1lida. Int\xE9ntalo de nuevo.");
  }
  return {
    output: String(data.output),
    sessionId: data.sessionId || sessionId
  };
}
async function sendAudioMessage(webhookUrl, audioBlob, sessionId, duration, mimeType = "audio/webm", extraMetadata = {}, timeout = DEFAULT_TIMEOUT, signal = null) {
  if (!webhookUrl) {
    throw new Error("El asistente no est\xE1 disponible en este momento. Contacta al administrador del sitio.");
  }
  const filename = `voice_${Date.now()}.mp3`;
  const outgoingMimeType = "audio/mpeg";
  const outgoingBlob = new Blob([audioBlob], { type: outgoingMimeType });
  const formData = new FormData();
  formData.append("sessionId", sessionId);
  formData.append(
    "metadata",
    JSON.stringify({
      type: "audio",
      duration,
      mimeType: outgoingMimeType,
      filename,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      source: "chat-bubble",
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "unknown",
      ...extraMetadata
    })
  );
  formData.append("data", outgoingBlob, filename);
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
    throw new Error(friendlyStatusError(response.status));
  }
  let data;
  try {
    data = await response.json();
  } catch (_) {
    throw new Error("No se pudo obtener una respuesta v\xE1lida. Int\xE9ntalo de nuevo.");
  }
  if (!data || typeof data.output === "undefined") {
    const possibleOutput = data?.message || data?.text || data?.response || data?.content;
    if (possibleOutput) {
      return { output: String(possibleOutput), sessionId: data.sessionId || sessionId };
    }
    throw new Error("No se pudo obtener una respuesta v\xE1lida. Int\xE9ntalo de nuevo.");
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
    typingText: "Escribiendo...",
    statusText: "En l\xEDnea",
    inputPlaceholder: null,
    suggestions: [],
    thinkingSteps: [
      { after: 3e3, text: "Pensando\u2026" },
      { after: 8e3, text: "Revisando la informaci\xF3n\u2026" },
      { after: 15e3, text: "Preparando tu respuesta\u2026" },
      { after: 3e4, text: "Est\xE1 tardando m\xE1s de lo normal\u2026" }
    ]
  },
  style: {
    primaryColor: "#572b86",
    textColor: "#ffffff",
    position: "right",
    borderRadius: "18px",
    fontFamily: "inherit",
    theme: "auto"
  },
  behavior: {
    openOnLoad: false,
    showTimestamps: true,
    enableSoundNotification: false,
    maxMessageLength: 1e3,
    requestTimeout: 9e4,
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
    this._waitTimers = [];
    this._stopRequested = false;
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
    this._showSuggestions();
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
            <div class="cb-typing-indicator" role="status" aria-live="polite"></div>
          </div>
        </div>
      </div>

      <div class="cb-history-panel" id="cb-history-panel" aria-hidden="true">
        <div class="cb-history-panel-top">
          <button class="cb-history-new-btn" id="cb-history-new-btn">
            ${ICONS.newSession}
            <span>Nueva conversaci\xF3n</span>
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
          <p class="cb-clear-all-text" id="cb-clear-all-text">\xBFBorrar todas las conversaciones?</p>
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
              placeholder="${this._escapeAttr(this.config.bot.inputPlaceholder || `Preg\xFAntale a ${this.config.bot.name}`)}"
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
    this.attachmentMeta = this.shadowRoot.getElementById("cb-attachment-meta");
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
    this.headerBackBtn = this.shadowRoot.getElementById("cb-header-back-btn");
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
        (e) => this._openClearAllModal(e.detail === 0)
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
    this.sendBtn.addEventListener(
      "click",
      () => this.isLoading ? this._stopResponse() : this._handleSend()
    );
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
      "cb-close-window-btn"
    );
    if (closeWindowBtn) {
      closeWindowBtn.addEventListener("click", () => this._closeChat());
    }
    if (this._audioSupported && this.micBtn) {
      this.micBtn.addEventListener(
        "click",
        (e) => this._handleMicClick(e.detail === 0)
      );
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
    this._hideThinkingIndicator();
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
      const plainText = content.textContent || content.innerText || "";
      this._setReply(plainText.trim());
    });
    actions.appendChild(replyBtn);
    meta.appendChild(actions);
    col.appendChild(meta);
    message.appendChild(avatarEl);
    message.appendChild(col);
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
      if (stickToBottom)
        this._scrollToBottom();
      this.activeTypingTimeout = setTimeout(streamText, msPerChar);
    };
    const finish = () => {
      if (isFinished)
        return;
      isFinished = true;
      clearTimeout(this.activeTypingTimeout);
      const stickToBottom = this._isNearBottom();
      const hiddenItems = content.querySelectorAll(".cb-li-hidden");
      hiddenItems.forEach((li) => li.classList.remove("cb-li-hidden"));
      textNodes.forEach((item) => {
        item.node.nodeValue = item.fullText;
      });
      cursor.remove();
      this.activeTyping = null;
      if (stickToBottom)
        this._scrollToBottom();
    };
    this.activeTyping = {
      complete: finish
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
    return message;
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
        this._showSuggestions();
      }, 400);
    } else {
      this._showSuggestions();
    }
  }
  // Mostrar preguntas sugeridas mientras la conversación no tenga mensajes del usuario
  _showSuggestions() {
    const suggestions = (this.config.bot.suggestions || []).filter(
      (s) => typeof s === "string" && s.trim()
    );
    if (!suggestions.length)
      return;
    if (this.chatHistory.some((m) => m.role === "user"))
      return;
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
        if (this.isLoading)
          return;
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
      ".cb-message:not(#cb-typing), .cb-date-divider, .cb-agent-intro, .cb-suggestions"
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
    indicator.classList.remove("cb-thinking");
    indicator.innerHTML = `<span class="cb-typing-dot"></span><span class="cb-typing-dot"></span><span class="cb-typing-dot"></span><span class="cb-sr-only"></span>`;
    indicator.querySelector(".cb-sr-only").textContent = this.config.bot.typingText || "";
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
      ".cb-typing-indicator"
    );
    indicator.classList.remove("cb-thinking");
    indicator.innerHTML = "";
  }
  // Iniciar la espera: puntos (o un texto inicial) y luego etapas por tiempo transcurrido
  _startWaiting(initialText = null) {
    this._hideThinkingIndicator();
    this._stopRequested = false;
    const steps = (this.config.bot.thinkingSteps || []).filter(
      (step) => step && step.text && step.after >= 0
    );
    if (initialText) {
      this._showThinkingIndicator(initialText);
    } else {
      this._showTypingIndicator();
    }
    (initialText ? steps.slice(1) : steps).forEach((step) => {
      this._waitTimers.push(
        setTimeout(() => {
          if (this.isLoading)
            this._showThinkingIndicator(step.text);
        }, step.after)
      );
    });
  }
  _clearWaitingTimers() {
    (this._waitTimers || []).forEach(clearTimeout);
    this._waitTimers = [];
  }
  // Cancelar la petición en curso a pedido del usuario
  _stopResponse() {
    if (!this.isLoading || !this.activeRequest)
      return;
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
        "El asistente no est\xE1 disponible en este momento. Contacta al administrador del sitio."
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
    const messageEl = this._addUserMessage(text);
    await this._requestBotReply(text, messageEl);
  }
  // Solicitar respuesta al webhook; si falla, marcar el mensaje para reintentar
  async _requestBotReply(text, messageEl) {
    this._setLoadingState(true);
    if (this.activeRequest)
      this.activeRequest.abort();
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
            ".cb-typing-indicator"
          );
          if (intermediate && (intermediate.tool || intermediate.event) && !indicator.classList.contains("cb-thinking")) {
            this._showThinkingIndicator(
              this.config.bot.thinkingSteps?.[0]?.text || "Pensando\u2026"
            );
          }
        }
      );
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
          "No se pudo obtener una respuesta v\xE1lida. Int\xE9ntalo de nuevo."
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
      if (this.isOpen)
        this.input.focus();
    }
  }
  _markMessageFailed(messageEl, text, stopped = false) {
    if (!messageEl || !messageEl.isConnected)
      return;
    messageEl.querySelector(".cb-msg-failed")?.remove();
    if (!stopped)
      messageEl.classList.add("cb-message--failed");
    const row = document.createElement("div");
    row.className = stopped ? "cb-msg-failed cb-msg-failed--stopped" : "cb-msg-failed";
    const label = document.createElement("span");
    label.textContent = stopped ? "Respuesta detenida" : "No se pudo enviar";
    const retryBtn = document.createElement("button");
    retryBtn.className = "cb-msg-retry-btn";
    retryBtn.innerHTML = `${ICONS.retry}<span>Reintentar</span>`;
    retryBtn.addEventListener("click", () => {
      if (this.isLoading)
        return;
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
    if (this.attachBtn)
      this.attachBtn.disabled = loading;
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
    const maxHeight = 100;
    const scrollHeight = this.input.scrollHeight;
    this.input.style.height = `${Math.min(scrollHeight, maxHeight)}px`;
  }
  // Alternar visibilidad entre botón de envío y micrófono
  _updateSendButtonState() {
    if (this.isLoading) {
      this.sendBtn.classList.add("cb-visible");
      if (this.micBtn)
        this.micBtn.classList.remove("cb-visible");
      return;
    }
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
  _isNearBottom(threshold = 80) {
    const c = this.messagesContainer;
    return c.scrollHeight - c.clientHeight - c.scrollTop < threshold;
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
  _handleMicClick(moveFocus = false) {
    if (this.isRecording) {
      this._stopRecording();
    } else {
      this._startRecording(moveFocus);
    }
  }
  // Inicializar proceso y componentes de grabación
  async _startRecording(moveFocus = false) {
    if (this.isLoading)
      return;
    this.audioRecorder = new AudioRecorder();
    this._showRecordingUI(moveFocus);
    this.audioRecorder.onLevelChange = (level) => {
      this._pushRecordingLevel(level);
    };
    this.audioRecorder.onTick = (seconds) => {
      this._updateRecordingTime(seconds);
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
    this.input.style.visibility = "hidden";
    if (this.micBtn)
      this.micBtn.style.visibility = "hidden";
    if (this.attachBtn)
      this.attachBtn.disabled = true;
    if (this._recordingOverlay)
      return;
    const overlay = document.createElement("div");
    overlay.className = "cb-recording-ui";
    overlay.id = "cb-recording-ui";
    overlay.style.setProperty("--cb-rec-max", `${MAX_RECORDING_SECONDS}s`);
    const cancelBtn = document.createElement("button");
    cancelBtn.className = "cb-recording-cancel";
    cancelBtn.setAttribute("aria-label", "Descartar grabaci\xF3n");
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
    const live = document.createElement("span");
    live.className = "cb-sr-only";
    live.setAttribute("aria-live", "polite");
    this._recordingLive = live;
    overlay.append(cancelBtn, status, wave, sendBtn, live);
    const composer = this.input.closest(".cb-composer") || this.input.parentElement;
    composer.appendChild(overlay);
    this._recordingOverlay = overlay;
    requestAnimationFrame(() => overlay.classList.add("cb-visible"));
    if (moveFocus)
      sendBtn.focus({ preventScroll: true });
  }
  _formatClock(seconds) {
    return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
  }
  _pushRecordingLevel(level) {
    if (!this._recordingBars)
      return;
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
    if (!this._recordingTimer)
      return;
    this._recordingTimer.textContent = this._formatClock(seconds);
    const remaining = MAX_RECORDING_SECONDS - seconds;
    const ending = remaining <= 5;
    if (ending && !this._recordingOverlay.classList.contains("cb-is-ending")) {
      this._recordingOverlay.classList.add("cb-is-ending");
      this._announceRecording(`Quedan ${remaining} segundos`);
    }
  }
  _announceRecording(text) {
    if (this._recordingLive)
      this._recordingLive.textContent = text;
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
        for (let j = 0; j < size; j++)
          sum += Math.abs(data[i * size + j] || 0);
        peaks.push(sum / size);
      }
      const max = Math.max(...peaks) || 1;
      return peaks.map((p) => p / max);
    } catch {
      return null;
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
    const WAVE_BARS = 30;
    const wave = document.createElement("div");
    wave.className = "cb-audio-wave";
    wave.tabIndex = 0;
    wave.setAttribute("role", "slider");
    wave.setAttribute("aria-label", "Posici\xF3n del audio");
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
      if (!peaks)
        return;
      peaks.forEach((p, i) => {
        const h = Math.max(0.18, Math.sqrt(p)).toFixed(2);
        bars[i * 2].style.setProperty("--h", h);
        bars[i * 2 + 1].style.setProperty("--h", h);
      });
    });
    const getTotal = () => isFinite(audio.duration) ? audio.duration : duration;
    const render = () => {
      const total = getTotal();
      const pct = total ? Math.min(100, audio.currentTime / total * 100) : 0;
      wave.style.setProperty("--p", `${pct}%`);
      wave.setAttribute("aria-valuenow", String(Math.floor(audio.currentTime)));
      wave.setAttribute(
        "aria-valuetext",
        `${this._formatClock(Math.floor(audio.currentTime))} de ${this._formatClock(Math.round(total))}`
      );
    };
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
      if (wave.hasPointerCapture(e.pointerId))
        seekFromPointer(e);
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
    const RATES = [1, 1.5, 2];
    let rateIndex = 0;
    const speedBtn = document.createElement("button");
    speedBtn.className = "cb-audio-speed";
    const updateSpeed = () => {
      const rate = RATES[rateIndex];
      speedBtn.textContent = `${rate}\xD7`;
      speedBtn.setAttribute("aria-label", `Velocidad de reproducci\xF3n ${rate}x`);
      audio.playbackRate = rate;
    };
    updateSpeed();
    speedBtn.addEventListener("click", () => {
      rateIndex = (rateIndex + 1) % RATES.length;
      updateSpeed();
    });
    let isPlaying = false;
    playBtn.addEventListener("click", () => {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(() => {
        });
      }
    });
    const setPlaying = (playing) => {
      isPlaying = playing;
      content.classList.toggle("cb-is-playing", playing);
      playBtn.innerHTML = playing ? ICONS.audioPause : ICONS.audioPlay;
      playBtn.setAttribute(
        "aria-label",
        playing ? "Pausar audio" : "Reproducir audio"
      );
      cancelAnimationFrame(rafId);
      if (playing)
        loop();
    };
    audio.addEventListener("play", () => {
      if (this._activeAudio && this._activeAudio !== audio) {
        this._activeAudio.pause();
      }
      this._activeAudio = audio;
      audio.playbackRate = RATES[rateIndex];
      wave.classList.add("cb-is-started");
      setPlaying(true);
    });
    audio.addEventListener("pause", () => {
      if (this._activeAudio === audio)
        this._activeAudio = null;
      setPlaying(false);
      render();
    });
    audio.addEventListener("ended", () => {
      if (this._activeAudio === audio)
        this._activeAudio = null;
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
    this._setLoadingState(true);
    this._startWaiting("Escuchando\u2026");
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
      if (error.name === "AbortError") {
        if (this._stopRequested)
          this._hideThinkingIndicator();
        return;
      }
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
    let internalDrag = false;
    this.shadowRoot.addEventListener("dragstart", (e) => {
      if (e.target.closest?.(
        ".cb-avatar, .cb-msg-avatar, .cb-agent-intro-avatar, .cb-launcher-btn"
      )) {
        e.preventDefault();
        return;
      }
      internalDrag = true;
    });
    this.shadowRoot.addEventListener("dragend", () => {
      internalDrag = false;
    });
    const isFileDrag = (e) => !internalDrag && e.dataTransfer && Array.from(e.dataTransfer.types || []).includes("Files");
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
    this.attachmentName.title = file.name || "";
    const type = (file.type.split("/")[1] || "imagen").replace("jpeg", "jpg");
    this.attachmentMeta.textContent = `${type.toUpperCase()} \xB7 ${this._formatFileSize(file.size)}`;
    this.attachmentPreview.classList.add("cb-visible");
    this.attachmentPreview.setAttribute("aria-hidden", "false");
  }
  // Descartar la imagen adjunta pendiente de envío
  _formatFileSize(bytes) {
    if (bytes < 1024)
      return `${bytes} B`;
    if (bytes < 1024 * 1024)
      return `${Math.round(bytes / 1024)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1).replace(".", ",")} MB`;
  }
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
    this._setLoadingState(true);
    this._startWaiting("Analizando imagen\u2026");
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
      if (error.name === "AbortError") {
        if (this._stopRequested)
          this._hideThinkingIndicator();
        return;
      }
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
  _toggleHistoryPanel(moveFocus = false) {
    if (this.historyPanel.classList.contains("cb-is-active")) {
      this._closeHistoryPanel();
    } else {
      this._openHistoryPanel(moveFocus);
    }
  }
  // Abrir panel de historial con transición
  _openHistoryPanel(moveFocus = false) {
    const top = this.messagesContainer.offsetTop;
    this.historyPanel.style.top = `${top}px`;
    this.historyPanel.style.bottom = "0px";
    this._renderHistoryPanel();
    clearTimeout(this._historyEnterTimer);
    this.historyList.classList.add("cb-is-entering");
    this._historyEnterTimer = setTimeout(
      () => this.historyList.classList.remove("cb-is-entering"),
      600
    );
    this.historyPanel.classList.add("cb-is-active");
    this.historyPanel.setAttribute("aria-hidden", "false");
    this.messagesContainer.classList.add("cb-history-active");
    this.window.classList.add("cb-history-open");
    if (this.actionsBtn)
      this.actionsBtn.classList.add("cb-is-active");
    if (moveFocus)
      this.headerBackBtn.focus({ preventScroll: true });
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
    if (this.actionsBtn)
      this.actionsBtn.classList.remove("cb-is-active");
    this._handleScroll();
  }
  // Renderizar la lista de sesiones guardadas agrupadas por fecha
  _renderHistoryPanel() {
    const sessions = getSessionsIndex();
    const hasOtherSessions = sessions.some(
      (s) => s.sessionId !== this.sessionId
    );
    this.historyList.innerHTML = "";
    this.historyFooter?.classList.toggle("cb-is-hidden", !hasOtherSessions);
    if (sessions.length === 0) {
      const empty = document.createElement("div");
      empty.className = "cb-history-empty";
      empty.innerHTML = `
        <div class="cb-history-empty-icon">${ICONS.chatEmpty}</div>
        <p class="cb-history-empty-title">A\xFAn no tienes conversaciones</p>
        <p class="cb-history-empty-sub">Tus chats aparecer\xE1n aqu\xED</p>
      `;
      this.historyList.appendChild(empty);
      return;
    }
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
      { label: "\xDAltimos 7 d\xEDas", items: [] },
      { label: "Anteriores", items: [] }
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
    let index = 0;
    groups.forEach((group) => {
      if (group.items.length === 0)
        return;
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
          session.sessionId === this.sessionId
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
    if (!lastBotMsg || !lastBotMsg.text)
      return "";
    return lastBotMsg.text.replace(/```[\s\S]*?```/g, " ").replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/^\s*(?:[-*+]|\d+[.)])\s+/gm, "").replace(/^\s*#{1,6}\s+/gm, "").replace(/[*_~`>|]/g, "").replace(/[\p{Extended_Pictographic}\uFE0F\u200D]/gu, "").replace(/\s+/g, " ").trim().slice(0, 160);
  }
  // Formatear la hora del ítem de forma compacta según su antigüedad
  _formatHistoryTime(dateStr) {
    const date = new Date(dateStr);
    const now = /* @__PURE__ */ new Date();
    const startOfToday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );
    const diffDays = Math.floor(
      (startOfToday - new Date(date.getFullYear(), date.getMonth(), date.getDate())) / 864e5
    );
    if (diffDays <= 0)
      return this._getTimeString(date);
    if (diffDays === 1)
      return "Ayer";
    if (diffDays < 7) {
      const weekday = date.toLocaleDateString("es", { weekday: "short" });
      return weekday.charAt(0).toUpperCase() + weekday.slice(1).replace(".", "");
    }
    return date.toLocaleDateString("es", {
      day: "numeric",
      month: "short",
      ...date.getFullYear() !== now.getFullYear() && { year: "numeric" }
    }).replace(".", "");
  }
  // Construir un ítem de historial individual
  _buildHistoryItem(session, isActive = false) {
    const item = document.createElement("div");
    item.className = isActive ? "cb-history-item cb-history-item--active" : "cb-history-item";
    item.setAttribute("role", "button");
    item.setAttribute("tabindex", isActive ? "-1" : "0");
    if (isActive) {
      item.setAttribute("aria-current", "true");
      item.setAttribute("aria-disabled", "true");
    }
    item.dataset.sessionId = session.sessionId;
    const dateStr = session.lastUserMessageAt || session.lastMessageAt;
    const previewText = this._getHistoryPreview(session.sessionId);
    const countText = session.messageCount === 1 ? "1 mensaje" : `${session.messageCount} mensajes`;
    const tooltip = `${this._formatRelativeDate(dateStr)} \xB7 ${countText}`;
    item.innerHTML = `
      <div class="cb-history-item-content">
        <div class="cb-history-item-title-row">
          <span class="cb-history-item-title">${this._escapeAttr(session.title)}</span>
          <time class="cb-history-item-time" datetime="${this._escapeAttr(dateStr)}" title="${this._escapeAttr(tooltip)}">${this._escapeAttr(this._formatHistoryTime(dateStr))}</time>
          ${isActive ? "" : `<button class="cb-history-item-delete" aria-label="Eliminar conversaci\xF3n" title="Eliminar conversaci\xF3n">${ICONS.trash}</button>`}
        </div>
        ${previewText ? `<div class="cb-history-item-preview">${this._escapeAttr(previewText)}</div>` : ""}
      </div>
    `;
    item.setAttribute(
      "aria-label",
      `${session.title}${isActive ? " (conversaci\xF3n actual)" : ""}, ${tooltip}`
    );
    if (isActive)
      return item;
    item.addEventListener("click", (e) => {
      if (e.target.closest(".cb-history-item-delete")) {
        e.stopPropagation();
        this._confirmDeleteSession(session.sessionId, item, e.detail === 0);
      } else if (!item.classList.contains("cb-history-item--confirming")) {
        this._loadSession(session.sessionId);
      }
    });
    item.addEventListener("keydown", (e) => {
      if (e.target !== item)
        return;
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
  _confirmDeleteSession(sessionId, item, moveFocus = false) {
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
    if (moveFocus) {
      setTimeout(
        () => confirmEl.querySelector(".cb-history-item-confirm-no").focus(),
        0
      );
    }
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
  _openClearAllModal(fromKeyboard = false) {
    if (!this.clearAllOverlay)
      return;
    const count = getSessionsIndex().filter(
      (s) => s.sessionId !== this.sessionId
    ).length;
    this.shadowRoot.getElementById("cb-clear-all-desc").textContent = `Se eliminar\xE1${count === 1 ? " 1 conversaci\xF3n" : `n ${count} conversaciones guardadas`}. La conversaci\xF3n actual se conserva.`;
    this.clearAllOverlay.classList.remove("cb-is-hidden");
    this.clearAllOverlay.setAttribute("aria-hidden", "false");
    void this.clearAllOverlay.offsetWidth;
    this.clearAllOverlay.classList.add("cb-is-active");
    setTimeout(
      () => (fromKeyboard ? this.clearAllCancelBtn : this.clearAllDialog)?.focus(),
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
      this.historyList.querySelectorAll(
        ".cb-history-item:not(.cb-history-item--active)"
      )
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
