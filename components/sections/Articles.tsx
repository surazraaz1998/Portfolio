'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  BookOpen,
  Rocket,
  Gauge,
  Layers,
  Zap,
  Sparkles,
  Code2,
  Tv,
  Compass,
  FileCode,
  Package,
  Clock,
  Calendar,
  CheckCircle2,
  Share2
} from 'lucide-react';
import { SectionHeader } from '../layout/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { ARTICLES_DATA, ArticleItem } from '../../data/articles';

export const Articles: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'React 19.2 Series',
    'Open Source',
    'Node.js & Backend',
    'Architecture'
  ];

  const filteredArticles = selectedCategory === 'All'
    ? ARTICLES_DATA
    : ARTICLES_DATA.filter((a) => a.category === selectedCategory);

  const getArticleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Rocket':
        return <Rocket className="w-5 h-5" />;
      case 'Gauge':
        return <Gauge className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Code2':
        return <Code2 className="w-5 h-5" />;
      case 'Tv':
        return <Tv className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'FileCode':
        return <FileCode className="w-5 h-5" />;
      case 'Package':
        return <Package className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <section data-testid="articles-section" id="articles" className="py-24 relative bg-slate-950/90">
      {/* Background Accent Blur */}
      <div data-testid="articles-bg-blur" className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div data-testid="articles-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          subtitle="Thought Leadership & Writing"
          title="Technical Articles & Deep-Dive Series"
          description="In-depth technical guides, React 19.2 architecture breakdowns, open-source packages, and performance engineering insights published on LinkedIn."
        />

        {/* Category Filter Pills */}
        <div data-testid="articles-filter-wrapper" className="flex justify-center mb-12 overflow-x-auto pb-2 scrollbar-none">
          <div data-testid="articles-filter-container" className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 gap-1">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  data-testid={`btn-filter-article-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-glow'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Articles Grid */}
        <div data-testid="articles-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, index) => (
            <motion.div
              data-testid={`article-card-wrapper-${article.id}`}
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col"
            >
              <Card
                data-testid={`article-card-${article.id}`}
                glowColor={article.featured ? 'cyan' : 'none'}
                className="h-full flex flex-col justify-between border-slate-800/80 bg-slate-900/60 backdrop-blur-md group hover:border-sky-500/40 transition-all p-6"
              >
                <div data-testid={`article-card-top-${article.id}`}>
                  {/* Top Bar: Icon, Category & Series Day */}
                  <div data-testid={`article-card-header-${article.id}`} className="flex items-center justify-between gap-2 mb-4">
                    <div
                      data-testid={`article-icon-box-${article.id}`}
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-950 font-bold shadow-md transition-transform group-hover:scale-110"
                      style={{ backgroundColor: article.color }}
                    >
                      {getArticleIcon(article.iconName)}
                    </div>

                    <div data-testid={`article-badge-group-${article.id}`} className="flex items-center gap-1.5 flex-wrap justify-end">
                      {article.seriesDay && (
                        <span data-testid={`article-series-day-${article.id}`} className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-sky-500/10 text-sky-400 border border-sky-500/30">
                          {article.seriesDay}
                        </span>
                      )}
                      <span data-testid={`article-category-badge-${article.id}`} className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 data-testid={`article-title-${article.id}`} className="text-lg font-bold text-slate-100 font-sans group-hover:text-sky-400 transition-colors leading-snug mb-1">
                    {article.title}
                  </h3>
                  <p data-testid={`article-subtitle-${article.id}`} className="text-xs font-mono text-slate-400 mb-3">
                    {article.subtitle}
                  </p>

                  {/* Teaser Paragraph */}
                  <p data-testid={`article-teaser-${article.id}`} className="text-slate-300 text-xs leading-relaxed mb-4 line-clamp-3">
                    {article.teaser}
                  </p>

                  {/* Key Highlights Bullets */}
                  <div data-testid={`article-highlights-${article.id}`} className="space-y-1.5 mb-5 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                    {article.highlights.map((h, hIdx) => (
                      <div data-testid={`article-highlight-item-${article.id}-${hIdx}`} key={hIdx} className="flex items-center gap-2 text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span data-testid={`article-highlight-text-${article.id}-${hIdx}`} className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tag Badges */}
                  <div data-testid={`article-tags-row-${article.id}`} className="flex flex-wrap gap-1 mb-5">
                    {article.tags.map((tag) => (
                      <Badge data-testid={`badge-article-tag-${article.id}-${tag.toLowerCase().replace(/[^a-z0-9]/g, '-')}`} key={tag} variant="default" size="sm" className="text-[10px]">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Footer: Date, Read Time & CTA Link */}
                <div data-testid={`article-card-footer-${article.id}`} className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3 mt-auto">
                  <div data-testid={`article-meta-${article.id}`} className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
                    <span data-testid={`article-date-${article.id}`} className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      {article.date}
                    </span>
                    <span data-testid={`article-readtime-${article.id}`} className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-500" />
                      {article.readTime}
                    </span>
                  </div>

                  <a
                    data-testid={`article-linkedin-link-${article.id}`}
                    href={article.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0"
                  >
                    <Button
                      data-testid={`btn-read-article-${article.id}`}
                      variant="outline"
                      size="sm"
                      icon={<ExternalLink className="w-3.5 h-3.5 text-sky-400" />}
                      className="text-xs group-hover:bg-sky-500/10 group-hover:border-sky-500/40 group-hover:text-sky-400 transition-all"
                    >
                      Read on LinkedIn
                    </Button>
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Scalable Append Indicator Banner */}
        <div data-testid="articles-append-banner" className="mt-12 text-center p-6 rounded-2xl glass-panel border border-slate-800 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div data-testid="articles-append-text-group" className="text-left">
            <span data-testid="articles-append-title" className="text-sm font-bold text-slate-200 block font-sans">
              More Engineering Articles Published Weekly
            </span>
            <span data-testid="articles-append-desc" className="text-xs text-slate-400 font-mono">
              Follow Suraj Raj on LinkedIn to get deep-dives on React 19.2, Next.js 14, and Python FastAPI.
            </span>
          </div>

          <a
            data-testid="articles-follow-linkedin-link"
            href="https://www.linkedin.com/in/surazraaz1998/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 w-full sm:w-auto"
          >
            <Button
              data-testid="btn-follow-linkedin"
              variant="primary"
              size="sm"
              icon={<Share2 className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              Follow on LinkedIn
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
