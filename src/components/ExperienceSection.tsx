import React, { useState } from 'react';
import { motion } from 'motion/react';
import { EXPERIENCES, EDUCATIONS, CERTIFICATIONS } from '../data/portfolioData';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Building2, 
  MapPin, 
  Calendar, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'work' | 'education'>('work');
  const [expandedWorkId, setExpandedWorkId] = useState<string>('exp-1');

  const toggleExpand = (id: string) => {
    setExpandedWorkId(prev => (prev === id ? '' : id));
  };

  return (
    <div className="space-y-10 py-8 sm:py-12 overflow-x-hidden">
      
      {/* Section Header & Resume Action Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-6"
      >
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-700 dark:text-cyan-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career & Background</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Career History & Credentials
          </h1>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl">
            A timeline of software leadership, system architecture, engineering achievements, and academic foundation.
          </p>
        </div>

      </motion.div>

      {/* Sub Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
        <button
          onClick={() => setActiveSubTab('work')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
            activeSubTab === 'work'
              ? 'bg-slate-800 text-cyan-400 border border-cyan-500/30'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Briefcase className="w-4 h-4" />
          <span>Work Experience ({EXPERIENCES.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('education')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
            activeSubTab === 'education'
              ? 'bg-slate-800 text-cyan-400 border border-cyan-500/30'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <GraduationCap className="w-4 h-4" />
          <span>Education & Credentials ({EDUCATIONS.length + CERTIFICATIONS.length})</span>
        </button>
      </div>

      {/* TAB CONTENT: WORK EXPERIENCE */}
      {activeSubTab === 'work' && (
        <div className="relative space-y-6 before:absolute before:inset-0 before:left-4 sm:before:left-6 before:w-0.5 before:bg-slate-800">
          {EXPERIENCES.map((exp, index) => {
            const isExpanded = expandedWorkId === exp.id;
            return (
              <motion.div 
                key={exp.id} 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-10 sm:pl-14"
              >
                
                {/* Timeline node icon */}
                <div className={`absolute left-0 top-1.5 w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border transition-all ${
                  exp.current
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/30'
                    : 'bg-slate-900 text-slate-400 border-slate-800'
                }`}>
                  <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>

                {/* Card */}
                <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-slate-700 transition-all shadow-xl">
                  
                  {/* Card Header Bar */}
                  <div
                    onClick={() => toggleExpand(exp.id)}
                    className="p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none hover:bg-slate-800/30 transition-colors"
                  >
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-bold text-white">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium border border-emerald-500/30 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Current Role
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400 font-medium">
                        <span className="text-cyan-400 font-semibold">{exp.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          {exp.period}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-lg bg-slate-950 text-xs font-mono text-slate-400 border border-slate-800 hidden sm:inline-block">
                        {exp.type}
                      </span>
                      <button className="p-1 rounded-lg text-slate-400 hover:text-white">
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Card Body (Always visible summary + expandable highlights) */}
                  <div className="px-6 pb-6 space-y-4 border-t border-slate-800/60 pt-4">
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Highlights list */}
                    {isExpanded && (
                      <div className="space-y-3 pt-2 animate-in fade-in duration-200">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                          Key Engineering Accomplishments:
                        </h4>
                        <ul className="space-y-2">
                          {exp.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-lg bg-slate-950 text-xs font-mono text-slate-300 border border-slate-800">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>
      )}

      {/* TAB CONTENT: EDUCATION & CERTIFICATIONS */}
      {activeSubTab === 'education' && (
        <div className="space-y-12">
          
          {/* Degrees */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <span>Academic Degrees</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {EDUCATIONS.map((edu, idx) => (
                <motion.div 
                  key={edu.id} 
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl"
                >
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-medium">{edu.period} • {edu.location}</span>
                    <h4 className="text-lg font-bold text-white mt-1">{edu.degree}</h4>
                    <p className="text-slate-300 font-semibold text-sm">{edu.institution}</p>
                  </div>

                  <ul className="space-y-2 text-sm text-slate-400">
                    {edu.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Industry Certifications */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Professional Certifications</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <motion.div 
                  key={cert.id} 
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 shadow-xl"
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white line-clamp-2">{cert.title}</h4>
                  <p className="text-xs text-slate-400">{cert.issuer} • {cert.date}</p>
                  {cert.credentialId && (
                    <div className="text-[11px] font-mono text-cyan-400 pt-1">
                      ID: {cert.credentialId}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
