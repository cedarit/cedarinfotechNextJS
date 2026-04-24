import { CheckCircle } from "lucide-react";

const pillars = [
  "Modernize your technology—without throwing away what works.",
  "Redesign workflows around AI-first practices.",
  "Enable your existing people to thrive in a modern environment.",
  "Deliver results that last beyond the engagement.",
];

export default function SolutionSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-[#4A9EFF] text-sm font-semibold uppercase tracking-widest mb-4">
              Our Approach
            </p>
            <h2 className="text-[#0A0A0A] font-bold tracking-tight mb-6"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              A Practical Path to Modernization and AI Adoption
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We don&apos;t just rebuild systems. We help organizations modernize
              technology, redesign workflows, and enable their existing people to
              work in an AI-first way.
            </p>
            <ul className="flex flex-col gap-4">
              {pillars.map((item, i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <CheckCircle size={20} className="text-[#4A9EFF] mt-0.5 shrink-0" />
                  <span className="text-gray-700 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — visual block */}
          <div className="relative">
            <div className="gradient-cedar rounded-3xl p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-12 translate-x-12" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-10 -translate-x-10" />
              <div className="relative z-10">
                <p className="text-[#4A9EFF] text-sm font-semibold uppercase tracking-widest mb-6">
                  Why Cedar
                </p>
                <div className="flex flex-col gap-6">
                  {[
                    { stat: "25+", label: "Years of combined experience" },
                    { stat: "10×", label: "Migration acceleration with AI tooling" },
                    { stat: "8–60+", label: "Age range trained on AI workflows" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-5 border-t border-white/10 pt-5 first:border-0 first:pt-0">
                      <div className="text-3xl font-bold text-gradient">{item.stat}</div>
                      <div className="text-gray-300 text-sm leading-snug">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
