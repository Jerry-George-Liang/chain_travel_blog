import { motion } from 'framer-motion';

export default function Card({ 
  children, 
  className = '', 
  hover = true,
  gradientBorder = false,
  tilt = true,           
  onClick 
}) {
  return (
    <motion.div
      whileHover={hover ? { 
        y: -8, 
        rotateX: 2,
        rotateY: 2,
        scale: 1.02,
        boxShadow: '0 20px 40px rgba(0,0,0,0.3), 0 0 30px rgba(124,77,255,0.15), 0 0 60px rgba(0,229,255,0.08)',
        borderColor: 'rgba(124, 77, 255, 0.35)'
      } : undefined}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className={`
        relative rounded-2xl p-6 overflow-hidden
        bg-white/5 backdrop-blur-md 
        border border-white/10
        ${gradientBorder ? 'gradient-border' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
