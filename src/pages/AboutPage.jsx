import { motion } from 'framer-motion';
import { Mail, MapPin, GraduationCap, Trophy } from 'lucide-react';
import personalData from '../data/personal.json';
import skillsData from '../data/skills.json';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SectionHeading from '../components/ui/SectionHeading';
import { scrollReveal } from '../utils/animations';

function ProfileCard() {
  return (
    <motion.div {...scrollReveal}>
      <Card className="max-w-2xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-neon-purple via-neon-violet to-neon-cyan p-1">
              <div className="w-full h-full rounded-full bg-dark-secondary flex items-center justify-center text-4xl font-bold font-heading text-gradient">
                {personalData.name[0]}
              </div>
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-neon-violet/30 animate-ping" style={{ animationDuration: '2s' }} />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold font-heading text-light mb-2">
              {personalData.name}
            </h2>
            <p className="text-gradient font-medium mb-4">
              {personalData.title.join(' / ')}
            </p>
            <p className="text-muted leading-relaxed mb-4">
              {personalData.bio}
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-muted mb-6">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-neon-cyan" />
                {personalData.location}
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap size={14} className="text-neon-violet" />
                {personalData.education}
              </span>
            </div>
            <div className="flex gap-3 justify-center md:justify-start">
              <a href={`mailto:${personalData.email}`}>
                <Button variant="secondary">
                  <Mail size={16} />
                  联系我
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

function SkillsSection() {
  const categories = {
    backend: skillsData.filter(s => s.category === 'backend'),
    frontend: skillsData.filter(s => s.category === 'frontend'),
    blockchain_ai: skillsData.filter(s => s.category === 'blockchain_ai'),
    tools: skillsData.filter(s => s.category === 'tools')
  };

  const categoryLabels = {
    backend: '后端开发',
    frontend: '前端开发',
    blockchain_ai: '区块链 & AI',
    tools: '工具 & 运维'
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <SectionHeading title="技能栈" subtitle="Skills & Expertise" />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {Object.entries(categories).map(([category, skills], catIndex) => (
            <motion.div
              key={category}
              {...scrollReveal}
              transition={{ ...scrollReveal.transition, delay: catIndex * 0.1 }}
              className="space-y-3"
            >
              <h3 className="text-base font-semibold text-light mb-4 pb-2 border-b border-white/10">
                {categoryLabels[category]}
              </h3>
              
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="mb-2">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-light">{skill.name}</span>
                      <span className="text-xs text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
                        className="h-full bg-gradient-to-r from-neon-violet via-neon-blue to-neon-cyan rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationAndAwards() {
  const education = [
    {
      period: '2023 - 2026',
      title: '区块链技术与应用',
      school: '深圳职业技术大学',
      description: '主修区块链技术与应用，系统学习智能合约开发、联盟链架构、分布式系统设计等核心课程。'
    }
  ];

  const awards = [
    {
      title: '金砖国家技能大赛 — 区块链赛项',
      level: '全国一等奖',
      year: '2025',
      icon: '🏆'
    },
    {
      title: '全国职业院校技能大赛 — 区块链技术应用',
      level: '省级一等奖',
      year: '2025',
      icon: '🥇'
    },
    {
      title: 'CSDN 博客 — 原创技术文章',
      level: '10+ 篇 · 46+ 点赞',
      year: '2024-2026',
      icon: '✍️'
    }
  ];

  return (
    <section className="py-20 atmosphere-projects">
      <div className="container mx-auto px-6">
        <SectionHeading title="教育 & 荣誉" subtitle="Education & Awards" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education */}
          <motion.div {...scrollReveal}>
            <h3 className="text-lg font-semibold text-light mb-6 flex items-center gap-2">
              <GraduationCap size={20} className="text-neon-violet" />
              教育经历
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="p-5">
                  <div className="text-xs text-neon-cyan font-medium mb-2">{edu.period}</div>
                  <h4 className="text-base font-semibold text-light mb-1">{edu.title}</h4>
                  <p className="text-sm text-neon-violet mb-2">{edu.school}</p>
                  <p className="text-sm text-muted">{edu.description}</p>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div {...scrollReveal} transition={{ ...scrollReveal.transition, delay: 0.15 }}>
            <h3 className="text-lg font-semibold text-light mb-6 flex items-center gap-2">
              <Trophy size={20} className="text-amber-400" />
              荣誉奖项
            </h3>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <Card key={index} className="p-5 group hover:border-amber-400/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{award.icon}</span>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-light mb-1">{award.title}</h4>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                          {award.level}
                        </span>
                        <span className="text-xs text-muted">{award.year}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProjectExperience() {
  const projects = [
    {
      period: '2026.04 - 2026.05',
      title: '链途 Resume',
      tech: 'TanStack Start · TypeScript · Tiptap · Zustand · Google Gen AI',
      highlights: [
        '基于 TanStack Start 全栈框架构建 AI 在线简历编辑器',
        '设计 8 种简历模板系统，支持实时预览与一键切换',
        '集成 Google Generative AI 实现智能辅助编写与语法检查',
        'Puppeteer + html2canvas 实现 PDF 高保真导出',
        '完整 i18n 国际化方案，Docker 容器化部署'
      ]
    },
    {
      period: '2025.06 - 2025.08',
      title: 'AI+智能文档问答系统',
      tech: 'SpringBoot · LangChain4j · Vue3 · pgvector · Docker',
      highlights: [
        '主导前后端分离架构设计，构建 RAG 流水线',
        '设计混合检索策略，检索召回率提升 40%+',
        'Embedding 模型优化，推理速度提升 2.5 倍，内存降低 57%',
        '基于 SSE 实现流式问答推送，打字机效果实时渲染'
      ]
    },
    {
      period: '2025.03 - 2025.05',
      title: '区块链供应链金融管理系统',
      tech: 'Solidity · SpringBoot · Vue.js · FISCO BCOS · Docker',
      highlights: [
        '使用 Solidity 编写债权凭证管理合约，实现链上确权与凭证拆分',
        '基于 SpringBoot 搭建微服务架构，通过 Java SDK 对接区块链',
        'Vue.js + Element UI 开发管理后台'
      ]
    },
    {
      period: '2024.11 - 2025.01',
      title: '区块链食品溯源管理系统',
      tech: 'SpringBoot · SpringSecurity · Vue.js · FISCO BCOS · MySQL · Redis',
      highlights: [
        '构建全生命周期食品溯源平台，覆盖采购到销售全环节',
        '实现 RBAC 权限控制 + 溯源信息上链存证',
        '引入 Redis 缓存热点数据，系统响应速度提升 60%'
      ]
    },
    {
      period: '2024.08 - 2024.10',
      title: '图书管理系统',
      tech: 'React · Node.js · Express · MongoDB · JWT',
      highlights: [
        '独立完成前后端全栈开发',
        'Node.js + Express RESTful API + JWT 认证',
        'React Hooks 状态管理，Linux + PM2 部署'
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <SectionHeading title="项目经历" subtitle="Project Experience" />

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 md:-translate-x-px" />

          {projects.map((project, index) => (
            <motion.div
              key={index}
              {...scrollReveal}
              transition={{ ...scrollReveal.transition, delay: index * 0.15 }}
              className={`relative mb-10 last:mb-0 ${
                index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] ml-12 md:ml-0'
              }`}
            >
              <div className={`absolute top-1 w-3 h-3 rounded-full bg-gradient-to-br from-neon-purple to-neon-cyan z-10 ${
                index % 2 === 0 
                  ? 'left-[-19px] md:left-[-7px]' 
                  : 'left-[-19px] md:left-auto md:right-[-7px]'
              }`} />

              <Card className="p-5 inline-block text-left">
                <div className="text-xs text-neon-cyan font-medium mb-2">{project.period}</div>
                <h3 className="text-base font-semibold text-light mb-2">{project.title}</h3>
                <p className="text-xs text-neon-violet/70 mb-3">{project.tech}</p>
                <ul className="space-y-1.5">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="text-sm text-muted flex items-start gap-2">
                      <span className="text-neon-cyan mt-1 flex-shrink-0">›</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="pt-24 pb-16 atmosphere-about">
        <div className="container mx-auto px-6">
          <ProfileCard />
        </div>
      </section>
      
      <SkillsSection />
      <EducationAndAwards />
      <ProjectExperience />
    </>
  );
}
