import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-ink flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-32 px-4">
        <div className="text-center max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-brand-terracotta text-[10px] uppercase tracking-[0.4em] font-semibold font-heading mb-6">
              Error 404
            </p>
            <h1
              className="font-display font-black text-brand-ink leading-none tracking-tight mb-4"
              style={{ fontSize: 'clamp(5rem, 18vw, 10rem)' }}
            >
              404
            </h1>
            <span
              className="font-script text-brand-gold block mb-8"
              style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', lineHeight: 1.1 }}
            >
              página no encontrada.
            </span>
            <p className="text-brand-ink/60 font-body text-lg leading-relaxed mb-10">
              Esta página no existe o fue movida. Vuelve al inicio y sigue explorando.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="btn-primary">
                Volver al inicio →
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-brand-ink text-brand-ink font-heading font-semibold text-sm uppercase tracking-widest transition-colors duration-300 hover:bg-brand-ink hover:text-brand-cream"
              >
                Ver el Blog
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
