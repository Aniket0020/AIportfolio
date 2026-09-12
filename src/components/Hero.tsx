import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ArrowRight, 
  FileText, 
  Check, 
  Copy, 
  Terminal, 
  Sparkles, 
  Code2, 
  MapPin, 
  Briefcase,
  Play
} from 'lucide-react';
import { UserProfile } from '../types';

interface HeroProps {
  profile: UserProfile;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [terminalTab, setTerminalTab] = useState<'code' | 'output'>('code');
  const [testRunning, setTestRunning] = useState(false);
  const [testOutput, setTestOutput] = useState<string[] | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleRunDevCheck = () => {
    setTestRunning(true);
    setTerminalTab('output');
    setTestOutput(['Initializing runtime diagnostics...']);

    setTimeout(() => {
      setTestOutput((prev) => [...(prev || []), '✔ TypeScript strict mode: 0 errors']);
    }, 400);

    setTimeout(() => {
      setTestOutput((prev) => [...(prev || []), '✔ 24/24 Projects test suites passing (100%)']);
    }, 800);

    setTimeout(() => {
      setTestOutput((prev) => [
        ...(prev || []),
        '✔ CI/CD pipeline: Production ready',
        '⚡ Ready to build high-impact scalable products.'
      ]);
      setTestRunning(false);
    }, 1200);
  };

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle background glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introduction & Bio */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Status Pill */}
            <div
              id="hero-status-pill"
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-750 text-slate-300 text-xs sm:text-sm font-medium shadow-xs"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{profile.availabilityNote}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                  {profile.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300 flex items-center gap-2">
                <Code2 className="w-6 h-6 text-cyan-400 inline" />
                <span>{profile.roleTitle}</span>
              </p>
            </div>

            {/* Location & Summary */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              {profile.bio}
            </p>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>{profile.location}</span>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                id="hero-btn-projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-lg shadow-cyan-500/25 cursor-pointer"
              >
                <span>View Featured Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                id="hero-btn-resume"
                type="button"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 transition-all cursor-pointer shadow-xs"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </button>

              <a
                href="#contact"
                id="hero-btn-contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-950 hover:bg-slate-900 border border-slate-800 transition-colors"
              >
                <span>Let's Talk</span>
              </a>
            </div>

            {/* Social Channels & Email Copy */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800/80 w-full max-w-xl">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                Connect:
              </span>

              {profile.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-link-github"
                  aria-label="GitHub Profile"
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}

              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-link-linkedin"
                  aria-label="LinkedIn Profile"
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}

              {profile.twitter && (
                <a
                  href={profile.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-link-twitter"
                  aria-label="Twitter Profile"
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}

              <button
                onClick={handleCopyEmail}
                id="hero-btn-copy-email"
                type="button"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-mono transition-colors cursor-pointer"
                title="Click to copy email address"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{profile.email}</span>
                {copiedEmail ? (
                  <span className="flex items-center text-emerald-400 gap-1 font-sans">
                    <Check className="w-3 h-3" /> Copied!
                  </span>
                ) : (
                  <Copy className="w-3 h-3 text-slate-500" />
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Code Terminal Card */}
          <div className="lg:col-span-5 w-full">
            <div
              id="hero-interactive-terminal"
              className="w-full rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl shadow-cyan-950/20 backdrop-blur-md overflow-hidden"
            >
              {/* Terminal Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/90 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">developer.profile.ts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setTerminalTab('code')}
                    className={`px-2 py-1 rounded text-xs font-mono transition-colors ${
                      terminalTab === 'code'
                        ? 'bg-slate-800 text-cyan-400'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Code
                  </button>
                  <button
                    onClick={() => setTerminalTab('output')}
                    className={`px-2 py-1 rounded text-xs font-mono transition-colors ${
                      terminalTab === 'output'
                        ? 'bg-slate-800 text-cyan-400'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Console
                  </button>
                </div>
              </div>

              {/* Terminal Content Body */}
              <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto min-h-[280px]">
                {terminalTab === 'code' ? (
                  <div className="space-y-1 text-slate-300">
                    <p className="text-slate-500">// Personal developer config</p>
                    <p>
                      <span className="text-indigo-400">const</span>{' '}
                      <span className="text-sky-300">softwareEngineer</span> = {'{'}
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">name:</span>{' '}
                      <span className="text-emerald-400">"{profile.name}"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">role:</span>{' '}
                      <span className="text-emerald-400">"{profile.roleTitle}"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">coreStack:</span> [
                    </p>
                    <p className="pl-8 text-amber-300">
                      'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker'
                    </p>
                    <p className="pl-4">],</p>
                    <p className="pl-4">
                      <span className="text-slate-400">mission:</span>{' '}
                      <span className="text-emerald-400">"Build robust, fast, intuitive software"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">hireable:</span>{' '}
                      <span className="text-cyan-400">{profile.availableForHire ? 'true' : 'false'}</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">preferredEnv:</span>{' '}
                      <span className="text-emerald-400">"High-ownership & fast iteration"</span>
                    </p>
                    <p>{'};'}</p>
                    <p className="pt-2 text-slate-500">// Click below to run test</p>
                  </div>
                ) : (
                  <div className="space-y-2 text-slate-300 font-mono">
                    <p className="text-cyan-400">$ npm run verify-developer</p>
                    {testOutput ? (
                      testOutput.map((line, idx) => (
                        <p
                          key={idx}
                          className={
                            line.startsWith('✔')
                              ? 'text-emerald-400'
                              : line.startsWith('⚡')
                              ? 'text-cyan-300 font-semibold'
                              : 'text-slate-400'
                          }
                        >
                          {line}
                        </p>
                      ))
                    ) : (
                      <p className="text-slate-500">
                        Console ready. Click "Execute Check" to test engineer diagnostic pipeline.
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Terminal Footer Actions */}
              <div className="px-4 py-3 bg-slate-950/70 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Node.js v22.x LTS</span>
                </div>
                <button
                  onClick={handleRunDevCheck}
                  disabled={testRunning}
                  type="button"
                  id="terminal-btn-run"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium transition-colors cursor-pointer disabled:opacity-50"
                >
                  <Play className="w-3 h-3 fill-cyan-300" />
                  {testRunning ? 'Running...' : 'Execute Check'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div
          id="hero-stats-row"
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xs"
        >
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left border-r border-slate-800/60 last:border-0 pr-4">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono text-cyan-400">
              {profile.stats.yearsExp}+
            </span>
            <span className="text-xs sm:text-sm text-slate-400 mt-0.5">Years Experience</span>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left border-r border-slate-800/60 last:border-0 px-2 sm:px-4">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono text-sky-400">
              {profile.stats.projectsCompleted}+
            </span>
            <span className="text-xs sm:text-sm text-slate-400 mt-0.5">Projects Delivered</span>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left border-r border-slate-800/60 last:border-0 px-2 sm:px-4">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono text-indigo-400">
              {profile.stats.githubCommits}+
            </span>
            <span className="text-xs sm:text-sm text-slate-400 mt-0.5">Git Commits Logged</span>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left pl-2 sm:pl-4">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono text-emerald-400">
              {profile.stats.happyClients}+
            </span>
            <span className="text-xs sm:text-sm text-slate-400 mt-0.5">Satisfied Collaborators</span>
          </div>
        </div>
      </div>
    </section>
  );
};
