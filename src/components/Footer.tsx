import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { NavTab } from '../types';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight, Heart } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: NavTab) => void;
  onOpenAiAssistant: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenAiAssistant }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        
        {/* Col 1: Bio / Brand */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-md shadow-cyan-500/20">
              DT
            </div>
            <span className="text-slate-100 font-bold text-lg">Darinhil Tha</span>
          </div>
          <p className="text-slate-400 text-sm max-w-md leading-relaxed">
            {PERSONAL_INFO.tagline}
          </p>
          <div className="flex items-center gap-2 pt-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs text-emerald-400 font-medium font-mono">
              {PERSONAL_INFO.status}
            </span>
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div className="space-y-3">
          <h4 className="text-slate-200 font-semibold text-sm uppercase tracking-wider font-mono">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <button onClick={() => setActiveTab('home')} className="hover:text-cyan-400 transition-colors">
                Home / About
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('projects')} className="hover:text-cyan-400 transition-colors">
                Selected Works
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('experience')} className="hover:text-cyan-400 transition-colors">
                Career History
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('stack')} className="hover:text-cyan-400 transition-colors">
                Technical Arsenal
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('blog')} className="hover:text-cyan-400 transition-colors">
                Technical Insights
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Social & Contact */}
        <div className="space-y-3">
          <h4 className="text-slate-200 font-semibold text-sm uppercase tracking-wider font-mono">
            Connect
          </h4>
          <div className="space-y-2 text-sm">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-slate-500" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-slate-500" />
            </a>
            <a
              href={PERSONAL_INFO.twitter}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
            >
              <Twitter className="w-4 h-4" />
              <span>Twitter / X</span>
              <ArrowUpRight className="w-3 h-3 text-slate-500" />
            </a>
            <button
              onClick={onOpenAiAssistant}
              className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors pt-1"
            >
              <Mail className="w-4 h-4" />
              <span>Ask AI Twin</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div>
          © {new Date().getFullYear()} Darinhil Tha. All rights reserved.
        </div>
        <div className="flex items-center gap-1">
          <span>Engineered with React, TypeScript & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
};
