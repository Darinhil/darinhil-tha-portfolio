import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { NavTab, Project } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { StackSection } from './components/StackSection';
import { ContactSection } from './components/ContactSection';
import { ResumeSection } from './components/ResumeSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { AiAssistantModal } from './components/AiAssistantModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAiAssistantModal, setShowAiAssistantModal] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Sync theme with HTML class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    let frame = 0;

    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const currentScroll = window.scrollY;
        setScrollY(currentScroll);
        setScrollProgress(maxScroll > 0 ? (currentScroll / maxScroll) * 100 : 0);
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className={`relative isolate min-h-screen transition-colors ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      <div
        className="universe-stars fixed inset-0 z-0 pointer-events-none"
        style={{ transform: `translate3d(0, ${scrollY * 0.08}px, 0)` }}
      />
      <div
        className="universe-nebula fixed inset-0 z-0 pointer-events-none"
        style={{ transform: `translate3d(0, ${scrollY * 0.035}px, 0) scale(1.04)` }}
      />
      <div
        className="fixed top-16 left-0 z-50 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 shadow-[0_0_12px_rgba(34,211,238,0.8)] transition-[width] duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenAiAssistant={() => setShowAiAssistantModal(true)}
      />

      {/* Main Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {activeTab === 'home' && (
              <HomeSection
                setActiveTab={setActiveTab}
                onSelectProject={(p) => setSelectedProject(p)}
                onOpenAiAssistant={() => setShowAiAssistantModal(true)}
              />
            )}

            {activeTab === 'about' && <AboutSection setActiveTab={setActiveTab} />}

            {activeTab === 'projects' && (
              <ProjectsSection
                onSelectProject={(p) => setSelectedProject(p)}
              />
            )}

            {activeTab === 'experience' && (
              <>
                <ExperienceSection />
                <div className="border-t border-slate-800/80 mt-8" />
                <StackSection />
              </>
            )}

            {activeTab === 'resume' && <ResumeSection />}

            {activeTab === 'contact' && <ContactSection />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenAiAssistant={() => setShowAiAssistantModal(true)}
      />

      {/* Modals */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {showAiAssistantModal && (
        <AiAssistantModal
          onClose={() => setShowAiAssistantModal(false)}
        />
      )}

    </div>
  );
}
