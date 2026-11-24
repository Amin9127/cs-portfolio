"use client";

import { useState, useEffect } from "react";
import { Terminal, Menu, X, Gamepad2 } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { candidateProfile } from "@/data/profile";

const NAV_ITEMS = [
  { id: "flagship", label: "Featured Work" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    for (const item of NAV_ITEMS) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#090a0f]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:border-blue-400 group-hover:bg-blue-600/20 transition-all">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <span className="font-semibold text-slate-100 tracking-tight text-base block group-hover:text-blue-400 transition-colors">
              {candidateProfile.name}
            </span>
            <span className="text-[11px] text-slate-400 block -mt-1 font-mono">
              MSci Computer Science
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`transition-colors ${
                  isActive ? "text-blue-400" : "text-slate-300 hover:text-blue-400"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={candidateProfile.itchIo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-indigo-500/40 hover:bg-indigo-500/10 text-slate-200 text-xs font-medium transition-all"
          >
            <Gamepad2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>itch.io</span>
          </a>

          <a
            href={candidateProfile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:border-white/30 flex items-center justify-center text-slate-300 hover:text-white transition-all"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300"
          aria-label="Toggle Menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileMenuOpen ? (
        <div className="md:hidden bg-[#0e1017] border-b border-white/10 px-4 pt-3 pb-6 space-y-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 text-sm font-medium hover:text-blue-400"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex gap-2">
            <a
              href={candidateProfile.itchIo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-indigo-600 text-white text-xs font-semibold"
            >
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>itch.io Builds</span>
            </a>
            <a
              href={candidateProfile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
