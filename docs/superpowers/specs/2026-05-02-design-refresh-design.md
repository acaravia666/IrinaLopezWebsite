# Design Refresh — Irina López Website
**Date:** 2026-05-02  
**Scope:** Fix design tokens + full visual redesign (Full Brand / Jenna Kutcher style)

---

## Goal

Align the codebase with the brand manual (`README 2.md` + `colors_and_type.css`) and redesign all sections with solid full-bleed brand colors, large editorial typography, and no background-image overlays.

---

## 1. Design Tokens (index.css)

### Colors — replace current values with brand manual exact values

| Token | Old value | New value |
|-------|-----------|-----------|
| `--color-brand-cream` | `#F8F5F2` | `#FDFBF3` |
| `--color-brand-gold` | `#D4AF37` | `#D3A244` |
| `--color-brand-terracotta` | `#C05A45` | `#A43F37` |
| `--color-brand-ink` | `#2C2A29` | `#281E12` |
| `--color-brand-sand` | `#E5D5C5` | `#D9C6AC` |

Add missing semantic tokens:
- `--color-brand-sand-warm: #EDE0CB` — used for Store and Lead Magnet backgrounds
- `--color-brand-muted: #7A6855` — secondary text

### Fonts — use available local files + Google Fonts fallbacks

Remove `@theme` font declarations that reference unavailable fonts. Use:

| Role | Local font | Google Fonts fallback |
|------|-----------|----------------------|
| `--font-display` | `NewYork` | `Playfair Display` |
| `--font-heading` | `MuseoSans` | `DM Sans` |
| `--font-script` | `Armany` | `Dancing Script` |
| `--font-body` | `Inter` | — |

Add Google Fonts import to `index.css`:
```
Playfair Display (400, 700, 900, italic variants) + DM Sans (400–700) + Dancing Script (700)
```

### Fix broken Tailwind class names

The following classes are used in components but not defined in `@theme` — replace with correct brand tokens:

| Broken class | Replace with |
|---|---|
| `brand-calming-white` | `brand-cream` |
| `brand-polished-stone` | `brand-sand` |
| `brand-warm-gold` | `brand-gold` |
| `brand-well-read` | `brand-terracotta` |
| `brand-oil` | `brand-ink` |

---

## 2. Section-by-section design

### Navbar
- Background: `brand-cream`
- Logo: Playfair Display serif, italic terracotta on last name ("Irina *López*")
- Nav links: MuseoSans, ink, hover → terracotta
- CTA pill: gold background, ink text, uppercase

### Hero
- Background: `brand-terracotta` full-bleed (no background image)
- Remove the `fondoCalido` image and overlay entirely
- Name: "IRINA" in NewYork/Playfair Display, 900 weight, cream, uppercase, huge (`clamp(4rem, 12vw, 9rem)`)
- Script line: "López" in Armany/Dancing Script, gold, below the display name
- Eyebrow line: small uppercase tracking, cream/70, flanked by two thin lines
- Tagline: cream/75, "creatividad" highlighted in gold
- Two CTAs: gold pill ("Asesorías →") + outline cream pill ("Conóceme")
- Bottom wave: elliptical cream clip-path transition to next section
- **Remove** scroll indicator ("Descubre" + animated bar)

### About
- Background: `brand-cream`
- Layout: 50/50 split — image left, text right
- Image: `aspect-ratio: 4/5`, rounded-xl, grayscale-light, gold accent block behind image (offset, low opacity)
- Badges: gold pill "Abogada" + terracotta outline pill "Licenciada en Música"
- Headline: Playfair Display 900 "Más que" + Dancing Script/Armany terracotta "solo leyes."
- Body: Inter, ink/70, `text-lg`
- Signature SVG: ink/50, keep as-is

### Services
- Background: `brand-cream` (previously was dark ink — rejected by client)
- Cards: white background, 1px sand border, gold `border-top: 3px`
- Gold number label, gold icon (→ terracotta on hover)
- Card title: Playfair Display, ink
- Large ghosted background number: ink/4, gold/10 on hover
- CTA link: terracotta, gold on hover

### Store
- Background: `brand-sand-warm` (`#EDE0CB`)
- Section header: left-aligned, terracotta eyebrow
- "Recursos & *Herramientas*" — script in Dancing Script/Armany, gold
- 2-col product cards: cream bg, rounded-xl, shadow-sm
- Type badge (terracotta) + price badge (gold pill) overlaid on image
- Full-width gold pill "Comprar Ahora" button

### Blog
- Background: `brand-cream`
- 3-col cards: white bg, rounded-xl, light shadow
- Category badges by color: Legal 101 → terracotta, Negocios → gold (ink text), Propiedad Intelectual → ink
- Post title: Playfair Display, hover → terracotta
- "Leer artículo →" link in ink, border-top sand separator

### Lead Magnet
- Outer background: `brand-sand-warm` (`#EDE0CB`)
- Inner card: `brand-cream`, rounded-2xl, shadow-lg
- Gold blur circle decorative element (top-right)
- Image: `aspect-ratio: 3/4`, rotated -1.5deg, hover straightens, gold inner border inset
- Form: underline-only inputs (no border box), full-width gold pill submit button
- Disclaimer: tiny uppercase, ink/35

### Newsletter
- Background: `brand-ink` full-bleed (dark, dramatic)
- Gold blur orb bottom-right decorative
- Eyebrow: gold
- Headline: "Charlas" in Playfair Display cream + "de domingo." in Dancing Script/Armany, sand color
- Body: cream/55
- Form: rounded pill input (cream/8 bg, cream/20 border) + gold pill button side by side

### Footer
- Background: `brand-ink`, top border cream/8
- 4-col grid: logo+tagline | Navegación | Legal | Conecta
- Logo: Playfair Display, italic terracotta on "López"
- Column titles: gold, uppercase tracking
- Links: cream/50, hover → cream
- Social buttons: circular, cream/15 border, hover fills cream with ink icon
- Bottom bar: copyright left, "Diseño con ♥" right (heart in terracotta)

---

## 3. Removed elements

- All `backgroundImage` props using local asset imports (`fondoCalido`, `fondoDorado`, `fondoRojo`, `texturaDorada`, `fondoOscuro`) — replaced with solid brand color backgrounds
- `bg-brand-cream/80`, `bg-brand-ink/50` overlay divs — no longer needed
- Scroll indicator in Hero (`motion.div` with "Descubre" label + animated line)

---

## 4. Unchanged

- All Framer Motion animations (fade-in, parallax on About image, card reveals)
- Component file structure and routing
- Form logic (useState, handleSubmit)
- Accessibility attributes (aria-label, aria-hidden, sr-only)
- SEO / meta tags (index.html)
