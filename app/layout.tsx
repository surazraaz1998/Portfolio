import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Suraj Raj | Senior Full Stack Developer (React, Next.js, TypeScript & FastAPI)',
  description:
    'Senior Full Stack Developer specializing in React, TypeScript, Next.js, and Python FastAPI. Explore my interactive 2D side-scroller career journey game or view my traditional resume.',
  keywords: [
    'Suraj Raj',
    'Full Stack Developer',
    'Senior React Developer',
    'TypeScript Specialist',
    'Next.js Engineer',
    'FastAPI Developer',
    'Portfolio',
    'Three.js Developer',
  ],
  authors: [{ name: 'Suraj Raj', url: 'https://github.com/surazraaz1998' }],
  openGraph: {
    title: 'Suraj Raj | Senior Full Stack Developer Portfolio',
    description:
      'Interactive 2D career journey game & full-stack developer portfolio. Built with React, Next.js 14, Three.js, and Tailwind CSS.',
    url: 'https://surajraj.dev',
    siteName: 'Suraj Raj Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suraj Raj | Senior Full Stack Developer',
    description: 'Senior Full Stack Developer specializing in React, TypeScript, Next.js, and Python FastAPI.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="bg-bg-dark text-slate-100 font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
