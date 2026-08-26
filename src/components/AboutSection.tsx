import React from 'react';
import { motion } from 'motion/react';
import { Code2, Database, Figma, GraduationCap, Layers, Mail, UserRound } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { NavTab } from '../types';
import design1 from '../assets/design1.jpg';
import design2 from '../assets/Design2.png';
import design3 from '../assets/design3.png';
import design4 from '../assets/design4.png';
import design5 from '../assets/design5.png';
import design6 from '../assets/design6.png';
import design7 from '../assets/design7.jpg';
import design8 from '../assets/design8.jpg';
import design9 from '../assets/design9.png';
import profileImg from '../assets/images/developer_profile_1786186870593.jpg';

interface AboutSectionProps {
  setActiveTab: (tab: NavTab) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ setActiveTab }) => {
  const focusAreas = [
    {
      icon: <Code2 className="w-5 h-5" />,
      title: 'Web Development',
      text: 'Building responsive interfaces and practical web applications with modern frontend and backend tools.'
    },
    {
      icon: <Figma className="w-5 h-5" />,
      title: 'UI/UX Design',
      text: 'Creating clear layouts, user flows, wireframes, and prototypes focused on simple user experiences.'
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: 'Graphic Design',
      text: 'Exploring visual composition, typography, color, and digital layouts to create clear and engaging designs.'
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: 'APIs & Databases',
      text: 'Working with REST APIs, CRUD features, validation, authentication, and MySQL or PostgreSQL databases.'
    }
  ];

  const designWorks = [
    { image: design1, title: 'Design Work 01' },
    { image: design2, title: 'Design Work 02' },
    { image: design3, title: 'Design Work 03' },
    { image: design4, title: 'Design Work 04' },
    { image: design5, title: 'Design Work 05' },
    { image: design6, title: 'Design Work 06' },
    { image: design7, title: 'Design Work 07' },
    { image: design8, title: 'Design Work 08' },
    { image: design9, title: 'Design Work 09' },
  ];

  return (
    <div className="space-y-10 page-section">
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="surface-card grid lg:grid-cols-[minmax(0,1fr)_240px] gap-8 items-center max-w-5xl p-6 sm:p-8 lg:p-10 rounded-3xl"
      >
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <UserRound className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Hi, I’m Tha Darinhil.
          </h1>
          <p className="text-lg text-cyan-300 font-semibold">
            Web Programming Student · UX/UI Designer · Software Developer
          </p>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>
        </div>
        <div className="relative block w-full max-w-[240px] mx-auto lg:max-w-none rounded-2xl overflow-hidden border border-white/10 aspect-[4/5] shadow-2xl">
          <img src={profileImg} alt="Tha Darinhil profile" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-teal-300/10" />
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {focusAreas.map((area) => (
          <div key={area.title} className="surface-card p-6 rounded-2xl transition-all hover:-translate-y-1 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
              {area.icon}
            </div>
            <h2 className="text-lg font-bold text-white">{area.title}</h2>
            <p className="text-sm text-slate-400 leading-relaxed">{area.text}</p>
          </div>
        ))}
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="space-y-5"
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">My Graphic Design Work</h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            A collection of visual design work exploring layout, color, typography, and creative interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {designWorks.map((work, index) => (
            <motion.figure
              key={work.title}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (index % 3) * 0.08 }}
              className="surface-card group overflow-hidden rounded-2xl transition-all hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-950 p-2">
                <img
                  src={work.image}
                  alt={work.title}
                  loading="lazy"
                  className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm font-semibold text-slate-300 group-hover:text-cyan-300 transition-colors">
                {work.title}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </motion.section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="surface-card p-6 sm:p-8 rounded-2xl space-y-4">
          <div className="flex items-center gap-3 text-cyan-400">
            <GraduationCap className="w-5 h-5" />
            <h2 className="text-lg font-bold text-white">My Education</h2>
          </div>
          <p className="text-white font-semibold">Passerelles Numériques Cambodia (PNC)</p>
          <p className="text-sm text-slate-400">Web Programming · 2025 — Present · Phnom Penh, Cambodia</p>
          <p className="text-sm text-slate-300 leading-relaxed">
            Learning through hands-on web projects, team collaboration, databases, APIs, UI/UX design, Git, Linux, and deployment fundamentals.
          </p>
        </div>

        <div className="surface-card p-6 sm:p-8 rounded-2xl space-y-4 bg-gradient-to-br from-slate-900/90 to-teal-950/30">
          <div className="flex items-center gap-3 text-cyan-400">
            <Layers className="w-5 h-5" />
            <h2 className="text-lg font-bold text-white">What I’m Building</h2>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            I’m growing through real projects that combine clean interfaces, useful functionality, reliable data, and thoughtful user experience.
          </p>
          <button
            onClick={() => setActiveTab('projects')}
            className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Explore my projects →
          </button>
        </div>
      </section>

      <section className="surface-card flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl">
        <div>
          <h2 className="text-lg font-bold text-white">Let’s connect</h2>
          <p className="text-sm text-slate-400 mt-1">Have a web project or idea to discuss?</p>
        </div>
        <button
          onClick={() => setActiveTab('contact')}
          className="button-primary inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all"
        >
          <Mail className="w-4 h-4" />
          Contact Me
        </button>
      </section>
    </div>
  );
};
