import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxBreak({ image, height = 'h-[60vh]', tint = 'bg-brand-gold/20' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Image travels ±25% — more dramatic window feel
  const y = useTransform(scrollYProgress, [0, 1], ['-25%', '25%']);

  return (
    <div ref={ref} className={`relative w-full ${height} overflow-hidden`} aria-hidden="true">
      {/* Parallax image layer — 150% tall so it has room to travel */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[150%] -top-[25%]">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </motion.div>

      {/* Dark base vignette */}
      <div className="absolute inset-0 bg-brand-ink/40" />
      {/* Brand color tint on top */}
      <div className={`absolute inset-0 ${tint}`} />
    </div>
  );
}
