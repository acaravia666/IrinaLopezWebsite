import { motion } from 'framer-motion';
import { useState } from 'react';

export default function LeadMagnet() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setName('');
    setEmail('');
  };

  return (
    <section id="lead-magnet" className="py-24 md:py-32 bg-brand-sand-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-cream p-8 md:p-16 shadow-xl relative overflow-hidden rounded-2xl">

          {/* Decorative gold orb */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-brand-gold/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" aria-hidden="true" />

          <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-5/12"
            >
              <div className="aspect-[3/4] bg-brand-sand relative shadow-lg -rotate-2 hover:rotate-0 transition-transform duration-500 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                  alt="Portada de la Guía Legal Imprescindible"
                  className="w-full h-full object-cover brightness-95"
                />
                <div className="absolute inset-0 border border-brand-gold/40 m-4 rounded-lg pointer-events-none" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-7/12"
            >
              <span className="text-brand-terracotta text-[10px] uppercase tracking-[0.35em] font-semibold font-heading mb-4 block">
                Recurso Gratuito
              </span>
              <h2
                className="font-display font-black text-brand-ink leading-tight tracking-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                El Checklist{' '}
                <span className="font-script text-brand-gold block" style={{ fontSize: '1.2em', lineHeight: 0.95 }}>
                  Legal Imprescindible
                </span>
              </h2>
              <p className="text-brand-ink/70 font-body text-lg mb-8 max-w-lg leading-relaxed">
                Antes de lanzar tu próximo gran proyecto, asegúrate de tener las bases cubiertas. Descarga mi guía paso a paso para proteger tus creaciones sin estrés.
              </p>

              {submitted ? (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-brand-terracotta text-lg font-body font-medium"
                >
                  ¡Perfecto! Revisa tu correo — la guía está en camino.
                </motion.p>
              ) : (
                <form className="max-w-md" onSubmit={handleSubmit}>
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="leadmagnet-name" className="sr-only">Tu nombre</label>
                      <input
                        id="leadmagnet-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Tu nombre"
                        className="w-full bg-transparent border-b-2 border-brand-ink/15 py-3 px-1 focus:outline-none focus:border-brand-terracotta transition-colors placeholder:text-brand-ink/35 font-body text-brand-ink"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="leadmagnet-email" className="sr-only">Tu mejor correo electrónico</label>
                      <input
                        id="leadmagnet-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Tu mejor correo electrónico"
                        className="w-full bg-transparent border-b-2 border-brand-ink/15 py-3 px-1 focus:outline-none focus:border-brand-terracotta transition-colors placeholder:text-brand-ink/35 font-body text-brand-ink"
                        required
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full mt-4">
                      Quiero la Guía Gratis →
                    </button>
                  </div>
                  <p className="text-[10px] uppercase tracking-wider text-brand-ink/35 mt-4 text-center font-heading">
                    Cero spam. Solo correos ocasionales que sí vas a querer leer.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
