'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Activity, Eye } from 'lucide-react';
import { SectionHeader } from '../layout/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { PROJECTS_DATA } from '../../data/projects';
import { ProjectItem } from '../../types/portfolio';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-24 relative bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Featured Work"
          title="Production Projects & Live Demos"
          description="High-impact web applications engineered for speed, responsiveness, and enterprise reliability."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card
                glowColor={project.featured ? 'cyan' : 'violet'}
                className="h-full flex flex-col justify-between border-slate-800"
              >
                <div>
                  {/* Category & Featured Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                        <Sparkles className="w-3 h-3 text-emerald-400" />
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-bold text-slate-100 font-sans mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mb-4">{project.tagline}</p>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Metrics Row */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 font-semibold"
                      >
                        <Activity className="w-3 h-3 text-emerald-400" />
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="default" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    icon={<Eye className="w-3.5 h-3.5" />}
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </Button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 hover:bg-sky-500/20 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Detail Modal */}
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject?.title}
        >
          {selectedProject && (
            <div className="space-y-6">
              <p className="text-xs font-mono text-sky-400">{selectedProject.tagline}</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedProject.longDescription}
              </p>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Performance & Quality Impact
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedProject.metrics.map((m) => (
                    <div
                      key={m}
                      className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 font-bold"
                    >
                      {m}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.techStack.map((tech) => (
                    <Badge key={tech} variant="cyan" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                {selectedProject.githubUrl && (
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="sm" icon={<Github className="w-4 h-4" />}>
                      Source Code
                    </Button>
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" size="sm" icon={<ExternalLink className="w-4 h-4" />}>
                      Launch Live App
                    </Button>
                  </a>
                )}
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};
