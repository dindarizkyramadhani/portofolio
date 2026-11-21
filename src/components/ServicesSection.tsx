import { SERVICES } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section
      id="services"
      className="relative w-full py-14 bg-[#234338] text-[#f6f0ea] overflow-hidden"
    >
      {/* Cutting Mat Measurement Grid Overlay */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-5 md:px-12 relative z-10">
        {/* Cutting Mat Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-white/20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 backdrop-blur text-xs font-bold tracking-[0.12em] uppercase text-[#febb30]">
              <span>WORKBENCH SPECIFICATION · WORK WITH ME</span>
            </div>
            <h2 className="font-gallery text-4xl md:text-[44px] leading-tight font-bold text-white mt-2">
              Services &amp; Creative Offerings
            </h2>
          </div>

          <p className="text-sm text-white/80 max-w-md leading-relaxed">
            Tersedia untuk komisi ilustrasi personal, proyek publikasi cetak, desain poster
            kampanye lomba, hingga kolaborasi antarmuka komputasi kreatif.
          </p>
        </div>

        {/* 4 Interactive Cutting Mat Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="relative p-6 rounded-xl bg-[#1d332b] text-white shadow-[6px_6px_0px_#111f1a] flex flex-col justify-between group hover:-translate-y-1 transition-transform"
            >
              {/* Washi tape top right */}
              <div
                className={`absolute -top-3 right-4 w-16 h-5 backdrop-blur rounded ${service.tapeColor}`}
              />

              <div className="flex flex-col gap-3">
                <span
                  className={`w-10 h-10 rounded text-white flex items-center justify-center font-archivo text-base font-bold shadow-sm ${service.badgeColor}`}
                >
                  {service.number}
                </span>

                <h3 className="text-lg font-bold text-white uppercase leading-snug">
                  {service.title}
                </h3>

                <p className="text-xs text-white/80 leading-relaxed">{service.description}</p>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-white/10 rounded text-[10px] font-bold tracking-wider uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-white/15 flex items-center justify-between gap-2">
                <span className="text-[11px] font-bold tracking-wider text-[#febb30] uppercase">
                  {service.turnaround}
                </span>
                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="text-xs uppercase font-stamp font-bold text-white hover:text-[#febb30] hover:underline flex items-center gap-1 cursor-pointer whitespace-nowrap"
                >
                  {service.ctaLabel}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
