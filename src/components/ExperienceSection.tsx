import React from 'react';
import { Briefcase, Calendar, MapPin, GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { ExperienceItem, EducationItem } from '../types';

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
  education: EducationItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences, education }) => {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Track Record
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A chronological timeline of roles leading engineering initiatives, building production systems, and driving impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Work Experience Timeline (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="relative border-l-2 border-slate-800 ml-3.5 sm:ml-4 pl-6 sm:pl-8 space-y-10">
              {experiences.map((exp) => (
                <div key={exp.id} id={`exp-item-${exp.id}`} className="relative group">
                  {/* Timeline Dot */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                      exp.current
                        ? 'bg-cyan-500 border-slate-950 ring-4 ring-cyan-500/20'
                        : 'bg-slate-900 border-slate-700 group-hover:border-cyan-400'
                    }`}
                  />

                  {/* Card Container */}
                  <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all space-y-4">
                    {/* Header: Role & Period */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg sm:text-xl font-bold text-white">
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="text-sm font-medium text-cyan-400">
                          {exp.company}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2 pt-1">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Key Accomplishments
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills pills */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-750"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-white font-bold text-lg">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                <span>Education</span>
              </div>

              {education.map((edu) => (
                <div key={edu.id} className="space-y-2 border-t border-slate-800/80 pt-4 first:border-0 first:pt-0">
                  <h4 className="font-semibold text-white text-sm sm:text-base leading-snug">
                    {edu.degree}
                  </h4>
                  <div className="text-xs sm:text-sm text-cyan-300">
                    {edu.institution}
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>{edu.period}</span>
                    {edu.grade && <span className="text-emerald-400 font-semibold">{edu.grade}</span>}
                  </div>
                  <ul className="space-y-1.5 pt-2">
                    {edu.highlights.map((hl, i) => (
                      <li key={i} className="text-xs text-slate-400 flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-slate-500 mt-1.5 shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Certifications Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-white font-bold text-lg">
                <Award className="w-5 h-5 text-indigo-400" />
                <span>Certifications & Honors</span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <span className="font-semibold text-white block">AWS Certified Solutions Architect</span>
                  <span className="text-slate-400 text-xs font-mono">Amazon Web Services • Verified</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <span className="font-semibold text-white block">Meta Certified Frontend Specialist</span>
                  <span className="text-slate-400 text-xs font-mono">Meta • Advanced React & Architecture</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <span className="font-semibold text-white block">CKAD: Certified Kubernetes Application Developer</span>
                  <span className="text-slate-400 text-xs font-mono">Cloud Native Computing Foundation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
