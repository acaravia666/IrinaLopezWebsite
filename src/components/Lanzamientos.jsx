import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Lanzamientos() {
  const [lightbox, setLightbox] = useState(false);

  return (
    <section id="lanzamientos" className="py-24 md:py-32 bg-brand-sand-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-xl mb-12">
          <p className="text-brand-terracotta text-[10px] uppercase tracking-[0.35em] font-semibold font-heading mb-4 block">Próximamente</p>
          <h2
            className="font-display font-black text-brand-ink leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Lanza
            <span className="font-script text-brand-gold" style={{ fontSize: '1.2em', lineHeight: 0.9 }}>
              mientos
            </span>
          </h2>
        </div>

        {/* Social follow prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl px-8 py-7 mb-10 overflow-hidden relative"
          style={{ background: 'linear-gradient(135deg, #c8703a 0%, #b8972a 60%, #e8a040 100%)' }}
        >
          {/* Decorative orb */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <p className="font-body text-white text-base leading-relaxed text-center sm:text-left relative z-10 drop-shadow-sm">
            ¿No quieres perderte el próximo lanzamiento?{' '}
            <span className="font-semibold">Sígueme en Instagram y TikTok</span>{' '}
            — ahí anuncio todo primero.
          </p>
          <div className="flex gap-3 flex-shrink-0 relative z-10">
            <a
              href="https://www.instagram.com/irinalopez?igsh=MW92eGg3eXBhamc2Mg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-brand-terracotta px-5 py-2.5 rounded-full text-sm font-semibold font-heading hover:bg-brand-cream transition-colors duration-200 shadow-md"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@ilopezmacias?_r=1&_t=ZS-962VTl6v9Ue"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-brand-terracotta px-5 py-2.5 rounded-full text-sm font-semibold font-heading hover:bg-brand-cream transition-colors duration-200 shadow-md"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z"/>
              </svg>
              TikTok
            </a>
          </div>
        </motion.div>

        {/* Masterclass card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col lg:flex-row"
        >
          {/* Poster */}
          <div className="w-full lg:w-2/5 flex-shrink-0 max-h-[520px] lg:max-h-none overflow-hidden">
            <img
              src="/masterclass-1.webp"
              alt="Master Class — De la Creación a la Formalización"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between p-8 md:p-12">

            <div>
              <span className="text-[9px] uppercase tracking-[0.35em] font-semibold font-heading bg-brand-gold/15 text-brand-ink px-3 py-1.5 rounded-full inline-block mb-6">
                Master Class
              </span>

              <h3
                className="font-display font-black text-brand-ink leading-tight mb-3"
                style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}
              >
                De la Creación a la Formalización
              </h3>
              <p className="font-body text-brand-terracotta font-semibold text-base md:text-lg mb-8 leading-snug">
                Cómo estructurar tu proyecto musical y acceder a fondos
              </p>

              {/* Details */}
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <span className="font-body text-brand-ink/70 text-sm">
                    Sábado 9 de Mayo · 11h00 – 13h00
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span className="font-body text-brand-ink/70 text-sm">
                    Universidad de las Artes (UARTES), Guayaquil
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-brand-terracotta flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 12V22H4V12"/><path d="M22 7H2v5h20V7z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
                  </svg>
                  <span className="font-body text-brand-terracotta font-semibold text-sm">
                    Acceso gratuito
                  </span>
                </div>
              </div>
            </div>

            {/* Organizers */}
            <div>
              <p className="text-[9px] uppercase tracking-[0.35em] font-semibold font-heading text-brand-ink/35 mb-4">
                Organizado por
              </p>
              <button onClick={() => setLightbox(true)} className="focus:outline-none group">
                <img
                  src="/masterclass-2.webp"
                  alt="Music Office EC · PDC Music · Universidad de las Artes · IFAIC Ecuador"
                  className="h-20 w-auto object-contain object-left rounded-lg group-hover:opacity-80 transition-opacity duration-200 cursor-zoom-in"
                />
              </button>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-brand-ink/80 backdrop-blur-sm p-6"
            onClick={() => setLightbox(false)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              src="/masterclass-2.webp"
              alt="Organizadores"
              className="max-h-[85vh] max-w-full w-auto rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setLightbox(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Cerrar"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
