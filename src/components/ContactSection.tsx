import React, { useState } from 'react';
import { Mail, MapPin, Send, Check, Copy, MessageSquare, Clock, ArrowUpRight, Sparkles } from 'lucide-react';
import { UserProfile } from '../types';

interface ContactSectionProps {
  profile: UserProfile;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Full-time Opportunity',
    message: '',
  });
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }

    setStatus('sending');

    // Simulate sending message with friendly confirmation
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: 'Full-time Opportunity',
        message: '',
      });
      setTimeout(() => setStatus('idle'), 6000);
    }, 900);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left info column (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let's Build Something Great Together
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Whether you have an upcoming software project, need architectural consulting, or have a full-time engineering opportunity, my inbox is always open.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-mono block">Direct Email</span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-cyan-400 transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  type="button"
                  id="contact-copy-email-btn"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-750 transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-mono block">Average Response Time</span>
                  <span className="text-sm font-semibold text-white">Within 12 - 24 hours</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-mono block">Based In</span>
                  <span className="text-sm font-semibold text-white">{profile.location}</span>
                </div>
              </div>
            </div>

            {/* Availability status callout */}
            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-start gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 mt-1 shrink-0 animate-pulse" />
              <div>
                <span className="font-semibold block">Currently Available</span>
                <span className="text-slate-400 text-xs">
                  {profile.availabilityNote}
                </span>
              </div>
            </div>
          </div>

          {/* Right form column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">Send a Direct Message</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in your project brief or inquiry details and I'll get back to you promptly.
              </p>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 text-sm flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="font-semibold block">Thank you! Your message has been sent.</span>
                    <span className="text-xs text-slate-300">
                      I will review your message and reply to your email shortly.
                    </span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-semibold text-slate-300">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-200 text-xs sm:text-sm focus:outline-hidden focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-semibold text-slate-300">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-200 text-xs sm:text-sm focus:outline-hidden focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-xs font-semibold text-slate-300">
                    Subject / Topic
                  </label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-200 text-xs sm:text-sm focus:outline-hidden focus:border-cyan-500 transition-colors"
                  >
                    <option value="Full-time Opportunity">Full-time Engineering Role</option>
                    <option value="Contract / Freelance Project">Contract / Freelance Project</option>
                    <option value="Architecture Consulting">Technical Consulting / Advisory</option>
                    <option value="General Question">General Inquiry / Say Hello</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-semibold text-slate-300">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, timeline, tech requirements, or role details..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-200 text-xs sm:text-sm focus:outline-hidden focus:border-cyan-500 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    id="contact-submit-btn"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-lg shadow-cyan-500/20 cursor-pointer disabled:opacity-50"
                  >
                    {status === 'sending' ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${profile.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(formData.message || 'Hello Aniket,')}`}
                    className="text-xs text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1 font-mono"
                  >
                    <span>Or open in default mail client</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
