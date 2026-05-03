import { motion } from 'framer-motion';

export default function Store() {
  const handleCTA = () => {
    document.getElementById('lead-magnet')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="tienda" className="py-14 md:py-20 bg-brand-sand-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-xl mb-8">
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
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-sm group cursor-pointer bg-brand-cream rounded-xl shadow-md overflow-hidden flex flex-row hover:shadow-lg transition-shadow duration-300"
          onClick={handleCTA}
        >
          {/* Cover */}
          <div className="w-28 flex-shrink-0 overflow-hidden">
            <img
              src="/guia-recurso.webp"
              alt="Guía práctica para formalizar tu carrera artística en Ecuador"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-between p-4 flex-grow">
            <div>
              <span className="text-[9px] uppercase tracking-[0.2em] font-semibold font-heading text-brand-gold block mb-1">Gratis</span>
              <h3 className="font-display font-bold text-brand-ink text-sm leading-snug group-hover:text-brand-terracotta transition-colors duration-300">
                Guía para formalizar tu carrera artística en Ecuador
              </h3>
              <p className="text-brand-ink/55 font-body text-xs leading-relaxed mt-1">
                Bases legales sólidas para establecer tu carrera. Edición 4.
              </p>
            </div>
            <span className="text-[9px] uppercase tracking-[0.2em] font-semibold font-heading text-brand-terracotta group-hover:text-brand-gold transition-colors duration-300 mt-3 block">
              Quiero la guía →
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
