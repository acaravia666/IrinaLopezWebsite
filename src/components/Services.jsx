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
                  href="#asesoria"
                  onClick={(e) => { e.preventDefault(); document.getElementById('asesoria')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="text-[10px] uppercase tracking-[0.3em] font-semibold font-heading text-brand-terracotta hover:text-brand-gold transition-colors inline-flex items-center gap-2"
                >
                  Agendar asesoría
                  <span className="text-base leading-none">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Asesorías */}
        <div id="asesoria" className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
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
            {[
              {
                duration: '30 min',
                label: 'Consulta rápida',
                description: 'Resuelve una duda puntual o evalúa si necesitas asesoría más profunda.',
                href: 'https://pay.hotmart.com/S100825381E?bid=1777770940780',
              },
              {
                duration: '45 min',
                label: 'Sesión estándar',
                description: 'Revisamos tu situación legal y definimos los pasos a seguir para proteger tu trabajo.',
                href: 'https://pay.hotmart.com/S100826960L?bid=1777771084042',
                featured: true,
              },
              {
                duration: '60 min',
                label: 'Sesión completa',
                description: 'Análisis detallado de tu caso con estrategia legal personalizada y plan de acción.',
                href: 'https://pay.hotmart.com/L100827445J?bid=1777771106107',
              },
            ].map((slot, index) => (
              <motion.a
                key={slot.duration}
                href={slot.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                className={`group flex flex-col p-8 rounded-xl border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  slot.featured
                    ? 'bg-brand-ink border-brand-ink text-brand-cream'
                    : 'bg-white border-brand-sand hover:border-brand-gold'
                }`}
              >
                <span
                  className={`font-display font-black leading-none mb-1 ${slot.featured ? 'text-brand-gold' : 'text-brand-terracotta'}`}
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}
                >
                  {slot.duration}
                </span>
                <span className={`text-[10px] uppercase tracking-[0.25em] font-semibold font-heading mb-6 ${slot.featured ? 'text-brand-cream/60' : 'text-brand-ink/45'}`}>
                  {slot.label}
                </span>
                <p className={`font-body text-sm leading-relaxed flex-grow mb-8 ${slot.featured ? 'text-brand-cream/75' : 'text-brand-ink/65'}`}>
                  {slot.description}
                </p>
                <span className={`inline-flex items-center justify-center px-6 py-3 rounded-full text-[10px] uppercase tracking-widest font-semibold font-heading transition-colors duration-300 ${
                  slot.featured
                    ? 'bg-brand-gold text-brand-ink group-hover:bg-brand-cream'
                    : 'bg-brand-ink text-brand-cream group-hover:bg-brand-terracotta'
                }`}>
                  Reservar →
                </span>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
