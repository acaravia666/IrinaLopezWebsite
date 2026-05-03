import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Store() {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  const handleCTA = () => {
    document.getElementById('lead-magnet')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="tienda" className="py-24 md:py-32 bg-brand-sand-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-xl mb-16">
          <p className="text-brand-terracotta text-[10px] uppercase tracking-[0.35em] font-semibold font-heading mb-4 block">Recursos</p>
          <h2
            className="font-display font-black text-brand-ink leading-tight tracking-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Herramientas{' '}
            <span className="font-script text-brand-gold" style={{ fontSize: '1.2em', lineHeight: 0.9 }}>
              gratuitas
            </span>
          </h2>
          <p className="text-brand-ink/70 font-body text-lg leading-relaxed">
            Recursos prácticos para que puedas proteger tu trabajo creativo y acceder a financiamiento, sin necesidad de ser abogada.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl group cursor-pointer bg-brand-cream rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row"
          onClick={handleCTA}
        >
          <div ref={imageRef} className="md:w-2/5 aspect-[4/3] md:aspect-auto bg-brand-sand overflow-hidden relative flex-shrink-0">
            <motion.img
              style={{ y, scale: 1.25 }}
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2574&auto=format&fit=crop"
              alt="Guía práctica para aplicar a fondos concursables"
              className="w-full h-full object-cover brightness-95"
            />
            <div className="absolute top-4 left-4 bg-brand-terracotta px-3 py-1 text-[10px] uppercase tracking-[0.15em] font-semibold font-heading text-brand-cream rounded-sm">
              Guía
            </div>
            <div className="absolute bottom-4 right-4 bg-brand-gold px-4 py-2 text-brand-ink font-display font-bold text-lg leading-none rounded-full">
              Gratis
            </div>
          </div>

          <div className="p-6 md:p-8 flex flex-col flex-grow">
            <h3 className="font-display font-bold text-brand-ink text-xl mb-3 leading-snug group-hover:text-brand-terracotta transition-colors duration-300">
              Guía práctica para aplicar a fondos concursables
            </h3>
            <p className="text-brand-ink/65 font-body text-sm leading-relaxed flex-grow mb-6">
              Todo lo que necesitas saber para presentar una solicitud sólida, desde los requisitos básicos hasta los errores más comunes que eliminan tu candidatura.
            </p>
            <button
              onClick={handleCTA}
              className="btn-primary w-full"
              aria-label="Obtener la guía gratuita"
            >
              Quiero la Guía →
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
