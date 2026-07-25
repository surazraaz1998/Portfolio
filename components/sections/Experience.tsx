'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, ShieldCheck, Zap, BarChart3, Sparkles } from 'lucide-react';
import { SectionHeader } from '../layout/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { CAREER_ZONES } from '../../data/timeline';

export const Experience: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      default:
        return <Briefcase className="w-5 h-5" />;
    }
  };

  return (
    <section data-testid="experience-section" id="experience" className="py-24 relative bg-slate-950/60">
      <div data-testid="experience-container" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Career Journey"
          title="Battle-Tested Experience & Hard Impact"
          description="A timeline of enterprise products built, performance bottlenecks solved, and security compliance achieved."
        />

        <div data-testid="experience-timeline" className="relative mt-16">
          {/* Vertical Timeline Line */}
          <div data-testid="experience-timeline-line" className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 via-indigo-500 to-emerald-500 transform md:-translate-x-1/2 opacity-30" />

          <div data-testid="experience-zones-list" className="space-y-12">
            {CAREER_ZONES.map((zone, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  data-testid={`experience-zone-item-${zone.id}`}
                  key={zone.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div data-testid={`experience-dot-${zone.id}`} className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 border-2 border-sky-400 text-sky-400 shadow-glow z-10">
                    {getIcon(zone.iconName)}
                  </div>

                  {/* Content Card */}
                  <div data-testid={`experience-card-wrapper-${zone.id}`} className="ml-12 md:ml-0 md:w-[45%] w-full">
                    <Card
                      data-testid={`experience-card-${zone.id}`}
                      hoverable
                      className="border border-slate-800 hover:border-sky-500/40 transition-all"
                    >
                      {/* Zone Tag & Date */}
                      <div data-testid={`experience-header-${zone.id}`} className="flex items-center justify-between gap-2 mb-3">
                        <span
                          data-testid={`experience-tag-${zone.id}`}
                          className="px-2.5 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider text-slate-950"
                          style={{ backgroundColor: zone.color }}
                        >
                          Zone {zone.id}: {zone.company}
                        </span>
                        <div data-testid={`experience-period-wrapper-${zone.id}`} className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                          <Calendar className="w-3.5 h-3.5" />
                          <span data-testid={`experience-period-${zone.id}`}>{zone.period}</span>
                        </div>
                      </div>

                      {/* Role & Theme */}
                      <h3 data-testid={`experience-role-${zone.id}`} className="text-xl font-bold text-slate-100 font-sans">
                        {zone.role}
                      </h3>
                      <p data-testid={`experience-theme-${zone.id}`} className="text-xs font-mono text-sky-400 mt-1 mb-3">
                        {zone.theme}
                      </p>

                      <p data-testid={`experience-desc-${zone.id}`} className="text-slate-300 text-sm leading-relaxed mb-4">
                        {zone.description}
                      </p>

                      {/* Hard Metrics Box */}
                      <div data-testid={`experience-metrics-box-${zone.id}`} className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 mb-4">
                        {zone.metrics.map((metric, idx) => (
                          <div data-testid={`experience-metric-item-${zone.id}-${idx}`} key={metric.label} className="text-left">
                            <span data-testid={`experience-metric-value-${zone.id}-${idx}`} className="text-lg font-extrabold text-emerald-400 font-mono block">
                              {metric.value}
                            </span>
                            <span data-testid={`experience-metric-label-${zone.id}-${idx}`} className="text-[11px] text-slate-400 font-medium">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Achievements Bullet List */}
                      <div data-testid={`experience-achievements-${zone.id}`} className="space-y-2 mb-4">
                        {zone.achievements.map((item, i) => (
                          <div data-testid={`experience-achievement-item-${zone.id}-${i}`} key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                            <span data-testid={`experience-achievement-text-${zone.id}-${i}`}>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Unlocked Tech Badges */}
                      <div data-testid={`experience-skills-${zone.id}`} className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
                        {zone.unlockedSkills.map((skill) => (
                          <Badge data-testid={`badge-skill-${zone.id}-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`} key={skill} variant="cyan" size="sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
