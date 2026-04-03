import { motion } from 'framer-motion';
import { useState } from 'react';
import fondoRojo from '../assets/fondos/fondo-rojo.png';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section
      id="newsletter"
      className="py-24 md:py-32 text-brand-calming-white relative overflow-hidden"
      style={{ backgroundImage: `url(${fondoRojo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Overlay oscuro para contraste de texto */}
      <div className="absolute inset-0 bg-brand-oil/50 pointer-events-none" aria-hidden="true" />
      {/* Detalles decorativos */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-brand-warm-gold/15 rounded-full blur-[80px] translate-x-1/3 translate-y-1/3" />
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-[0.06]">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-brand-warm-gold font-semibold mb-8">Newsletter semanal</p>

          <svg className="w-8 h-8 mx-auto mb-6 text-brand-warm-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
          </svg>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-6 font-header">
            Charlas <span className="italic font-subtitle text-brand-polished-stone">de domingo.</span>
          </h2>
          <p className="text-brand-calming-white/70 font-light text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Sin jerga legal aburrida. Solo reflexiones, inspiración y uno que otro tip útil directo a tu bandeja de entrada. Únete a mi newsletter semanal.
          </p>

          {submitted ? (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-warm-gold text-lg font-light tracking-wide"
            >
              ¡Gracias por suscribirte! Nos vemos el próximo domingo.
            </motion.p>
          ) : (
            <form
              className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 justify-center"
              onSubmit={handleSubmit}
            >
              <label htmlFor="newsletter-email" className="sr-only">Tu dirección de email</label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu dirección de email"
                className="flex-grow bg-transparent border-b border-brand-calming-white/30 py-4 px-4 focus:outline-none focus:border-brand-warm-gold transition-colors placeholder:text-brand-calming-white/30 font-light text-center sm:text-left"
                required
              />
              <button type="submit" className="py-4 px-8 bg-brand-warm-gold text-brand-calming-white uppercase tracking-[0.2em] text-xs hover:bg-brand-well-read transition-colors duration-300 shrink-0">
                Inscribirme
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
