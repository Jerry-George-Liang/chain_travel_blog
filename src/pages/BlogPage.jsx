import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar, Tag as TagIcon } from 'lucide-react';
import postsData from '../data/posts.json';
import blogImages from '../data/blogImages';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Tag from '../components/ui/Tag';
import Badge from '../components/ui/Badge';
import SectionHeading from '../components/ui/SectionHeading';
import { scrollReveal } from '../utils/animations';

const categories = ['全部', ...new Set(postsData.map(p => p.category))];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('全部');

  const filteredPosts = activeCategory === '全部' 
    ? postsData 
    : postsData.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 pb-20 atmosphere-blog">
      <div className="container mx-auto px-6">
        <SectionHeading title="技术博客" subtitle="Blog Posts" />

        {/* Category Filter */}
        <motion.div 
          {...scrollReveal}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-neon-violet to-neon-blue text-white'
                  : 'bg-white/5 text-muted hover:bg-white/10 hover:text-light'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              {...scrollReveal}
              transition={{ ...scrollReveal.transition, delay: index * 0.1 }}
            >
              <Link to={`/blog/${post.id}`}>
                <Card hover className="h-full group">
                  {/* Cover */}
                  <div className={`aspect-[16/10] rounded-lg overflow-hidden mb-4 relative bg-gradient-to-br ${blogImages[post.id]?.from || 'from-neon-violet/20'} ${blogImages[post.id]?.via || 'via-neon-blue/15'} ${blogImages[post.id]?.to || 'to-neon-cyan/10'} flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                    <div className={`text-5xl ${blogImages[post.id]?.iconBg || 'bg-white/10'} w-20 h-20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/[0.08]`}>
                      {blogImages[post.id]?.icon || '📝'}
                    </div>
                    <Badge className="absolute top-3 left-3">
                      {new Date(post.publishedAt).toLocaleDateString('zh-CN')}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <Tag variant="accent">{post.category}</Tag>
                    
                    <h3 className="text-xl font-semibold text-light group-hover:text-neon-violet transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-sm text-muted line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs text-muted bg-white/5 px-2 py-1 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Meta */}
                    <div className="flex items-center justify-between pt-4 text-xs text-muted border-t border-white/5">
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readingTime} 分钟阅读
                      </span>
                      <span className="flex items-center gap-1 group-hover:text-neon-cyan transition-colors">
                        阅读全文 <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
