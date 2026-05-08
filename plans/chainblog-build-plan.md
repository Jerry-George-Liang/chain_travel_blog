# 个人博客构建计划 (ChainBlog) - 交互增强版

> 📅 创建时间: 2024年  
> 🎯 目标: 构建一个**视觉惊艳 + 高度交互**的个人博客（纯前端静态站点）  
> 🚀 技术栈: React 18 + Vite 5 + Tailwind CSS 3 + Framer Motion  
> ✨ 核心特色: **丰富交互、高级动画、玻璃态设计、游戏化体验**  

---

## 🎮 交互功能总览 (15+ 个可交互模块)

### 🔥 **核心交互 (必须实现)**

#### 1️⃣ **Hero 区域 - 粒子背景交互**
- **交互方式**: 鼠标移动影响粒子运动轨迹
- **效果**: 粒子跟随鼠标聚集/散开，产生磁场效应
- **技术**: Canvas + requestAnimationFrame + 鼠标坐标追踪
- **性能**: 限制粒子数量 ≤ 100，使用 GPU 加速

#### 2️⃣ **3D 卡片倾斜效果**
- **应用场景**: 项目卡片、文章卡片、技能卡片
- **交互方式**: 鼠标在卡片上移动时，卡片沿 X/Y 轴微旋转 (max ±15°)
- **视觉效果**: 
  - 透视变形 (perspective: 1000px)
  - 高光跟随鼠标位置移动
  - 边缘发光强度随倾斜角度变化
- **实现**: Framer Motion `useMotionValue` + `useSpring`

#### 3️⃣ **打字机效果 - 可点击切换**
- **交互方式**: 
  - 自动循环播放不同职位描述
  - 用户可**点击文字**手动切换到下一个
  - 悬停时**暂停动画**
- **状态指示**: 显示当前第几个/总共几个 (如 "2/4")
- **配置**: 打字速度、删除速度、停顿时间均可调

#### 4️⃣ **智能导航栏**
- **滚动交互**: 
  - 滚动距离 > 50px → 背景模糊 + 半透明
  - 滚动到对应 section → 导航项高亮（Scroll Spy）
- **移动端交互**: 
  - 汉堡菜单 → 右侧滑入面板
  - 面板内链接点击 → 平滑关闭 + 页面跳转
  - 点击遮罩层 → 关闭菜单
- **键盘快捷键**: 
  - `Esc` 关闭移动端菜单
  - `/` 聚焦搜索框（如有）

#### 5️⃣ **项目筛选器 - 动画过渡**
- **交互方式**: 点击标签按钮筛选项目类别
- **动画效果**:
  - 退出动画: 不匹配的项目缩小淡出 (scale: 1 → 0.8, opacity: 0)
  - 进入动画: 新项目依次弹入 (stagger 80ms, spring animation)
  - 布局过渡: AnimatePresence + layoutId 实现流畅重排
- **空状态**: 无匹配项时显示趣味插画 + "暂无此类项目"

#### 6️⃣ **博客文章 - 互动阅读体验**
- **目录导航交互**:
  - 侧边固定目录（桌面端）
  - 当前阅读章节**自动高亮** (Intersection Observer)
  - 点击目录项 → **平滑滚动**到对应标题
  - 滚动页面 → 目录同步更新高亮
- **代码块交互**:
  - 右上角**复制按钮** → 点击复制代码 + Toast 提示 "已复制!"
  - 显示编程语言标签 (JavaScript, Python, etc.)
  - 行号显示
  - 代码折叠（长代码块可选）
- **图片交互**:
  - 点击图片 → **Lightbox 全屏查看**
  - Lightbox 内支持: 左右切换、键盘 ESC 关闭、手势滑动(移动端)
  - 图片加载失败 → 显示占位符 + 重试按钮

---

### 💎 **高级交互 (强烈推荐)**

#### 7️⃣ **技能矩阵 - 可探索的交互式图谱**
- **基础版**: 进度条动画（进入视口触发填充）
- **进阶版 (推荐)**:
  - **气泡图布局**: 每个技能是一个圆形气泡
    - 大小 = 熟练度
    - 颜色 = 类别（前端/后端/工具）
    - 位置 = 随机但避免重叠
  - **悬停交互**:
    - 气泡放大 1.2x + 发光
    - 显示 tooltip: 技能名称 + 熟练度百分比 + 简短描述
    - 其他气泡变暗 (focus effect)
  - **点击交互**:
    - 点击气泡 → 展开详情卡片
    - 显示相关项目列表（使用该技术的项目）
    - 再次点击收起

#### 8️⃣ **时间线 - 可展开的故事线**
- **视觉设计**: 垂直时间线 + 圆点脉冲动画
- **交互功能**:
  - **展开/收起**: 点击时间节点 → 展开/折叠详情内容
  - 默认收起（只显示标题+日期），节省空间
  - 展开动画: 高度从 0 → auto (Framer Motion layout animation)
- **特殊标记**: 
  - "当前" 节点：特殊颜色 + "进行中" 徽章
  - 重要节点：星星图标 + 放大圆点

#### 9️⃣ **项目详情 - 图片画廊**
- **画廊模式**: 
  - 缩略图网格 (2列或3列)
  - 点击 → 全屏 Lightbox 查看
- **Lightbox 功能**:
  - 左右箭头切换图片
  - 底部缩略图快速跳转
  - 图片计数器 (如 "3 / 8")
  - 键盘支持 (← → Esc)
  - 手势支持 (左右滑动, 双指缩放 - 移动端)
  - Pinch-to-zoom (移动端图片放大)
- **预加载**: 当前图片前后各预加载 1 张

#### 🔟 **文章互动功能 (本地存储)**
- **阅读进度条**:
  - 文章顶部细长进度条 (fixed top, below navbar)
  - 颜色: #00ffc8 渐变
  - 宽度 = (当前滚动位置 / 文章总高度) * 100%
  - 平滑更新 (CSS transition)
- **点赞按钮** ❤️:
  - 点击 → 心形图标填充 + 数字 +1
  - 动画: 心形跳动 (scale: 1 → 1.3 → 1)
  - 数据持久化: localStorage (刷新不丢失)
  - 再次点击取消点赞
- **收藏功能** ⭐:
  - 点击星标 → 收藏文章
  - 收藏夹页面（或 dropdown）显示已收藏文章列表
  - localStorage 存储
- **分享按钮**:
  - 点击弹出分享面板
  - 选项: 复制链接、Twitter、Facebook、LinkedIn
  - 复制链接 → Toast "链接已复制!"

#### 1️⃣1️⃣ **全局搜索功能** ⭐
- **触发方式**: 
  - 导航栏搜索图标点击 → 展开搜索框
  - 快捷键 `Ctrl/Cmd + K` (Command Palette 风格)
- **UI 设计**:
  - 全屏半透明黑色遮罩
  - 居中搜索输入框 (大号, placeholder "搜索项目、文章...")
  - 实时搜索结果下拉列表
- **搜索范围**:
  - 项目标题 + 描述 + 技术栈
  - 文章标题 + 摘要 + 标签
- **交互细节**:
  - 输入时 debounce 300ms 后搜索
  - 结果高亮匹配关键词
  - 键盘上下箭头选择结果
  - Enter 跳转 / Esc 关闭
  - 无结果时显示 "未找到相关内容"
- **动画**: 搜索框从上方滑入 + 结果列表依次淡入

#### 1️⃣2️⃣ **主题切换器 (暗色 ↔ 亮色)**
- **UI 位置**: 导航栏右侧（太阳/月亮图标按钮）
- **交互方式**: 点击切换主题
- **动画效果**:
  - 图标旋转 180° 过渡
  - 所有 CSS 变量平滑过渡 (transition: all 0.3s)
  - 背景色渐变过渡
- **存储**: localStorage 记住用户选择
- **亮色主题配色**:
  - 背景: #fafafa (浅灰白)
  - 文字: #1a1a1a (深灰黑)
  - 强调色保持 #00ffc8 (青色通用)
  - 卡片: 白色背景 + 细阴影

#### 1️⃣3️⃣ **返回顶部按钮**
- **触发条件**: 滚动距离 > 500px 时出现
- **出现动画**: 从右侧滑入 + fade in (translateX(100%) → 0)
- **悬停效果**: 图标变为 #00ffc8 + 轻微上浮
- **点击行为**: 
  - 平滑滚动到顶部 (smooth scroll, duration 800ms)
  - 滚动过程中按钮旋转箭头图标
- **额外功能**: 显示当前滚动百分比 (如 "23%")

#### 1️⃣4️⃣ **数字统计动画 (首页)**
- **展示内容**: 
  - 项目数量 (如 "12+")
  - 文章数量 (如 "30+")
  - 经验年数 (如 "5+")
  - GitHub Stars (如 "1.2k")
- **交互时机**: 滚动到该区域时触发
- **动画效果**: 
  - 数字从 0 开始递增到目标值
  - 持续时间: 2s
  - 使用 `requestAnimationFrame` 或 Framer Motion `useInView`
  - 缓动函数: easeOutExpo (开始快，结束慢)
- **额外装饰**: 数字变化时有微妙的光效闪烁

#### 1️⃣5️⃣ **联系表单 (About 页面)**
- **字段**: 姓名、邮箱、消息内容、提交按钮
- **交互验证**:
  - 实时验证 (onBlur + debounce onChange)
  - 邮箱格式检查
  - 必填字段非空验证
  - 字符数限制 (消息最多 500 字)
- **视觉反馈**:
  - 有效: 边框变绿 ✓
  - 无效: 边框变红 ✗ + 震动动画 + 错误提示
  - 聚焦: 浮动标签上升 + 边框变 primary 色
- **提交交互**:
  - 点击 → 按钮 loading spinner
  - 模拟发送成功 (纯前端无后端)
  - 成功: 绿色勾选 + "消息已收到!" Toast (3s 后消失)
  - 表单重置
- **注意**: 明确提示用户这是演示表单（实际不会发送）

---

### 🌟 **锦上添花 (超出预期)**

#### 1️⃣6️⃣ **鼠标跟随光晕效果**
- **效果**: 一个柔和的径向渐变光圈跟随鼠标移动
- **应用范围**: Hero 区域或整个网站
- **实现**: 
  - 固定定位的 div (pointer-events: none)
  - onMouseMove 更新位置
  - CSS: radial-gradient(circle, rgba(0,255,200,0.15) 0%, transparent 70%)
  - mix-blend-mode: screen (混合模式)
- **性能**: 使用 transform 移动 (GPU 加速)，避免 layout thrashing
- **移动端禁用**: 仅 desktop (> 1024px) 启用

#### 1️⃣7️⃣ **页面加载进度条**
- **位置**: 页面最顶部 (fixed, z-index: 9999)
- **行为**: 
  - 路由切换开始 → 进度条从 0% 开始增长
  - 页面加载完成 → 进度条快速到 100% 并消失
  - 使用 NProgress 库或自定义实现
- **样式**: 细线条 (height: 3px), 颜色 #00ffc8, ease-in-out 缓动

#### 1️⃣8️⃣ **自定义光标 (Desktop only)**
- **默认状态**: 小圆点 (8px) + 外圈 (32px, 透明度 0.5)
- **悬停链接/按钮**: 圆点变大 (12px) + 外圈放大 (48px) + 颜色变 primary
- **悬停文本**: 变成竖线 (I-beam) 样式
- **点击效果**: 外圈收缩再反弹 (ripple)
- **注意**: 必须提供系统默认光标的 fallback

#### 1️⃣9️⃣ **背景音乐播放器 (可选)**
- **位置**: 固定右下角圆形按钮
- **交互**:
  - 点击播放/暂停
  - 音量滑块控制
  - 歌曲名显示 (tooltip)
  - 进度条 (可选)
- **自动播放策略**: 
  - 首次访问不自动播放（浏览器阻止）
  - 用户首次点击后记住偏好
- **音频文件**: 放置在 public/audio/ 目录

#### 2️⃣0️⃣ **Confetti 庆祝动画**
- **触发时机**: 
  - 访问特定隐藏路径 (如 /easteregg)
  - 完成某个"成就"（如浏览所有页面）
  - 点击 Logo 10 次
- **效果**: 彩色纸屑从屏幕顶部洒落
- **库**: canvas-confetti 或自写简单版本
- **性能**: 持续时间 3-5 秒后自动清理

---

## 📊 交互功能优先级矩阵

| 功能 | 视觉冲击 | 开发难度 | 用户价值 | 推荐度 |
|------|----------|----------|----------|--------|
| **3D 卡片倾斜** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ **必做** |
| **粒子背景交互** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ **必做** |
| **智能导航栏** | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ **必做** |
| **项目筛选动画** | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ **必做** |
| **全局搜索** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 💎 **强推** |
| **技能交互图谱** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 💎 **强推** |
| **Lightbox 画廊** | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | 💎 **强推** |
| **文章互动** (点赞/收藏) | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ | 💎 **强推** |
| **主题切换** | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ | 💎 **强推** |
| **数字统计动画** | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | 🌟 推荐 |
| **鼠标光晕** | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | 🌟 推荐 |
| **自定义光标** | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | 🌟 推荐 |

---

## 🎯 推荐的 MVP 交互集合 (v1.0)

为了平衡开发时间和用户体验，建议 **v1.0 版本**实现以下 **10 个核心交互**:

### ✅ Tier A: 核心体验 (6个 - 必须有)
1. ✅ **3D 卡片倾斜效果** (所有卡片组件)
2. ✅ **智能导航栏** (滚动模糊 + Scroll Spy + 移动端菜单)
3. ✅ **项目筛选动画** (AnimatePresence 过渡)
4. ✅ **Lightbox 图片画廊** (项目详情页)
5. ✅ **代码块复制 + 高亮** (博客文章)
6. ✅ **返回顶部按钮** (带滚动百分比)

### ✅ Tier B: 差异化亮点 (4个 - 强烈推荐)
7. ✅ **粒子背景交互** (Hero 区域)
8. ✅ **全局搜索功能** (Command Palette 风格)
9. ✅ **技能交互图谱** (气泡图 + Tooltip)
10. ✅ **数字统计动画** (首页数据展示)

### 📌 Tier C: v1.1 迭代 (6个 - 后续优化)
11. ⏸️ 主题切换器 (暗色/亮色)
12. ⏸️ 文章互动 (点赞/收藏/分享)
13. ⏸️ 鼠标跟随光晕
14. ⏸️ 自定义光标
15. ⏸️ 阅读进度条
16. ⏸️ Confetti 彩蛋

---

## 🔧 执行阶段调整 (基于交互功能)

```
Phase 1: 基础设施 [Step 1-2]        ⏱️ 30 min
    ↓
Phase 2: 布局与核心交互 [Step 3-4] ⏱️ 50 min  ← 增加: 智能导航栏
    ↓
Phase 3: 首页 + Hero 交互 [Step 5-6] ⏱️ 70 min  ← 增加: 粒子交互 + 3D卡片 + 统计动画
    ↓
Phase 4: 内容页面交互 [Step 7-9]   ⏱️ 90 min  ← 增加: 技能图谱 + 筛选动画 + Lightbox
    ↓
Phase 5: 博客增强交互 [Step 9.5]    ⏱️ 30 min  ← 新增: 代码复制 + 目录导航 + 搜索
    ↓
Phase 6: 全局交互功能 [Step 10]     ⏱️ 40 min  ← 新增: 返回顶部 + 主题切换(可选)
    ↓
Phase 7: 错误处理与优化 [Step 11-12] ⏱️ 30 min
    
总预计时间: ~5-6 小时（并行可缩短至 3.5-4 小时）
```

---

## 📝 详细步骤 (仅列出与原计划的差异部分)

> **注意**: Step 1-4, Step 7-9 的基础部分与原计划相同，此处仅补充**新增的交互功能**

---

### **Step 5: Hero 英雄区域 (交互增强版)**

#### 🆕 新增任务: 粒子背景交互系统
```javascript
// hooks/useParticleBackground.js
// 实现:
// 1. Canvas 初始化 + 粒子类定义 (x, y, vx, vy, radius, opacity)
// 2. 鼠标位置追踪 (onMouseMove)
// 3. 粒子更新逻辑:
//    - 正常状态: 缓慢漂浮 + 微妙连线 (距离 < 100px 的粒子间画线)
//    - 鼠标靠近 (< 150px): 粒子被吸引/排斥 (可配置)
// 4. 动画循环 (requestAnimationFrame)
// 5. 性能优化:
//    - 限制粒子数量 60-80 个
//    - 使用 devicePixelRatio 适配高清屏
//    - 页面不可见时暂停 (visibilitychange event)
```

#### 🆕 新增任务: 3D 卡片倾斜 Hook
```javascript
// hooks/useTilt.js
// 实现:
// 1. onMouseMove: 计算鼠标相对于卡片中心的角度和距离
// 2. 应用 rotateX/rotateY (最大 ±15°)
// 3. 添加高光渐变 (跟随鼠标位置的 radial-gradient)
// 4. onMouseLeave: 重置为初始状态 (spring 动画)
// 5. 支持 touch 设备 (基于陀螺仪 or 禁用)
```

---

### **Step 6: 首页内容区 (交互增强)**

#### 🆕 新增任务: 数字统计动画组件
```jsx
// components/home/StatsCounter.jsx
// 功能:
// 1. 接收目标数值 (target: number)
// 2. useInView 监测是否进入视口
// 3. 进入视口后启动数字递增动画
// 4. 使用 requestAnimationFrame + easing 函数
// 5. 显示格式: "12+" / "1.2k" / "5 Years"
// 样式:
// - 大号数字 (text-4xl md:text-5xl font-bold text-primary)
// - 标签文字 (text-muted)
// - 网格布局 (grid-cols-2 md:grid-cols-4)
```

---

### **Step 7: 关于我页面 (交互增强)**

#### 🆕 替换: 技能进度条 → 交互式技能图谱
```jsx
// components/about/SkillsInteractive.jsx
// 布局方案: 气泡图 (Bubble Chart)
// 实现:
// 1. 数据准备: 将 skills.json 转换为 {x, y, r, color, label} 数组
//    - x, y: 随机位置 (使用简单的碰撞检测避免重叠)
//    - r: 基于 level 计算 (level 100 → r=50px, level 50 → r=30px)
//    - color: 基于 category 映射 (frontend=#00ffc8, backend=#ff6b6b, ...)
// 2. 渲染: SVG <circle> 元素或绝对定位 div
// 3. 交互:
//    - hover: scale(1.2) + filter drop-shadow + show tooltip
//    - click: 展开 detail card (使用 portal 渲染到 body)
// 4. 动画: 初始状态 bubble scale(0) → staggered pop-in
```

#### 🆕 增强: 时间线可展开
```jsx
// components/about/TimelineInteractive.jsx
// 新增功能:
// 1. 每个 timeline item 默认高度 collapsed (仅显示 title + date)
// 2. 点击 toggle button → 展开 full content
// 3. 使用 Framer Motion AnimatePresence + layout 动画
// 4. Chevron 图标旋转指示展开/收起状态
```

---

### **Step 8: 项目页面 (交互增强)**

#### 🆕 增强: 项目筛选动画升级
```jsx
// 使用 AnimatePresence 实现布局过渡
<AnimatePresence mode="popLayout">
  {filteredProjects.map(project => (
    <motion.div
      key={project.id}
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <ProjectCard project={project} />  // 已集成 useTilt
    </motion.div>
  ))}
</AnimatePresence>
```

#### 🆕 新增: Lightbox 图片画廊
```jsx
// components/project/LightboxGallery.jsx
// 功能:
// 1. 点击缩略图 → 打开全屏 modal
// 2. Modal 内容:
//    - 大图居中显示 (max-height: 90vh, object-fit: contain)
//    - 左右箭头按钮 (prev/next image)
//    - 底部缩略图条 (横向滚动)
//    - 图片计数器 "3 / 8"
//    - 关闭按钮 (X) + ESC 键
// 3. 动画:
//    - 打开: 从缩略图位置放大到全屏 (layout animation)
//    - 切换: 左右 slide + fade
//    - 关闭: 缩小回缩略图位置
// 4. 手势支持 (touch events):
//    - 左右滑动切换
//    - pinch zoom (两指缩放)
//    - tap 关闭
```

---

### **Step 9.5: 博客增强交互 (新步骤)**

#### 🎯 目标
为博客系统添加专业级的阅读交互体验。

#### 📝 任务清单

##### A. 代码块增强 (`components/blog/CodeBlock.jsx`)
- [ ] **语法高亮**: rehype-prism-plus (支持 200+ 语言)
- [ ] **复制按钮**: 
  - 右上角图标按钮
  - 点击 → 复制代码到剪贴板
  - 成功反馈: 图标变为 ✓ + 2s 后恢复
  - Toast 提示 "代码已复制!"
- [ ] **语言标签**: 左上角显示语言名称 (e.g., "JavaScript")
- [ ] **行号显示**: 可选开启/关闭
- [ ] **行高亮**: 点击行号高亮该行 (用于说明)
- [ ] **代码折叠**: 超过 20 行的长代码块显示 "展开/收起"

##### B. 文章目录导航 (`components/blog/TableOfContents.jsx`)
- [ ] **自动提取**: 从 Markdown 内容解析 H2/H3 标题
- [ ] **渲染**: 固定侧边栏 (desktop) 或可折叠面板 (mobile)
- [ ] **活跃状态监测**: 
  - Intersection Observer 监听每个标题是否在视口中
  - 当前阅读到的标题高亮 (左侧 primary 色竖线 + 文字变色)
- [ ] **点击跳转**: smooth scroll 到对应标题位置
- [ ] **滚动同步**: 页面滚动时自动更新高亮项
- [ ] **动画**: 切换高亮时 slide + fade 效果

##### C. 全局搜索 (`components/search/GlobalSearch.jsx`)
- [ ] **触发 UI**: 
  - Header 搜索图标 (Lucide Search)
  - 点击 → 全屏 overlay (backdrop-blur-xl bg-black/80)
  - 居中大搜索框 (w-full max-w-2xl)
- [ ] **搜索逻辑**:
  ```javascript
  // utils/search.js
  export function searchAll(query) {
    const results = [];
    
    // 搜索项目
    projects.forEach(p => {
      if (matchQuery(p.title, query) || matchQuery(p.description, query)) {
        results.push({ type: 'project', ...p });
      }
    });
    
    // 搜索文章
    posts.forEach(post => {
      if (matchQuery(post.title, query) || matchQuery(post.excerpt, query)) {
        results.push({ type: 'post', ...post });
      }
    });
    
    return results.slice(0, 10); // 限制最多 10 条结果
  }
  ```
- [ ] **结果展示**:
  - 下拉列表 (max-h-96 overflow-y-auto)
  - 每项: 类型图标 + 标题 + 匹配关键词高亮
  - 分组显示 (项目 / 文章)
  - 键盘导航 (↑↓ 选择, Enter 跳转)
- [ ] **空状态**: "未找到相关内容" + 搜索建议
- [ ] **动画**: 
  - 打开: 搜索框从上方 scale(0.95)→1 + fade in
  - 结果: staggered reveal (delay 50ms each)
  - 关闭: reverse animation

##### D. 文章互动按钮 (`components/blog/ArticleActions.jsx`)
- [ ] **点赞按钮**:
  - Heart 图标 (Lucide Heart)
  - 点击 → toggle fill + 数字±1
  - 动画: heartbeat (scale pulse)
  - 存储: localStorage key `liked_posts`
- [ ] **收藏按钮**:
  - Star 图标
  - 点击 → toggle fill
  - 存储: localStorage key `bookmarked_posts`
- [ ] **分享按钮组**:
  - 点击展开 popover/dropdown
  - 选项: 复制链接、Twitter、LinkedIn、Facebook
  - 每个选项带对应平台图标
  - 复制成功 → Toast

##### E. 阅读进度条 (`components/blog/ReadingProgress.jsx`)
- [ ] **位置**: fixed top-16 (below navbar), w-full, h-1
- [ ] **颜色**: bg-gradient-to-r from-primary to-cyan-400
- [ ] **逻辑**: 
  ```javascript
  // 监听 scroll 事件
  // 计算: (scrollTop / (scrollHeight - clientHeight)) * 100
  // 更新 progress bar width
  ```
- [ ] **性能**: throttle 16ms (约 60fps) 更新一次
- [ ] **仅在文章详情页显示**

#### ✅ 验证命令
- 打开任意博客文章
- 测试代码块复制功能
- 点击目录项确认跳转正确
- 按 `Ctrl+K` 打开搜索并输入关键词
- 点击点赞/收藏按钮，刷新页面确认状态保留

#### 🚪 退出标准
- [x] 代码块可复制且高亮正确
- [x] 目录导航实时同步阅读位置
- [x] 全局搜索可找到项目和文章
- [x] 点赞/收藏状态持久化

---

### **Step 10: 全局交互功能**

#### 🆕 新增任务清单

##### A. 返回顶部按钮 (`components/ui/BackToTop.jsx`)
- [ ] **触发条件**: window.scrollY > 500
- [ ] **样式**: 
  - 固定右下角 bottom-8 right-8
  - 圆形按钮 (w-12 h-12 rounded-full)
  - 背景: bg-primary/10 backdrop-blur, border border-primary/30
  - 图标: ArrowUp (Lucide)
  - 悬停: bg-primary text-dark + scale(1.1)
- [ ] **动画**:
  - 出现: translateX(100px) → 0 + opacity 0 → 1 (300ms)
  - 消失: 反向动画
  - 点击: 图标旋转 360° during scroll
- [ ] **额外功能**: 显示滚动百分比 (小字在图标旁边)

##### B. 主题切换器 (可选) (`components/ui/ThemeToggle.jsx`)
- [ ] **UI**: 太阳/月亮图标切换按钮
- [ ] **位置**: Navbar 右侧
- [ ] **实现**:
  - CSS 变量切换 (--bg-color, --text-color, --card-bg)
  - 两套完整变量定义 (dark theme / light theme)
  - `<html class="dark"> 或 `<html class="light">`
- [ ] **动画**: 图标 rotate-180 + 所有元素 transition 0.3s
- [ ] **存储**: localStorage.setItem('theme', 'dark'|'light')

##### C. 页面加载进度条 (`components/ui/PageLoadingBar.jsx`)
- [ ] **库**: 安装 nprogress 或自定义
- [ ] **行为**: 
  - 路由变化 start → NProgress.start()
  - 路由变化 end → NProgress.done()
- [ ] **自定义样式**: 
  ```css
  #nprogress .bar {
    background: #00ffc8 !important;
    height: 3px !important;
  }
  ```

---

## 🎨 交互设计原则

### 1. 反馈即时性 (Feedback < 100ms)
- ✅ 按钮按下: 立即 scale(0.95)
- ✅ 悬停: 150ms 内开始响应
- ✅ 加载: 立即显示 skeleton/spinner

### 2. 动画自然性 (Natural Motion)
- ✅ 使用物理缓动: spring, easeOut, cubic-bezier(0.16, 1, 0.3, 1)
- ✅ 避免线性动画 (linear 显得机械)
- ✅ 尊重 prefers-reduced-motion

### 3. 性能优先 (Performance First)
- ✅ 仅使用 transform/opacity 做动画 (GPU 加速)
- ✅ 避免 layout thrashing (读写 DOM 交替)
- ✅ 使用 will-change 谨慎 (仅在需要时)
- ✅ Intersection Observer 替代 scroll 事件监听

### 4. 可访问性 (Accessibility)
- ✅ 所有交互可通过键盘操作
- ✅ 焦点样式清晰可见
- ✅ ARIA 标签完善
- ✅ 不依赖颜色作为唯一信息传递方式

### 5. 容错性 (Graceful Degradation)
- ✅ JavaScript 失败时仍可浏览内容
- ✅ 动画降级不影响功能
- ✅ 老旧浏览器显示简化版本

---

## 📈 交互功能测试清单

### 功能测试
- [ ] 3D 卡片倾斜在不同卡片上正常工作
- [ ] 粒子背景跟随鼠标移动 (desktop)
- [ ] 项目筛选切换时动画流畅
- [ ] Lightbox 可打开/关闭/切换图片
- [ ] 代码块复制功能正常 (检查剪贴板)
- [ ] 全局搜索返回正确结果
- [ ] 点赞/收藏状态刷新后保留
- [ ] 返回顶部按钮出现/消失时机正确
- [ ] 主题切换后所有页面颜色正确
- [ ] 阅读进度条准确反映位置

### 性能测试
- [ ] 粒子动画帧率 ≥ 55 FPS
- [ ] 3D 倾斜无卡顿
- [ ] 搜索输入响应延迟 < 300ms
- [ ] 页面切换过渡流畅
- [ ] 移动端触摸交互灵敏

### 兼容性测试
- [ ] Chrome/Firefox/Safari/Edge 交互一致
- [ ] iOS Safari 触摸事件正常
- [ ] Android Chrome 手势正常
- [ ] 触屏设备 3D 倾降级为简单悬停效果

---

## 🔄 与原计划的关系

本计划是**原计划的超集 (Superset)**：
- ✅ 保留了原计划的所有步骤和内容
- ✅ 在每个步骤中**增加了交互功能的具体实现细节**
- ✅ 新增了 **Step 9.5 (博客增强交互)** 和 **Step 10 (全局交互)**
- ✅ 调整了预估时间（因增加了交互复杂度）
- ✅ 提供了更详细的代码示例和技术实现指导

---

## 🚀 下一步行动

请您审查这份**交互增强版构建计划**：

1. **确认交互功能选择** - 这 10 个核心交互是否符合您的预期？
2. **调整优先级** - 是否需要增减某些交互？
3. **确认技术可行性** - 所有功能均可在纯前端实现，无需后端
4. **批准实施** - 确认后我将立即开始 **Step 1: 项目初始化**！

**期待您的反馈！让我们一起打造一个令人惊艳的交互式个人博客 🎮✨**
