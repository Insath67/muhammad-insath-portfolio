"use client";

import { useState } from "react";
import {
  Download,
  Menu,
  Sparkles,
  X,
} from "lucide-react";

const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#080b14]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a
          href="#home"
          className="group flex items-center gap-3"
          onClick={closeMobileMenu}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-105">
            <Sparkles size={20} />
          </span>

          <span className="text-lg font-bold tracking-tight">
            Muhammad
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              .Insath
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-6 xl:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 transition-colors duration-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/cv/Muhammad-Insath-CV.pdf"
            download
            className="flex items-center gap-2 rounded-xl border border-blue-400/30 bg-blue-500/10 px-4 py-2.5 text-sm font-semibold text-blue-300 transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-500/20"
          >
            <Download size={17} />
            Download CV
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() =>
            setIsMobileMenuOpen((previous) => !previous)
          }
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 xl:hidden"
        >
          {isMobileMenuOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#080b14]/95 px-5 py-5 backdrop-blur-xl xl:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/cv/Muhammad-Insath-CV.pdf"
              download
              onClick={closeMobileMenu}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-3 text-sm font-semibold text-white"
            >
              <Download size={17} />
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}