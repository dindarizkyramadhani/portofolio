import {
  BadgeCheck,
  BarChart3,
  BookOpen,
  LayoutGrid,
  Palette,
  Quote,
  Sigma,
  Terminal,
} from 'lucide-react';
import {
  ACHIEVEMENTS,
  JOURNEY_MILESTONES,
  SKILL_SHEETS,
  SkillSheet,
} from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

function SkillIcon({ name, className }: { name: SkillSheet['iconName']; className: string }) {
  const props = { className: `w-6 h-6 ${className}` };
  switch (name) {
    case 'palette':
      return <Palette {...props} />;
    case 'layout':
      return <LayoutGrid {...props} />;
    case 'terminal':
      return <Terminal {...props} />;
    default:
      return <BarChart3 {...props} />;
  }
}

export function TestimonialStickyNote() {
  return (
    <section
      id="testimonial"
      className="relative w-full py-16 bg-surface-container-low flex justify-center px-4"
    >
      <div className="relative w-full max-w-2xl p-8 sm:p-10 bg-[#fff5a5] text-[#292205] shadow-[7px_7px_0px_#1d1b18] rounded-sm transform -rotate-1 hover:rotate-0 transition-transform">
        {/* Top Realistic Masking Tape Strip */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-40 h-8 bg-surface-container-lowest/85 backdrop-blur rounded shadow-sm rotate-1" />

        <div className="flex items-center gap-3 pb-3">
          <Quote className="w-6 h-6 text-tertiary" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#7a5500]">
            VERIFIED EDITORIAL COMMENDATION
          </span>
        </div>

        <p className="font-gallery italic text-xl sm:text-2xl text-[#1d1b18] leading-relaxed">
          &ldquo;Kombinasi antara logika matematika yang tajam, ketelitian teknis, dan kreativitas
          visual yang luar biasa. Dinda selalu mampu menerjemahkan gagasan abstrak menjadi karya
          visual yang menggerakkan.&rdquo;
        </p>

        <div className="mt-6 pt-4 border-t border-[#7a5500]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <p className="font-archivo text-sm font-bold uppercase text-[#1d1b18]">
              Dewan Redaksi Jurnalistik &amp; Kurator Poster FLS3N
            </p>
            <p className="font-handwriting text-lg text-[#7a5500] font-bold">
              MAN 12 Jakarta &amp; Suku Dinas Pendidikan Jak-Bar
            </p>
          </div>
          <span className="font-stamp text-xs font-bold uppercase px-2.5 py-1 bg-[#292205] text-[#fff5a5] rounded shadow-sm self-start sm:self-auto">
            RECORD 2025
          </span>
        </div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <>
      <section id="skills" className="relative w-full py-14 bg-surface">
        <div className="max-w-[1440px] mx-auto px-5 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-outline-variant/30">
            <div>
              <span className="text-xs font-bold tracking-[0.12em] uppercase text-secondary">
                BLUEPRINT &amp; PROFICIENCIES
              </span>
              <h2 className="font-gallery text-4xl md:text-[44px] leading-tight font-bold text-on-surface mt-1">
                Skills &amp; Technical Tools
              </h2>
            </div>

            <p className="text-sm text-on-surface-variant max-w-md leading-relaxed">
              Kumpulan keahlian multi-disiplin yang terbagi ke dalam 4 lembar kerja: seni ilustrasi,
              desain grafis, rekayasa informatika, dan penalaran sains.
            </p>
          </div>

          {/* 4 Paper Sheets with Tape Corners */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
            {SKILL_SHEETS.map((sheet) => (
              <div
                key={sheet.id}
                className={`relative p-6 rounded-xl bg-surface-container-lowest shadow-[5px_5px_0px_#1d1b18] transform ${sheet.rotation} hover:rotate-0 transition-transform`}
              >
                <div className={`w-16 h-4 mx-auto -mt-8 mb-4 ${sheet.tapeBg} rounded shadow-sm`} />

                <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
                  <SkillIcon name={sheet.iconName} className={sheet.accentBg} />
                  <span className="text-[10px] font-bold tracking-widest text-outline uppercase">
                    {sheet.category}
                  </span>
                </div>

                <h3 className="font-archivo text-base font-bold uppercase text-on-surface mt-3">
                  {sheet.title}
                </h3>

                <ul className="mt-4 space-y-2.5 text-xs text-on-surface-variant">
                  {sheet.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${sheet.dotColor} mt-1.5 shrink-0`} />
                      <span>
                        {item.boldPrefix && (
                          <strong className="text-on-surface">{item.boldPrefix} </strong>
                        )}
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MID-PAGE TACTILE CTA BANNER */}
      <section className="w-full py-12 bg-surface-container-low px-5 md:px-12">
        <div className="max-w-[1440px] mx-auto p-8 sm:p-12 rounded-2xl bg-surface-container-highest shadow-[6px_6px_0px_#1d1b18] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-handwriting text-xl text-primary font-bold">
              ✦ Let&rsquo;s build something visually distinct
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-on-surface uppercase tracking-tight">
              Need a custom portrait, advocacy poster, or creative tech collaborator?
            </h3>
            <p className="text-sm text-on-surface-variant max-w-xl leading-relaxed">
              Terbuka untuk kolaborasi proyek digital seni rupa, desain komunikasi visual, komisi
              potret perorangan, dan inisiatif software interaktif.
            </p>
          </div>
          <a
            href="#services"
            className="shrink-0 px-8 py-4 bg-primary text-on-primary font-stamp text-sm font-bold tracking-wider uppercase rounded shadow-[4px_4px_0px_#1d1b18] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#1d1b18] transition-all whitespace-nowrap"
          >
            Explore Services &amp; Rates ↗
          </a>
        </div>
      </section>
    </>
  );
}

export function AchievementsSection() {
  return (
    <section id="achievements" className="relative w-full py-14 bg-background">
      <div className="max-w-[1440px] mx-auto px-5 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-outline-variant/30">
          <div>
            <span className="text-xs font-bold tracking-[0.12em] uppercase text-tertiary">
              RECORD OF EXCELLENCE
            </span>
            <h2 className="font-gallery text-4xl md:text-[44px] leading-tight font-bold text-on-surface mt-1">
              Honors &amp; Milestones
            </h2>
          </div>
          <span className="font-handwriting text-xl text-primary font-bold">
            &ldquo;consistently curious, relentlessly creating&rdquo;
          </span>
        </div>

        {/* 2-Column Ink Bordered Dossier Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-xl bg-surface-container-lowest shadow-[4px_4px_0px_#1d1b18] flex items-start gap-4 hover:-translate-y-0.5 transition-transform"
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 shadow-sm font-archivo font-black text-lg ${item.badgeContainerClass}`}
              >
                {item.badgeText ? (
                  item.badgeText
                ) : item.iconName === 'functions' ? (
                  <Sigma className="w-6 h-6" />
                ) : item.iconName === 'verified' ? (
                  <BadgeCheck className="w-6 h-6" />
                ) : (
                  <BookOpen className="w-6 h-6" />
                )}
              </div>

              <div className="flex flex-col gap-1 w-full">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className={`text-[11px] uppercase font-bold ${item.kickerColorClass}`}>
                    {item.kicker}
                  </span>
                  <span className="font-stamp text-xs font-bold text-outline">
                    {item.locationOrTag}
                  </span>
                </div>
                <h3 className="text-lg text-on-surface font-bold">{item.title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function JourneySection() {
  return (
    <section id="journey" className="relative w-full py-14 bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto px-5 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-outline-variant/30">
          <div>
            <span className="text-xs font-bold tracking-[0.12em] uppercase text-primary">
              CHRONOLOGY OF GROWTH
            </span>
            <h2 className="font-gallery text-4xl md:text-[44px] leading-tight font-bold text-on-surface mt-1">
              The Journey &amp; Milestones
            </h2>
          </div>

          <p className="text-sm text-on-surface-variant max-w-md leading-relaxed">
            Evolusi proses kreatif Dinda: dari goresan pertama komik sekolah hingga bangku kuliah
            Teknik Informatika ITPLN.
          </p>
        </div>

        {/* 3-Year Scrapbook Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {JOURNEY_MILESTONES.map((milestone) => (
            <div
              key={milestone.year}
              className={`relative p-6 rounded-2xl bg-surface-container-lowest shadow-[6px_6px_0px_#1d1b18] transform ${milestone.rotationClass} hover:rotate-0 transition-transform`}
            >
              <div
                className={`w-24 h-5 mx-auto -mt-8 mb-4 backdrop-blur rounded shadow-sm ${milestone.tapeClass}`}
              />

              <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
                <span className={`font-archivo text-3xl font-black ${milestone.yearColorClass}`}>
                  {milestone.year}
                </span>
                <span
                  className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${milestone.phaseBadgeClass}`}
                >
                  {milestone.phaseBadge}
                </span>
              </div>

              <div className="aspect-[4/3] w-full rounded-lg overflow-hidden bg-surface-dim mt-4">
                <ResilientImage
                  src={milestone.imageUrl}
                  alt={milestone.imageAlt}
                  fallbackTitle={`${milestone.year} Archive`}
                  fallbackSubtitle={milestone.title}
                />
              </div>

              <h3 className="text-lg text-on-surface font-bold uppercase mt-4">
                {milestone.title}
              </h3>

              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
