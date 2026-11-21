export interface OrbitRoleCard {
  id: string;
  roleIndex: string;
  title: string;
  description: string;
  accentColor: 'primary' | 'secondary' | 'tertiary' | 'outline';
  tapeBg: string;
  rotationClass: string;
  positionClass: string;
  targetSection: string;
}

export interface PortraitStudy {
  id: string;
  studyNumber: string;
  title: string;
  subtitle: string;
  medium: string;
  lightingNote: string;
  year: string;
  imageUrl: string;
  alt: string;
  frameRotation: string;
}

export interface FeaturedProject {
  id: string;
  dossierNumber: string;
  tabLabel: string;
  tabBgClass: string;
  kicker: string;
  subtitleMeta: string;
  title: string;
  description: string;
  detailedConcept: string;
  metric1Label: string;
  metric1Value: string;
  metric1Sub: string;
  metric1ColorClass: string;
  metric2Label: string;
  metric2Value: string;
  metric2Sub: string;
  metric2ColorClass: string;
  tags: string[];
  ctaLabel: string;
  ctaStyleClass: string;
  imageUrl: string;
  imageAlt: string;
  overlayTag: string;
  overlaySub: string;
  handwritingCaption: string;
  yearTag: string;
  tapeClass: string;
  imageOnRight?: boolean;
}

export interface ServiceOffering {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  turnaround: string;
  ctaLabel: string;
  badgeColor: string;
  tapeColor: string;
}

export interface SkillSheet {
  id: string;
  category: string;
  title: string;
  iconName: 'palette' | 'layout' | 'terminal' | 'stats';
  accentBg: string;
  dotColor: string;
  tapeBg: string;
  rotation: string;
  items: { label?: string; boldPrefix?: string }[];
}

export interface AchievementItem {
  id: string;
  badgeText?: string;
  iconName?: 'functions' | 'verified' | 'stories';
  badgeContainerClass: string;
  kicker: string;
  kickerColorClass: string;
  locationOrTag: string;
  title: string;
  description: string;
}

export interface JourneyMilestone {
  year: string;
  yearColorClass: string;
  phaseBadge: string;
  phaseBadgeClass: string;
  tapeClass: string;
  rotationClass: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
}

export const IMAGES = {
  avatar:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDutMdyMUrGoTCkt2T6hj9IDrTq1CdKIUtzde1u-c5dGnJczu89WDVKK7LRt56zv4IB9-4KGdTrfPbzCwR7yUzdhgBXeWT4T5QzEWdGPFRrwsFy-bQ0eXEUwSiAUrk7HBQg8tL7r2BXjoh_o9aXJHBRMI-MoPKLy6wq1eSdneQt54vsxmRw__2-TmE2B3P73M2E3ZE2VPgPk8cqTgS1b1kJzYgs1UzgCq8SyVnqyxnZQ5wBAzaIhcM',
  fls3nPoster:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuASpn70xHgeeZPoqIiZzhTwOVVGXDR7GTJMoSqZKLF2xUPMXT_ElNavMLb7b6hkSKb6FTbLJ2Wl3SV3yBpODAjKOUWoK2LX4xrslj7qhS_0HSuoQCqd4ywNZbF8aHwTeu4Qah3KZ9qSoniXVT2S966TKS3Y36w_TfiSBYdRSOZig2VtHJ31cVbJvHbMQBgI0P-0KTHO2FZJ7K5NxBQHyO3HzyXJdqdF8E9IolEAZg',
  griffinCover:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAYH5POvkuRnQI-1XC8XWo-iljYtDJTZXZ_fCqKknFaUKwc7OFEx7ll7rF7-RdfzC3k6tSdWbAUkQCodBiPyHEk0NlNcH60MSRWh8cgRUtzxTS26uSo_LO8Ir136eAPX_xqNp2yZPTIf9V0QqnzorC6ZQ_s5srbIZi28xIvOaBP9jyYhJKdDZM3MHi-JLd_lK6YlQ4Kso0SKV9Q9YAAHd6-8U-KFkLuL-N3HjEEmg',
  portrait1:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBYyBCd4FD0PEemsn5LMMa3Bc9o9yESVCgcr8X7AVPTHnlsx31Tn9kZCgtKQ8xPMzOLeoVld4nHlaby0OsppndBe-aRNz2B1FvPc0mOc510IXXqmYHOr1YS6s4I1t-lQqOhfqc48BamQ-2Xg7mixMe40sPPTeRd8GGcvBJi7uTAiggIQpr2U0FegAbCcJSk0iR5sbdhx92GaDJfWuIxqe--hs9jx63_tTRO16Yl3w',
  portrait2:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDzlIh1Igk7kMu3EfjZLteCuBvpcDzM9Rem1BmCILBUoGxzWIVBR5xZ4JZOyl_UodGZlr0KVZUHhJFbXoTKAZedDMeVxVqj3pJyFdFoagMwCuyu0jvBhaulBeIIosXtkN9xF30V_p-ZLkd7lscBavDLaBVlS2oycX9keoCHnZPB57AR1Zacq104flPec9ZIwS3csv2BfmRDwiTuV30reYxWiDalcF8A7M7usFvopA',
  portrait3:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB_zZG20L_LbkjZBzt4kSzesyKib_6dwPIBahKZKNizAE-Qzuh9kLmFe88lhmYq7DfopP0_yxpitPkQHjrYJA7fXt4OIrMw30U9YrukMfgoPnemSFaC6ObdzALHihvsmrUN1VCZb4FLBiNP9ZnORt2kRTXqutxuuZaGkZHwE2oldx89bQggbCA5QGX8SDPuKGJyk4ePtHf0zecF_Tu9j4o-Kk7o-3P4hBDapkIRMQ',
  portrait4:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ0APtiIMAMul_s7i7z8w6rOr5nAe5b1abDdqET5UIYfp8kYPb8u0w4e7rlv183YpASwqLSCYT0iYDMwTj8lX7GH5uRIWckIpotjWOrtKJbKNr7JSX2rHy5bpAa_zlOru6cWmga34nWAbEbajkV3H4pD3Yv2PhfcKv3rk0tGA39F8-hjTPQsO2eUd-7cWqvXMEFMBTyUzr3C7x_wsTqGReWBizrczmbcTr5kF4zw',
  portrait5:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCEmEO9wzma3CBWBgOn2XDMzw5CfrUZLXfpE-M24xsAqehKPfUDGc-KtRXAGB-PLebKcxkIJ6H-TEbrvbEzaLhxXt9Pgd4K9lMkRtQehNYcw2gdlVjxXwz9CtvjnzlVFxe6EkFicT21bjwJeJVPejaiLG8BOJB5M_1fSXNnMpCli_1nrQ2zZSkIUiiuIQTPtTGXMgqrLTx68Dmh-QK5TbmpAtgEpJHx7Mpap-cWQw',
  portrait6:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC2sA1TMyHxkqAo76F1e9mMlA25n9rKKeyEJ_Xxl5QxUFP1qFLymgTENr32g0jEbNJd5EPJCJ6H0Mbqf3Bg4ejpOk0WVmMvvD5LMH_VG7WwLE68NK1LLe5Lmvg82bOa_Lp2r4iJDxCtS1B7xapbRaw5gGzSN2pWvqhA43OtGcyCTxDgAAsmMgTOxfMJE0QjlnYi_NP79PngZe-vYRlpAX0puPmytYwSwd_EORDmrw',
  journey2024:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDXLTovNXWqcEREv_hUzEGsVBCi859PUwrPVe3fjtCGfKE6Mj73racBcEWrGfPPxJXyiyvUUC6eERW-dUfOCjBtjDzFURtYIMX4CrF4kN6I5vuLO6TPrz7fz0Hzk9fJA2-5cU8SRUegPrxlsgz4-GebTzpmYxg25s2uDeh-K-ADaVWp10MDMZxZj0n497TZ1QlpGQcz3SO2dHliuNAVazEegyUyTrzbaO12mYgKuw',
  journey2025:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAaGyNncEGXqzard1R2sBgL4xVeoJPymwcCfgGRPyzld4vDIhGBa-hrsN1l950H9y34AnzoO2epIEi0A5d28WfR-o2DCYi7EzwP6_WZeptiWDg0KvPipZ5vw-OAzt69ioErQ8_48yDQl3E5Q50c-RnqL9qFkxfZQkXTWQqoT2yEorkfqH7jQ-TwWr587vQRpWMeL4vqboHqNm8aZ0BDpUAKhHon_MJqJq2GdwWADA',
  journey2026:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBHnQML-lNxhi6rwrLG3k2qxuM8rYBUMveMIbCKSNhzY3n1z-uwdC3wOTGqav7yeE79MnM8dE0EQ6Pjo2eS6YtU9Vfv3UWvTpzVgreag81xe02T4gIwXBS2yd5H3C75lBtohNZ5l4WaW0EaFjMpq2rsEVarJdKAW8gsRY4MPld3Uj1dVrMi0-Ap418SkaCNRdBd-WF3uFXDahagkAX-o0bhfpI6ul-abbPhqQ5GSg',
  contactWindow:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBy17UBGoRF5PguwsufpcS7CvXSxSFD-_CrdXGwVNEzPJSCEuUKOSFO7QX8yFCz7GfmtB7gVNIi74x5bRIU9O65wvaSdTOTAWhLQn0PJHJyuWXKi7t93n0LnqPiHckQSOS1mJ8S5L-q9ofl4UEn9eaWuuC5l8kVj6IfmMUAjKptv3Fona5LbwaAF6nhe4YRQvNEaEzRKAig2Vn3-MvABU6j97fTipdnvSkeZySDyA',
};

export const ORBIT_ROLES: OrbitRoleCard[] = [
  {
    id: 'illustrator',
    roleIndex: 'ROLE · 01',
    title: 'Digital Illustrator',
    description: 'Expressive lighting, anime-realism, Ibis Paint X mastery & character study.',
    accentColor: 'primary',
    tapeBg: 'bg-[#dec0b7]/80',
    rotationClass: '-rotate-3',
    positionClass: 'lg:absolute lg:-top-2 lg:left-2 sm:left-4 z-20',
    targetSection: '#projects',
  },
  {
    id: 'informatics',
    roleIndex: 'ROLE · 02',
    title: 'Informatics Eng',
    description: "ITPLN '26 undergraduate. Python, Web, IoT, and logical problem solving.",
    accentColor: 'secondary',
    tapeBg: 'bg-secondary-fixed/90',
    rotationClass: 'rotate-3',
    positionClass: 'lg:absolute lg:-top-4 lg:right-2 sm:right-4 z-10',
    targetSection: '#skills',
  },
  {
    id: 'poster',
    roleIndex: 'ROLE · 03',
    title: 'Poster Designer',
    description: 'Top 16 FLS3N West Jakarta. Sharp compositional rhetoric and visual metaphor.',
    accentColor: 'tertiary',
    tapeBg: 'bg-tertiary-fixed/90',
    rotationClass: 'rotate-2',
    positionClass: 'lg:absolute lg:bottom-4 lg:left-4 z-20',
    targetSection: '#projects',
  },
  {
    id: 'math',
    roleIndex: 'ROLE · 04',
    title: 'Math & Tech Lead',
    description: 'OSN & KOSSMI Mathematics finalist. Analytical models translated to digital canvases.',
    accentColor: 'outline',
    tapeBg: 'bg-surface-variant',
    rotationClass: '-rotate-3',
    positionClass: 'lg:absolute lg:-bottom-2 lg:right-2 sm:right-6 z-10',
    targetSection: '#achievements',
  },
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 'fls3n-poster',
    dossierNumber: '✦ DOSSIER 01 · FLS3N TOP 16',
    tabLabel: 'Advocacy Poster',
    tabBgClass: 'bg-primary text-on-primary',
    kicker: 'ADVOCACY & CAMPAIGN',
    subtitleMeta: 'SELEKSI DAPIL 1 JAKARTA BARAT',
    title: 'Menang Sementara, Kalah Selamanya',
    description:
      'Karya poster advokasi sosial bertema pencegahan judi online di kalangan remaja. Mengombinasikan metafora ilusi kemenangan instan berbasis algoritma predator dengan dampak nyata kehancuran psikologis serta relasi keluarga.',
    detailedConcept:
      'Dirancang untuk seleksi FLS3N Jakarta Barat 2025. Komposisi terbagi dua: sisi atas menampilkan ilusi neon mesin slot yang memikat, sementara sisi bawah memperlihatkan rantai kehancuran finansial dan emosional dengan tipografi kontras tinggi.',
    metric1Label: 'PERINGKAT',
    metric1Value: '16 Besar',
    metric1Sub: 'Dapil 1 Jakarta Barat',
    metric1ColorClass: 'text-primary',
    metric2Label: 'TOOLKIT',
    metric2Value: 'Ibis Paint X + Canva',
    metric2Sub: 'Komposisi Vektor & Raster',
    metric2ColorClass: 'text-secondary',
    tags: ['Typography Grid', 'Psychological Metaphor', 'Visual Rhetoric'],
    ctaLabel: 'Lihat Detail Studi Poster',
    ctaStyleClass: 'bg-inverse-surface text-inverse-on-surface',
    imageUrl: IMAGES.fls3nPoster,
    imageAlt:
      'Anti-gambling advocacy poster design titled Menang Sementara Kalah Selamanya by Dinda Rizky Ramadhani',
    overlayTag: 'Karya Resmi FLS3N Jakarta Barat',
    overlaySub: 'Media: Digital Illustration & Graphic Typography',
    handwritingCaption: '"Menang Sementara, Kalah Selamanya"',
    yearTag: '2025',
    tapeClass: 'bg-[#e7e1dc]/90 rotate-1',
    imageOnRight: false,
  },
  {
    id: 'griffin-comic',
    dossierNumber: '✦ DOSSIER 02 · EDITORIAL COMIC LEAD',
    tabLabel: 'Editorial Comic',
    tabBgClass: 'bg-secondary text-on-secondary',
    kicker: 'JURNALISTIK MAN 12',
    subtitleMeta: '2024 — 2026 PUBLICATION',
    title: 'Griffin: In The Sky',
    description:
      'Proyek cover buku dan sekuens komik editorial untuk media cetak/digital Jurnalistik MAN 12. Menghadirkan karakterisasi mitologi griffin dalam lanskap langit fajar dengan gaya ilustrasi semi-fantasi hangat yang disukai pembaca muda.',
    detailedConcept:
      'Diproduksi sepenuhnya menggunakan stylus di atas perangkat mobile dengan manajemen layer kompleks di Ibis Paint X. Fokus utama terletak pada pencahayaan fajar keemasan, dinamika sayap bulu, serta alur storyboard pembuka majalah.',
    metric1Label: 'PERAN',
    metric1Value: 'Lead Illustrator',
    metric1Sub: 'Concept Art & Layout',
    metric1ColorClass: 'text-secondary',
    metric2Label: 'PROSES PRODUKSI',
    metric2Value: '100% Mobile Atelier',
    metric2Sub: 'Ibis Paint X Stylus Work',
    metric2ColorClass: 'text-primary',
    tags: ['Character Design', 'Storyboard Flow', 'Editorial Print'],
    ctaLabel: 'Baca Cerita & Cover ↗',
    ctaStyleClass: 'bg-secondary text-on-secondary',
    imageUrl: IMAGES.griffinCover,
    imageAlt: 'Fantasy book cover illustration titled Griffin In The Sky by Dinda Rizky Ramadhani',
    overlayTag: 'Edisi Jurnalistik Sekolah',
    overlaySub: 'Full Visual Spread & Character Chapter Cover',
    handwritingCaption: '"Griffin: In The Sky Chapter 01"',
    yearTag: 'SERIES',
    tapeClass: 'bg-[#a6c8ff]/80 -rotate-1',
    imageOnRight: true,
  },
];

export const PORTRAIT_STUDIES: PortraitStudy[] = [
  {
    id: 'study-01',
    studyNumber: 'Study #01',
    title: 'Nostalgia',
    subtitle: 'Wistful Amber Portrait',
    medium: 'Ibis Paint X · Painterly Brush',
    lightingNote: 'Warm vintage sepia & amber rim light focusing on expressive iris depth.',
    year: '2025',
    imageUrl: IMAGES.portrait1,
    alt: 'Semi-realistic digital portrait painting of a wistful young woman with dark hair and draped scarf in warm sepia lighting',
    frameRotation: '-rotate-1',
  },
  {
    id: 'study-02',
    studyNumber: 'Study #02',
    title: 'Celeste Glow',
    subtitle: 'Ethereal Sky Study',
    medium: 'Ibis Paint X · Soft Airbrush',
    lightingNote: 'Pastel sunset sky bounce light with silvery-blue hair highlights.',
    year: '2025',
    imageUrl: IMAGES.portrait2,
    alt: 'Digital art portrait of an ethereal elf girl with silvery blue hair against a pastel sunset sky',
    frameRotation: 'rotate-1',
  },
  {
    id: 'study-03',
    studyNumber: 'Study #03',
    title: 'Serenity',
    subtitle: 'Minimalist Beauty Study',
    medium: 'Ibis Paint X · Skin Subsurface',
    lightingNote: 'Clean studio rim lighting with soft cheek blush and glossy hair strands.',
    year: '2025',
    imageUrl: IMAGES.portrait3,
    alt: 'Minimalist semi-realistic beauty portrait of a young Asian girl with glossy dark hair and clean rim lighting',
    frameRotation: '-rotate-2',
  },
  {
    id: 'study-04',
    studyNumber: 'Study #04',
    title: 'Blade Vanguard',
    subtitle: 'Fantasy Warrior Character',
    medium: 'Ibis Paint X · High Contrast',
    lightingNote: 'Dramatic atmospheric haze with specular metallic blade reflection.',
    year: '2024',
    imageUrl: IMAGES.portrait4,
    alt: 'Anime fantasy male character warrior with short dark hair holding a gleaming silver blade',
    frameRotation: 'rotate-2',
  },
  {
    id: 'study-05',
    studyNumber: 'Study #05',
    title: 'Contemplation',
    subtitle: 'Cinematic Backlight Portrait',
    medium: 'Ibis Paint X · Warm Shadow',
    lightingNote: 'Soft indoor golden backlight sculpting facial planes and collar folds.',
    year: '2025',
    imageUrl: IMAGES.portrait5,
    alt: 'Moody cinematic portrait of an expressive young man in white collar shirt with warm indoor backlight',
    frameRotation: '-rotate-1',
  },
  {
    id: 'study-06',
    studyNumber: 'Study #06',
    title: 'Twilight Veil',
    subtitle: 'Violet & Candlelight Study',
    medium: 'Ibis Paint X · Color Harmony',
    lightingNote: 'Dual complementary temperature: cool violet twilight vs warm candle flare.',
    year: '2026',
    imageUrl: IMAGES.portrait6,
    alt: 'Dreamy girl portrait bathed in violet twilight and warm candle flare',
    frameRotation: 'rotate-1',
  },
];

export const SERVICES: ServiceOffering[] = [
  {
    id: 'digital-portrait',
    number: '01',
    title: 'Digital & Portrait Illustration',
    description:
      'Ilustrasi potret semi-realis personal, fanart, dan studi karakter bertekstur hangat menggunakan stylus dan Ibis Paint X.',
    tags: ['High-Res PNG', 'Lighting Focus'],
    turnaround: 'TURNAROUND: 3-5 HARI',
    ctaLabel: 'Pesan ↗',
    badgeColor: 'bg-[#bf542c]',
    tapeColor: 'bg-[#dec0b7]/70 rotate-3',
  },
  {
    id: 'poster-graphic',
    number: '02',
    title: 'Poster & Graphic Design',
    description:
      'Desain poster kompetisi, kampanye edukatif (standar FLS3N), materi promosi acara, dan tata letak tipografi terstruktur.',
    tags: ['Print-Ready PDF', 'Visual Metaphor'],
    turnaround: 'TURNAROUND: 2-4 HARI',
    ctaLabel: 'Pesan ↗',
    badgeColor: 'bg-[#996c00]',
    tapeColor: 'bg-[#ffdea9]/70 -rotate-2',
  },
  {
    id: 'book-cover',
    number: '03',
    title: 'Book Cover & Storyboard',
    description:
      'Pembuatan sampul buku cetak / novel digital, spread majalah sekolah, tata letak sekuens komik, dan storyboard visual naratif.',
    tags: ['Full Wrap Cover', 'CMYK / RGB'],
    turnaround: 'TURNAROUND: 4-7 HARI',
    ctaLabel: 'Pesan ↗',
    badgeColor: 'bg-[#2e5f9d]',
    tapeColor: 'bg-[#a6c8ff]/70 rotate-2',
  },
  {
    id: 'creative-tech',
    number: '04',
    title: 'Creative Tech & Frontend',
    description:
      'Kolaborasi rekayasa web frontend interaktif, visualisasi skrip Python, prototype aplikasi, dan aset grafis UI bertema unik.',
    tags: ['Python / HTML5', 'UI Prototype'],
    turnaround: 'PROJECT-BASED',
    ctaLabel: 'Diskusi ↗',
    badgeColor: 'bg-[#57423b]',
    tapeColor: 'bg-[#dec0b7]/70 -rotate-3',
  },
];

export const SKILL_SHEETS: SkillSheet[] = [
  {
    id: 'cat-a',
    category: 'CATEGORY A',
    title: 'Digital Illustration',
    iconName: 'palette',
    accentBg: 'text-primary',
    dotColor: 'bg-primary',
    tapeBg: 'bg-primary-fixed/80',
    rotation: '-rotate-1',
    items: [
      { boldPrefix: 'Ibis Paint X Mastery', label: '(Stylus & Layering)' },
      { label: 'Semi-realistic portraiture rendering' },
      { label: 'Lighting, skin subsurface & highlights' },
      { label: 'Character concept design & fanart' },
    ],
  },
  {
    id: 'cat-b',
    category: 'CATEGORY B',
    title: 'Graphic & Editorial',
    iconName: 'layout',
    accentBg: 'text-tertiary',
    dotColor: 'bg-tertiary',
    tapeBg: 'bg-tertiary-fixed/80',
    rotation: 'rotate-1',
    items: [
      { boldPrefix: 'FLS3N-level Poster Design' },
      { label: 'Canva Pro layouting & typography rules' },
      { label: 'Book cover artwork & comic layout' },
      { label: 'Visual hierarchy & social advocacy' },
    ],
  },
  {
    id: 'cat-c',
    category: 'CATEGORY C',
    title: 'Informatics & Code',
    iconName: 'terminal',
    accentBg: 'text-secondary',
    dotColor: 'bg-secondary',
    tapeBg: 'bg-secondary-fixed/80',
    rotation: '-rotate-1',
    items: [
      { boldPrefix: 'Python Programming', label: '(Data & Logic)' },
      { label: 'HTML5, Tailwind CSS, Responsive Web' },
      { label: 'Algorithmic computational thinking' },
      { label: 'Git, version control, project pipelines' },
    ],
  },
  {
    id: 'cat-d',
    category: 'CATEGORY D',
    title: 'Math & Creative Tech',
    iconName: 'stats',
    accentBg: 'text-outline',
    dotColor: 'bg-outline',
    tapeBg: 'bg-surface-variant',
    rotation: 'rotate-1',
    items: [
      { boldPrefix: 'OSN / KOSSMI Mathematics Logic' },
      { label: 'Problem decomposition & modeling' },
      { label: 'Basic Robotics & IoT principles' },
      { label: 'Analytical structure applied to visual UX' },
    ],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'ach-fls3n',
    badgeText: '16',
    badgeContainerClass: 'bg-primary-fixed text-on-primary-fixed',
    kicker: 'FLS3N DESAIN POSTER · 2025',
    kickerColorClass: 'text-primary',
    locationOrTag: 'JAKARTA BARAT',
    title: '16 Besar Seleksi FLS3N Desain Poster',
    description:
      'Mewakili MAN 12 Jakarta di Dapil 1 Jakarta Barat dalam kompetisi desain poster advokasi sosial tingkat SMA/MA se-DKI Jakarta.',
  },
  {
    id: 'ach-osn',
    iconName: 'functions',
    badgeContainerClass: 'bg-secondary-fixed text-on-secondary-fixed',
    kicker: 'OLIMPIADE SAINS NASIONAL · 2025',
    kickerColorClass: 'text-secondary',
    locationOrTag: 'MATEMATIKA',
    title: 'Peserta OSN Tingkat Kota Matematika',
    description:
      'Terpilih sebagai delegasi sekolah untuk menguji pemecahan masalah analitis, kalkulus, dan kombinatorika tingkat SMA.',
  },
  {
    id: 'ach-kossmi',
    iconName: 'verified',
    badgeContainerClass: 'bg-tertiary-fixed text-on-tertiary-fixed',
    kicker: 'KOMPETISI SAINS MADRASAH · 2025',
    kickerColorClass: 'text-tertiary',
    locationOrTag: 'KOSSMI',
    title: 'Peserta KOSSMI Bidang Matematika',
    description:
      'Kompetisi Sains Siswa Muslim Indonesia yang menguji pemahaman teori matematika komprehensif dan logika terapan.',
  },
  {
    id: 'ach-jurnalistik',
    iconName: 'stories',
    badgeContainerClass: 'bg-surface-container-high text-on-surface',
    kicker: 'REDAKSI SEKOLAH · 2024–2026',
    kickerColorClass: 'text-on-surface',
    locationOrTag: 'MAN 12 JAKARTA',
    title: 'Lead Illustrator & Komikus Eksklusif',
    description:
      'Memimpin produksi visual untuk majalah sekolah, serial komik "Griffin: In The Sky", dan branding publikasi acara sekolah.',
  },
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    year: '2024',
    yearColorClass: 'text-outline',
    phaseBadge: 'FASE EKSPLORASI',
    phaseBadgeClass: 'bg-surface-container text-on-surface',
    tapeClass: 'bg-tertiary-fixed/80 rotate-2',
    rotationClass: '-rotate-1',
    imageUrl: IMAGES.journey2024,
    imageAlt:
      'Sketchbook with hand-drawn comic character panels, colored pencils, and a tablet running drawing software',
    title: 'Jurnalistik & Tari Tradisional',
    description:
      'Mulai aktif sebagai ilustrator utama majalah sekolah MAN 12, merancang komik Griffin, serta menjadi humas untuk ekstrakurikuler Tari Ratoh Jaroe.',
  },
  {
    year: '2025',
    yearColorClass: 'text-primary',
    phaseBadge: 'FASE KOMPETISI',
    phaseBadgeClass: 'bg-primary-fixed text-on-primary-fixed',
    tapeClass: 'bg-primary-fixed/80 -rotate-2',
    rotationClass: 'rotate-1',
    imageUrl: IMAGES.journey2025,
    imageAlt:
      'Competition certificates, mathematics formula draft notes, and digital poster print in studio desk workspace',
    title: 'FLS3N Poster & OSN Matematika',
    description:
      'Tahun pembuktian kompetitif: meraih 16 Besar FLS3N Desain Poster Jakarta Barat dan berkompetisi di ajang OSN serta KOSSMI bidang Matematika.',
  },
  {
    year: '2026',
    yearColorClass: 'text-secondary',
    phaseBadge: 'FASE S1 INFORMATIKA',
    phaseBadgeClass: 'bg-secondary-fixed text-on-secondary-fixed',
    tapeClass: 'bg-secondary-fixed/80 rotate-1',
    rotationClass: '-rotate-1',
    imageUrl: IMAGES.journey2026,
    imageAlt:
      'Workspace showing code editor, engineering textbook from ITPLN, stylus pen and digital tablet with character painting',
    title: 'ITPLN & Creative Computing',
    description:
      'Memasuki jenjang S1 Teknik Informatika di ITPLN Jakarta, menyatukan keahlian visual dengan rekayasa algoritma perangkat lunak modern.',
  },
];

export const PARTNER_RECORDS = [
  { icon: 'school', colorClass: 'text-secondary', label: 'ITPLN Teknik Informatika 2026' },
  { icon: 'stories', colorClass: 'text-primary', label: 'Redaksi Jurnalistik MAN 12' },
  { icon: 'award', colorClass: 'text-tertiary', label: 'FLS3N Desain Poster Jak-Bar' },
  { icon: 'calc', colorClass: 'text-secondary', label: 'OSN Matematika SMA 2025' },
  { icon: 'func', colorClass: 'text-primary', label: 'KOSSMI Matematika 2025' },
  { icon: 'theater', colorClass: 'text-outline', label: 'Saman Ratoh Jaroe Humas' },
  { icon: 'camp', colorClass: 'text-tertiary', label: 'Jambore Ekstrakurikuler 2024' },
];
