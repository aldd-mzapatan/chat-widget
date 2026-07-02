---
name: documentation
description: Write and maintain clear, concise, and uniform code documentation. Use when asked to "document code", "add comments", "write README", "explain function", or "update docs".
license: MIT
metadata:
  author: development-team
  version: "1.0"
---

# Code Documentation

This skill defines the rules and process for documenting the code in this project. Its goal is to maintain clear, concise, and uniform documentation, focused on comments that explain the **what** and the **why**, without redundancy or lengthy blocks.

**Scope of action:**

- Writing and reviewing comments in the source code.
- Generating and updating documentation in `README.md` files and in the `/docs` folder.
- Creating commit messages and PR descriptions that follow the same guidelines.

**Does not touch code logic.** Only adds, modifies, or removes comments and explanatory texts.

---

## Purpose

| Benefit             | Description                                               |
| ------------------- | --------------------------------------------------------- |
| **Readability**     | Improve code understanding at a glance                    |
| **Maintainability** | Reduce time spent deciphering complex logic               |
| **Collaboration**   | Facilitate teamwork between developers and AI agents      |
| **Standardization** | Maintain uniform documentation across the entire codebase |

---

## Style Rules for Comments

### Language and Tone

| Rule                                            | Example                                                                        |
| ----------------------------------------------- | ------------------------------------------------------------------------------ |
| Write all comments in **Spanish**               | `// Validar entrada del usuario`                                               |
| Use the **infinitive form** to describe actions | `// Validar entrada del usuario` instead of `// Valida la entrada del usuario` |

### Length and Conciseness

| Rule                  | Description                                                                  |
| --------------------- | ---------------------------------------------------------------------------- |
| **Short and direct**  | Explain the function briefly, without fluff                                  |
| **No redundancy**     | Do not repeat what the code clearly shows                                    |
| **Omit when obvious** | If the code is self-explanatory, no comment needed                           |
| **Block limits**      | Keep comment blocks under 5 lines; use external docs for longer explanations |

### Content

| What to include                                   | What to avoid                       |
| ------------------------------------------------- | ----------------------------------- |
| **What** (purpose) and **why** (design decisions) | **How** when code is self-evident   |
| Usage examples (only when they add clarity)       | Redundant descriptions              |
| Parameter documentation (when not obvious)        | Jargon or overly technical language |

### Placement

```javascript
// ✅ Place before the element
// Obtener usuario por ID desde la base de datos
async function getUser(id) { ... }

// ✅ Place before complex logic
// Calcular precio con descuento por cantidad
const total = price * quantity * discount;

// ❌ Avoid end-of-line comments (except for brief annotations)
const maxRetries = 3; // Intentos máximos

// ✅ Exception: brief annotations are acceptable
const cacheTTL = 3600; // 1 hora en segundos
```

---

## Examples

### ✅ Good comments (Spanish)

```javascript
// Obtener usuario por ID desde la base de datos
async function getUser(id) { ... }

// Aplicar descuento si el usuario tiene un cupón válido
if (user.coupon && user.coupon.isValid()) {
  total = total * (1 - user.coupon.discount);
}
```

### ❌ Redundant comments (Spanish)

```javascript
// ❌ Esta función asíncrona obtiene un usuario por ID y lo devuelve como un objeto
async function getUser(id) { ... }

// ❌ Este código calcula el precio total multiplicando cantidad por precio
const total = quantity * price;
```

### ✅ Good block comments (Spanish)

```javascript
/*
  Calcular total con descuento.
  Si el usuario tiene cupón, aplicar el descuento adicional.
*/
function calculateTotal(items, coupon) { ... }
```

### ❌ Overly long blocks (Spanish)

```javascript
/*
  Esta función calcula el precio total de un carrito de compras.
  Primero, valida que los ítems sean válidos.
  Luego, suma el subtotal.
  Después, aplica los impuestos correspondientes.
  Finalmente, si hay cupón, aplica el descuento.
  Devuelve el total calculado.
*/
function calculateTotal(items, coupon) { ... }
```

---

## Documentation Process

| Step            | Action                                                                                                                                     | Output                          |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------- |
| **1. Identify** | Search for undocumented functions, classes, or complex logic. Search for missing `README.md` sections.                                     | List of undocumented areas      |
| **2. Write**    | Apply style rules (infinitive, Spanish, conciseness). Write one line per function describing its purpose. Document non-obvious parameters. | Draft comments and docs         |
| **3. Review**   | Read comments aloud to verify clarity. Remove redundancy and jargon. Verify comments match the code.                                       | Refined documentation           |
| **4. Update**   | If a new feature affects the end user, reflect it in `README.md`. Add or modify sections in `/docs` for new capabilities.                  | Updated `README.md` and `/docs` |
| **5. Commit**   | Follow commit message structure: `docs: add comments for function X` or `docs: update README with new endpoints`.                          | Proper commit history           |

---

## Commit and PR Guidelines

**Commit messages:**

```bash
docs: agregar comentarios para función validateEmail
docs: actualizar README con nuevos endpoints del webhook
docs: documentar la clase ImageGenerator
```

**PR descriptions:**

## Documentation changes

- Added comments to all API route handlers explaining their purpose
- Updated README with new configuration options
- Created `/docs/authentication.md` with detailed auth flow

## Purpose

These changes improve code clarity and onboarding for new developers.

---

## Additional Notes

- This skill applies to the **entire project**. Agents should prioritize documentation over implementation when explicitly requested.
- Before adding lengthy comments, consider whether the logic can be simplified to make it more readable.
- Documentation is an **ongoing process**. Keep it updated with every functional change.
- For complex systems, consider using diagrams (Mermaid, PlantUML) in `/docs` to illustrate architecture.
