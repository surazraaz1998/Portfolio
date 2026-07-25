'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { LayoutGrid, PieChart, CheckCircle } from 'lucide-react';
import { SectionHeader } from '../layout/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { SKILL_CATEGORIES, SKILL_RADAR_DATA } from '../../data/skills';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'grid' | 'radar'>('grid');

  return (
    <section data-testid="skills-section" id="skills" className="py-24 relative bg-slate-950">
      <div data-testid="skills-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Technical Arsenal"
          title="Skills, Frameworks & Core Competencies"
          description="A comprehensive breakdown of technical proficiency across full-stack engineering, performance optimization, and enterprise security."
        />

        {/* View Switcher Tabs */}
        <div data-testid="skills-tabs-wrapper" className="flex justify-center mb-12">
          <div data-testid="skills-tabs-container" className="inline-flex p-1.5 rounded-xl bg-slate-900 border border-slate-800">
            <button
              data-testid="tab-btn-category-grid"
              onClick={() => setActiveTab('grid')}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${
                activeTab === 'grid'
                  ? 'bg-sky-500 text-slate-950 shadow-glow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span data-testid="tab-label-category-grid">Category Grid</span>
            </button>

            <button
              data-testid="tab-btn-radar-chart"
              onClick={() => setActiveTab('radar')}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${
                activeTab === 'radar'
                  ? 'bg-sky-500 text-slate-950 shadow-glow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <PieChart className="w-4 h-4" />
              <span data-testid="tab-label-radar-chart">Skills Radar Chart</span>
            </button>
          </div>
        </div>

        {/* View 1: Category Grid */}
        {activeTab === 'grid' && (
          <div data-testid="skills-category-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SKILL_CATEGORIES.map((category, idx) => (
              <motion.div
                data-testid={`skill-category-item-${idx}`}
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Card data-testid={`skill-category-card-${idx}`} glowColor="cyan" className="h-full border-slate-800">
                  <h3 data-testid={`skill-category-title-${idx}`} className="text-xl font-bold text-slate-100 font-sans mb-1 flex items-center justify-between">
                    <span>{category.title}</span>
                  </h3>
                  <p data-testid={`skill-category-desc-${idx}`} className="text-xs text-slate-400 mb-6">{category.description}</p>

                  <div data-testid={`skill-category-list-${idx}`} className="space-y-4">
                    {category.skills.map((skill, skillIdx) => (
                      <div data-testid={`skill-item-${idx}-${skillIdx}`} key={skill.name}>
                        <div data-testid={`skill-header-${idx}-${skillIdx}`} className="flex items-center justify-between text-xs mb-1.5">
                          <span data-testid={`skill-name-${idx}-${skillIdx}`} className="font-medium text-slate-200 flex items-center gap-1.5">
                            {skill.highlight && <CheckCircle className="w-3.5 h-3.5 text-sky-400" />}
                            {skill.name}
                          </span>
                          <span data-testid={`skill-level-${idx}-${skillIdx}`} className="font-mono text-slate-400">{skill.level}%</span>
                        </div>
                        {/* Progress Bar */}
                        <div data-testid={`skill-progress-track-${idx}-${skillIdx}`} className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                          <motion.div
                            data-testid={`skill-progress-bar-${idx}-${skillIdx}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className={`h-full rounded-full ${
                              skill.highlight
                                ? 'bg-gradient-to-r from-sky-400 to-indigo-500'
                                : 'bg-slate-700'
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* View 2: Skills Radar Chart */}
        {activeTab === 'radar' && (
          <motion.div
            data-testid="skills-radar-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 max-w-3xl mx-auto"
          >
            <div data-testid="skills-radar-header" className="text-center mb-6">
              <h3 data-testid="skills-radar-title" className="text-xl font-bold text-slate-100 font-sans">
                Full Stack Capability Radar
              </h3>
              <p data-testid="skills-radar-subtitle" className="text-xs text-slate-400 font-mono mt-1">
                Visualizing proficiency across core domain verticals
              </p>
            </div>

            <div data-testid="skills-radar-container" className="h-[380px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={SKILL_RADAR_DATA}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: '#94a3b8', fontSize: 12, fontFamily: 'var(--font-jetbrains)' }}
                  />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#475569" />
                  <Radar
                    name="Suraj Raj"
                    dataKey="A"
                    stroke="#38bdf8"
                    fill="#38bdf8"
                    fillOpacity={0.4}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0f172a',
                      borderColor: '#334155',
                      borderRadius: '8px',
                      color: '#f8fafc',
                      fontSize: '12px',
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
