import React, { useState, useEffect } from 'react';
import { initialProfile, sampleProjects, skillsData, experienceData, educationData } from './data/portfolioData';
import { UserProfile, Project } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { ProfileEditorModal } from './components/ProfileEditorModal';

export default function App() {
  const [profile, setProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem('portfolio_user_profile');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Failed to parse saved profile:', e);
    }
    return initialProfile;
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  // Sync document title with user's name
  useEffect(() => {
    if (profile.name) {
      document.title = `${profile.name} | ${profile.roleTitle}`;
    }
  }, [profile.name, profile.roleTitle]);

  const handleSaveProfile = (updated: UserProfile) => {
    setProfile(updated);
    try {
      localStorage.setItem('portfolio_user_profile', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save profile to localStorage:', e);
    }
  };

  const handleResetProfile = () => {
    try {
      localStorage.removeItem('portfolio_user_profile');
    } catch (e) {
      console.error('Failed to reset profile in localStorage:', e);
    }
    setProfile(initialProfile);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* Background Grid Pattern & Ambience */}
      <div className="fixed inset-0 bg-grid-pattern opacity-100 pointer-events-none -z-20" />
      <div className="fixed inset-0 bg-radial-gradient pointer-events-none -z-10" />

      {/* Navigation Bar */}
      <Navbar
        profile={profile}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenEditor={() => setIsEditorOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero
          profile={profile}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <ProjectsSection
          projects={sampleProjects}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <SkillsSection
          skills={skillsData}
        />

        <ExperienceSection
          experiences={experienceData}
          education={educationData}
        />

        <ContactSection
          profile={profile}
        />
      </main>

      {/* Footer */}
      <Footer profile={profile} />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={profile}
        experiences={experienceData}
        education={educationData}
        skills={skillsData}
      />

      <ProfileEditorModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        profile={profile}
        onSave={handleSaveProfile}
        onReset={handleResetProfile}
      />
    </div>
  );
}
