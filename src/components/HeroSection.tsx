import { ArrowDown, ArrowUpRight, Palette, PenTool, Sparkles } from 'lucide-react';
import { ORBIT_ROLES, OrbitRoleCard } from '../data/portfolioData';

const ACCENT_MAP: Record<OrbitRoleCard['accentColor'], { dot: string; text: string }> = {
  primary: { dot: 'bg-primary', text: 'text-primary' },
  secondary: { dot: 'bg-secondary', text: 'text-secondary' },
  tertiary: { dot: 'bg-tertiary', text: 'text-tertiary' },
  outline: { dot: 'bg-outline', text: 'text-on-surface' },
};

export function HeroSection() {
  const handleOrbitClick = (targetSection: string) => {
    const el = document.querySelector(targetSection);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-background pt-8 pb-16">
      {/* Drafting Base Pattern Layer */}
      <div
        className="absolute inset-0 opacity-[0.045] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#1d1b18 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Concentric Golden Orbital Rings */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[780px] h-[780px] rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, #febb30 0%, transparent 68%)' }}
      />
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[980px] h-[980px] rounded-full pointer-events-none opacity-25 border border-tertiary-fixed-dim"
        style={{ boxShadow: '0 0 60px rgba(254,187,48,0.15)' }}
      />

      <div className="max-w-[1440px] mx-auto px-5 md:px-12 relative z-10">
        {/* Top Meta Track Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-outline-variant/40">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex w-2.5 h-2.5 rounded-full bg-primary" aria-hidden="true" />
            <span className="text-xs font-bold uppercase text-on-surface-variant tracking-widest">
              JAKARTA BARAT, ID · INFORMATICS 2026 ARCHIVE
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed text-[11px] font-bold tracking-widest uppercase shadow-sm">
              ITPLN ENGINEERING
            </span>
            <span className="px-2.5 py-1 rounded bg-tertiary-fixed text-on-tertiary-fixed text-[11px] font-bold tracking-widest uppercase shadow-sm">
              FLS3N TOP 16 POSTER
            </span>
            <span className="font-handwriting text-xl text-primary font-bold">
              ✦ digital brush &amp; algorithmic logic
            </span>
          </div>
        </div>

        {/* Main Typographic Canvas Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8">
          {/* Left: Gigantic Typographic Anchor */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-surface-container-high text-on-surface text-xs font-bold tracking-wider uppercase shadow-[2px_2px_0px_#1d1b18]">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Atelier &amp; Coding Sandbox · Studio D.Kyraa</span>
            </div>

            <h1 className="font-archivo text-[52px] sm:text-[74px] lg:text-[94px] leading-[0.92] uppercase tracking-tighter text-on-surface font-black">
              DINDA
              <br />
              <span className="text-primary italic font-gallery font-normal lowercase tracking-normal">
                rizky
              </span>
              <br />
              RAMADHANI
            </h1>

            {/* Handwritten Stamp & Pointer Note */}
            <div className="relative pl-6 py-2">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary rounded" />
              <p className="font-handwriting text-2xl sm:text-[26px] text-on-surface-variant -rotate-1 leading-snug">
                &ldquo;Hi, I&rsquo;m Dinda! 👋 Exploring creative visual storytelling, detailed
                portraiture, and high-impact software systems.&rdquo;
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-1.5">
                <span className="font-stamp text-sm font-bold uppercase text-primary tracking-wider">
                  ✦ D.KYRAA PORTFOLIO VER. 4.0
                </span>
                <span className="font-gallery italic text-lg text-outline">
                  / S1 Teknik Informatika
                </span>
              </div>
            </div>

            {/* Hero Action Tray */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#projects"
                className="px-7 py-3.5 bg-primary text-on-primary font-stamp text-sm font-bold tracking-wider uppercase rounded shadow-[4px_4px_0px_#1d1b18] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#1d1b18] active:translate-y-0 transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <span>Explore Showcase</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="px-6 py-3.5 bg-surface-container-highest text-on-surface font-stamp text-sm font-bold tracking-wider uppercase rounded shadow-[3px_3px_0px_#1d1b18] hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#1d1b18] transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <span>Work With Me</span>
                <PenTool className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-4 py-3.5 text-on-surface-variant text-xs font-bold tracking-widest uppercase hover:text-primary transition-colors flex items-center gap-1 whitespace-nowrap"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: 4 Character Orbit Cards (Tactile Scrap Layer) */}
          <div className="lg:col-span-5 relative lg:min-h-[460px] flex flex-col lg:flex-row items-center justify-center">
            {/* Orbit Backing Decorative Mat */}
            <div className="hidden lg:block absolute inset-4 rounded-xl bg-surface-container shadow-[6px_6px_0px_#1d1b18] -rotate-1" />

            {/* Desktop Orbit Layout + Mobile/Tablet 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:block gap-4 w-full relative lg:h-[460px]">
              {ORBIT_ROLES.map((card) => {
                const colors = ACCENT_MAP[card.accentColor];
                return (
                  <button
                    key={card.id}
                    type="button"
                    onClick={() => handleOrbitClick(card.targetSection)}
                    className={`${card.positionClass} text-left w-full lg:w-56 p-4 rounded-lg bg-surface-container-lowest text-on-surface shadow-[4px_4px_0px_#1d1b18] transform ${card.rotationClass} hover:rotate-0 hover:scale-[1.03] transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-primary`}
                  >
                    <div className={`w-12 h-2.5 mx-auto -mt-5 mb-2 ${card.tapeBg} rounded shadow-sm`} />
                    <div className="flex items-center justify-between pb-2">
                      <span className={`w-3 h-3 rounded-full ${colors.dot}`} />
                      <span className="text-[10px] font-bold text-outline uppercase tracking-wider">
                        {card.roleIndex}
                      </span>
                    </div>
                    <p className={`font-archivo text-lg font-extrabold tracking-tight uppercase ${colors.text}`}>
                      {card.title}
                    </p>
                    <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                      {card.description}
                    </p>
                  </button>
                );
              })}

              {/* Center Emblem Seal */}
              <a
                href="#hello"
                aria-label="Scroll to Identity Dossier"
                className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-28 h-28 rounded-full bg-primary text-on-primary flex-col items-center justify-center p-2 text-center shadow-[4px_4px_0px_#1d1b18] border-2 border-surface hover:scale-105 transition-transform"
              >
                <Palette className="w-7 h-7 mb-0.5" />
                <span className="font-archivo text-[11px] tracking-tight uppercase font-black">
                  D.KYRAA
                </span>
                <span className="font-handwriting text-xs text-tertiary-fixed">ver. 2026</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
