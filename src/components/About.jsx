import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const blockY = useTransform(scrollYProgress, [0, 1], ['25%', '-25%']);
  const textY  = useTransform(scrollYProgress, [0, 1], ['4%', '-4%']);

  return (
    <section id="sobre-mi" ref={containerRef} className="py-32 md:py-48 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">

          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              style={{ y: blockY }}
              className="absolute top-10 -right-6 bottom-4 -left-6 bg-brand-gold/10 rounded-xl -z-0 max-w-sm mx-auto w-full h-full lg:max-w-none"
            />
            <motion.div
              initial={{ opacity: 0, clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)' }}
              whileInView={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="aspect-[4/5] relative z-10 w-full max-w-sm mx-auto lg:max-w-none overflow-hidden shadow-2xl rounded-xl"
            >
              <motion.img
                style={{ y: imageY, scale: 1.25 }}
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop"
                alt="Irina Lopez"
                className="w-full h-full object-cover grayscale-[8%] brightness-95"
              />
            </motion.div>
          </div>

          {/* Text Side — subtle opposite parallax */}
          <motion.div style={{ y: textY }} className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-[10px] uppercase tracking-[0.3em] font-semibold bg-brand-gold text-brand-ink px-4 py-2 rounded-full">
                  Abogada
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] font-semibold border border-brand-terracotta text-brand-terracotta px-4 py-2 rounded-full">
                  Licenciada en Música
                </span>
              </div>

              <h2
                className="font-display font-black text-brand-ink leading-tight tracking-tight mb-2"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Más que
              </h2>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="font-script text-brand-terracotta block mb-10"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.05 }}
              >
                solo leyes.
              </motion.span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-6 text-brand-ink/70 font-body text-lg leading-relaxed"
            >
              <p>
                Soy abogada de profesión en Ecuador, pero mi corazón late al ritmo del arte y la música. Ayudo a creativos a proteger sus ideas, asegurarme de que sus marcas estén registradas ante el SENADI y que sus negocios sean sólidos, mientras comparto mi propia faceta artística con el mundo.
              </p>
              <p>
                Creo en la dualidad. No tienes que elegir entre ser estructurado y profesional o ser libre y creativo. Aquí, los contratos se diseñan con la misma pasión con la que se compone una melodía; con claridad, armonía y protección total.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
              className="mt-12"
            >
              <svg className="h-14 text-brand-ink opacity-40" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M10 40C30 30 50 10 70 20C90 30 60 50 80 40C100 30 140 10 160 20C180 30 170 40 190 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
