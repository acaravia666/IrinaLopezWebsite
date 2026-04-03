import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import logoLight from '../assets/logos/logo-light-red.png';
import fondoCalido from '../assets/fondos/fondo-calido.png';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.65], ["0%", "-8%"]);

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center">

      {/* Background: fondo cálido de marca con parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0 h-[130%] -top-[15%] w-full"
      >
        <img src={fondoCalido} className="w-full h-full object-cover" alt="" aria-hidden="true" />
        {/* Capa oscura para contraste */}
        <div className="absolute inset-0 bg-brand-oil/60" />
        {/* Viñeta sutil en bordes */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_rgba(40,32,18,0.5)_100%)]" />
      </motion.div>

      {/* Contenido Hero */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center mt-20"
      >
        {/* Línea decorativa superior */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-16 h-[1px] bg-brand-warm-gold" />
          <span className="text-brand-polished-stone text-[10px] uppercase tracking-[0.5em] font-light">
            Abogada · Música · Propiedad Intelectual
          </span>
          <div className="w-16 h-[1px] bg-brand-warm-gold" />
        </motion.div>

        {/* Logo principal — la marca de Irina */}
        <motion.img
          src={logoLight}
          alt="Irina López – Abogada & Licenciada en Música"
          className="w-[280px] sm:w-[400px] lg:w-[560px] h-auto mb-10"
          initial={{ opacity: 0, scale: 0.88, filter: 'blur(14px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-brand-polished-stone/80 font-subtitle italic text-lg sm:text-xl lg:text-2xl font-light tracking-wide mb-12"
        >
          Blindamos tu creatividad con el rigor legal que tu talento merece en Ecuador.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <a
            href="#servicios"
            className="group relative overflow-hidden px-10 py-4 bg-brand-warm-gold text-brand-calming-white uppercase tracking-[0.25em] text-xs transition-all duration-300 w-full sm:w-auto shadow-lg shadow-brand-oil/30"
          >
            <span className="relative z-10 group-hover:text-brand-oil transition-colors duration-500">Asesorías</span>
            <div className="absolute inset-0 bg-brand-calming-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
          </a>
          <a
            href="#sobre-mi"
            className="group relative overflow-hidden px-10 py-4 border border-brand-calming-white/40 text-brand-calming-white uppercase tracking-[0.25em] text-xs transition-all duration-300 w-full sm:w-auto backdrop-blur-sm"
          >
            <span className="relative z-10 group-hover:text-brand-oil transition-colors duration-500">Conóceme</span>
            <div className="absolute inset-0 bg-brand-calming-white scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-500 ease-out" />
          </a>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-brand-calming-white z-10"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] mb-4 text-brand-polished-stone/70">Descubre</span>
        <div className="w-[1px] h-16 bg-brand-calming-white/20 overflow-hidden relative">
          <motion.div
            animate={{ top: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-full h-1/2 bg-brand-warm-gold absolute"
          />
        </div>
      </motion.div>
    </section>
  );
}
