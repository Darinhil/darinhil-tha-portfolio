import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TECH_SKILLS } from '../data/portfolioData';
import { TechSkill } from '../types';
import { 
  Layers, 
  Code, 
  Terminal, 
  Cpu, 
  Zap, 
  Database, 
  Globe, 
  Server, 
  Activity, 
  Smartphone, 
  Sparkles, 
  Brain, 
  GitBranch, 
  Box, 
  Cloud,
  Search,
  CheckCircle2
} from 'lucide-react';

export const StackSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Languages',
    'Frameworks & Libraries',
    'AI & Data Ops',
    'Tools & Infrastructure'
  ];

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-5 h-5 text-cyan-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Database': return <Database className="w-5 h-5 text-blue-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-indigo-400" />;
      case 'Server': return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-rose-400" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-sky-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'Brain': return <Brain className="w-5 h-5 text-purple-400" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-rose-400" />;
      case 'Box': return <Box className="w-5 h-5 text-blue-400" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-sky-400" />;
      default: return <Code className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredSkills = TECH_SKILLS.filter((s) => {
    const matchesCat = selectedCategory === 'All' || s.category === selectedCategory;
    const matchesQuery = 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="space-y-10 py-8 sm:py-12 overflow-x-hidden">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-3 max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
          <Layers className="w-3.5 h-3.5" />
          <span>Tech Stack & Capabilities</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Technical Arsenal
        </h1>
        <p className="text-slate-300 text-base leading-relaxed">
          Languages, frameworks, artificial intelligence tools, and cloud infrastructure engineered for resilience and speed.
        </p>
      </motion.div>

      {/* Control Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800"
      >
        
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const count = cat === 'All' ? TECH_SKILLS.length : TECH_SKILLS.filter(s => s.category === cat).length;
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <span>{cat}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                  isActive ? 'bg-slate-950/30 text-slate-950' : 'bg-slate-900 text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative min-w-[220px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skills or concepts..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/60 transition-colors"
          />
        </div>

      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.96, y: 25 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
            className="p-6 rounded-2xl bg-slate-900 border border-slate-800/90 hover:border-slate-700 transition-all space-y-4 shadow-none hover:shadow-xl hover:shadow-cyan-950/10"
          >
            {/* Top row */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0">
                  {getSkillIcon(skill.icon)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    {skill.name}
                    {skill.featured && (
                      <span className="w-2 h-2 rounded-full bg-cyan-400" title="Core Specialty" />
                    )}
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">{skill.category}</span>
                </div>
              </div>

              <div className="text-right">
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 text-xs font-mono text-cyan-300 border border-slate-800 font-semibold">
                  {skill.experienceYears}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm leading-relaxed">
              {skill.description}
            </p>

            {/* Skill Level Progress Bar */}
            <div className="space-y-1.5 pt-1">
              <div className="flex justify-between text-xs font-mono text-slate-400">
                <span>Proficiency Level</span>
                <span className="text-cyan-400 font-bold">{skill.level}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-950 overflow-hidden border border-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full"
                />
              </div>
            </div>

          </motion.div>
        ))}
      </div>

    </div>
  );
};
