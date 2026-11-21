import {
  Award,
  BookOpen,
  Calculator,
  Compass,
  GraduationCap,
  Sigma,
  Theater,
} from 'lucide-react';
import { PARTNER_RECORDS } from '../data/portfolioData';

function PartnerIcon({ icon, className }: { icon: string; className: string }) {
  const props = { className: `w-[18px] h-[18px] ${className}` };
  switch (icon) {
    case 'school':
      return <GraduationCap {...props} />;
    case 'stories':
      return <BookOpen {...props} />;
    case 'award':
      return <Award {...props} />;
    case 'calc':
      return <Calculator {...props} />;
    case 'func':
      return <Sigma {...props} />;
    case 'theater':
      return <Theater {...props} />;
    default:
      return <Compass {...props} />;
  }
}

export function MarqueeBand() {
  const tickerContent = (
    <div className="flex items-center gap-6 font-archivo text-base md:text-lg tracking-wider uppercase text-inverse-on-surface pr-8">
      <span className="text-tertiary-fixed font-handwriting text-xl font-bold">
        ✦ DIGITALLY CRAFTED
      </span>
      <span>· S1 TEKNIK INFORMATIKA ITPLN</span>
      <span className="text-primary-fixed">✦ FLS3N DESAIN POSTER TOP 16</span>
      <span>· IBIS PAINT X PORTRAITURE</span>
      <span className="text-secondary-fixed">✦ PYTHON &amp; CREATIVE COMPUTING</span>
      <span>· JURNALISTIK &amp; RATOH JAROE MAN 12</span>
      <span className="text-tertiary-fixed font-handwriting text-xl font-bold">
        ✦ MATHEMATICS COMPETITION ALUMNI
      </span>
      <span>· VISUAL ESSAYS &amp; BOOK COVERS</span>
    </div>
  );

  return (
    <div className="relative w-full bg-inverse-surface text-inverse-on-surface py-4 overflow-hidden border-y border-dashed border-inverse-on-surface/25">
      <div className="animate-marquee whitespace-nowrap">
        {tickerContent}
        {tickerContent}
      </div>
    </div>
  );
}

export function PartnersRibbon() {
  return (
    <section
      id="partners"
      className="relative w-full bg-surface-container-highest py-8 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 mb-4 flex items-center justify-between">
        <span className="text-xs font-bold tracking-[0.12em] uppercase text-on-surface-variant">
          COLLABORATIONS, LABS &amp; COMPETITIONS
        </span>
        <span className="font-handwriting text-xl text-primary font-bold">✦ proud records</span>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 md:px-12">
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-2">
          {PARTNER_RECORDS.map((item) => (
            <div
              key={item.label}
              className="px-4 py-2 bg-surface-container-lowest rounded shadow-[2px_2px_0px_#1d1b18] flex items-center gap-2 shrink-0"
            >
              <PartnerIcon icon={item.icon} className={item.colorClass} />
              <span className="font-archivo text-xs uppercase text-on-surface font-bold whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
