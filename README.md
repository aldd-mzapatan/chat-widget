# Aliaddo Chat Widget

> Widget de chat con IA, ligero y embebible, integrado con workflows de **n8n**. Despliega un asistente conversacional en cualquier sitio web con una sola etiqueta `<script>`.

[![Versión](https://img.shields.io/badge/versión-1.0.0-blue?style=flat-square)](./package.json)
[![Licencia](https://img.shields.io/badge/licencia-MIT-yellow?style=flat-square)](./LICENSE)
![Tamaño](https://img.shields.io/badge/bundle-~6KB%20gzip-brightgreen?style=flat-square)

---

## Instalación rápida

Pega esto antes del cierre de `</body>`:

```html
<script>
  window.ChatBubbleConfig = {
    webhook: { url: "https://tu-n8n.com/webhook/chat-bubble" },
  };
</script>
<script
  type="module"
  src="https://cdn.jsdelivr.net/gh/aldd-mzapatan/chat-widget@1.0.0/dist/chat-bubble.js"
></script>
```

El widget se inicializa automáticamente en la esquina inferior derecha. Para el flujo completo de despliegue (n8n + CDN), ver [EMBED.md](./EMBED.md).

---

## Configurar el workflow en n8n

1. **Settings → Import Workflow** e importa [`n8n/workflow-example.json`](./n8n/workflow-example.json)
2. Configura tus credenciales en el nodo **OpenAI Chat Model**
3. Activa el workflow y copia la **URL de producción** del nodo Webhook
4. Pega esa URL en `webhook.url` del snippet de arriba

---

## Desarrollo local

```bash
npm install
npm run build       # bundle de producción, minificado
npm run build:dev   # bundle con sourcemaps
npm run watch        # rebuild automático al guardar
npm run serve         # servidor local en http://localhost:5000
```

Salida en `dist/`:

```
dist/
├── chat-bubble.js          # ~15KB — bundle ESM minificado
└── chat-bubble.bundle.css  # ~8KB  — estilos minificados
```

---

## Configuración

```javascript
window.ChatBubbleConfig = {
  webhook: {
    url: "https://tu-n8n.com/webhook/chat-bubble", // requerido
  },
  bot: {
    name: "Asistente",
    subtitle: "Soporte impulsado por IA",
    avatar: "https://tu-sitio.com/avatar.png", // o null → ícono SVG
    welcomeMessage: "¡Hola! ¿En qué puedo ayudarte?",
    offlineMessage: "En este momento no estoy disponible.",
    typingText: "Escribiendo...",
  },
  style: {
    primaryColor: "#6366f1",
    textColor: "#ffffff",
    position: "right", // 'right' | 'left'
    borderRadius: "12px",
    fontFamily: "inherit",
    theme: "auto", // 'auto' | 'light' | 'dark'
  },
  behavior: {
    openOnLoad: false,
    showTimestamps: true,
    enableSoundNotification: false,
    maxMessageLength: 1000,
    requestTimeout: 60000,
  },
};
```

<details>
<summary><strong>Tabla completa de opciones</strong></summary>

| Propiedad                   | Tipo                      | Default            | Descripción                                     |
| --------------------------- | ------------------------- | ------------------ | ----------------------------------------------- |
| `webhook.url`               | `string`                  | —                  | **Requerido.** Endpoint POST del webhook en n8n |
| `bot.name`                  | `string`                  | `'Asistente'`      | Nombre en el encabezado del chat                |
| `bot.subtitle`              | `string`                  | `'Soporte IA'`     | Subtítulo bajo el nombre                        |
| `bot.avatar`                | `string\|null`            | `null`             | URL de imagen (`null` = ícono SVG)              |
| `bot.welcomeMessage`        | `string`                  | `'¡Hola!'`         | Mensaje de bienvenida                           |
| `bot.offlineMessage`        | `string`                  | `'Sin conexión'`   | Mensaje al fallar la conexión                   |
| `bot.typingText`            | `string`                  | `'Escribiendo...'` | Aria-label del indicador de escritura           |
| `style.primaryColor`        | `string`                  | `'#6366f1'`        | Color de marca (hex)                            |
| `style.textColor`           | `string`                  | `'#ffffff'`        | Color de texto sobre `primaryColor`             |
| `style.position`            | `'right'\|'left'`         | `'right'`          | Alineación horizontal                           |
| `style.borderRadius`        | `string`                  | `'12px'`           | Radio de bordes                                 |
| `style.fontFamily`          | `string`                  | `'inherit'`        | Fuente CSS                                      |
| `style.theme`               | `'auto'\|'light'\|'dark'` | `'auto'`           | Modo de color                                   |
| `behavior.openOnLoad`       | `boolean`                 | `false`            | Abrir el chat al cargar la página               |
| `behavior.showTimestamps`   | `boolean`                 | `true`             | Mostrar hora en cada mensaje                    |
| `behavior.maxMessageLength` | `number`                  | `1000`             | Máximo de caracteres por mensaje                |
| `behavior.requestTimeout`   | `number`                  | `60000`            | Timeout del webhook (ms)                        |

</details>

---

## API pública

```javascript
window.ChatBubble.open(); // abrir
window.ChatBubble.close(); // cerrar
window.ChatBubble.toggle(); // alternar
window.ChatBubble.newChat(); // nueva conversación (limpia sessionId)
window.ChatBubble.sendMessage("Hola"); // enviar mensaje programáticamente
window.ChatBubble.getSessionId(); // obtener sessionId activo
window.ChatBubble.destroy(); // remover el widget del DOM
```

---

## Flujo de datos

```
Usuario escribe → chat-bubble.js → POST /webhook (n8n)
                                        │
                     Webhook → Memoria (sessionId) → Agente IA → Respond to Webhook
                                        │
                        chat-bubble.js ← { output, sessionId }
```

**Payload enviado:**

```json
{
  "chatInput": "¿Cuál es el horario de atención?",
  "sessionId": "550e8400-e29b-41d4-a716-446655440000",
  "metadata": {
    "timestamp": "2026-07-02T14:30:00.000Z",
    "source": "chat-bubble"
  }
}
```

**Respuesta esperada de n8n:**

```json
{
  "output": "Atendemos de lunes a viernes, 9 a 18 hs.",
  "sessionId": "550e8400-e29b-41d4-a716-446655440000"
}
```

> `output` es obligatorio. `sessionId` debe coincidir con el recibido en el request para mantener el hilo de la conversación.

---

## Configuración de nodos en n8n

| Nodo                                  | Configuración clave                                                               |
| ------------------------------------- | --------------------------------------------------------------------------------- |
| **Webhook**                           | Método `POST` · Response Mode = **Response Node** (crítico) · CORS `Allow *`      |
| **Window Buffer Memory** _(opcional)_ | `sessionId: {{ $json.body.sessionId }}` · ventana de contexto: 10 mensajes        |
| **AI Agent**                          | Input: `{{ $json.body.chatInput }}` · System prompt personalizado                 |
| **Respond to Webhook**                | Debe devolver `{ output, sessionId }` — sin esto se rompe el hilo de conversación |

---

## Markdown y seguridad

El widget renderiza `**negrita**`, `*itálica*`, `` `código` ``, bloques de código, listas, enlaces y encabezados en las respuestas del bot.

- **Los mensajes del usuario nunca se parsean como Markdown** — se insertan con `textContent`, nunca `innerHTML`.
- Las respuestas del bot se escapan (HTML-escape) antes de parsear Markdown.
- El `sessionId` vive en `sessionStorage` (se limpia al cerrar la pestaña) con fallback en memoria si no está disponible.
- Timeout configurable y reintento automático en las llamadas al webhook.

---

## Solución de problemas

| Síntoma                        | Causa probable / solución                                                                          |
| ------------------------------ | -------------------------------------------------------------------------------------------------- |
| El widget no aparece           | Verifica que `.js` y `.css` carguen; `window.ChatBubbleConfig` debe definirse **antes** del script |
| Error de CORS                  | En el nodo Webhook de n8n: `Options → CORS → Allow *` o whitelist de tu dominio                    |
| Timeout / sin respuesta        | Confirma `Response Mode: Response Node` (no _Last Node_); aumenta `requestTimeout`                 |
| No hay memoria de conversación | Conecta **Window Buffer Memory** con `sessionId: {{ $json.body.sessionId }}`                       |
| Falta el campo `output`        | El nodo **Respond to Webhook** debe devolver `{ output, sessionId }`                               |
| Problemas en móvil/iOS         | Verifica el meta `viewport`; el widget usa `100dvh` para el teclado                                |

---

## Estructura del proyecto

```
chat-bubble/
├── src/
│   ├── chat-bubble.js       # Widget principal (clase ChatBubble)
│   ├── chat-bubble.css      # Estilos, variables CSS y animaciones
│   └── utils/
│       ├── session.js       # Gestión de sessionId e historial
│       ├── markdown.js      # Parser Markdown con sanitización XSS
│       ├── api.js           # Cliente HTTP con reintentos
│       └── audio.js         # Grabación de audio (Web Audio API)
├── dist/                    # Build generado (esbuild)
├── demo/                    # Entorno de pruebas interactivo
├── n8n/workflow-example.json
└── EMBED.md                 # Guía detallada de despliegue
```

---

## Publicación y distribución

**jsDelivr (CDN gratuito):** sube `/dist` a un repo público, crea un release con tag semántico (`v1.0.0`) y el bundle queda disponible en:

```
https://cdn.jsdelivr.net/gh/aldd-mzapatan/chat-widget@1.0.0/dist/chat-bubble.js
```

**Self-hosted:** `npm run build` y sirve `dist/*` desde tu propio dominio.

---

## Compatibilidad de navegadores

Chrome/Edge 80+ · Firefox 75+ · Safari 13+. Sin soporte para IE11.
Si Web Audio API no está disponible, los mensajes de voz se deshabilitan sin romper el resto del widget.

---

## Contribuir

1. Haz fork del repositorio
2. Crea una rama (`git checkout -b feature/mi-mejora`)
3. Commit con mensaje descriptivo (`git commit -m "feat: ..."`)
4. Push y abre un Pull Request

---

## Licencia

MIT © 2026 — Libre para uso personal y comercial.
