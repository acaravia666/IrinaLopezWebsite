import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    title: "Librito Legal para Creativos",
    type: "E-Book",
    price: "$29",
    image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=2574&auto=format&fit=crop",
    description: "Todo lo que necesitas saber antes de lanzar tu primer proyecto creativo al mundo, explicado de forma simple."
  },
  {
    id: 2,
    title: "Plantilla de Contrato Freelance",
    type: "Plantilla",
    price: "$49",
    image: "https://images.unsplash.com/photo-1621509375836-cd209ec16c68?q=80&w=2574&auto=format&fit=crop",
    description: "Un contrato listo para usar, diseñado estéticamente y blindado legalmente para proteger tu trabajo."
  }
];

export default function Store() {
  return (
    <section id="tienda" className="py-24 md:py-32 bg-brand-calming-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.4em] text-brand-well-read font-semibold mb-4">Tienda</p>
            <h2 className="text-4xl sm:text-5xl text-brand-oil mb-4">
              Recursos & <span className="italic font-subtitle text-brand-well-read">Herramientas</span>
            </h2>
            <p className="text-brand-oil/70 font-light text-lg">
              Descargas vitales para proteger tu negocio sin tener que contratar a un equipo de abogados completo.
            </p>
          </div>
          <span className="hidden md:inline-flex px-8 py-3 border border-brand-oil/30 text-brand-oil/30 uppercase tracking-[0.2em] text-xs cursor-not-allowed" aria-disabled="true">
            Ver todo
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-brand-polished-stone overflow-hidden relative mb-6">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover mix-blend-multiply opacity-85 group-hover:scale-105 transition-transform duration-700"
                />
                {/* Type badge — Well Read red */}
                <div className="absolute top-4 left-4 bg-brand-well-read px-3 py-1 text-[10px] uppercase tracking-widest text-brand-calming-white font-semibold">
                  {product.type}
                </div>
                {/* Price badge — Warm Gold */}
                <div className="absolute bottom-4 right-4 bg-brand-warm-gold px-4 py-2 text-brand-calming-white font-header font-semibold text-lg leading-none">
                  {product.price}
                </div>
              </div>

              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl text-brand-oil font-header">{product.title}</h3>
              </div>
              <p className="text-brand-oil/70 font-light mb-6">
                {product.description}
              </p>

              <button
                className="w-full py-4 bg-brand-oil text-brand-calming-white uppercase tracking-[0.2em] text-xs hover:bg-brand-well-read transition-colors duration-300"
                aria-label={`Comprar ${product.title}`}
              >
                Comprar Ahora
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 md:hidden flex justify-center">
          <span className="px-8 py-3 border border-brand-oil/30 text-brand-oil/30 uppercase tracking-[0.2em] text-xs cursor-not-allowed" aria-disabled="true">
            Ver todo
          </span>
        </div>

      </div>
    </section>
  );
}
