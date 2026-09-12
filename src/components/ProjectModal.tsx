import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, Layers, Sparkles, TrendingUp } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in"
    >
      <div
        id="project-modal-container"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-750 shadow-2xl shadow-cyan-950/40 text-slate-100 p-6 sm:p-8 space-y-6"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="project-modal-close-btn"
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Information */}
        <div className="space-y-3 pr-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                Featured Case Study
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-cyan-300/90 font-medium">
            {project.tagline}
          </p>
        </div>

        {/* Project Image Banner */}
        <div className="relative rounded-xl overflow-hidden border border-slate-800 h-56 sm:h-72 w-full bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {project.metrics && (
            <div className="absolute bottom-3 left-3 right-3 sm:right-auto px-3.5 py-1.5 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-700/80 text-xs font-medium text-emerald-300 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>{project.metrics}</span>
            </div>
          )}
        </div>

        {/* Description Overview */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
            Overview
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Problem vs Solution Architecture */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-950/60 border border-rose-900/30 space-y-2">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-wider">
              <AlertCircle className="w-4 h-4" />
              <span>Technical Challenge</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.challenges}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-emerald-900/30 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>Architecture & Solution</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="space-y-2.5">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Key Engineering Highlights</span>
          </h3>
          <ul className="space-y-2">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Stack */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <Layers className="w-4 h-4 text-slate-400" />
            <span>Technology Stack</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-slate-800 text-slate-200 border border-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Footer */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="modal-btn-demo"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors cursor-pointer"
              >
                <span>Live Interactive Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="modal-btn-github"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Repository</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            type="button"
            className="px-4 py-2 rounded-lg text-xs sm:text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
