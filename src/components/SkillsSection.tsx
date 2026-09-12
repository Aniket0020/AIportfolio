import React, { useState } from 'react';
import { Cpu, Terminal, Layers, Database, Cloud, Sparkles, CheckCircle } from 'lucide-react';
import { SkillItem } from '../types';

interface SkillsSectionProps {
  skills: SkillItem[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const [activeCategory, setActiveActiveCategory] = useState<string>('All');

  const categories = ['All', 'Languages', 'Frontend', 'Backend', 'Cloud & Tools'];

  const filteredSkills = skills.filter((skill) =>
    activeCategory === 'All' ? true : skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Technology Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A battle-tested set of languages, frameworks, cloud architectures, and development
            tooling refined through building production software.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`skills-tab-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-500/25'
                  : 'bg-slate-900/90 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-indigo-500/40 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:text-indigo-300 transition-colors">
                    {skill.category === 'Languages' && <Terminal className="w-4 h-4" />}
                    {skill.category === 'Frontend' && <Layers className="w-4 h-4" />}
                    {skill.category === 'Backend' && <Database className="w-4 h-4" />}
                    {skill.category === 'Cloud & Tools' && <Cloud className="w-4 h-4" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm sm:text-base group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-500">{skill.category}</span>
                  </div>
                </div>

                <span className="text-xs font-mono text-slate-400 px-2 py-0.5 rounded-md bg-slate-800/80 border border-slate-750">
                  {skill.experienceYears}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-[11px] font-mono text-slate-400">
                  <span>Proficiency</span>
                  <span className="text-cyan-400">{skill.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Principles Matrix */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span>Core Engineering Disciplines</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-slate-300 text-xs sm:text-sm">
            <div className="space-y-1.5">
              <h4 className="font-semibold text-cyan-300 text-sm">Strict Type Safety</h4>
              <p className="text-slate-400 leading-relaxed">
                Strongly typed interfaces with zero `any` leaks. Predictable contracts between client
                and cloud APIs.
              </p>
            </div>
            <div className="space-y-1.5">
              <h4 className="font-semibold text-cyan-300 text-sm">Resilient & Scalable Systems</h4>
              <p className="text-slate-400 leading-relaxed">
                Horizontal scaling, idempotent operations, reliable pub/sub messaging, and
                continuous telemetry instrumentation.
              </p>
            </div>
            <div className="space-y-1.5">
              <h4 className="font-semibold text-cyan-300 text-sm">Aesthetic & Accessible UIs</h4>
              <p className="text-slate-400 leading-relaxed">
                Sub-second page rendering, keyboard-friendly layouts, fluid responsive transitions,
                and high contrast ratios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
