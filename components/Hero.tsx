"use client";

import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden gradient-hero"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: "40px 40px",
      }} />

      {/* Glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#1A3EAF]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-[#0D1B3E]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 pt-40">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#4A9EFF] animate-pulse" />
            <span className="text-[#4A9EFF] text-sm font-medium">
              Legacy Modernization · AI Adoption · Team Enablement
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up text-white font-bold tracking-tight leading-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            Transform Legacy Systems
            <br />
            into{" "}
            <span className="text-gradient">AI-Driven Platforms</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up delay-200 text-gray-300 leading-relaxed mb-10 max-w-2xl"
            style={{ fontSize: "clamp(1.05rem, 2vw, 1.25rem)" }}>
            We help organizations modernize outdated applications, adopt AI-first
            workflows, and turn their existing teams into high-performing,
            AI-first teams—<span className="text-white font-medium">without disruption.</span>
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={() => scrollTo("contact")}
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#4A9EFF] hover:bg-[#2D7EF0] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 text-base"
            >
              Book a Consultation
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/25 hover:border-white/50 text-white font-semibold rounded-lg transition-all duration-200 hover:bg-white/8 text-base"
            >
              Talk to Us About Your System
            </button>
          </div>

          {/* Trust pillars */}
          <div className="animate-fade-in-up delay-400 flex flex-wrap gap-6 text-sm text-gray-400">
            {["Legacy Modernization", "AI Adoption", "Team Enablement"].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-[#4A9EFF]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => scrollTo("problem")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
