import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { NavTab } from '../types';
import logo from '../assets/Logo.png';
import { Github, Linkedin, Send, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: NavTab) => void;
  onOpenAiAssistant: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenAiAssistant }) => {
  return (
    <footer className="relative z-10 bg-slate-950 border-t border-white/10 text-slate-400 py-14 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 md:translate-x-8">
        
        {/* Col 1: Bio / Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-950 border border-cyan-500/30 overflow-hidden flex items-center justify-center shadow-md shadow-cyan-500/20">
              <img src={logo} alt="Tha Darinhil logo" className="w-full h-full object-cover scale-[1.6]" />
            </div>
            <span className="text-slate-100 font-bold text-lg">Tha Darinhil</span>
          </div>
          <p className="text-slate-400 text-sm max-w-md leading-relaxed">
            {PERSONAL_INFO.tagline}
          </p>
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
              <button onClick={() => setActiveTab('experience')} className="hover:text-cyan-400 transition-colors">
                Technical Arsenal
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Contact Details */}
        <div className="space-y-4">
          <h4 className="text-slate-200 font-semibold text-sm uppercase tracking-wider font-mono">
            Get in Touch
          </h4>
          <div className="space-y-3 text-sm text-slate-400">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-start gap-3 hover:text-cyan-400 transition-colors">
              <Mail className="w-4 h-4 mt-0.5 shrink-0" />
              <span className="break-all">{PERSONAL_INFO.email}</span>
            </a>
            <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
              <Phone className="w-4 h-4 shrink-0" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>
        </div>

        {/* Col 4: Social & Contact */}
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
              href={PERSONAL_INFO.telegram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>Telegram</span>
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
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 md:translate-x-8">
        <div>
          © {new Date().getFullYear()} Tha Darinhil. All rights reserved.
        </div>
        <div className="flex items-center gap-1">
          <span>Engineered with React, TypeScript & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
};
