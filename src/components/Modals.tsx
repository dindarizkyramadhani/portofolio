import { useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
  Printer,
  X,
} from 'lucide-react';
import {
  FeaturedProject,
  PORTRAIT_STUDIES,
} from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface ProjectLightboxProps {
  project: FeaturedProject | null;
  onClose: () => void;
  onRequestCommission: (serviceTitle: string) => void;
}

export function ProjectLightboxModal({
  project,
  onClose,
  onRequestCommission,
}: ProjectLightboxProps) {
  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-on-surface/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-surface text-on-surface border-2 border-on-surface shadow-[12px_16px_0px_#3D2B1F] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project detail"
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center shadow-[2px_2px_0px_#1d1b18] hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-5">
            <div className="p-3 bg-surface-container-lowest rounded-xl shadow-[5px_5px_0px_#1d1b18]">
              <div className="aspect-[3/4] rounded-lg overflow-hidden bg-inverse-surface">
                <ResilientImage
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  fallbackTitle={project.title}
                  fallbackSubtitle={project.overlayTag}
                />
              </div>
              <p className="font-handwriting text-lg text-primary font-bold mt-2 text-center">
                {project.handwritingCaption}
              </p>
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col gap-4 pr-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-primary-fixed text-on-primary-fixed text-xs font-bold uppercase tracking-wider">
                {project.kicker}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-outline">
                {project.subtitleMeta}
              </span>
            </div>

            <h3
              id="project-modal-title"
              className="font-gallery text-3xl font-bold text-on-surface leading-tight"
            >
              {project.title}
            </h3>

            <p className="text-sm text-on-surface-variant leading-relaxed">{project.description}</p>

            <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/40">
              <p className="text-[11px] font-bold uppercase tracking-wider text-primary mb-1">
                STUDIO CONCEPT &amp; PROCESS
              </p>
              <p className="text-sm text-on-surface leading-relaxed">{project.detailedConcept}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 py-3 border-y border-outline-variant/30">
              <div>
                <p className="text-[10px] font-bold uppercase text-outline">{project.metric1Label}</p>
                <p className={`text-base font-bold ${project.metric1ColorClass}`}>
                  {project.metric1Value}
                </p>
                <p className="text-xs text-on-surface-variant">{project.metric1Sub}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-outline">{project.metric2Label}</p>
                <p className={`text-base font-bold ${project.metric2ColorClass}`}>
                  {project.metric2Value}
                </p>
                <p className="text-xs text-on-surface-variant">{project.metric2Sub}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded bg-surface-container text-xs font-bold text-on-surface"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  const target =
                    project.id === 'fls3n-poster'
                      ? 'Poster & Graphic Design'
                      : 'Book Cover & Storyboard';
                  onClose();
                  onRequestCommission(target);
                }}
                className="px-6 py-3 bg-primary text-on-primary font-stamp text-xs font-bold uppercase tracking-wider rounded shadow-[3px_3px_0px_#1d1b18] hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                Request Similar Project ↗
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-3 bg-surface-container-highest text-on-surface font-stamp text-xs font-bold uppercase tracking-wider rounded cursor-pointer"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface PortraitLightboxProps {
  selectedIndex: number | null;
  onChangeIndex: (newIndex: number) => void;
  onClose: () => void;
  onRequestCommission: (serviceTitle: string) => void;
}

export function PortraitLightboxModal({
  selectedIndex,
  onChangeIndex,
  onClose,
  onRequestCommission,
}: PortraitLightboxProps) {
  useEffect(() => {
    if (selectedIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        onChangeIndex((selectedIndex + 1) % PORTRAIT_STUDIES.length);
      }
      if (e.key === 'ArrowLeft') {
        onChangeIndex((selectedIndex - 1 + PORTRAIT_STUDIES.length) % PORTRAIT_STUDIES.length);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedIndex, onChangeIndex, onClose]);

  if (selectedIndex === null) return null;
  const study = PORTRAIT_STUDIES[selectedIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-on-surface/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="portrait-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-surface text-on-surface border-2 border-on-surface shadow-[12px_16px_0px_#3D2B1F] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close portrait gallery lightbox"
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center shadow-[2px_2px_0px_#1d1b18] hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-6 flex flex-col items-center">
            <div className="w-full max-w-[300px] p-3 bg-[#d4af37] rounded-sm shadow-[6px_6px_12px_rgba(29,27,24,0.35)] border-2 border-[#fff3b0]">
              <div className="aspect-[3/4] overflow-hidden bg-surface-dim">
                <ResilientImage
                  src={study.imageUrl}
                  alt={study.alt}
                  fallbackTitle={study.title}
                  fallbackSubtitle={study.studyNumber}
                />
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <button
                type="button"
                onClick={() =>
                  onChangeIndex(
                    (selectedIndex - 1 + PORTRAIT_STUDIES.length) % PORTRAIT_STUDIES.length,
                  )
                }
                aria-label="Previous portrait"
                className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center shadow-[2px_2px_0px_#1d1b18] hover:bg-tertiary-fixed cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="font-stamp text-xs font-bold uppercase tracking-wider text-on-surface-variant tabular-nums">
                {selectedIndex + 1} / {PORTRAIT_STUDIES.length}
              </span>
              <button
                type="button"
                onClick={() => onChangeIndex((selectedIndex + 1) % PORTRAIT_STUDIES.length)}
                aria-label="Next portrait"
                className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center shadow-[2px_2px_0px_#1d1b18] hover:bg-tertiary-fixed cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="md:col-span-6 flex flex-col gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-tertiary">
                {study.studyNumber} · {study.year}
              </span>
              <h3
                id="portrait-modal-title"
                className="font-gallery text-3xl font-bold text-on-surface mt-1"
              >
                {study.title}
              </h3>
              <p className="font-handwriting text-xl text-primary font-bold">{study.subtitle}</p>
            </div>

            <div className="space-y-3 p-4 rounded-xl bg-surface-container-low border border-outline-variant/40">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-outline">
                  MEDIUM &amp; WORKFLOW
                </p>
                <p className="text-sm font-semibold text-on-surface">{study.medium}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-outline">
                  LIGHTING &amp; CHARACTER NOTE
                </p>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {study.lightingNote}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                onRequestCommission('Digital & Portrait Illustration');
              }}
              className="px-6 py-3 bg-primary text-on-primary font-stamp text-xs font-bold uppercase tracking-wider rounded shadow-[3px_3px_0px_#1d1b18] hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              Commission a Similar Portrait ↗
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface CvModalProps {
  open: boolean;
  onClose: () => void;
}

export function CvDossierModal({ open, onClose }: CvModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const handleDownloadTxt = () => {
    const content = `DINDA RIZKY RAMADHANI (D.KYRAA)
Jakarta Barat, DKI Jakarta, Indonesia
Email: dindarizkyramadhani130@gmail.com
WhatsApp: +62 851-5857-9953

EDUCATION
- 2026 - Present: S1 Teknik Informatika, Institut Teknologi PLN (ITPLN)
- 2023 - 2026: MIPA / Sains, MAN 12 Jakarta Barat

SELECTED ACHIEVEMENTS
- Top 16 FLS3N Desain Poster Dapil 1 Jakarta Barat (2025) — "Menang Sementara, Kalah Selamanya"
- Delegasi OSN Tingkat Kota Bidang Matematika (2025)
- Peserta KOSSMI Bidang Matematika (2025)
- Lead Illustrator & Komikus, Redaksi Jurnalistik MAN 12 (2024 - 2026) — "Griffin: In The Sky"

CORE SKILLS & TOOLS
- Digital Illustration: Ibis Paint X Mastery, Semi-Realistic Portraiture, Character Design
- Graphic & Editorial: Poster Design, Canva Pro, Typography Grid, Book Cover & Storyboard
- Informatics & Code: Python 3, HTML5, Tailwind CSS, Git & GitHub, Basic Robotics & IoT
`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'CV_Dinda_Rizky_Ramadhani_DKYRAA.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-on-surface/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-surface text-on-surface border-2 border-on-surface shadow-[12px_16px_0px_#3D2B1F] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close CV dossier"
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center shadow-[2px_2px_0px_#1d1b18] hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-primary mb-2">
          <FileText className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-widest">
            OFFICIAL ARCHIVE DOSSIER · 2026
          </span>
        </div>

        <h3 id="cv-modal-title" className="font-gallery text-3xl font-bold text-on-surface">
          Dinda Rizky Ramadhani
        </h3>
        <p className="font-handwriting text-xl text-primary font-bold">
          D.KYRAA Studio · Informatics Engineering &amp; Visual Illustration
        </p>

        <div className="mt-5 space-y-4 text-sm text-on-surface-variant border-y border-outline-variant/40 py-5">
          <div>
            <h4 className="font-archivo text-xs uppercase font-bold text-on-surface mb-1">
              Education
            </h4>
            <ul className="space-y-1 text-xs">
              <li>
                <strong>2026 — Present:</strong> S1 Teknik Informatika, Institut Teknologi PLN
                (ITPLN)
              </li>
              <li>
                <strong>2023 — 2026:</strong> MIPA / Sains, MAN 12 Jakarta Barat
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-archivo text-xs uppercase font-bold text-on-surface mb-1">
              Selected Honors &amp; Roles
            </h4>
            <ul className="space-y-1 text-xs">
              <li>• 16 Besar Seleksi FLS3N Desain Poster Dapil 1 Jakarta Barat (2025)</li>
              <li>• Delegasi OSN Tingkat Kota &amp; Peserta KOSSMI Matematika (2025)</li>
              <li>• Lead Illustrator &amp; Komikus Redaksi Jurnalistik MAN 12 (2024–2026)</li>
              <li>• Divisi Humas Tari Tradisional Ratoh Jaroe &amp; Publikasi Jambore MAN 12</li>
            </ul>
          </div>

          <div>
            <h4 className="font-archivo text-xs uppercase font-bold text-on-surface mb-1">
              Technical &amp; Visual Instruments
            </h4>
            <p className="text-xs">
              Ibis Paint X, Canva Pro, Python 3, HTML5 &amp; Tailwind CSS, Git/GitHub, Figma
              Basics, Poster Advocacy Typography, Editorial Storyboarding.
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleDownloadTxt}
            className="px-5 py-2.5 bg-primary text-on-primary font-stamp text-xs font-bold uppercase tracking-wider rounded shadow-[3px_3px_0px_#1d1b18] hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download CV Summary (.TXT)</span>
          </button>

          <button
            type="button"
            onClick={() => window.print()}
            className="px-5 py-2.5 bg-surface-container-highest text-on-surface font-stamp text-xs font-bold uppercase tracking-wider rounded shadow-[2px_2px_0px_#1d1b18] hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Print Page / Save PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
}
