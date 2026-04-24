const steps = [
  {
    number: "01",
    title: "Diagnose",
    description:
      "Understand your current system, workflows, bottlenecks, risks, and modernization opportunities. We map what exists before recommending what comes next.",
    color: "from-[#4A9EFF]/20 to-[#4A9EFF]/5",
    accent: "#4A9EFF",
  },
  {
    number: "02",
    title: "Modernize",
    description:
      "Migrate legacy applications to modern, scalable technologies using AI-assisted development workflows. Faster delivery, lower risk, better maintainability.",
    color: "from-[#1A3EAF]/20 to-[#1A3EAF]/5",
    accent: "#1A3EAF",
  },
  {
    number: "03",
    title: "Enable",
    description:
      "Train and coach your existing team to adopt AI tools, modern engineering practices, and new ways of working. No replacement—only upgrade.",
    color: "from-[#0D1B3E]/20 to-[#0D1B3E]/5",
    accent: "#0D1B3E",
  },
  {
    number: "04",
    title: "Accelerate",
    description:
      "Sustain gains in delivery speed, software quality, team confidence, and long-term internal capability. Organizations that can evolve independently.",
    color: "from-[#4A9EFF]/20 to-[#1A3EAF]/10",
    accent: "#4A9EFF",
  },
];

export default function TransformationModel() {
  return (
    <section id="transformation" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-[#4A9EFF] text-sm font-semibold uppercase tracking-widest mb-4">
            How We Work
          </p>
          <h2 className="text-white font-bold tracking-tight mb-5"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
            The Cedar Transformation Model
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            A structured, practical four-step approach designed for real
            organizations with real constraints.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`relative rounded-2xl p-8 bg-gradient-to-br ${step.color} border border-white/8 card-hover group overflow-hidden`}
            >
              {/* Large number watermark */}
              <div
                className="absolute right-6 top-4 text-8xl font-black opacity-[0.06] leading-none select-none pointer-events-none"
                style={{ color: step.accent }}
              >
                {step.number}
              </div>

              <div className="relative z-10">
                <div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-white text-sm font-bold mb-5"
                  style={{ backgroundColor: step.accent }}
                >
                  {step.number}
                </div>
                <h3 className="text-white font-bold text-xl mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
