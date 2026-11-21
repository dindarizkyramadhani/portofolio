/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { FeaturedProject } from './data/portfolioData';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MarqueeBand, PartnersRibbon } from './components/MarqueeBand';
import { HelloSection } from './components/HelloSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import {
  AchievementsSection,
  JourneySection,
  SkillsSection,
  TestimonialStickyNote,
} from './components/SkillsAndHonorsSection';
import { ContactSection, Footer } from './components/ContactAndFooter';
import {
  CvDossierModal,
  PortraitLightboxModal,
  ProjectLightboxModal,
} from './components/Modals';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null);
  const [selectedPortraitIndex, setSelectedPortraitIndex] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  const handleRequestCommission = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Header />

      <main className="w-full pt-20 bg-surface flex-1">
        <HeroSection />
        <MarqueeBand />
        <HelloSection />
        <PartnersRibbon />
        <ProjectsSection
          onSelectProject={setSelectedProject}
          onSelectPortrait={setSelectedPortraitIndex}
          onRequestCommission={handleRequestCommission}
        />
        <ServicesSection onSelectService={handleRequestCommission} />
        <TestimonialStickyNote />
        <SkillsSection />
        <AchievementsSection />
        <JourneySection />
        <ContactSection
          selectedService={selectedService}
          onClearSelectedService={() => setSelectedService(null)}
          onOpenCvModal={() => setCvModalOpen(true)}
        />
      </main>

      <Footer />

      <ProjectLightboxModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestCommission={handleRequestCommission}
      />

      <PortraitLightboxModal
        selectedIndex={selectedPortraitIndex}
        onChangeIndex={setSelectedPortraitIndex}
        onClose={() => setSelectedPortraitIndex(null)}
        onRequestCommission={handleRequestCommission}
      />

      <CvDossierModal open={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </div>
  );
}
