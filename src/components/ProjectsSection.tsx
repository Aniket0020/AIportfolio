import React, { useState, useMemo } from 'react';
import { ExternalLink, Github, ArrowUpRight, Search, X, Layers, Code, Sparkles, Filter } from 'lucide-react';
import { Project, ProjectCategory } from '../types';

interface ProjectsSectionProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Full-Stack', value: 'fullstack' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Cloud & APIs', value: 'cloud' },
    { label: 'AI & Data', value: 'ai' },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'all' || project.category === selectedCategory;
      const matchesQuery =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesQuery;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Code className="w-3.5 h-3.5" />
              <span>Selected Portfolio Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Software Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Explore production architectures, interactive web applications, and developer tools
              engineered with modern frameworks and resilient cloud backends.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="projects-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech or keyword..."
              className="w-full pl-10 pr-9 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-hidden focus:border-cyan-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              id={`projects-filter-${cat.value}`}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === cat.value
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-slate-900/40 border border-slate-800/80">
            <p className="text-slate-400 text-base">
              No projects found matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 rounded-lg text-xs font-semibold text-cyan-400 bg-cyan-950/40 border border-cyan-800/60 hover:bg-cyan-900/50 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="group flex flex-col rounded-2xl bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-cyan-950/20 overflow-hidden"
              >
                {/* Project Image Banner with Hover Zoom */}
                <div
                  onClick={() => onSelectProject(project)}
                  className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950 cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Badges on image */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono uppercase tracking-wider font-semibold bg-slate-950/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                        Featured
                      </span>
                    )}
                  </div>

                  {project.metrics && (
                    <div className="absolute bottom-3 left-3 right-3 text-[11px] font-medium text-emerald-300 bg-slate-950/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-800/80 truncate">
                      ⚡ {project.metrics}
                    </div>
                  )}
                </div>

                {/* Content Container */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <h3
                      onClick={() => onSelectProject(project)}
                      className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono text-slate-300 bg-slate-800/90 border border-slate-750"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-mono text-slate-500 bg-slate-800/40">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Footer Buttons */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onSelectProject(project)}
                      type="button"
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <span>Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-md text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
                          aria-label="GitHub Repository"
                          title="View Source Code"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
                          title="Open Live Application"
                        >
                          <span>Live</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
