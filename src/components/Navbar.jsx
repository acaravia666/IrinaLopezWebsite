import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoColor from '../assets/logos/logo-color.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-brand-cream/95 backdrop-blur-md border-b border-brand-sand/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <a href="/" aria-label="Irina López – inicio">
              <img src={logoColor} alt="Irina López – Abogada & Licenciada en Música" className="h-[72px] w-auto" />
            </a>
          </div>
          <div className="hidden lg:flex space-x-8 items-center">
            <a href="/#sobre-mi" className="text-brand-ink hover:text-brand-terracotta transition-colors duration-300 text-sm font-heading tracking-wide">Sobre Mí</a>
            <a href="/#servicios" className="text-brand-ink hover:text-brand-terracotta transition-colors duration-300 text-sm font-heading tracking-wide">Servicios</a>
            <a href="/#tienda" className="text-brand-ink hover:text-brand-terracotta transition-colors duration-300 text-sm font-heading tracking-wide">Tienda</a>
            <a href="/#blog" className="text-brand-ink hover:text-brand-terracotta transition-colors duration-300 text-sm font-heading tracking-wide">Blog</a>
            <a href="/#lead-magnet" className="btn-primary !py-2.5 !px-6 !text-xs">Recursos →</a>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="text-brand-ink hover:text-brand-terracotta transition-colors"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="lg:hidden bg-brand-cream shadow-lg border-b border-brand-sand/40"
        >
          <div className="px-4 pt-4 pb-8 space-y-6 flex flex-col items-center">
            <a href="/#sobre-mi" onClick={() => setIsOpen(false)} className="text-brand-ink hover:text-brand-terracotta font-heading tracking-wide text-lg transition-colors">Sobre Mí</a>
            <a href="/#servicios" onClick={() => setIsOpen(false)} className="text-brand-ink hover:text-brand-terracotta font-heading tracking-wide text-lg transition-colors">Servicios</a>
            <a href="/#tienda" onClick={() => setIsOpen(false)} className="text-brand-ink hover:text-brand-terracotta font-heading tracking-wide text-lg transition-colors">Tienda</a>
            <a href="/#blog" onClick={() => setIsOpen(false)} className="text-brand-ink hover:text-brand-terracotta font-heading tracking-wide text-lg transition-colors">Blog</a>
            <a href="/#lead-magnet" onClick={() => setIsOpen(false)} className="btn-primary">Recursos →</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
