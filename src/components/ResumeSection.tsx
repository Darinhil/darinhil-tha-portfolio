import React from 'react';
import { Printer, Mail, MapPin, Phone, BriefcaseBusiness, GraduationCap } from 'lucide-react';
import { EDUCATIONS, EXPERIENCES, PERSONAL_INFO, PROJECTS, TECH_SKILLS } from '../data/portfolioData';

export const ResumeSection: React.FC = () => {
  const featuredSkills = TECH_SKILLS.filter((skill) => skill.featured);

  return (
    <section className="print-resume page-section space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 border-b border-slate-800 pb-8">
        <div>
          <p className="text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">Curriculum Vitae</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Resume</h1>
          <p className="text-slate-400 mt-3 max-w-2xl">A quick overview of my education, projects, experience, and technical skills.</p>
        </div>
        <div className="flex flex-wrap gap-3 no-print">
          <button
            onClick={() => window.print()}
            className="button-primary inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-bold text-sm transition-all"
          >
            <Printer className="w-5 h-5" />
            Print / Save as PDF
          </button>
        </div>
      </div>

      <div className="surface-card rounded-2xl p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-white">{PERSONAL_INFO.name}</h2>
        <p className="text-cyan-400 font-medium mt-1">{PERSONAL_INFO.title}</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5 text-sm text-slate-400">
          <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4" />{PERSONAL_INFO.location}</span>
          <a className="inline-flex items-center gap-2 hover:text-cyan-400" href={`mailto:${PERSONAL_INFO.email}`}><Mail className="w-4 h-4" />{PERSONAL_INFO.email}</a>
          <span className="inline-flex items-center gap-2"><Phone className="w-4 h-4" />{PERSONAL_INFO.phone}</span>
        </div>
        <p className="text-slate-300 leading-relaxed mt-6 max-w-4xl">{PERSONAL_INFO.bio}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="surface-card rounded-2xl p-6">
          <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-5"><BriefcaseBusiness className="w-5 h-5 text-cyan-400" />Experience</h2>
          {EXPERIENCES.map((experience) => (
            <div key={experience.id}>
              <h3 className="text-lg font-bold text-white">{experience.role}</h3>
              <p className="text-cyan-400 text-sm mt-1">{experience.company} · {experience.period}</p>
              <p className="text-slate-300 text-sm leading-relaxed mt-3">{experience.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {experience.tech.map((tech) => <span key={tech} className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-300">{tech}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className="surface-card rounded-2xl p-6">
          <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-5"><GraduationCap className="w-5 h-5 text-cyan-400" />Education</h2>
          {EDUCATIONS.map((education) => (
            <div key={education.id}>
              <h3 className="text-lg font-bold text-white">{education.institution}</h3>
              <p className="text-cyan-400 text-sm mt-1">{education.degree} · {education.period}</p>
              {education.achievements.map((achievement) => <p key={achievement} className="text-slate-300 text-sm leading-relaxed mt-3">{achievement}</p>)}
            </div>
          ))}
        </div>
      </div>

      <div className="surface-card rounded-2xl p-6">
        <h2 className="text-xl font-bold text-white mb-5">Selected Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((project) => (
            <div key={project.id} className="rounded-xl bg-slate-950/70 border border-slate-800 p-4">
              <h3 className="font-bold text-white">{project.title}</h3>
              <p className="text-cyan-400 text-xs mt-1">{project.tags.join(' · ')}</p>
              <p className="text-slate-400 text-sm leading-relaxed mt-3">{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="surface-card rounded-2xl p-6">
        <h2 className="text-xl font-bold text-white mb-5">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {featuredSkills.map((skill) => <span key={skill.name} className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-sm text-slate-300">{skill.name}</span>)}
        </div>
      </div>
    </section>
  );
};
