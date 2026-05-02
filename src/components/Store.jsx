import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const products = [
  {
    id: 1,
    title: 'Librito Legal para Creativos',
    type: 'E-Book',
    price: '$29',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2574&auto=format&fit=crop',
    description: 'Todo lo que necesitas saber antes de lanzar tu primer proyecto creativo al mundo, explicado de forma simple.',
  },
  {
    id: 2,
    title: 'Plantilla de Contrato Freelance',
    type: 'Plantilla',
    price: '$49',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2574&auto=format&fit=crop',
    description: 'Un contrato listo para usar, diseñado estéticamente y blindado legalmente para proteger tu trabajo.',
  },
];

function ProductCard({ product, index }) {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="group cursor-pointer bg-brand-cream rounded-xl shadow-md overflow-hidden flex flex-col"
    >
      <div ref={imageRef} className="aspect-[4/3] bg-brand-sand overflow-hidden relative">
        <motion.img
          style={{ y, scale: 1.25 }}
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover brightness-95"
        />
        <div className="absolute top-4 left-4 bg-brand-terracotta px-3 py-1 text-[10px] uppercase tracking-[0.15em] font-semibold font-heading text-brand-cream rounded-sm">
          {product.type}
        </div>
        <div className="absolute bottom-4 right-4 bg-brand-gold px-4 py-2 text-brand-ink font-display font-bold text-lg leading-none rounded-full">
          {product.price}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-display font-bold text-brand-ink text-xl mb-3 leading-snug">
          {product.title}
        </h3>
        <p className="text-brand-ink/65 font-body text-sm leading-relaxed flex-grow mb-6">
          {product.description}
        </p>
        <button
          className="btn-primary w-full"
          aria-label={`Comprar ${product.title}`}
        >
          Comprar Ahora
        </button>
      </div>
    </motion.div>
  );
}

export default function Store() {
  return (
    <section id="tienda" className="py-24 md:py-32 bg-brand-sand-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <p className="text-brand-terracotta text-[10px] uppercase tracking-[0.35em] font-semibold font-heading mb-4 block">Tienda</p>
            <h2
              className="font-display font-black text-brand-ink leading-tight tracking-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Recursos &{' '}
              <span className="font-script text-brand-gold" style={{ fontSize: '1.2em', lineHeight: 0.9 }}>
                Herramientas
              </span>
            </h2>
            <p className="text-brand-ink/70 font-body text-lg leading-relaxed">
              Descargas vitales para proteger tu negocio sin tener que contratar a un equipo de abogados completo.
            </p>
          </div>
          <span
            className="hidden md:inline-flex btn-secondary !border-brand-ink/20 !text-brand-ink/30 cursor-not-allowed"
            aria-disabled="true"
          >
            Ver todo
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="mt-10 md:hidden flex justify-center">
          <span
            className="btn-secondary !border-brand-ink/20 !text-brand-ink/30 cursor-not-allowed"
            aria-disabled="true"
          >
            Ver todo
          </span>
        </div>

      </div>
    </section>
  );
}
