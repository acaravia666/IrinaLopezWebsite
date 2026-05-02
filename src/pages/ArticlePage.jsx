import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug, posts } from '../data/posts';
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

const markdownComponents = {
  p:      ({ children }) => <p className="text-brand-ink/75 font-body text-lg leading-relaxed mb-6">{children}</p>,
  h2:     ({ children }) => <h2 className="font-display font-black text-brand-ink leading-tight tracking-tight mt-12 mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>{children}</h2>,
  h3:     ({ children }) => <h3 className="font-display font-bold text-brand-ink text-xl mt-10 mb-3">{children}</h3>,
  strong: ({ children }) => <strong className="font-semibold text-brand-ink">{children}</strong>,
  em:     ({ children }) => <em className="italic text-brand-ink/80">{children}</em>,
  ul:     ({ children }) => <ul className="list-disc list-outside pl-6 space-y-3 mb-6">{children}</ul>,
  ol:     ({ children }) => <ol className="list-decimal list-outside pl-6 space-y-3 mb-6">{children}</ol>,
  li:     ({ children }) => <li className="text-brand-ink/75 font-body text-lg leading-relaxed">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-brand-gold pl-6 my-8 italic text-brand-ink/70 font-body text-lg">
      {children}
    </blockquote>
  ),
};

function HeroImage({ image, title }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <div ref={ref} className="relative w-full h-[55vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[130%] -top-[15%]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-brand-ink/50" />
    </div>
  );
}

export default function ArticlePage() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) return <Navigate to="/blog" replace />;

  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const prev = posts[currentIndex + 1] ?? null;
  const next = posts[currentIndex - 1] ?? null;

  return (
    <div className="min-h-screen bg-brand-cream text-brand-ink">
      <Navbar />

      <HeroImage image={post.image} title={post.title} />

      {/* Back link */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-2">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold font-heading text-brand-ink/50 hover:text-brand-terracotta transition-colors"
        >
          <span aria-hidden="true">←</span> El Blog
        </Link>
      </div>

      {/* Article header */}
      <header className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className={`${categoryStyles[post.category] ?? 'bg-brand-ink text-brand-cream'} px-3 py-1 text-[10px] uppercase tracking-[0.15em] font-semibold font-heading rounded-sm`}>
            {post.category}
          </span>
          <span className="text-[10px] text-brand-ink/35 font-heading uppercase tracking-widest">
            {post.date}
          </span>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display font-black text-brand-ink leading-tight tracking-tight"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
        >
          {post.title}
        </motion.h1>
        <p className="mt-4 text-brand-ink/55 font-body text-lg leading-relaxed border-t border-brand-sand/40 pt-6">
          {post.excerpt}
        </p>
      </header>

      {/* Article body */}
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
      >
        <ReactMarkdown components={markdownComponents}>{post.content}</ReactMarkdown>
      </motion.article>

      {/* Prev / Next navigation */}
      <div className="border-t border-brand-sand/40 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid sm:grid-cols-2 gap-6">
          {prev && (
            <Link
              to={`/blog/${prev.slug}`}
              className="group flex flex-col gap-1 p-6 rounded-xl border border-brand-sand/40 hover:border-brand-gold/50 hover:shadow-sm transition-all"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold font-heading text-brand-ink/35 mb-1">
                ← Anterior
              </span>
              <span className="font-display font-bold text-brand-ink text-base leading-snug group-hover:text-brand-terracotta transition-colors">
                {prev.title}
              </span>
            </Link>
          )}
          {next && (
            <Link
              to={`/blog/${next.slug}`}
              className="group flex flex-col gap-1 p-6 rounded-xl border border-brand-sand/40 hover:border-brand-gold/50 hover:shadow-sm transition-all sm:text-right sm:ml-auto w-full"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold font-heading text-brand-ink/35 mb-1">
                Siguiente →
              </span>
              <span className="font-display font-bold text-brand-ink text-base leading-snug group-hover:text-brand-terracotta transition-colors">
                {next.title}
              </span>
            </Link>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
