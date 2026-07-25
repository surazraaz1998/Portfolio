import React from 'react';

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtitle,
  title,
  description,
  align = 'center',
}) => {
  const isCenter = align === 'center';
  const testIdKey = subtitle.toLowerCase().replace(/[^a-z0-9]/g, '-');

  return (
    <div data-testid={`section-header-${testIdKey}`} className={`mb-12 ${isCenter ? 'text-center max-w-2xl mx-auto' : 'max-w-xl'}`}>
      <span data-testid={`section-subtitle-${testIdKey}`} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono text-xs uppercase tracking-wider mb-3">
        <span data-testid={`section-pulse-dot-${testIdKey}`} className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
        {subtitle}
      </span>
      <h2 data-testid={`section-title-${testIdKey}`} className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight font-sans">
        {title}
      </h2>
      {description && (
        <p data-testid={`section-desc-${testIdKey}`} className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
