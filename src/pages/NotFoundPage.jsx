import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-dark-secondary" />
      <div className="text-center max-w-lg relative z-10">
        {/* 404 Number */}
        <div className="text-[120px] md:text-[180px] font-bold text-neon-violet/20 select-none font-heading leading-none mb-6">
          404
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold font-heading text-light mb-4">
          哎呀，页面走丢了
        </h1>

        {/* Description */}
        <p className="text-muted mb-8 text-lg leading-relaxed">
          你访问的页面不存在或已被移动到其他位置。
          <br className="hidden sm:block" />
          别担心，让我们帮你找到回家的路。
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg">
              <Home size={18} />
              返回首页
            </Button>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/20 text-light rounded-full font-semibold hover:border-neon-violet hover:text-neon-violet transition-all"
          >
            <ArrowLeft size={18} />
            返回上页
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-muted text-sm mb-4">你可能想访问：</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/projects" className="text-muted hover:text-neon-cyan transition-colors text-sm">
              项目展示
            </Link>
            <span className="text-white/10">·</span>
            <Link to="/blog" className="text-muted hover:text-neon-cyan transition-colors text-sm">
              博客文章
            </Link>
            <span className="text-white/10">·</span>
            <Link to="/about" className="text-muted hover:text-neon-cyan transition-colors text-sm">
              关于我
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
