import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, FolderOpen, User, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { path: '/', label: '首页', icon: Code2 },
  { path: '/projects', label: '项目', icon: FolderOpen },
  { path: '/blog', label: '技术文章', icon: FileText },
  { path: '/about', label: '关于我', icon: User }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[300] transition-all duration-300 ${
          isScrolled 
            ? 'bg-dark/80 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/20' 
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - 品牌名 */}
            <Link to="/" className="group flex items-center gap-2.5 hover:opacity-90 transition-opacity">
              <div className="relative w-9 h-9 flex items-center justify-center">
                <motion.div
                  className="relative z-10"
                  animate={{ y: [0, -2.5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <motion.path
                      d="M17 4L28 10V24L17 30L6 24V10L17 4Z"
                      stroke="url(#logoGrad1)"
                      strokeWidth="1.8"
                      fill="none"
                      strokeLinecap="round"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.circle cx="17" cy="10" r="2.5" fill="url(#logoGrad2)"
                      animate={{ scale: [1, 1.25, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
                      style={{ transformOrigin: '17px 10px' }}
                    />
                    <motion.circle cx="25.5" cy="18" r="2.5" fill="url(#logoGrad2)"
                      animate={{ scale: [1, 1.25, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                      style={{ transformOrigin: '25.5px 18px' }}
                    />
                    <motion.circle cx="8.5" cy="18" r="2.5" fill="url(#logoGrad2)"
                      animate={{ scale: [1, 1.25, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                      style={{ transformOrigin: '8.5px 18px' }}
                    />
                    <motion.circle cx="17" cy="26" r="2.5" fill="url(#logoGrad2)"
                      animate={{ scale: [1, 1.25, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
                      style={{ transformOrigin: '17px 26px' }}
                    />
                    <line x1="17" y1="12.5" x2="17" y2="23.5" stroke="url(#logoGrad1)" strokeWidth="1.3" opacity="0.35" />
                    <line x1="19" y1="11" x2="23.5" y2="16" stroke="url(#logoGrad1)" strokeWidth="1.3" opacity="0.35" />
                    <line x1="15" y1="11" x2="10.5" y2="16" stroke="url(#logoGrad1)" strokeWidth="1.3" opacity="0.35" />
                    <line x1="19" y1="25" x2="23.5" y2="20" stroke="url(#logoGrad1)" strokeWidth="1.3" opacity="0.35" />
                    <line x1="15" y1="25" x2="10.5" y2="20" stroke="url(#logoGrad1)" strokeWidth="1.3" opacity="0.35" />
                    <defs>
                      <linearGradient id="logoGrad1" x1="6" y1="4" x2="28" y2="30">
                        <stop stopColor="#8b5cf6">
                          <animate attributeName="stopColor" values="#8b5cf6;#22d3ee;#d946ef;#8b5cf6" dur="4s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="1" stopColor="#22d3ee">
                          <animate attributeName="stopColor" values="#22d3ee;#d946ef;#8b5cf6;#22d3ee" dur="4s" repeatCount="indefinite" />
                        </stop>
                      </linearGradient>
                      <linearGradient id="logoGrad2" x1="6" y1="10" x2="28" y2="26">
                        <stop stopColor="#d946ef" />
                        <stop offset="0.5" stopColor="#8b5cf6" />
                        <stop offset="1" stopColor="#22d3ee" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
                <div
                  className="absolute inset-0 rounded-xl blur-lg bg-neon-violet/30"
                  style={{
                    animation: 'glowBreath 3s ease-in-out infinite',
                  }}
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold tracking-tight" style={{
                  background: 'linear-gradient(135deg, #d946ef 0%, #a78bfa 40%, #22d3ee 80%, #34d399 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>Chain<span style={{ color: '#22d3ee', WebkitTextFillColor: '#22d3ee' }}>B</span>log</span>
                <span className="text-[9px] font-medium tracking-[0.2em] uppercase text-muted/50 mt-0.5 group-hover:text-neon-cyan/70 transition-colors">Tech Portfolio</span>
              </div>
            </Link>

            {/* Desktop Navigation - Project Oriented */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === link.path 
                      ? 'text-neon-violet bg-neon-violet/10' 
                      : 'text-light/70 hover:text-light hover:bg-white/5'
                  }`}
                >
                  <link.icon size={16} />
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-neon-purple via-neon-violet to-neon-cyan rounded-full"
                    />
                  )}
                </Link>
              ))}
              
              {/* CTA Button - GitHub Link */}
              <a
                href="https://github.com/zhangsan"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-violet/10 text-neon-violet text-sm font-medium hover:bg-neon-violet/20 transition-colors border border-neon-violet/30"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 2.57l.357.095.72-.18C19.086 21.143 22.512 12 12 12zM2.17 10.87c-.91-.31-1.89.59-2.17 1.48l.07.23c.69-.15 1.39-.27 2.02-.47V12c0-5.525 4.475-10 10-10zm18 0c-5.525 0-10 4.475-10 10v-.41c.63.2 1.33.32 2.02.47l.07-.23c-.28-.89-1.26-1.79-2.17-1.48z"/></svg>
                GitHub
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-light hover:text-neon-violet transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[299] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[80vw] h-full bg-dark-secondary/95 backdrop-blur-xl z-[400] md:hidden overflow-y-auto"
            >
              {/* Mobile Header */}
              <div className="p-6 pt-12 border-b border-white/10 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold font-heading text-gradient">导航菜单</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-muted hover:text-light"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              <nav className="px-6 pb-6 flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center gap-3 py-3.5 px-4 rounded-xl text-base font-medium transition-all ${
                        location.pathname === link.path
                          ? 'bg-neon-violet/15 text-neon-violet border border-neon-violet/30'
                          : 'text-light/70 hover:bg-white/5'
                      }`}
                    >
                      <link.icon size={20} />
                      <span>{link.label}</span>
                      {location.pathname === link.path && (
                        <motion.div
                          layoutId="activeMobileNav"
                          className="ml-auto w-1.5 h-1.5 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Divider */}
                <div className="my-4 border-t border-white/10" />
                
                {/* GitHub Link */}
                <a
                  href="https://github.com/zhangsan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-3.5 px-4 rounded-xl text-base font-medium text-muted hover:text-light hover:bg-white/5 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 2.57l.357.095.72-.18C19.086 21.143 22.512 12 12 12zM2.17 10.87c-.91-.31-1.89.59-2.17 1.48l.07.23c.69-.15 1.39-.27 2.02-.47V12c0-5.525 4.475-10 10-10zm18 0c-5.525 0-10 4.475-10 10v-.41c.63.2 1.33.32 2.02.47l.07-.23c-.28-.89-1.26-1.79-2.17-1.48z"/></svg>
                  访问 GitHub
                  <ExternalLink size={14} className="ml-auto opacity-50" />
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// ExternalLink icon for mobile menu
function ExternalLink(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 13 22 8 13 15"></polyline>
      <line x1="22" y1="8" x2="11" y2="13"></line>
    </svg>
  );
}
