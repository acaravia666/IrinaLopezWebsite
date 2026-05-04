import { motion } from 'framer-motion';

const testimonios = [
  {
    img: '/testimonios/testimonio1.webp',
    nombre: 'Andrea Villafuerte',
    rol: 'Cantante',
    texto: 'Irina es una persona 100% comprometida con su trabajo. Su pasión por ello, hace que se entregue por completo hasta lograr sus objetivos. Es una persona preparada y altamente resolutiva que con creatividad y conocimiento trae consigo propuestas que aportan al ámbito cultural y artístico del país.',
  },
  {
    img: '/testimonios/testimonio2.webp',
    nombre: 'Camila Pérez',
    rol: 'Cantautora',
    texto: 'Trabajar con Irina López fue una de las mejores decisiones para mi proyecto artístico. Su compromiso y profesionalismo se notan en cada detalle: desde la organización impecable de conciertos hasta la gestión de entradas y la búsqueda de auspicios. Irina no solo entiende las necesidades del entorno artístico, sino que también sabe cómo convertir ideas en resultados concretos.',
  },
  {
    img: '/testimonios/testimonio3.webp',
    nombre: 'Israel Maldonado',
    rol: 'Director y productor de eventos',
    texto: 'Que bendición que ahora los artistas podamos contar con alguien como Irina para ser asesorados y acompañados en los diferentes procesos de nuestra industria. Su aporte ha sido esencial en mis proyectos.',
  },
  {
    img: '/testimonios/testimonio4.webp',
    nombre: 'Pancho Feraud',
    rol: 'Director Agencia Feroz',
    texto: 'Desde que implementamos los contratos que desarrollamos contigo, la relación con nuestros clientes se volvió mucho más clara y sana. Hoy cada parte entiende exactamente cuáles son sus responsabilidades, sus alcances y sus límites dentro de cada campaña, y eso nos ha dado una estructura mucho más profesional.',
  },
  {
    img: '/testimonios/testimonio5.webp',
    nombre: 'Shalom Mendieta',
    rol: 'Cantautora',
    texto: 'Tener una industria musical en Ecuador es un sueño que todos los artistas del país tenemos. Con su visión y entrega, Irina ha influido en el crecimiento de la escena musical para incentivar la creación, gestión y difusión de la misma. Gracias a su labor como eje de unión, ese sueño se siente cada vez más cercano.',
  },
  {
    img: '/testimonios/testimonio6.webp',
    nombre: 'Sergio Vivar',
    rol: 'Productor',
    texto: 'Trabajar con Irina fue clave para que mi proyecto de EP ganara un fondo de fomento. Ella se encargó de la formulación del proyecto y me acompañó durante todo el proceso de postulación. Gracias a su asesoría, el proyecto fue seleccionado. Recomiendo su trabajo por su conocimiento y por la forma en que acompaña a los artistas en procesos que suelen ser complejos.',
  },
  {
    img: '/testimonios/testimonio7.webp',
    nombre: 'Hugo Cedeño',
    rol: 'Productor',
    texto: 'Es una verdadera fortuna para nosotros, los artistas, contar hoy con alguien como Irina. Su asesoría y acompañamiento en cada etapa de nuestro camino no solo enriquecen nuestros procesos, sino que también elevan nuestro arte al lugar de valor y respeto que merece. Estoy profundamente agradecido por su aporte, que ha sido fundamental en mis proyectos.',
  },
  {
    img: '/testimonios/testimonio8.webp',
    nombre: 'Ñusta Picuasi',
    rol: 'Cantante e influencer',
    texto: 'Antes de trabajar con Irina tenía mucha inconformidad con un contrato de representación que no me hacía sentir tranquila. Finalmente se logró encontrar la solución que estaba buscando y se pudo llegar a un acuerdo claro en el contrato. Recomiendo totalmente su servicio porque es fundamental trabajar con alguien que tenga comunicación, comprensión y que te haga sentir cómoda.',
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#b8972a" className="flex-shrink-0">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-24 md:py-32 bg-brand-terracotta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-brand-cream/60 text-[10px] uppercase tracking-[0.35em] font-semibold font-heading mb-4">
            Lo que dicen
          </p>
          <h2
            className="font-display font-black text-brand-cream leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
          >
            Artistas que{' '}
            <span className="font-script text-brand-gold" style={{ fontSize: '1.15em', lineHeight: 0.9 }}>
              confían
            </span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonios.map((t, i) => (
            <motion.div
              key={t.nombre}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="flex flex-col bg-brand-cream/10 rounded-2xl p-6 border border-brand-cream/15"
            >
              {/* Top: photo + name + stars */}
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={t.img}
                  alt={t.nombre}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0 ring-2 ring-brand-cream/20"
                />
                <div>
                  <p className="font-heading font-semibold text-brand-cream text-sm leading-tight">{t.nombre}</p>
                  <p className="font-body text-brand-cream/55 text-xs mt-0.5">{t.rol}</p>
                </div>
              </div>
              <Stars />
              {/* Text */}
              <p className="font-body text-brand-cream/80 text-sm leading-relaxed flex-grow">
                "{t.texto}"
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
