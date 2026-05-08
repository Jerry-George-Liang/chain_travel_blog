import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { ArrowLeft, Calendar, Clock, Tag as TagIcon } from 'lucide-react';
import postsData from '../data/posts.json';
import blogImages from '../data/blogImages';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Tag from '../components/ui/Tag';
import Badge from '../components/ui/Badge';
import SectionHeading from '../components/ui/SectionHeading';
import { fadeInUp, scrollReveal } from '../utils/animations';

export default function BlogDetailPage() {
  const { id } = useParams();
  const post = postsData.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted">文章不存在</p>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 atmosphere-blog">
      <article className="container mx-auto px-6">
        {/* Breadcrumb */}
        <motion.nav {...fadeInUp} className="mb-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted hover:text-neon-violet transition-colors">
            <ArrowLeft size={16} />
            返回博客列表
          </Link>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Header */}
          <header className="mb-12">
            {/* Cover Image Placeholder */}
            <div className={`aspect-[2/1] rounded-2xl overflow-hidden mb-8 relative bg-gradient-to-br ${blogImages[post.id]?.from || 'from-neon-violet/20'} ${blogImages[post.id]?.via || 'via-neon-blue/15'} ${blogImages[post.id]?.to || 'to-neon-cyan/10'} flex items-center justify-center`}>
              <div className={`text-7xl ${blogImages[post.id]?.iconBg || 'bg-white/10'} w-28 h-28 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/[0.08]`}>
                {blogImages[post.id]?.icon || '📝'}
              </div>
            </div>

            <Tag variant="accent" className="mb-4">{post.category}</Tag>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-light mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted pb-8 border-b border-white/10">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {new Date(post.publishedAt).toLocaleDateString('zh-CN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readingTime} 分钟阅读
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-6">
              {post.tags.map((tag) => (
                <Tag key={tag} variant="secondary">{tag}</Tag>
              ))}
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none
            prose-headings:font-heading prose-headings:text-light
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-muted prose-p:leading-relaxed
            prose-a:text-neon-violet prose-a:no-underline hover:prose-a:underline
            prose-strong:text-light
            prose-code:text-neon-cyan prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-dark-tertiary prose-pre:border prose-pre:border-white/10
            prose-blockquote:border-l-4 prose-blockquote:border-neon-violet prose-blockquote:italic prose-blockquote:text-muted
            prose-li:text-muted
            prose-img:rounded-lg
          ">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-white/10">
            <Card className="text-center">
              <p className="text-muted mb-4">感谢阅读！如果觉得有帮助，欢迎分享给朋友 🎉</p>
              <Link to="/blog">
                <Button variant="secondary">
                  查看更多文章
                </Button>
              </Link>
            </Card>
          </footer>
        </motion.div>
      </article>
    </div>
  );
}
