import React, { useState, useEffect } from 'react';

interface AnimatedTitleProps {
  defaultTitle?: string;
}

const ROLES = [
  "Web Programming Student",
  "Frontend Web Developer",
  "Backend Web Developer",
  "UX/UI Designer"
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
      <div className="absolute -inset-4 bg-teal-400/10 blur-2xl opacity-70 rounded-2xl pointer-events-none animate-pulse-glow" />

      <div className="relative flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex items-center min-h-[40px] sm:min-h-[48px]">
          <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-violet-300 via-indigo-300 to-teal-300 bg-clip-text text-transparent animate-gradient-text tracking-tight">
            {displayText}
          </span>
          <span className="w-1.5 h-7 sm:h-9 ml-1.5 bg-gradient-to-b from-indigo-300 to-teal-300 rounded-full animate-pulse inline-block" />
        </div>
      </div>
    </div>
  );
};
