import { useState, useEffect, FormEvent } from 'react';
import {
  ArrowRight,
  Check,
  Download,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  X,
} from 'lucide-react';
import { IMAGES, SERVICES } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface ContactSectionProps {
  selectedService: string | null;
  onClearSelectedService: () => void;
  onOpenCvModal: () => void;
}

export function ContactSection({
  selectedService,
  onClearSelectedService,
  onOpenCvModal,
}: ContactSectionProps) {
  const [briefOpen, setBriefOpen] = useState(false);
  const [serviceChoice, setServiceChoice] = useState(SERVICES[0].title);
  const [senderName, setSenderName] = useState('');
  const [projectNotes, setProjectNotes] = useState('');
  const [submittedNotice, setSubmittedNotice] = useState<string | null>(null);

  useEffect(() => {
    if (selectedService) {
      setServiceChoice(selectedService);
      setBriefOpen(true);
    }
  }, [selectedService]);

  const handleBriefSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cleanName = senderName.trim() || 'Guest Collaborator';
    const cleanNotes =
      projectNotes.trim() || 'Tertarik untuk berdiskusi mengenai komisi / kolaborasi.';
    const message = `Halo Dinda (D.KYRAA)! Saya ${cleanName}. Saya tertarik dengan layanan "${serviceChoice}". Detail: ${cleanNotes}`;
    const mailtoHref = `mailto:dindarizkyramadhani130@gmail.com?subject=${encodeURIComponent(
      `[D.KYRAA Commission] ${serviceChoice} — ${cleanName}`,
    )}&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoHref;
    setSubmittedNotice(`Brief untuk "${serviceChoice}" siap dikirim melalui email client Anda!`);
    window.setTimeout(() => setSubmittedNotice(null), 5000);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-14 bg-[#2b1f1a] text-[#f6f0ea] overflow-hidden"
    >
      {/* Warm bamboo/rattan texture overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#d4af37 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-5 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Studio Greetings & Contacts */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded bg-white/10 text-tertiary-fixed text-xs font-bold tracking-[0.12em] uppercase">
              <span>DIRECT CHANNELS &amp; COMMISSIONS</span>
            </div>

            <h2 className="font-gallery text-4xl sm:text-5xl text-white uppercase leading-tight font-bold">
              Mari Berkolaborasi &amp; Ciptakan Karya Visual
            </h2>

            <p className="text-sm text-[#f6f0ea]/85 max-w-lg leading-relaxed">
              Punya ide proyek ilustrasi, kebutuhan poster kompetisi/kampanye, atau ingin
              berdiskusi seputar rekayasa komputasi kreatif? Pintu studio D.KYRAA selalu terbuka.
            </p>

            {/* Contact Details Ribbon */}
            <div className="space-y-3 pt-2">
              <a
                href="https://wa.me/6285158579953"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-lg bg-white/10 hover:bg-white/15 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0">
                    <MessageSquare className="w-[18px] h-[18px]" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold tracking-wider text-tertiary-fixed uppercase">
                      WHATSAPP OFFICIAL
                    </p>
                    <p className="font-archivo text-sm text-white font-bold">+62 851-5857-9953</p>
                  </div>
                </div>
                <ArrowRight className="w-[18px] h-[18px] text-white/60 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="mailto:dindarizkyramadhani130@gmail.com"
                className="p-3.5 rounded-lg bg-white/10 hover:bg-white/15 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-on-secondary shrink-0">
                    <Mail className="w-[18px] h-[18px]" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold tracking-wider text-secondary-fixed uppercase">
                      EMAIL DIRECT
                    </p>
                    <p className="font-archivo text-sm text-white font-bold truncate">
                      dindarizkyramadhani130@gmail.com
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-[18px] h-[18px] text-white/60 group-hover:translate-x-1 transition-transform shrink-0" />
              </a>

              <div className="p-3.5 rounded-lg bg-white/10 flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-tertiary flex items-center justify-center text-on-tertiary shrink-0">
                    <MapPin className="w-[18px] h-[18px]" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold tracking-wider text-tertiary-fixed uppercase">
                      LOCATION BASE
                    </p>
                    <p className="font-archivo text-sm text-white font-bold">
                      Jakarta Barat, DKI Jakarta, Indonesia
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-white/60 uppercase shrink-0">
                  WIB / GMT+7
                </span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                type="button"
                onClick={() => {
                  setBriefOpen((prev) => !prev);
                  if (briefOpen) onClearSelectedService();
                }}
                className="px-6 py-3 bg-primary text-on-primary font-stamp text-sm font-bold tracking-wider uppercase rounded shadow-[3px_3px_0px_#111f1a] hover:-translate-y-0.5 transition-all cursor-pointer flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{briefOpen ? 'Tutup Form Brief' : 'Kirim Brief Komisi ↗'}</span>
              </button>

              <button
                type="button"
                onClick={onOpenCvModal}
                className="px-5 py-3 bg-white/15 hover:bg-white/25 text-white font-stamp text-sm font-bold tracking-wider uppercase rounded transition-all flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-[18px] h-[18px]" />
                <span>Unduh CV &amp; Portofolio</span>
              </button>
            </div>

            {/* Interactive Commission Brief Drawer */}
            {briefOpen && (
              <form
                onSubmit={handleBriefSubmit}
                className="mt-3 p-5 rounded-xl bg-[#1d1512] border border-white/15 shadow-[5px_5px_0px_#111f1a] space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-tertiary-fixed">
                    STUDIO COMMISSION BRIEF
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setBriefOpen(false);
                      onClearSelectedService();
                    }}
                    aria-label="Close brief form"
                    className="text-white/60 hover:text-white cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex flex-col gap-1 text-xs">
                    <span className="font-bold uppercase tracking-wider text-white/75">
                      Layanan
                    </span>
                    <select
                      value={serviceChoice}
                      onChange={(e) => setServiceChoice(e.target.value)}
                      className="px-3 py-2 rounded bg-[#2b1f1a] text-white border border-white/20 text-xs focus:outline-none focus:border-primary"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="flex flex-col gap-1 text-xs">
                    <span className="font-bold uppercase tracking-wider text-white/75">
                      Nama / Instansi
                    </span>
                    <input
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="Nama Anda..."
                      className="px-3 py-2 rounded bg-[#2b1f1a] text-white border border-white/20 text-xs placeholder:text-white/40 focus:outline-none focus:border-primary"
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-1 text-xs">
                  <span className="font-bold uppercase tracking-wider text-white/75">
                    Catatan Konsep / Deadline
                  </span>
                  <textarea
                    rows={3}
                    value={projectNotes}
                    onChange={(e) => setProjectNotes(e.target.value)}
                    placeholder="Ceritakan referensi visual, ukuran cetak, atau deadline proyek..."
                    className="px-3 py-2 rounded bg-[#2b1f1a] text-white border border-white/20 text-xs placeholder:text-white/40 focus:outline-none focus:border-primary resize-none"
                  />
                </label>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-tertiary-fixed text-on-tertiary-fixed font-stamp text-xs font-bold uppercase tracking-wider rounded shadow-[2px_2px_0px_#111f1a] hover:-translate-y-0.5 transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Buka di Email Client</span>
                  </button>

                  <a
                    href={`https://wa.me/6285158579953?text=${encodeURIComponent(
                      `Halo Dinda! Saya ${senderName || 'Guest'} tertarik dengan layanan ${serviceChoice}. ${projectNotes}`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-primary-fixed hover:underline"
                  >
                    Atau kirim via WhatsApp ↗
                  </a>
                </div>

                {submittedNotice && (
                  <p className="text-xs text-tertiary-fixed flex items-center gap-1.5 pt-1">
                    <Check className="w-4 h-4" />
                    <span>{submittedNotice}</span>
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Right: Traditional Window Atmosphere & Desk Notes */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[440px] p-6 rounded-2xl bg-[#1d1512] shadow-[8px_8px_0px_#111f1a]">
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden shadow-inner">
                <ResilientImage
                  src={IMAGES.contactWindow}
                  alt="Traditional Indonesian wooden window frame and bamboo craft screen with warm ambient glow"
                  fallbackTitle="D.KYRAA Studio"
                  fallbackSubtitle="Jakarta Barat, Indonesia"
                />
                {/* Floating Dossier Note inside the window */}
                <div className="absolute inset-x-4 bottom-4 p-4 rounded-lg bg-surface/95 backdrop-blur text-on-surface shadow-[4px_4px_0px_#1d1b18]">
                  <div className="flex items-center justify-between pb-1">
                    <span className="font-archivo text-xs uppercase font-bold text-primary">
                      D.KYRAA STUDIO
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2F6B4C]" aria-hidden="true" />
                  </div>
                  <p className="font-handwriting text-lg text-on-surface font-bold leading-snug">
                    &ldquo;Karya yang autentik lahir dari ketekunan latihan dan rasa ingin tahu
                    yang tak henti.&rdquo;
                  </p>
                  <div className="mt-2 pt-2 border-t border-outline-variant/30 flex items-center justify-between text-[10px] font-bold text-outline uppercase">
                    <span>Dinda Rizky Ramadhani</span>
                    <span>Informatics &amp; Art</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-inverse-surface text-inverse-on-surface py-14">
      <div className="max-w-[1440px] mx-auto px-5 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 pb-8 mb-8 border-b border-inverse-on-surface/10">
          <div className="flex flex-col gap-1">
            <div className="flex items-baseline gap-2">
              <span className="font-archivo text-[30px] leading-none tracking-tighter uppercase font-black text-inverse-on-surface">
                D.KYRAA
              </span>
              <span className="font-handwriting text-lg text-tertiary-fixed font-bold -rotate-2">
                ✦ atelier &amp; code
              </span>
            </div>
            <p className="text-surface-variant/80 max-w-md text-sm mt-1">
              Bridging creative tactile computing, experimental visual archives, and modern
              full-stack craftsmanship.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#hello"
              className="text-xs font-bold tracking-[0.12em] uppercase text-surface-variant/80 hover:text-surface-bright transition-colors"
            >
              Index
            </a>
            <span className="text-outline">/</span>
            <a
              href="#projects"
              className="text-xs font-bold tracking-[0.12em] uppercase text-surface-variant/80 hover:text-surface-bright transition-colors"
            >
              Archive
            </a>
            <span className="text-outline">/</span>
            <a
              href="#contact"
              className="text-xs font-bold tracking-[0.12em] uppercase text-surface-variant/80 hover:text-surface-bright transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pt-2">
          <p className="text-xs font-bold tracking-[0.08em] text-surface-variant/80 uppercase">
            © 2026 Dinda Rizky Ramadhani (D.KYRAA) · Informatics · Digital Illustrator · Visual
            Designer
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim" aria-hidden="true" />
            <span className="font-stamp text-xs font-bold tracking-wider text-tertiary-fixed uppercase">
              OPEN FOR COMMISSIONS &amp; COLLABS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
