// Analizar Markdown a HTML

// Bloquear protocolos peligrosos en URLs
function sanitizeUrl(url) {
  const trimmed = url.trim();
  if (
    /^javascript:/i.test(trimmed) ||
    /^data:/i.test(trimmed) ||
    /^vbscript:/i.test(trimmed)
  ) {
    return "#";
  }
  return trimmed;
}

// Escapar caracteres HTML para evitar XSS
function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Convertir URLs de texto plano a enlaces HTML
function linkifyUrls(text) {
  const parts = text.split(/(<[^>]+>)/g);
  let inAnchor = false;

  return parts
    .map((part) => {
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
        const target = cleanUrl.includes("ayuda.aliaddo.com")
          ? "_self"
          : "_blank";
        return `<a href="${cleanUrl}" target="${target}" rel="noopener noreferrer" class="cb-link">${cleanUrl}</a>${suffix}`;
      });
    })
    .join("");
}

// Extraer bloques de código para omitir procesamiento adicional
function extractCodeBlocks(text, blocks) {
  return text.replace(/```(\w*)\n?([\s\S]*?)```/g, (_, lang, code) => {
    const index = blocks.length;
    const langAttr = lang ? ` class="language-${escapeHtml(lang)}"` : "";
    blocks.push(
      `<pre class="cb-code-block"><code${langAttr}>${escapeHtml(code.trim())}</code></pre>`,
    );
    return `\x00CODEBLOCK${index}\x00`;
  });
}

// Extraer código en línea
function extractInlineCode(text, blocks) {
  return text.replace(/`([^`\n]+)`/g, (_, code) => {
    const index = blocks.length;
    blocks.push(`<code class="cb-inline-code">${escapeHtml(code)}</code>`);
    return `\x00INLINECODE${index}\x00`;
  });
}

// Reinsertar bloques de código en el texto final
function restoreCodeBlocks(text, codeBlocks, inlineBlocks) {
  let result = text;
  codeBlocks.forEach((block, i) => {
    result = result.replace(`\x00CODEBLOCK${i}\x00`, block);
  });
  inlineBlocks.forEach((block, i) => {
    result = result.replace(`\x00INLINECODE${i}\x00`, block);
  });
  return result;
}

// Aplicar estilos en línea (negrita, cursiva, tachado)
function parseInlineStyles(text) {
  return text
    .replace(/\*\*([^*\n]+)\*\*/g, "<strong>$1</strong>")
    .replace(/__([^_\n]+)__/g, "<strong>$1</strong>")
    .replace(/(?<!\*)\*(?!\*)([^*\n]+)(?<!\*)\*(?!\*)/g, "<em>$1</em>")
    .replace(/(?<!_)_(?!_)([^_\n]+)(?<!_)_(?!_)/g, "<em>$1</em>")
    .replace(/~~([^~\n]+)~~/g, "<del>$1</del>");
}

// Convertir imágenes Markdown a etiquetas img HTML
function parseMarkdownImages(text) {
  // Permitir un nivel de paréntesis dentro de la URL (p. ej. nombres de archivo como "borrador%20(1).gif")
  const markdownImageRegex = /!\[([^\]]*)\]\(((?:[^()\s]|\([^()]*\))*)\)/g;
  return text.replace(markdownImageRegex, (_, altText, url) => {
    const cleanUrl = sanitizeUrl(url);
    return `<img src="${cleanUrl}" alt="${altText}" class="cb-image" style="max-width: 100%; border-radius: var(--cb-radius, 12px); margin: 8px 0; display: block;" loading="lazy" />`;
  });
}

// Convertir enlaces Markdown a etiquetas ancla HTML
function parseMarkdownLinks(text) {
  // Permitir un nivel de paréntesis dentro de la URL, igual que en parseMarkdownImages
  const markdownLinkRegex = /\[([^\]]+)\]\(((?:[^()\s]|\([^()]*\))*)\)/g;
  return text.replace(markdownLinkRegex, (_, linkText, url) => {
    const cleanUrl = sanitizeUrl(url);
    const target = cleanUrl.includes("ayuda.aliaddo.com") ? "_self" : "_blank";
    return `<a href="${cleanUrl}" target="${target}" rel="noopener noreferrer" class="cb-link">${linkText}</a>`;
  });
}

// Procesar estilos, enlaces y URLs en un bloque de texto
function parseInline(text) {
  let processed = text;
  processed = parseInlineStyles(processed);
  processed = parseMarkdownImages(processed);
  processed = parseMarkdownLinks(processed);
  processed = linkifyUrls(processed);
  return processed;
}

// Convertir texto Markdown a HTML estructurado por bloques
export function parseMarkdown(text) {
  if (!text || typeof text !== "string") return "";

  const codeBlocks = [];
  const inlineBlocks = [];

  // Aislar bloques de código
  let processed = extractCodeBlocks(text, codeBlocks);

  // Sanear HTML
  processed = escapeHtml(processed);

  // Aislar código en línea
  processed = extractInlineCode(processed, inlineBlocks);

  // Analizar líneas individualmente
  const lines = processed.split(/\r?\n/);

  const blocks = [];
  let currentBlock = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Cerrar bloque actual en líneas vacías
    if (trimmed === "") {
      if (currentBlock) {
        blocks.push(currentBlock);
        currentBlock = null;
      }
      continue;
    }

    // Procesar línea separadora horizontal
    if (/^([-*_])(\s*\1){2,}$/.test(trimmed)) {
      if (currentBlock) {
        blocks.push(currentBlock);
        currentBlock = null;
      }
      blocks.push({ type: "hr" });
      continue;
    }

    // Procesar encabezados
    const headingMatch = line.match(/^(#{1,3})\s+(.+)$/);
    if (headingMatch) {
      if (currentBlock) {
        blocks.push(currentBlock);
      }
      const level = headingMatch[1].length;
      const headingText = headingMatch[2];
      blocks.push({
        type: "heading",
        level: level,
        text: headingText,
      });
      currentBlock = null;
      continue;
    }

    // Procesar listas desordenadas
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

    // Procesar listas ordenadas
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

    // Procesar tablas
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

    // Agrupar texto en párrafos
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

  // Convertir bloques a HTML final
  const htmlBlocks = blocks.map((block) => {
    if (block.type === "hr") {
      return '<hr class="cb-hr" />';
    }

    if (block.type === "heading") {
      const processedText = parseInline(block.text);
      return `<h${block.level} class="cb-heading">${processedText}</h${block.level}>`;
    }

    if (block.type === "ul") {
      const itemsHtml = block.items
        .map((item) => {
          const processedText = parseInline(item);
          return `<li>${processedText}</li>`;
        })
        .join("");
      return `<ul class="cb-list">${itemsHtml}</ul>`;
    }

    if (block.type === "ol") {
      const itemsHtml = block.items
        .map((item) => {
          const processedText = parseInline(item);
          return `<li>${processedText}</li>`;
        })
        .join("");
      return `<ol class="cb-list cb-list--ordered">${itemsHtml}</ol>`;
    }

    if (block.type === "table") {
      const tableRows = block.rows.map((row) => {
        let cleanRow = row;
        if (cleanRow.startsWith("|")) cleanRow = cleanRow.substring(1);
        if (cleanRow.endsWith("|"))
          cleanRow = cleanRow.substring(0, cleanRow.length - 1);
        return cleanRow.split("|").map((cell) => cell.trim());
      });

      const dataRows = [];
      let headers = [];
      let hasSeparator = false;

      if (tableRows.length > 1) {
        const secondRow = tableRows[1];
        hasSeparator =
          secondRow.length > 0 &&
          secondRow.every((cell) => /^[-:\s]+$/.test(cell));
      }

      tableRows.forEach((row, idx) => {
        if (hasSeparator && idx === 1) return; // Saltar separador
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

      let tbody = `<tbody>${dataRows
        .map((row) => {
          return `<tr>${row.map((cell) => `<td style="padding: 8px; border: 1px solid rgba(150,150,150,0.3);">${parseInline(cell)}</td>`).join("")}</tr>`;
        })
        .join("")}</tbody>`;

      return `<div class="cb-table-wrapper" style="overflow-x: auto; margin: 10px 0;"><table class="cb-table" style="width: 100%; border-collapse: collapse; font-size: 0.9em;">${thead}${tbody}</table></div>`;
    }

    if (block.type === "p") {
      const processedLines = block.lines
        .map((line) => parseInline(line))
        .join("<br>");
      return `<p class="cb-paragraph">${processedLines}</p>`;
    }

    return "";
  });

  let htmlResult = htmlBlocks.join("");

  // Restaurar código intacto
  htmlResult = restoreCodeBlocks(htmlResult, codeBlocks, inlineBlocks);

  return htmlResult;
}

// Escapar texto HTML
export function escapeText(text) {
  return escapeHtml(text || "");
}
