import { motion } from 'framer-motion';

const posts = [
  {
    id: 1,
    title: "Por qué necesitas registrar tu marca antes de lanzar",
    category: "Legal 101",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2670&auto=format&fit=crop",
    date: "12 Oct, 2026"
  },
  {
    id: 2,
    title: "El arte de negociar como creativo freelance",
    category: "Negocios",
    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=2574&auto=format&fit=crop",
    date: "28 Sep, 2026"
  },
  {
    id: 3,
    title: "Inspiración vs Plagio: Dónde está la línea legal",
    category: "Propiedad Intelectual",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2671&auto=format&fit=crop",
    date: "15 Sep, 2026"
  }
];

const categoryColors = {
  "Legal 101": "bg-brand-well-read",
  "Negocios": "bg-brand-warm-gold",
  "Propiedad Intelectual": "bg-brand-oil",
};

export default function BlogPreview() {
  return (
    <section id="blog" className="py-24 md:py-32 bg-brand-calming-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.4em] text-brand-well-read font-semibold mb-4"
          >
            Reflexiones & Recursos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl text-brand-oil mb-6"
          >
            Del <span className="italic font-subtitle text-brand-warm-gold">Blog</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-oil/80 text-lg font-light"
          >
            Reflexiones, tips legales y un poco de inspiración para creativos y emprendedores.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group flex flex-col h-full"
            >
              <div className="aspect-[4/3] bg-brand-polished-stone overflow-hidden mb-6 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                {/* Category pill overlaid on image */}
                <div className={`absolute top-4 left-4 ${categoryColors[post.category] ?? 'bg-brand-oil'} px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-brand-calming-white font-semibold`}>
                  {post.category}
                </div>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] text-brand-oil/40 font-normal uppercase tracking-widest">{post.date}</span>
              </div>

              <h3 className="text-2xl text-brand-oil font-header leading-snug mb-4 group-hover:text-brand-well-read transition-colors">
                {post.title}
              </h3>

              <div className="mt-auto pt-4 border-t border-brand-oil/10">
                <a
                  href="#blog"
                  aria-label={`Leer artículo: ${post.title}`}
                  className="text-xs uppercase tracking-[0.2em] text-brand-oil font-semibold inline-flex items-center gap-2 hover:text-brand-well-read transition-colors"
                >
                  Leer artículo
                  <span className="text-lg leading-none transition-transform group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <span className="px-8 py-4 border border-brand-oil/30 text-brand-oil/30 uppercase tracking-[0.2em] text-xs cursor-not-allowed inline-block" aria-disabled="true">
            Visitar el Blog Completo
          </span>
        </div>

      </div>
    </section>
  );
}
