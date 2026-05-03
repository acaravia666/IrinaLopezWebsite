import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    number: '01',
    title: 'Derechos de Autor & SENADI',
    description: 'Protección legal para artistas, fotógrafos y músicos ante el SENADI. Aseguramos que tu obra intelectual esté blindada contra plagios.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
];

const consultations = [
  {
    duration: '30',
    unit: 'min',
    label: 'Consulta rápida',
    description: 'Resuelve una duda puntual o evalúa si necesitas asesoría más profunda.',
    href: 'https://pay.hotmart.com/S100825381E?bid=1777770940780',
  },
  {
    duration: '45',
    unit: 'min',
    label: 'Sesión estándar',
    description: 'Revisamos tu situación legal y definimos los pasos a seguir para proteger tu trabajo.',
    href: 'https://pay.hotmart.com/S100826960L?bid=1777771084042',
    featured: true,
  },
  {
    duration: '60',
    unit: 'min',
    label: 'Sesión completa',
    description: 'Análisis detallado de tu caso con estrategia legal personalizada y plan de acción.',
    href: 'https://pay.hotmart.com/L100827445J?bid=1777771106107',
  },
];

export default function Services() {
  const scrollToConsult = (e) => {
    e.preventDefault();
    document.getElementById('asesoria')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servicios" className="py-24 md:py-32 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
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
            <span className="font-script text-brand-terracotta" style={{ fontSize: '1.2em', lineHeight: 0.9 }}>
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

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group flex flex-col rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Gold accent bar */}
              <div className="h-1 bg-gradient-to-r from-brand-gold via-brand-gold/70 to-transparent" />

              <div className="bg-white p-10 flex flex-col flex-grow relative">
                {/* Watermark number */}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-6 -right-2 font-display text-[8rem] leading-none font-bold text-brand-ink/[0.04] group-hover:text-brand-gold/10 transition-colors duration-500 select-none pointer-events-none"
                >
                  {service.number}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 group-hover:bg-brand-gold/20 transition-colors duration-300 flex items-center justify-center text-brand-gold mb-8 flex-shrink-0">
                  {service.icon}
                </div>

                <h3 className="font-display font-bold text-brand-ink text-xl mb-4 leading-snug">
                  {service.title}
                </h3>
                <p className="text-brand-ink/60 font-body text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>

                <div className="mt-8 pt-6 border-t border-brand-sand/50">
                  <a
                    href="#asesoria"
                    onClick={scrollToConsult}
                    className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-semibold font-heading text-brand-terracotta hover:text-brand-gold transition-colors duration-300 focus:outline-none"
                  >
                    Agendar asesoría
                    <span className="text-base leading-none group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Consultations */}
        <div id="asesoria" className="mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-brand-terracotta text-[10px] uppercase tracking-[0.35em] font-semibold font-heading mb-4 block">Asesoría directa</p>
            <h3
              className="font-display font-black text-brand-ink leading-tight tracking-tight"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
            >
              Agenda una{' '}
              <span className="font-script text-brand-gold" style={{ fontSize: '1.2em', lineHeight: 0.9 }}>
                sesión conmigo
              </span>
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {consultations.map((slot, index) => (
              <motion.a
                key={slot.duration}
                href={slot.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                className={`group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl focus:outline-none ${
                  slot.featured ? '' : 'shadow-sm'
                }`}
              >
                {/* Top bar */}
                <div className={`h-1 ${slot.featured ? 'bg-brand-gold' : 'bg-brand-sand'} group-hover:bg-brand-gold transition-colors duration-300`} />

                <div className={`flex flex-col flex-grow p-8 ${slot.featured ? 'bg-brand-ink' : 'bg-white'}`}>
                  {/* Duration */}
                  <div className="flex items-baseline gap-2 mb-1">
                    <span
                      className={`font-display font-black leading-none ${slot.featured ? 'text-brand-gold' : 'text-brand-terracotta'}`}
                      style={{ fontSize: 'clamp(3rem, 5vw, 4rem)' }}
                    >
                      {slot.duration}
                    </span>
                    <span className={`font-heading font-semibold text-sm ${slot.featured ? 'text-brand-gold/70' : 'text-brand-terracotta/60'}`}>
                      {slot.unit}
                    </span>
                  </div>
                  <span className={`text-[10px] uppercase tracking-[0.25em] font-semibold font-heading mb-6 ${slot.featured ? 'text-brand-cream/50' : 'text-brand-ink/40'}`}>
                    {slot.label}
                  </span>

                  <p className={`font-body text-sm leading-relaxed flex-grow mb-8 ${slot.featured ? 'text-brand-cream/70' : 'text-brand-ink/60'}`}>
                    {slot.description}
                  </p>

                  <span className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-[10px] uppercase tracking-widest font-semibold font-heading transition-all duration-300 ${
                    slot.featured
                      ? 'bg-brand-gold text-brand-ink group-hover:bg-brand-cream'
                      : 'bg-brand-ink text-brand-cream group-hover:bg-brand-terracotta'
                  }`}>
                    Reservar
                    <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
