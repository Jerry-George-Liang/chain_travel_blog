# 🎯 ChainBlog 像素级任务拆分手册
> **版本**: v3.0 Ultra-Detailed Edition  
> **粒度**: 每个任务 30-60 分钟可完成  
> **精度**: 精确到 px、color code、timing function、keyframe  

---

## 📦 任务总览 (50+ 个微任务)

### Phase 1: 项目骨架 (5 tasks)
### Phase 2: 设计系统 (6 tasks)  
### Phase 3: 导航系统 (4 tasks)
### Phase 4: Hero 区域 (8 tasks) ⭐ 视觉核心
### Phase 5: 首页内容 (5 tasks)
### Phase 6: 关于页面 (6 tasks)
### Phase 7: 项目系统 (7 tasks)
### Phase 8: 博客系统 (8 tasks)
### Phase 9: 全局交互 (5 tasks)
### Phase 10: 错误处理 (3 tasks)

**总计**: 57 个独立可执行任务

---

## Phase 1: 项目骨架搭建

---

### ✅ Task 1.1: 初始化 Vite + React 项目

#### 🎨 最终效果
- 终端运行 `npm run dev` 后，浏览器自动打开 `http://localhost:3000`
- 页面显示 Vite 默认的 React logo + "Hello World" 文字
- 控制台无报错

#### 🔧 执行步骤
```bash
# 在项目根目录 e:\Desktop\My_Work\Trae_Work\Trae_SOLO_Code\chainblog 执行:
npm create vite@latest . -- --template react-ts
```

#### 📦 安装依赖
```bash
npm install react-router-dom framer-motion lucide-react react-markdown remark-gfm rehype-highlight
npm install -D @types/node tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

#### ✅ 验收标准
- [ ] `npm run dev` 启动成功，访问 localhost:3000 显示默认页面
- [ ] `npm run build` 构建成功，生成 dist/ 目录
- [ ] package.json 包含所有上述依赖

---

### ✅ Task 1.2: 配置 Tailwind CSS 自定义主题

#### 🎨 最终效果
在任意组件中使用以下类名即可看到正确的颜色：
- `bg-primary` → 显示青色 `#00ffc8`
- `bg-dark` → 显示深黑 `#0a0a0a`
- `text-light` → 显示米白 `#f5f5f5`
- `font-heading` → 使用 Syne 字体
- `font-sans` → 使用 DM Sans 字体

#### 🎯 配置文件: `tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00ffc8',
        'primary-dark': '#00b894',
        dark: '#0a0a0a',
        'dark-secondary': '#111111',
        'dark-tertiary': '#1a1a1a',
        light: '#f5f5f5',
        muted: '#888888',
        'muted-dark': '#666666',
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
          '0%': { boxShadow: '0 0 5px rgba(0,255,200,0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(0,255,200,0.6)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(0,255,200,0.3)',
        'glow-md': '0 0 20px rgba(0,255,200,0.4)',
        'glow-lg': '0 0 40px rgba(0,255,200,0.5)',
        'card': '0 8px 32px rgba(0,0,0,0.3)',
        'card-hover': '0 16px 48px rgba(0,255,200,0.15)',
      },
    },
  },
  plugins: [],
}
```

#### 📝 测试文件: `src/App.jsx`
```jsx
export default function App() {
  return (
    <div className="min-h-screen bg-dark text-light font-sans p-8">
      <h1 className="text-5xl font-heading font-bold text-primary mb-4">
        测试标题
      </h1>
      <p className="text-muted text-lg">
        这是一段测试文字，用于验证 Tailwind 配置是否正确。
      </p>
      <button className="px-6 py-3 bg-primary text-dark rounded-full font-semibold hover:shadow-glow-md transition-all">
        测试按钮
      </button>
    </div>
  )
}
```

#### ✅ 验收标准
- [ ] 标题显示为 Syne 字体，颜色为 #00ffc8（亮青色）
- [ ] 正文显示为 DM Sans 字体，颜色为 #f5f5f5（米白色）
- [ ] 背景为 #0a0a0a（纯黑色）
- [ ] 按钮悬停时有青色发光阴影效果

---

### ✅ Task 1.3: 创建目录结构

#### 🎨 最终效果
VS Code 左侧文件树显示如下结构：
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   └── MobileMenu.jsx
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Tag.jsx
│   │   ├── Badge.jsx
│   │   └── SectionHeading.jsx
│   ├── home/
│   │   ├── HeroSection.jsx
│   │   ├── FeaturedProjects.jsx
│   │   ├── LatestPosts.jsx
│   │   └── StatsCounter.jsx
│   ├── about/
│   │   ├── ProfileCard.jsx
│   │   ├── SkillsInteractive.jsx
│   │   └── TimelineInteractive.jsx
│   ├── project/
│   │   ├── ProjectFilter.jsx
│   │   ├── ProjectGrid.jsx
│   │   ├── ProjectCard.jsx
│   │   └── LightboxGallery.jsx
│   └── blog/
│       ├── BlogFilter.jsx
│       ├── BlogList.jsx
│       ├── BlogCard.jsx
│       ├── CodeBlock.jsx
│       ├── TableOfContents.jsx
│       └── ArticleActions.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── ProjectsPage.jsx
│   ├── ProjectDetailPage.jsx
│   ├── BlogPage.jsx
│   ├── BlogDetailPage.jsx
│   └── NotFoundPage.jsx
├── data/
│   ├── personal.json
│   ├── projects.json
│   ├── posts.json
│   └── skills.json
├── hooks/
│   ├── useTypewriter.js
│   ├── useTilt.js
│   ├── useScrollPosition.js
│   ├── useParticleBackground.js
│   └── useMediaQuery.js
├── utils/
│   ├── animations.js
│   ├── search.js
│   └── helpers.js
├── styles/
│   └── globals.css
├── App.jsx
└── main.jsx
```

#### 🔧 执行步骤
使用 VS Code 或命令行逐个创建空文件：
```bash
# 创建所有目录
mkdir -p src/components/{layout,ui,home,about,project,blog}
mkdir -p src/pages src/data src/hooks src/utils src/styles

# 创建所有空文件 (示例)
touch src/components/layout/Header.jsx
touch src/components/layout/Footer.jsx
# ... (依次创建所有文件)
```

每个文件初始内容：
```jsx
// 示例: src/components/layout/Header.jsx
export default function Header() {
  return <header>Header</header>
}
```

#### ✅ 验收标准
- [ ] 所有 57 个文件均已创建
- [ ] 目录结构与上方完全一致
- [ ] 每个文件都是有效的 JSX 组件（不报错）

---

### ✅ Task 1.4: 配置全局样式 globals.css

#### 🎨 最终效果
页面加载后：
- 背景色为纯黑 `#0a0a0a`
- 默认文字颜色为 `#f5f5f5`
- 平滑滚动已启用（点击锚点链接时平滑滚动而非瞬间跳转）
- 选中文字时的背景色为 `#00ffc8`（青色），文字为黑色
- 所有元素使用 `border-box` 盒模型
- 移动端禁止 iOS 自动调整字体大小

#### 📝 完整代码: `src/styles/globals.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ============================================
   CSS 变量定义 (Design Tokens)
   ============================================ */
:root {
  /* 颜色系统 */
  --color-primary: #00ffc8;
  --color-primary-rgb: 0, 255, 200;
  --color-dark: #0a0a0a;
  --color-light: #f5f5f5;
  --color-muted: #888888;
  
  /* 间距系统 */
  --space-xs: 0.25rem;   /* 4px */
  --space-sm: 0.5rem;    /* 8px */
  --space-md: 1rem;      /* 16px */
  --space-lg: 1.5rem;    /* 24px */
  --space-xl: 2rem;      /* 32px */
  --space-2xl: 4rem;     /* 64px */
  --space-3xl: 6rem;     /* 96px */
  
  /* 圆角系统 */
  --radius-sm: 0.25rem;  /* 4px */
  --radius-md: 0.5rem;   /* 8px */
  --radius-lg: 1rem;     /* 16px */
  --radius-xl: 1.5rem;   /* 24px */
  --radius-full: 9999px; /* 完全圆形 */
  
  /* 字体大小 */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */
  --text-6xl: 3.75rem;   /* 60px */
  --text-7xl: 4.5rem;    /* 72px */
  
  /* 过渡速度 */
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  
  /* Z-index 层级 */
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal-backdrop: 400;
  --z-modal: 500;
  --z-tooltip: 600;
}

/* ============================================
   现代 CSS Reset
   ============================================ */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
  tab-size: 4;
}

body {
  min-height: 100vh;
  line-height: 1.6;
  font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: var(--text-base);
  color: var(--color-light);
  background-color: var(--color-dark);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  overflow-x: hidden;
}

/* 选中文字样式 */
::selection {
  background-color: rgba(var(--color-primary-rgb), 0.3);
  color: var(--color-light);
}

::-moz-selection {
  background-color: rgba(var(--color-primary-rgb), 0.3);
  color: var(--color-light);
}

/* 滚动条样式 (Webkit) */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--color-dark);
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-full);
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.25);
}

/* 链接默认样式 */
a {
  color: inherit;
  text-decoration: none;
}

/* 图片响应式 */
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
  height: auto;
}

/* 表单元素继承字体 */
input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
  border: none;
  background: none;
}

/* 列表重置 */
ul,
ol {
  list-style: none;
}

/* ============================================
   工具类 (Utility Classes)
   ============================================ */

/* 屏幕阅读器专用 (.sr-only) */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* 玻璃态效果 */
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.glass-strong {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

/* 渐变边框 */
.gradient-border {
  position: relative;
}

.gradient-border::before {
  content: '';
  position: absolute;
  inset: 0;
  padding: 1px;
  border-radius: inherit;
  background: linear-gradient(135deg, rgba(0,255,200,0.5), transparent, rgba(0,255,200,0.3));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

/* 文本渐变 */
.text-gradient {
  background: linear-gradient(135deg, var(--color-primary), #00b894);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 减少动画偏好 */
@media (prefers-reduced-motion: reduce) *,
@media (prefers-reduced-motion: reduce) *::before,
@media (prefers-reduced-motion: reduce) *::after {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
  scroll-behavior: auto !important;
}
```

#### ✅ 验收标准
- [ ] 页面背景为纯黑 #0a0a0a
- [ ] 选中文字时背景变为半透明青色
- [ ] 滚动条宽度 8px，半透明白色滑块
- [ ] `.glass` 类产生毛玻璃效果（可用 Chrome DevTools 检查 backdrop-filter）

---

### ✅ Task 1.5: 创建示例数据文件

#### 🎨 最终效果
4 个 JSON 数据文件包含完整的示例数据，可在浏览器控制台通过 `import data from './data/xxx.json'` 访问。

#### 📝 personal.json (个人信息)
```json
{
  "name": "张三",
  "title": ["全栈开发者", "开源爱好者", "技术写作者", "问题解决者"],
  "avatar": "/images/avatar.jpg",
  "bio": "一名热爱技术的全栈开发者，专注于构建优雅的用户体验和高性能的 Web 应用。5 年+ 开发经验，擅长 React、Node.js、TypeScript 技术栈。相信代码可以改变世界，每一行都是艺术品。",
  "email": "zhangsan@example.com",
  "socialLinks": {
    "github": "https://github.com/zhangsan",
    "twitter": "https://twitter.com/zhangsan",
    "linkedin": "https://linkedin.com/in/zhangsan"
  }
}
```

#### 📝 projects.json (8 个示例项目)
```json
[
  {
    "id": "ai-chatbot",
    "title": "AI 智能助手",
    "description": "基于 GPT-4 的智能对话机器人，支持多轮对话、上下文理解、代码生成等功能。",
    "longDescription": "这是一个功能完整的 AI 聊天应用，集成了 OpenAI GPT-4 API，支持实时流式输出、Markdown 渲染、对话历史管理等高级特性。前端采用 React + TypeScript 构建，后端使用 Node.js + Express 提供 API 服务。",
    "coverImage": "/images/projects/ai-chatbot.jpg",
    "images": [
      "/images/projects/ai-chatbot-1.jpg",
      "/images/projects/ai-chatbot-2.jpg"
    ],
    "tags": ["AI", "ChatGPT", "NLP"],
    "techStack": ["React", "TypeScript", "OpenAI", "Node.js", "TailwindCSS"],
    "githubUrl": "https://github.com/zhangsan/ai-chatbot",
    "demoUrl": "https://ai-chatbot.demo.com",
    "featured": true,
    "status": "completed",
    "createdAt": "2024-01-15",
    "category": "web"
  }
]
```
*(复制此结构，创建 8 个不同的项目，category 分布: web×3, app×2, tool×2, other×1)*

#### 📝 posts.json (8 篇示例博客)
```json
[
  {
    "id": "react-performance-tips",
    "title": "React 性能优化实战：从 3s 到 0.8s 的加载优化之路",
    "slug": "react-performance-tips",
    "excerpt": "本文记录了我将一个 React 应用首屏加载时间从 3 秒优化到 0.8 秒的完整过程，涵盖代码分割、懒加载、缓存策略等核心技术...",
    "content": "# React 性能优化实战\n\n## 为什么需要性能优化？\n\n在当今快节奏的互联网时代...\n\n\`\`\`javascript\n// 代码示例\nconst LazyComponent = React.lazy(() => import('./HeavyComponent'));\n\`\`\`\n\n> **提示**: 性能优化是一个持续的过程...",
    "coverImage": "/images/posts/react-performance.jpg",
    "category": "前端开发",
    "tags": ["React", "性能优化", "Webpack"],
    "publishedAt": "2024-02-20T08:00:00Z",
    "readingTime": 8
  }
]
```
*(创建 8 篇文章，category: 前端×3, 后端×2, 工具×2, 生活×1)*

#### 📝 skills.json (15 个技能)
```json
[
  {"name": "React", "level": 95, "category": "frontend"},
  {"name": "TypeScript", "level": 90, "category": "frontend"},
  {"name": "Next.js", "level": 85, "category": "frontend"},
  {"name": "TailwindCSS", "level": 92, "category": "frontend"},
  {"name": "Vue.js", "level": 78, "category": "frontend"},
  {"name": "Node.js", "level": 88, "category": "backend"},
  {"name": "Python", "level": 75, "category": "backend"},
  {"name": "PostgreSQL", "level": 80, "category": "backend"},
  {"name": "Docker", "level": 82, "category": "devops"},
  {"name": "AWS", "level": 70, "category": "devops"},
  {"name": "Git", "level": 95, "category": "tools"},
  {"name": "Figma", "level": 72, "category": "tools"},
  {"name": "VS Code", "level": 98, "category": "tools"},
  {"name": "Linux", "level": 78, "category": "tools"},
  {"name": "MongoDB", "level": 76, "category": "backend"}
]
```

#### ✅ 验收标准
- [ ] 4 个 JSON 文件语法正确（可通过 JSONLint 验证）
- [ ] personal.json 包含 name, title (数组), bio, socialLinks
- [ ] projects.json 至少包含 8 个项目，至少 3 个 featured: true
- [ ] posts.json 至少包含 8 篇文章，content 字段包含 Markdown 格式
- [ ] skills.json 包含 15 个技能，level 范围 70-98

---

## Phase 2: 设计系统 (UI 组件库)

---

### ✅ Task 2.1: Button 按钮组件

#### 🎨 最终效果（精确视觉规格）

##### Variant: Primary（主要按钮）
```
尺寸: 
  - 高度: 48px (padding: 12px 32px)
  - 圆角: 9999px (完全胶囊形)
  - 内边距: 水平 32px, 垂直 12px
  
正常状态:
  - 背景: #00ffc8 (实心)
  - 文字: #0a0a0a (深黑)
  - 字体: font-semibold (600 weight)
  - 字号: 0.875rem (14px)
  - 阴影: 0 4px 15px rgba(0,255,200,0.3)
  
悬停状态 (transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1)):
  - 背景: #00e6b4 (稍深的青色)
  - transform: translateY(-2px) (上浮 2px)
  - 阴影: 0 8px 25px rgba(0,255,200,0.4) (增强扩散)
  - box-shadow 增加 glow 效果
  
按下状态 (active):
  - transform: translateY(0) (回到底部)
  - scale: 0.97 (轻微缩小)
  
聚焦状态 (focus-visible):
  - outline: 2px solid #00ffc8
  - outline-offset: 2px
```

##### Variant: Secondary（次要按钮）
```
正常状态:
  - 背景: transparent (透明)
  - 边框: 1px solid rgba(255,255,255,0.2)
  - 文字: #f5f5f5 (浅白)
  
悬停状态:
  - 边框: 1px solid #00ffc8 (变为青色)
  - 文字: #00ffc8 (变为青色)
  - 背景: rgba(0,255,200,0.05) (极淡的青色填充)
```

##### Variant: Ghost（幽灵按钮）
```
正常状态:
  - 背景: transparent
  - 边框: none
  - 文字: #888888 (灰色)
  
悬停状态:
  - 文字: #f5f5f5 (变亮)
  - 背景: rgba(255,255,255,0.05)
```

##### Size 变体
```
sm: height 36px, padding 8px 20px, font-size 13px
md: height 48px, padding 12px 32px, font-size 14px (默认)
lg: height 56px, padding 16px 40px, font-size 16px
```

#### 📍 文件位置: `src/components/ui/Button.jsx`

#### 💡 使用示例
```jsx
<Button variant="primary" size="lg">
  开始探索
</Button>

<Button variant="secondary">
  了解更多
</Button>
```

#### ✅ 验收标准
- [ ] 三种 variant (primary/secondary/ghost) 样式正确
- [ ] 三种 size (sm/md/lg) 尺寸正确
- [ ] 悬停时 primary 按钮上浮 2px + 阴影扩散
- [ ] 按下时按钮缩小至 0.97
- [ ] 键盘 Tab 聚焦时显示 2px 青色 outline

---

### ✅ Task 2.2: Card 卡片组件（玻璃态）

#### 🎨 最终效果

##### 默认状态 (Glass Card)
```
尺寸:
  - 圆角: 16px (rounded-2xl)
  - 内边距: 24px (p-6)
  
背景效果:
  - background: rgba(255, 255, 255, 0.05) (5% 白色透明度)
  - backdrop-filter: blur(12px) (12px 高斯模糊)
  - -webkit-backdrop-filter: blur(12) (Safari 兼容)
  - border: 1px solid rgba(255, 255, 255, 0.1) (10% 白色边框)
  
视觉特征:
  - 看起来像磨砂玻璃
  - 后面有内容时会模糊透出
  - 边框极其微妙，几乎不可见但在光线下可见
```

##### 悬停状态 (Hover)
```
过渡: all 300ms cubic-bezier(0.4, 0, 0.2, 1)

变化:
  - transform: translateY(-8px) (向上浮动 8px)
  - border-color: rgba(0, 255, 200, 0.3) (边框变为 30% 青色)
  - box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.3),  (主阴影)
    0 0 30px rgba(0, 255, 200, 0.1)   (青色光晕)
  - background: rgba(255, 255, 255, 0.08) (透明度增至 8%)
```

##### 可选: Gradient Border（渐变边框变体）
```
伪元素实现 (::before):
  - 绝对定位覆盖整个卡片
  - padding: 1px (边框厚度)
  - background: linear-gradient(
      135deg, 
      rgba(0,255,200,0.5) 0%, 
      transparent 50%, 
      rgba(0,255,200,0.3) 100%
    ) (135 度对角线渐变)
  - mask: 使用 content-box 镂空中心，只保留边框
  - pointer-events: none (不影响交互)
  - border-radius: 继承父元素
```

#### 📍 文件位置: `src/components/ui/Card.jsx`

#### Props 接口
```typescript
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;           // 是否启用悬停效果 (default: true)
  gradientBorder?: boolean;  // 是否启用渐变边框 (default: false)
  onClick?: () => void;      // 点击事件 (可选)
}
```

#### ✅ 验收标准
- [ ] 卡片呈现玻璃态效果（背景模糊可见）
- [ ] 悬停时卡片上浮 8px
- [ ] 悬停时边框发出微弱青色光晕
- [ ] `gradientBorder={true}` 时显示渐变边框
- [ ] 点击事件正常触发

---

### ✅ Task 2.3: Tag 标签组件

#### 🎨 最终效果

##### 默认状态
```
尺寸:
  - 高度: 28px (内联元素)
  - 内边距: 4px 12px (水平 12px, 垂直 4px)
  - 圆角: 9999px (完全圆角胶囊形)
  
样式:
  - 背景: rgba(0, 255, 200, 0.1) (10% 青色透明)
  - 边框: 1px solid rgba(0, 255, 200, 0.2) (20% 青色)
  - 文字: #00ffc8 (青色)
  - 字号: 0.75rem (12px)
  - 字体: font-medium (500 weight)
  - 行内块显示 (inline-flex)
```

##### 悬停状态
```
过渡: all 150ms ease

变化:
  - 背景: rgba(0, 255, 200, 0.2) (透明度翻倍)
  - border-color: rgba(0, 255, 200, 0.4) (边框加深)
  - transform: scale(1.05) (放大 5%)
  - box-shadow: 0 0 10px rgba(0,255,200,0.2) (发光)
```

##### 可选 Color Variants
```
default: 青色系 (如上)
secondary: 灰色系 (bg: rgba(255,255,255,0.1), text: #888)
accent: 紫色系 (bg: rgba(168,85,247,0.1), text: #a855f7)
success: 绿色系 (bg: rgba(34,197,94,0.1), text: #22c55e)
warning: 黄色系 (bg: rgba(234,179,8,0.1), text: #eab308)
danger: 红色系 (bg: rgba(239,68,68,0.1), text: #ef4444)
```

#### 📍 文件位置: `src/components/ui/Tag.jsx`

#### ✅ 验收标准
- [ ] 默认标签为青色胶囊形状
- [ ] 悬停时标签放大 5% + 发光
- [ ] 支持 5 种颜色变体
- [ ] 多个标签横向排列时间距 8px (gap-2)

---

### ✅ Task 2.4: SectionHeading 章节标题组件

#### 🎨 最终效果

##### 视觉结构
```
┌─────────────────────────────────────┐
│                                     │
│        我的技能栈                    │  ← 主标题 (H2)
│                                     │
│  ─━━━━━━●━━━━━━━━━━━━━━━━━         │  ← 装饰线 + 圆点
│  Skills & Expertise                │  ← 副标题 (英文, muted 色)
│                                     │
└─────────────────────────────────────┘
```

##### 详细规格
```
容器:
  - text-align: center (居中)
  - margin-bottom: 48px (mb-12)

主标题 (H2):
  - 字体: Syne (font-heading)
  - 字号: 2.25rem (text-3xl) / mobile: 1.875rem (text-2xl)
  - 字重: 700 (font-bold)
  - 颜色: #f5f5f5 (text-light)
  - margin-bottom: 16px (mb-4)

装饰线:
  - 宽度: 80px (w-20)
  - 高度: 3px (h-[3px])
  - 颜色: linear-gradient(90deg, transparent, #00ffc8, transparent)
  - 居中显示 (mx-auto)
  - margin-bottom: 16px (mb-4)
  - border-radius: 2px (rounded-sm)
  - 中间有一个圆形节点:
    - 直径: 8px (w-2 h-2)
    - 背景: #00ffc8
    - 圆形 (rounded-full)
    - 绝对定位在线条正中央
    - box-shadow: 0 0 10px rgba(0,255,200,0.5) (发光)

副标题:
  - 字体: DM Sans (font-sans)
  - 字号: 0.875rem (text-sm)
  - 字重: 400 (font-normal)
  - 颜色: #888888 (text-muted)
  - letter-spacing: 2px (tracking-wider) (字母间距加宽)
  - text-transform: uppercase (全大写)
```

##### 对齐变体
```
align="center" (默认): 如上所述
align="left": 
  - 文本左对齐
  - 装饰线左对齐（从左侧开始）
```

#### 📍 文件位置: `src/components/ui/SectionHeading.jsx`

#### ✅ 验收标准
- [ ] 标题居中显示，Syne 字体，粗体
- [ ] 下方有 80px 宽的渐变装饰线
- [ ] 装饰线中央有 8px 发光圆点
- [ ] 副标题为小号大写灰色英文字母
- [ ] align="left" 时整体左对齐

---

### ✅ Task 2.5: Badge 徽章组件

#### 🎨 最终效果

##### 类型: Date Badge（日期徽章）
```
尺寸:
  - 内边距: 4px 12px
  - 圆角: 6px (rounded-md)
  
样式:
  - 背景: rgba(0, 255, 200, 0.15)
  - 文字: #00ffc8
  - 字号: 0.75rem (12px)
  - 字体: font-medium
  
内容格式:
  - "2024年01月15日" 或 "Jan 15, 2024"
  - 可配置日期格式化方式
```

##### 类型: Status Badge（状态徽章）
```
Completed (已完成):
  - 背景: rgba(34, 197, 94, 0.15) (绿色 15%)
  - 文字: #22c55e (绿色)
  - 图标: ✓ (Check icon)
  
In-Progress (进行中):
  - 背景: rgba(234, 179, 8, 0.15) (黄色 15%)
  - 文字: #eab308 (黄色)
  - 图标: ○ (Loading spinner or dot)
  
Draft (草稿):
  - 背景: rgba(136, 136, 136, 0.15) (灰色 15%)
  - 文字: #888888 (灰色)
```

#### 📍 文件位置: `src/components/ui/Badge.jsx`

#### ✅ 验收标准
- [ ] 日期徽章显示青色背景
- [ ] 状态徽章支持三种状态（完成/进行中/草稿）
- [ ] 徽章尺寸紧凑，适合放在卡片角落

---

### ✅ Task 2.6: 动画工具函数库

#### 🎨 最终效果
提供一组 Framer Motion 动画变体预设，可在任何组件中直接导入使用。

#### 📍 文件位置: `src/utils/animations.js`

#### 📝 完整代码与效果说明

```javascript
import { motion } from 'framer-motion';

// ============================================
// 1. 淡入上移动画 (Fade In Up)
// 效果: 元素从下方 30px 处淡入出现
// 用途: 卡片入场、文本段落、列表项
// ============================================
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } // easeOutExpo
};

// ============================================
// 2. 淡入下移动画 (Fade In Down)
// 效果: 元素从上方 30px 处淡入
// 用途: 下拉菜单、通知消息
// ============================================
export const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

// ============================================
// 3. 缩放弹入动画 (Scale In)
// 效果: 元素从 80% 大小缩放到 100%
// 用途: 弹窗、模态框、图片
// ============================================
export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
};

// ============================================
// 4. 容器交错动画 (Stagger Container)
// 效果: 子元素按顺序依次延迟出现
// 用途: 技能列表、项目网格、标签组
// 参数: staggerDelay (每项延迟毫秒数, default: 100)
// ============================================
export const staggerContainer = (staggerDelay = 100) => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren: staggerDelay / 1000 // 转换为秒
    }
  }
});

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

// ============================================
// 5. 页面切换动画 (Page Transition)
// 效果: 新页面从右侧 20px 处淡入
// 用途: 路由切换时的页面过渡
// ============================================
export const pageTransition = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
  transition: { duration: 0.4, ease: 'easeInOut' }
};

// ============================================
// 6. 滚动触发动画 (Scroll Reveal)
// 效果: 元素进入视口时触发动画
// 用途: 长页面中的内容区块
// 触发条件: 元素 20% 进入视口时开始
// 只触发一次 (triggerOnce: true)
// ============================================
export const scrollReveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 }, // once: 只触发一次, amount: 20%可见时触发
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

// ============================================
// 7. 悬停卡片效果 (Card Hover)
// 效果: 悬停时上浮 + 阴影增强
// 用途: 所有卡片组件
// ============================================
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

// ============================================
// 8. 按钮按压效果 (Button Press)
// 效果: 按下时缩小，释放时恢复
// 用途: 所有按钮组件
// ============================================
export const buttonPress = {
  whileTap: { scale: 0.97 },
  whileHover: { scale: 1.02, y: -2 }
};

// ============================================
// 9. 光晕脉冲动画 (Glow Pulse)
// 效果: 阴影强度周期性变化
// 用途: CTA 按钮、重要元素强调
// ============================================
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

// ============================================
// 10. 打字机效果配置 (Typewriter Config)
// ============================================
export const typewriterConfig = {
  speed: 80,        // 打字速度 (ms/字符)
  deleteSpeed: 50,  // 删除速度 (ms/字符)
  pauseTime: 2000,  // 停留时间 (ms)
  cursorChar: '|',  // 光标字符
  loop: true,       // 是否循环
  shuffle: false    // 是否随机打乱顺序
};
```

#### ✅ 验收标准
- [ ] 导出 10 组动画变体/配置
- [ ] `fadeInUp` 使元素从下方 30px 淡入，持续 0.6s
- [ ] `staggerContainer(100)` 使子元素每隔 100ms 依次出现
- [ ] `scrollReveal` 在元素进入视口 20% 时触发且只触发一次
- [ ] `cardHover` 悬停时 scale 1.03 + 阴影增强

---

*(由于篇幅限制，Phase 3-10 的详细任务拆分将在下一部分继续...)*

---

## 📊 当前进度总结

| Phase | 任务数量 | 当前状态 |
|-------|---------|----------|
| **Phase 1: 项目骨架** | 5 tasks | ✅ 已详细定义 (Task 1.1 - 1.5) |
| **Phase 2: 设计系统** | 6 tasks | ✅ 已详细定义 (Task 2.1 - 2.6) |
| **Phase 3: 导航系统** | 4 tasks | ⏳ 待定义 |
| **Phase 4: Hero 区域** | 8 tasks | ⏳ 待定义 |
| **Phase 5-10** | 34 tasks | ⏳ 待定义 |

**已完成**: 11 个任务的像素级定义  
**剩余**: 46 个任务待定义

---

## 🚀 下一步行动

您希望我继续定义剩余的 46 个任务吗？还是先开始实施这 11 个已定义的任务？

**选项 A**: 继续完善文档，定义全部 57 个任务（预计再需 3000+ 行）  
**选项 B**: 先开始编码，实施 Task 1.1 - 1.5（项目初始化）  
**选项 C**: 选择特定 Phase 优先定义（例如只看 Phase 4 Hero 区域的 8 个任务）

请告诉我您的选择！🎯
