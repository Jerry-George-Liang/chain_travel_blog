import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-gradient-to-r from-neon-violet to-neon-blue text-white hover:shadow-glow-purple',
  secondary: 'border border-white/20 text-light hover:border-neon-violet hover:text-neon-violet hover:bg-neon-violet/5',
  ghost: 'text-muted hover:text-light hover:bg-white/5'
};

const sizes = {
  sm: 'px-5 py-2 text-xs',
  md: 'px-8 py-3 text-sm',
  lg: 'px-10 py-4 text-base'
};

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`
        ${sizes[size]}
        ${variants[variant]}
        rounded-full font-semibold transition-all duration-200
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon-violet
        disabled:opacity-50 disabled:cursor-not-allowed
        inline-flex items-center justify-center gap-2
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
}
