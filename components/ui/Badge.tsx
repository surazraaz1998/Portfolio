import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'cyan' | 'violet' | 'emerald' | 'amber';
  size?: 'sm' | 'md';
  className?: string;
  'data-testid'?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'sm',
  className,
  'data-testid': testId = 'ui-badge',
}) => {
  const baseStyles = 'inline-flex items-center font-mono font-medium rounded-md border';

  const variants = {
    default: 'bg-slate-800/80 text-slate-300 border-slate-700/80',
    cyan: 'bg-sky-500/10 text-sky-300 border-sky-500/30',
    violet: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30',
    emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    amber: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-xs',
  };

  return (
    <span data-testid={testId} className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}>
      {children}
    </span>
  );
};
