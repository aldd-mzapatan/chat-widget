# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Chat Bubble is a single-file, embeddable AI chat widget (Spanish-language, "Aliaddo") distributed as a self-initializing ESM bundle loaded via `<script type="module">`. It has no backend of its own — it talks to an n8n workflow over a webhook (POST with `{ chatInput, sessionId, metadata }`, expects back `{ output, sessionId }`). There is no test suite, linter, or TypeScript in this repo.

## Commands

```bash
npm install          # install devDependencies (esbuild, emoji-picker-element)
npm run build        # production bundle: minified, split, outputs to dist/
npm run build:dev    # dev bundle: sourcemaps instead of minification
npm run watch        # rebuild on save (sourcemapped, unminified JS)
npm run serve        # static file server at http://localhost:5000 for demo/index.html
```

There are no test or lint scripts — verify changes by running `npm run build:dev` (or `watch`) and exercising the widget through `demo/index.html` via `npm run serve`.

Build pipeline is two esbuild invocations chained with `&&`: one bundles `src/chat-bubble.js` (ESM, code-split — this is what pulls in `emoji-picker-element` as a lazy chunk) and one bundles `src/chat-bubble.css` standalone to `dist/chat-bubble.bundle.css`. `--loader:.css=text` means `src/chat-bubble.css` is also imported directly as a JS string (see Architecture below) — the `.bundle.css` file is a separate, optional stylesheet output, not something the widget loads itself.

## Architecture

**Everything lives in one class.** `src/chat-bubble.js` defines `class ChatBubble`, which owns the entire lifecycle: config merging, DOM construction, event binding, drag/resize, message rendering (including the streaming typewriter effect), history panel, audio recording UI, and emoji picker integration. There is no framework and no build-time templating — all DOM is built with `innerHTML` template strings or `document.createElement`, and inline SVGs live in the top-level `ICONS` object.

**Shadow DOM isolation.** `_buildDOM()` creates a host `<div id="chat-bubble-host">` appended to `document.body` and attaches an open Shadow Root. The compiled CSS (imported as a raw string via esbuild's `--loader:.css=text`, see `import cssContent from "./chat-bubble.css"`) is injected as a `<style>` tag inside that shadow root — this is what keeps the widget's styles from leaking into (or being polluted by) the host page. `emoji-picker-element` has its own shadow root nested inside; theme overrides for it are injected as a separate `<style>` into _that_ shadow root (`_applyEmojiPickerTheme`).

**Self-initializing, single global instance.** At the bottom of `chat-bubble.js`, `initChatBubble()` runs on `DOMContentLoaded` (or immediately if the DOM is already loaded). Config resolution order is: `data-*` attributes on the `<script>` tag → `window.ChatBubbleConfig` (deep-merged per-section: `webhook`/`bot`/`style` — global config wins on conflicts). The instance is stored on `window.__chatBubbleInstance`, and a public control surface is exposed as `window.ChatBubble` (`open/close/toggle/newChat/sendMessage/getSessionId/destroy`). Only one instance can exist at a time (guarded by `window.__chatBubbleInstance`).

**`src/utils/` are pure, framework-free helpers consumed by the class:**

- `session.js` — sessionId + multi-conversation history, all persisted to `localStorage` (not `sessionStorage`, despite what README.md's "Markdown y seguridad" section says). Keys: `cb_widget_v1_session_id` (active session), `cb_widget_v1_sessions_index` (list of up to 20 recent conversations, sorted by last _user_ message time, oldest evicted along with its history key), `cb_widget_v1_history_<sessionId>` (per-session message array). A legacy fixed key (`cb_widget_v1_history`) is silently migrated into the dynamic per-session key on first read. All localStorage access is try/catch-wrapped with an in-memory fallback for environments where storage is unavailable (private browsing, quota errors, etc.) — preserve that pattern when touching this file.
- `api.js` — `sendMessage` / `sendAudioMessage`: fetch wrapper with `AbortController`-based timeout, one automatic retry (not on `AbortError`), and translation of network/HTTP errors into user-facing Spanish messages. Response parsing tolerates alternate field names (`message`/`text`/`response`/`content`) if `output` is missing — n8n workflows are user-authored and inconsistent.
- `markdown.js` — hand-rolled Markdown → HTML (headings, lists, tables, code blocks, inline styles, links/images, autolinking). **Security-critical**: it HTML-escapes input before parsing, isolates and restores code blocks so their contents are never re-interpreted, and blocks `javascript:`/`data:`/`vbscript:` URLs in links/images via `sanitizeUrl`. User-typed messages are always inserted as `textContent`/`createTextNode`, never through this parser — only bot responses are rendered as Markdown.
- `audio.js` — `AudioRecorder` class wrapping `MediaRecorder` + Web Audio `AnalyserNode` (for live level metering), with MIME-type feature detection (webm/opus → ogg → mp4 fallback chain), a 30s hard cap, and blob↔base64 conversion for persisting recorded voice messages into chat history.

**Styling**: `src/chat-bubble.css` uses CSS custom properties (`--cb-primary`, `--cb-radius`, `--cb-drag-x`, `--cb-window-height`, `--cb-window-width`, etc.) as the theming mechanism — `_applyConfig()` only sets these properties on the host element rather than swapping stylesheets, and `_toggleWideMode()`/the drag-resize handlers in `_initDraggable()` animate the same variables at runtime.

**Distribution model**: no npm publish — `dist/` is committed and served straight from GitHub via jsDelivr (`cdn.jsdelivr.net/gh/aldd-mzapatan/chat-widget@<tag>/dist/...`). Releasing means: bump `version` in `package.json`, run `npm run build`, commit `dist/*`, tag `vX.Y.Z`. See README.md "Publicación y distribución" and EMBED.md for the full flow.

## Conventions specific to this repo

- **All code comments are written in Spanish**, using the infinitive form for action descriptions (e.g. `// Validar entrada del usuario`, not `// Valida...`). Keep comments short (ideally one line) — this repo's existing comments follow a "what/why, not how" style; don't add comments that just restate the code. This applies throughout `src/`, not just to new code.
- Public-facing docs (README.md, EMBED.md) are also in Spanish — match that when updating them.
- Don't reintroduce `sessionStorage` for session/history persistence — the actual implementation is `localStorage`-based (README.md's claim otherwise is stale; prefer the code as source of truth).
