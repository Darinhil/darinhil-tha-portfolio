import React, { useState, useEffect } from 'react';
import { NavTab, Project, BlogPost } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeSection } from './components/HomeSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { StackSection } from './components/StackSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ArticleModal } from './components/ArticleModal';
import { ScheduleCallModal } from './components/ScheduleCallModal';
import { AiAssistantModal } from './components/AiAssistantModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [showScheduleModal, setShowScheduleModal] = useState<boolean>(false);
  const [showAiAssistantModal, setShowAiAssistantModal] = useState<boolean>(false);

  // Sync theme with HTML class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      
      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenAiAssistant={() => setShowAiAssistantModal(true)}
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {activeTab === 'home' && (
          <HomeSection
            setActiveTab={setActiveTab}
            onSelectProject={(p) => setSelectedProject(p)}
            onOpenScheduleCall={() => setShowScheduleModal(true)}
            onOpenAiAssistant={() => setShowAiAssistantModal(true)}
          />
        )}

        {activeTab === 'projects' && (
          <ProjectsSection
            onSelectProject={(p) => setSelectedProject(p)}
          />
        )}

        {activeTab === 'experience' && (
          <ExperienceSection />
        )}

        {activeTab === 'stack' && (
          <StackSection />
        )}

        {activeTab === 'blog' && (
          <BlogSection
            onSelectArticle={(article) => setSelectedArticle(article)}
          />
        )}

        {activeTab === 'contact' && (
          <ContactSection
            onOpenScheduleCall={() => setShowScheduleModal(true)}
          />
        )}
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

      <ArticleModal
        post={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      {showScheduleModal && (
        <ScheduleCallModal
          onClose={() => setShowScheduleModal(false)}
        />
      )}

      {showAiAssistantModal && (
        <AiAssistantModal
          onClose={() => setShowAiAssistantModal(false)}
        />
      )}

    </div>
  );
}
