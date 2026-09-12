import React, { useState, useEffect } from 'react';
import { Terminal, FileText, Settings, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { UserProfile } from '../types';

interface NavbarProps {
  profile: UserProfile;
  onOpenResume: () => void;
  onOpenEditor: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ profile, onOpenResume, onOpenEditor }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#about"
            id="nav-logo"
            className="group flex items-center gap-2.5 text-slate-100 hover:text-cyan-400 transition-colors"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-all">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight flex items-center gap-1.5">
                {profile.name}
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              </span>
              <span className="text-[11px] text-slate-400 font-mono hidden sm:inline-block">
                dev.portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase()}`}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {profile.availableForHire && (
              <div
                id="navbar-status-badge"
                className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-medium"
                title={profile.availabilityNote}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for hire
              </div>
            )}

            <button
              onClick={onOpenResume}
              id="nav-btn-resume"
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 transition-all cursor-pointer shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              Resume
            </button>

            <button
              onClick={onOpenEditor}
              id="nav-btn-customize"
              type="button"
              title="Customize Profile Info"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-750 transition-colors cursor-pointer"
            >
              <Settings className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden xl:inline">Customize</span>
            </button>

            <a
              href="#contact"
              id="nav-btn-hire"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-md shadow-cyan-500/20"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              type="button"
              id="nav-mobile-resume-btn"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400"
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              id="nav-mobile-toggle"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="nav-mobile-menu"
            className="sm:hidden mt-3 pt-3 pb-4 border-t border-slate-800/80 bg-slate-950/95 rounded-xl px-2 space-y-1 backdrop-blur-lg"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-slate-900 rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-750 text-slate-200 text-sm font-medium"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                View Resume
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEditor();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-750 text-slate-200 text-sm font-medium"
              >
                <Settings className="w-4 h-4 text-slate-400" />
                Customize Profile
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 text-sm font-semibold"
              >
                Get in Touch
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
