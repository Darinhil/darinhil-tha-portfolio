import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, PROJECTS, CORE_VALUES, CODE_CONFIG_SAMPLE } from '../data/portfolioData';
import { NavTab, Project } from '../types';
import { AnimatedTitle } from './AnimatedTitle';
import { HeroProfileCard } from './HeroProfileCard';
import { 
  ArrowRight, 
  Code2, 
  Check, 
  Copy, 
  Terminal, 
  Award, 
  Users, 
  Briefcase, 
  Sparkles,
  Compass,
  Heart,
  TrendingUp,
  FileText,
  ChevronRight
} from 'lucide-react';

interface HomeSectionProps {
  setActiveTab: (tab: NavTab) => void;
  onSelectProject: (p: Project) => void;
  onOpenAiAssistant: () => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({
  setActiveTab,
  onSelectProject,
  onOpenAiAssistant,
}) => {
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(CODE_CONFIG_SAMPLE);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const featuredProjects = PROJECTS.filter(p => p.featured).slice(0, 3);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass': return <Compass className="w-6 h-6 text-cyan-400" />;
      case 'Heart': return <Heart className="w-6 h-6 text-rose-400" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-emerald-400" />;
      default: return <Compass className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <div className="space-y-20 py-8 sm:py-12 overflow-x-hidden">
      
      {/* 1. HERO BANNER */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative overflow-hidden"
      >
        {/* Subtle background glow */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {PERSONAL_INFO.name}
              </h1>
              <div className="pt-1">
                <AnimatedTitle defaultTitle={PERSONAL_INFO.title} />
              </div>
            </div>

            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => setActiveTab('projects')}
                className="group flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/40 hover:shadow-cyan-500/60 hover:scale-[1.03] btn-hover-glow active:scale-95"
              >
                <span>View Selected Works</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onOpenAiAssistant}
                className="group flex items-center gap-2 px-3 py-3 rounded-xl bg-gradient-to-r from-indigo-950/70 to-purple-950/70 hover:from-indigo-900 hover:to-purple-900 border border-indigo-500/50 hover:border-indigo-400 text-indigo-300 hover:text-indigo-100 text-sm font-semibold transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-[1.02]"
              >
                <Sparkles className="w-4 h-4 text-indigo-400 group-hover:animate-spin group-hover:drop-shadow-[0_0_8px_#818cf8]" />
                <span>Ask AI Twin</span>
              </button>

              <button
                onClick={() => setActiveTab('resume')}
                className="group flex items-center gap-2 px-3 py-3 rounded-xl border border-slate-700 bg-slate-900/70 text-slate-200 hover:text-white hover:border-cyan-500/60 hover:bg-slate-800 transition-all text-sm font-semibold"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Resume</span>
              </button>
            </div>

            {/* Metric Counters - Enhanced */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
              <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 hover:from-slate-800 hover:to-slate-900 p-4 rounded-2xl border border-slate-700/50 hover:border-cyan-500/40 transition-all shadow-lg shadow-slate-900/20 hover:shadow-cyan-500/20 hover:scale-105 hover:-translate-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono group-hover:text-cyan-400 transition-colors">{PERSONAL_INFO.shippedProjects}+</div>
                <div className="text-xs text-slate-400 group-hover:text-slate-300 mt-1 transition-colors font-medium">Web & Software Projects</div>
              </div>
              <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 hover:from-slate-800 hover:to-slate-900 p-4 rounded-2xl border border-slate-700/50 hover:border-blue-500/40 transition-all shadow-lg shadow-slate-900/20 hover:shadow-blue-500/20 hover:scale-105 hover:-translate-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono group-hover:text-blue-400 transition-colors">{PERSONAL_INFO.openSourceContributions}</div>
                <div className="text-xs text-slate-400 group-hover:text-slate-300 mt-1 transition-colors font-medium">UX/UI Design Projects</div>
              </div>
              <div className="group col-span-2 sm:col-span-1 bg-gradient-to-br from-cyan-950/50 to-slate-900/50 hover:from-cyan-900 hover:to-cyan-950 p-4 rounded-2xl border border-cyan-500/40 hover:border-cyan-400 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 hover:-translate-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 hover:text-cyan-300 font-mono transition-colors drop-shadow-[0_0_10px_#06b6d4]">{PERSONAL_INFO.yearsExperience}+</div>
                <div className="text-xs text-slate-400 group-hover:text-slate-300 mt-1 transition-colors font-medium">Years Learning & Practicing</div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Profile Picture with Floating Tech Stack & Languages */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <HeroProfileCard />
          </motion.div>
        </div>
      </motion.section>

      {/* 2. THE JOURNEY & CORE VALUES */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="space-y-10"
      >
        <div className="border-l-2 border-cyan-500 pl-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">My Learning Journey</h2>
          <p className="text-slate-400 text-sm mt-1">Building practical web projects while growing my frontend, backend, and UI/UX skills.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CORE_VALUES.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.12 }}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {getIcon(val.icon)}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {val.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {val.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 3. FEATURED PROJECTS PREVIEW */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="space-y-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800/80 pb-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Featured Projects</h2>
            <p className="text-slate-400 text-sm mt-1">A selection of web applications, APIs, database projects, and UI/UX work.</p>
          </div>
          <button
            onClick={() => setActiveTab('projects')}
            className="flex items-center gap-1 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>Explore All Projects</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.12 }}
              onClick={() => onSelectProject(p)}
              className="cursor-pointer rounded-2xl bg-slate-900 border border-slate-800/80 overflow-hidden hover:border-slate-700 hover:shadow-xl hover:shadow-cyan-950/20 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-xs font-mono font-medium text-cyan-300 border border-slate-700">
                    {p.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed">
                    {p.description}
                  </p>
                  
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {p.tags.slice(0, 4).map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-slate-800 text-[11px] font-mono text-slate-300">
                        {t}
                      </span>
                    ))}
                    {p.tags.length > 4 && (
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-[11px] font-mono text-slate-400">
                        +{p.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 bg-slate-950/50 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="text-cyan-400 font-semibold">View Project Details</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 4. QUICK CONTACT CALLOUT */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/90 to-slate-900 border border-cyan-500/20 p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8 text-white shadow-xl shadow-indigo-950/20"
      >
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Let’s work together
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
            Have a web project in mind?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
            I build responsive websites and practical web applications. Let’s talk about your idea, UI/UX needs, frontend, backend APIs, or database requirements.
          </p>
        </div>

        <button
          onClick={() => setActiveTab('contact')}
          className="w-full md:w-auto shrink-0 px-5 sm:px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/20 text-center whitespace-nowrap"
        >
          Start a Conversation
        </button>
      </motion.section>

    </div>
  );
};
