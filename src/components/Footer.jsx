import logoLight from '../assets/logos/logo-light-red.png';

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 bg-brand-ink border-t border-brand-cream/8 text-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          <div className="md:col-span-1">
            <img src={logoLight} alt="Irina López – Abogada & Licenciada en Música" className="h-16 w-auto mb-6" />
            <p className="text-brand-cream/45 text-sm font-body leading-relaxed max-w-xs">
              Abogada especializada en propiedad intelectual y creadora de contenido.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-semibold font-heading text-brand-gold mb-6 block">Navegación</h4>
            <ul className="space-y-4">
              <li><a href="#sobre-mi" className="text-brand-cream/55 hover:text-brand-cream transition-colors text-sm font-body tracking-wide">Sobre Mí</a></li>
              <li><a href="#servicios" className="text-brand-cream/55 hover:text-brand-cream transition-colors text-sm font-body tracking-wide">Servicios</a></li>
              <li><a href="#tienda" className="text-brand-cream/55 hover:text-brand-cream transition-colors text-sm font-body tracking-wide">Tienda / Recursos</a></li>
              <li><a href="#blog" className="text-brand-cream/55 hover:text-brand-cream transition-colors text-sm font-body tracking-wide">El Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-semibold font-heading text-brand-gold mb-6 block">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-brand-cream/55 hover:text-brand-cream transition-colors text-sm font-body tracking-wide">Aviso Legal</a></li>
              <li><a href="#" className="text-brand-cream/55 hover:text-brand-cream transition-colors text-sm font-body tracking-wide">Política de Privacidad</a></li>
              <li><a href="#" className="text-brand-cream/55 hover:text-brand-cream transition-colors text-sm font-body tracking-wide">Términos y Condiciones</a></li>
              <li><a href="#" className="text-brand-cream/55 hover:text-brand-cream transition-colors text-sm font-body tracking-wide">Política de Cookies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-semibold font-heading text-brand-gold mb-6 block">Conecta</h4>
            <div className="flex gap-4">
              <a href="#" aria-label="Seguir a Irina en Instagram" className="w-10 h-10 border border-brand-cream/15 flex items-center justify-center hover:bg-brand-cream hover:text-brand-ink transition-all duration-300 rounded-full text-brand-cream/55">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="Conectar con Irina en LinkedIn" className="w-10 h-10 border border-brand-cream/15 flex items-center justify-center hover:bg-brand-cream hover:text-brand-ink transition-all duration-300 rounded-full text-brand-cream/55">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" aria-label="Ver a Irina en TikTok" className="w-10 h-10 border border-brand-cream/15 flex items-center justify-center hover:bg-brand-cream hover:text-brand-ink transition-all duration-300 rounded-full text-brand-cream/55">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-brand-cream/8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-cream/35 text-[10px] uppercase tracking-widest text-center md:text-left font-heading">
            &copy; {new Date().getFullYear()} Irina Lopez. Todos los derechos reservados.
          </p>
          <p className="text-brand-cream/35 text-[10px] uppercase tracking-widest text-center md:text-right font-heading">
            Diseño web con <span className="text-brand-terracotta">&hearts;</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
