import { useState, useCallback, useRef } from 'react';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function useTilt(options = {}) {
  const {
    maxTilt = 15,           // 最大倾斜角度 (度)
    scale = 1.03,            // 悬停时放大倍数
    glareEnabled = true,     // 是否启用高光效果
    glareMaxOpacity = 0.15,  // 高光最大透明度
    perspective = 1000,      // 透视距离
    transition = {           // 弹簧动画配置
      type: 'spring',
      stiffness: 300,
      damping: 20
    }
  } = options;

  const ref = useRef(null);
  
  // Framer Motion 值
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scaleValue = useMotionValue(1);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  // Spring 动画包装
  const springRotateX = useSpring(rotateX, transition);
  const springRotateY = useSpring(rotateY, transition);
  const springScale = useSpring(scaleValue, transition);
  const springGlareX = useSpring(glareX, transition);
  const springGlareY = useSpring(glareY, transition);

  // 转换为 CSS transform 字符串
  const transform = useTransform(
    [springRotateX, springRotateY, springScale],
    (rX, rY, s) => 
      `perspective(${perspective}px) rotateX(${rX}deg) rotateY(${rY}deg) scale3d(${s}, ${s}, ${s})`
  );

  // 高光渐变位置
  const glarePosition = useTransform(
    [springGlareX, springGlareY],
    (x, y) => `${x}% ${y}%`
  );

  // 处理鼠标进入
  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    
    // 计算鼠标相对于卡片中心的百分比位置 (-1 到 1)
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // 归一化到 -1 到 1 范围
    const normalizeX = mouseX / (rect.width / 2);
    const normalizeY = -mouseY / (rect.height / 2); // Y轴翻转
    
    // 应用倾斜角度
    rotateX.set(normalizeY * maxTilt);   // 上下倾斜
    rotateY.set(normalizeX * maxTilt);   // 左右倾斜
    
    // 放大
    scaleValue.set(scale);
    
    // 更新高光位置 (0-100%)
    glareX.set(((e.clientX - rect.left) / rect.width) * 100);
    glareY.set(((e.clientY - rect.top) / rect.height) * 100);
  }, [maxTilt, scale, rotateX, rotateY, scaleValue, glareX, glareY]);

  // 处理鼠标离开
  const handleMouseLeave = useCallback(() => {
    // 重置所有值到初始状态
    rotateX.set(0);
    rotateY.set(0);
    scaleValue.set(1);
    glareX.set(50);
    glareY.set(50);
  }, [rotateX, rotateY, scaleValue, glareX, glareY]);

  // 绑定事件到 ref 元素
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return {
    ref,
    style: {
      transform,
      willChange: 'transform'
    },
    glareStyle: glareEnabled ? {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      borderRadius: 'inherit',
      background: `radial-gradient(circle at var(--glare-x, 50%) var(--glare-y, 50%), rgba(255,255,255,${glareMaxOpacity}), transparent 60%)`,
      '--glare-x': glarePosition,
      '--glare-y': glarePosition,
      opacity: useTransform(springScale, s => s > 1 ? 1 : 0),
      transition: 'opacity 0.2s ease'
    } : null
  };
}
