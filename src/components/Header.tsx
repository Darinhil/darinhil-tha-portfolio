import React, { useState } from 'react';
import { NavTab } from '../types';
import logo from '../assets/Logo.png';
import { 
  Code2, 
  Briefcase, 
  Send, 
  Sparkles, 
  Sun, 
  Moon, 
  Menu, 
  X,
  Home,
  UserRound,
  FileText
} from 'lucide-react';

interface HeaderProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenAiAssistant: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  darkMode,
  setDarkMode,
  onOpenAiAssistant,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'about', label: 'About', icon: <UserRound className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects', icon: <Code2 className="w-4 h-4" /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'resume', label: 'Resume', icon: <FileText className="w-4 h-4" /> },
  ];

  const handleTabClick = (tab: NavTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="site-header sticky top-0 z-40 backdrop-blur-xl border-b transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <button
          onClick={() => handleTabClick('home')}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-slate-950 border border-cyan-500/30 overflow-hidden flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <img src={logo} alt="Tha Darinhil logo" className="w-full h-full object-cover scale-[1.6]" />
          </div>
          <div>
            <span className="text-slate-100 font-bold tracking-tight text-base group-hover:text-cyan-400 transition-colors">
              Tha Darinhil
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] p-1 rounded-full border border-white/10">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-teal-400/15 text-teal-300 border border-teal-300/25'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* AI Assistant Button */}
          <button
            onClick={onOpenAiAssistant}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-400/10 border border-indigo-300/20 hover:border-indigo-300/50 text-indigo-200 hover:text-white text-xs sm:text-sm font-medium transition-all"
            title="Ask Darinhil's AI Twin"
          >
            <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
            <span className="hidden sm:inline">Ask AI</span>
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-transparent hover:border-slate-700 transition-all"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-400" />}
          </button>

          {/* Contact Me CTA */}
          <button
            onClick={() => handleTabClick('contact')}
            className={`hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-lg font-medium text-sm transition-all ${
              activeTab === 'contact'
                ? 'bg-teal-400 text-teal-950 shadow-md shadow-teal-500/20'
                : 'bg-teal-400/10 text-teal-300 hover:bg-teal-400 hover:text-teal-950 border border-teal-300/25'
            }`}
          >
            <Send className="w-3.5 h-3.5" />
            Contact Me
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-800 border border-slate-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 border-b border-white/10 px-4 pt-3 pb-5 space-y-2 animate-in slide-in-from-top duration-200">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-left transition-colors ${
                  isActive
                    ? 'bg-teal-400/15 text-teal-300 border border-teal-300/25'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            );
          })}
          <button
            onClick={() => handleTabClick('contact')}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-semibold text-sm mt-3"
          >
            <Send className="w-4 h-4" />
            Contact Me
          </button>
        </div>
      )}
    </header>
  );
};
