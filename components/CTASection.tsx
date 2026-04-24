"use client";

import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#1A3EAF]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-[#4A9EFF] text-sm font-semibold uppercase tracking-widest mb-6">
          Ready to Modernize?
        </p>
        <h2
          className="text-white font-bold tracking-tight mb-6"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          Still Running on Legacy Systems?
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Tell us what you&apos;re working with. We&apos;ll help you identify a practical
          path to modernization, AI adoption, and team enablement.
        </p>
        <button
          onClick={scrollToContact}
          className="group inline-flex items-center gap-2.5 px-8 py-4 bg-[#4A9EFF] hover:bg-[#2D7EF0] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 text-base"
        >
          Book a Consultation
          <ArrowRight
            size={18}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </button>
      </div>
    </section>
  );
}
