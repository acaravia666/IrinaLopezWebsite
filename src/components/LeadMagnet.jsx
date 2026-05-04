import { motion } from 'framer-motion';
import { useState } from 'react';

export default function LeadMagnet() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      setName('');
      setEmail('');
    } catch {
      setError('Hubo un problema. Por favor intenta de nuevo.');
    } finally {
      setLoading(false);
    }
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
              <div
                className="-rotate-2 hover:rotate-0 transition-transform duration-500 relative"
                style={{ filter: 'drop-shadow(0 20px 40px rgba(40,30,18,0.22))' }}
              >
                <img
                  src="/guia-recurso.webp"
                  alt="Portada de la Guía práctica para formalizar tu carrera artística en Ecuador"
                  className="w-full h-auto rounded-xl"
                />
                <div className="absolute inset-0 border border-brand-gold/30 rounded-xl pointer-events-none" />
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
                Formaliza tu{' '}
                <span className="font-script text-brand-gold block" style={{ fontSize: '1.2em', lineHeight: 0.95 }}>
                  carrera artística
                </span>
              </h2>
              <p className="text-brand-ink/70 font-body text-lg mb-8 max-w-lg leading-relaxed">
                Una guía práctica y gratuita para establecer tu carrera artística en Ecuador con bases legales sólidas. Deja tus datos y recíbela al instante.
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
                    <button type="submit" disabled={loading} className="btn-primary w-full mt-4 disabled:opacity-60">
                      {loading ? 'Enviando…' : 'Enviar y Descargar Gratis →'}
                    </button>
                  </div>
                  {error && <p className="text-brand-terracotta text-sm mt-3 text-center">{error}</p>}
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
