import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Github, Twitter, Linkedin, Mail, Heart,
  Code2, FolderOpen, FileText, User,
  Zap, Package, PenTool, Clock, MapPin,
  Terminal, Cpu, Wifi
} from 'lucide-react';
import personalData from '../../data/personal.json';

const socialLinks = [
  { icon: Github, href: 'https://github.com/2401-88861251', label: 'GitHub', color: '#ffffff', glowColor: 'rgba(255,255,255,0.4)' },
  { icon: Twitter, href: 'https://blog.csdn.net/2401_88861251', label: 'CSDN', color: '#FC5531', glowColor: 'rgba(252,85,49,0.4)' },
  { icon: Linkedin, href: 'https://linkedin.com/in/liangfusheng', label: 'LinkedIn', color: '#0A66C2', glowColor: 'rgba(10,102,194,0.4)' },
  { icon: Mail, href: 'mailto:13642533686@163.com', label: 'Email', color: '#69f0ae', glowColor: 'rgba(105,240,174,0.4)' },
];

const navCards = [
  {
    icon: Code2,
    label: '首页',
    desc: '探索我的世界',
    path: '/',
    gradient: 'from-neon-purple/20 to-neon-violet/20',
    hoverGlow: 'shadow-glow-purple',
    borderColor: 'border-neon-purple/30',
    hoverBorder: 'hover:border-neon-purple/60',
  },
  {
    icon: FolderOpen,
    label: '项目',
    desc: '9 个精选作品',
    path: '/projects',
    gradient: 'from-neon-violet/20 to-neon-blue/20',
    hoverGlow: 'shadow-glow-blue',
    borderColor: 'border-neon-violet/30',
    hoverBorder: 'hover:border-neon-violet/60',
  },
  {
    icon: FileText,
    label: '技术文章',
    desc: '深度技术分享',
    path: '/blog',
    gradient: 'from-neon-blue/20 to-neon-cyan/20',
    hoverGlow: 'shadow-glow-cyan',
    borderColor: 'border-neon-blue/30',
    hoverBorder: 'hover:border-neon-blue/60',
  },
  {
    icon: User,
    label: '关于我',
    desc: '了解更多',
    path: '/about',
    gradient: 'from-neon-cyan/20 to-neon-mint/20',
    hoverGlow: '',
    borderColor: 'border-neon-cyan/30',
    hoverBorder: 'hover:border-neon-cyan/60',
  },
];

const stats = [
  { icon: Package, value: '9+', label: '项目' },
  { icon: PenTool, value: '10+', label: '文章' },
  { icon: Clock, value: '0', label: '年经验' },
  { icon: Zap, value: '1st', label: '全国一等奖' },
];

const techBadges = ['Java', 'SpringBoot', 'Vue', 'React', 'TypeScript', 'TanStack', 'Tiptap', 'Solidity', 'Docker'];

const statusMessages = [
  { text: '正在构建新项目...', emoji: '🔨' },
  { text: '开源贡献中', emoji: '🌟' },
  { text: '学习新技术中', emoji: '📚' },
  { text: '喝咖啡写代码', emoji: '☕' },
  { text: 'Debug 一切', emoji: '🐛' },
];

function TypewriterStatus() {
  const [statusIndex, setStatusIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = statusMessages[statusIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText.length < current.text.length) {
        setDisplayText(current.text.slice(0, displayText.length + 1));
      } else if (!isDeleting && displayText.length === current.text.length) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(displayText.slice(0, -1));
      } else {
        setIsDeleting(false);
        setStatusIndex((prev) => (prev + 1) % statusMessages.length);
      }
    }, isDeleting ? 25 : 70);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, statusIndex]);

  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-muted mt-1">
      <span className="text-sm leading-none">{statusMessages[statusIndex].emoji}</span>
      <span className="leading-none">{displayText}</span>
      <span className="animate-typing-cursor text-neon-cyan ml-0.5">|</span>
    </span>
  );
}

const cardColors = [
  { border: 'rgba(217,70,239,0.5)', bg: 'rgba(217,70,239,0.08)', glow: 'rgba(217,70,239,0.4)', text: '#d946ef' },
  { border: 'rgba(139,92,246,0.5)', bg: 'rgba(139,92,246,0.08)', glow: 'rgba(139,92,246,0.4)', text: '#8b5cf6' },
  { border: 'rgba(59,130,246,0.5)', bg: 'rgba(59,130,246,0.08)', glow: 'rgba(59,130,246,0.4)', text: '#3b82f6' },
  { border: 'rgba(34,211,238,0.5)', bg: 'rgba(34,211,238,0.08)', glow: 'rgba(34,211,238,0.4)', text: '#22d3ee' },
  { border: 'rgba(52,211,153,0.5)', bg: 'rgba(52,211,153,0.08)', glow: 'rgba(52,211,153,0.4)', text: '#34d399' },
  { border: 'rgba(251,191,36,0.5)', bg: 'rgba(251,191,36,0.08)', glow: 'rgba(251,191,36,0.4)', text: '#fbbf24' },
  { border: 'rgba(244,114,182,0.5)', bg: 'rgba(244,114,182,0.08)', glow: 'rgba(244,114,182,0.4)', text: '#f472b6' },
  { border: 'rgba(129,140,248,0.5)', bg: 'rgba(129,140,248,0.08)', glow: 'rgba(129,140,248,0.4)', text: '#818cf8' },
  { border: 'rgba(45,212,191,0.5)', bg: 'rgba(45,212,191,0.08)', glow: 'rgba(45,212,191,0.4)', text: '#2dd4bf' },
];

function TechCarousel({ skills }) {
  const [hovered, setHovered] = useState(false);
  const total = skills.length;
  const radius = total <= 6 ? 110 : total <= 8 ? 130 : 150;

  return (
    <div
      className="relative rounded-xl overflow-hidden"
      style={{
        height: '180px',
        perspective: '1000px',
        background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.04) 0%, transparent 70%)',
        border: '1px solid rgba(255,255,255,0.05)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="w-full h-full flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <motion.div
          className="relative w-full h-full"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: hovered ? undefined : 360 }}
          transition={{
            rotateY: {
              duration: 20,
              ease: 'linear',
              repeat: hovered ? 0 : Infinity,
            },
          }}
        >
          {skills.map((skill, index) => {
            const angle = (index / total) * Math.PI * 2;
            const rotateY = angle * (180 / Math.PI);
            const color = cardColors[index % cardColors.length];

            return (
              <motion.div
                key={skill}
                className="absolute flex items-center justify-center cursor-default select-none"
                style={{
                  width: '90px',
                  height: '56px',
                  left: '50%',
                  top: '50%',
                  marginLeft: '-45px',
                  marginTop: '-28px',
                  transform: `rotateY(${rotateY}deg) translateZ(${radius}px)`,
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  background: `linear-gradient(135deg, ${color.bg}, rgba(12,10,30,0.7))`,
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  borderRadius: '14px',
                  border: `1px solid ${color.border}`,
                  boxShadow: `0 8px 25px rgba(0,0,0,0.35), 0 0 15px ${color.glow}15, inset 0 1px 0 rgba(255,255,255,0.06)`,
                  color: color.text,
                  fontWeight: 700,
                  fontSize: skill.length > 8 ? '0.65rem' : '0.75rem',
                  letterSpacing: '0.5px',
                  textAlign: 'center',
                  padding: '0 8px',
                  wordBreak: 'keep-all',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = `rotateY(${rotateY}deg) translateZ(${radius + 20}px) scale(1.1)`;
                  e.currentTarget.style.boxShadow = `0 12px 40px rgba(0,0,0,0.5), 0 0 30px ${color.glow}, inset 0 1px 0 rgba(255,255,255,0.12)`;
                  e.currentTarget.style.borderColor = color.text;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `rotateY(${rotateY}deg) translateZ(${radius}px) scale(1)`;
                  e.currentTarget.style.boxShadow = `0 8px 25px rgba(0,0,0,0.35), 0 0 15px ${color.glow}15, inset 0 1px 0 rgba(255,255,255,0.06)`;
                  e.currentTarget.style.borderColor = color.border;
                }}
              >
                {skill}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.05] bg-dark-secondary overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(124,77,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(124,77,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Top Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-violet/50 to-transparent" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

          {/* ============================================
              Column 1: Developer Identity Card (span 5)
              ============================================ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            {/* Identity Card Container */}
            <div className="relative rounded-2xl p-6 bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm overflow-hidden group">
              {/* Corner Accent Lines */}
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-neon-violet/40 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-neon-cyan/40 rounded-br-2xl" />

              {/* Subtle Glow Background */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon-violet/10 rounded-full blur-[80px] group-hover:bg-neon-violet/15 transition-colors duration-700" />

              <div className="relative">
                {/* Avatar + Name Row */}
                <div className="flex items-center gap-4 mb-5">
                  {/* Avatar with Gradient Ring */}
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-purple via-neon-violet to-neon-cyan p-[2px]">
                      <div className="w-full h-full rounded-[10px] bg-dark-secondary flex items-center justify-center text-xl font-bold font-heading text-gradient">
                        {personalData.name[0]}
                      </div>
                    </div>
                    {/* Online Pulse */}
                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-dark-secondary border-2 border-neon-mint flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-neon-mint animate-pulse" />
                    </div>
                  </div>

                  {/* Name & Status */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold font-heading text-light leading-tight">{personalData.name}</h3>
                    <TypewriterStatus />
                  </div>
                </div>

                {/* Bio Text */}
                <p className="text-sm text-muted leading-relaxed mb-6">
                  {personalData.bio.slice(0, 80)}...
                </p>

                {/* Stats Grid - 2x2 for better readability */}
                <div className="grid grid-cols-4 gap-2 mb-5">
                  {stats.map(({ icon: Icon, value, label }, i) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.35 }}
                      className="text-center py-2.5 px-1 rounded-lg bg-white/[0.03] border border-white/[0.05] hover:border-neon-violet/25 hover:bg-white/[0.05] transition-all duration-300 group/stat"
                    >
                      <Icon size={14} className="mx-auto mb-1 text-neon-violet group-hover/stat:text-neon-cyan transition-colors" />
                      <div className="text-sm font-bold text-light leading-none">{value}</div>
                      <div className="text-[10px] text-muted mt-0.5">{label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Tech Stack 3D Carousel */}
                <div className="mt-5">
                  <TechCarousel skills={techBadges} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ============================================
              Column 2: Navigation Cards (span 4)
              ============================================ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4"
          >
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted/70 mb-5 flex items-center gap-2">
              <Terminal size={14} className="text-neon-violet" />
              导航终端
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {navCards.map((card, index) => (
                <motion.div
                  key={card.path}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.08, duration: 0.4 }}
                >
                  <Link
                    to={card.path}
                    className={`group relative block rounded-xl p-4 bg-gradient-to-br ${card.gradient} border ${card.borderColor} ${card.hoverBorder} transition-all duration-300 hover:${card.hoverGlow} hover:-translate-y-1`}
                  >
                    {/* Icon */}
                    <div className="w-9 h-9 rounded-lg bg-white/[0.08] flex items-center justify-center mb-3 group-hover:bg-white/[0.14] transition-colors">
                      <card.icon size={18} className="text-light/70 group-hover:text-light transition-colors" />
                    </div>

                    {/* Label */}
                    <div className="text-sm font-semibold text-light mb-0.5 group-hover:text-gradient-to-r group-hover:bg-gradient-to-r group-hover:from-neon-violet group-hover:to-neon-cyan group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {card.label}
                    </div>

                    {/* Description */}
                    <div className="text-[11px] text-muted/70 group-hover:text-muted transition-colors">
                      {card.desc}
                    </div>

                    {/* Arrow indicator */}
                    <div className="absolute bottom-3 right-3 w-5 h-5 rounded-md bg-white/[0.05] flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-300">
                      <svg className="w-3 h-3 text-neon-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ============================================
              Column 3: Connect Hub (span 3)
              ============================================ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted/70 mb-5 flex items-center gap-2">
              <Wifi size={14} className="text-neon-cyan" />
              连接节点
            </h3>

            {/* Social Links - Large Cards */}
            <div className="space-y-3">
              {socialLinks.map(({ icon: Icon, href, label, color, glowColor }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.08, duration: 0.4 }}
                  whileHover={{ x: 4, scale: 1.02 }}
                  className="group flex items-center gap-3.5 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.06] transition-all duration-300 relative overflow-hidden"
                  style={{
                    '--glow-color': glowColor,
                  }}
                >
                  {/* Hover Glow Background */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      boxShadow: `inset 0 0 20px ${glowColor}`,
                    }}
                  />

                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${color}15`,
                      color: color,
                    }}
                  >
                    <Icon size={20} />
                  </div>

                  {/* Label */}
                  <span className="text-sm font-medium text-light/80 group-hover:text-light transition-colors relative z-10">
                    {label}
                  </span>

                  {/* External link arrow */}
                  <svg className="w-3.5 h-3.5 ml-auto text-muted/30 group-hover:text-muted/60 group-hover:translate-x-0.5 transition-all relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </motion.a>
              ))}
            </div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-6 p-4 rounded-xl bg-gradient-to-br from-neon-violet/[0.06] to-neon-blue/[0.06] border border-neon-violet/[0.1]"
            >
              <div className="flex items-center gap-3 mb-2">
                <Mail size={16} className="text-neon-violet" />
                <span className="text-xs font-medium text-light/80">保持联系</span>
              </div>
              <a
                href={`mailto:${personalData.email}`}
                className="text-xs text-muted hover:text-neon-cyan transition-colors truncate block"
              >
                {personalData.email}
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* ============================================
            Bottom Bar
            ============================================ */}
        <div className="pt-8 border-t border-white/[0.06]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">

            {/* Left: Brand + Copyright */}
            <div className="flex items-center gap-3">
              <span className="font-bold text-base tracking-tight" style={{
                background: 'linear-gradient(135deg, #d946ef 0%, #a78bfa 40%, #22d3ee 80%, #34d399 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Chain<span style={{ color: '#22d3ee', WebkitTextFillColor: '#22d3ee' }}>B</span>log</span>
              <span className="text-xs text-muted/50">© {currentYear}</span>
            </div>

            {/* Center: Tech Stack Pills */}
            <div className="flex items-center justify-center gap-1.5 flex-wrap">
              {['React', 'TypeScript', 'TailwindCSS', 'Framer Motion'].map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-white/[0.04] border border-white/[0.08] text-muted/60 hover:text-light/70 hover:border-white/[0.15] transition-all cursor-default">
                  {tech}
                </span>
              ))}
              <span className="text-[10px] text-muted/40">☕</span>
            </div>

            {/* Right: Crafted with Love */}
            <div className="flex items-center justify-end gap-1.5 text-xs text-muted/50">
              <span>Crafted</span>
              <motion.span
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <Heart size={12} className="text-red-400 fill-red-400/80" />
              </motion.span>
              <span>by</span>
              <span className="font-medium text-light/70">{personalData.name}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
