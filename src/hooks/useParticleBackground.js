import { useEffect, useRef, useCallback } from 'react';

class Particle {
  constructor(canvas, options = {}) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    
    const { x, y, radius, color, velocity, opacity } = options;
    
    this.x = x || Math.random() * canvas.width;
    this.y = y || Math.random() * canvas.height;
    this.radius = radius || Math.random() * 1.5 + 0.5;
    this.baseRadius = this.radius;
    this.color = color || `rgba(0, 255, 200, ${Math.random() * 0.5 + 0.3})`;
    this.velocity = velocity || {
      x: (Math.random() - 0.5) * 0.5,
      y: (Math.random() - 0.5) * 0.5
    };
    this.opacity = opacity || Math.random() * 0.8 + 0.2;
    this.baseOpacity = this.opacity;
    this.mouseDistance = 150; // 鼠标影响范围
    this.mouseForce = 0.03; // 鼠标吸引力/排斥力强度
  }

  update(mouse) {
    // 基础移动
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    // 鼠标交互 - 吸引/排斥效果
    if (mouse.x !== null && mouse.y !== null) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.mouseDistance) {
        const force = (this.mouseDistance - distance) / this.mouseDistance;
        const angle = Math.atan2(dy, dx);
        
        // 靠近时被吸引，但保持一定距离（避免重叠）
        if (distance > 50) {
          this.x += Math.cos(angle) * force * this.mouseForce * 10;
          this.y += Math.sin(angle) * force * this.mouseForce * 10;
        }
        
        // 靠近时变大变亮
        this.radius = this.baseRadius * (1 + force * 2);
        this.opacity = Math.min(1, this.baseOpacity + force * 0.5);
      } else {
        this.radius = this.baseRadius;
        this.opacity = this.baseOpacity;
      }
    }

    // 边界处理（环绕）
    if (this.x < -10) this.x = this.canvas.width + 10;
    if (this.x > this.canvas.width + 10) this.x = -10;
    if (this.y < -10) this.y = this.canvas.height + 10;
    if (this.y > this.canvas.height + 10) this.y = -10;

    // 缓慢回归基础状态
    this.radius += (this.baseRadius - this.radius) * 0.05;
    this.opacity += (this.baseOpacity - this.opacity) * 0.05;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, Math.max(0.1, this.radius), 0, Math.PI * 2);
    this.ctx.fillStyle = this.color.replace(/[\d.]+\)$/, `${this.opacity})`);
    this.ctx.fill();
  }
}

export default function useParticleBackground(options = {}) {
  const {
    particleCount = 80,
    connectionDistance = 120,
    connectionOpacity = 0.15,
    showConnections = true,
    colors = ['rgba(0, 255, 200,', 'rgba(100, 200, 255,', 'rgba(168, 85, 247,']
  } = options;

  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null });

  const initParticles = useCallback((canvas) => {
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      const colorIndex = Math.floor(Math.random() * colors.length);
      const baseColor = colors[colorIndex];
      particles.push(new Particle(canvas, {
        color: baseColor + `${Math.random() * 0.4 + 0.3})`
      }));
    }
    return particles;
  }, [particleCount, colors]);

  const drawConnections = useCallback((ctx, particles) => {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance) {
          const opacity = connectionOpacity * (1 - distance / connectionDistance);
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 255, 200, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }, [connectionDistance, connectionOpacity]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particles = particlesRef.current;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 更新和绘制粒子
    particles.forEach(particle => {
      particle.update(mouseRef.current);
      particle.draw();
    });

    // 绘制连线
    if (showConnections) {
      drawConnections(ctx, particles);
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [showConnections, drawConnections]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // 设置 canvas 尺寸
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 初始化粒子
    particlesRef.current = initParticles(canvas);

    // 鼠标事件监听
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null };
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // 启动动画
    animate();

    // 清理
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initParticles, animate]);

  return canvasRef;
}
