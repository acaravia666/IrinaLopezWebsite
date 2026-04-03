import { motion } from 'framer-motion';
import fondoDorado from '../assets/fondos/fondo-dorado.png';

const services = [
  {
    id: 1,
    number: "01",
    title: "Asesoría Legal Creativa",
    description: "Para artistas, diseñadores y creadores de contenido que necesitan proteger sus obras sin perderse en jerga legal.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    )
  },
  {
    id: 2,
    number: "02",
    title: "Protección de Marca",
    description: "Registra tu marca y asegura los derechos de todo lo que has construido con tanto esfuerzo y dedicación.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    )
  },
  {
    id: 3,
    number: "03",
    title: "Contratos Estéticos",
    description: "Documentos legales que no dan dolor de cabeza. Claros, precisos y diseñados para proteger tu negocio digital.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    )
  }
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-24 md:py-32 relative"
      style={{ backgroundImage: `url(${fondoDorado})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Overlay para contraste */}
      <div className="absolute inset-0 bg-brand-calming-white/25 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.4em] text-brand-well-read font-semibold mb-4"
          >
            Lo que ofrezco
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl text-brand-oil mb-6"
          >
            Servicios & <span className="italic font-subtitle text-brand-well-read">Asesorías</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-oil/80 text-lg font-light"
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
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-brand-calming-white p-10 flex flex-col group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden border-t-4 border-brand-warm-gold/30 hover:border-brand-warm-gold"
            >
              {/* Decorative background number */}
              <span
                aria-hidden="true"
                className="absolute -bottom-4 -right-2 font-header text-[7rem] leading-none font-bold text-brand-oil/[0.04] group-hover:text-brand-warm-gold/10 transition-colors select-none pointer-events-none"
              >
                {service.number}
              </span>

              {/* Number label */}
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-warm-gold font-semibold mb-6 block">
                {service.number}.
              </span>

              <div className="text-brand-warm-gold mb-6 group-hover:text-brand-well-read transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl text-brand-oil mb-4 font-header leading-tight">
                {service.title}
              </h3>
              <p className="text-brand-oil/70 font-light flex-grow">
                {service.description}
              </p>

              <div className="mt-8 pt-6 border-t border-brand-polished-stone/50">
                <a href="#lead-magnet" className="text-xs uppercase tracking-[0.2em] text-brand-well-read font-semibold hover:text-brand-warm-gold transition-colors inline-flex items-center gap-2">
                  Más información
                  <span className="text-lg leading-none">&rarr;</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
