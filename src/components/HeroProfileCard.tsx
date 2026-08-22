import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import profileImg from '../assets/images/developer_profile_1786186870593.jpg';

interface TechItem {
  id: string;
  name: string;
  category: string;
  color: string;
  badgeBg: string;
  borderColor: string;
  glowColor: string;
  positionClass: string;
  floatDuration: number;
  floatDelay: number;
  icon: React.ReactNode;
}

export const HeroProfileCard: React.FC = () => {
  const techItems: TechItem[] = [
    {
      id: 'html5',
      name: 'HTML5',
      category: 'Markup',
      color: 'text-[#E34F26]',
      badgeBg: 'bg-slate-900/95',
      borderColor: 'border-[#E34F26]/60',
      glowColor: 'shadow-[#E34F26]/30',
      positionClass: '',
      floatDuration: 0,
      floatDelay: 0,
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current text-[#E34F26]" viewBox="0 0 24 24">
          <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-13.256-.001.711 8.056h8.808l-.358 3.86-3.468.95-3.473-.95-.224-2.529H5.163l.425 5.228 6.388 1.774 6.388-1.774.873-9.826H8.531z" />
        </svg>
      ),
    },
    {
      id: 'css3',
      name: 'CSS3',
      category: 'Styling',
      color: 'text-[#1572B6]',
      badgeBg: 'bg-slate-900/95',
      borderColor: 'border-[#1572B6]/60',
      glowColor: 'shadow-[#1572B6]/30',
      positionClass: '',
      floatDuration: 0,
      floatDelay: 0,
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current text-[#1572B6]" viewBox="0 0 24 24">
          <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm15.82 5.09H6.18l.24 2.72h8.08l-.24 2.73h-8l.24 2.72h5.05l-.26 2.92-3.32.9-3.31-.9-.21-2.35H4.67l.42 4.88 6.88 1.91 6.88-1.91.95-10.71h.01l.01-.01z" />
        </svg>
      ),
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      category: 'Language',
      color: 'text-[#F7DF1E]',
      badgeBg: 'bg-slate-900/95',
      borderColor: 'border-[#F7DF1E]/60',
      glowColor: 'shadow-[#F7DF1E]/30',
      positionClass: '',
      floatDuration: 0,
      floatDelay: 0,
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M12.5 16.8c.45.72 1.1 1.2 2.05 1.2.86 0 1.4-.42 1.4-1.02 0-.71-.55-.98-1.5-1.39l-.52-.22c-1.5-.64-2.5-1.44-2.5-3.13 0-1.75 1.35-3.07 3.48-3.07 1.52 0 2.55.55 3.25 1.78l-1.5 1c-.37-.64-.86-.92-1.65-.92-.72 0-1.2.43-1.2.98 0 .62.43.9 1.36 1.3l.52.23c1.78.77 2.67 1.53 2.67 3.25 0 2.03-1.57 3.2-3.9 3.2-1.98 0-3.25-.9-3.88-2.15l1.92-1.12zm-6.2 0c.34.6.76 1.01 1.45 1.01.65 0 1.07-.32 1.07-1.4V8.5h2.4v8.02c0 2.1-1.22 3.08-3.08 3.08-1.62 0-2.62-.84-3.1-1.89l1.26-.91z" fill="#000000" />
        </svg>
      ),
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      category: 'Language',
      color: 'text-[#3178C6]',
      badgeBg: 'bg-slate-900/95',
      borderColor: 'border-[#3178C6]/60',
      glowColor: 'shadow-[#3178C6]/30',
      positionClass: '',
      floatDuration: 0,
      floatDelay: 0,
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M13.5 10.5v1.5h2V18h2v-6h2V10.5h-6zm-7 3c.5.8 1.4 1.3 2.5 1.3 1.2 0 2-.6 2-1.5 0-2.3-3.8-1.5-3.8-3.8 0-1.4 1.2-2.3 3.1-2.3 1.3 0 2.3.4 3 1.3l-1.3 1.2c-.4-.5-1-.8-1.7-.8-.8 0-1.3.4-1.3.9 0 2.2 3.8 1.4 3.8 3.8 0 1.5-1.3 2.4-3.3 2.4-1.6 0-2.8-.6-3.6-1.8l1.4-1.2z" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      id: 'vue',
      name: 'Vue.js',
      category: 'Frontend',
      color: 'text-[#42B883]',
      badgeBg: 'bg-slate-900/95',
      borderColor: 'border-[#42B883]/60',
      glowColor: 'shadow-[#42B883]/30',
      positionClass: '',
      floatDuration: 0,
      floatDelay: 0,
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24">
          <path d="M2 3h3.5L12 15 18.5 3H22L12 21 2 3z" fill="#42B883" />
          <path d="M6.5 3h3L12 8.5 14.5 3h3L12 13 6.5 3z" fill="#35495E" />
        </svg>
      ),
    },
    {
      id: 'react',
      name: 'React.js',
      category: 'Frontend',
      color: 'text-[#61DAFB]',
      badgeBg: 'bg-slate-900/95',
      borderColor: 'border-[#61DAFB]/60',
      glowColor: 'shadow-[#61DAFB]/30',
      positionClass: '',
      floatDuration: 0,
      floatDelay: 0,
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1.6" fill="none">
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(0 12 12)" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
          </g>
        </svg>
      ),
    },
    {
      id: 'php',
      name: 'PHP',
      category: 'Backend',
      color: 'text-[#777BB4]',
      badgeBg: 'bg-slate-900/95',
      borderColor: 'border-[#777BB4]/60',
      glowColor: 'shadow-[#777BB4]/30',
      positionClass: '',
      floatDuration: 0,
      floatDelay: 0,
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24">
          <ellipse cx="12" cy="12" rx="11" ry="7" fill="#777BB4" />
          <path d="M6.5 10h2.2a1.8 1.8 0 0 1 0 3.6H7.3V15H6.5v-5zm.8 1.4v.8h1.4a1 1 0 1 0 0-2H7.3zm4.2-1.4h.8v2.1h1.8V10h.8v5h-.8v-2.1h-1.8V15h-.8v-5zm5 0h2.2a1.8 1.8 0 0 1 0 3.6h-1.4V15h-.8v-5zm.8 1.4v.8h1.4a1 1 0 1 0 0-2h-1.4z" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      id: 'laravel',
      name: 'Laravel',
      category: 'Framework',
      color: 'text-[#FF2D20]',
      badgeBg: 'bg-slate-900/95',
      borderColor: 'border-[#FF2D20]/60',
      glowColor: 'shadow-[#FF2D20]/40',
      positionClass: '',
      floatDuration: 0,
      floatDelay: 0,
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 512 512">
          <defs>
            <linearGradient id="laravel-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FF583A" />
              <stop offset="100%" stopColor="#FF2D20" />
            </linearGradient>
          </defs>
          <rect width="512" height="512" rx="96" fill="url(#laravel-grad)" />
          <g fill="none" stroke="#FFFFFF" strokeWidth="26" strokeLinecap="round" strokeLinejoin="round">
            {/* Main Outer Structure */}
            <path d="M128 128 L228 70 L228 266 L328 208 L328 112 L428 54 L428 238 L228 354 L128 296 Z" />
            {/* Top faces and inner cube edges */}
            <path d="M128 128 L228 186 L328 128" />
            <path d="M228 186 L228 266" />
            <path d="M328 112 L428 170" />
            {/* Bottom block extensions */}
            <path d="M228 354 L228 434 L128 376 L128 296" />
            <path d="M228 434 L368 354 L368 274" />
          </g>
        </svg>
      ),
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      category: 'Runtime',
      color: 'text-[#339933]',
      badgeBg: 'bg-slate-900/95',
      borderColor: 'border-[#339933]/60',
      glowColor: 'shadow-[#339933]/30',
      positionClass: '',
      floatDuration: 0,
      floatDelay: 0,
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24">
          <path d="M12 2L2.5 7.5v9L12 22l9.5-5.5v-9L12 2z" fill="#339933" />
          <path d="M12 4.2L4.5 8.5v7l7.5 4.3 7.5-4.3v-7L12 4.2z" fill="#5FA04E" />
          <path d="M10 16.5v-9l6 4.5-6 4.5z" fill="#FFFFFF" />
        </svg>
      ),
    },
  ];

  const totalCount = techItems.length;

  return (
    <div className="relative w-full max-w-lg mx-auto min-h-[460px] sm:min-h-[520px] flex items-center justify-center p-4 sm:p-8 select-none">
      
      {/* Ambient Radial Background Glow - Enhanced */}
      <div className="absolute w-96 h-96 sm:w-[480px] sm:h-[480px] bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-indigo-600/25 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute w-80 h-80 sm:w-[420px] sm:h-[420px] bg-gradient-to-bl from-purple-500/15 via-pink-500/10 to-cyan-500/15 rounded-full blur-3xl pointer-events-none" style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />

      {/* Orbit Track Visual Rings */}
      <div className="absolute w-[360px] h-[360px] sm:w-[450px] sm:h-[450px] border border-cyan-500/30 rounded-full pointer-events-none shadow-[0_0_30px_rgba(6,182,212,0.2)]" />
      <div className="absolute w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] border border-indigo-500/20 border-dashed rounded-full pointer-events-none animate-orbit opacity-70" />

      {/* Central Profile Image Card */}
      <div className="relative z-20 group">
        {/* Outer Animated Glow Ring - Enhanced */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
        <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-600/30 via-indigo-600/20 to-purple-600/30 blur-2xl opacity-50" />
        
        {/* Photo Container Card */}
        <div className="relative rounded-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-950 border-2 border-cyan-500/50 p-2 shadow-2xl backdrop-blur-xl w-[280px] sm:w-[340px] group-hover:border-cyan-400 transition-colors duration-500">
          <div className="relative rounded-full overflow-hidden aspect-square bg-slate-950 border border-cyan-400/30">
            <img
              src={profileImg}
              alt="Profile portrait"
              referrerPolicy="no-referrer"
              className="anime-profile-photo w-full h-full rounded-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cyan-950/25 via-transparent to-indigo-400/10 mix-blend-color" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_12%,rgba(125,211,252,0.22),transparent_38%),linear-gradient(150deg,transparent_55%,rgba(6,182,212,0.12))] mix-blend-screen" />
            <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-soft-light bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.7)_48%,transparent_58%)]" />
            
            {/* Enhanced Gradient Overlay with glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />

          </div>
        </div>
      </div>

      {/* CONTINUOUS ORBITING TECH LANGUAGES LOOP CONTAINER */}
      <motion.div
        className="absolute w-[360px] h-[360px] sm:w-[450px] sm:h-[450px] rounded-full z-30 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {techItems.map((item, index) => {
          // Angle in degrees around the 360 circle
          const angleDeg = (index / totalCount) * 360;
          const angleRad = (angleDeg * Math.PI) / 180;
          
          // Radius percentage (50% is center)
          const radiusPct = 48; // Percentage offset from center
          const leftPct = 50 + radiusPct * Math.cos(angleRad);
          const topPct = 50 + radiusPct * Math.sin(angleRad);

          return (
            <div
              key={item.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
              style={{
                left: `${leftPct}%`,
                top: `${topPct}%`,
              }}
            >
              {/* Counter-rotate individual logo icons so they remain strictly upright */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                whileHover={{ scale: 1.25, zIndex: 50 }}
                className={`relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border ${item.badgeBg} ${item.borderColor} backdrop-blur-md shadow-2xl ${item.glowColor} cursor-pointer hover:border-cyan-400 hover:shadow-cyan-500/50 transition-all group`}
                title={`${item.name} (${item.category})`}
              >
                <div className="shrink-0 transition-transform group-hover:scale-110">
                  {item.icon}
                </div>

                {/* Hover Tooltip showing Language Name */}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none px-2 py-0.5 rounded-md bg-slate-950/95 border border-slate-800 text-[10px] font-mono font-bold text-white whitespace-nowrap shadow-xl z-50">
                  {item.name}
                </span>
              </motion.div>
            </div>
          );
        })}
      </motion.div>

    </div>
  );
};
