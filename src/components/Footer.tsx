import React from 'react';
import { Terminal, Github, Linkedin, Twitter, Mail, ArrowUp, Heart } from 'lucide-react';
import { UserProfile } from '../types';

interface FooterProps {
  profile: UserProfile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="border-t border-slate-800/80 bg-slate-950 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white text-base">{profile.name}</span>
              <p className="text-xs text-slate-400">
                {profile.roleTitle}
              </p>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
            <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-cyan-300 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
          </div>

          {/* Socials & Back to top */}
          <div className="flex items-center gap-3">
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {profile.twitter && (
              <a
                href={profile.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={scrollToTop}
              id="footer-back-to-top"
              aria-label="Scroll to top"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
