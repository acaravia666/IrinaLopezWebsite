import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { posts } from '../data/posts';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const categoryStyles = {
  'Legal 101':            'bg-brand-terracotta text-brand-cream',
  'Propiedad Intelectual':'bg-brand-ink text-brand-cream',
  'Negocios':             'bg-brand-gold text-brand-ink',
  'Cultura & Política':   'bg-brand-sand text-brand-ink',
  'Música':               'bg-brand-terracotta/80 text-brand-cream',
  'Comunidad':            'bg-brand-muted text-brand-cream',
  'Voces de la Escena':   'bg-brand-ink/75 text-brand-cream',
};

const allCategories = ['Todos', ...Array.from(new Set(posts.map((p) => p.category)))];

export default function BlogPage() {
  const [active, setActive] = useState('Todos');
  const filtered = active === 'Todos' ? posts : posts.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-brand-cream text-brand-ink">
      <Navbar />

      {/* Page header */}
      <section className="pt-40 pb-20 bg-brand-terracotta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-brand-cream/70 text-[10px] uppercase tracking-[0.4em] font-semibold font-heading mb-6"
          >
            Reflexiones & Recursos
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display font-black text-brand-cream leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
          >
            El{' '}
            <span className="font-script text-brand-gold" style={{ fontSize: '1.1em' }}>
              Blog
            </span>
          </motion.h1>
        </div>
      </section>

      {/* Category filter */}
      <div className="sticky top-[72px] z-30 bg-brand-cream border-b border-brand-sand/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-4 overflow-x-auto scrollbar-hide">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.15em] font-semibold font-heading transition-all duration-200 ${
                  active === cat
                    ? 'bg-brand-ink text-brand-cream'
                    : 'bg-brand-sand/40 text-brand-ink/60 hover:bg-brand-sand hover:text-brand-ink'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              className="group flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <Link to={`/blog/${post.slug}`} className="block aspect-[4/3] bg-brand-sand overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover brightness-95 group-hover:scale-105 transition-transform duration-700"
                />
                <div className={`absolute top-3 left-3 ${categoryStyles[post.category] ?? 'bg-brand-ink text-brand-cream'} px-3 py-1 text-[10px] uppercase tracking-[0.12em] font-semibold font-heading rounded-sm`}>
                  {post.category}
                </div>
              </Link>
              <div className="p-5 flex flex-col flex-grow">
                <span className="text-[10px] text-brand-ink/35 font-heading uppercase tracking-widest mb-3 block">
                  {post.date}
                </span>
                <h2 className="font-display font-bold text-brand-ink text-lg leading-snug mb-3 group-hover:text-brand-terracotta transition-colors duration-300">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-brand-ink/55 font-body text-sm leading-relaxed mb-auto pb-4">
                  {post.excerpt}
                </p>
                <div className="pt-4 border-t border-brand-sand/40">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-[10px] uppercase tracking-[0.2em] font-semibold font-heading text-brand-ink hover:text-brand-terracotta transition-colors inline-flex items-center gap-2"
                  >
                    Leer artículo
                    <span className="text-sm leading-none group-hover:translate-x-1 transition-transform inline-block" aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
