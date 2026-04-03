import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxBreak({ image, height = "h-[60vh]", overlay = "bg-brand-oil/30" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // The image is taller than the container (140%) and moves from -20% to 20%
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={ref} className={`relative w-full ${height} overflow-hidden`}>
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[140%] -top-[20%] w-full">
        <img src={image} className="w-full h-full object-cover grayscale-[10%]" alt="Parallax Background" />
        <div className={`absolute inset-0 mix-blend-multiply ${overlay}`} />
      </motion.div>
    </div>
  );
}
