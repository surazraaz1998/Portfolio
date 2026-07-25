'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle2, Award } from 'lucide-react';
import { SectionHeader } from '../layout/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { PROFILE_DATA } from '../../data/profile';

export const Education: React.FC = () => {
  const { education } = PROFILE_DATA;

  return (
    <section data-testid="education-section" id="education" className="py-20 relative bg-slate-950/40">
      <div data-testid="education-container" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Academic Foundation"
          title="Education & Engineering Degree"
          description="The core computer science degree and academic groundwork shaping my full-stack engineering journey."
        />

        <motion.div
          data-testid="education-motion-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <Card data-testid="education-card" className="border border-slate-800/80 hover:border-sky-500/40 transition-all p-6 sm:p-8 bg-slate-900/60 backdrop-blur-sm relative overflow-hidden">
            {/* Subtle Glowing Background Gradient */}
            <div data-testid="education-bg-glow" className="absolute top-0 right-0 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

            <div data-testid="education-card-content" className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 relative z-10">
              {/* Left Column: Icon & Primary Info */}
              <div data-testid="education-info-group" className="flex items-start gap-4">
                <div data-testid="education-icon-box" className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500/20 to-indigo-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0 shadow-lg">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div data-testid="education-text-details">
                  <div data-testid="education-badges-row" className="flex items-center gap-2 flex-wrap mb-1">
                    <span data-testid="education-degree-badge" className="px-3 py-0.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/10 text-rose-400 border border-rose-500/20">
                      Bachelor of Technology (B.Tech)
                    </span>
                    <span data-testid="education-period-badge" className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span data-testid="education-period-text">{education.period}</span>
                    </span>
                  </div>

                  <h3 data-testid="education-degree-title" className="text-2xl font-bold text-slate-100 font-sans mt-1">
                    {education.degree}
                  </h3>
                  <div data-testid="education-institution-row" className="flex items-center gap-3 text-sm text-sky-400 font-mono mt-1">
                    <span data-testid="education-institution-name" className="font-semibold">{education.institution}</span>
                    <span data-testid="education-divider">•</span>
                    <span data-testid="education-location" className="text-slate-400 flex items-center gap-1 text-xs">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span data-testid="education-location-text">{education.location}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Badge / Honor tag */}
              <div data-testid="education-honor-badge" className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                <Award className="w-4 h-4 text-emerald-400" />
                <span data-testid="education-honor-text">Computer Science & Engineering</span>
              </div>
            </div>

            {/* Description */}
            <p data-testid="education-description" className="text-slate-300 text-sm leading-relaxed mt-6 mb-6 max-w-4xl">
              {education.description}
            </p>

            {/* Highlights List */}
            {education.achievements && (
              <div data-testid="education-achievements-grid" className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                {education.achievements.map((item, idx) => (
                  <div
                    data-testid={`education-achievement-item-${idx}`}
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span data-testid={`education-achievement-text-${idx}`}>{item}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Core Coursework / Skills Badges */}
            {education.skills && (
              <div data-testid="education-skills-row" className="pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
                <span data-testid="education-skills-label" className="text-xs font-mono text-slate-400 flex items-center gap-1.5 mr-2">
                  <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                  Academic Focus:
                </span>
                {education.skills.map((skill) => (
                  <Badge data-testid={`education-skill-badge-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`} key={skill} variant="violet" size="sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
