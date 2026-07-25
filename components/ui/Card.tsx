import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'violet' | 'emerald' | 'amber' | 'none';
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  glowColor = 'none',
  hoverable = true,
}) => {
  const glowMap = {
    cyan: 'hover:border-sky-500/40 hover:shadow-[0_0_25px_-5px_rgba(56,189,248,0.25)]',
    violet: 'hover:border-indigo-500/40 hover:shadow-[0_0_25px_-5px_rgba(129,140,248,0.25)]',
    emerald: 'hover:border-emerald-500/40 hover:shadow-[0_0_25px_-5px_rgba(52,211,153,0.25)]',
    amber: 'hover:border-amber-500/40 hover:shadow-[0_0_25px_-5px_rgba(251,191,36,0.25)]',
    none: 'hover:border-slate-700',
  };

  return (
    <div
      className={twMerge(
        clsx(
          'glass-panel rounded-2xl p-6 transition-all duration-300 relative overflow-hidden',
          hoverable && `hover:-translate-y-1 ${glowMap[glowColor]}`,
          className
        )
      )}
    >
      {children}
    </div>
  );
};
