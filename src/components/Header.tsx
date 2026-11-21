import { useEffect, useState } from 'react';
import { Menu, User, X } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'hello', label: 'About & Edu', href: '#hello' },
  { id: 'projects', label: 'Projects & Showcase', href: '#projects' },
  { id: 'services', label: 'Work With Me', href: '#services' },
  { id: 'skills', label: 'Skills & Tools', href: '#skills' },
  { id: 'achievements', label: 'Achievements', href: '#achievements' },
  { id: 'journey', label: 'The Journey', href: '#journey' },
];

export function Header() {
  const [activeSection, setActiveSection] = useState<string>('hello');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll<HTMLElement>('section[id]');
      sections.forEach((section) => {
        const top = section.offsetTop - 140;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        if (id && scrollY >= top && scrollY < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-surface/92 backdrop-blur-md shadow-[0_4px_16px_rgba(29,27,24,0.06)]">
      <div className="h-20 max-w-[1440px] mx-auto px-5 md:px-12 flex items-center justify-between gap-4">
        <a
          href="#hero"
          className="group flex items-baseline gap-2 select-none shrink-0 focus-visible:outline-2 focus-visible:outline-primary rounded"
        >
          <span className="font-archivo text-[26px] md:text-[32px] leading-none tracking-tighter uppercase font-black text-on-surface transition-transform duration-200 group-hover:-rotate-1">
            D.KYRAA
          </span>
          <span className="font-handwriting text-lg text-primary font-bold rotate-[-4deg] transition-transform duration-200 group-hover:rotate-0 group-hover:scale-105">
            ✦ studio
          </span>
        </a>

        <nav
          aria-label="Primary Navigation"
          className="hidden xl:flex items-center gap-1.5 p-1.5 rounded bg-surface-container-low/80"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`px-3 py-1.5 rounded text-xs font-bold tracking-[0.11em] uppercase whitespace-nowrap shrink-0 transition-all duration-150 ${
                  isActive
                    ? 'bg-surface-container-high text-on-surface shadow-[2px_2px_0px_#1d1b18]'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="px-4 md:px-5 py-2.5 bg-primary text-on-primary font-stamp text-xs md:text-sm font-bold tracking-wider uppercase rounded shadow-[3px_3px_0px_#1d1b18] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#1d1b18] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_#1d1b18] transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            Say Hello ↗
          </a>

          <a
            href="#hello"
            aria-label="Jump to Dinda Profile"
            className="hidden sm:flex w-9 h-9 rounded-full bg-primary items-center justify-center shrink-0 shadow-[2px_2px_0px_#1d1b18] hover:-translate-y-0.5 transition-transform"
          >
            <User className="w-4 h-4 text-on-primary" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="xl:hidden w-10 h-10 rounded bg-surface-container-high text-on-surface flex items-center justify-center shadow-[2px_2px_0px_#1d1b18]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-outline-variant/40 bg-surface/95 backdrop-blur-md px-5 py-4 shadow-lg">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`px-3.5 py-2.5 rounded text-xs font-bold tracking-[0.12em] uppercase transition-colors ${
                    isActive
                      ? 'bg-surface-container-high text-on-surface shadow-[2px_2px_0px_#1d1b18]'
                      : 'text-on-surface-variant hover:bg-surface-container-low'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
