import { motion } from 'framer-motion';

const WA_NUMBER = '593995590893';
const waUrl = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

const services = [
  {
    id: 1,
    number: '01',
    title: 'Contratos Artísticos',
    description: 'Contratos claros y sólidos para proteger tu trabajo creativo. Acuerdos de colaboración, cesión de derechos, licencias y más — en lenguaje humano.',
    waMessage: 'Hola Irina, me interesa una asesoría sobre contratos artísticos. ¿Podemos coordinar una sesión?',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    id: 2,
    number: '02',
    title: 'Propiedad Intelectual',
    description: 'Registro y protección de tus obras ante el SENADI. Derechos de autor, marcas y patentes para que nadie se apropie de lo que creaste.',
    waMessage: 'Hola Irina, me interesa una asesoría sobre propiedad intelectual y registro de obras. ¿Podemos coordinar una sesión?',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M14.83 14.83a4 4 0 1 1 0-5.66"/>
      </svg>
    ),
  },
  {
    id: 3,
    number: '03',
    title: 'Fondos Concursables',
    description: 'Acompañamiento en la postulación a fondos públicos y privados para proyectos culturales. Maximizamos tus posibilidades de financiamiento.',
    waMessage: 'Hola Irina, me interesa una asesoría sobre fondos concursables para mi proyecto cultural. ¿Podemos coordinar una sesión?',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    id: 4,
    number: '04',
    title: 'Producción de Eventos',
    description: 'Marco legal para conciertos, festivales y eventos culturales. Permisos, contratos con proveedores y gestión de responsabilidades.',
    waMessage: 'Hola Irina, me interesa una asesoría legal para producción de eventos. ¿Podemos coordinar una sesión?',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13"/>
        <circle cx="6" cy="18" r="3"/>
        <circle cx="18" cy="16" r="3"/>
      </svg>
    ),
  },
  {
    id: 5,
    number: '05',
    title: 'Facturación y Beneficios Tributarios',
    description: 'Optimización fiscal para creadores y artistas. Te guiamos en facturación, deducciones y los beneficios tributarios a los que tienes derecho.',
    waMessage: 'Hola Irina, me interesa una asesoría sobre facturación y beneficios tributarios para artistas. ¿Podemos coordinar una sesión?',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2"/>
        <line x1="2" y1="10" x2="22" y2="10"/>
      </svg>
    ),
  },
  {
    id: 6,
    number: '06',
    title: 'Registro RUC y RUAC',
    description: 'Formaliza tu actividad artística con el RUC y el Registro Único de Artistas y Gestores Culturales (RUAC). Primer paso para operar legalmente.',
    waMessage: 'Hola Irina, me interesa una asesoría para el registro RUC y RUAC. ¿Podemos coordinar una sesión?',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <polyline points="16 11 18 13 22 9"/>
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
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group flex flex-col rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-white"
            >
              <div className="relative p-7 flex flex-col flex-grow overflow-hidden">
                {/* Watermark number */}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-4 -right-1 font-display font-black leading-none text-[6rem] text-brand-ink/[0.05] select-none pointer-events-none"
                >
                  {service.number}
                </span>

                <span className="text-[9px] uppercase tracking-[0.35em] font-semibold font-heading text-brand-ink/30 mb-4 block">
                  {service.number}
                </span>

                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/10 group-hover:bg-brand-gold/20 transition-colors duration-300 flex items-center justify-center text-brand-terracotta group-hover:text-brand-gold flex-shrink-0 mt-0.5">
                    {service.icon}
                  </div>
                  <h3 className="font-display font-bold text-brand-ink text-lg leading-snug">
                    {service.title}
                  </h3>
                </div>
                <p className="text-brand-ink/55 font-body text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>

                <div className="mt-5 pt-4 border-t border-brand-sand/40">
                  <a
                    href={waUrl(service.waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] font-semibold font-heading text-brand-terracotta hover:text-brand-gold transition-colors duration-300 focus:outline-none"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.528 5.849L.057 23.552a.5.5 0 0 0 .61.61l5.703-1.471A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.802 9.802 0 0 1-5.006-1.374l-.36-.214-3.733.963.99-3.632-.235-.374A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
                    </svg>
                    Consultar por WhatsApp
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
                  <span className={`inline-flex items-center justify-center gap-1 text-[9px] tracking-wider font-heading font-medium mt-2 w-full ${slot.featured ? 'text-brand-cream/60' : 'text-brand-ink/50'}`}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    vía Hotmart
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
