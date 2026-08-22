import React, { useState, useEffect } from 'react';

interface AnimatedTitleProps {
  defaultTitle?: string;
}

const ROLES = [
  "Senior Full-Stack Engineer",
  "Distributed Systems Architect",
  "Cloud & AI Solutions Specialist",
  "Full-Stack Software Craftsman"
];

export const AnimatedTitle: React.FC<AnimatedTitleProps> = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          // Pause at full word before deleting
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <div className="relative inline-block py-1">
      {/* Background ambient title glow - Enhanced */}
      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 via-blue-500/25 to-indigo-500/30 blur-2xl opacity-60 rounded-2xl pointer-events-none animate-pulse-glow" />
      <div className="absolute -inset-3 bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-pink-600/20 blur-xl opacity-40 rounded-2xl pointer-events-none animate-glow-pulse" />

      <div className="relative flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex items-center min-h-[40px] sm:min-h-[48px]">
          <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent animate-gradient-text tracking-tight drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            {displayText}
          </span>
          <span className="w-1.5 h-7 sm:h-9 ml-1.5 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full animate-pulse inline-block shadow-[0_0_15px_#06b6d4,0_0_30px_#0ea5e9]" />
        </div>
      </div>
    </div>
  );
};
