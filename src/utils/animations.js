export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

export const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
};

export const staggerContainer = (staggerDelay = 100) => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren: staggerDelay / 1000
    }
  }
});

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

export const pageTransition = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
  transition: { duration: 0.4, ease: 'easeInOut' }
};

export const scrollReveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export const cardHover = {
  rest: { 
    scale: 1, 
    boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
  },
  hover: { 
    scale: 1.03, 
    boxShadow: '0 20px 48px rgba(0,255,200,0.15)',
    transition: { duration: 0.3, ease: 'easeOut' }
  }
};

export const buttonPress = {
  whileTap: { scale: 0.97 },
  whileHover: { scale: 1.02, y: -2 }
};

export const glowPulse = {
  animate: {
    boxShadow: [
      '0 0 10px rgba(0,255,200,0.2)',
      '0 0 25px rgba(0,255,200,0.4)',
      '0 0 10px rgba(0,255,200,0.2)'
    ]
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut'
  }
};

export const typewriterConfig = {
  speed: 80,
  deleteSpeed: 50,
  pauseTime: 2000,
  cursorChar: '|',
  loop: true,
  shuffle: false
};
