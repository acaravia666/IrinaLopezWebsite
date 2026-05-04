import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Newsletter() {
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
      const res = await fetch('/api/fondos', {
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
    <section
      id="newsletter"
      className="py-24 md:py-32 bg-brand-ink text-brand-cream relative overflow-hidden"
    >
      {/* Decorative gold orb */}
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-brand-gold/10 rounded-full blur-[80px] translate-x-1/3 translate-y-1/3 pointer-events-none" aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-brand-gold text-[10px] uppercase tracking-[0.35em] font-semibold font-heading mb-8 block">
            Boletín mensual
          </p>

          <h2
            className="font-display font-black text-brand-cream leading-none tracking-tight mb-2"
            style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}
          >
            Fondos
          </h2>
          <span
            className="font-script text-brand-sand block mb-8"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', lineHeight: 1.05 }}
          >
            Concursables.
          </span>

          <p className="text-brand-cream/55 font-body text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Cada mes te llega un boletín con las convocatorias de fondos nacionales e internacionales vigentes para artistas y proyectos culturales. Sin filtros, directo a tu bandeja.
          </p>

          {submitted ? (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-gold text-lg font-body tracking-wide"
            >
              ¡Listo! Pronto recibirás las próximas convocatorias.
            </motion.p>
          ) : (
            <form
              className="max-w-xl mx-auto flex flex-col gap-4 justify-center"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="newsletter-name" className="sr-only">Tu nombre</label>
                  <input
                    id="newsletter-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    className="w-full bg-brand-cream/8 border border-brand-cream/20 py-4 px-6 rounded-full focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-cream/40 font-body text-brand-cream text-center sm:text-left"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="newsletter-email" className="sr-only">Tu dirección de email</label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu email"
                    className="w-full bg-brand-cream/8 border border-brand-cream/20 py-4 px-6 rounded-full focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-cream/40 font-body text-brand-cream text-center sm:text-left"
                    required
                  />
                </div>
              </div>
              <button type="submit" disabled={loading} className="btn-primary shrink-0 mx-auto disabled:opacity-60">
                {loading ? 'Enviando…' : 'Quiero recibir las convocatorias →'}
              </button>
              {error && <p className="text-brand-gold/80 text-sm mt-2">{error}</p>}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
