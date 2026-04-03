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
    <section id="lead-magnet" className="py-24 md:py-32 bg-brand-polished-stone/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-calming-white p-8 md:p-16 shadow-2xl relative overflow-hidden">

          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-warm-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-5/12"
            >
              <div className="aspect-[3/4] bg-brand-polished-stone relative shadow-lg -rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                  alt="Portada de la Guía Legal Imprescindible"
                  className="w-full h-full object-cover opacity-90 mix-blend-multiply"
                />
                <div className="absolute inset-0 border border-brand-warm-gold/50 m-4 pointer-events-none" />
              </div>
            </motion.div>

            {/* Content side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-7/12"
            >
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-well-read mb-4 block">Recurso Gratuito</span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl text-brand-oil mb-6 leading-tight">
                El Checklist <br/><span className="italic font-subtitle text-brand-warm-gold">Legal Imprescindible</span>
              </h2>
              <p className="text-brand-oil/70 font-light text-lg mb-8 leading-relaxed max-w-lg">
                Antes de lanzar tu próximo gran proyecto, asegúrate de tener las bases cubiertas. Descarga mi guía paso a paso para proteger tus creaciones sin estrés.
              </p>

              {submitted ? (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-brand-well-read text-lg font-light tracking-wide"
                >
                  ¡Perfecto! Revisa tu correo — la guía está en camino.
                </motion.p>
              ) : (
                <form className="max-w-md" onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="leadmagnet-name" className="sr-only">Tu nombre</label>
                      <input
                        id="leadmagnet-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Tu nombre"
                        className="w-full bg-transparent border-b border-brand-oil/20 py-3 px-2 focus:outline-none focus:border-brand-well-read transition-colors placeholder:text-brand-oil/40 font-light"
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
                        className="w-full bg-transparent border-b border-brand-oil/20 py-3 px-2 focus:outline-none focus:border-brand-well-read transition-colors placeholder:text-brand-oil/40 font-light"
                        required
                      />
                    </div>
                    <button type="submit" className="w-full mt-6 py-4 bg-brand-well-read text-brand-calming-white uppercase tracking-[0.2em] text-xs hover:bg-brand-oil transition-colors shadow-sm">
                      Quiero la Guía Gratis
                    </button>
                  </div>
                  <p className="text-[10px] uppercase tracking-wider text-brand-oil/40 mt-4 text-center">
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
