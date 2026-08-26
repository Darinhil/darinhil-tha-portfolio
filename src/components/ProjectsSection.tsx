import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { 
  Search, 
  ExternalLink, 
  Code, 
  Sparkles,
  Layers,
  ChevronRight,
  Filter,
  Github
} from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Web', 'AI', 'Mobile', 'Tools'];

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-10 page-section overflow-x-hidden">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-4 max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
          <Code className="w-3.5 h-3.5" />
          <span>Portfolio Showcase</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Selected Works
        </h1>
        <p className="text-slate-300 text-base leading-relaxed">
          A curated collection of projects spanning web development, artificial intelligence, mobile applications, and high-performance developer tools.
        </p>
      </motion.div>

      {/* Controls Bar: Search & Category Chips */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="control-panel flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl"
      >
        
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const count = cat === 'All' ? PROJECTS.length : PROJECTS.filter(p => p.category === cat).length;
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-teal-400 text-teal-950 font-bold shadow-md shadow-teal-500/20'
                    : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                    isActive ? 'bg-slate-950/30 text-slate-950' : 'bg-slate-900 text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px] sm:min-w-[280px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects, tags, tech..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/60 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

      </motion.div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-slate-900/50 border border-slate-800 space-y-3">
          <Filter className="w-8 h-8 text-slate-500 mx-auto" />
          <h3 className="text-lg font-bold text-white">No matching projects found</h3>
          <p className="text-slate-400 text-sm">Try broadening your search query or selecting another category filter.</p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
            className="mt-2 text-xs font-mono text-cyan-400 hover:underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
              className="surface-card h-full rounded-2xl overflow-hidden transition-all hover:-translate-y-2 flex flex-col justify-between group"
            >
              <div>
                {/* Image Banner - Enhanced */}
                <div className="h-48 overflow-hidden relative bg-gradient-to-br from-slate-800 to-slate-950">
                  <img
                    src={p.image}
                    alt={p.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  />
                  
                  {/* Image overlay glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                  
                  {/* Category & Featured badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-3 py-1.5 rounded-full bg-slate-950/90 backdrop-blur-md text-xs font-mono font-bold text-cyan-300 border border-cyan-500/40 shadow-lg shadow-cyan-500/20">
                      {p.category}
                    </span>
                    {p.featured && (
                      <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/30 to-orange-500/30 backdrop-blur-md text-[11px] font-mono font-bold text-amber-200 border border-amber-500/50 flex items-center gap-1 shadow-lg shadow-amber-500/20">
                        <Sparkles className="w-3 h-3 text-amber-300 animate-pulse" />
                        Featured
                      </span>
                    )}
                  </div>

                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium mt-1">
                      {p.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed line-clamp-3 group-hover:text-slate-200 transition-colors">
                    {p.description}
                  </p>

                  {/* Key Metrics */}
                  {p.metrics && p.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {p.metrics.slice(0, 2).map((m, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 hover:from-slate-800 hover:to-slate-900 p-2 rounded-lg border border-slate-700/60 group-hover:border-cyan-500/40 transition-all">
                          <div className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">{m.label}</div>
                          <div className="text-xs font-mono font-bold text-cyan-400 group-hover:text-cyan-300 mt-0.5 transition-colors">{m.value}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-lg bg-slate-800/60 hover:bg-cyan-500/20 text-[11px] font-mono text-slate-300 hover:text-cyan-300 border border-slate-700/60 hover:border-cyan-500/40 transition-all">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions - Enhanced */}
              <div className="px-6 py-4 bg-gradient-to-r from-slate-950/60 to-slate-900/60 backdrop-blur-sm border-t border-slate-700/50 group-hover:border-cyan-500/30 flex items-center justify-between transition-colors">
                <button
                  onClick={() => onSelectProject(p)}
                  className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-200 transition-colors group/btn"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {p.repoUrl && (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/[0.06] text-slate-300 text-sm font-semibold border border-white/10 hover:border-teal-300/40 hover:text-teal-300 transition-colors"
                      title="View source on GitHub"
                    >
                      <Github className="w-4 h-4" />
                      <span className="hidden sm:inline">GitHub</span>
                    </a>
                  )}
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-full bg-cyan-500 text-slate-950 text-sm font-semibold hover:bg-cyan-400 transition-colors"
                      title="View Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

    </div>
  );
};
