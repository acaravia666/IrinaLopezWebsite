import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoColor from '../assets/logos/logo-color.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-brand-calming-white/90 backdrop-blur-md border-b border-brand-polished-stone/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" aria-label="Irina Lopez – inicio">
              <img src={logoColor} alt="Irina López – Abogada & Licenciada en Música" className="h-[72px] w-auto" />
            </a>
          </div>
          <div className="hidden lg:flex space-x-8 items-center">
            <a href="#sobre-mi" className="text-brand-oil hover:text-brand-well-read transition-colors text-sm uppercase tracking-[0.2em]">Sobre Mí</a>
            <a href="#servicios" className="text-brand-oil hover:text-brand-well-read transition-colors text-sm uppercase tracking-[0.2em]">Servicios</a>
            <a href="#tienda" className="text-brand-oil hover:text-brand-well-read transition-colors text-sm uppercase tracking-[0.2em]">Tienda</a>
            <a href="#blog" className="text-brand-oil hover:text-brand-well-read transition-colors text-sm uppercase tracking-[0.2em]">Blog</a>
            <a href="#lead-magnet" className="px-6 py-3 bg-brand-warm-gold text-brand-calming-white uppercase tracking-[0.2em] text-xs hover:bg-brand-well-read transition-colors shadow-sm">Recursos</a>
          </div>
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="text-brand-oil hover:text-brand-well-read transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="lg:hidden bg-brand-calming-white shadow-lg absolute w-full border-b border-brand-polished-stone/30"
        >
          <div className="px-4 pt-4 pb-8 space-y-6 flex flex-col items-center">
            <a href="#sobre-mi" onClick={() => setIsOpen(false)} className="text-brand-oil hover:text-brand-well-read uppercase tracking-[0.2em] text-sm">Sobre Mí</a>
            <a href="#servicios" onClick={() => setIsOpen(false)} className="text-brand-oil hover:text-brand-well-read uppercase tracking-[0.2em] text-sm">Servicios</a>
            <a href="#tienda" onClick={() => setIsOpen(false)} className="text-brand-oil hover:text-brand-well-read uppercase tracking-[0.2em] text-sm">Tienda</a>
            <a href="#blog" onClick={() => setIsOpen(false)} className="text-brand-oil hover:text-brand-well-read uppercase tracking-[0.2em] text-sm">Blog</a>
            <a href="#lead-magnet" onClick={() => setIsOpen(false)} className="text-brand-warm-gold hover:text-brand-well-read uppercase tracking-[0.2em] text-sm">Recursos</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
