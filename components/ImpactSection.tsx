import { Zap, RefreshCw, Users } from "lucide-react";

const impactCards = [
  {
    icon: Zap,
    title: "Faster Modernization Cycles",
    body: "AI-assisted workflows compress development timelines—without sacrificing reliability.",
  },
  {
    icon: RefreshCw,
    title: "Reduced Dependency on Outdated Workflows",
    body: "Teams gain the tools and mindset to operate and evolve modern systems independently.",
  },
  {
    icon: Users,
    title: "Existing Teams Upgraded, Not Replaced",
    body: "Your people emerge from the engagement more capable than when they started.",
  },
];

export default function ImpactSection() {
  return (
    <section className="py-24 bg-[#F4F6FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-[#4A9EFF] text-sm font-semibold uppercase tracking-widest mb-4">
            Real Impact
          </p>
          <h2 className="text-[#0A0A0A] font-bold tracking-tight mb-5"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
            Real Impact, Not Just Theory
          </h2>
        </div>

        {/* Feature highlight */}
        <div className="relative rounded-3xl gradient-cedar p-10 lg:p-14 mb-10 overflow-hidden">
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/4 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/4 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="px-3 py-1 bg-[#4A9EFF]/20 rounded-full border border-[#4A9EFF]/30">
                <span className="text-[#4A9EFF] text-xs font-semibold uppercase tracking-wider">
                  Proven Result
                </span>
              </div>
            </div>
            <blockquote className="text-white text-xl lg:text-2xl font-semibold leading-relaxed mb-6">
              &ldquo;Legacy healthcare application migration accelerated up to{" "}
              <span className="text-[#4A9EFF]">10× faster</span> using Claude
              Code and AI-assisted development workflows.&rdquo;
            </blockquote>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our approach combines hands-on modernization with team enablement,
              so organizations don&apos;t just receive new software—they learn how to
              sustain and evolve it.
            </p>
            <p className="text-gray-500 text-sm italic">
              Results vary based on system complexity, team readiness, and project scope.
            </p>
          </div>
        </div>

        {/* Impact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {impactCards.map((card, i) => (
            <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100 card-hover group">
              <div className="w-11 h-11 rounded-xl bg-[#EEF3FF] flex items-center justify-center mb-5 group-hover:bg-[#4A9EFF]/15 transition-colors">
                <card.icon size={20} className="text-[#1A3EAF]" />
              </div>
              <h3 className="text-[#0A0A0A] font-semibold text-base mb-2.5">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
