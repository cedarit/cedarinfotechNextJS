"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4A9EFF] to-[#1A3EAF] flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm leading-none">C</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-semibold text-base tracking-tight">
                Cedar
              </span>
              <span className="text-[#4A9EFF] text-[10px] tracking-widest uppercase font-medium">
                Infotech
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 hover:text-[#4A9EFF]"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => handleNavClick("#contact")}
              className="px-5 py-2.5 bg-[#4A9EFF] hover:bg-[#2D7EF0] text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Book a Consultation
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0A0A0A]/98 backdrop-blur-md border-t border-white/10">
          <div className="px-6 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-300 hover:text-[#4A9EFF] text-base font-medium py-1 text-left transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-white/10">
              <button
                onClick={() => handleNavClick("#contact")}
                className="w-full px-5 py-3 bg-[#4A9EFF] hover:bg-[#2D7EF0] text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
