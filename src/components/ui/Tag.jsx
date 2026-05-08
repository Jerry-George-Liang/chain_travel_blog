import { motion } from 'framer-motion';

const colorVariants = {
  default: 'bg-neon-cyan/10 border-neon-cyan/20 text-neon-cyan',
  secondary: 'bg-white/10 border-white/20 text-light',
  accent: 'bg-neon-purple/10 border-neon-purple/20 text-neon-purple',
  success: 'bg-neon-mint/10 border-neon-mint/20 text-neon-mint',
  warning: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
  danger: 'bg-red-500/10 border-red-500/20 text-red-400'
};

export default function Tag({ 
  children, 
  variant = 'default', 
  className = '' 
}) {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={`
        inline-flex items-center px-3 py-1
        rounded-full text-xs font-medium
        border ${colorVariants[variant]}
        transition-all duration-150
        ${className}
      `}
    >
      {children}
    </motion.span>
  );
}
