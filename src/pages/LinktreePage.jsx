import { useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  {
    label: 'Guía práctica para formalizar tu carrera artística en Ecuador',
    sublabel: 'Gratis',
    img: '/guia-recurso.webp',
    href: 'https://irinalopez.com/#lead-magnet',
    external: false,
  },
  {
    label: 'Escríbeme a WhatsApp',
    sublabel: null,
    img: '/irina-about.webp',
    href: 'https://wa.me/message/DCLJMU6TMOCRN1',
    external: true,
  },
  {
    label: 'Asesorías 1:1',
    sublabel: '30, 45 y 60 minutos',
    img: '/parallax-break-uno.webp',
    href: 'https://irinalopez.com/#servicios',
    external: false,
  },
  {
    label: 'Descubre mis servicios',
    sublabel: null,
    img: '/ParallaxBreak2.webp',
    href: 'https://irinalopez.com',
    external: false,
  },
];

function StarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="opacity-30">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default function LinktreePage() {
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
    <div
      className="min-h-screen w-full font-body flex flex-col items-center px-4 py-12 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #2a1206 0%, #6b2810 40%, #c8703a 100%)' }}
    >
      {/* Orbes atmosféricos */}
      <div className="absolute top-[-80px] right-[-60px] w-96 h-96 rounded-full pointer-events-none" style={{ background: '#e8a832', filter: 'blur(80px)', opacity: 0.55 }} />
      <div className="absolute top-[-20px] left-[-60px] w-72 h-72 rounded-full pointer-events-none" style={{ background: '#c8703a', filter: 'blur(70px)', opacity: 0.6 }} />
      <div className="absolute top-[30%] right-[-80px] w-80 h-80 rounded-full pointer-events-none" style={{ background: '#e8a832', filter: 'blur(90px)', opacity: 0.4 }} />
      <div className="absolute top-[50%] left-[-60px] w-80 h-80 rounded-full pointer-events-none" style={{ background: '#c8703a', filter: 'blur(80px)', opacity: 0.5 }} />
      <div className="absolute bottom-[15%] right-[-40px] w-72 h-72 rounded-full pointer-events-none" style={{ background: '#e8a832', filter: 'blur(75px)', opacity: 0.45 }} />
      <div className="absolute bottom-[-60px] left-[5%] w-96 h-96 rounded-full pointer-events-none" style={{ background: '#c8703a', filter: 'blur(90px)', opacity: 0.5 }} />

      <div className="w-full max-w-md relative z-10">

        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-8"
        >
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-4 ring-white/30 shadow-xl relative">
            <img
              src="/3.webp"
              alt="Irina López"
              className="w-full h-full object-cover"
              style={{ objectPosition: '68% 10%', transform: 'scale(1.6)', transformOrigin: '68% 10%' }}
            />
          </div>
          <h1 className="font-display font-black text-white text-2xl tracking-tight">Irina López</h1>
          <p className="font-body text-white/75 text-sm text-center mt-1 max-w-xs leading-relaxed">
            Asesoría estratégica para artistas y proyectos culturales.
          </p>

          {/* Social icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.instagram.com/irinalopez?igsh=MW92eGg3eXBhamc2Mg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/35 flex items-center justify-center text-white transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@ilopezmacias?_r=1&_t=ZS-962VTl6v9Ue"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/35 flex items-center justify-center text-white transition-colors"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z"/>
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Links */}
        <div className="flex flex-col gap-3 mb-10">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : '_self'}
              rel={link.external ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="flex items-center gap-4 bg-white/15 hover:bg-white/25 border border-white/25 rounded-2xl px-4 py-3.5 transition-all duration-200 group"
            >
              <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                <img
                  src={link.img}
                  alt={link.label}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-heading font-semibold text-white text-sm leading-snug">{link.label}</p>
                {link.sublabel && (
                  <p className="text-white/65 text-xs mt-0.5 font-body">{link.sublabel}</p>
                )}
              </div>
              <svg className="w-4 h-4 text-white/50 group-hover:text-white/80 transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </motion.a>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-brand-ink/80 backdrop-blur-sm rounded-2xl p-6"
        >
          <h2 className="font-display font-black text-brand-cream text-xl mb-2">
            Fondos{' '}
            <span className="font-script text-brand-gold" style={{ fontSize: '1.15em', lineHeight: 0.9 }}>Concursables</span>
          </h2>
          <p className="text-brand-cream/65 text-sm font-body mb-5 leading-relaxed">
            Suscríbete y recibe cada mes un boletín con las convocatorias de fondos nacionales e internacionales vigentes para artistas y proyectos culturales.
          </p>

          {submitted ? (
            <p className="text-brand-gold font-body text-sm text-center py-2">
              ¡Gracias por suscribirte! Nos vemos el próximo domingo.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
                required
                className="w-full bg-white/10 border border-white/20 text-brand-cream placeholder:text-brand-cream/35 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-brand-gold transition-colors"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu email"
                required
                className="w-full bg-white/10 border border-white/20 text-brand-cream placeholder:text-brand-cream/35 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-brand-gold transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-gold hover:bg-brand-terracotta text-white font-heading font-semibold text-sm py-3 rounded-xl transition-colors duration-200 disabled:opacity-60"
              >
                {loading ? 'Enviando…' : 'Quiero recibir las convocatorias →'}
              </button>
              {error && <p className="text-brand-gold/80 text-xs text-center">{error}</p>}
            </form>
          )}
        </motion.div>

        {/* Footer */}
        <p className="text-white/40 text-xs text-center mt-8 font-body">
          © {new Date().getFullYear()} Irina López · <a href="https://irinalopez.com" className="underline hover:text-white/60 transition-colors">irinalopez.com</a>
        </p>

      </div>
    </div>

  );
}
