import React, { useState } from 'react';
import { X, Printer, Download, Mail, MapPin, Github, Linkedin, ExternalLink, Check, Copy } from 'lucide-react';
import { UserProfile, ExperienceItem, EducationItem, SkillItem } from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  experiences: ExperienceItem[];
  education: EducationItem[];
  skills: SkillItem[];
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  experiences,
  education,
  skills,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const summaryText = `${profile.name} - ${profile.roleTitle}\nEmail: ${profile.email}\nLocation: ${profile.location}\nGitHub: ${profile.github}\nLinkedIn: ${profile.linkedin}\n\nSummary:\n${profile.bio}\n\nKey Skills:\n${skills.slice(0, 15).map(s => s.name).join(', ')}`;
    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="resume-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
    >
      <div
        id="resume-modal-container"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-750 shadow-2xl text-slate-100 flex flex-col"
      >
        {/* Modal Top Control Bar (Hidden on print) */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-slate-950/90 border-b border-slate-800 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white text-sm sm:text-base">Curriculum Vitae</span>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 rounded-md">
              Verified
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleCopySummary}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
              title="Copy text summary"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              onClick={handlePrint}
              type="button"
              id="resume-print-btn"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              type="button"
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div id="printable-resume" className="p-6 sm:p-10 bg-slate-900 text-slate-200 space-y-8">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight">
                {profile.name}
              </h1>
              <p className="text-lg font-semibold text-cyan-400 mt-1">
                {profile.roleTitle}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{profile.location}</span>
              </p>
            </div>

            <div className="flex flex-col text-xs font-mono text-slate-300 space-y-1.5 sm:text-right">
              <span className="flex items-center sm:justify-end gap-1.5 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {profile.email}
              </span>
              {profile.github && (
                <span className="flex items-center sm:justify-end gap-1.5 text-slate-300">
                  <Github className="w-3.5 h-3.5 text-slate-400" />
                  {profile.github.replace('https://', '')}
                </span>
              )}
              {profile.linkedin && (
                <span className="flex items-center sm:justify-end gap-1.5 text-slate-300">
                  <Linkedin className="w-3.5 h-3.5 text-slate-400" />
                  {profile.linkedin.replace('https://', '')}
                </span>
              )}
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-cyan-400 border-b border-slate-800/80 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {profile.bio}
            </p>
          </div>

          {/* Core Technical Competencies */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-cyan-400 border-b border-slate-800/80 pb-1">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="font-semibold text-white">Languages & Frameworks: </span>
                <span className="text-slate-300">TypeScript, JavaScript (ES6+), React 18/19, Next.js, Node.js, Python, HTML5, CSS3, Tailwind CSS</span>
              </div>
              <div>
                <span className="font-semibold text-white">Backend & Databases: </span>
                <span className="text-slate-300">Express, FastAPI, PostgreSQL, MongoDB, Redis, GraphQL, REST APIs, Microservices</span>
              </div>
              <div>
                <span className="font-semibold text-white">Cloud & DevOps: </span>
                <span className="text-slate-300">Docker, Kubernetes, AWS, Google Cloud, CI/CD Actions, Linux, Git</span>
              </div>
              <div>
                <span className="font-semibold text-white">Practices: </span>
                <span className="text-slate-300">Agile, TDD/Testing, Web Performance Optimization, WAI-ARIA Accessibility</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-cyan-400 border-b border-slate-800/80 pb-1">
              Work Experience
            </h2>
            <div className="space-y-5">
              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <div>
                      <span className="font-bold text-white text-sm sm:text-base">{exp.role}</span>
                      <span className="text-cyan-400 text-xs sm:text-sm font-medium"> • {exp.company}</span>
                    </div>
                    <span className="text-xs font-mono text-slate-400">{exp.period} | {exp.location}</span>
                  </div>
                  <p className="text-xs text-slate-300 italic">{exp.description}</p>
                  <ul className="space-y-1 pt-1">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-cyan-400 border-b border-slate-800/80 pb-1">
              Education & Certifications
            </h2>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id} className="space-y-1 text-xs">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-white text-sm">{edu.degree}</span>
                    <span className="font-mono text-slate-400">{edu.period}</span>
                  </div>
                  <div className="text-slate-300">{edu.institution} - {edu.location}</div>
                  {edu.grade && <div className="text-emerald-400 font-mono">{edu.grade}</div>}
                </div>
              ))}
              <div className="pt-2 text-xs text-slate-300">
                <span className="font-semibold text-white">Certifications: </span>
                <span>AWS Certified Solutions Architect, Meta Certified Frontend Specialist, Certified Kubernetes Application Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
