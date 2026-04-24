import { AlertTriangle, Clock, Users, Brain, TrendingDown, Lock } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Hard to Maintain",
    body: "Old systems accumulate technical debt. Every small change carries outsized risk.",
  },
  {
    icon: TrendingDown,
    title: "Risky and Expensive Upgrades",
    body: "Vendor lock-in, scarce expertise, and untested dependencies make upgrades feel impossible.",
  },
  {
    icon: Clock,
    title: "Slow Development Cycles",
    body: "Legacy codebases slow teams down. Releases take weeks instead of days.",
  },
  {
    icon: Users,
    title: "Outdated Team Workflows",
    body: "Teams are locked into processes built around old constraints—not modern capabilities.",
  },
  {
    icon: Brain,
    title: "AI Feels Confusing or Threatening",
    body: "AI adoption stalls when teams lack guidance or fear being replaced.",
  },
  {
    icon: Lock,
    title: "Knowledge Trapped in Few People",
    body: "Critical system knowledge lives in a few individuals, creating fragility and burnout.",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-[#F4F6FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-[#4A9EFF] text-sm font-semibold uppercase tracking-widest mb-4">
            The Challenge
          </p>
          <h2 className="text-[#0A0A0A] font-bold tracking-tight mb-5"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
            Legacy Systems Are Slowing You Down
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            If your systems are harder to change than to keep running, you&apos;re not alone.
            These are the patterns we see in almost every engagement.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 border border-gray-100 card-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#EEF3FF] flex items-center justify-center mb-5 group-hover:bg-[#4A9EFF]/15 transition-colors">
                <item.icon size={22} className="text-[#1A3EAF]" />
              </div>
              <h3 className="text-[#0A0A0A] font-semibold text-lg mb-2.5">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
