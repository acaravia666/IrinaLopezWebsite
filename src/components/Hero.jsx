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
