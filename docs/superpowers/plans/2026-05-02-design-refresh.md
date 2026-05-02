# Design Refresh — Irina López Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Align all design tokens with the brand manual and redesign every section with solid brand-color backgrounds, large editorial typography, and improved parallax effects.

**Architecture:** Replace background-image sections with solid full-bleed brand colors. Fix all broken Tailwind class names. Each component is self-contained — modify one at a time, verify in browser, commit.

**Tech Stack:** React 18, Tailwind CSS v4 (`@theme` tokens), Framer Motion, Vite

---

## File Map

| File | Change |
|------|--------|
| `src/index.css` | Fix color tokens, add Google Fonts, add `.service-card` helper class, fix btn classes |
| `src/components/Navbar.jsx` | Fix broken class names (`brand-calming-white` → `brand-cream`, `brand-polished-stone` → `brand-sand`) |
| `src/components/Hero.jsx` | Full rewrite — terracotta bg, huge display type, improved parallax, remove scroll indicator |
| `src/components/About.jsx` | Remove texture bg, clean cream, add `textY` parallax to text column |
| `src/components/Services.jsx` | Remove dorado bg, cream bg, card border style fix |
| `src/components/Store.jsx` | Remove texture bg, sand-warm bg, fix `brand-calming-white` |
| `src/components/BlogPreview.jsx` | Remove fondo bg, cream bg, fix `brand-well-read` / `brand-warm-gold` / `brand-oil` |
| `src/components/LeadMagnet.jsx` | Remove dark bg, sand-warm outer + cream inner card |
| `src/components/Newsletter.jsx` | Remove fondo bg, ink bg, big Playfair + script headline, fix `brand-calming-white` |
| `src/components/Footer.jsx` | Minor: fix any remaining broken class names |

---

## Task 1: Fix design tokens in `src/index.css`

**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: Add Google Fonts import at the top of the file, after `@import "tailwindcss"`**

Replace the current file's opening with:

```css
@import "tailwindcss";
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600;700&family=Dancing+Script:wght@700&display=swap');
```

- [ ] **Step 2: Update the `@theme` block with corrected brand tokens**

Replace the entire `@theme { ... }` block with:

```css
@theme {
  --color-brand-cream:       #FDFBF3;
  --color-brand-sand:        #D9C6AC;
  --color-brand-sand-warm:   #EDE0CB;
  --color-brand-gold:        #D3A244;
  --color-brand-gold-dark:   #A07A2A;
  --color-brand-terracotta:  #A43F37;
  --color-brand-ink:         #281E12;
  --color-brand-muted:       #7A6855;

  --font-display:  'NewYork', 'Playfair Display', Georgia, serif;
  --font-heading:  'MuseoSans', 'DM Sans', 'Helvetica Neue', sans-serif;
  --font-script:   'Armany', 'Dancing Script', cursive;
  --font-cursive:  'Armany', 'Dancing Script', cursive;
  --font-body:     'Inter', 'Helvetica Neue', sans-serif;
  --font-accent:   'MuseoSans', 'DM Sans', sans-serif;

  --spacing-128: 32rem;
}
```

- [ ] **Step 3: Update `@layer components` — fix btn-secondary and add service card helper**

Replace the existing `@layer components { ... }` block with:

```css
@layer components {
  .btn-primary {
    @apply inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-gold text-brand-ink font-heading font-semibold text-sm uppercase tracking-widest transition-colors duration-300 hover:bg-brand-gold-dark;
  }
  .btn-secondary {
    @apply inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-brand-cream text-brand-cream font-heading font-semibold text-sm uppercase tracking-widest transition-colors duration-300 hover:bg-brand-cream hover:text-brand-ink;
  }
  .t-hero {
    @apply font-display font-black leading-none tracking-tight text-brand-ink;
    font-size: clamp(4rem, 12vw, 10rem);
  }
  .t-h2 {
    @apply font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-brand-ink;
  }
  .service-card {
    border: 1px solid rgba(217, 198, 172, 0.4);
    border-top: 3px solid rgba(211, 162, 68, 0.35);
    transition: border-top-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
  }
  .service-card:hover {
    border-top-color: #D3A244;
  }
}
```

- [ ] **Step 4: Start the dev server and confirm no CSS errors**

```bash
npm run dev
```

Expected: dev server starts at `http://localhost:5173`, no console errors about missing tokens.

- [ ] **Step 5: Commit**

```bash
git add src/index.css
git commit -m "fix: update design tokens, fonts, and btn classes to brand manual"
```

---

## Task 2: Fix Navbar

**Files:**
- Modify: `src/components/Navbar.jsx`

- [ ] **Step 1: Replace the entire file content**

```jsx
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoColor from '../assets/logos/logo-color.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-brand-cream/95 backdrop-blur-md border-b border-brand-sand/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <a href="#" aria-label="Irina López – inicio">
              <img src={logoColor} alt="Irina López – Abogada & Licenciada en Música" className="h-[72px] w-auto" />
            </a>
          </div>
          <div className="hidden lg:flex space-x-8 items-center">
            <a href="#sobre-mi" className="text-brand-ink hover:text-brand-terracotta transition-colors duration-300 text-sm font-heading tracking-wide">Sobre Mí</a>
            <a href="#servicios" className="text-brand-ink hover:text-brand-terracotta transition-colors duration-300 text-sm font-heading tracking-wide">Servicios</a>
            <a href="#tienda" className="text-brand-ink hover:text-brand-terracotta transition-colors duration-300 text-sm font-heading tracking-wide">Tienda</a>
            <a href="#blog" className="text-brand-ink hover:text-brand-terracotta transition-colors duration-300 text-sm font-heading tracking-wide">Blog</a>
            <a href="#lead-magnet" className="btn-primary !py-2.5 !px-6 !text-xs">Recursos →</a>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="text-brand-ink hover:text-brand-terracotta transition-colors"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="lg:hidden bg-brand-cream shadow-lg border-b border-brand-sand/40"
        >
          <div className="px-4 pt-4 pb-8 space-y-6 flex flex-col items-center">
            <a href="#sobre-mi" onClick={() => setIsOpen(false)} className="text-brand-ink hover:text-brand-terracotta font-heading tracking-wide text-lg transition-colors">Sobre Mí</a>
            <a href="#servicios" onClick={() => setIsOpen(false)} className="text-brand-ink hover:text-brand-terracotta font-heading tracking-wide text-lg transition-colors">Servicios</a>
            <a href="#tienda" onClick={() => setIsOpen(false)} className="text-brand-ink hover:text-brand-terracotta font-heading tracking-wide text-lg transition-colors">Tienda</a>
            <a href="#blog" onClick={() => setIsOpen(false)} className="text-brand-ink hover:text-brand-terracotta font-heading tracking-wide text-lg transition-colors">Blog</a>
            <a href="#lead-magnet" onClick={() => setIsOpen(false)} className="btn-primary">Recursos →</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
```

- [ ] **Step 2: Check in browser — navbar should show cream bg, no broken classes, gold CTA button**

Open `http://localhost:5173`. Navbar should be cream/95 with backdrop blur, gold "Recursos →" pill.

- [ ] **Step 3: Commit**

```bash
git add src/components/Navbar.jsx
git commit -m "redesign: navbar — cream bg, clean typography, fix broken classes"
```

---

## Task 3: Redesign Hero

**Files:**
- Modify: `src/components/Hero.jsx`

- [ ] **Step 1: Replace the entire file content**

```jsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const contentY = useTransform(scrollYProgress, [0, 0.8], ['0%', '-15%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const nameScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.94]);

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-brand-terracotta">
      {/* Wave transition into About (cream) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 bg-brand-cream pointer-events-none z-10"
        style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }}
      />

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-10 h-px bg-brand-cream/40" />
          <span className="text-brand-cream/70 text-[10px] uppercase tracking-[0.4em] font-semibold font-heading">
            Abogada · Música · Propiedad Intelectual
          </span>
          <div className="w-10 h-px bg-brand-cream/40" />
        </motion.div>

        {/* Name — parallax scale on scroll */}
        <motion.div
          style={{ scale: nameScale }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1
            className="font-display font-black text-brand-cream uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(4.5rem, 14vw, 9rem)' }}
          >
            IRINA
          </h1>
          <span
            className="font-script text-brand-gold block"
            style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', lineHeight: 1.05 }}
          >
            López
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-brand-cream/75 font-body text-lg sm:text-xl font-light tracking-wide mt-8 mb-10 max-w-lg mx-auto leading-relaxed"
        >
          Blindamos tu{' '}
          <span className="text-brand-gold font-semibold">creatividad</span>{' '}
          con el rigor legal que tu talento merece en Ecuador.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#servicios" className="btn-primary">
            Asesorías →
          </a>
          <a href="#sobre-mi" className="btn-secondary">
            Conóceme
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Verify in browser**

- Fondo sólido terracotta `#A43F37`, sin imagen de fondo
- "IRINA" enorme en NewYork/Playfair Display, crema
- "López" en Armany/Dancing Script, dorado
- Sin indicador de scroll ("Descubre")
- Al hacer scroll, el contenido sube suavemente y el nombre escala ligeramente

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.jsx
git commit -m "redesign: hero — terracotta bg, huge editorial type, improved parallax, remove scroll indicator"
```

---

## Task 4: Redesign About (improved parallax)

**Files:**
- Modify: `src/components/About.jsx`

- [ ] **Step 1: Replace the entire file content**

```jsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const blockY = useTransform(scrollYProgress, [0, 1], ['12%', '-12%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['4%', '-4%']);

  return (
    <section id="sobre-mi" ref={containerRef} className="py-32 md:py-48 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">

          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              style={{ y: blockY }}
              className="absolute top-10 -right-6 bottom-4 -left-6 bg-brand-gold/10 rounded-xl -z-0 max-w-sm mx-auto w-full h-full lg:max-w-none"
            />
            <motion.div
              initial={{ opacity: 0, clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)' }}
              whileInView={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="aspect-[4/5] relative z-10 w-full max-w-sm mx-auto lg:max-w-none overflow-hidden shadow-2xl rounded-xl"
            >
              <motion.img
                style={{ y: imageY, scale: 1.15 }}
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop"
                alt="Irina Lopez"
                className="w-full h-full object-cover grayscale-[8%] brightness-95"
              />
            </motion.div>
          </div>

          {/* Text Side — subtle opposite parallax */}
          <motion.div style={{ y: textY }} className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-[10px] uppercase tracking-[0.3em] font-semibold bg-brand-gold text-brand-ink px-4 py-2 rounded-full">
                  Abogada
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] font-semibold border border-brand-terracotta text-brand-terracotta px-4 py-2 rounded-full">
                  Licenciada en Música
                </span>
              </div>

              <h2
                className="font-display font-black text-brand-ink leading-tight tracking-tight mb-2"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Más que
              </h2>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="font-script text-brand-terracotta block mb-10"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.05 }}
              >
                solo leyes.
              </motion.span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-6 text-brand-ink/70 font-body text-lg leading-relaxed"
            >
              <p>
                Soy abogada de profesión en Ecuador, pero mi corazón late al ritmo del arte y la música. Ayudo a creativos a proteger sus ideas, asegurarme de que sus marcas estén registradas ante el SENADI y que sus negocios sean sólidos, mientras comparto mi propia faceta artística con el mundo.
              </p>
              <p>
                Creo en la dualidad. No tienes que elegir entre ser estructurado y profesional o ser libre y creativo. Aquí, los contratos se diseñan con la misma pasión con la que se compone una melodía; con claridad, armonía y protección total.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
              className="mt-12"
            >
              <svg className="h-14 text-brand-ink opacity-40" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 40C30 30 50 10 70 20C90 30 60 50 80 40C100 30 140 10 160 20C180 30 170 40 190 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify in browser**

- Fondo cream limpio, sin imagen de textura
- La foto hace parallax hacia abajo al hacer scroll, el texto hace parallax leve en dirección contraria
- Headline "Más que / solo leyes." con tipografía de display + script
- El bloque de color gold/10 se mueve en dirección opuesta a la imagen

- [ ] **Step 3: Commit**

```bash
git add src/components/About.jsx
git commit -m "redesign: about — cream bg, improved dual-parallax on image and text columns"
```

---

## Task 5: Redesign Services

**Files:**
- Modify: `src/components/Services.jsx`

- [ ] **Step 1: Replace the entire file content**

```jsx
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    number: '01',
    title: 'Derechos de Autor & SENADI',
    description: 'Protección legal para artistas, fotógrafos y músicos ante el SENADI. Aseguramos que tu obra intelectual esté blindada contra plagios.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: 2,
    number: '02',
    title: 'Registro de Marcas',
    description: 'Gestión completa del registro de tu marca en Ecuador. Transformamos tu identidad creativa en un activo legalmente protegido.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: 3,
    number: '03',
    title: 'Legal Design & Contratos',
    description: 'Contratos claros, sin laberintos legales. Diseñados para proteger tus negocios creativos con un lenguaje humano y profesional.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-terracotta text-[10px] uppercase tracking-[0.35em] font-semibold font-heading mb-4 block"
          >
            Lo que ofrezco
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-brand-ink leading-tight tracking-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Servicios &{' '}
            <span
              className="font-script text-brand-terracotta"
              style={{ fontSize: '1.2em', lineHeight: 0.9 }}
            >
              Asesorías
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-ink/70 font-body text-lg leading-relaxed"
          >
            Diseñados específicamente para que tu yo creativo pueda florecer con la tranquilidad de que tu negocio está protegido legalmente.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="service-card bg-white p-10 flex flex-col group hover:-translate-y-2 rounded-xl shadow-sm relative overflow-hidden"
            >
              <span
                aria-hidden="true"
                className="absolute -bottom-4 -right-2 font-display text-[7rem] leading-none font-bold text-brand-ink/[0.03] group-hover:text-brand-gold/10 transition-colors select-none pointer-events-none"
              >
                {service.number}
              </span>

              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold font-heading text-brand-gold mb-6 block">
                {service.number}.
              </span>

              <div className="text-brand-gold mb-6 group-hover:text-brand-terracotta transition-colors duration-300">
                {service.icon}
              </div>

              <h3 className="font-display font-bold text-brand-ink text-xl mb-4 leading-snug">
                {service.title}
              </h3>
              <p className="text-brand-ink/65 font-body text-sm leading-relaxed flex-grow">
                {service.description}
              </p>

              <div className="mt-8 pt-6 border-t border-brand-sand/40">
                <a
                  href="#lead-magnet"
                  className="text-[10px] uppercase tracking-[0.3em] font-semibold font-heading text-brand-terracotta hover:text-brand-gold transition-colors inline-flex items-center gap-2"
                >
                  Más información
                  <span className="text-base leading-none">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify in browser**

- Fondo cream (no oscuro, no café)
- 3 tarjetas blancas con borde superior dorado fino
- El borde superior se vuelve dorado completo al hacer hover
- Iconos dorados → terracotta en hover
- Número fantasma grande al fondo de cada tarjeta

- [ ] **Step 3: Commit**

```bash
git add src/components/Services.jsx
git commit -m "redesign: services — cream bg, white cards with gold top border accent"
```

---

## Task 6: Redesign Store

**Files:**
- Modify: `src/components/Store.jsx`

- [ ] **Step 1: Replace the entire file content**

```jsx
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    title: 'Librito Legal para Creativos',
    type: 'E-Book',
    price: '$29',
    image: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=2574&auto=format&fit=crop',
    description: 'Todo lo que necesitas saber antes de lanzar tu primer proyecto creativo al mundo, explicado de forma simple.',
  },
  {
    id: 2,
    title: 'Plantilla de Contrato Freelance',
    type: 'Plantilla',
    price: '$49',
    image: 'https://images.unsplash.com/photo-1621509375836-cd209ec16c68?q=80&w=2574&auto=format&fit=crop',
    description: 'Un contrato listo para usar, diseñado estéticamente y blindado legalmente para proteger tu trabajo.',
  },
];

export default function Store() {
  return (
    <section id="tienda" className="py-24 md:py-32 bg-brand-sand-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <p className="text-brand-terracotta text-[10px] uppercase tracking-[0.35em] font-semibold font-heading mb-4 block">Tienda</p>
            <h2
              className="font-display font-black text-brand-ink leading-tight tracking-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Recursos &{' '}
              <span className="font-script text-brand-gold" style={{ fontSize: '1.2em', lineHeight: 0.9 }}>
                Herramientas
              </span>
            </h2>
            <p className="text-brand-ink/70 font-body text-lg leading-relaxed">
              Descargas vitales para proteger tu negocio sin tener que contratar a un equipo de abogados completo.
            </p>
          </div>
          <span
            className="hidden md:inline-flex btn-secondary !border-brand-ink/20 !text-brand-ink/30 cursor-not-allowed"
            aria-disabled="true"
          >
            Ver todo
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group cursor-pointer bg-brand-cream rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/3] bg-brand-sand overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover brightness-95 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-brand-terracotta px-3 py-1 text-[10px] uppercase tracking-[0.15em] font-semibold font-heading text-brand-cream rounded-sm">
                  {product.type}
                </div>
                <div className="absolute bottom-4 right-4 bg-brand-gold px-4 py-2 text-brand-ink font-display font-bold text-lg leading-none rounded-full">
                  {product.price}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display font-bold text-brand-ink text-xl mb-3 leading-snug">
                  {product.title}
                </h3>
                <p className="text-brand-ink/65 font-body text-sm leading-relaxed flex-grow mb-6">
                  {product.description}
                </p>
                <button
                  className="btn-primary w-full"
                  aria-label={`Comprar ${product.title}`}
                >
                  Comprar Ahora
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 md:hidden flex justify-center">
          <span
            className="btn-secondary !border-brand-ink/20 !text-brand-ink/30 cursor-not-allowed"
            aria-disabled="true"
          >
            Ver todo
          </span>
        </div>

      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify in browser**

- Fondo `#EDE0CB` (arena cálido), sin imagen de textura
- Tarjetas cream con sombra, badge terracotta tipo, badge dorado con precio
- Botón "Comprar Ahora" dorado en ancho completo

- [ ] **Step 3: Commit**

```bash
git add src/components/Store.jsx
git commit -m "redesign: store — sand-warm bg, clean product cards, fix broken class names"
```

---

## Task 7: Redesign BlogPreview

**Files:**
- Modify: `src/components/BlogPreview.jsx`

- [ ] **Step 1: Replace the entire file content**

```jsx
import { motion } from 'framer-motion';

const posts = [
  {
    id: 1,
    title: 'Por qué necesitas registrar tu marca antes de lanzar',
    category: 'Legal 101',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2670&auto=format&fit=crop',
    date: '12 Oct, 2026',
  },
  {
    id: 2,
    title: 'El arte de negociar como creativo freelance',
    category: 'Negocios',
    image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=2574&auto=format&fit=crop',
    date: '28 Sep, 2026',
  },
  {
    id: 3,
    title: 'Inspiración vs Plagio: Dónde está la línea legal',
    category: 'Propiedad Intelectual',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2671&auto=format&fit=crop',
    date: '15 Sep, 2026',
  },
];

const categoryStyles = {
  'Legal 101': 'bg-brand-terracotta text-brand-cream',
  'Negocios': 'bg-brand-gold text-brand-ink',
  'Propiedad Intelectual': 'bg-brand-ink text-brand-cream',
};

export default function BlogPreview() {
  return (
    <section id="blog" className="py-24 md:py-32 bg-brand-cream border-t border-brand-sand/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-terracotta text-[10px] uppercase tracking-[0.35em] font-semibold font-heading mb-4 block"
          >
            Reflexiones & Recursos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-brand-ink leading-tight tracking-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Del{' '}
            <span className="font-script text-brand-gold" style={{ fontSize: '1.2em', lineHeight: 0.9 }}>
              Blog
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-ink/70 font-body text-lg leading-relaxed"
          >
            Reflexiones, tips legales y un poco de inspiración para creativos y emprendedores.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="aspect-[4/3] bg-brand-sand overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover brightness-95 group-hover:scale-105 transition-transform duration-700"
                />
                <div className={`absolute top-3 left-3 ${categoryStyles[post.category] ?? 'bg-brand-ink text-brand-cream'} px-3 py-1 text-[10px] uppercase tracking-[0.12em] font-semibold font-heading rounded-sm`}>
                  {post.category}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <span className="text-[10px] text-brand-ink/35 font-heading uppercase tracking-widest mb-3 block">
                  {post.date}
                </span>
                <h3 className="font-display font-bold text-brand-ink text-lg leading-snug mb-auto pb-4 group-hover:text-brand-terracotta transition-colors duration-300">
                  {post.title}
                </h3>
                <div className="pt-4 border-t border-brand-sand/40">
                  <a
                    href="#blog"
                    aria-label={`Leer artículo: ${post.title}`}
                    className="text-[10px] uppercase tracking-[0.2em] font-semibold font-heading text-brand-ink hover:text-brand-terracotta transition-colors inline-flex items-center gap-2"
                  >
                    Leer artículo
                    <span className="text-sm leading-none group-hover:translate-x-1 transition-transform inline-block" aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <span
            className="btn-secondary !border-brand-ink/20 !text-brand-ink/30 cursor-not-allowed inline-block"
            aria-disabled="true"
          >
            Visitar el Blog Completo
          </span>
        </div>

      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify in browser**

- Fondo cream limpio, sin imagen de fondo
- Categorías con colores correctos: terracotta, gold, ink
- Hover en título → terracotta, hover en imagen → scale-105
- No aparecen clases `brand-well-read`, `brand-warm-gold`, `brand-oil` en el código

- [ ] **Step 3: Commit**

```bash
git add src/components/BlogPreview.jsx
git commit -m "redesign: blog — cream bg, fix category class names, editorial card style"
```

---

## Task 8: Redesign LeadMagnet

**Files:**
- Modify: `src/components/LeadMagnet.jsx`

- [ ] **Step 1: Replace the entire file content**

```jsx
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function LeadMagnet() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setName('');
    setEmail('');
  };

  return (
    <section id="lead-magnet" className="py-24 md:py-32 bg-brand-sand-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-cream p-8 md:p-16 shadow-xl relative overflow-hidden rounded-2xl">

          {/* Decorative gold orb */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-brand-gold/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-5/12"
            >
              <div className="aspect-[3/4] bg-brand-sand relative shadow-lg -rotate-2 hover:rotate-0 transition-transform duration-500 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                  alt="Portada de la Guía Legal Imprescindible"
                  className="w-full h-full object-cover brightness-95"
                />
                <div className="absolute inset-0 border border-brand-gold/40 m-4 rounded-lg pointer-events-none" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-7/12"
            >
              <span className="text-brand-terracotta text-[10px] uppercase tracking-[0.35em] font-semibold font-heading mb-4 block">
                Recurso Gratuito
              </span>
              <h2
                className="font-display font-black text-brand-ink leading-tight tracking-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                El Checklist{' '}
                <span className="font-script text-brand-gold block" style={{ fontSize: '1.2em', lineHeight: 0.95 }}>
                  Legal Imprescindible
                </span>
              </h2>
              <p className="text-brand-ink/70 font-body text-lg mb-8 max-w-lg leading-relaxed">
                Antes de lanzar tu próximo gran proyecto, asegúrate de tener las bases cubiertas. Descarga mi guía paso a paso para proteger tus creaciones sin estrés.
              </p>

              {submitted ? (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-brand-terracotta text-lg font-body font-medium"
                >
                  ¡Perfecto! Revisa tu correo — la guía está en camino.
                </motion.p>
              ) : (
                <form className="max-w-md" onSubmit={handleSubmit}>
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="leadmagnet-name" className="sr-only">Tu nombre</label>
                      <input
                        id="leadmagnet-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Tu nombre"
                        className="w-full bg-transparent border-b-2 border-brand-ink/15 py-3 px-1 focus:outline-none focus:border-brand-terracotta transition-colors placeholder:text-brand-ink/35 font-body text-brand-ink"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="leadmagnet-email" className="sr-only">Tu mejor correo electrónico</label>
                      <input
                        id="leadmagnet-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Tu mejor correo electrónico"
                        className="w-full bg-transparent border-b-2 border-brand-ink/15 py-3 px-1 focus:outline-none focus:border-brand-terracotta transition-colors placeholder:text-brand-ink/35 font-body text-brand-ink"
                        required
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full mt-4">
                      Quiero la Guía Gratis →
                    </button>
                  </div>
                  <p className="text-[10px] uppercase tracking-wider text-brand-ink/35 mt-4 text-center font-heading">
                    Cero spam. Solo correos ocasionales que sí vas a querer leer.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify in browser**

- Fondo exterior sand-warm, tarjeta interior cream con sombra
- Imagen inclinada -2deg, se endereza en hover
- Inputs con solo borde inferior, focus → terracotta
- Botón dorado ancho completo

- [ ] **Step 3: Commit**

```bash
git add src/components/LeadMagnet.jsx
git commit -m "redesign: lead magnet — sand-warm bg, cream card, tilted image, underline inputs"
```

---

## Task 9: Redesign Newsletter

**Files:**
- Modify: `src/components/Newsletter.jsx`

- [ ] **Step 1: Replace the entire file content**

```jsx
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section
      id="newsletter"
      className="py-24 md:py-32 bg-brand-ink text-brand-cream relative overflow-hidden"
    >
      {/* Decorative gold orb */}
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-brand-gold/10 rounded-full blur-[80px] translate-x-1/3 translate-y-1/3 pointer-events-none" aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-brand-gold text-[10px] uppercase tracking-[0.35em] font-semibold font-heading mb-8 block">
            Newsletter semanal
          </p>

          <h2
            className="font-display font-black text-brand-cream leading-none tracking-tight mb-2"
            style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}
          >
            Charlas
          </h2>
          <span
            className="font-script text-brand-sand block mb-8"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', lineHeight: 1.05 }}
          >
            de domingo.
          </span>

          <p className="text-brand-cream/55 font-body text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Sin jerga legal aburrida. Solo reflexiones, inspiración y uno que otro tip útil directo a tu bandeja de entrada. Únete a mi newsletter semanal.
          </p>

          {submitted ? (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-gold text-lg font-body tracking-wide"
            >
              ¡Gracias por suscribirte! Nos vemos el próximo domingo.
            </motion.p>
          ) : (
            <form
              className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 justify-center"
              onSubmit={handleSubmit}
            >
              <label htmlFor="newsletter-email" className="sr-only">Tu dirección de email</label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu dirección de email"
                className="flex-grow bg-brand-cream/8 border border-brand-cream/20 py-4 px-6 rounded-full focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-cream/40 font-body text-brand-cream text-center sm:text-left"
                required
              />
              <button type="submit" className="btn-primary shrink-0">
                Inscribirme →
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify in browser**

- Fondo ink oscuro, sin imagen de fondo, sin cuadrícula SVG
- "Charlas" enorme en display serif cream
- "de domingo." en script, color sand
- Orb dorado decorativo abajo a la derecha
- Input pill translúcido, botón dorado al lado

- [ ] **Step 3: Commit**

```bash
git add src/components/Newsletter.jsx
git commit -m "redesign: newsletter — ink bg, large display + script headline, clean form"
```

---

## Task 10: Fix Footer

**Files:**
- Modify: `src/components/Footer.jsx`

- [ ] **Step 1: Replace the entire file content**

```jsx
import logoLight from '../assets/logos/logo-light-red.png';

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 bg-brand-ink border-t border-brand-cream/8 text-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          <div className="md:col-span-1">
            <img src={logoLight} alt="Irina López – Abogada & Licenciada en Música" className="h-16 w-auto mb-6" />
            <p className="text-brand-cream/45 text-sm font-body leading-relaxed max-w-xs">
              Abogada especializada en propiedad intelectual y creadora de contenido.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-semibold font-heading text-brand-gold mb-6 block">Navegación</h4>
            <ul className="space-y-4">
              <li><a href="#sobre-mi" className="text-brand-cream/55 hover:text-brand-cream transition-colors text-sm font-body tracking-wide">Sobre Mí</a></li>
              <li><a href="#servicios" className="text-brand-cream/55 hover:text-brand-cream transition-colors text-sm font-body tracking-wide">Servicios</a></li>
              <li><a href="#tienda" className="text-brand-cream/55 hover:text-brand-cream transition-colors text-sm font-body tracking-wide">Tienda / Recursos</a></li>
              <li><a href="#blog" className="text-brand-cream/55 hover:text-brand-cream transition-colors text-sm font-body tracking-wide">El Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-semibold font-heading text-brand-gold mb-6 block">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-brand-cream/55 hover:text-brand-cream transition-colors text-sm font-body tracking-wide">Aviso Legal</a></li>
              <li><a href="#" className="text-brand-cream/55 hover:text-brand-cream transition-colors text-sm font-body tracking-wide">Política de Privacidad</a></li>
              <li><a href="#" className="text-brand-cream/55 hover:text-brand-cream transition-colors text-sm font-body tracking-wide">Términos y Condiciones</a></li>
              <li><a href="#" className="text-brand-cream/55 hover:text-brand-cream transition-colors text-sm font-body tracking-wide">Política de Cookies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-semibold font-heading text-brand-gold mb-6 block">Conecta</h4>
            <div className="flex gap-4">
              <a href="#" aria-label="Seguir a Irina en Instagram" className="w-10 h-10 border border-brand-cream/15 flex items-center justify-center hover:bg-brand-cream hover:text-brand-ink transition-all duration-300 rounded-full text-brand-cream/55">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="Conectar con Irina en LinkedIn" className="w-10 h-10 border border-brand-cream/15 flex items-center justify-center hover:bg-brand-cream hover:text-brand-ink transition-all duration-300 rounded-full text-brand-cream/55">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" aria-label="Ver a Irina en TikTok" className="w-10 h-10 border border-brand-cream/15 flex items-center justify-center hover:bg-brand-cream hover:text-brand-ink transition-all duration-300 rounded-full text-brand-cream/55">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-brand-cream/8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-cream/35 text-[10px] uppercase tracking-widest text-center md:text-left font-heading">
            &copy; {new Date().getFullYear()} Irina Lopez. Todos los derechos reservados.
          </p>
          <p className="text-brand-cream/35 text-[10px] uppercase tracking-widest text-center md:text-right font-heading">
            Diseño web con <span className="text-brand-terracotta">&hearts;</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Verify in browser**

- Footer ink oscuro igual que antes pero sin clases rotas
- Columnas de navegación con títulos dorados
- Botones sociales circulares, hover → cream con icon ink

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.jsx
git commit -m "redesign: footer — clean up class names, consistent brand tokens"
```

---

## Task 11: Final verification and build check

- [ ] **Step 1: Review the full page in the browser at `http://localhost:5173`**

Scroll through the entire page and verify:

| Section | Expected |
|---------|----------|
| Navbar | Cream/95 bg, gold pill CTA |
| Hero | Terracotta bg, huge IRINA + script López, gold "creatividad", no scroll indicator |
| About | Cream bg, dual parallax, clip-path image reveal |
| Services | Cream bg, white cards, gold top border |
| Store | Sand-warm bg, cream cards with price + type badges |
| Blog | Cream bg, 3 cards, correct category colors |
| Lead Magnet | Sand-warm outer, cream card, tilted image |
| Newsletter | Ink bg, huge Charlas + de domingo. script |
| Footer | Ink bg, 4-col grid |

- [ ] **Step 2: Check browser console for errors**

No 404s for fonts, no Tailwind class-not-found warnings, no JS errors.

- [ ] **Step 3: Run production build**

```bash
npm run build
```

Expected: build completes successfully, no errors.

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "chore: verify build passes after design refresh"
```
