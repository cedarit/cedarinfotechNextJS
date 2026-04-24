"use client";

import { Settings, Cpu, GraduationCap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Legacy Application Modernization",
    description:
      "Upgrade or rebuild outdated systems into secure, scalable, maintainable platforms—using modern tooling and AI-assisted development workflows.",
    examples: [
      "ERP and CRM modernization",
      "Accounting systems",
      "Membership applications",
      "Healthcare applications",
      "Drupal 7 and CiviCRM migration",
      "Legacy PHP and custom business applications",
    ],
  },
  {
    icon: Cpu,
    title: "AI Adoption & Integration",
    description:
      "Move beyond AI demos and apply AI to real business workflows—where it actually reduces cost, time, and decision friction.",
    examples: [
      "AI-assisted development",
      "Workflow automation",
      "AI-powered productivity improvements",
      "AI tools for development and testing",
      "AI for documentation and decision support",
    ],
  },
  {
    icon: GraduationCap,
    title: "AI Training & Team Enablement",
    description:
      "Turn your existing employees into confident AI-first contributors. We train across technical and non-technical roles, at any experience level.",
    examples: [
      "AI coaching for technical and non-technical teams",
      "Practical hands-on workshops",
      "AI-first development workflows",
      "Training from age 8 to 60+",
      "Change management for resistant teams",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-[#4A9EFF] text-sm font-semibold uppercase tracking-widest mb-4">
            What We Do
          </p>
          <h2 className="text-[#0A0A0A] font-bold tracking-tight mb-5"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
            Focused Services for Serious Modernization
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We specialize in three interconnected capabilities. Together, they
            drive end-to-end transformation.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="flex flex-col border border-gray-100 rounded-2xl overflow-hidden card-hover group"
            >
              {/* Card top */}
              <div className="p-8 bg-[#F4F6FA] border-b border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-[#0A0A0A] flex items-center justify-center mb-5">
                  <service.icon size={22} className="text-[#4A9EFF]" />
                </div>
                <h3 className="text-[#0A0A0A] font-bold text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Examples */}
              <div className="p-8 flex-1 flex flex-col bg-white">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-4">
                  Examples
                </p>
                <ul className="flex flex-col gap-2.5 flex-1">
                  {service.examples.map((ex, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <div className="w-1 h-1 rounded-full bg-[#4A9EFF] mt-2 shrink-0" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group inline-flex items-center gap-2 text-[#1A3EAF] font-semibold hover:text-[#4A9EFF] transition-colors text-sm"
          >
            Talk to us about your specific situation
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
