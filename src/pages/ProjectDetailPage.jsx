import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Calendar, Tag as TagIcon } from 'lucide-react';
import projectsData from '../data/projects.json';
import projectImages from '../data/projectImages';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Tag from '../components/ui/Tag';
import Badge from '../components/ui/Badge';
import { fadeInUp } from '../utils/animations';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted">项目不存在</p>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 atmosphere-projects">
      <div className="container mx-auto px-6">
        {/* Breadcrumb */}
        <motion.nav {...fadeInUp} className="mb-8">
          <Link to="/projects" className="inline-flex items-center gap-2 text-muted hover:text-neon-violet transition-colors">
            <ArrowLeft size={16} />
            返回项目列表
          </Link>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="mb-8">
            {/* Cover Image Placeholder */}
            <div className={`aspect-video rounded-2xl overflow-hidden mb-8 relative bg-gradient-to-br ${projectImages[project.id]?.from || 'from-neon-violet/20'} ${projectImages[project.id]?.via || 'via-neon-blue/15'} ${projectImages[project.id]?.to || 'to-neon-cyan/10'} flex items-center justify-center`}>
              <div className={`text-7xl ${projectImages[project.id]?.iconBg || 'bg-white/10'} w-28 h-28 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/[0.08]`}>
                {projectImages[project.id]?.icon || '💻'}
              </div>
            </div>

            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <Badge status={project.status} variant="status" className="mb-3">
                  {project.status === 'completed' ? '已完成' : '进行中'}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold font-heading text-light mb-2">
                  {project.title}
                </h1>
                <p className="flex items-center gap-2 text-muted">
                  <Calendar size={14} />
                  {project.createdAt}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary">
                      <Github size={16} />
                      源码
                    </Button>
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <Button>
                      <ExternalLink size={16} />
                      Demo
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Description */}
          <Card className="mb-8">
            <p className="text-muted leading-relaxed whitespace-pre-line">
              {project.longDescription || project.description}
            </p>
          </Card>

          {/* Tech Stack */}
          <Card className="mb-8">
            <h2 className="text-xl font-semibold font-heading text-light mb-4">技术栈</h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </Card>

          {/* Tags */}
          <Card>
            <h2 className="text-xl font-semibold font-heading text-light mb-4">标签</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag} variant="secondary">{tag}</Tag>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
