'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Copy, Check, Send, Github, Linkedin, MessageSquare, Download, Eye } from 'lucide-react';
import { SectionHeader } from '../layout/SectionHeader';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { PROFILE_DATA } from '../../data/profile';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section data-testid="contact-section" id="contact" className="py-24 relative bg-slate-950">
      <div data-testid="contact-container" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Get in Touch"
          title="Let's Build Something Exceptional"
          description="Have an opportunity, architecture question, or potential project? Reach out directly or send a message below."
        />

        <div data-testid="contact-grid" className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-12">
          {/* Left Column: Direct Links */}
          <div data-testid="contact-left-col" className="lg:col-span-2 space-y-6">
            <Card data-testid="contact-direct-card" glowColor="cyan" className="border-slate-800">
              <h3 data-testid="contact-direct-title" className="text-xl font-bold text-slate-100 font-sans mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-sky-400" />
                <span data-testid="contact-direct-text">Direct Contact</span>
              </h3>

              {/* Email Copy Widget */}
              <div data-testid="contact-email-widget" className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-3 mb-6">
                <div data-testid="contact-email-text-box" className="min-w-0">
                  <span data-testid="contact-email-label" className="text-[11px] font-mono text-slate-400 block uppercase">
                    Email Address
                  </span>
                  <span data-testid="contact-email-value" className="text-sm font-mono text-slate-200 font-medium truncate block">
                    {PROFILE_DATA.email}
                  </span>
                </div>
                <button
                  data-testid="btn-copy-email"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-sky-400 transition-colors shrink-0"
                  aria-label="Copy Email"
                >
                  {copied ? <Check data-testid="icon-email-copied" className="w-4 h-4 text-emerald-400" /> : <Copy data-testid="icon-copy-email" className="w-4 h-4" />}
                </button>
              </div>

              {/* Social Channels */}
              <div data-testid="contact-social-list" className="space-y-3">
                <a
                  data-testid="contact-github-link"
                  href={PROFILE_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 text-slate-300 hover:text-sky-400 transition-all text-xs font-mono"
                >
                  <span data-testid="contact-github-label" className="flex items-center gap-2.5">
                    <Github className="w-4 h-4" />
                    GitHub Profile
                  </span>
                  <span data-testid="contact-github-url">github.com/surazraaz1998</span>
                </a>

                <a
                  data-testid="contact-linkedin-link"
                  href={PROFILE_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 text-slate-300 hover:text-sky-400 transition-all text-xs font-mono"
                >
                  <span data-testid="contact-linkedin-label" className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn Profile
                  </span>
                  <span data-testid="contact-linkedin-url">linkedin.com/in/suraj-raj</span>
                </a>
              </div>

              {/* Resume PDF View & Download CTA */}
              <div data-testid="contact-resume-actions" className="mt-6 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
                <Link data-testid="contact-view-resume-link" href="/resume" className="w-full">
                  <Button data-testid="btn-contact-view-resume" variant="outline" size="md" className="w-full" icon={<Eye className="w-4 h-4" />}>
                    View Resume
                  </Button>
                </Link>
                <a data-testid="contact-download-resume-link" href={PROFILE_DATA.resumeUrl} download="suraj.raj.pdf" className="w-full">
                  <Button data-testid="btn-contact-download-pdf" variant="primary" size="md" className="w-full" icon={<Download className="w-4 h-4" />}>
                    Download PDF
                  </Button>
                </a>
              </div>
            </Card>
          </div>

          {/* Right Column: Contact Form */}
          <div data-testid="contact-right-col" className="lg:col-span-3">
            <Card data-testid="contact-form-card" glowColor="violet" className="border-slate-800">
              <h3 data-testid="contact-form-title" className="text-xl font-bold text-slate-100 font-sans mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-indigo-400" />
                <span data-testid="contact-form-title-text">Send a Direct Message</span>
              </h3>

              {submitted ? (
                <motion.div
                  data-testid="contact-success-banner"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-center"
                >
                  <Check data-testid="icon-success-check" className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <h4 data-testid="contact-success-heading" className="font-bold text-base">Message Sent Successfully!</h4>
                  <p data-testid="contact-success-message" className="text-xs text-emerald-400/80 mt-1">
                    Thank you for reaching out. I will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form data-testid="contact-form" onSubmit={handleSubmit} className="space-y-4">
                  <div data-testid="form-group-name">
                    <label data-testid="label-name" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      data-testid="input-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-sky-500 transition-colors placeholder:text-slate-600"
                    />
                  </div>

                  <div data-testid="form-group-email">
                    <label data-testid="label-email" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Email
                    </label>
                    <input
                      data-testid="input-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. sarah@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-sky-500 transition-colors placeholder:text-slate-600"
                    />
                  </div>

                  <div data-testid="form-group-message">
                    <label data-testid="label-message" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                      Message
                    </label>
                    <textarea
                      data-testid="textarea-message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell me about your project, team, or opportunity..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-sky-500 transition-colors placeholder:text-slate-600 resize-none"
                    />
                  </div>

                  <Button data-testid="btn-submit-form" variant="primary" size="lg" className="w-full mt-2" icon={<Send className="w-4 h-4" />}>
                    Send Message
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
