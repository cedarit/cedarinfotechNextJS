"use client";

import { Heart, BookOpen, Church, Building2, HandHeart, Briefcase } from "lucide-react";

const industries = [
  { icon: Heart, label: "Healthcare", desc: "Modernizing clinical and administrative systems with precision." },
  { icon: BookOpen, label: "Education", desc: "Upgrading learning platforms, student systems, and campus tools." },
  { icon: Church, label: "Churches & Ministry", desc: "Digital transformation for ministry organizations and membership systems." },
  { icon: Building2, label: "Small & Mid-Sized Business", desc: "Practical modernization for growing organizations on real-world budgets." },
  { icon: HandHeart, label: "Nonprofits", desc: "Modernizing legacy CRM, CiviCRM, and membership management systems." },
  { icon: Briefcase, label: "Professional Services", desc: "Replacing slow custom systems with modern, maintainable platforms." },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-[#4A9EFF] text-sm font-semibold uppercase tracking-widest mb-4">
            Industries
          </p>
          <h2 className="text-[#0A0A0A] font-bold tracking-tight mb-5"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
            Where We Bring Experience
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We bring deep experience across sectors where legacy systems and
            modernization challenges are most acute. Industry knowledge is
            context—not a limitation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100 bg-[#F4F6FA] card-hover group"
            >
              <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:shadow-md transition-shadow border border-gray-100">
                <ind.icon size={18} className="text-[#1A3EAF]" />
              </div>
              <div>
                <h3 className="text-[#0A0A0A] font-semibold text-base mb-1">{ind.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-gray-400 text-sm">
          Working in a sector not listed here?{" "}
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-[#1A3EAF] hover:text-[#4A9EFF] underline underline-offset-2 transition-colors"
          >
            Let&apos;s talk.
          </button>
        </p>
      </div>
    </section>
  );
}
