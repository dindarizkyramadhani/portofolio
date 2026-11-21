import { useState } from 'react';
import { ArrowRight, Brush, Eye } from 'lucide-react';
import {
  FEATURED_PROJECTS,
  FeaturedProject,
  PORTRAIT_STUDIES,
  PortraitStudy,
} from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

type DossierFilter = 'all' | 'fls3n-poster' | 'griffin-comic' | 'portrait-gallery';

interface ProjectsSectionProps {
  onSelectProject: (project: FeaturedProject) => void;
  onSelectPortrait: (index: number) => void;
  onRequestCommission: (presetService: string) => void;
}

const FILTER_TABS: { id: DossierFilter; label: string }[] = [
  { id: 'all', label: 'All Dossiers (03)' },
  { id: 'fls3n-poster', label: '01 · FLS3N Poster' },
  { id: 'griffin-comic', label: '02 · Griffin Comic' },
  { id: 'portrait-gallery', label: '03 · Portrait Shelf' },
];

export function ProjectsSection({
  onSelectProject,
  onSelectPortrait,
  onRequestCommission,
}: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<DossierFilter>('all');

  const showProject = (id: string) => activeFilter === 'all' || activeFilter === id;
  const showGallery = activeFilter === 'all' || activeFilter === 'portrait-gallery';

  const row1Portraits: PortraitStudy[] = PORTRAIT_STUDIES.slice(0, 3);
  const row2Portraits: PortraitStudy[] = PORTRAIT_STUDIES.slice(3, 6);

  return (
    <section id="projects" className="relative w-full py-14 bg-background">
      <div className="max-w-[1440px] mx-auto px-5 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-outline-variant/40">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-1 rounded bg-primary-fixed text-on-primary-fixed text-xs font-bold tracking-[0.12em] uppercase">
                ARCHIVE DOSSIER
              </span>
              <span className="font-handwriting text-xl text-primary font-bold">
                selected curated works ✦
              </span>
            </div>
            <h2 className="font-gallery text-4xl md:text-[44px] leading-tight font-bold text-on-surface mt-1">
              Project Showcase
            </h2>
          </div>

          <p className="text-sm text-on-surface-variant max-w-md leading-relaxed">
            Dari poster kampanye persuasif hingga seri potret semi-realis di atas rak kayu atelier,
            setiap karya dirancang dengan presisi konsep dan ketajaman emosi.
          </p>
        </div>

        {/* Manila Folder Filter Bar */}
        <div
          className="mt-6 flex flex-wrap items-center gap-2"
          role="tablist"
          aria-label="Filter Project Dossiers"
        >
          {FILTER_TABS.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded font-stamp text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-inverse-surface text-inverse-on-surface shadow-[3px_3px_0px_#1d1b18] -translate-y-0.5'
                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* FOLDER TAB SYSTEM : 3 CORE PROJECTS */}
        <div className="mt-8 flex flex-col gap-12">
          {FEATURED_PROJECTS.filter((p) => showProject(p.id)).map((project) => (
            <article
              key={project.id}
              className="relative p-6 sm:p-10 rounded-2xl bg-surface-container-lowest shadow-[8px_8px_0px_#1d1b18] overflow-hidden"
            >
              {/* Manila Folder Corner Tab */}
              <div
                className={`absolute top-0 right-6 sm:right-10 px-4 py-1.5 rounded-b-lg font-stamp text-xs font-bold uppercase tracking-wider shadow-sm ${project.tabBgClass}`}
              >
                {project.dossierNumber}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4 lg:pt-0">
                {/* Preview Polaroid Frame */}
                <div
                  className={`lg:col-span-6 flex justify-center ${
                    project.imageOnRight ? 'order-1 lg:order-2' : ''
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    aria-label={`Inspect ${project.title} in lightbox`}
                    className={`group text-left relative w-full max-w-[420px] p-4 bg-surface-container-low rounded-xl shadow-[6px_6px_0px_#1d1b18] transform ${
                      project.imageOnRight ? 'rotate-1' : '-rotate-1'
                    } hover:rotate-0 transition-transform cursor-pointer focus-visible:outline-2 focus-visible:outline-primary`}
                  >
                    <div
                      className={`w-32 h-6 mx-auto -mt-6 mb-3 backdrop-blur rounded shadow-sm ${project.tapeClass}`}
                    />
                    <div className="aspect-[3/4] w-full rounded-lg overflow-hidden bg-inverse-surface shadow-inner relative">
                      <ResilientImage
                        src={project.imageUrl}
                        alt={project.imageAlt}
                        fallbackTitle={project.title}
                        fallbackSubtitle={project.overlayTag}
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1.5 rounded bg-inverse-surface/85 text-inverse-on-surface text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect</span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 p-3 bg-inverse-surface/88 backdrop-blur rounded text-inverse-on-surface">
                        <p
                          className={`font-archivo text-xs uppercase font-bold ${
                            project.id === 'fls3n-poster'
                              ? 'text-tertiary-fixed'
                              : 'text-secondary-fixed'
                          }`}
                        >
                          {project.overlayTag}
                        </p>
                        <p className="text-[11px] opacity-85 mt-0.5">{project.overlaySub}</p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between gap-2">
                      <span
                        className={`font-handwriting text-lg font-bold ${
                          project.id === 'fls3n-poster' ? 'text-primary' : 'text-secondary'
                        }`}
                      >
                        {project.handwritingCaption}
                      </span>
                      <span className="text-[10px] font-bold text-outline uppercase">
                        {project.yearTag}
                      </span>
                    </div>
                  </button>
                </div>

                {/* Conceptual Description & Metrics */}
                <div
                  className={`lg:col-span-6 flex flex-col gap-4 ${
                    project.imageOnRight ? 'order-2 lg:order-1' : ''
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`px-2.5 py-1 rounded text-xs font-bold tracking-widest uppercase ${
                        project.id === 'fls3n-poster'
                          ? 'bg-surface-container-highest text-on-surface'
                          : 'bg-secondary-fixed text-on-secondary-fixed'
                      }`}
                    >
                      {project.kicker}
                    </span>
                    <span
                      className={`text-xs font-bold tracking-widest uppercase ${
                        project.id === 'fls3n-poster' ? 'text-tertiary' : 'text-outline'
                      }`}
                    >
                      {project.subtitleMeta}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-[32px] leading-tight font-bold text-on-surface uppercase tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-[15px] sm:text-base leading-relaxed text-on-surface-variant">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 py-3 border-y border-outline-variant/30">
                    <div>
                      <span className="text-[10px] font-bold text-outline uppercase tracking-wider">
                        {project.metric1Label}
                      </span>
                      <p className={`text-lg font-bold mt-0.5 ${project.metric1ColorClass}`}>
                        {project.metric1Value}
                      </p>
                      <p className="text-xs text-on-surface-variant">{project.metric1Sub}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-outline uppercase tracking-wider">
                        {project.metric2Label}
                      </span>
                      <p className={`text-lg font-bold mt-0.5 ${project.metric2ColorClass}`}>
                        {project.metric2Value}
                      </p>
                      <p className="text-xs text-on-surface-variant">{project.metric2Sub}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-surface-container rounded text-[11px] font-bold tracking-wide text-on-surface"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className={`inline-flex items-center gap-2 px-6 py-3 font-stamp text-sm font-bold tracking-wider uppercase rounded shadow-[3px_3px_0px_#1d1b18] hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#1d1b18] transition-all cursor-pointer ${project.ctaStyleClass}`}
                    >
                      <span>{project.ctaLabel}</span>
                      {project.id === 'fls3n-poster' && <ArrowRight className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}

          {/* PROJECT 03: PORTRAIT ILLUSTRATION SERIES ON WOODEN SHELVES */}
          {showGallery && (
            <article className="relative p-6 sm:p-10 rounded-2xl bg-surface-container shadow-[8px_8px_0px_#1d1b18] overflow-hidden">
              <div className="absolute top-0 right-6 sm:right-10 bg-tertiary text-on-tertiary px-4 py-1.5 rounded-b-lg font-stamp text-xs font-bold uppercase tracking-wider shadow-sm">
                ✦ DOSSIER 03 · GALLERY SHOWCASE
              </div>

              <div className="flex flex-col gap-2 pb-6 pt-4 sm:pt-0">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-2.5 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded text-xs font-bold tracking-widest uppercase">
                    WOODEN SHELF EXHIBITION
                  </span>
                  <span className="font-handwriting text-xl text-tertiary font-bold">
                    &ldquo;portrait illustration gallery&rdquo;
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-[32px] leading-tight font-bold text-on-surface uppercase tracking-tight">
                  Portrait Studies &amp; Character Expressions
                </h3>

                <p className="text-[15px] sm:text-base leading-relaxed text-on-surface-variant max-w-2xl">
                  Terinspirasi dari penataan galeri frame berukir emas di atas ambalan kayu
                  tradisional, kumpulan studi potret semi-realistik ini mengeksplorasi sorot mata,
                  pencahayaan dramatis, dan kedalaman karakter. Klik frame mana saja untuk inspeksi
                  penuh.
                </p>
              </div>

              {/* VIRTUAL WOODEN SHELF MOCKUP (2 SHELVES X 3 ART FRAMES) */}
              <div className="relative w-full p-4 sm:p-8 rounded-xl bg-[#dfd0be]/40 shadow-inner">
                {/* SHELF ROW 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pb-3 items-end">
                  {row1Portraits.map((study, idx) => (
                    <button
                      key={study.id}
                      type="button"
                      onClick={() => onSelectPortrait(idx)}
                      className="flex flex-col items-center group cursor-pointer focus-visible:outline-2 focus-visible:outline-primary"
                    >
                      <div
                        className={`w-full max-w-[200px] p-2 bg-[#d4af37] rounded-sm shadow-[4px_4px_8px_rgba(29,27,24,0.3)] border-2 border-[#fff3b0] transform ${study.frameRotation} group-hover:scale-105 group-hover:rotate-0 transition-all relative`}
                      >
                        <div className="aspect-[3/4] w-full overflow-hidden bg-surface-dim relative">
                          <ResilientImage
                            src={study.imageUrl}
                            alt={study.alt}
                            fallbackTitle={study.title}
                            fallbackSubtitle={study.studyNumber}
                          />
                          <div className="absolute inset-0 bg-inverse-surface/0 group-hover:bg-inverse-surface/20 transition-colors flex items-center justify-center">
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity px-2.5 py-1 rounded bg-inverse-surface/85 text-inverse-on-surface text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                              <Eye className="w-3 h-3" /> View
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className="font-handwriting text-base font-bold text-on-surface-variant mt-2 group-hover:text-primary transition-colors">
                        {study.studyNumber} · {study.title}
                      </span>
                    </button>
                  ))}
                </div>

                {/* WOODEN SHELF PLANK 1 */}
                <div className="w-full h-4 bg-[#7a4b27] rounded-sm shadow-[0_6px_10px_rgba(29,27,24,0.35)] relative flex items-center justify-between px-8 mb-10">
                  <div className="w-4 h-6 bg-[#3b2311] -mt-1 shadow-md" />
                  <div className="w-4 h-6 bg-[#3b2311] -mt-1 shadow-md" />
                  <div className="w-4 h-6 bg-[#3b2311] -mt-1 shadow-md" />
                </div>

                {/* SHELF ROW 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pb-3 items-end">
                  {row2Portraits.map((study, idx) => (
                    <button
                      key={study.id}
                      type="button"
                      onClick={() => onSelectPortrait(idx + 3)}
                      className="flex flex-col items-center group cursor-pointer focus-visible:outline-2 focus-visible:outline-primary"
                    >
                      <div
                        className={`w-full max-w-[200px] p-2 bg-[#d4af37] rounded-sm shadow-[4px_4px_8px_rgba(29,27,24,0.3)] border-2 border-[#fff3b0] transform ${study.frameRotation} group-hover:scale-105 group-hover:rotate-0 transition-all relative`}
                      >
                        <div className="aspect-[3/4] w-full overflow-hidden bg-surface-dim relative">
                          <ResilientImage
                            src={study.imageUrl}
                            alt={study.alt}
                            fallbackTitle={study.title}
                            fallbackSubtitle={study.studyNumber}
                          />
                          <div className="absolute inset-0 bg-inverse-surface/0 group-hover:bg-inverse-surface/20 transition-colors flex items-center justify-center">
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity px-2.5 py-1 rounded bg-inverse-surface/85 text-inverse-on-surface text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                              <Eye className="w-3 h-3" /> View
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className="font-handwriting text-base font-bold text-on-surface-variant mt-2 group-hover:text-primary transition-colors">
                        {study.studyNumber} · {study.title}
                      </span>
                    </button>
                  ))}
                </div>

                {/* WOODEN SHELF PLANK 2 */}
                <div className="w-full h-4 bg-[#7a4b27] rounded-sm shadow-[0_6px_10px_rgba(29,27,24,0.35)] relative flex items-center justify-between px-8">
                  <div className="w-4 h-6 bg-[#3b2311] -mt-1 shadow-md" />
                  <div className="w-4 h-6 bg-[#3b2311] -mt-1 shadow-md" />
                  <div className="w-4 h-6 bg-[#3b2311] -mt-1 shadow-md" />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Brush className="w-[18px] h-[18px] text-tertiary" />
                  <span className="text-xs font-bold tracking-wider uppercase text-on-surface-variant">
                    Signature stamp: &lsquo;Djuck Sai&rsquo; &amp; D.KYRAA
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onRequestCommission('Digital & Portrait Illustration')}
                  className="px-5 py-2.5 bg-primary text-on-primary font-stamp text-sm font-bold tracking-wider uppercase rounded shadow-[3px_3px_0px_#1d1b18] hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  Request Portrait Commission ↗
                </button>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
