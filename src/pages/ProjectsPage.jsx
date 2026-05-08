import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag as TagIcon } from 'lucide-react';
import projectsData from '../data/projects.json';
import projectImages from '../data/projectImages';
import ProjectCover from '../components/ui/ProjectCover';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Tag from '../components/ui/Tag';
import Badge from '../components/ui/Badge';
import SectionHeading from '../components/ui/SectionHeading';
import { scrollReveal, staggerContainer, staggerItem } from '../utils/animations';

const categories = ['全部', 'web', 'app', 'tool', 'other'];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('全部');

  const filteredProjects = activeCategory === '全部' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 pb-20 atmosphere-projects">
      <div className="container mx-auto px-6">
        <SectionHeading title="项目展示" subtitle="My Projects" />

        {/* Filter */}
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

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={`/projects/${project.id}`}>
                  <Card hover className="h-full group">
                    {/* Cover - 场景化封面 */}
                    <div className={`relative w-full aspect-[16/10] rounded-lg overflow-hidden mb-4 bg-gradient-to-br ${projectImages[project.id]?.from || 'from-neon-violet/20'} ${projectImages[project.id]?.via || 'via-neon-blue/15'} ${projectImages[project.id]?.to || 'to-neon-cyan/10'} flex-shrink-0 group-hover:scale-[1.03] transition-transform duration-500`}>
                      <ProjectCover projectId={project.id} />
                      <Badge 
                        status={project.status} 
                        variant="status"
                        className="absolute top-3 right-3 z-10"
                      >
                        {project.status === 'completed' ? '已完成' : '进行中'}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-light group-hover:text-neon-violet transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      
                      <p className="text-sm text-muted line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <Tag key={tech}>{tech}</Tag>
                        ))}
                      </div>

                      {/* Meta */}
                      <div className="flex items-center justify-between pt-2 text-xs text-muted border-t border-white/5 mt-4">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {project.createdAt}
                        </span>
                        <span className="flex items-center gap-1 group-hover:text-neon-cyan transition-colors">
                          查看详情 <ExternalLink size={12} />
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div {...scrollReveal} className="text-center py-16">
            <p className="text-muted">暂无此类别的项目</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
