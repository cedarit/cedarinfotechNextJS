"use client";

import { Mail, MapPin, ExternalLink } from "lucide-react";
import { COMPANY, SOCIAL_LINKS, NAV_LINKS } from "@/lib/constants";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center gap-2.5 mb-5 group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4A9EFF] to-[#1A3EAF] flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <div className="leading-none text-left">
                <p className="text-white font-semibold text-base tracking-tight">Cedar</p>
                <p className="text-[#4A9EFF] text-[10px] tracking-widest uppercase font-medium">Infotech</p>
              </div>
            </button>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm mb-6">
              {COMPANY.tagline}
            </p>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2 hover:text-[#4A9EFF] transition-colors"
              >
                <Mail size={14} />
                {COMPANY.email}
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} />
                {COMPANY.location}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href.replace("#", ""))}
                    className="text-sm text-gray-400 hover:text-[#4A9EFF] transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              {[
                { label: "Company LinkedIn", href: SOCIAL_LINKS.companyLinkedIn },
                { label: "Pankaj LinkedIn", href: SOCIAL_LINKS.pankajLinkedIn },
                { label: "Roshni LinkedIn", href: SOCIAL_LINKS.roshniLinkedIn },
                { label: "Instagram", href: SOCIAL_LINKS.companyInstagram },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-[#4A9EFF] transition-colors"
                >
                  <ExternalLink size={15} />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>
            &copy; {year} Cedar Information Technology Pvt. Ltd. All rights reserved.
          </p>
          <p>Hyderabad, India · cedarinfotech.com</p>
        </div>
      </div>
    </footer>
  );
}
