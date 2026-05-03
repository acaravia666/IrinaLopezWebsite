import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const nameY     = useTransform(scrollYProgress, [0, 0.8], ['0%', '-14%']);
  const lowerY    = useTransform(scrollYProgress, [0, 0.8], ['0%', '-26%']);
  const nameScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.86]);
  const fadeOut   = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const photoY    = useTransform(scrollYProgress, [0, 1],   ['0%', '8%']);

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden flex bg-brand-terracotta">

      {/* ── MOBILE: photo as full-bleed background ── */}
      <div className="absolute inset-0 lg:hidden" aria-hidden="true">
        <img
          src="/irina-hero.webp"
          alt=""
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-terracotta via-brand-terracotta/75 to-brand-terracotta/40" />
      </div>

      {/* ── LEFT: text column ── */}
      <motion.div
        style={{ opacity: fadeOut }}
        className="relative z-20 w-full lg:w-[58%] flex flex-col justify-center min-h-screen px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 pb-40 lg:py-32"
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
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div style={{ y: nameY, scale: nameScale }}>
            <h1
              className="font-display font-black text-brand-cream uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(4rem, 11vw, 8rem)' }}
            >
              IRINA
            </h1>
            <span
              className="font-script text-brand-gold block"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 6.5rem)', lineHeight: 1.05 }}
            >
              López
            </span>
          </motion.div>
        </motion.div>

        {/* Tagline + CTAs */}
        <motion.div style={{ y: lowerY }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-brand-cream/75 font-body text-lg sm:text-xl font-light tracking-wide mt-8 mb-10 max-w-md leading-relaxed"
          >
            Blindamos tu{' '}
            <span className="text-brand-gold font-semibold">creatividad</span>{' '}
            con el rigor legal que tu talento merece en Ecuador.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#servicios" className="btn-primary">Asesorías →</a>
            <a href="#sobre-mi" className="btn-secondary">Conóceme</a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── RIGHT: photo column — desktop only ── */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[46%] overflow-hidden" aria-hidden="true">
        <motion.img
          style={{ y: photoY }}
          src="/irina-hero.webp"
          alt="Irina López"
          className="w-full h-[110%] -mt-[5%] object-cover object-top"
        />
        {/* blend left edge into terracotta */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-terracotta via-brand-terracotta/15 to-transparent" />
        {/* bottom vignette for wave transition */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-brand-terracotta/50 to-transparent" />
      </div>

      {/* Wave into About section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 bg-brand-cream pointer-events-none z-10"
        style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }}
      />
    </section>
  );
}
