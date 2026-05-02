import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Three depth layers — background slowest, name medium, lower content fastest
  const bgY       = useTransform(scrollYProgress, [0, 1],   ['0%',   '-8%']);
  const nameY     = useTransform(scrollYProgress, [0, 0.8], ['0%',  '-14%']);
  const lowerY    = useTransform(scrollYProgress, [0, 0.8], ['0%',  '-26%']);
  const nameScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.86]);
  const fadeOut   = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-brand-terracotta">

      {/* Background parallax layer — blurred shapes, slowest movement */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-32 w-[28rem] h-[28rem] rounded-full bg-brand-cream/5 blur-3xl" />
        <div className="absolute bottom-1/3 -right-20 w-[22rem] h-[22rem] rounded-full bg-brand-gold/8 blur-3xl" />
        <div className="absolute top-2/3 left-1/3 w-64 h-64 rounded-full bg-brand-cream/4 blur-2xl" />
      </motion.div>

      {/* Wave transition into About (cream) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 bg-brand-cream pointer-events-none z-10"
        style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }}
      />

      {/* Content — fades out together as layers separate on scroll */}
      <motion.div style={{ opacity: fadeOut }} className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

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

        {/* Name — mid-speed layer, scales down on scroll */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div style={{ y: nameY, scale: nameScale }}>
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
        </motion.div>

        {/* Tagline + CTAs — fastest layer, separates from name on scroll */}
        <motion.div style={{ y: lowerY }}>
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="#servicios" className="btn-primary">Asesorías →</a>
            <a href="#sobre-mi" className="btn-secondary">Conóceme</a>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
}
