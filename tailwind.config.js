/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        // 主强调色 - 薄荷绿/青绿
        primary: '#00ffc8',
        'primary-dark': '#00e6b4',
        // 霓虹色系（高饱和度）
        neon: {
          purple: '#d946ef',
          violet: '#8b5cf6',
          blue: '#3b82f6',
          cyan: '#22d3ee',
          mint: '#34d399',
          pink: '#ec4899',
        },
        // 基础色调 - 深靛紫（有颜色特征的深色，不是纯黑）
        dark: '#0c0a1e',
        'dark-deep': '#0a0818',
        'dark-warm': '#12091f',
        'dark-cool': '#0a0f1e',
        'dark-secondary': '#0f0d26',  // 次级
        'dark-tertiary': '#151335',    // 第三层
        light: '#e8f4fc',
        muted: '#94a3b8',
        'muted-dark': '#64748b'
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'typing-cursor': 'blink 1s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
        'blob': 'blob 7s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(105, 240, 174, 0.3)' },
          '100%': { boxShadow: '0 0 60px rgba(105, 240, 174, 0.6), 0 0 100px rgba(224, 64, 251, 0.3)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70 / 60% 30% 70% 40%' },
          '34%': { borderRadius: '30% 70% 70% 30 / 50% 50% 30% 70%' },
          '67%': { borderRadius: '70% 30% 30% 70 / 30% 70% 40% 60%' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'typing-cursor': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyberpunk-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
        'dream-gradient': 'linear-gradient(180deg, #e040fb 0%, #7c4dff 25%, #2196f3 50%, #00e5ff 75%, #69f0ae 100%)',
        'dream-gradient-alt': 'linear-gradient(160deg, #d500f9 0%, #9c27b0 20%, #673ab7 45%, #00bcd4 70%, #00e676 100%)',
        'aurora-gradient': 'linear-gradient(-45deg, #f093fb 0%, #f5576c 25%, #4facfe 50%, #00f2fe 75%, #43e97b 100%)',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(105, 240, 174, 0.4)',
        'glow-md': '0 0 30px rgba(105, 240, 174, 0.5)',
        'glow-lg': '0 0 60px rgba(105, 240, 174, 0.6)',
        'glow-purple': '0 0 30px rgba(124, 58, 237, 0.5)',
        'glow-blue': '0 0 30px rgba(33, 150, 243, 0.5)',
        'glow-cyan': '0 0 30px rgba(0, 229, 255, 0.5)',
        card: '0 8px 32px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 16px 48px rgba(105, 240, 174, 0.2), 0 0 30px rgba(224, 64, 251, 0.15)',
        'card-hover-strong': '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(105, 240, 174, 0.3)',
      },
    },
  },
  plugins: [],
}
