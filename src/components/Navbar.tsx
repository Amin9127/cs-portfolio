"use client";

import { useState, useEffect } from "react";
import { Terminal, FileText, Menu, X } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";

interface NavbarProps {
  onOpenDossier: () => void;
}

export function Navbar({ onOpenDossier }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#090a0f]/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:border-blue-400 group-hover:bg-blue-600/20 transition-all">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <span className="font-semibold text-slate-100 tracking-tight text-base block group-hover:text-blue-400 transition-colors">
              Amin Ali
            </span>
            <span className="text-[11px] text-slate-400 block -mt-1 font-mono">
              MSci CS @ City St George&apos;s
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300 font-medium">
          <a href="#flagship" className="hover:text-blue-400 transition-colors">
            Flagship Showcase
          </a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">
            All Projects
          </a>
          <a href="#playground" className="hover:text-blue-400 transition-colors">
            Interactive Demos
          </a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">
            Skills
          </a>
          <a href="#experience" className="hover:text-blue-400 transition-colors">
            Education &amp; Experience
          </a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">
            Contact
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenDossier}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/40 hover:bg-blue-500/10 text-slate-200 text-xs font-medium transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-blue-400" />
            <span>Master Dossier / CV</span>
          </button>

          <a
            href="https://github.com/Amin9127"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:border-white/30 flex items-center justify-center text-slate-300 hover:text-white transition-all"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1017] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <a
            href="#flagship"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 text-sm font-medium hover:text-blue-400"
          >
            Flagship Showcase
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 text-sm font-medium hover:text-blue-400"
          >
            All Projects
          </a>
          <a
            href="#playground"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 text-sm font-medium hover:text-blue-400"
          >
            Interactive Demos
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 text-sm font-medium hover:text-blue-400"
          >
            Skills
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 text-sm font-medium hover:text-blue-400"
          >
            Education &amp; Experience
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 text-sm font-medium hover:text-blue-400"
          >
            Contact
          </a>
          <div className="pt-2 border-t border-white/10 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDossier();
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Master Dossier</span>
            </button>
            <a
              href="https://github.com/Amin9127"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
