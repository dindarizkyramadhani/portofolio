import { useState } from 'react';
import { Fingerprint, Hand } from 'lucide-react';
import { IMAGES } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

const PRIMARY_INSTRUMENTS = [
  'Ibis Paint X',
  'Canva Pro',
  'Python 3',
  'HTML5 / Tailwind',
  'Git & GitHub',
  'Figma Basics',
];

export function HelloSection() {
  const [waveCount, setWaveCount] = useState(0);
  const [justWaved, setJustWaved] = useState(false);

  const handleWave = () => {
    setWaveCount((c) => c + 1);
    setJustWaved(true);
    window.setTimeout(() => setJustWaved(false), 2600);
  };

  return (
    <section id="hello" className="relative w-full py-14 bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto px-5 md:px-12">
        {/* Section Stamp Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-outline-variant/30">
          <div>
            <span className="text-xs font-bold tracking-[0.12em] uppercase text-primary">
              DOSSIER · 01 / PROFILE
            </span>
            <h2 className="font-gallery text-4xl md:text-[44px] leading-tight font-bold text-on-surface mt-1">
              Hello &amp; Identity
            </h2>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="font-handwriting text-xl text-tertiary font-bold -rotate-2">
              &ldquo;Bridging logic and paint strokes&rdquo;
            </span>
            <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface shadow-sm">
              <Fingerprint className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* 3-Column Tactile Scrapbook Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-10">
          {/* Column 1: Interactive Avatar & Speech Bubble */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative w-full max-w-[340px] p-4 bg-surface-container-lowest rounded-xl shadow-[5px_5px_0px_#1d1b18]">
              {/* Washi Tape Pin */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-6 bg-surface-container-highest/90 backdrop-blur rounded shadow-sm rotate-1" />

              {/* Speech Bubble */}
              <div className="mb-3 px-3 py-2 bg-primary-fixed rounded-lg text-on-primary-fixed font-handwriting text-lg flex items-center justify-between transition-all">
                <span>
                  {justWaved
                    ? '"Aww thanks! ✨ Selamat datang di studio!"'
                    : '"Hi there! Nice to meet you! 👋"'}
                </span>
                <span className="font-body text-[10px] font-bold uppercase text-on-primary-fixed-variant">
                  {waveCount > 0 ? `${waveCount}× WAVED` : 'LIVE'}
                </span>
              </div>

              {/* Avatar Illustration Display */}
              <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-surface-dim">
                <ResilientImage
                  src={IMAGES.avatar}
                  alt="Stylized semi-realistic portrait illustration of Dinda Rizky Ramadhani with glasses and stylus pen"
                  fallbackTitle="D.KYRAA Avatar"
                  fallbackSubtitle="Digital Portrait"
                />
                <div className="absolute bottom-2 left-2 bg-inverse-surface/85 text-inverse-on-surface px-2.5 py-1 rounded text-[11px] font-bold tracking-wider uppercase">
                  D.KYRAA · AVATAR
                </div>
              </div>

              {/* Wave Interaction Button */}
              <div className="mt-4 pt-3 border-t border-outline-variant/30 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={handleWave}
                  className="w-full py-2.5 bg-tertiary-fixed text-on-tertiary-fixed font-stamp text-sm font-bold tracking-wider uppercase rounded shadow-[2px_2px_0px_#1d1b18] hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#1d1b18] active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{justWaved ? 'Dinda Waved Back! ✨' : 'Wave Back at Me! 👋'}</span>
                  <Hand className="w-4 h-4" />
                </button>
                <p className="text-[13px] text-center text-outline">
                  Jakarta Barat, DKI Jakarta, Indonesia
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Biography & Academic Journey */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 p-6 rounded-xl bg-surface-container-lowest shadow-[5px_5px_0px_#1d1b18]">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed text-[11px] font-bold tracking-widest uppercase">
                  ACADEMIC &amp; CREATIVE BIO
                </span>
                <span className="font-stamp text-sm font-bold text-outline">2023 — 2026+</span>
              </div>

              <h3 className="font-display text-2xl sm:text-[32px] leading-tight font-bold text-on-surface tracking-tight">
                Logika Informatika &amp; Kepekaan Visual
              </h3>

              <p className="text-[15px] sm:text-base leading-relaxed text-on-surface-variant">
                Halo! Saya <strong className="text-on-surface font-semibold">Dinda Rizky Ramadhani</strong>,
                akrab dengan moniker kreatif{' '}
                <span className="font-handwriting text-primary text-xl font-bold">D.KYRAA</span>. Saat
                ini menempuh studi sarjana di{' '}
                <strong className="text-on-surface">
                  S1 Teknik Informatika Institut Teknologi PLN (ITPLN)
                </strong>{' '}
                angkatan 2026, setelah menuntaskan pendidikan di{' '}
                <strong className="text-on-surface">MAN 12 Jakarta (MIPA)</strong>.
              </p>

              <p className="text-[15px] sm:text-base leading-relaxed text-on-surface-variant">
                Saya menggabungkan ketelitian pemikiran sistematis matematika dan algoritma Python
                dengan kecintaan mendalam pada ilustrasi digital potret, komik, dan tata letak
                poster persuasif. Dari ruang redaksi majalah sekolah hingga kompetisi FLS3N tingkat
                kota, saya percaya desain yang baik selalu bertumpu pada empati dan struktur yang
                rapi.
              </p>
            </div>

            {/* Academic Timeline Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-outline-variant/30">
              <div className="p-3 rounded bg-surface-container-low">
                <p className="text-[11px] font-bold tracking-wider text-primary uppercase">
                  2026 — SEKARANG
                </p>
                <p className="text-base text-on-surface font-bold mt-0.5">
                  S1 Teknik Informatika
                </p>
                <p className="text-xs text-on-surface-variant mt-0.5">
                  Institut Teknologi PLN (ITPLN)
                </p>
              </div>
              <div className="p-3 rounded bg-surface-container-low">
                <p className="text-[11px] font-bold tracking-wider text-tertiary uppercase">
                  2023 — 2026
                </p>
                <p className="text-base text-on-surface font-bold mt-0.5">MIPA / Sains</p>
                <p className="text-xs text-on-surface-variant mt-0.5">MAN 12 Jakarta Barat</p>
              </div>
            </div>

            {/* Signature Stamp */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
              <div>
                <p className="font-handwriting text-2xl text-primary font-bold">
                  Dinda Rizky Ramadhani
                </p>
                <p className="text-[10px] font-bold text-outline uppercase tracking-wider">
                  OFFICIAL STUDIO MONIKER: D.KYRAA
                </p>
              </div>
              <div className="px-3 py-1 bg-surface-container-high rounded font-stamp text-xs font-bold uppercase text-on-surface shadow-sm">
                VERIFIED ATELIER
              </div>
            </div>
          </div>

          {/* Column 3: Quick Skill Grid & Leadership Roles */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {/* Experience Highlights */}
            <div className="p-5 rounded-xl bg-surface-container shadow-[4px_4px_0px_#1d1b18]">
              <p className="text-xs font-bold uppercase text-secondary tracking-wider mb-3">
                EXPERIENCE HIGHLIGHTS
              </p>
              <div className="space-y-3">
                <div className="pb-2.5 border-b border-outline-variant/30">
                  <p className="font-archivo text-sm font-bold text-on-surface uppercase">
                    Ilustrator &amp; Komikus
                  </p>
                  <p className="text-xs text-on-surface-variant mt-0.5">
                    Jurnalistik MAN 12 (2024 - 2026)
                  </p>
                </div>
                <div className="pb-2.5 border-b border-outline-variant/30">
                  <p className="font-archivo text-sm font-bold text-on-surface uppercase">
                    Divisi Hubungan Masyarakat
                  </p>
                  <p className="text-xs text-on-surface-variant mt-0.5">
                    Eskul Tari Tradisional Ratoh Jaroe
                  </p>
                </div>
                <div>
                  <p className="font-archivo text-sm font-bold text-on-surface uppercase">
                    Seksi Kreatif &amp; Publikasi
                  </p>
                  <p className="text-xs text-on-surface-variant mt-0.5">
                    Jambore Ekstrakurikuler MAN 12
                  </p>
                </div>
              </div>
            </div>

            {/* Core Toolkit Stack */}
            <div className="p-5 rounded-xl bg-surface-container-highest shadow-[4px_4px_0px_#1d1b18]">
              <p className="text-xs font-bold uppercase text-primary tracking-wider mb-3">
                PRIMARY INSTRUMENTS
              </p>
              <div className="flex flex-wrap gap-1.5">
                {PRIMARY_INSTRUMENTS.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 bg-surface-container-lowest text-on-surface rounded text-[11px] font-bold tracking-wide shadow-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
