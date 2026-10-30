var ae=`/* Inicializar estilos principales */

/* Declarar variables de dise\xF1o (colores, sombras, medidas) */
:host {
  --cb-primary: #572b86;
  --cb-primary-hover: #401d66;
  --cb-primary-text: #ffffff;

  /* Escala de transparencias de la marca: valores literales como respaldo sin color-mix() */
  --cb-primary-a04: rgba(87, 43, 134, 0.04);
  --cb-primary-a08: rgba(87, 43, 134, 0.08);
  --cb-primary-a12: rgba(87, 43, 134, 0.12);
  --cb-primary-a16: rgba(87, 43, 134, 0.16);
  --cb-primary-a24: rgba(87, 43, 134, 0.24);
  --cb-primary-a32: rgba(87, 43, 134, 0.32);
  --cb-primary-a40: rgba(87, 43, 134, 0.4);

  /* Variantes claras de la marca para modo oscuro y decoraci\xF3n */
  --cb-primary-light: #c4a6f5;
  --cb-primary-light-a18: rgba(196, 166, 245, 0.18);
  --cb-primary-light-a40: rgba(196, 166, 245, 0.4);
  --cb-sparkle-1: #e879f9;
  --cb-sparkle-2: #c084fc;
  /* Derivar un violeta de la marca para tintes claros que no se lean rosados */
  --cb-violet-a10: rgba(104, 74, 196, 0.1);
  --cb-violet-a14: rgba(104, 74, 196, 0.14);

  --cb-primary-soft: var(--cb-primary-a12);
  --cb-link-color: var(--cb-primary);

  --cb-bg: #ffffff;
  --cb-bg-secondary: #f6f5fa;
  --cb-text: #1a1025;
  --cb-text-secondary: #6e5f86;
  --cb-border: var(--cb-primary-a16);
  --cb-surface-edge: rgba(26, 16, 37, 0.1);
  --cb-hover: rgba(26, 16, 37, 0.05);
  --cb-active: rgba(26, 16, 37, 0.09);
  --cb-composer-border: rgba(26, 16, 37, 0.14);
  --cb-ambient-glow: var(--cb-violet-a10);
  --cb-pattern-dot: var(--cb-violet-a14);

  /* Te\xF1ir sutilmente el fondo de la conversaci\xF3n en claro para que burbujas y composer se eleven */
  --cb-canvas: #f6f5fc;
  --cb-bot-bubble-edge:
    0 0 0 1px rgba(26, 16, 37, 0.06), 0 1px 2px rgba(16, 10, 30, 0.04);

  --cb-user-bubble: var(--cb-primary);
  --cb-user-text: #ffffff;
  --cb-bot-bubble: #ffffff;
  --cb-bot-text: #1a1025;

  --cb-error-bubble: #fecdd3;
  --cb-error-text: #be123c;
  --cb-error-border: rgba(190, 18, 60, 0.35);

  /* Escala de elevaci\xF3n: 1 superficies, 2 flotantes, 3 ventana y men\xFAs */
  --cb-elev-1: 0 1px 2px rgba(16, 10, 30, 0.06), 0 1px 3px rgba(16, 10, 30, 0.04);
  --cb-elev-2: 0 4px 14px rgba(16, 10, 30, 0.08), 0 2px 5px rgba(16, 10, 30, 0.04);
  --cb-elev-3: 0 16px 48px rgba(16, 10, 30, 0.15), 0 2px 12px rgba(16, 10, 30, 0.06);
  --cb-shadow: var(--cb-elev-3);
  --cb-shadow-sm: var(--cb-elev-2);
  --cb-shadow-launcher:
    0 1px 2px rgba(16, 10, 30, 0.1), 0 8px 22px -4px var(--cb-primary-a40),
    0 18px 36px -14px rgba(16, 10, 30, 0.3);
  --cb-shadow-launcher-hover:
    0 2px 4px rgba(16, 10, 30, 0.1), 0 12px 30px -4px var(--cb-primary-a40),
    0 24px 44px -14px rgba(16, 10, 30, 0.34);

  /* Colores sem\xE1nticos de estado */
  --cb-success: #22c55e;
  --cb-danger: #ef4444;
  --cb-danger-bg: #fef2f2;

  /* Bloques de c\xF3digo */
  --cb-code-bg: #12101e;
  --cb-code-text: #e2e0f0;
  --cb-code-border: var(--cb-primary-a24);
  --cb-font-mono: "Fira Code", "Cascadia Code", "Consolas", monospace;

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
  --cb-icon-size-sm: 18px;
  --cb-icon-size-md: 26px;

  /* Escala tipogr\xE1fica */
  --cb-text-2xs: 11px;
  --cb-text-xs: 12px;
  --cb-text-sm: 13px;
  --cb-text-md: 14px;
  --cb-text-lg: 16px;
  --cb-text-xl: 20px;

  /* Radios y tama\xF1os tipogr\xE1ficos por componente */
  --cb-font-size-header: var(--cb-text-lg);
  --cb-font-size-msg: var(--cb-text-md);
  --cb-font-size-input: var(--cb-text-md);

  --cb-radius: 18px;
  --cb-radius-sm: 10px;
  --cb-window-width: 410px;
  --cb-window-height: 690px;
  --cb-launcher-size: 56px;
  --cb-spacing: 16px;
  --cb-font:
    system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial,
    sans-serif;
  --cb-transition: 0.22s var(--cb-ease-standard);
  --cb-z-index: 9999;

  --cb-scrollbar-width: 3px;
  --cb-scrollbar-color: var(--cb-primary-a24);
  --cb-scrollbar-color-hover: var(--cb-primary-a40);
  --cb-scrollbar-track: transparent;
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

/* Derivar la escala de la marca desde --cb-primary para que un primaryColor personalizado se propague a todo */
@supports (color: color-mix(in srgb, red 50%, blue)) {
  :host {
    --cb-primary-a04: color-mix(in srgb, var(--cb-primary) 4%, transparent);
    --cb-primary-a08: color-mix(in srgb, var(--cb-primary) 8%, transparent);
    --cb-primary-a12: color-mix(in srgb, var(--cb-primary) 12%, transparent);
    --cb-primary-a16: color-mix(in srgb, var(--cb-primary) 16%, transparent);
    --cb-primary-a24: color-mix(in srgb, var(--cb-primary) 24%, transparent);
    --cb-primary-a32: color-mix(in srgb, var(--cb-primary) 32%, transparent);
    --cb-primary-a40: color-mix(in srgb, var(--cb-primary) 40%, transparent);
    --cb-primary-light: color-mix(in oklch, var(--cb-primary), white 55%);
    --cb-primary-light-a18: color-mix(
      in srgb,
      var(--cb-primary-light) 18%,
      transparent
    );
    --cb-primary-light-a40: color-mix(
      in srgb,
      var(--cb-primary-light) 40%,
      transparent
    );
    --cb-sparkle-1: color-mix(in oklch, var(--cb-primary), white 50%);
    --cb-sparkle-2: color-mix(in oklch, var(--cb-primary), white 40%);
  }
}

/* Conservar la saturaci\xF3n en las variantes claras cuando hay sintaxis de color relativa */
@supports (color: oklch(from red l c h)) {
  :host {
    --cb-primary-light: oklch(from var(--cb-primary) 0.78 calc(c * 0.8) h);
    --cb-sparkle-1: oklch(from var(--cb-primary) 0.75 0.2 calc(h + 15));
    --cb-sparkle-2: oklch(from var(--cb-primary) 0.72 0.18 h);
    --cb-violet-a10: oklch(from var(--cb-primary) 0.52 0.17 calc(h - 18) / 0.1);
    --cb-violet-a14: oklch(from var(--cb-primary) 0.52 0.17 calc(h - 18) / 0.14);
  }
}

/* Aplicar esquema de colores oscuro */
@media (prefers-color-scheme: dark) {
  :host {
    --cb-bg: #1c1528;
    --cb-bg-secondary: #141020;
    --cb-link-color: var(--cb-primary-light);
    --cb-text: #f0ecf8;
    --cb-text-secondary: #9b8fb0;
    --cb-border: rgba(255, 255, 255, 0.08);
    --cb-surface-edge: rgba(255, 255, 255, 0.08);
    --cb-hover: rgba(255, 255, 255, 0.06);
    --cb-active: rgba(255, 255, 255, 0.1);
    --cb-composer-border: rgba(255, 255, 255, 0.12);
    --cb-ambient-glow: var(--cb-primary-a32);
    --cb-pattern-dot: rgba(255, 255, 255, 0.07);
    --cb-bot-bubble: #2a2239;
    --cb-bot-text: #ede9f5;
    --cb-canvas: var(--cb-bg);
    --cb-bot-bubble-edge: none;
    --cb-error-bubble: #2a0a14;
    --cb-error-text: #fb7185;
    --cb-error-border: rgba(251, 113, 133, 0.2);
    --cb-danger-bg: #2a0a14;
    --cb-elev-1: 0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2);
    --cb-elev-2: 0 4px 14px rgba(0, 0, 0, 0.35), 0 2px 5px rgba(0, 0, 0, 0.2);
    --cb-elev-3: 0 16px 48px rgba(0, 0, 0, 0.45), 0 2px 12px rgba(0, 0, 0, 0.25);
    --cb-scrollbar-color: rgba(255, 255, 255, 0.14);
    --cb-scrollbar-color-hover: rgba(255, 255, 255, 0.24);
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
#chat-bubble-window[data-theme="light"],
#chat-bubble-launcher[data-theme="light"] {
  --cb-hover: rgba(26, 16, 37, 0.05);
  --cb-active: rgba(26, 16, 37, 0.09);
  --cb-composer-border: rgba(26, 16, 37, 0.14);
  --cb-ambient-glow: var(--cb-violet-a10);
  --cb-pattern-dot: var(--cb-violet-a14);
  --cb-canvas: #f6f5fc;
  --cb-bot-bubble-edge:
    0 0 0 1px rgba(26, 16, 37, 0.06), 0 1px 2px rgba(16, 10, 30, 0.04);
  --cb-shadow: var(--cb-elev-3);
  --cb-shadow-sm: var(--cb-elev-2);
  --cb-bg: #ffffff;
  --cb-bg-secondary: #f6f5fa;
  --cb-link-color: var(--cb-primary);
  --cb-text: #1a1025;
  --cb-text-secondary: #6e5f86;
  --cb-border: var(--cb-primary-a16);
  --cb-surface-edge: rgba(26, 16, 37, 0.1);
  --cb-bot-bubble: #ffffff;
  --cb-bot-text: #1a1025;
  --cb-error-bubble: #fecdd3;
  --cb-error-text: #be123c;
  --cb-error-border: rgba(190, 18, 60, 0.35);
  --cb-danger-bg: #fef2f2;
  --cb-elev-1: 0 1px 2px rgba(16, 10, 30, 0.06), 0 1px 3px rgba(16, 10, 30, 0.04);
  --cb-elev-2: 0 4px 14px rgba(16, 10, 30, 0.08), 0 2px 5px rgba(16, 10, 30, 0.04);
  --cb-elev-3: 0 16px 48px rgba(16, 10, 30, 0.15), 0 2px 12px rgba(16, 10, 30, 0.06);
  --cb-scrollbar-color: var(--cb-primary-a24);
  --cb-scrollbar-color-hover: var(--cb-primary-a40);
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
#chat-bubble-window[data-theme="dark"],
#chat-bubble-launcher[data-theme="dark"] {
  --cb-shadow: var(--cb-elev-3);
  --cb-shadow-sm: var(--cb-elev-2);
  --cb-bg: #1c1528;
  --cb-bg-secondary: #141020;
  --cb-link-color: var(--cb-primary-light);
  --cb-text: #f0ecf8;
  --cb-text-secondary: #9b8fb0;
  --cb-border: rgba(255, 255, 255, 0.08);
  --cb-surface-edge: rgba(255, 255, 255, 0.08);
  --cb-hover: rgba(255, 255, 255, 0.06);
  --cb-active: rgba(255, 255, 255, 0.1);
  --cb-composer-border: rgba(255, 255, 255, 0.12);
  --cb-ambient-glow: var(--cb-primary-a32);
  --cb-pattern-dot: rgba(255, 255, 255, 0.07);
  --cb-bot-bubble: #2a2239;
  --cb-bot-text: #ede9f5;
  --cb-canvas: var(--cb-bg);
  --cb-bot-bubble-edge: none;
  --cb-error-bubble: #2a0a14;
  --cb-error-text: #fb7185;
  --cb-error-border: rgba(251, 113, 133, 0.2);
  --cb-danger-bg: #2a0a14;
  --cb-elev-1: 0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2);
  --cb-elev-2: 0 4px 14px rgba(0, 0, 0, 0.35), 0 2px 5px rgba(0, 0, 0, 0.2);
  --cb-elev-3: 0 16px 48px rgba(0, 0, 0, 0.45), 0 2px 12px rgba(0, 0, 0, 0.25);
  --cb-scrollbar-color: rgba(255, 255, 255, 0.14);
  --cb-scrollbar-color-hover: rgba(255, 255, 255, 0.24);
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

/* Impedir arrastrar o seleccionar las im\xE1genes de avatar */
.cb-avatar img,
.cb-msg-avatar img,
.cb-agent-intro-avatar img,
.cb-agent-intro-avatar video,
.cb-launcher-avatar,
.cb-launcher-video {
  -webkit-user-drag: none;
  -webkit-user-select: none;
  user-select: none;
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
  font-size: var(--cb-text-md);
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
  /* Separar el avatar del anillo IA con un aro del color de superficie */
  box-shadow:
    0 0 0 2px var(--cb-bg),
    var(--cb-shadow-launcher);
  transition:
    transform 0.3s var(--cb-ease-out-spring),
    box-shadow 0.3s var(--cb-ease-standard),
    background-color 0.25s var(--cb-ease-standard),
    color 0.25s var(--cb-ease-standard);
  position: relative;
  overflow: visible;
  animation: cb-launcher-enter 0.6s 0.15s var(--cb-ease-out-spring) backwards;
}

/* Entrar con un pop sutil al cargar la p\xE1gina */
@keyframes cb-launcher-enter {
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.6);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

/* Elevar el bot\xF3n al pasar el cursor */
.cb-launcher-btn:hover {
  transform: translateY(-2px) scale(1.04);
  box-shadow:
    0 0 0 2px var(--cb-bg),
    var(--cb-shadow-launcher-hover);
}

.cb-launcher-btn:active {
  transform: scale(0.95);
  transition-duration: 0.12s;
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

.cb-icon-chat svg,
.cb-icon-close svg {
  width: var(--cb-icon-size-md);
  height: var(--cb-icon-size-md);
}

.cb-launcher-avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  pointer-events: none;
}

/* Superponer el video del avatar sobre la foto cuando ya puede reproducirse */
.cb-launcher-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.cb-icon-chat.cb-is-playing .cb-launcher-video {
  opacity: 1;
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

/* Dibujar anillo IA con degradado c\xF3nico que gira lentamente */
.cb-launcher-halo {
  position: absolute;
  inset: -3.5px;
  border-radius: 50%;
  opacity: 0.75;
  background: conic-gradient(
    var(--cb-primary),
    var(--cb-sparkle-1),
    var(--cb-sparkle-2),
    var(--cb-primary-light),
    var(--cb-primary)
  );
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 1px));
  mask: radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 1px));
  pointer-events: none;
  animation: cb-halo-spin 14s linear infinite;
  transition: opacity 0.25s ease;
}

@keyframes cb-halo-spin {
  to {
    transform: rotate(360deg);
  }
}

.cb-launcher-btn:hover .cb-launcher-halo {
  opacity: 1;
  animation-duration: 4s;
}

/* Mostrar chip de sparkle que identifica al asistente como IA */
.cb-launcher-ai {
  position: absolute;
  right: -5px;
  bottom: -3px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--cb-bg);
  color: var(--cb-link-color);
  box-shadow: var(--cb-elev-2);
  pointer-events: none;
  transition:
    opacity 0.2s ease,
    transform 0.3s var(--cb-ease-out-spring);
}

.cb-launcher-ai svg {
  width: 11px;
  height: 11px;
  animation: cb-ai-twinkle 4.8s var(--cb-ease-standard) infinite;
}

@keyframes cb-ai-twinkle {
  0%,
  70%,
  100% {
    transform: scale(1) rotate(0deg);
  }
  80% {
    transform: scale(1.3) rotate(90deg);
  }
  90% {
    transform: scale(0.9) rotate(180deg);
  }
}

/* Ocultar decoraciones IA mientras el chat est\xE1 abierto */
.cb-launcher-btn.cb-is-open .cb-launcher-halo,
.cb-launcher-btn.cb-is-open .cb-launcher-ai {
  opacity: 0;
  animation-play-state: paused;
}

.cb-launcher-btn.cb-is-open .cb-launcher-ai {
  transform: scale(0.4);
}

.cb-launcher-btn.cb-is-open .cb-launcher-ai svg {
  animation-play-state: paused;
}

/* Convertir el bot\xF3n en un control neutro con el chat abierto: el protagonista es la ventana */
.cb-launcher-btn.cb-is-open {
  background-color: var(--cb-bg);
  color: var(--cb-text-secondary);
  box-shadow:
    0 0 0 1px var(--cb-composer-border),
    var(--cb-elev-2);
}

.cb-launcher-btn.cb-is-open .cb-icon-close svg {
  width: 22px;
  height: 22px;
}

.cb-launcher-btn.cb-is-open:hover {
  transform: translateY(-1px);
  /* Superponer el tono de hover para que funcione igual en claro y oscuro */
  background-image: linear-gradient(var(--cb-hover), var(--cb-hover));
  color: var(--cb-text);
  box-shadow:
    0 0 0 1px var(--cb-composer-border),
    var(--cb-elev-3);
}

.cb-launcher-btn.cb-is-open:active {
  transform: scale(0.95);
}

/* Mostrar etiqueta flotante junto al bot\xF3n al pasar el cursor */
.cb-launcher-label {
  position: absolute;
  top: 50%;
  right: calc(100% + 14px);
  padding: 8px 14px;
  border-radius: 999px;
  background: var(--cb-bg);
  color: var(--cb-text);
  font-size: var(--cb-text-sm);
  font-weight: 600;
  white-space: nowrap;
  box-shadow: var(--cb-elev-2);
  outline: 1px solid var(--cb-surface-edge);
  outline-offset: -1px;
  opacity: 0;
  transform: translate(6px, -50%);
  pointer-events: none;
  transition:
    opacity 0.18s ease,
    transform 0.25s var(--cb-ease-out-spring);
}

#chat-bubble-launcher.cb-position--left .cb-launcher-label {
  right: auto;
  left: calc(100% + 14px);
  transform: translate(-6px, -50%);
}

@media (hover: hover) {
  #chat-bubble-launcher:not(.cb-launcher--open):not(.cb-is-dragging):hover
    .cb-launcher-label {
    opacity: 1;
    transform: translate(0, -50%);
    transition-delay: 0.25s;
  }
}

/* Configurar indicador visual de notificaciones nuevas */
.cb-notification-badge {
  position: absolute;
  top: -2px;
  right: -2px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--cb-danger);
  border: 2.5px solid var(--cb-bg);
  display: none;
  z-index: 2;
  pointer-events: none;
}

.cb-notification-badge.cb-visible {
  display: block;
  animation: cb-badge-pop 0.45s var(--cb-ease-spring) both;
}

/* Emitir una onda peri\xF3dica para captar la atenci\xF3n sin ser invasivo */
.cb-notification-badge.cb-visible::after {
  content: "";
  position: absolute;
  inset: -2.5px;
  border-radius: 50%;
  background: var(--cb-danger);
  animation: cb-badge-ping 2.4s 0.5s ease-out infinite;
}

@keyframes cb-badge-pop {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

@keyframes cb-badge-ping {
  0% {
    opacity: 0.5;
    transform: scale(1);
  }
  60%,
  100% {
    opacity: 0;
    transform: scale(2.2);
  }
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
  /* Definir el borde de la superficie con outline para no alterar el tama\xF1o ni recortar el header */
  outline: 1px solid var(--cb-surface-edge);
  outline-offset: -1px;
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
  z-index: 12;
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
  padding: 10px 10px 10px var(--cb-spacing);
  background: var(--cb-bg);
  color: var(--cb-text);
  border-bottom: 1px solid var(--cb-border);
  flex-shrink: 0;
  border-radius: var(--cb-radius) var(--cb-radius) 0 0;
  position: relative;
  z-index: 11;
  overflow: visible;
  cursor: move;
  -webkit-user-select: none;
  user-select: none;
  touch-action: none;
}

@media (prefers-reduced-motion: reduce) {
  .cb-launcher-btn,
  .cb-launcher-halo,
  .cb-launcher-ai svg,
  .cb-notification-badge,
  .cb-scroll-bottom-btn.cb-has-new svg,
  .cb-message-content.cb-is-highlighted,
  .cb-typing-dot,
  .cb-thinking-icon,
  .cb-typing-wrapper.cb-visible .cb-msg-avatar::before,
  .cb-recording-dot {
    animation: none;
  }

  .cb-streaming-cursor {
    animation: none;
    opacity: 1;
  }

  .cb-notification-badge::after {
    display: none;
  }

  .cb-thinking-text {
    animation: none !important;
    background: none;
    -webkit-text-fill-color: var(--cb-text-secondary);
    color: var(--cb-text-secondary);
  }
}

.cb-header-info {
  display: flex;
  align-items: center;
  gap: 11px;
  min-width: 0;
  min-height: 40px;
  position: relative;
  z-index: 1;
}

.cb-header-text {
  min-width: 0;
}

/* Alternar la cabecera entre identidad del asistente y t\xEDtulo del historial */
.cb-header-info .cb-header-back-btn,
.cb-header-info .cb-header-title {
  display: none;
}

.cb-header-title {
  font-family: var(--cb-font);
  font-weight: 600;
  font-size: var(--cb-font-size-header);
  letter-spacing: -0.01em;
  color: var(--cb-text);
  white-space: nowrap;
}

#chat-bubble-window.cb-history-open .cb-header-info {
  gap: 6px;
  margin-left: -6px;
}

#chat-bubble-window.cb-history-open .cb-avatar,
#chat-bubble-window.cb-history-open .cb-header-text {
  display: none;
}

#chat-bubble-window.cb-history-open .cb-actions-dropdown {
  display: none;
}

#chat-bubble-window.cb-history-open .cb-header-back-btn {
  display: flex;
}

#chat-bubble-window.cb-history-open .cb-header-title {
  display: block;
  animation: cb-fade-slide-in 0.2s var(--cb-ease-standard) both;
}

@keyframes cb-fade-slide-in {
  from {
    opacity: 0;
    transform: translateX(-4px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.cb-avatar {
  width: var(--cb-header-avatar-size);
  height: var(--cb-header-avatar-size);
  border-radius: 50%;
  background: var(--cb-primary-a12);
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
}

.cb-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cb-avatar svg {
  width: 21px;
  height: 21px;
  color: var(--cb-primary);
}

.cb-bot-name {
  display: block;
  font-family: var(--cb-font);
  font-weight: 600;
  font-size: var(--cb-font-size-header);
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: var(--cb-text);
}

.cb-status {
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: var(--cb-font);
  font-size: var(--cb-text-xs);
  font-weight: 400;
  color: var(--cb-text-secondary);
  margin-top: 2px;
}

.cb-status:not(:empty)::before {
  content: "";
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--cb-success);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--cb-success) 22%, transparent);
}

.cb-status:empty {
  display: none;
}

.cb-header-actions {
  display: flex;
  align-items: center;
  gap: 2px;
  position: relative;
  z-index: 1;
}

.cb-header-back-btn,
.cb-toggle-size-btn,
.cb-actions-btn,
.cb-close-window-btn {
  width: var(--cb-header-btn-size);
  height: var(--cb-header-btn-size);
  border-radius: 10px;
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

.cb-header-back-btn:hover,
.cb-toggle-size-btn:hover,
.cb-actions-btn:hover,
.cb-close-window-btn:hover {
  background: var(--cb-hover);
  color: var(--cb-text);
}

.cb-header-back-btn:active,
.cb-toggle-size-btn:active,
.cb-actions-btn:active,
.cb-close-window-btn:active {
  background: var(--cb-active);
}

.cb-header-back-btn svg,
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
  font-size: var(--cb-text-md);
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
  font-size: var(--cb-text-sm);
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
  padding: 20px 16px 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: var(--cb-canvas);
  background-image:
    radial-gradient(
      ellipse 90% 55% at 50% 0%,
      var(--cb-ambient-glow) 0%,
      transparent 70%
    ),
    linear-gradient(to bottom, transparent 0%, var(--cb-canvas) 65%),
    radial-gradient(circle, var(--cb-pattern-dot) 1px, transparent 1.5px);
  background-size:
    100% 100%,
    100% 100%,
    18px 18px;
  background-position:
    0 0,
    0 0,
    center top;
  transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);

  /* Mostrar la barra de desplazamiento solo al pasar el cursor */
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
}

.cb-messages:hover {
  scrollbar-color: var(--cb-scrollbar-color) var(--cb-scrollbar-track);
}

.cb-messages::-webkit-scrollbar {
  width: var(--cb-scrollbar-width);
}
.cb-messages::-webkit-scrollbar-track {
  background: var(--cb-scrollbar-track);
}
.cb-messages::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: 100px;
}
.cb-messages:hover::-webkit-scrollbar-thumb {
  background: var(--cb-scrollbar-color);
}
.cb-messages::-webkit-scrollbar-thumb:hover {
  background: var(--cb-scrollbar-color-hover);
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
  position: relative;
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
  background: var(--cb-primary-a08);
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
  padding: 10px 14px;
  word-break: break-word;
  overflow-wrap: break-word;
  font-size: var(--cb-font-size-msg);
  line-height: 1.55;
  font-weight: 400;
}

/* Dise\xF1ar burbuja de respuesta del asistente */
.cb-message--bot .cb-message-content {
  max-width: 100%;
  background: var(--cb-bot-bubble);
  color: var(--cb-bot-text);
  border-radius: 6px 18px 18px 18px;
  box-shadow: var(--cb-bot-bubble-edge);
}

/* Dise\xF1ar burbuja de mensaje del usuario */
.cb-message--user .cb-message-content {
  background: var(--cb-user-bubble);
  color: var(--cb-user-text);
  border-radius: 18px 18px 6px 18px;
}

/* Formatear indicador de hora de env\xEDo */
.cb-message-time {
  font-size: var(--cb-text-2xs);
  color: var(--cb-text-secondary);
  margin-top: 4px;
  padding: 0 4px;
  letter-spacing: 0.015em;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
}

/* Alinear hora y acciones bajo la burbuja del asistente */
.cb-msg-meta {
  display: flex;
  align-items: center;
  gap: 4px;
  min-height: 26px;
  margin-top: 2px;
}

.cb-msg-meta .cb-message-time {
  margin-top: 0;
}

.cb-msg-actions {
  display: flex;
  align-items: center;
  gap: 2px;
  opacity: 0;
  transition: opacity 0.16s ease;
}

.cb-message--bot:hover .cb-msg-actions,
.cb-msg-actions:focus-within {
  opacity: 1;
}

/* Mantener visibles las acciones en pantallas t\xE1ctiles, donde no existe hover */
@media (hover: none) {
  .cb-msg-actions {
    opacity: 1;
  }
}

.cb-msg-action-btn {
  width: 26px;
  height: 26px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--cb-text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  transition:
    background var(--cb-transition),
    color var(--cb-transition);
}

.cb-msg-action-btn:hover {
  background: var(--cb-hover);
  color: var(--cb-text);
}

.cb-msg-action-btn.cb-is-done {
  color: var(--cb-success);
}

.cb-msg-action-btn svg {
  width: 15px;
  height: 15px;
}

/* Marcar mensaje del usuario que no obtuvo respuesta */
.cb-message--failed .cb-message-content {
  opacity: 0.7;
}

.cb-msg-failed {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
  padding: 0 4px;
  font-size: var(--cb-text-xs);
  color: var(--cb-error-text);
}

.cb-msg-failed--stopped {
  color: var(--cb-text-secondary);
}

.cb-msg-failed--stopped .cb-msg-retry-btn {
  border-color: var(--cb-composer-border);
  color: var(--cb-text);
}

.cb-msg-failed--stopped .cb-msg-retry-btn:hover {
  background: var(--cb-hover);
}

.cb-msg-retry-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  border: 1px solid var(--cb-error-border);
  border-radius: 999px;
  background: transparent;
  color: var(--cb-error-text);
  font-family: var(--cb-font);
  font-size: var(--cb-text-xs);
  font-weight: 600;
  cursor: pointer;
  transition: background var(--cb-transition);
}

.cb-msg-retry-btn:hover {
  background: var(--cb-danger-bg);
}

.cb-msg-retry-btn svg {
  width: 12px;
  height: 12px;
}

/* Dise\xF1ar preguntas sugeridas del estado inicial */
.cb-suggestions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-left: calc(var(--cb-msg-avatar-size) + 8px);
}

.cb-suggestion-chip {
  padding: 7px 12px;
  border: 1px solid var(--cb-composer-border);
  border-radius: 999px;
  background: var(--cb-bg);
  color: var(--cb-text);
  font-family: var(--cb-font);
  font-size: var(--cb-text-sm);
  line-height: 1.3;
  text-align: left;
  cursor: pointer;
  animation: cb-message-appear 0.3s ease-out var(--cb-chip-delay, 0ms) both;
  transition:
    border-color var(--cb-transition),
    background var(--cb-transition),
    color var(--cb-transition);
}

.cb-suggestion-chip:hover {
  border-color: var(--cb-primary-a40);
  background: var(--cb-primary-a04);
  color: var(--cb-link-color);
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
  font-size: var(--cb-text-lg);
}
.cb-message-content h2.cb-heading {
  font-size: 15px;
}
.cb-message-content h3.cb-heading {
  font-size: var(--cb-text-md);
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
  font-size: var(--cb-text-xs);
  line-height: 1.6;
  font-family: var(--cb-font-mono);
  white-space: pre;
  border: 1px solid var(--cb-code-border);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.cb-message-content .cb-inline-code {
  background: var(--cb-primary-a12);
  color: var(--cb-link-color);
  padding: 2px 6px;
  border-radius: 5px;
  font-size: var(--cb-text-sm);
  font-family: var(--cb-font-mono);
  border: 1px solid var(--cb-primary-a16);
}

.cb-message--user .cb-inline-code {
  background: rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.95);
  border-color: rgba(255, 255, 255, 0.15);
}

.cb-message-content .cb-link {
  color: var(--cb-link-color);
  text-decoration: underline;
  text-decoration-color: var(--cb-primary-a40);
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
  border-radius: 6px 18px 18px 18px;
  box-shadow: var(--cb-bot-bubble-edge);
  align-self: flex-start;
  animation: cb-message-appear 0.25s ease-out both;
}

.cb-typing-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--cb-primary);
  opacity: 0.35;
  animation: cb-typing-bounce 1.3s infinite ease-in-out;
}

.cb-typing-dot:nth-child(1) {
  animation-delay: 0s;
}
.cb-typing-dot:nth-child(2) {
  animation-delay: 0.18s;
}
.cb-typing-dot:nth-child(3) {
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
  padding: 8px 12px 12px;
  background: var(--cb-canvas);
  flex-shrink: 0;
  position: relative;
}

/* Agrupar controles de escritura en una sola tarjeta */
.cb-composer {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  padding: 5px;
  background: var(--cb-bg);
  border: 1px solid var(--cb-composer-border);
  border-radius: 22px;
  box-shadow: var(--cb-elev-1);
  position: relative;
  transition:
    border-color var(--cb-transition),
    box-shadow var(--cb-transition);
}

.cb-composer-row {
  display: flex;
  align-items: flex-end;
  gap: 2px;
}

.cb-composer:focus-within {
  border-color: var(--cb-primary-a40);
  box-shadow:
    0 0 0 3px var(--cb-primary-a12),
    var(--cb-elev-1);
}

/* A\xF1adir borde sutil sobre el \xE1rea de entrada */

#cb-input {
  flex: 1;
  min-width: 0;
  border: none;
  border-radius: 0;
  padding: 7px 6px;
  font-family: var(--cb-font);
  font-size: var(--cb-font-size-input);
  font-weight: 400;
  line-height: 1.5;
  color: var(--cb-text);
  background: transparent;
  resize: none;
  outline: none;
  min-height: 34px;
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
  opacity: 1;
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
  width: var(--cb-input-btn-size);
  height: var(--cb-input-btn-size);
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

#cb-send-btn.cb-is-stop {
  background: var(--cb-text);
  color: var(--cb-bg);
  animation: none;
}

#cb-send-btn.cb-is-stop svg {
  width: 14px;
  height: 14px;
}

#cb-send-btn.cb-is-stop:hover {
  background: var(--cb-text);
  opacity: 0.85;
}

#cb-send-btn:not(:disabled):not(.cb-is-stop):hover {
  background: var(--cb-primary-hover);
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
  padding: 28px 20px 8px;
  gap: 6px;
  flex-shrink: 0;
}

.cb-agent-intro-avatar {
  position: relative;
  width: 64px;
  height: 64px;
  margin-bottom: 6px;
  border-radius: 50%;
  overflow: hidden;
  background: var(--cb-primary-a12);
  border: none;
  box-shadow:
    0 0 0 4px var(--cb-bg),
    0 0 0 5px var(--cb-border);
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
  font-size: var(--cb-text-lg);
  font-weight: 700;
  color: var(--cb-text);
  letter-spacing: -0.02em;
  margin: 0;
  line-height: 1.2;
}

.cb-agent-intro-subtitle {
  font-family: var(--cb-font);
  font-size: var(--cb-text-sm);
  color: var(--cb-text-secondary);
  font-weight: 400;
  margin: 0;
  line-height: 1.4;
}

/* Formatear separador de fecha entre mensajes */
.cb-date-divider {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 0;
  color: var(--cb-text-secondary);
  font-size: var(--cb-text-2xs);
  font-weight: 500;
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

  .cb-header-back-btn,
  .cb-actions-btn,
  .cb-close-window-btn {
    width: 40px;
    height: 40px;
  }

  .cb-header-back-btn svg,
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

/* Usar 16px como m\xEDnimo en pantallas t\xE1ctiles para evitar el zoom autom\xE1tico de iOS al enfocar el campo */
@media (pointer: coarse) {
  #cb-input {
    font-size: var(--cb-text-lg);
  }
}

/* Configurar estados de foco para navegaci\xF3n por teclado */
.cb-launcher-btn:focus-visible,
.cb-actions-btn:focus-visible,
#cb-send-btn:focus-visible {
  outline: 2.5px solid var(--cb-primary);
  outline-offset: 3px;
}

#chat-bubble-window button:focus-visible,
.cb-history-item:focus-visible,
.cb-attachment-thumb:focus-visible {
  outline: 2px solid var(--cb-link-color);
  outline-offset: 2px;
}

#cb-input:focus-visible {
  outline: none;
}

/* Dise\xF1ar bot\xF3n flotante para volver al fondo */
.cb-scroll-bottom-btn {
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  height: 34px;
  min-width: 34px;
  padding: 0 8px;
  border-radius: 999px;
  background: var(--cb-bg);
  border: 1px solid var(--cb-composer-border);
  color: var(--cb-text-secondary);
  font-family: var(--cb-font);
  font-size: var(--cb-text-xs);
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: var(--cb-elev-2);
  z-index: 10;

  /* Configurar transici\xF3n de entrada y salida del bot\xF3n flotante */
  opacity: 0;
  transform: translateX(-50%) translateY(8px) scale(0.85);
  pointer-events: none;
  transition:
    opacity 0.22s var(--cb-ease-standard),
    transform 0.25s var(--cb-ease-out-spring),
    background-color var(--cb-transition),
    border-color var(--cb-transition),
    color var(--cb-transition),
    box-shadow var(--cb-transition),
    bottom 0.22s var(--cb-ease-standard);
}

/* Aplicar efecto transl\xFAcido para no tapar el texto de golpe */
@supports (backdrop-filter: blur(1px)) and (color: color-mix(in srgb, red, blue)) {
  .cb-scroll-bottom-btn {
    background: color-mix(in srgb, var(--cb-bg) 82%, transparent);
    -webkit-backdrop-filter: blur(10px) saturate(1.4);
    backdrop-filter: blur(10px) saturate(1.4);
  }
}

.cb-scroll-bottom-btn.cb-visible {
  opacity: 1;
  transform: translateX(-50%) translateY(0) scale(1);
  pointer-events: all;
}

.cb-scroll-bottom-btn:hover {
  color: var(--cb-text);
  box-shadow: var(--cb-elev-3);
}

.cb-scroll-bottom-btn:active {
  transform: translateX(-50%) scale(0.94);
}

.cb-scroll-bottom-btn svg {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  transition: transform 0.22s var(--cb-ease-standard);
}

.cb-scroll-bottom-btn:hover svg {
  transform: translateY(1.5px);
}

/* Ocultar la etiqueta hasta que haya contenido nuevo */
.cb-scroll-bottom-label {
  max-width: 0;
  overflow: hidden;
  white-space: nowrap;
  opacity: 0;
  transition:
    max-width 0.28s var(--cb-ease-standard),
    opacity 0.2s ease,
    margin 0.28s var(--cb-ease-standard);
}

/* Expandir a p\xEDldora con color primario cuando llega una respuesta fuera de vista */
.cb-scroll-bottom-btn.cb-has-new {
  padding: 0 14px 0 10px;
  background: var(--cb-primary);
  border-color: transparent;
  color: var(--cb-primary-text);
  box-shadow: 0 6px 18px -4px var(--cb-primary-a40);
}

.cb-scroll-bottom-btn.cb-has-new .cb-scroll-bottom-label {
  max-width: 140px;
  margin-left: 6px;
  opacity: 1;
}

.cb-scroll-bottom-btn.cb-has-new svg {
  animation: cb-scroll-nudge 1.6s var(--cb-ease-standard) infinite;
}

@keyframes cb-scroll-nudge {
  0%,
  60%,
  100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(2px);
  }
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
  background: var(--cb-hover);
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

/* Mostrar la imagen adjunta como chip dentro del composer, antes de enviarla */
.cb-attachment-preview {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  transition:
    max-height 0.22s var(--cb-ease-standard),
    opacity 0.18s ease;
}

.cb-attachment-preview.cb-visible {
  max-height: 80px;
  opacity: 1;
  pointer-events: auto;
}

.cb-attachment-chip {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  max-width: 100%;
  margin: 3px 3px 4px;
  padding: 6px 34px 6px 6px;
  border: 1px solid var(--cb-composer-border);
  border-radius: 14px;
  background: var(--cb-bg-secondary);
}

.cb-attachment-thumb {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background-color: var(--cb-bg);
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  box-shadow: inset 0 0 0 1px var(--cb-surface-edge);
  cursor: zoom-in;
  transition: transform 0.15s var(--cb-ease-standard);
}

.cb-attachment-thumb:hover {
  transform: scale(1.04);
}

.cb-attachment-info {
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: 1px;
}

.cb-attachment-name {
  max-width: 200px;
  font-size: var(--cb-text-sm);
  font-weight: 600;
  color: var(--cb-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cb-attachment-hint {
  font-size: var(--cb-text-2xs);
  font-weight: 500;
  color: var(--cb-text-secondary);
  letter-spacing: 0.02em;
}

.cb-attachment-remove {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: none;
  background: var(--cb-hover);
  color: var(--cb-text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  transition:
    background-color var(--cb-transition),
    color var(--cb-transition);
}

.cb-attachment-remove:hover {
  background: var(--cb-danger-bg);
  color: var(--cb-danger);
}

.cb-attachment-remove svg {
  width: 12px;
  height: 12px;
}

/* Configurar burbuja de imagen enviada por el usuario */
.cb-message--user .cb-image-message {
  padding: 4px;
  max-width: 248px;
}

.cb-image-message-img {
  display: block;
  width: 100%;
  max-width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 14px 14px 4px 14px;
  cursor: zoom-in;
}

/* Redondear tambi\xE9n abajo cuando la imagen lleva texto debajo */
.cb-image-message-img:not(:last-child) {
  border-radius: 14px;
}

/* Estilizar imagen clicable enviada por el bot v\xEDa markdown */
.cb-image {
  cursor: pointer;
}

/* Configurar burbuja propia para el texto, ya que el contenedor de la imagen es transparente */
.cb-image-message-caption {
  margin: 0;
  padding: 7px 10px 5px;
  color: var(--cb-user-text);
  font-size: var(--cb-font-size-msg);
  line-height: 1.45;
  word-break: break-word;
}

/* Mostrar la cita como tarjeta dentro del composer, igual que el adjunto */
.cb-reply-preview {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  transition:
    max-height 0.22s var(--cb-ease-standard),
    opacity 0.18s ease;
}

.cb-reply-preview.cb-visible {
  max-height: 90px;
  opacity: 1;
  pointer-events: auto;
}

.cb-reply-chip {
  position: relative;
  margin: 3px 3px 4px;
}

.cb-reply-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 7px 34px 8px 14px;
  border-radius: 14px;
  background: var(--cb-primary-a08);
  outline: 1px solid var(--cb-primary-a16);
  outline-offset: -1px;
  cursor: default;
  transition: background-color var(--cb-transition);
}

/* Dibujar barra lateral redondeada de la cita */
.cb-reply-card::before {
  content: "";
  position: absolute;
  left: 6px;
  top: 8px;
  bottom: 8px;
  width: 3px;
  border-radius: 3px;
  background: var(--cb-link-color);
}

.cb-reply-card.cb-is-linked {
  cursor: pointer;
}

.cb-reply-card.cb-is-linked:hover {
  background: var(--cb-primary-a12);
}

.cb-reply-label {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: var(--cb-text-2xs);
  color: var(--cb-text-secondary);
  line-height: 1.3;
}

.cb-reply-label svg {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
  color: var(--cb-link-color);
}

.cb-reply-label strong {
  font-weight: 700;
  color: var(--cb-link-color);
}

.cb-reply-text {
  font-size: var(--cb-text-xs);
  color: var(--cb-text);
  line-height: 1.45;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
}

.cb-reply-cancel {
  position: absolute;
  top: 6px;
  right: 6px;
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
  transition:
    background-color var(--cb-transition),
    color var(--cb-transition);
}

.cb-reply-cancel:hover {
  background: var(--cb-active);
  color: var(--cb-text);
}

.cb-reply-cancel svg {
  width: 12px;
  height: 12px;
}

/* Resaltar brevemente el mensaje al que se salta desde una cita */
.cb-message-content.cb-is-highlighted {
  animation: cb-msg-highlight 1.6s var(--cb-ease-standard);
}

@keyframes cb-msg-highlight {
  0%,
  35% {
    box-shadow: 0 0 0 3px var(--cb-primary-a32);
  }
  100% {
    box-shadow: 0 0 0 3px transparent;
  }
}

/* Formatear bloque de texto citado en la burbuja */
.cb-message-quote {
  position: relative;
  display: flex;
  align-items: stretch;
  gap: 8px;
  margin: 0 0 7px;
  padding: 6px 10px 6px 8px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.14);
  max-width: 100%;
  cursor: pointer;
  transition: background-color var(--cb-transition);
}

.cb-message-quote:hover {
  background: rgba(255, 255, 255, 0.22);
}

.cb-message-quote:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.8);
  outline-offset: 2px;
}

.cb-message-quote-bar {
  width: 3px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.75);
  flex-shrink: 0;
}

.cb-message-quote-text {
  font-size: var(--cb-text-xs);
  color: rgba(255, 255, 255, 0.85);
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
  gap: 7px;
  padding: 6px 0;
  background: transparent;
  border: none;
  box-shadow: none;
  position: relative;
  overflow: visible;
}

/* Animar destello de marca junto al texto de estado */
.cb-thinking-icon {
  display: flex;
  width: 14px;
  height: 14px;
  color: var(--cb-link-color);
  animation: cb-sparkle-think 2.4s var(--cb-ease-standard) infinite;
}

.cb-thinking-icon svg {
  width: 100%;
  height: 100%;
}

@keyframes cb-sparkle-think {
  0%,
  100% {
    transform: rotate(0deg) scale(0.85);
    opacity: 0.7;
  }
  50% {
    transform: rotate(90deg) scale(1.1);
    opacity: 1;
  }
}

.cb-thinking-text {
  font-size: var(--cb-text-md);
  font-weight: 500;
  background: var(--cb-thinking-gradient);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  animation:
    cb-shimmer-text 1.6s linear infinite,
    cb-step-in 0.32s var(--cb-ease-standard) both;
  display: inline-block;
  letter-spacing: 0.2px;
}

@keyframes cb-shimmer-text {
  to {
    background-position: 200% center;
  }
}

/* Entrar cada etapa nueva con un fundido ascendente */
@keyframes cb-step-in {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Girar anillo de marca alrededor del avatar mientras el asistente procesa */
.cb-typing-wrapper .cb-msg-avatar {
  position: relative;
  overflow: visible;
}

.cb-typing-wrapper .cb-msg-avatar img {
  border-radius: 50%;
}

.cb-typing-wrapper.cb-visible .cb-msg-avatar::before {
  content: "";
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    var(--cb-link-color),
    var(--cb-primary-a12) 40%,
    transparent 60%,
    var(--cb-link-color)
  );
  -webkit-mask: radial-gradient(
    farthest-side,
    transparent calc(100% - 2px),
    #000 calc(100% - 2px)
  );
  mask: radial-gradient(
    farthest-side,
    transparent calc(100% - 2px),
    #000 calc(100% - 2px)
  );
  animation: cb-ring-spin 1.2s linear infinite;
}

@keyframes cb-ring-spin {
  to {
    transform: rotate(1turn);
  }
}

/* Ocultar visualmente texto destinado solo a lectores de pantalla */
.cb-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
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
  background: var(--cb-hover);
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
  padding: 0 5px;
  background: var(--cb-bg);
  border-radius: inherit;
  z-index: 5;
  opacity: 0;
  transform: scale(0.98);
  pointer-events: none;
  transition:
    opacity 0.2s var(--cb-ease-standard),
    transform 0.2s var(--cb-ease-standard);
}

.cb-recording-ui.cb-visible {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}

/* Descartar: bot\xF3n fantasma con \xEDcono de basura */
.cb-recording-cancel {
  width: var(--cb-input-btn-size);
  height: var(--cb-input-btn-size);
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

.cb-recording-cancel:hover {
  background: var(--cb-danger-bg);
  color: var(--cb-danger);
}

.cb-recording-cancel svg {
  width: 17px;
  height: 17px;
}

.cb-recording-status {
  display: flex;
  align-items: center;
  gap: 7px;
  flex-shrink: 0;
}

/* Mostrar punto de grabaci\xF3n con halo pulsante */
.cb-recording-dot {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--cb-danger);
  flex-shrink: 0;
}

.cb-recording-dot::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: var(--cb-danger);
  animation: cb-rec-halo 1.4s ease-out infinite;
}

@keyframes cb-rec-halo {
  from {
    transform: scale(1);
    opacity: 0.55;
  }
  to {
    transform: scale(2.6);
    opacity: 0;
  }
}

.cb-recording-timer {
  min-width: 30px;
  font-size: var(--cb-text-sm);
  font-weight: 600;
  color: var(--cb-text);
  font-variant-numeric: tabular-nums;
  transition: color var(--cb-transition);
}

/* Avisar en rojo los \xFAltimos segundos antes del l\xEDmite */
.cb-recording-ui.cb-is-ending .cb-recording-timer {
  color: var(--cb-danger);
}

/* Dibujar onda desplazable con barras fijas escaladas verticalmente */
.cb-recording-wave {
  flex: 1;
  min-width: 0;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2px;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(to right, transparent, #000 18%);
  mask-image: linear-gradient(to right, transparent, #000 18%);
}

.cb-recording-bar {
  flex-shrink: 0;
  width: 3px;
  height: 100%;
  border-radius: 3px;
  background: var(--cb-composer-border);
  transform: scaleY(0.12);
  transition:
    transform 0.08s linear,
    background 0.2s ease;
}

.cb-recording-bar.cb-is-on {
  background: var(--cb-link-color);
}

/* Enviar con anillo de progreso hacia el l\xEDmite de duraci\xF3n */
.cb-recording-send {
  position: relative;
  width: var(--cb-input-btn-size);
  height: var(--cb-input-btn-size);
  border-radius: 50%;
  border: none;
  background: var(--cb-primary);
  color: var(--cb-primary-text);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  overflow: visible;
  transition: background var(--cb-transition);
}

.cb-recording-send:hover {
  background: var(--cb-primary-hover);
}

.cb-recording-send > svg:not(.cb-recording-ring) {
  width: var(--cb-icon-size-sm);
  height: var(--cb-icon-size-sm);
}

.cb-recording-ring {
  position: absolute;
  inset: -4px;
  width: calc(100% + 8px);
  height: calc(100% + 8px);
  transform: rotate(-90deg);
  pointer-events: none;
}

.cb-recording-ring circle {
  fill: none;
  stroke-width: 2;
}

.cb-recording-ring-track {
  stroke: var(--cb-primary-a16);
}

.cb-recording-ring-fill {
  stroke: var(--cb-link-color);
  stroke-linecap: round;
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  transition: stroke var(--cb-transition);
}

.cb-recording-ui.cb-is-live .cb-recording-ring-fill {
  animation: cb-rec-ring var(--cb-rec-max, 30s) linear forwards;
}

.cb-recording-ui.cb-is-ending .cb-recording-ring-fill {
  stroke: var(--cb-danger);
}

@keyframes cb-rec-ring {
  to {
    stroke-dashoffset: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cb-recording-dot::after {
    animation: none;
  }
  .cb-recording-bar {
    transition: none;
  }
}

/* Configurar reproductor de audio compacto en burbuja */
.cb-message--user .cb-audio-player {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px 8px 8px;
  width: 268px;
  max-width: 100%;
}

.cb-audio-play-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: #fff;
  color: var(--cb-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  box-shadow: 0 2px 6px rgba(16, 10, 30, 0.18);
  transition: transform 0.15s var(--cb-ease-spring);
}

.cb-audio-play-btn:hover {
  transform: scale(1.06);
}

.cb-audio-play-btn:active {
  transform: scale(0.94);
}

.cb-audio-play-btn svg {
  width: 16px;
  height: 16px;
}

/* Dibujar onda en dos capas; la reproducida se recorta seg\xFAn --p para un avance continuo */
.cb-audio-wave {
  --p: 0%;
  position: relative;
  flex: 1;
  min-width: 0;
  height: 28px;
  cursor: pointer;
  touch-action: none;
  border-radius: 4px;
}

.cb-audio-wave:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.9);
  outline-offset: 3px;
}

.cb-audio-wave-layer {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cb-audio-wave-layer--played {
  clip-path: inset(0 calc(100% - var(--p)) 0 0);
}

.cb-audio-wave-bar {
  width: 3px;
  height: calc(var(--h, 0.4) * 100%);
  min-height: 3px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.38);
  transition: height 0.35s var(--cb-ease-standard);
}

.cb-audio-wave-layer--played .cb-audio-wave-bar {
  background: #fff;
}

/* Mostrar perilla de posici\xF3n al iniciar la reproducci\xF3n o al buscar */
.cb-audio-knob {
  position: absolute;
  top: 50%;
  left: var(--p);
  width: 12px;
  height: 12px;
  margin: -6px 0 0 -6px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 4px rgba(16, 10, 30, 0.35);
  transform: scale(0);
  transition: transform 0.18s var(--cb-ease-spring);
  pointer-events: none;
}

.cb-audio-wave.cb-is-started .cb-audio-knob,
.cb-audio-wave:hover .cb-audio-knob,
.cb-audio-wave:focus-visible .cb-audio-knob {
  transform: scale(1);
}

.cb-audio-wave.cb-is-seeking .cb-audio-knob {
  transform: scale(1.25);
}

/* Dise\xF1ar control de velocidad tipo p\xEDldora */
.cb-audio-speed {
  flex-shrink: 0;
  min-width: 36px;
  padding: 2px 8px;
  border: none;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  font-family: var(--cb-font);
  font-size: var(--cb-text-2xs);
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  line-height: 1.6;
  cursor: pointer;
  transition: background var(--cb-transition);
}

.cb-audio-speed:hover {
  background: rgba(255, 255, 255, 0.32);
}

@media (prefers-reduced-motion: reduce) {
  .cb-audio-wave-bar,
  .cb-audio-knob {
    transition: none;
  }
}

/* ==========================================================================
   Panel de Conversaciones Pasadas (Historial)
   ========================================================================== */

.cb-actions-btn.cb-is-active {
  background: var(--cb-primary-a12) !important;
  color: var(--cb-link-color) !important;
}

.cb-history-panel {
  position: absolute;
  left: 0;
  width: 100%;
  background: var(--cb-bg);
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

.cb-history-panel-top {
  flex-shrink: 0;
  padding: 12px 12px 4px;
}

.cb-history-new-btn {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid var(--cb-composer-border);
  border-radius: 12px;
  background: var(--cb-bg);
  color: var(--cb-text);
  font-family: var(--cb-font);
  font-size: var(--cb-text-sm);
  font-weight: 600;
  cursor: pointer;
  box-shadow: var(--cb-elev-1);
  transition:
    border-color var(--cb-transition),
    background var(--cb-transition),
    color var(--cb-transition);
}

.cb-history-new-btn:hover {
  border-color: var(--cb-primary-a40);
  background: var(--cb-primary-a04);
  color: var(--cb-link-color);
}

.cb-history-new-btn svg {
  width: 18px;
  height: 18px;
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
  font-size: var(--cb-text-2xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--cb-text-secondary);
  padding: 14px 20px 6px;
}

.cb-history-group:first-child .cb-history-group-label {
  padding-top: 8px;
}

.cb-history-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2px 8px;
  padding: 10px 12px;
  cursor: pointer;
  border-radius: 12px;
  transition: background var(--cb-transition);
  position: relative;
  box-sizing: border-box;
}


.cb-history-item:hover {
  background: var(--cb-hover);
}

.cb-history-item--active {
  background: var(--cb-primary-a08) !important;
  cursor: default;
  pointer-events: none;
}

/* Dise\xF1ar estado de confirmaci\xF3n de borrado */
.cb-history-item--confirming {
  background: var(--cb-bg) !important;
  cursor: default;
}

.cb-history-item--confirming .cb-history-item-content {
  opacity: 0;
  pointer-events: none;
}

.cb-history-item--confirming .cb-history-item-delete {
  display: none !important;
}

/* Confirmar el borrado en l\xEDnea, sobre el propio \xEDtem */
.cb-history-item-confirm {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 0 8px 0 12px;
  border-radius: inherit;
  background: var(--cb-danger-bg);
  box-shadow: inset 0 0 0 1px var(--cb-error-border);
  animation: cb-confirm-fade-in 0.16s var(--cb-ease-standard);
}

@keyframes cb-confirm-fade-in {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.cb-history-item-confirm-text {
  min-width: 0;
  font-family: var(--cb-font);
  font-size: var(--cb-text-sm);
  font-weight: 600;
  color: var(--cb-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cb-history-item-confirm-actions {
  display: flex;
  gap: 6px;
  flex-shrink: 0;
}

/* Diferenciar botones de confirmaci\xF3n: secundario neutro y primario destructivo */
.cb-history-item-confirm-no,
.cb-history-item-confirm-yes {
  font-family: var(--cb-font);
  font-size: var(--cb-text-xs);
  font-weight: 600;
  line-height: 1;
  border-radius: 8px;
  padding: 7px 12px;
  cursor: pointer;
  transition:
    background var(--cb-transition),
    border-color var(--cb-transition),
    color var(--cb-transition),
    box-shadow var(--cb-transition);
}

.cb-history-item-confirm-no {
  background: var(--cb-bg);
  border: 1px solid var(--cb-composer-border);
  color: var(--cb-text);
}

.cb-history-item-confirm-no:hover {
  background: var(--cb-hover);
}

.cb-history-item-confirm-yes {
  background: var(--cb-danger);
  border: 1px solid var(--cb-danger);
  color: #fff;
  box-shadow: 0 1px 2px rgba(220, 38, 38, 0.3);
}

.cb-history-item-confirm-yes:hover {
  background: #dc2626;
  border-color: #dc2626;
}

.cb-history-item-content {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  transition: opacity var(--cb-transition);
}

.cb-history-item-title-row {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  min-height: 20px;
}

/* Marcar la conversaci\xF3n actual con un punto de marca en lugar de un badge */
.cb-history-item--active .cb-history-item-title-row::before {
  content: "";
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--cb-link-color);
  flex-shrink: 0;
}

.cb-history-item-title {
  flex: 1;
  min-width: 0;
  font-family: var(--cb-font);
  font-weight: 600;
  font-size: var(--cb-text-sm);
  color: var(--cb-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.35;
}

.cb-history-item-time {
  flex-shrink: 0;
  font-family: var(--cb-font);
  font-size: var(--cb-text-2xs);
  font-weight: 500;
  color: var(--cb-text-secondary);
  font-variant-numeric: tabular-nums;
}

.cb-history-item-preview {
  font-family: var(--cb-font);
  font-size: var(--cb-text-xs);
  color: var(--cb-text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
}

.cb-history-item--active .cb-history-item-preview {
  padding-left: 15px;
}

/* Mostrar el bot\xF3n de eliminar en lugar de la hora al pasar el cursor o enfocar */
.cb-history-item-delete {
  display: none;
  width: 26px;
  height: 26px;
  margin: -3px -4px -3px 0;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: transparent;
  color: var(--cb-text-secondary);
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition:
    background var(--cb-transition),
    color var(--cb-transition);
}

@media (hover: hover) {
  .cb-history-item:hover .cb-history-item-time,
  .cb-history-item:focus-within .cb-history-item-time {
    display: none;
  }

  .cb-history-item:hover .cb-history-item-delete,
  .cb-history-item:focus-within .cb-history-item-delete {
    display: flex;
  }
}

/* Mantener visible el bot\xF3n de eliminar en pantallas t\xE1ctiles */
@media (hover: none) {
  .cb-history-item-delete {
    display: flex;
  }
}

.cb-history-item-delete:hover {
  background: color-mix(in srgb, var(--cb-danger) 10%, transparent);
  color: var(--cb-danger);
}

.cb-history-item-delete svg {
  width: 15px;
  height: 15px;
}

/* Animar la entrada escalonada de los \xEDtems al abrir el panel */
.cb-history-list.cb-is-entering .cb-history-item {
  animation: cb-message-appear 0.28s ease-out var(--cb-item-delay, 0ms) both;
}

@media (prefers-reduced-motion: reduce) {
  .cb-history-list.cb-is-entering .cb-history-item {
    animation: none;
  }
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
  font-size: var(--cb-text-sm);
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
  background: rgba(16, 10, 30, 0.4);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
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
  max-width: 300px;
  background: var(--cb-bg);
  border-radius: var(--cb-radius);
  box-shadow:
    var(--cb-elev-3),
    0 0 0 1px var(--cb-surface-edge);
  padding: 24px 20px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transform: translateY(8px) scale(0.96);
  transition: transform 0.2s var(--cb-ease-out-spring, ease);
}

.cb-clear-all-dialog:focus {
  outline: none;
}

.cb-clear-all-overlay.cb-is-active .cb-clear-all-dialog {
  transform: translateY(0) scale(1);
}

.cb-clear-all-icon {
  width: 44px;
  height: 44px;
  margin-bottom: 14px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--cb-danger-bg);
  color: var(--cb-danger);
  box-shadow: 0 0 0 6px color-mix(in srgb, var(--cb-danger-bg) 50%, transparent);
}

.cb-clear-all-icon svg {
  width: 20px;
  height: 20px;
}

.cb-clear-all-text {
  margin: 0;
  font-family: var(--cb-font);
  font-size: var(--cb-text-lg);
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--cb-text);
}

.cb-clear-all-desc {
  margin: 6px 0 0;
  font-family: var(--cb-font);
  font-size: var(--cb-text-sm);
  line-height: 1.5;
  color: var(--cb-text-secondary);
}

.cb-clear-all-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  width: 100%;
  margin-top: 20px;
}

.cb-clear-all-actions .cb-history-item-confirm-no,
.cb-clear-all-actions .cb-history-item-confirm-yes {
  padding: 10px 14px;
  border-radius: 10px;
  font-size: var(--cb-text-sm);
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
  font-size: var(--cb-text-md);
  font-weight: 600;
  color: var(--cb-text);
  opacity: 0.6;
  margin: 0;
}

.cb-history-empty-sub {
  font-family: var(--cb-font);
  font-size: var(--cb-text-xs);
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
  font-size: var(--cb-text-md);
  font-weight: 600;
  text-align: center;
}

.cb-dropzone-content svg {
  width: 32px;
  height: 32px;
}
`;var j="cb_widget_v1_session_id",K="cb_widget_v1_history",U="cb_widget_v1_sessions_index",P="cb_widget_v1_history_";function re(){if(typeof crypto<"u"&&typeof crypto.randomUUID=="function")return crypto.randomUUID();if(typeof crypto<"u"&&typeof crypto.getRandomValues=="function"){let n=new Uint8Array(16);crypto.getRandomValues(n),n[6]=n[6]&15|64,n[8]=n[8]&63|128;let e=Array.from(n).map(t=>t.toString(16).padStart(2,"0")).join("");return`${e.slice(0,8)}-${e.slice(8,12)}-${e.slice(12,16)}-${e.slice(16,20)}-${e.slice(20)}`}return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,n=>{let e=Math.random()*16|0;return(n==="x"?e:e&3|8).toString(16)})}function C(){try{let n=localStorage.getItem(j);return n||(n=re(),localStorage.setItem(j,n)),n}catch{return C._fallbackId||(C._fallbackId=re()),C._fallbackId}}function O(n){try{localStorage.setItem(j,n)}catch{}}function ve(n){let e=n.find(t=>t.role==="user");return e?e.text:"Conversaci\xF3n 1"}function D(){try{let n=localStorage.getItem(U);return(n?JSON.parse(n):[]).sort((t,i)=>{let a=new Date(t.lastUserMessageAt||t.lastMessageAt).getTime();return new Date(i.lastUserMessageAt||i.lastMessageAt).getTime()-a})}catch{return[]}}function I(n,e,t){try{let i=D(),a=i.find(l=>l.sessionId===n),r=new Date().toISOString(),s=e||(a?a.title:"Conversaci\xF3n 1"),b=[...F(n)].reverse().find(l=>l.role==="user");if(!b){if(a){let l=i.filter(o=>o.sessionId!==n);localStorage.setItem(U,JSON.stringify(l))}return}let c=b.date;for(a?(a.title=s,a.messageCount=t,a.lastMessageAt=r,a.lastUserMessageAt=c):(a={sessionId:n,title:s,startedAt:r,lastMessageAt:r,lastUserMessageAt:c,messageCount:t,historyKey:`${P}${n}`},i.push(a)),i.sort((l,o)=>{let u=new Date(l.lastUserMessageAt||l.lastMessageAt).getTime();return new Date(o.lastUserMessageAt||o.lastMessageAt).getTime()-u});i.length>20;){let l=i.pop();try{localStorage.removeItem(l.historyKey)}catch{}}localStorage.setItem(U,JSON.stringify(i))}catch(i){console.error("Error saving session to index",i)}}function V(n){try{let t=D().filter(i=>i.sessionId!==n);localStorage.setItem(U,JSON.stringify(t)),localStorage.removeItem(`${P}${n}`)}catch{}}function F(n){try{let e=`${P}${n}`,t=localStorage.getItem(e);return t?JSON.parse(t):[]}catch{return[]}}function se(){try{let n=G();if(n){let e=S(n);if(e&&e.length>0){let t=ve(e);I(n,t,e.length)}}localStorage.removeItem(j),localStorage.removeItem(K),C._fallbackId&&delete C._fallbackId,S._fallbackHistory&&delete S._fallbackHistory}catch{}return C()}function S(n){let e=n||G(),t=e?`${P}${e}`:null;try{if(t){let i=localStorage.getItem(t);if(i)return JSON.parse(i);let a=localStorage.getItem(K);if(a)return localStorage.setItem(t,a),localStorage.removeItem(K),JSON.parse(a)}return[]}catch{return S._fallbackHistory||[]}}function q(n,e){let t=e||G(),i=t?`${P}${t}`:null;try{i&&localStorage.setItem(i,JSON.stringify(n))}catch{S._fallbackHistory=n}}function G(){try{return localStorage.getItem(j)}catch{return C._fallbackId||null}}function oe(n){let e=n.trim();return/^javascript:/i.test(e)||/^data:/i.test(e)||/^vbscript:/i.test(e)?"#":e}function W(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function fe(n){let e=n.split(/(<[^>]+>)/g),t=!1;return e.map(i=>{if(i.startsWith("<")&&i.endsWith(">"))return i.toLowerCase().startsWith("<a")?t=!0:i.toLowerCase()==="</a>"&&(t=!1),i;if(t)return i;let a=/(?:https?|ftp):\/\/[^\s<>"{}|\\^`[\]]+/g;return i.replace(a,r=>{let s=r.match(/[.,;:!?)"']+$/),d=s?r.slice(0,-s[0].length):r,b=s?s[0]:"",c=d.includes("ayuda.aliaddo.com")?"_self":"_blank";return`<a href="${d}" target="${c}" rel="noopener noreferrer" class="cb-link">${d}</a>${b}`})}).join("")}function ye(n,e){return n.replace(/```(\w*)\n?([\s\S]*?)```/g,(t,i,a)=>{let r=e.length,s=i?` class="language-${W(i)}"`:"";return e.push(`<pre class="cb-code-block"><code${s}>${W(a.trim())}</code></pre>`),`\0CODEBLOCK${r}\0`})}function xe(n,e){return n.replace(/`([^`\n]+)`/g,(t,i)=>{let a=e.length;return e.push(`<code class="cb-inline-code">${W(i)}</code>`),`\0INLINECODE${a}\0`})}function we(n,e,t){let i=n;return e.forEach((a,r)=>{i=i.replace(`\0CODEBLOCK${r}\0`,a)}),t.forEach((a,r)=>{i=i.replace(`\0INLINECODE${r}\0`,a)}),i}function ne(n){return n.replace(/\*\*([^*\n]+)\*\*/g,"<strong>$1</strong>").replace(/__([^_\n]+)__/g,"<strong>$1</strong>").replace(/(?<!\*)\*(?!\*)([^*\n]+)(?<!\*)\*(?!\*)/g,"<em>$1</em>").replace(/(?<!_)_(?!_)([^_\n]+)(?<!_)_(?!_)/g,"<em>$1</em>").replace(/~~([^~\n]+)~~/g,"<del>$1</del>")}function ke(n,e){let t=n,i=/!\[([^\]]*)\]\(((?:[^()\s]|\([^()]*\))*)\)/g;t=t.replace(i,(r,s,d)=>{let c=`<img src="${oe(d)}" alt="${s}" class="cb-image" style="max-width: 100%; border-radius: var(--cb-radius, 12px); margin: 8px 0; display: block;" loading="lazy" />`,l=e.length;return e.push(c),`\0LINK${l}\0`});let a=/\[([^\]]+)\]\(((?:[^()\s]|\([^()]*\))*)\)/g;return t=t.replace(a,(r,s,d)=>{let b=oe(d),c=b.includes("ayuda.aliaddo.com")?"_self":"_blank",l=ne(s),o=`<a href="${b}" target="${c}" rel="noopener noreferrer" class="cb-link">${l}</a>`,u=e.length;return e.push(o),`\0LINK${u}\0`}),t}function _e(n,e){let t=n;return e.forEach((i,a)=>{t=t.replace(`\0LINK${a}\0`,i)}),t}function H(n){let e=[],t=ke(n,e);return t=ne(t),t=fe(t),t=_e(t,e),t}function ce(n){if(!n||typeof n!="string")return"";let e=[],t=[],i=ye(n,e);i=W(i),i=xe(i,t);let a=i.split(/\r?\n/),r=[],s=null;for(let c=0;c<a.length;c++){let l=a[c],o=l.trim();if(o===""){s&&(r.push(s),s=null);continue}if(/^([-*_])(\s*\1){2,}$/.test(o)){s&&(r.push(s),s=null),r.push({type:"hr"});continue}let u=l.match(/^(#{1,3})\s+(.+)$/);if(u){s&&r.push(s);let f=u[1].length,y=u[2];r.push({type:"heading",level:f,text:y}),s=null;continue}let v=l.match(/^(\s*)[-*]\s+(.+)$/);if(v){let f=v[2];s&&s.type!=="ul"&&(r.push(s),s=null),s||(s={type:"ul",items:[]}),s.items.push(f);continue}let m=l.match(/^\s*(\d+)\.\s+(.+)$/);if(m){let f=m[2];s&&s.type!=="ol"&&(r.push(s),s=null),s||(s={type:"ol",items:[]}),s.items.push(f);continue}if(o.startsWith("|")){s&&s.type!=="table"&&(r.push(s),s=null),s||(s={type:"table",rows:[]}),s.rows.push(o);continue}s&&s.type!=="p"&&(r.push(s),s=null),s||(s={type:"p",lines:[]}),s.lines.push(l)}s&&r.push(s);let b=r.map(c=>{if(c.type==="hr")return'<hr class="cb-hr" />';if(c.type==="heading"){let l=H(c.text);return`<h${c.level} class="cb-heading">${l}</h${c.level}>`}if(c.type==="ul")return`<ul class="cb-list">${c.items.map(o=>`<li>${H(o)}</li>`).join("")}</ul>`;if(c.type==="ol")return`<ol class="cb-list cb-list--ordered">${c.items.map(o=>`<li>${H(o)}</li>`).join("")}</ol>`;if(c.type==="table"){let l=c.rows.map(y=>{let x=y;return x.startsWith("|")&&(x=x.substring(1)),x.endsWith("|")&&(x=x.substring(0,x.length-1)),x.split("|").map(_=>_.trim())}),o=[],u=[],v=!1;if(l.length>1){let y=l[1];v=y.length>0&&y.every(x=>/^[-:\s]+$/.test(x))}l.forEach((y,x)=>{v&&x===1||(v&&x===0?u=y:o.push(y))});let m="";u.length>0&&(m=`<thead><tr>${u.map(y=>`<th style="padding: 8px; border: 1px solid rgba(150,150,150,0.3); background-color: rgba(150,150,150,0.1); text-align: left;">${H(y)}</th>`).join("")}</tr></thead>`);let f=`<tbody>${o.map(y=>`<tr>${y.map(x=>`<td style="padding: 8px; border: 1px solid rgba(150,150,150,0.3);">${H(x)}</td>`).join("")}</tr>`).join("")}</tbody>`;return`<div class="cb-table-wrapper" style="overflow-x: auto; margin: 10px 0;"><table class="cb-table" style="width: 100%; border-collapse: collapse; font-size: 0.9em;">${m}${f}</table></div>`}return c.type==="p"?`<p class="cb-paragraph">${c.lines.map(o=>H(o)).join("<br>")}</p>`:""}).join("");return b=we(b,e,t),b}function Ee(n,e,t,i=null){let a=new AbortController,r=setTimeout(()=>a.abort(),t);return i&&(i.aborted?a.abort():i.addEventListener("abort",()=>a.abort())),fetch(n,{...e,signal:a.signal}).finally(()=>clearTimeout(r))}function Ce(n){return new Promise(e=>setTimeout(e,n))}function J(n){return n.name==="AbortError"?"La respuesta est\xE1 tardando m\xE1s de lo normal. Int\xE9ntalo de nuevo en unos segundos.":n.name==="TypeError"?"No se pudo establecer conexi\xF3n. Verifica tu conexi\xF3n a internet e int\xE9ntalo de nuevo.":"Ocurri\xF3 un problema al enviar tu mensaje. Int\xE9ntalo de nuevo."}function Q(n){return n===401||n===403?"No tienes permiso para usar el asistente en este momento. Contacta al administrador del sitio.":n===404?"El asistente no est\xE1 disponible en este momento. Contacta al administrador del sitio.":n===429?"Est\xE1s enviando mensajes muy r\xE1pido. Espera un momento antes de volver a intentarlo.":n>=500?"El asistente no est\xE1 disponible en este momento. Int\xE9ntalo de nuevo en unos minutos.":"Ocurri\xF3 un problema al procesar tu mensaje. Int\xE9ntalo de nuevo."}async function Y(n,e,t,i,a=null){try{return await Ee(n,e,t,a)}catch(r){if(i>0&&r.name!=="AbortError")return await Ce(1e3),Y(n,e,t,i-1,a);throw r}}async function le(n,e,t,i={},a=9e4,r=null,s=null){if(!n)throw new Error("El asistente no est\xE1 disponible en este momento. Contacta al administrador del sitio.");let d={chatInput:e.trim(),sessionId:t,metadata:{timestamp:new Date().toISOString(),source:"chat-bubble",userAgent:typeof navigator<"u"?navigator.userAgent:"unknown",...i}},b={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(d)},c;try{c=await Y(n,b,a,1,r)}catch(o){throw o.name==="AbortError"&&r&&r.aborted?o:new Error(J(o))}if(!c.ok){try{let o=await c.text();o&&console.error("[ChatBubble] Detalle del error del webhook:",o.slice(0,500))}catch{}throw new Error(Q(c.status))}let l;try{l=await c.json()}catch{throw new Error("No se pudo obtener una respuesta v\xE1lida. Int\xE9ntalo de nuevo.")}if(!l||typeof l.output>"u"){let o=l?.message||l?.text||l?.response||l?.content;if(o)return{output:String(o),sessionId:l.sessionId||t};throw new Error("No se pudo obtener una respuesta v\xE1lida. Int\xE9ntalo de nuevo.")}return{output:String(l.output),sessionId:l.sessionId||t}}async function de(n,e,t,i="",a={},r=9e4,s=null){if(!n)throw new Error("El asistente no est\xE1 disponible en este momento. Contacta al administrador del sitio.");let d=new FormData;d.append("sessionId",t),d.append("metadata",JSON.stringify({type:"image",caption:i||"",mimeType:e.type,fileName:e.name||"",size:e.size,timestamp:new Date().toISOString(),source:"chat-bubble",userAgent:typeof navigator<"u"?navigator.userAgent:"unknown",...a})),i&&d.append("chatInput",i),d.append("imageFile",e,e.name||"image");let b={method:"POST",body:d},c;try{c=await Y(n,b,r,1,s)}catch(o){throw o.name==="AbortError"&&s&&s.aborted?o:new Error(J(o))}if(!c.ok){try{let o=await c.text();o&&console.error("[ChatBubble] Detalle del error del webhook:",o.slice(0,500))}catch{}throw new Error(Q(c.status))}let l;try{l=await c.json()}catch{throw new Error("No se pudo obtener una respuesta v\xE1lida. Int\xE9ntalo de nuevo.")}if(!l||typeof l.output>"u"){let o=l?.message||l?.text||l?.response||l?.content;if(o)return{output:String(o),sessionId:l.sessionId||t};throw new Error("No se pudo obtener una respuesta v\xE1lida. Int\xE9ntalo de nuevo.")}return{output:String(l.output),sessionId:l.sessionId||t}}async function be(n,e,t,i,a="audio/webm",r={},s=9e4,d=null){if(!n)throw new Error("El asistente no est\xE1 disponible en este momento. Contacta al administrador del sitio.");let b=`voice_${Date.now()}.mp3`,c="audio/mpeg",l=new Blob([e],{type:c}),o=new FormData;o.append("sessionId",t),o.append("metadata",JSON.stringify({type:"audio",duration:i,mimeType:c,filename:b,timestamp:new Date().toISOString(),source:"chat-bubble",userAgent:typeof navigator<"u"?navigator.userAgent:"unknown",...r})),o.append("data",l,b);let u={method:"POST",body:o},v;try{v=await Y(n,u,s,1,d)}catch(f){throw f.name==="AbortError"&&d&&d.aborted?f:new Error(J(f))}if(!v.ok){try{let f=await v.text();f&&console.error("[ChatBubble] Detalle del error del webhook:",f.slice(0,500))}catch{}throw new Error(Q(v.status))}let m;try{m=await v.json()}catch{throw new Error("No se pudo obtener una respuesta v\xE1lida. Int\xE9ntalo de nuevo.")}if(!m||typeof m.output>"u"){let f=m?.message||m?.text||m?.response||m?.content;if(f)return{output:String(f),sessionId:m.sessionId||t};throw new Error("No se pudo obtener una respuesta v\xE1lida. Int\xE9ntalo de nuevo.")}return{output:String(m.output),sessionId:m.sessionId||t}}var X=class n{constructor(){this.mediaRecorder=null,this.stream=null,this.chunks=[],this.startTime=null,this.tickInterval=null,this.autoStopTimeout=null,this.analyser=null,this.audioCtx=null,this.levelInterval=null,this.seconds=0,this.cancelled=!1,this.mimeType="",this.onTick=null,this.onComplete=null,this.onError=null,this.onLevelChange=null}static getSupportedMimeType(){let e=["audio/webm;codecs=opus","audio/webm","audio/ogg;codecs=opus","audio/ogg","audio/mp4"];for(let t of e)if(MediaRecorder.isTypeSupported(t))return t;return""}static getExtension(e){return e.includes("ogg")?"ogg":e.includes("mp4")?"mp4":"webm"}async start(){this.cancelled=!1,this.chunks=[],this.seconds=0;try{this.stream=await navigator.mediaDevices.getUserMedia({audio:!0,video:!1})}catch(t){let i="No se pudo acceder al micr\xF3fono.";t.name==="NotAllowedError"||t.name==="PermissionDeniedError"?i="Permiso de micr\xF3fono denegado. Habil\xEDtalo en la configuraci\xF3n del navegador.":t.name==="NotFoundError"&&(i="No se encontr\xF3 ning\xFAn micr\xF3fono en este dispositivo."),this.onError&&this.onError(i);return}try{this.audioCtx=new(window.AudioContext||window.webkitAudioContext);let t=this.audioCtx.createMediaStreamSource(this.stream);this.analyser=this.audioCtx.createAnalyser(),this.analyser.fftSize=256,t.connect(this.analyser);let i=new Uint8Array(this.analyser.frequencyBinCount);this.levelInterval=setInterval(()=>{this.analyser.getByteFrequencyData(i);let a=i.reduce((r,s)=>r+s,0)/i.length;this.onLevelChange&&this.onLevelChange(a/255)},80)}catch{}this.mimeType=n.getSupportedMimeType();let e=this.mimeType?{mimeType:this.mimeType}:{};try{this.mediaRecorder=new MediaRecorder(this.stream,e)}catch{this.onError&&this.onError("Error al inicializar la grabaci\xF3n de audio."),this._cleanup();return}this.mediaRecorder.ondataavailable=t=>{t.data&&t.data.size>0&&this.chunks.push(t.data)},this.mediaRecorder.onstop=()=>{if(this.cancelled){this._cleanup();return}let t=this.seconds,i=new Blob(this.chunks,{type:this.mimeType||"audio/webm"});this._cleanup(),this.onComplete&&this.onComplete(i,t)},this.mediaRecorder.start(100),this.startTime=Date.now(),this.tickInterval=setInterval(()=>{this.seconds=Math.floor((Date.now()-this.startTime)/1e3),this.onTick&&this.onTick(this.seconds)},500),this.autoStopTimeout=setTimeout(()=>{this.stop()},30*1e3)}stop(){!this.mediaRecorder||this.mediaRecorder.state==="inactive"||(clearInterval(this.tickInterval),clearTimeout(this.autoStopTimeout),this.seconds=Math.floor((Date.now()-this.startTime)/1e3),this.mediaRecorder.stop())}cancel(){this.cancelled=!0,clearInterval(this.tickInterval),clearTimeout(this.autoStopTimeout),this.mediaRecorder&&this.mediaRecorder.state!=="inactive"?this.mediaRecorder.stop():this._cleanup()}_cleanup(){if(clearInterval(this.levelInterval),clearInterval(this.tickInterval),clearTimeout(this.autoStopTimeout),this.stream&&(this.stream.getTracks().forEach(e=>e.stop()),this.stream=null),this.audioCtx){try{this.audioCtx.close()}catch{}this.audioCtx=null}this.analyser=null,this.mediaRecorder=null}};function he(){return!!(navigator.mediaDevices&&typeof navigator.mediaDevices.getUserMedia=="function"&&typeof MediaRecorder<"u")}function ee(n){return new Promise((e,t)=>{let i=new FileReader;i.onloadend=()=>e(i.result),i.onerror=t,i.readAsDataURL(n)})}async function te(n){return await(await fetch(n)).blob()}var p={chat:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z"/>
    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z"/>
  </svg>`,close:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/>
  </svg>`,reply:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11Z" />
  </svg>`,stop:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <rect x="6.5" y="6.5" width="11" height="11" rx="2.5"></rect>
  </svg>`,sparkle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
    <path d="M6 0C6.3 3.5 8.5 5.7 12 6C8.5 6.3 6.3 8.5 6 12C5.7 8.5 3.5 6.3 0 6C3.5 5.7 5.7 3.5 6 0Z"/>
  </svg>`,arrowDown:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <polyline points="19 12 12 19 5 12"></polyline>
  </svg>`,arrowLeft:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <rect x="9" y="9" width="12" height="12" rx="2.5"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>`,retry:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M3 12a9 9 0 0 1 15.5-6.2L21 8"></path>
    <polyline points="21 3 21 8 16 8"></polyline>
    <path d="M21 12a9 9 0 0 1-15.5 6.2L3 16"></path>
    <polyline points="3 21 3 16 8 16"></polyline>
  </svg>`,history:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-9-9c2.39 0 4.68.94 6.4 2.6L20 6.5M20 6.5H15M20 6.5V2" />
  </svg>`,trash:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
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
  </svg>`,audioPlay:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z"/>
  </svg>`,audioPause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
  </svg>`,moreHorizontal:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM21 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
  </svg>`,lightboxClose:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>`},ge=1.5,Z={webhook:{url:""},bot:{name:"Ali",subtitle:"Tu asistente de IA de Aliaddo",avatar:"../public/img/ali-profile-image.png",avatarVideo:null,welcomeMessage:"Hola, soy Ali \u{1F44B}. Tu asistente virtual de Aliaddo \xBFComo puedo ayudarte?",offlineMessage:"En este momento no estoy disponible. Int\xE9ntalo m\xE1s tarde.",typingText:"Escribiendo...",statusText:"En l\xEDnea",inputPlaceholder:null,suggestions:[],thinkingSteps:[{after:3e3,text:"Pensando\u2026"},{after:8e3,text:"Revisando la informaci\xF3n\u2026"},{after:15e3,text:"Preparando tu respuesta\u2026"},{after:3e4,text:"Est\xE1 tardando m\xE1s de lo normal\u2026"}]},style:{primaryColor:"#572b86",textColor:"#ffffff",position:"right",borderRadius:"18px",fontFamily:"inherit",theme:"auto"},behavior:{openOnLoad:!1,showTimestamps:!0,enableSoundNotification:!1,maxMessageLength:1e3,requestTimeout:9e4,maxImageSizeMB:5}},ie=class{constructor(e){this.config=this._mergeConfig(Z,e||{}),this.isOpen=!1,this.isLoading=!1,this.sessionId=C(),this.messageCount=0,this.chatHistory=[],this.replyingTo=null,this._waitTimers=[],this._stopRequested=!1,this.pendingImage=null,this._attachmentPreviewUrl=null,this.audioRecorder=null,this.isRecording=!1,this._audioSupported=he(),this._activeAudio=null,this.config.webhook.url||console.warn("[ChatBubble] \u26A0\uFE0F No se configur\xF3 una URL de webhook. Agrega window.ChatBubbleConfig.webhook.url antes de cargar el script."),this._init()}async _init(){this._buildDOM(),this._applyConfig(),this._bindEvents(),this._initDraggable(),this.chatHistory=S(this.sessionId),this.chatHistory&&this.chatHistory.length>0?await this._loadHistory():this._showWelcomeMessage(),this.config.behavior.openOnLoad&&setTimeout(()=>this._openChat(),400)}async _loadHistory(){this._insertAgentIntro();let e=[...this.chatHistory];for(let t of e){let i=t.date?new Date(t.date):new Date;if(t.role==="user")if(t.isAudio&&t.audioData)try{let a=await te(t.audioData);this._addUserAudioMessage(a,t.duration||0,i,!1)}catch(a){console.error("Error cargando audio del historial",a)}else if(t.isImage&&t.imageData)try{let a=await te(t.imageData);await this._addUserImageMessage(a,t.caption||"",i,!1)}catch(a){console.error("Error cargando imagen del historial",a)}else this.replyingTo=t.replyingTo||null,this._addUserMessage(t.text,i,!1),this.replyingTo=null;else t.role==="bot"&&this._addBotMessage(t.text,i,!1,!1)}this._showSuggestions(),this._scrollToBottom()}_buildDOM(){this.host=document.createElement("div"),this.host.id="chat-bubble-host",document.body.appendChild(this.host),this.shadowRoot=this.host.attachShadow({mode:"open"});let e=document.createElement("style");e.textContent=ae,this.shadowRoot.appendChild(e),this.launcher=document.createElement("div"),this.launcher.id="chat-bubble-launcher",this.launcher.setAttribute("role","complementary"),this.launcher.setAttribute("aria-label","Widget de chat"),this.launcher.innerHTML=`
      <button class="cb-launcher-btn" id="cb-launcher-btn" aria-label="Abrir chat" aria-expanded="false" aria-controls="chat-bubble-window">
        <span class="cb-icon-chat" id="cb-launcher-icon-container"></span>
        <span class="cb-icon-close">${p.chevronDown}</span>
        <span class="cb-launcher-halo" aria-hidden="true"></span>
        <span class="cb-launcher-ai" aria-hidden="true">${p.sparkle}</span>
      </button>
      <span class="cb-launcher-label" aria-hidden="true">${this._escapeAttr(`Preg\xFAntale a ${this.config.bot.name}`)}</span>
      <span class="cb-notification-badge" id="cb-notification-badge" aria-label="Nuevo mensaje" role="status"></span>
    `,this.window=document.createElement("div"),this.window.id="chat-bubble-window",this.window.setAttribute("role","application"),this.window.setAttribute("aria-label",`Chat con ${this.config.bot.name}`),this.window.setAttribute("aria-hidden","true"),this.window.innerHTML=`
      <div class="cb-header" id="cb-header">
        <div class="cb-header-info">
          <button class="cb-header-back-btn" id="cb-header-back-btn" aria-label="Volver al chat" title="Volver al chat">
            ${p.arrowLeft}
          </button>
          <div class="cb-avatar" id="cb-avatar"></div>
          <div class="cb-header-text">
            <span class="cb-bot-name" id="cb-bot-name">${this._escapeAttr(this.config.bot.name)}</span>
            <span class="cb-status">${this._escapeAttr(this.config.bot.statusText||"")}</span>
          </div>
          <span class="cb-header-title" id="cb-header-title">Conversaciones</span>
        </div>
        <div class="cb-header-actions">
          <div class="cb-actions-dropdown" id="cb-actions-dropdown">
            <button class="cb-actions-btn" id="cb-actions-btn" aria-label="M\xE1s acciones" aria-haspopup="true" aria-expanded="false" title="Acciones">
              ${p.moreHorizontal}
            </button>
            <div class="cb-actions-menu cb-is-hidden" id="cb-actions-menu" role="menu">
              <button class="cb-actions-menu-item" id="cb-new-session-btn" role="menuitem">
                <span class="cb-actions-menu-icon">${p.newSession}</span>
                Nuevo chat
              </button>
              <button class="cb-actions-menu-item" id="cb-history-btn" role="menuitem">
                <span class="cb-actions-menu-icon">${p.history}</span>
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
            ${p.close}
          </button>
        </div>
        <div class="cb-toast-container" id="cb-toast-container" role="alert" aria-live="assertive"></div>
      </div>
      <div class="cb-resize-handle" id="cb-resize-handle"></div>

      <div class="cb-dropzone-overlay" id="cb-dropzone-overlay" aria-hidden="true">
        <div class="cb-dropzone-content">
          ${p.attach}
          <span>Suelta la imagen para adjuntarla</span>
        </div>
      </div>

      <div class="cb-messages" id="cb-messages-container" role="log" aria-live="polite" aria-label="Mensajes del chat">
        <div class="cb-message cb-message--bot cb-typing-wrapper" id="cb-typing">
          <div class="cb-msg-avatar" aria-hidden="true">
            ${this.config.bot.avatar?`<img src="${this._escapeAttr(this.config.bot.avatar)}" alt="">`:p.bot}
          </div>
          <div class="cb-msg-col">
            <div class="cb-typing-indicator" role="status" aria-live="polite"></div>
          </div>
        </div>
      </div>

      <div class="cb-history-panel" id="cb-history-panel" aria-hidden="true">
        <div class="cb-history-panel-top">
          <button class="cb-history-new-btn" id="cb-history-new-btn">
            ${p.newSession}
            <span>Nueva conversaci\xF3n</span>
          </button>
        </div>
        <div class="cb-history-list" id="cb-history-list" aria-labelledby="cb-header-title"></div>
        <div class="cb-history-panel-footer cb-is-hidden" id="cb-history-panel-footer">
          <button class="cb-history-clear-btn" id="cb-history-clear-btn" aria-label="Borrar todas las conversaciones">
            ${p.trash} Borrar todo
          </button>
        </div>
      </div>

      <div class="cb-clear-all-overlay cb-is-hidden" id="cb-clear-all-overlay" aria-hidden="true">
        <div class="cb-clear-all-dialog" id="cb-clear-all-dialog" role="alertdialog" aria-modal="true" tabindex="-1" aria-labelledby="cb-clear-all-text" aria-describedby="cb-clear-all-desc">
          <div class="cb-clear-all-icon" aria-hidden="true">${p.trash}</div>
          <p class="cb-clear-all-text" id="cb-clear-all-text">\xBFBorrar todas las conversaciones?</p>
          <p class="cb-clear-all-desc" id="cb-clear-all-desc"></p>
          <div class="cb-clear-all-actions">
            <button class="cb-history-item-confirm-no" id="cb-clear-all-cancel-btn">Cancelar</button>
            <button class="cb-history-item-confirm-yes" id="cb-clear-all-confirm-btn">Borrar todo</button>
          </div>
        </div>
      </div>

      <div class="cb-input-area">
        <button id="cb-scroll-bottom-btn" class="cb-scroll-bottom-btn" aria-label="Ir al \xFAltimo mensaje" title="Ir al \xFAltimo mensaje">
          ${p.arrowDown}
          <span class="cb-scroll-bottom-label">Respuesta nueva</span>
        </button>
        <div class="cb-composer">
          <div class="cb-reply-preview" id="cb-reply-preview" aria-hidden="true">
            <div class="cb-reply-chip">
              <div class="cb-reply-card" id="cb-reply-card" role="button" tabindex="0" aria-label="Ir al mensaje citado" title="Ir al mensaje citado">
                <span class="cb-reply-label">${p.reply}<span>Respondiendo a <strong>${this._escapeAttr(this.config.bot.name)}</strong></span></span>
                <span class="cb-reply-text" id="cb-reply-text"></span>
              </div>
              <button class="cb-reply-cancel" id="cb-reply-cancel" aria-label="Cancelar respuesta" title="Cancelar respuesta">
                ${p.close}
              </button>
            </div>
          </div>
          <span class="cb-sr-only" id="cb-reply-live" aria-live="polite"></span>
          <div class="cb-attachment-preview" id="cb-attachment-preview" aria-hidden="true">
            <div class="cb-attachment-chip">
              <div class="cb-attachment-thumb" id="cb-attachment-thumb" role="button" tabindex="0" aria-label="Ver imagen ampliada" title="Ver imagen ampliada"></div>
              <div class="cb-attachment-info">
                <span class="cb-attachment-name" id="cb-attachment-name"></span>
                <span class="cb-attachment-hint" id="cb-attachment-meta"></span>
              </div>
              <button class="cb-attachment-remove" id="cb-attachment-remove" aria-label="Quitar imagen adjunta" title="Quitar imagen">
                ${p.close}
              </button>
            </div>
          </div>
          <div class="cb-composer-row">
            <button id="cb-attach-btn" class="cb-attach-btn" aria-label="Adjuntar imagen" title="Adjuntar imagen">
              ${p.attach}
            </button>
            <input type="file" id="cb-file-input" class="cb-file-input-hidden" accept="image/png,image/jpeg,image/webp,image/bmp,image/heic,image/heif" tabindex="-1" aria-hidden="true" />
            <textarea
              id="cb-input"
              placeholder="${this._escapeAttr(this.config.bot.inputPlaceholder||`Preg\xFAntale a ${this.config.bot.name}`)}"
              rows="1"
              maxlength="${this.config.behavior.maxMessageLength}"
              aria-label="Escribe tu mensaje"
              aria-multiline="true"
            ></textarea>
            <button id="cb-mic-btn" class="cb-mic-btn" aria-label="Grabar mensaje de voz" title="Grabar audio">
              ${p.mic}
            </button>
            <button id="cb-send-btn" aria-label="Enviar mensaje">
              ${p.send}
            </button>
          </div>
        </div>
      </div>
    `;let t=document.createElement("dialog");t.className="cb-lightbox-dialog",t.setAttribute("aria-label","Vista ampliada de imagen"),t.innerHTML=`
      <button class="cb-lightbox-close-btn" aria-label="Cerrar imagen" title="Cerrar">
        ${p.lightboxClose}
      </button>
      <img src="" alt="" class="cb-lightbox-image" />
    `,this.shadowRoot.appendChild(this.launcher),this.shadowRoot.appendChild(this.window),this.shadowRoot.appendChild(t);let i=this.launcher.querySelector("#cb-launcher-icon-container"),a=this.window.querySelector("#cb-avatar");if(this.config.bot.avatar){let r=document.createElement("img");r.src=this._escapeAttr(this.config.bot.avatar),r.alt=this._escapeAttr(this.config.bot.name),r.className="cb-launcher-avatar",r.loading="lazy",i.appendChild(r),this.config.bot.avatarVideo&&this._setupLauncherVideo(i,this.config.bot.avatarVideo);let s=document.createElement("img");s.src=this._escapeAttr(this.config.bot.avatar),s.alt=this._escapeAttr(this.config.bot.name),s.loading="lazy",a.appendChild(s)}else i.innerHTML=p.chat,a.innerHTML=p.bot;this.launcherBtn=this.shadowRoot.getElementById("cb-launcher-btn"),this.notificationBadge=this.shadowRoot.getElementById("cb-notification-badge"),this.messagesContainer=this.shadowRoot.getElementById("cb-messages-container"),this.typingIndicator=this.shadowRoot.getElementById("cb-typing"),this.input=this.shadowRoot.getElementById("cb-input"),this.sendBtn=this.shadowRoot.getElementById("cb-send-btn"),this.toggleSizeBtn=this.shadowRoot.getElementById("cb-toggle-size-btn"),this.resizeHandle=this.shadowRoot.getElementById("cb-resize-handle"),this.dropzoneOverlay=this.shadowRoot.getElementById("cb-dropzone-overlay"),this.scrollBottomBtn=this.shadowRoot.getElementById("cb-scroll-bottom-btn"),this.toastContainer=this.shadowRoot.getElementById("cb-toast-container"),this.attachBtn=this.shadowRoot.getElementById("cb-attach-btn"),this.fileInput=this.shadowRoot.getElementById("cb-file-input"),this.attachmentPreview=this.shadowRoot.getElementById("cb-attachment-preview"),this.attachmentThumb=this.shadowRoot.getElementById("cb-attachment-thumb"),this.attachmentName=this.shadowRoot.getElementById("cb-attachment-name"),this.attachmentMeta=this.shadowRoot.getElementById("cb-attachment-meta"),this.attachmentRemoveBtn=this.shadowRoot.getElementById("cb-attachment-remove"),this.replyPreview=this.shadowRoot.getElementById("cb-reply-preview"),this.replyText=this.shadowRoot.getElementById("cb-reply-text"),this.replyCancelBtn=this.shadowRoot.getElementById("cb-reply-cancel"),this.replyCard=this.shadowRoot.getElementById("cb-reply-card"),this.replyLive=this.shadowRoot.getElementById("cb-reply-live"),this.micBtn=this.shadowRoot.getElementById("cb-mic-btn"),this.actionsBtn=this.shadowRoot.getElementById("cb-actions-btn"),this.actionsMenu=this.shadowRoot.getElementById("cb-actions-menu"),this.historyBtn=this.shadowRoot.getElementById("cb-history-btn"),this.historyPanel=this.shadowRoot.getElementById("cb-history-panel"),this.historyList=this.shadowRoot.getElementById("cb-history-list"),this.headerBackBtn=this.shadowRoot.getElementById("cb-header-back-btn"),this.historyFooter=this.shadowRoot.getElementById("cb-history-panel-footer"),this.historyClearBtn=this.shadowRoot.getElementById("cb-history-clear-btn"),this.clearAllOverlay=this.shadowRoot.getElementById("cb-clear-all-overlay"),this.clearAllDialog=this.shadowRoot.getElementById("cb-clear-all-dialog"),this.clearAllCancelBtn=this.shadowRoot.getElementById("cb-clear-all-cancel-btn"),this.clearAllConfirmBtn=this.shadowRoot.getElementById("cb-clear-all-confirm-btn"),this.historyClearBtn&&this.historyClearBtn.addEventListener("click",r=>this._openClearAllModal(r.detail===0)),this.clearAllOverlay&&this.clearAllOverlay.addEventListener("click",r=>{r.target===this.clearAllOverlay&&this._closeClearAllModal()}),this.clearAllCancelBtn&&this.clearAllCancelBtn.addEventListener("click",()=>this._closeClearAllModal()),this.clearAllConfirmBtn&&this.clearAllConfirmBtn.addEventListener("click",()=>{this._closeClearAllModal(),this._clearAllSessions()}),this._updateSendButtonState(),this._initLightbox(),this._initDropZone()}_initLightbox(){this.lightboxDialog=this.shadowRoot.querySelector(".cb-lightbox-dialog"),this.lightboxImg=this.shadowRoot.querySelector(".cb-lightbox-image"),this.lightboxDialog.addEventListener("cancel",e=>{e.preventDefault(),this._closeLightbox()}),this.shadowRoot.addEventListener("click",e=>{let t=e.target;if(t.tagName==="IMG"&&(t.classList.contains("cb-image")||t.classList.contains("cb-image-message-img"))){if(t.closest("a"))return;this._openLightbox(t.src,t.alt),e.preventDefault();return}if(t.closest(".cb-attachment-thumb")&&this._attachmentPreviewUrl){this._openLightbox(this._attachmentPreviewUrl,"Vista previa de la imagen adjunta");return}if(this.lightboxDialog.open){if(t.closest(".cb-lightbox-close-btn")){this._closeLightbox();return}if(t===this.lightboxDialog){this._closeLightbox();return}}}),this.shadowRoot.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||e.target.closest(".cb-attachment-thumb")&&this._attachmentPreviewUrl&&(e.preventDefault(),this._openLightbox(this._attachmentPreviewUrl,"Vista previa de la imagen adjunta"))})}_openLightbox(e,t){this.lightboxImg.src=e,this.lightboxImg.alt=t||"Imagen ampliada",this.lightboxDialog.showModal()}_closeLightbox(){!this.lightboxDialog.open||this.lightboxDialog.classList.contains("is-closing")||(this.lightboxDialog.classList.add("is-closing"),setTimeout(()=>{this.lightboxDialog.close(),this.lightboxDialog.classList.remove("is-closing"),this.lightboxImg.src=""},280))}_applyConfig(){let{style:e}=this.config;e.primaryColor&&e.primaryColor!==Z.style.primaryColor&&(this.host.style.setProperty("--cb-primary",e.primaryColor),this.host.style.setProperty("--cb-user-bubble",e.primaryColor),this.host.style.setProperty("--cb-primary-hover",this._darkenColor(e.primaryColor,15))),e.textColor&&e.textColor!==Z.style.textColor&&(this.host.style.setProperty("--cb-primary-text",e.textColor),this.host.style.setProperty("--cb-user-text",e.textColor)),e.borderRadius&&e.borderRadius!==Z.style.borderRadius&&this.host.style.setProperty("--cb-radius",e.borderRadius),e.fontFamily&&e.fontFamily!=="inherit"&&this.host.style.setProperty("--cb-font",e.fontFamily),e.position==="left"?(this.launcher.classList.add("cb-position--left"),this.window.classList.add("cb-position--left")):(this.launcher.classList.remove("cb-position--left"),this.window.classList.remove("cb-position--left"));for(let t of[this.window,this.launcher])e.theme==="light"||e.theme==="dark"?t.setAttribute("data-theme",e.theme):t.removeAttribute("data-theme")}_bindEvents(){this.launcherBtn.addEventListener("click",()=>this._toggleChat()),this.sendBtn.addEventListener("click",()=>this.isLoading?this._stopResponse():this._handleSend()),this.actionsBtn&&this.actionsBtn.addEventListener("click",a=>{a.stopPropagation(),this._toggleActionsMenu()}),this.shadowRoot.addEventListener("click",a=>{if(this.actionsMenu&&!this.actionsMenu.classList.contains("cb-is-hidden")){let r=this.shadowRoot.getElementById("cb-actions-dropdown");r&&!r.contains(a.target)&&this._closeActionsMenu()}}),this.historyBtn&&this.historyBtn.addEventListener("click",a=>{this._closeActionsMenu(),this._toggleHistoryPanel(a.detail===0)}),this.headerBackBtn.addEventListener("click",()=>{this._closeHistoryPanel(),this.input.focus()}),this.shadowRoot.getElementById("cb-history-new-btn").addEventListener("click",()=>{this._closeHistoryPanel(),this._startNewChat(),this.input.focus()});let t=this.shadowRoot.getElementById("cb-new-session-btn");t&&t.addEventListener("click",()=>{this._closeActionsMenu(),this._startNewChat()});let i=this.shadowRoot.getElementById("cb-close-window-btn");i&&i.addEventListener("click",()=>this._closeChat()),this._audioSupported&&this.micBtn?this.micBtn.addEventListener("click",a=>this._handleMicClick(a.detail===0)):this.micBtn&&(this.micBtn.style.display="none"),this.toggleSizeBtn.addEventListener("click",()=>this._toggleWideMode()),this.replyCancelBtn.addEventListener("click",()=>{this._clearReply(),this.input.focus()}),this.replyCard.addEventListener("click",()=>this._jumpToMessage(this._replySourceEl)),this.replyCard.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),this._jumpToMessage(this._replySourceEl))}),this.input.addEventListener("keydown",a=>{a.key==="Enter"&&!a.shiftKey&&(a.preventDefault(),this._handleSend())}),this.input.addEventListener("input",()=>{this._autoResizeTextarea(),this._updateSendButtonState()}),this.input.addEventListener("paste",a=>this._handlePaste(a)),this._onDocumentKeydown=a=>{if(this.isRecording&&this.isOpen){if(a.key==="Escape"){a.preventDefault(),this._cancelRecording();return}if(a.key==="Enter"&&!a.composedPath().some(r=>r.tagName==="BUTTON")){a.preventDefault(),this._stopRecording();return}}a.key==="Escape"&&(this.clearAllOverlay&&this.clearAllOverlay.classList.contains("cb-is-active")?(this._closeClearAllModal(),a.stopPropagation()):this.historyPanel&&this.historyPanel.classList.contains("cb-is-active")?(this._closeHistoryPanel(),a.stopPropagation()):this.isOpen&&this.replyingTo?(this._clearReply(),this.input.focus()):this.isOpen&&this._closeChat())},document.addEventListener("keydown",this._onDocumentKeydown),this.messagesContainer.addEventListener("scroll",()=>this._handleScroll()),this.scrollBottomBtn.addEventListener("click",()=>{this.messagesContainer.scrollTo({top:this.messagesContainer.scrollHeight,behavior:"smooth"})}),this.attachBtn&&this.attachBtn.addEventListener("click",()=>{this.isLoading||this.isRecording||this.fileInput.click()}),this.fileInput&&this.fileInput.addEventListener("change",a=>this._handleFileSelected(a)),this.attachmentRemoveBtn&&this.attachmentRemoveBtn.addEventListener("click",()=>{this._clearPendingImage(),this._updateSendButtonState(),this.input.focus()})}_initDraggable(){this.header=this.shadowRoot.getElementById("cb-header"),this.currentTranslateX=0,this.isDragging=!1,this.isResizing=!1,this.dragStartX=0,this.dragStartY=0,this.dragStartTranslateX=0,this.dragStartHeight=0,this.dragStartBottom=0;let e=r=>{if(!this.isDragging)return;let s=r.clientX-this.dragStartX,d=this.dragStartTranslateX+s,b=this.window.getBoundingClientRect(),c=b.width,l=b.left-this.currentTranslateX,o=12-l,u=window.innerWidth-c-12-l;d=Math.max(o,Math.min(u,d)),this.currentTranslateX=d,this.window.style.setProperty("--cb-drag-x",`${d}px`),this.launcher.style.setProperty("--cb-drag-x",`${d}px`);let v=r.clientY-this.dragStartY,m=this.dragStartHeight-v,f=350,x=this.dragStartBottom-24;m=Math.max(f,Math.min(x,m)),this.window.style.setProperty("--cb-window-height",`${m}px`)},t=r=>{this.isDragging&&(this.isDragging=!1,this.window.classList.remove("cb-is-dragging"),this.launcher.classList.remove("cb-is-dragging"),document.removeEventListener("pointermove",e),document.removeEventListener("pointerup",t),document.removeEventListener("pointercancel",t))};this.header.addEventListener("pointerdown",r=>{if(r.target.closest(".cb-toggle-size-btn")||r.target.closest("#cb-resize-handle")||r.target.closest(".cb-toast-container")||window.innerWidth<=480)return;this.isDragging=!0,this.dragStartX=r.clientX,this.dragStartY=r.clientY,this.dragStartTranslateX=this.currentTranslateX;let s=this.window.getBoundingClientRect();this.dragStartHeight=s.height,this.dragStartBottom=s.bottom,this.window.classList.add("cb-is-dragging"),this.launcher.classList.add("cb-is-dragging"),document.addEventListener("pointermove",e),document.addEventListener("pointerup",t),document.addEventListener("pointercancel",t),r.preventDefault()});let i=r=>{if(!this.isResizing)return;let s=r.clientY-this.dragStartY,d=this.dragStartHeight-s,b=350,l=this.dragStartBottom-24;d=Math.max(b,Math.min(l,d)),this.window.style.setProperty("--cb-window-height",`${d}px`)},a=r=>{this.isResizing&&(this.isResizing=!1,this.window.classList.remove("cb-is-dragging"),document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",a),document.removeEventListener("pointercancel",a))};this.resizeHandle.addEventListener("pointerdown",r=>{if(window.innerWidth<=480)return;this.isResizing=!0,this.dragStartY=r.clientY;let s=this.window.getBoundingClientRect();this.dragStartHeight=s.height,this.dragStartBottom=s.bottom,this.window.classList.add("cb-is-dragging"),document.addEventListener("pointermove",i),document.addEventListener("pointerup",a),document.addEventListener("pointercancel",a),r.stopPropagation(),r.preventDefault()}),this._onWindowResize=()=>{this.currentTranslateX=0,this.window.style.setProperty("--cb-drag-x","0px"),this.launcher.style.setProperty("--cb-drag-x","0px"),this.window.style.removeProperty("--cb-window-height")},window.addEventListener("resize",this._onWindowResize)}_toggleChat(){this.isOpen?this._closeChat():this._openChat()}_toggleWideMode(){this.isWide=!this.isWide;let e=this.toggleSizeBtn,t=e.querySelector("svg");this.isWide?(this.window.style.setProperty("--cb-window-width","650px"),this.window.style.setProperty("--cb-window-height","780px"),this.window.classList.add("cb-is-wide"),e.setAttribute("aria-label","Contraer ventana"),e.setAttribute("title","Contraer ventana"),t.innerHTML='<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="10" y1="14" x2="3" y2="21"></line><line x1="21" y1="3" x2="14" y2="10"></line>'):(this.window.style.removeProperty("--cb-window-width"),this.window.style.removeProperty("--cb-window-height"),this.window.classList.remove("cb-is-wide"),e.setAttribute("aria-label","Ampliar ventana"),e.setAttribute("title","Ampliar ventana"),t.innerHTML='<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>')}_openChat(){this.isOpen=!0,this.window.classList.add("cb-is-open"),this.window.setAttribute("aria-hidden","false"),this.launcherBtn.classList.add("cb-is-open"),this.launcher.classList.add("cb-launcher--open"),this.launcherBtn.setAttribute("aria-expanded","true"),this.launcherBtn.setAttribute("aria-label","Cerrar chat"),this._clearNotificationBadge(),this._syncLauncherVideo(),this._scrollToBottom(),this.avatarVideo&&this._avatarVideoVisible&&this.avatarVideo.play().catch(()=>{}),setTimeout(()=>this.input.focus(),300)}_closeChat(){this.isOpen=!1,this.window.classList.remove("cb-is-open"),this.window.setAttribute("aria-hidden","true"),this.launcherBtn.classList.remove("cb-is-open"),this.launcher.classList.remove("cb-launcher--open"),this.launcherBtn.setAttribute("aria-expanded","false"),this.launcherBtn.setAttribute("aria-label","Abrir chat"),this.avatarVideo?.pause(),this._syncLauncherVideo()}_startNewChat(){this.activeRequest&&this.activeRequest.abort(),this.activeRequest=null,this._hideThinkingIndicator(),this._setScrollUnread(!1),this._setLoadingState(!1),this._clearReply(),this._clearPendingImage(),this.chatHistory&&this.chatHistory.length>0&&I(this.sessionId,this._getHistoryTitle(),this.chatHistory.length),this._clearMessages(),this.sessionId=se(),this.chatHistory=[],this.messageCount=0,this._showWelcomeMessage()}_getTimeString(e=new Date){let t=e.getHours(),i=e.getMinutes().toString().padStart(2,"0"),a=t>=12?"p.m.":"a.m.";return t=t%12,t=t||12,`${t.toString().padStart(2,"0")}:${i} ${a}`}_checkDateDivider(e){let t=e.toDateString();if(this.lastMessageDateString!==t){this.lastMessageDateString=t;let i=document.createElement("div");i.className="cb-date-divider";let a=new Date,r=new Date(a);if(r.setDate(r.getDate()-1),t===a.toDateString())i.textContent="Hoy";else if(t===r.toDateString())i.textContent="Ayer";else{let s=e.getDate().toString().padStart(2,"0"),d=(e.getMonth()+1).toString().padStart(2,"0"),b=e.getFullYear();i.textContent=`${s}/${d}/${b}`}this.messagesContainer.insertBefore(i,this.typingIndicator)}}_addBotMessage(e,t=new Date,i=!0,a=!0){this._hideThinkingIndicator(),this._hideEmptyState(),this._checkDateDivider(t);let r=document.createElement("div");r.className="cb-message cb-message--bot";let s=document.createElement("div");if(s.className="cb-msg-avatar",s.setAttribute("aria-hidden","true"),this.config.bot.avatar){let g=document.createElement("img");g.src=this._escapeAttr(this.config.bot.avatar),g.alt="",s.appendChild(g)}else s.innerHTML=p.bot;let d=document.createElement("div");d.className="cb-msg-col";let b=document.createElement("div");b.className="cb-msg-bubble-row";let c=document.createElement("div");c.className="cb-message-content",b.appendChild(c),d.appendChild(b);let l=document.createElement("div");if(l.className="cb-msg-meta",this.config.behavior.showTimestamps){let g=document.createElement("span");g.className="cb-message-time",g.textContent=this._getTimeString(t),l.appendChild(g)}let o=document.createElement("div");o.className="cb-msg-actions",navigator.clipboard&&window.isSecureContext&&o.appendChild(this._createCopyButton(c));let u=document.createElement("button");u.className="cb-msg-action-btn",u.setAttribute("aria-label","Responder a este mensaje"),u.setAttribute("title","Responder"),u.innerHTML=p.reply,u.addEventListener("click",()=>{let g=c.textContent||c.innerText||"";this._setReply(g.trim(),r)}),o.appendChild(u),l.appendChild(o),d.appendChild(l),r.appendChild(s),r.appendChild(d),this.messagesContainer.insertBefore(r,this.typingIndicator),this.messageCount++,this._scrollToBottom(),i&&(this.chatHistory.push({role:"bot",text:e,date:t.toISOString()}),q(this.chatHistory,this.sessionId),I(this.sessionId,this._getHistoryTitle(),this.chatHistory.length));let v=ce(e);if(!v||v.trim()===""||!a){if(c.innerHTML=v||e,!a)return r;let g=()=>{k||(k=!0,this.activeTyping=null,this._scrollToBottom())},k=!1;return this.activeTyping={complete:g},g(),r}let m=document.createElement("div");m.innerHTML=v,m.querySelectorAll("li").forEach(g=>{g.classList.add("cb-li-hidden")});let y=[];function x(g){if(g.nodeType===Node.TEXT_NODE)y.push({node:g,fullText:g.nodeValue}),g.nodeValue="";else for(let k=0;k<g.childNodes.length;k++)x(g.childNodes[k])}for(x(m);m.firstChild;)c.appendChild(m.firstChild);let _=document.createElement("span");_.className="cb-streaming-cursor";let B=0,E=0,A=!1;this.activeTyping&&this.activeTyping.complete();let M=e.length,$=Math.max(3,Math.min(15,1e3/(M*.25))),R=M>150?Math.ceil(M/150):1,L=()=>{if(A)return;if(B>=y.length){N();return}let g=y[B];if(E===0){let w=g.node.parentNode;for(;w&&w!==c;)w.classList&&w.classList.contains("cb-li-hidden")&&w.classList.remove("cb-li-hidden"),w=w.parentNode}(_.parentNode!==g.node.parentNode||_.previousSibling!==g.node)&&g.node.parentNode.insertBefore(_,g.node.nextSibling);let k=this._isNearBottom();k||this._setScrollUnread(!0);let h=0;for(;h<R&&E<g.fullText.length;)g.node.nodeValue+=g.fullText[E],E++,h++;E>=g.fullText.length&&(B++,E=0),k&&this._scrollToBottom(),this.activeTypingTimeout=setTimeout(L,$)},N=()=>{if(A)return;A=!0,clearTimeout(this.activeTypingTimeout);let g=this._isNearBottom();c.querySelectorAll(".cb-li-hidden").forEach(h=>h.classList.remove("cb-li-hidden")),y.forEach(h=>{h.node.nodeValue=h.fullText}),_.remove(),this.activeTyping=null,g&&this._scrollToBottom()};return this.activeTyping={complete:N},L(),r}_createCopyButton(e){let t=document.createElement("button");t.className="cb-msg-action-btn",t.setAttribute("aria-label","Copiar mensaje"),t.setAttribute("title","Copiar"),t.innerHTML=p.copy;let i;return t.addEventListener("click",async()=>{this.activeTyping&&e.querySelector(".cb-streaming-cursor")&&this.activeTyping.complete();try{await navigator.clipboard.writeText(e.innerText.trim())}catch{this._showErrorToast("No se pudo copiar el mensaje.");return}clearTimeout(i),t.classList.add("cb-is-done"),t.innerHTML=p.check,t.setAttribute("aria-label","Mensaje copiado"),i=setTimeout(()=>{t.classList.remove("cb-is-done"),t.innerHTML=p.copy,t.setAttribute("aria-label","Copiar mensaje")},1600)}),t}_addUserMessage(e,t=new Date,i=!0){this.activeTyping&&this.activeTyping.complete(),this._hideEmptyState(),this._checkDateDivider(t);let a=document.createElement("div");a.className="cb-message cb-message--user";let r=document.createElement("div");r.className="cb-message-content";let s=this.replyingTo;if(s){let d=document.createElement("div");d.className="cb-message-quote";let b=document.createElement("div");b.className="cb-message-quote-bar";let c=document.createElement("span");c.className="cb-message-quote-text",c.textContent=s.slice(0,300),d.appendChild(b),d.appendChild(c),r.appendChild(d),d.setAttribute("role","button"),d.tabIndex=0,d.title="Ir al mensaje citado",d.setAttribute("aria-label","Ir al mensaje citado");let l=()=>this._jumpToMessage(this._findQuotedMessage(s,a));d.addEventListener("click",l),d.addEventListener("keydown",o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),l())}),this._clearReply()}if(r.appendChild(document.createTextNode(e)),a.appendChild(r),this.config.behavior.showTimestamps){let d=document.createElement("span");d.className="cb-message-time",d.textContent=this._getTimeString(t),a.appendChild(d)}return this.messagesContainer.insertBefore(a,this.typingIndicator),this.messageCount++,i&&(this.chatHistory.push({role:"user",text:e,date:t.toISOString(),replyingTo:s,isAudio:!1}),q(this.chatHistory,this.sessionId),I(this.sessionId,this._getHistoryTitle(),this.chatHistory.length)),this._scrollToBottom(),a}_setReply(e,t=null){e&&(this.replyingTo=e,this._replySourceEl=t,this.replyText.textContent=e.slice(0,300),this.replyPreview.classList.add("cb-visible"),this.replyPreview.setAttribute("aria-hidden","false"),this.replyCard.classList.toggle("cb-is-linked",!!t),this.replyLive.textContent=`Respondiendo a ${this.config.bot.name}`,this.input.focus())}_clearReply(){this.replyingTo=null,this._replySourceEl=null,this.replyPreview.classList.remove("cb-visible"),this.replyPreview.setAttribute("aria-hidden","true"),this.replyText.textContent="",this.replyLive.textContent=""}_findQuotedMessage(e,t=null){let i=e.replace(/\s+/g," ").trim().slice(0,60);if(!i)return null;let a=[...this.messagesContainer.querySelectorAll(".cb-message--bot")];for(let r=a.length-1;r>=0;r--){let s=a[r];if(t&&s.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_PRECEDING)continue;if((s.querySelector(".cb-message-content")?.textContent||"").replace(/\s+/g," ").trim().startsWith(i))return s}return null}_jumpToMessage(e){if(!e||!e.isConnected)return;let t=this.messagesContainer,i=t.getBoundingClientRect(),a=e.getBoundingClientRect(),r=a.height<i.height?(i.height-a.height)/2:16;t.scrollTo({top:t.scrollTop+(a.top-i.top)-r,behavior:this._prefersReducedMotion()?"auto":"smooth"});let s=e.querySelector(".cb-message-content");s&&(s.classList.remove("cb-is-highlighted"),s.offsetWidth,s.classList.add("cb-is-highlighted"),clearTimeout(this._highlightTimer),this._highlightTimer=setTimeout(()=>s.classList.remove("cb-is-highlighted"),1600))}_showWelcomeMessage(){this._insertAgentIntro(),this.config.bot.welcomeMessage?setTimeout(()=>{this._addBotMessage(this.config.bot.welcomeMessage),this._showSuggestions()},400):this._showSuggestions()}_showSuggestions(){let e=(this.config.bot.suggestions||[]).filter(i=>typeof i=="string"&&i.trim());if(!e.length||this.chatHistory.some(i=>i.role==="user"))return;this._hideSuggestions();let t=document.createElement("div");t.className="cb-suggestions",t.setAttribute("role","group"),t.setAttribute("aria-label","Preguntas sugeridas"),e.forEach((i,a)=>{let r=document.createElement("button");r.className="cb-suggestion-chip",r.style.setProperty("--cb-chip-delay",`${a*60}ms`),r.textContent=i,r.addEventListener("click",()=>{this.isLoading||(this.input.value=i,this._handleSend())}),t.appendChild(r)}),this.messagesContainer.insertBefore(t,this.typingIndicator),this._scrollToBottom()}_hideSuggestions(){this.messagesContainer.querySelector(".cb-suggestions")?.remove()}_setupAvatarVideo(e,t){if(this._prefersReducedMotion())return;let i=this._createAvatarVideo("cb-agent-intro-video",t);e.appendChild(i),i.addEventListener("ended",()=>{i.currentTime=0,i.play().catch(()=>{})}),i.addEventListener("canplay",()=>{e.classList.add("cb-is-playing"),i.playbackRate=ge,i.play().catch(()=>{})},{once:!0}),this._avatarVideoObserver?.disconnect(),this._avatarVideoObserver=new IntersectionObserver(([a])=>{this._avatarVideoVisible=a.isIntersecting,a.isIntersecting&&this.isOpen?i.play().catch(()=>{}):i.pause()},{root:this.messagesContainer,threshold:0}),this._avatarVideoObserver.observe(i),this.avatarVideo=i}_setupLauncherVideo(e,t){if(this._prefersReducedMotion())return;let i=this._createAvatarVideo("cb-launcher-video",t);i.loop=!0,e.appendChild(i),this.launcherVideo=i,i.addEventListener("canplay",()=>{e.classList.add("cb-is-playing"),this._syncLauncherVideo()},{once:!0}),this._onVisibilityChange=()=>this._syncLauncherVideo(),document.addEventListener("visibilitychange",this._onVisibilityChange)}_createAvatarVideo(e,t){let i=document.createElement("video");return i.className=e,i.muted=!0,i.playsInline=!0,i.preload="auto",i.src=this._escapeAttr(t),i.setAttribute("muted",""),i.setAttribute("playsinline",""),i.setAttribute("webkit-playsinline",""),i.setAttribute("disablepictureinpicture",""),i.setAttribute("disableremoteplayback",""),i.setAttribute("aria-hidden","true"),i.tabIndex=-1,i}_prefersReducedMotion(){return!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches}_syncLauncherVideo(){let e=this.launcherVideo;e&&(!this.isOpen&&document.visibilityState==="visible"?(e.playbackRate=ge,e.play().catch(()=>{})):e.pause())}_insertAgentIntro(){let e=this.messagesContainer.querySelector(".cb-agent-intro");e&&e.remove();let t=document.createElement("div");t.className="cb-agent-intro";let i=document.createElement("div");if(i.className="cb-agent-intro-avatar",this.config.bot.avatar){let s=document.createElement("img");s.src=this._escapeAttr(this.config.bot.avatar),s.alt=this._escapeAttr(this.config.bot.name),i.appendChild(s),this.config.bot.avatarVideo&&this._setupAvatarVideo(i,this.config.bot.avatarVideo)}else i.innerHTML=p.bot;let a=document.createElement("p");a.className="cb-agent-intro-name",a.textContent=this.config.bot.name;let r=document.createElement("p");r.className="cb-agent-intro-subtitle",r.textContent=this.config.bot.subtitle||"",t.appendChild(i),t.appendChild(a),this.config.bot.subtitle&&t.appendChild(r),this.messagesContainer.insertBefore(t,this.messagesContainer.firstChild)}_clearMessages(){this.activeTyping&&(this.activeTyping.complete(),this.activeTyping=null),this.messagesContainer.querySelectorAll(".cb-message:not(#cb-typing), .cb-date-divider, .cb-agent-intro, .cb-suggestions").forEach(t=>t.remove()),this.lastMessageDateString=null}_showTypingIndicator(){this.typingIndicator.classList.add("cb-visible");let e=this.typingIndicator.querySelector(".cb-typing-indicator");e.classList.remove("cb-thinking"),e.innerHTML='<span class="cb-typing-dot"></span><span class="cb-typing-dot"></span><span class="cb-typing-dot"></span><span class="cb-sr-only"></span>',e.querySelector(".cb-sr-only").textContent=this.config.bot.typingText||"",this._scrollToBottom()}_showThinkingIndicator(e){let t=this.typingIndicator;t.classList.add("cb-visible");let i=t.querySelector(".cb-typing-indicator");i.classList.contains("cb-thinking")||(i.classList.add("cb-thinking"),i.innerHTML=`<span class="cb-thinking-icon">${p.sparkle}</span>`),i.querySelector(".cb-thinking-text")?.remove();let a=document.createElement("span");a.className="cb-thinking-text",a.textContent=e,i.appendChild(a),this._scrollToBottom()}_hideThinkingIndicator(){this._clearWaitingTimers(),this.typingIndicator.classList.remove("cb-visible");let e=this.typingIndicator.querySelector(".cb-typing-indicator");e.classList.remove("cb-thinking"),e.innerHTML=""}_startWaiting(e=null){this._hideThinkingIndicator(),this._stopRequested=!1;let t=(this.config.bot.thinkingSteps||[]).filter(i=>i&&i.text&&i.after>=0);e?this._showThinkingIndicator(e):this._showTypingIndicator(),(e?t.slice(1):t).forEach(i=>{this._waitTimers.push(setTimeout(()=>{this.isLoading&&this._showThinkingIndicator(i.text)},i.after))})}_clearWaitingTimers(){(this._waitTimers||[]).forEach(clearTimeout),this._waitTimers=[]}_stopResponse(){!this.isLoading||!this.activeRequest||(this._stopRequested=!0,this.activeRequest.abort())}_hideEmptyState(){this._hideSuggestions()}_showNotificationBadge(){this.isOpen||this.notificationBadge.classList.add("cb-visible")}_clearNotificationBadge(){this.notificationBadge.classList.remove("cb-visible")}_showErrorToast(e){if(!this.toastContainer)return;let t=5e3,i=300,a=document.createElement("div");a.className="cb-toast";let r=document.createElement("span");r.className="cb-toast-icon",r.innerHTML=p.warning;let s=document.createElement("span");s.className="cb-toast-text",s.textContent=e;let d=document.createElement("button");d.className="cb-toast-close",d.setAttribute("aria-label","Cerrar notificaci\xF3n"),d.innerHTML=p.close,a.appendChild(r),a.appendChild(s),a.appendChild(d),this.toastContainer.appendChild(a);let b,c=()=>{a.dataset.dismissed||(a.dataset.dismissed="true",clearTimeout(b),a.classList.remove("cb-toast--visible"),setTimeout(()=>a.remove(),i))};d.addEventListener("click",c),b=setTimeout(c,t),requestAnimationFrame(()=>a.classList.add("cb-toast--visible"))}async _handleSend(){let e=this.input.value.trim(),t=this.pendingImage;if(!e&&!t||this.isLoading)return;if(e.length>this.config.behavior.maxMessageLength){this._showErrorToast(`El mensaje es demasiado largo. Por favor, usa menos de ${this.config.behavior.maxMessageLength} caracteres.`);return}if(!this.config.webhook.url){this._showErrorToast("El asistente no est\xE1 disponible en este momento. Contacta al administrador del sitio.");return}if(this.input.value="",this._autoResizeTextarea(),this._updateSendButtonState(),t){this._clearPendingImage(),this._updateSendButtonState(),this._addUserImageMessage(t,e),this._sendImageToWebhook(t,e);return}let i=this._addUserMessage(e);await this._requestBotReply(e,i)}async _requestBotReply(e,t){this._setLoadingState(!0),this.activeRequest&&this.activeRequest.abort(),this.activeRequest=new AbortController,this._startWaiting();try{let i=await le(this.config.webhook.url,e,this.sessionId,{},this.config.behavior.requestTimeout,this.activeRequest.signal,a=>{let r=this.typingIndicator.querySelector(".cb-typing-indicator");a&&(a.tool||a.event)&&!r.classList.contains("cb-thinking")&&this._showThinkingIndicator(this.config.bot.thinkingSteps?.[0]?.text||"Pensando\u2026")});this._hideThinkingIndicator(),i&&i.output?(this._addBotMessage(i.output),this.isOpen||this._showNotificationBadge(),i.sessionId&&i.sessionId!==this.sessionId&&(this.sessionId=i.sessionId,O(this.sessionId))):(this._showErrorToast("No se pudo obtener una respuesta v\xE1lida. Int\xE9ntalo de nuevo."),this._markMessageFailed(t,e))}catch(i){if(i.name==="AbortError"){this._stopRequested&&(this._hideThinkingIndicator(),this._markMessageFailed(t,e,!0));return}this._hideThinkingIndicator(),this._showErrorToast(i.message||this.config.bot.offlineMessage),this._markMessageFailed(t,e)}finally{this._setLoadingState(!1),this.isOpen&&this.input.focus()}}_markMessageFailed(e,t,i=!1){if(!e||!e.isConnected)return;e.querySelector(".cb-msg-failed")?.remove(),i||e.classList.add("cb-message--failed");let a=document.createElement("div");a.className=i?"cb-msg-failed cb-msg-failed--stopped":"cb-msg-failed";let r=document.createElement("span");r.textContent=i?"Respuesta detenida":"No se pudo enviar";let s=document.createElement("button");s.className="cb-msg-retry-btn",s.innerHTML=`${p.retry}<span>Reintentar</span>`,s.addEventListener("click",()=>{this.isLoading||(a.remove(),e.classList.remove("cb-message--failed"),this._requestBotReply(t,e))}),a.appendChild(r),a.appendChild(s),e.appendChild(a),this._scrollToBottom()}_setLoadingState(e){this.isLoading=e,this.attachBtn&&(this.attachBtn.disabled=e),this.sendBtn.classList.toggle("cb-is-stop",e),this.sendBtn.innerHTML=e?p.stop:p.send;let t=e?"Detener respuesta":"Enviar mensaje";this.sendBtn.setAttribute("aria-label",t),this.sendBtn.setAttribute("title",e?"Detener":""),this._updateSendButtonState()}_autoResizeTextarea(){this.input.style.height="auto";let e=100,t=this.input.scrollHeight;this.input.style.height=`${Math.min(t,e)}px`}_updateSendButtonState(){if(this.isLoading){this.sendBtn.classList.add("cb-visible"),this.micBtn&&this.micBtn.classList.remove("cb-visible");return}let e=this.input.value.trim().length>0,t=!!this.pendingImage;e||t?(this.sendBtn.classList.add("cb-visible"),this.micBtn&&this.micBtn.classList.remove("cb-visible")):(this.sendBtn.classList.remove("cb-visible"),this.micBtn&&this._audioSupported&&!this.isRecording&&this.micBtn.classList.add("cb-visible"))}_scrollToBottom(){requestAnimationFrame(()=>{this.messagesContainer.scrollTop=this.messagesContainer.scrollHeight})}_isNearBottom(e=80){let t=this.messagesContainer;return t.scrollHeight-t.clientHeight-t.scrollTop<e}_handleScroll(){let e=this.messagesContainer,i=e.scrollHeight-e.clientHeight-e.scrollTop>150,a=e.scrollHeight>e.clientHeight,r=this.historyPanel&&this.historyPanel.classList.contains("cb-is-active");i&&a&&!r?this.scrollBottomBtn.classList.add("cb-visible"):this.scrollBottomBtn.classList.remove("cb-visible"),this._isNearBottom()&&this._setScrollUnread(!1)}_setScrollUnread(e){if(!this.scrollBottomBtn||this._hasScrollUnread===e)return;this._hasScrollUnread=e,this.scrollBottomBtn.classList.toggle("cb-has-new",e);let t=e?"Ver respuesta nueva":"Ir al \xFAltimo mensaje";this.scrollBottomBtn.setAttribute("aria-label",t),this.scrollBottomBtn.title=t}_mergeConfig(e,t){let i={...e};for(let a in t)t[a]!==null&&typeof t[a]=="object"&&!Array.isArray(t[a])&&typeof e[a]=="object"?i[a]=this._mergeConfig(e[a],t[a]):t[a]!==void 0&&t[a]!==null&&(i[a]=t[a]);return i}_escapeAttr(e){return String(e||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}_darkenColor(e,t){if(!e||!e.startsWith("#"))return e;try{let i=parseInt(e.replace("#",""),16),a=Math.max(0,(i>>16)-Math.round(255*t/100)),r=Math.max(0,(i>>8&255)-Math.round(255*t/100)),s=Math.max(0,(i&255)-Math.round(255*t/100));return`#${(a<<16|r<<8|s).toString(16).padStart(6,"0")}`}catch{return e}}_handleMicClick(e=!1){this.isRecording?this._stopRecording():this._startRecording(e)}async _startRecording(e=!1){this.isLoading||(this.audioRecorder=new X,this._showRecordingUI(e),this.audioRecorder.onLevelChange=t=>{this._pushRecordingLevel(t)},this.audioRecorder.onTick=t=>{this._updateRecordingTime(t)},this.audioRecorder.onComplete=(t,i)=>{this._hideRecordingUI(),this._addUserAudioMessage(t,i),this._sendAudioToWebhook(t,i,this.audioRecorder.mimeType)},this.audioRecorder.onError=t=>{this._hideRecordingUI(),this._showErrorToast(t)},await this.audioRecorder.start(),this.audioRecorder.mediaRecorder&&(this.isRecording=!0,this.micBtn&&this.micBtn.classList.remove("cb-visible"),this._recordingOverlay?.classList.add("cb-is-live"),this._announceRecording("Grabando audio")))}_stopRecording(){this.audioRecorder&&this.audioRecorder.stop(),this.isRecording=!1}_cancelRecording(){this.audioRecorder&&this.audioRecorder.cancel(),this.isRecording=!1,this._hideRecordingUI(),this._updateSendButtonState()}_showRecordingUI(e=!1){if(this.input.style.visibility="hidden",this.micBtn&&(this.micBtn.style.visibility="hidden"),this.attachBtn&&(this.attachBtn.disabled=!0),this._recordingOverlay)return;let t=document.createElement("div");t.className="cb-recording-ui",t.id="cb-recording-ui",t.style.setProperty("--cb-rec-max",`${30}s`);let i=document.createElement("button");i.className="cb-recording-cancel",i.setAttribute("aria-label","Descartar grabaci\xF3n"),i.title="Descartar (Esc)",i.innerHTML=p.trash,i.addEventListener("click",()=>this._cancelRecording());let a=document.createElement("div");a.className="cb-recording-status",a.innerHTML='<span class="cb-recording-dot" aria-hidden="true"></span>';let r=document.createElement("span");r.className="cb-recording-timer",r.textContent=this._formatClock(0),a.appendChild(r),this._recordingTimer=r;let s=document.createElement("div");s.className="cb-recording-wave",s.setAttribute("aria-hidden","true"),this._recordingBars=[],this._recordingLevels=[];for(let l=0;l<48;l++){let o=document.createElement("span");o.className="cb-recording-bar",s.appendChild(o),this._recordingBars.push(o),this._recordingLevels.push(0)}let d=document.createElement("button");d.className="cb-recording-send",d.setAttribute("aria-label","Enviar audio"),d.title="Enviar (Enter)",d.innerHTML=`
      <svg class="cb-recording-ring" viewBox="0 0 40 40" aria-hidden="true">
        <circle class="cb-recording-ring-track" cx="20" cy="20" r="18.5"></circle>
        <circle class="cb-recording-ring-fill" cx="20" cy="20" r="18.5" pathLength="100"></circle>
      </svg>
      ${p.send}`,d.addEventListener("click",()=>this._stopRecording());let b=document.createElement("span");b.className="cb-sr-only",b.setAttribute("aria-live","polite"),this._recordingLive=b,t.append(i,a,s,d,b),(this.input.closest(".cb-composer")||this.input.parentElement).appendChild(t),this._recordingOverlay=t,requestAnimationFrame(()=>t.classList.add("cb-visible")),e&&d.focus({preventScroll:!0})}_formatClock(e){return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}_pushRecordingLevel(e){if(!this._recordingBars)return;let t=Math.min(1,Math.pow(e*3.2,.85));this._recordingLevels.shift(),this._recordingLevels.push(t),this._recordingBars.forEach((i,a)=>{let r=this._recordingLevels[a];i.style.transform=`scaleY(${Math.max(.12,r)})`,i.classList.toggle("cb-is-on",r>0)})}_updateRecordingTime(e){if(!this._recordingTimer)return;this._recordingTimer.textContent=this._formatClock(e);let t=30-e;t<=5&&!this._recordingOverlay.classList.contains("cb-is-ending")&&(this._recordingOverlay.classList.add("cb-is-ending"),this._announceRecording(`Quedan ${t} segundos`))}_announceRecording(e){this._recordingLive&&(this._recordingLive.textContent=e)}_hideRecordingUI(){this.isRecording=!1,this.input.style.visibility="",this.micBtn&&(this.micBtn.style.visibility=""),this.attachBtn&&(this.attachBtn.disabled=!1),this._recordingOverlay&&(this._recordingOverlay.remove(),this._recordingOverlay=null,this._recordingTimer=null,this._recordingBars=null,this._recordingLevels=null,this._recordingLive=null)}async _getWaveformPeaks(e,t){try{let i=await e.arrayBuffer(),s=(await new OfflineAudioContext(1,1,44100).decodeAudioData(i)).getChannelData(0),d=Math.floor(s.length/t)||1,b=[];for(let l=0;l<t;l++){let o=0;for(let u=0;u<d;u++)o+=Math.abs(s[l*d+u]||0);b.push(o/d)}let c=Math.max(...b)||1;return b.map(l=>l/c)}catch{return null}}async _addUserAudioMessage(e,t,i=new Date,a=!0){this._hideEmptyState(),this._checkDateDivider(i);let r=document.createElement("div");r.className="cb-message cb-message--user";let s=document.createElement("div");s.className="cb-message-content cb-audio-player";let d=URL.createObjectURL(e),b=new Audio(d),c=document.createElement("button");c.className="cb-audio-play-btn",c.setAttribute("aria-label","Reproducir audio"),c.innerHTML=p.audioPlay;let l=30,o=document.createElement("div");o.className="cb-audio-wave",o.tabIndex=0,o.setAttribute("role","slider"),o.setAttribute("aria-label","Posici\xF3n del audio"),o.setAttribute("aria-valuemin","0"),o.setAttribute("aria-valuemax",String(Math.round(t))),o.setAttribute("aria-valuenow","0");let u=document.createElement("div");u.className="cb-audio-wave-layer";let v=document.createElement("div");v.className="cb-audio-wave-layer cb-audio-wave-layer--played",v.setAttribute("aria-hidden","true");let m=document.createElement("span");m.className="cb-audio-knob",m.setAttribute("aria-hidden","true");let f=[];for(let h=0;h<l;h++){let w=(.3+.25*Math.abs(Math.sin(h*1.7))).toFixed(2);for(let z of[u,v]){let T=document.createElement("span");T.className="cb-audio-wave-bar",T.style.setProperty("--h",w),z.appendChild(T),f.push(T)}}o.append(u,v,m),this._getWaveformPeaks(e,l).then(h=>{h&&h.forEach((w,z)=>{let T=Math.max(.18,Math.sqrt(w)).toFixed(2);f[z*2].style.setProperty("--h",T),f[z*2+1].style.setProperty("--h",T)})});let y=()=>isFinite(b.duration)?b.duration:t,x=()=>{let h=y(),w=h?Math.min(100,b.currentTime/h*100):0;o.style.setProperty("--p",`${w}%`),o.setAttribute("aria-valuenow",String(Math.floor(b.currentTime))),o.setAttribute("aria-valuetext",`${this._formatClock(Math.floor(b.currentTime))} de ${this._formatClock(Math.round(h))}`)},_=null,B=()=>{x(),_=requestAnimationFrame(B)},E=h=>{let w=y();b.currentTime=Math.max(0,Math.min(w,h)),o.classList.add("cb-is-started"),x()},A=h=>{let w=o.getBoundingClientRect(),z=Math.max(0,Math.min(1,(h.clientX-w.left)/w.width));E(z*y())};o.addEventListener("pointerdown",h=>{o.setPointerCapture(h.pointerId),o.classList.add("cb-is-seeking"),A(h)}),o.addEventListener("pointermove",h=>{o.hasPointerCapture(h.pointerId)&&A(h)});let M=()=>o.classList.remove("cb-is-seeking");o.addEventListener("pointerup",M),o.addEventListener("pointercancel",M),o.addEventListener("keydown",h=>{let w={ArrowRight:2,ArrowUp:2,ArrowLeft:-2,ArrowDown:-2}[h.key];w?(h.preventDefault(),E(b.currentTime+w)):h.key==="Home"||h.key==="End"?(h.preventDefault(),E(h.key==="Home"?0:y())):(h.key===" "||h.key==="Enter")&&(h.preventDefault(),c.click())});let $=[1,1.5,2],R=0,L=document.createElement("button");L.className="cb-audio-speed";let N=()=>{let h=$[R];L.textContent=`${h}\xD7`,L.setAttribute("aria-label",`Velocidad de reproducci\xF3n ${h}x`),b.playbackRate=h};N(),L.addEventListener("click",()=>{R=(R+1)%$.length,N()});let g=!1;c.addEventListener("click",()=>{g?b.pause():b.play().catch(()=>{})});let k=h=>{g=h,s.classList.toggle("cb-is-playing",h),c.innerHTML=h?p.audioPause:p.audioPlay,c.setAttribute("aria-label",h?"Pausar audio":"Reproducir audio"),cancelAnimationFrame(_),h&&B()};if(b.addEventListener("play",()=>{this._activeAudio&&this._activeAudio!==b&&this._activeAudio.pause(),this._activeAudio=b,b.playbackRate=$[R],o.classList.add("cb-is-started"),k(!0)}),b.addEventListener("pause",()=>{this._activeAudio===b&&(this._activeAudio=null),k(!1),x()}),b.addEventListener("ended",()=>{this._activeAudio===b&&(this._activeAudio=null),k(!1),b.currentTime=0,o.classList.remove("cb-is-started"),o.style.setProperty("--p","0%")}),s.append(c,o,L),r.appendChild(s),this.config.behavior.showTimestamps){let h=document.createElement("span");h.className="cb-message-time",h.textContent=this._getTimeString(i),r.appendChild(h)}if(this.messagesContainer.insertBefore(r,this.typingIndicator),this.messageCount++,a)try{let h=await ee(e);this.chatHistory.push({role:"user",isAudio:!0,audioData:h,duration:t,date:i.toISOString()}),q(this.chatHistory,this.sessionId),I(this.sessionId,this._getHistoryTitle(),this.chatHistory.length)}catch(h){console.error("Error guardando historial de audio",h)}this._scrollToBottom()}async _sendAudioToWebhook(e,t,i){this.activeRequest&&this.activeRequest.abort(),this.activeRequest=new AbortController,this._setLoadingState(!0),this._startWaiting("Escuchando\u2026");try{let a=await be(this.config.webhook.url,e,this.sessionId,t,i,{},this.config.behavior.requestTimeout,this.activeRequest.signal);if(a.sessionId&&a.sessionId!==this.sessionId&&(this.sessionId=a.sessionId,O(this.sessionId)),a.event==="thinking")return;this._addBotMessage(a.output||"")}catch(a){if(a.name==="AbortError"){this._stopRequested&&this._hideThinkingIndicator();return}this._hideThinkingIndicator(),this._showErrorToast(a.message||"Error al procesar el audio. Int\xE9ntalo de nuevo.")}finally{this._setLoadingState(!1),this._updateSendButtonState(),this.activeRequest=null,this.isOpen&&this.input.focus()}}_handleFileSelected(e){let t=e.target.files&&e.target.files[0];e.target.value="",t&&this._processAttachedImage(t)}_handlePaste(e){if(this.isLoading||this.isRecording)return;let t=e.clipboardData&&e.clipboardData.items;if(t){for(let i of t)if(i.kind==="file"&&i.type.startsWith("image/")){let a=i.getAsFile();a&&(e.preventDefault(),this._processAttachedImage(a));break}}}_initDropZone(){let e=0,t=!1;this.shadowRoot.addEventListener("dragstart",a=>{if(a.target.closest?.(".cb-avatar, .cb-msg-avatar, .cb-agent-intro-avatar, .cb-launcher-btn")){a.preventDefault();return}t=!0}),this.shadowRoot.addEventListener("dragend",()=>{t=!1});let i=a=>!t&&a.dataTransfer&&Array.from(a.dataTransfer.types||[]).includes("Files");this.window.addEventListener("dragenter",a=>{!i(a)||this.isLoading||this.isRecording||(a.preventDefault(),e++,this.dropzoneOverlay.classList.add("cb-visible"))}),this.window.addEventListener("dragover",a=>{!i(a)||this.isLoading||this.isRecording||(a.preventDefault(),a.dataTransfer.dropEffect="copy")}),this.window.addEventListener("dragleave",()=>{e=Math.max(0,e-1),e===0&&this.dropzoneOverlay.classList.remove("cb-visible")}),this.window.addEventListener("drop",a=>{if(!i(a)||(a.preventDefault(),e=0,this.dropzoneOverlay.classList.remove("cb-visible"),this.isLoading||this.isRecording))return;let r=Array.from(a.dataTransfer.files||[]);if(!r.length)return;let s=r.find(d=>d.type.startsWith("image/"))||r[0];this._processAttachedImage(s)})}_processAttachedImage(e){let t=(e.type||"").toLowerCase(),i=(e.name||"").toLowerCase();if(t.startsWith("video/")||/\.(mp4|mov|avi|webm|mkv|3gp)$/.test(i)){this._showErrorToast("No se permiten archivos de video.");return}if(t==="image/gif"||i.endsWith(".gif")){this._showErrorToast("Los archivos GIF no son compatibles. Usa JPG, PNG o WEBP.");return}if(!t.startsWith("image/")){this._showErrorToast("Solo se permiten archivos de imagen.");return}let a=this.config.behavior.maxImageSizeMB||5;if(e.size>a*1024*1024){this._showErrorToast(`La imagen supera el tama\xF1o m\xE1ximo permitido (${a}MB).`);return}this.pendingImage=e,this._showAttachmentPreview(e),this._updateSendButtonState(),this.input.focus()}_showAttachmentPreview(e){this._attachmentPreviewUrl&&URL.revokeObjectURL(this._attachmentPreviewUrl);let t=URL.createObjectURL(e);this._attachmentPreviewUrl=t,this.attachmentThumb.style.backgroundImage=`url("${t}")`,this.attachmentName.textContent=e.name||"Imagen",this.attachmentName.title=e.name||"";let i=(e.type.split("/")[1]||"imagen").replace("jpeg","jpg");this.attachmentMeta.textContent=`${i.toUpperCase()} \xB7 ${this._formatFileSize(e.size)}`,this.attachmentPreview.classList.add("cb-visible"),this.attachmentPreview.setAttribute("aria-hidden","false")}_formatFileSize(e){return e<1024?`${e} B`:e<1024*1024?`${Math.round(e/1024)} KB`:`${(e/(1024*1024)).toFixed(1).replace(".",",")} MB`}_clearPendingImage(){this.pendingImage=null,this._attachmentPreviewUrl&&(URL.revokeObjectURL(this._attachmentPreviewUrl),this._attachmentPreviewUrl=null),this.attachmentThumb&&(this.attachmentThumb.style.backgroundImage=""),this.attachmentName&&(this.attachmentName.textContent=""),this.attachmentPreview&&(this.attachmentPreview.classList.remove("cb-visible"),this.attachmentPreview.setAttribute("aria-hidden","true"))}async _addUserImageMessage(e,t="",i=new Date,a=!0){this.activeTyping&&this.activeTyping.complete(),this._hideEmptyState(),this._checkDateDivider(i);let r=document.createElement("div");r.className="cb-message cb-message--user";let s=document.createElement("div");s.className="cb-message-content cb-image-message";let d=URL.createObjectURL(e),b=document.createElement("img");if(b.src=d,b.alt=t||"Imagen enviada",b.className="cb-image-message-img",b.loading="lazy",s.appendChild(b),t){let c=document.createElement("p");c.className="cb-image-message-caption",c.textContent=t,s.appendChild(c)}if(r.appendChild(s),this.config.behavior.showTimestamps){let c=document.createElement("span");c.className="cb-message-time",c.textContent=this._getTimeString(i),r.appendChild(c)}if(this.messagesContainer.insertBefore(r,this.typingIndicator),this.messageCount++,a)try{let c=await ee(e);this.chatHistory.push({role:"user",isImage:!0,imageData:c,mimeType:e.type||"image/*",fileName:e.name||"",caption:t||"",date:i.toISOString()}),q(this.chatHistory,this.sessionId),I(this.sessionId,this._getHistoryTitle(),this.chatHistory.length)}catch(c){console.error("Error guardando historial de imagen",c)}this._scrollToBottom()}async _sendImageToWebhook(e,t){this.activeRequest&&this.activeRequest.abort(),this.activeRequest=new AbortController,this._setLoadingState(!0),this._startWaiting("Analizando imagen\u2026");try{let i=await de(this.config.webhook.url,e,this.sessionId,t,{},this.config.behavior.requestTimeout,this.activeRequest.signal);i.sessionId&&i.sessionId!==this.sessionId&&(this.sessionId=i.sessionId,O(this.sessionId)),this._addBotMessage(i.output||"")}catch(i){if(i.name==="AbortError"){this._stopRequested&&this._hideThinkingIndicator();return}this._hideThinkingIndicator(),this._showErrorToast(i.message||"Error al procesar la imagen. Int\xE9ntalo de nuevo.")}finally{this._setLoadingState(!1),this.activeRequest=null,this.isOpen&&this.input.focus()}}_getHistoryTitle(){let e=this.chatHistory.find(t=>t.role==="user");return e?e.text:"Conversaci\xF3n 1"}_formatRelativeDate(e){let t=new Date(e),i=new Date,a=new Date(i);a.setDate(a.getDate()-1);let r=t.getHours(),s=t.getMinutes().toString().padStart(2,"0"),d=r>=12?"p.m.":"a.m.";r=r%12,r=r||12;let b=`${r.toString().padStart(2,"0")}:${s} ${d}`;if(t.toDateString()===i.toDateString())return`Hoy, ${b}`;if(t.toDateString()===a.toDateString())return`Ayer, ${b}`;{let c=t.getDate().toString().padStart(2,"0"),l=(t.getMonth()+1).toString().padStart(2,"0"),o=t.getFullYear();return`${c}/${l}/${o}, ${b}`}}_toggleActionsMenu(){this.actionsMenu&&!this.actionsMenu.classList.contains("cb-is-hidden")?this._closeActionsMenu():(this.actionsMenu.classList.remove("cb-is-hidden"),this.actionsBtn.setAttribute("aria-expanded","true"))}_closeActionsMenu(){this.actionsMenu&&(this.actionsMenu.classList.add("cb-is-hidden"),this.actionsBtn.setAttribute("aria-expanded","false"))}_toggleHistoryPanel(e=!1){this.historyPanel.classList.contains("cb-is-active")?this._closeHistoryPanel():this._openHistoryPanel(e)}_openHistoryPanel(e=!1){let t=this.messagesContainer.offsetTop;this.historyPanel.style.top=`${t}px`,this.historyPanel.style.bottom="0px",this._renderHistoryPanel(),clearTimeout(this._historyEnterTimer),this.historyList.classList.add("cb-is-entering"),this._historyEnterTimer=setTimeout(()=>this.historyList.classList.remove("cb-is-entering"),600),this.historyPanel.classList.add("cb-is-active"),this.historyPanel.setAttribute("aria-hidden","false"),this.messagesContainer.classList.add("cb-history-active"),this.window.classList.add("cb-history-open"),this.actionsBtn&&this.actionsBtn.classList.add("cb-is-active"),e&&this.headerBackBtn.focus({preventScroll:!0}),this.scrollBottomBtn&&this.scrollBottomBtn.classList.remove("cb-visible")}_closeHistoryPanel(){this.historyPanel.classList.remove("cb-is-active"),this.historyPanel.setAttribute("aria-hidden","true"),this.messagesContainer.classList.remove("cb-history-active"),this.window.classList.remove("cb-history-open"),this.actionsBtn&&this.actionsBtn.classList.remove("cb-is-active"),this._handleScroll()}_renderHistoryPanel(){let e=D(),t=e.some(c=>c.sessionId!==this.sessionId);if(this.historyList.innerHTML="",this.historyFooter?.classList.toggle("cb-is-hidden",!t),e.length===0){let c=document.createElement("div");c.className="cb-history-empty",c.innerHTML=`
        <div class="cb-history-empty-icon">${p.chatEmpty}</div>
        <p class="cb-history-empty-title">A\xFAn no tienes conversaciones</p>
        <p class="cb-history-empty-sub">Tus chats aparecer\xE1n aqu\xED</p>
      `,this.historyList.appendChild(c);return}let i=new Date,a=new Date(i.getFullYear(),i.getMonth(),i.getDate()),r=new Date(a);r.setDate(r.getDate()-1);let s=new Date(a);s.setDate(s.getDate()-7);let d=[{label:"Hoy",items:[]},{label:"Ayer",items:[]},{label:"\xDAltimos 7 d\xEDas",items:[]},{label:"Anteriores",items:[]}];e.forEach(c=>{let l=new Date(c.lastUserMessageAt||c.lastMessageAt),o=new Date(l.getFullYear(),l.getMonth(),l.getDate());o>=a?d[0].items.push(c):o>=r?d[1].items.push(c):o>=s?d[2].items.push(c):d[3].items.push(c)});let b=0;d.forEach(c=>{if(c.items.length===0)return;let l=document.createElement("div");l.className="cb-history-group",l.setAttribute("role","group");let o=document.createElement("div");o.className="cb-history-group-label",o.id=`cb-history-group-${c.label.replace(/\s+/g,"-")}`,o.textContent=c.label,l.setAttribute("aria-labelledby",o.id),l.appendChild(o),c.items.forEach(u=>{let v=this._buildHistoryItem(u,u.sessionId===this.sessionId);v.style.setProperty("--cb-item-delay",`${Math.min(b,8)*30}ms`),b++,l.appendChild(v)}),this.historyList.appendChild(l)})}_getHistoryPreview(e){let i=[...F(e)].reverse().find(a=>a.role==="bot");return!i||!i.text?"":i.text.replace(/```[\s\S]*?```/g," ").replace(/!?\[([^\]]*)\]\([^)]*\)/g,"$1").replace(/^\s*(?:[-*+]|\d+[.)])\s+/gm,"").replace(/^\s*#{1,6}\s+/gm,"").replace(/[*_~`>|]/g,"").replace(/[\p{Extended_Pictographic}\uFE0F\u200D]/gu,"").replace(/\s+/g," ").trim().slice(0,160)}_formatHistoryTime(e){let t=new Date(e),i=new Date,a=new Date(i.getFullYear(),i.getMonth(),i.getDate()),r=Math.floor((a-new Date(t.getFullYear(),t.getMonth(),t.getDate()))/864e5);if(r<=0)return this._getTimeString(t);if(r===1)return"Ayer";if(r<7){let s=t.toLocaleDateString("es",{weekday:"short"});return s.charAt(0).toUpperCase()+s.slice(1).replace(".","")}return t.toLocaleDateString("es",{day:"numeric",month:"short",...t.getFullYear()!==i.getFullYear()&&{year:"numeric"}}).replace(".","")}_buildHistoryItem(e,t=!1){let i=document.createElement("div");i.className=t?"cb-history-item cb-history-item--active":"cb-history-item",i.setAttribute("role","button"),i.setAttribute("tabindex",t?"-1":"0"),t&&(i.setAttribute("aria-current","true"),i.setAttribute("aria-disabled","true")),i.dataset.sessionId=e.sessionId;let a=e.lastUserMessageAt||e.lastMessageAt,r=this._getHistoryPreview(e.sessionId),s=e.messageCount===1?"1 mensaje":`${e.messageCount} mensajes`,d=`${this._formatRelativeDate(a)} \xB7 ${s}`;return i.innerHTML=`
      <div class="cb-history-item-content">
        <div class="cb-history-item-title-row">
          <span class="cb-history-item-title">${this._escapeAttr(e.title)}</span>
          <time class="cb-history-item-time" datetime="${this._escapeAttr(a)}" title="${this._escapeAttr(d)}">${this._escapeAttr(this._formatHistoryTime(a))}</time>
          ${t?"":`<button class="cb-history-item-delete" aria-label="Eliminar conversaci\xF3n" title="Eliminar conversaci\xF3n">${p.trash}</button>`}
        </div>
        ${r?`<div class="cb-history-item-preview">${this._escapeAttr(r)}</div>`:""}
      </div>
    `,i.setAttribute("aria-label",`${e.title}${t?" (conversaci\xF3n actual)":""}, ${d}`),t||(i.addEventListener("click",b=>{b.target.closest(".cb-history-item-delete")?(b.stopPropagation(),this._confirmDeleteSession(e.sessionId,i,b.detail===0)):i.classList.contains("cb-history-item--confirming")||this._loadSession(e.sessionId)}),i.addEventListener("keydown",b=>{b.target===i&&((b.key==="Enter"||b.key===" ")&&!i.classList.contains("cb-history-item--confirming")&&(b.preventDefault(),this._loadSession(e.sessionId)),b.key==="Escape"&&i.classList.contains("cb-history-item--confirming")&&this._cancelDeleteSession(i))})),i}_confirmDeleteSession(e,t,i=!1){if(t.classList.contains("cb-history-item--confirming"))return;t.classList.add("cb-history-item--confirming");let a=document.createElement("div");a.className="cb-history-item-confirm",a.innerHTML=`
      <span class="cb-history-item-confirm-text">\xBFEliminar esta conversaci\xF3n?</span>
      <div class="cb-history-item-confirm-actions">
        <button class="cb-history-item-confirm-no">Cancelar</button>
        <button class="cb-history-item-confirm-yes">Eliminar</button>
      </div>
    `,t.appendChild(a),a.querySelector(".cb-history-item-confirm-yes").addEventListener("click",r=>{r.stopPropagation(),this._deleteSession(e,t)}),a.querySelector(".cb-history-item-confirm-no").addEventListener("click",r=>{r.stopPropagation(),this._cancelDeleteSession(t)}),i&&setTimeout(()=>a.querySelector(".cb-history-item-confirm-no").focus(),0)}_cancelDeleteSession(e){e.classList.remove("cb-history-item--confirming");let t=e.querySelector(".cb-history-item-confirm");t&&t.remove()}async _loadSession(e){this.isLoading||(this.chatHistory&&this.chatHistory.length>0&&I(this.sessionId,this._getHistoryTitle(),this.chatHistory.length),this.sessionId=e,this.chatHistory=F(e),this._clearMessages(),this.chatHistory&&this.chatHistory.length>0?await this._loadHistory():this._showWelcomeMessage(),this._closeHistoryPanel(),O(e),this.input.focus())}_deleteSession(e,t){let i=()=>{V(e),e===this.sessionId?this._startNewChat():this._renderHistoryPanel()};if(t){t.classList.remove("cb-history-item--confirming");let a=t.querySelector(".cb-history-item-confirm");a&&a.remove(),t.classList.add("cb-history-item--removing"),t.addEventListener("animationend",i,{once:!0})}else i()}_openClearAllModal(e=!1){if(!this.clearAllOverlay)return;let t=D().filter(i=>i.sessionId!==this.sessionId).length;this.shadowRoot.getElementById("cb-clear-all-desc").textContent=`Se eliminar\xE1${t===1?" 1 conversaci\xF3n":`n ${t} conversaciones guardadas`}. La conversaci\xF3n actual se conserva.`,this.clearAllOverlay.classList.remove("cb-is-hidden"),this.clearAllOverlay.setAttribute("aria-hidden","false"),this.clearAllOverlay.offsetWidth,this.clearAllOverlay.classList.add("cb-is-active"),setTimeout(()=>(e?this.clearAllCancelBtn:this.clearAllDialog)?.focus(),0)}_closeClearAllModal(){if(!this.clearAllOverlay||!this.clearAllOverlay.classList.contains("cb-is-active"))return;this.clearAllOverlay.classList.remove("cb-is-active"),this.clearAllOverlay.setAttribute("aria-hidden","true");let e=t=>{t.target===this.clearAllOverlay&&(this.clearAllOverlay.classList.add("cb-is-hidden"),this.clearAllOverlay.removeEventListener("transitionend",e))};this.clearAllOverlay.addEventListener("transitionend",e),this.historyClearBtn&&this.historyClearBtn.focus()}_clearAllSessions(){let e=D().filter(i=>i.sessionId!==this.sessionId),t=Array.from(this.historyList.querySelectorAll(".cb-history-item:not(.cb-history-item--active)"));if(this.historyFooter&&this.historyFooter.classList.add("cb-is-hidden"),this.historyList.querySelectorAll(".cb-history-group-label").forEach(i=>{i.style.transition="opacity 0.15s ease",i.style.opacity="0"}),t.length===0){e.forEach(i=>V(i.sessionId)),this._renderHistoryPanel();return}t.forEach((i,a)=>{i.style.setProperty("--cb-swipe-delay",`${a*42}ms`),i.classList.add("cb-history-item--removing")}),t[t.length-1].addEventListener("animationend",()=>{e.forEach(i=>V(i.sessionId)),this._renderHistoryPanel()},{once:!0})}};function ue(){if(window.__chatBubbleInstance)return;let n=document.currentScript||document.querySelector('script[src*="chat-bubble"]'),e={};if(n){let i=n.getAttribute("data-webhook"),a=n.getAttribute("data-bot-name"),r=n.getAttribute("data-primary-color"),s=n.getAttribute("data-position");i&&(e.webhook={url:i}),a&&(e.bot={name:a}),r&&(e.style={primaryColor:r}),s&&(e.style={...e.style||{},position:s})}let t=Object.assign({},e,window.ChatBubbleConfig||{});e.webhook&&window.ChatBubbleConfig?.webhook&&(t.webhook=Object.assign({},e.webhook,window.ChatBubbleConfig.webhook)),e.bot&&window.ChatBubbleConfig?.bot&&(t.bot=Object.assign({},e.bot,window.ChatBubbleConfig.bot)),e.style&&window.ChatBubbleConfig?.style&&(t.style=Object.assign({},e.style,window.ChatBubbleConfig.style)),window.__chatBubbleInstance=new ie(t),window.ChatBubble={open:()=>window.__chatBubbleInstance._openChat(),close:()=>window.__chatBubbleInstance._closeChat(),toggle:()=>window.__chatBubbleInstance._toggleChat(),newChat:()=>window.__chatBubbleInstance._startNewChat(),sendMessage:i=>{window.__chatBubbleInstance&&(window.__chatBubbleInstance.input.value=i,window.__chatBubbleInstance._handleSend())},getSessionId:()=>window.__chatBubbleInstance?.sessionId,destroy:()=>{window.__chatBubbleInstance&&(window.__chatBubbleInstance.activeRequest?.abort(),window.removeEventListener("resize",window.__chatBubbleInstance._onWindowResize),document.removeEventListener("visibilitychange",window.__chatBubbleInstance._onVisibilityChange),document.removeEventListener("keydown",window.__chatBubbleInstance._onDocumentKeydown),window.__chatBubbleInstance._avatarVideoObserver?.disconnect(),window.__chatBubbleInstance._clearWaitingTimers(),document.getElementById("chat-bubble-host")?.remove(),window.__chatBubbleInstance=null)}}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ue):ue();
