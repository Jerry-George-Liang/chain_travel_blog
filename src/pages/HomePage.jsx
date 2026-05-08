import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Github, Twitter, Linkedin, Mail, ExternalLink } from 'lucide-react';
import personalData from '../data/personal.json';
import projectsData from '../data/projects.json';
import postsData from '../data/posts.json';
import projectImages from '../data/projectImages';
import blogImages from '../data/blogImages';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Tag from '../components/ui/Tag';
import Badge from '../components/ui/Badge';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCover from '../components/ui/ProjectCover';
import { fadeInUp, staggerContainer, staggerItem, scrollReveal } from '../utils/animations';

function TypewriterText({ texts, speed = 80, deleteSpeed = 50, pauseTime = 2000 }) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex <= texts[textIndex].length) {
        setDisplayText(texts[textIndex].slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex >= 0) {
        setDisplayText(texts[textIndex].slice(0, charIndex));
        setCharIndex(charIndex - 1);
      } else if (charIndex > texts[textIndex].length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, deleteSpeed, pauseTime]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-typing-cursor text-primary">|</span>
    </span>
  );
}

function HeroSection() {
  const socialLinks = [
    { icon: Github, href: personalData.socialLinks.github, label: 'GitHub' },
    { icon: Twitter, href: personalData.socialLinks.twitter, label: 'Twitter' },
    { icon: Linkedin, href: personalData.socialLinks.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personalData.email}`, label: 'Email' }
  ];

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.6 + 0.2;
        const colorPalette = [
          { r: 224, g: 64, b: 251 },
          { r: 124, g: 77, b: 255 },
          { r: 33, g: 150, b: 243 },
          { r: 0, g: 229, b: 255 },
          { r: 105, g: 240, b: 174 },
        ];
        this.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.max(0.1, this.size), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`;
        ctx.fill();
      }
    }

    const init = () => {
      resizeCanvas();
      particles = [];
      for (let i = 0; i < 60; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // 绘制连线
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const alpha = 0.12 * (1 - distance / 120);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(124, 77, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden atmosphere-hero">
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.7, zIndex: 1 }}
      />

      {/* 柔和光晕（3 个，干净简洁） */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        <div className="absolute top-[15%] left-[20%] w-[400px] h-[400px] bg-neon-violet/[0.12] rounded-full blur-[120px]" />
        <div className="absolute bottom-[25%] right-[15%] w-[350px] h-[350px] bg-neon-cyan/[0.10] rounded-full blur-[100px]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-neon-purple/[0.06] rounded-full blur-[140px]" />
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark to-transparent pointer-events-none" style={{ zIndex: 2 }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name */}
          <motion.h1
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-light mb-6"
          >
            你好，我是{' '}
            <span className="text-gradient">{personalData.name}</span>
          </motion.h1>

          {/* Typewriter Title */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted mb-8 h-8"
          >
            <TypewriterText texts={personalData.title} />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <Link to="/projects">
              <Button size="lg">
                查看我的项目
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/blog">
              <Button variant="secondary" size="lg">
                阅读博客
              </Button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            {...staggerContainer(50)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                variants={staggerItem}
                whileHover={{ y: -3, color: '#7c4dff' }}
                className="p-3 rounded-full border border-white/10 text-muted hover:text-neon-violet hover:border-neon-violet/30 transition-all"
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-[4.125rem] left-1/2 -translate-x-1/2"
      >
        <a href="#featured" className="flex flex-col items-center gap-2 text-muted hover:text-neon-cyan transition-colors">
          <span className="text-xs tracking-wider uppercase">向下滚动</span>
          <ChevronDown size={24} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}

function FeaturedProjects() {
  const featuredProjects = projectsData.filter(p => p.featured).slice(0, 4);

  return (
    <section id="featured" className="py-20 md:py-28 atmosphere-projects">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="精选项目" 
          subtitle="Featured Projects"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              {...scrollReveal}
              transition={{ ...scrollReveal.transition, delay: index * 0.1 }}
            >
              <Link to={`/projects/${project.id}`} className="block h-full">
                <Card hover className="h-full group flex flex-col">
                  {/* Cover Image - 场景化封面 */}
                  <div className={`relative w-full aspect-[16/10] rounded-lg overflow-hidden mb-4 bg-gradient-to-br ${projectImages[project.id]?.from || 'from-neon-violet/20'} ${projectImages[project.id]?.via || 'via-neon-blue/15'} ${projectImages[project.id]?.to || 'to-neon-cyan/10'} flex-shrink-0 group-hover:scale-105 transition-transform duration-500`}>
                    <ProjectCover projectId={project.id} />
                  </div>

                  {/* 内容区 - 弹性填充 */}
                  <div className="flex flex-col flex-1 min-h-0">
                    <h3 className="text-base font-semibold text-light group-hover:text-neon-violet transition-colors mb-2 line-clamp-1">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-muted line-clamp-2 mb-3 flex-1">
                      {project.description}
                    </p>

                    {/* 标签 - 固定在底部 */}
                    <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-white/[0.04]">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <Tag key={tech} variant="secondary">{tech}</Tag>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div {...scrollReveal} className="text-center mt-10">
          <Link to="/projects">
            <Button variant="secondary">
              查看全部项目
              <ArrowRight size={16} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function LatestPosts() {
  const latestPosts = postsData.slice(0, 3);

  return (
    <section className="py-20 md:py-32 pb-28 md:pb-40 atmosphere-blog">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="最新文章" 
          subtitle="Latest Posts"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
            <motion.div
              key={post.id}
              {...scrollReveal}
              transition={{ ...scrollReveal.transition, delay: index * 0.15 }}
            >
              <Link to={`/blog/${post.id}`}>
                <Card hover className="h-full group">
                  {/* Cover Image Placeholder */}
                  <div className={`aspect-[16/10] rounded-lg overflow-hidden mb-4 relative bg-gradient-to-br ${blogImages[post.id]?.from || 'from-neon-violet/20'} ${blogImages[post.id]?.via || 'via-neon-blue/15'} ${blogImages[post.id]?.to || 'to-neon-cyan/10'} flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                    <div className={`text-4xl ${blogImages[post.id]?.iconBg || 'bg-white/10'} w-16 h-16 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/[0.08]`}>
                      {blogImages[post.id]?.icon || '📝'}
                    </div>
                    <Badge className="absolute top-3 left-3 z-10">
                      {new Date(post.publishedAt).toLocaleDateString('zh-CN')}
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    <Tag variant="accent">{post.category}</Tag>
                    
                    <h3 className="text-lg font-semibold text-light group-hover:text-neon-violet transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-sm text-muted line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-2 text-xs text-muted">
                      <span>{post.readingTime} 分钟阅读</span>
                      <span className="flex items-center gap-1 group-hover:text-neon-cyan transition-colors">
                        阅读更多 <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <LatestPosts />
    </>
  );
}
