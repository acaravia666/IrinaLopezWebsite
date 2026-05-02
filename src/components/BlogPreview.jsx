import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { posts } from '../data/posts';

const categoryStyles = {
  'Legal 101':            'bg-brand-terracotta text-brand-cream',
  'Propiedad Intelectual':'bg-brand-ink text-brand-cream',
  'Negocios':             'bg-brand-gold text-brand-ink',
  'Cultura & Política':   'bg-brand-sand text-brand-ink',
  'Música':               'bg-brand-terracotta/80 text-brand-cream',
  'Comunidad':            'bg-brand-muted text-brand-cream',
  'Voces de la Escena':   'bg-brand-ink/75 text-brand-cream',
};

const featured = posts.slice(0, 3);

function BlogCard({ post, index }) {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="group flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
    >
      <div ref={imageRef} className="aspect-[4/3] bg-brand-sand overflow-hidden relative">
        <motion.img
          style={{ y, scale: 1.25 }}
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover brightness-95"
        />
        <div className={`absolute top-3 left-3 ${categoryStyles[post.category] ?? 'bg-brand-ink text-brand-cream'} px-3 py-1 text-[10px] uppercase tracking-[0.12em] font-semibold font-heading rounded-sm`}>
          {post.category}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <span className="text-[10px] text-brand-ink/35 font-heading uppercase tracking-widest mb-3 block">
          {post.date}
        </span>
        <h3 className="font-display font-bold text-brand-ink text-lg leading-snug mb-3 group-hover:text-brand-terracotta transition-colors duration-300">
          {post.title}
        </h3>
        <p className="text-brand-ink/55 font-body text-sm leading-relaxed mb-auto pb-4">
          {post.excerpt}
        </p>
        <div className="pt-4 border-t border-brand-sand/40">
          <a
            href="#blog"
            aria-label={`Leer artículo: ${post.title}`}
            className="text-[10px] uppercase tracking-[0.2em] font-semibold font-heading text-brand-ink hover:text-brand-terracotta transition-colors inline-flex items-center gap-2"
          >
            Leer artículo
            <span className="text-sm leading-none group-hover:translate-x-1 transition-transform inline-block" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function BlogPreview() {
  return (
    <section id="blog" className="py-24 md:py-32 bg-brand-cream border-t border-brand-sand/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-terracotta text-[10px] uppercase tracking-[0.35em] font-semibold font-heading mb-4 block"
          >
            Reflexiones & Recursos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-brand-ink leading-tight tracking-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Del{' '}
            <span className="font-script text-brand-gold" style={{ fontSize: '1.2em', lineHeight: 0.9 }}>
              Blog
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-ink/70 font-body text-lg leading-relaxed"
          >
            Reflexiones, tips legales y un poco de inspiración para creativos y emprendedores.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <span
            className="btn-secondary !border-brand-ink/20 !text-brand-ink/30 cursor-not-allowed inline-block"
            aria-disabled="true"
          >
            Visitar el Blog Completo
          </span>
        </div>

      </div>
    </section>
  );
}
