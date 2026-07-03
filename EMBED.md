# Cómo integrar Chat-Bubble en tu sitio web

## Opción 1 — Configuración mínima (recomendada)

Pega este código antes del cierre de `</body>`:

```html
<script>
  window.ChatBubbleConfig = {
    webhook: {
      url: "https://TU-N8N.com/webhook/chat-bubble",
    },
  };
</script>
<script
  type="module"
  src="https://cdn.jsdelivr.net/gh/aldd-mzapatan/chat-widget@1.1.0/dist/chat-bubble.js"
  async
></script>
```

## Opción 2 — Configuración completa

```html
<script>
  window.ChatBubbleConfig = {
    webhook: {
      url: "https://TU-N8N.com/webhook/chat-bubble",
    },
    bot: {
      name: "Asistente",
      avatar: "https://tu-sitio.com/avatar.png",
      welcomeMessage: "¡Hola! ¿En qué te puedo ayudar?",
    },
    style: {
      primaryColor: "#835ea4",
      position: "right",
      theme: "auto",
    },
    behavior: {
      openOnLoad: false,
      showTimestamps: true,
      maxMessageLength: 1000,
    },
  };
</script>
<script
  type="module"
  src="https://cdn.jsdelivr.net/gh/aldd-mzapatan/chat-widget@1.1.0/dist/chat-bubble.js"
  async
></script>
```

## Opción 3 — Solo con atributos (configuración express)

```html
<script
  type="module"
  src="https://cdn.jsdelivr.net/gh/aldd-mzapatan/chat-widget@1.1.0/dist/chat-bubble.js"
  data-webhook="https://TU-N8N.com/webhook/chat-bubble"
  data-bot-name="Asistente"
  data-primary-color="#835ea4"
  async
></script>
```

## API JavaScript (control programático)

```javascript
window.ChatBubble.open(); // Abrir el chat
window.ChatBubble.close(); // Cerrar el chat
window.ChatBubble.toggle(); // Alternar
window.ChatBubble.newChat(); // Nueva conversación
window.ChatBubble.getSessionId(); // Obtener ID de sesión
window.ChatBubble.destroy(); // Remover el widget del DOM
```

## Cómo publicar en GitHub para usar jsDelivr

1. Crear repositorio público en GitHub llamado `chat-bubble`
2. Ejecutar: `npm run build`
3. Hacer commit de `dist/chat-bubble.js` y el chunk generado para emoji-picker
4. Crear un release con tag `v1.0.0` en GitHub
5. El CDN queda disponible en:
   `https://cdn.jsdelivr.net/gh/aldd-mzapatan/chat-widget@1.1.0/dist/chat-bubble.js`
