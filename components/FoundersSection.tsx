import { ExternalLink } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

const founders = [
  {
    name: "Pankaj Bhagat",
    role: "Co-founder · AI Consultant · Head of IT, NLAG",
    bio: "Pankaj Bhagat is an AI consultant and software professional with over 25 years of experience in IT, software development, training, and digital transformation. He began his career as a faculty member at IIT Kharagpur and later worked in Research and Development at IBM. He has served as a corporate trainer for organizations such as IBM, Cognizant, Infosys, and Wipro, and has contributed to modern digital solutions across healthcare, education, government, business, and ministry sectors. His work focuses on legacy system modernization, AI adoption, and helping teams confidently integrate AI into daily workflows.",
    initials: "PB",
    linkedin: SOCIAL_LINKS.pankajLinkedIn,
    instagram: SOCIAL_LINKS.pankajInstagram,
    gradient: "from-[#0B0E16] to-[#0D1B3E]",
  },
  {
    name: "Roshni Bhagat",
    role: "Co-founder",
    bio: "Roshni Bhagat is a co-founder of Cedar Information Technology. Her work supports the company's mission of using technology, training, and practical digital solutions to serve organizations with clarity, care, and long-term impact.",
    initials: "RB",
    linkedin: SOCIAL_LINKS.roshniLinkedIn,
    instagram: SOCIAL_LINKS.roshniInstagram,
    gradient: "from-[#1A3EAF] to-[#0B0E16]",
  },
];

export default function FoundersSection() {
  return (
    <section id="founders" className="py-24 bg-[#F4F6FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-[#4A9EFF] text-sm font-semibold uppercase tracking-widest mb-4">
            Our Team
          </p>
          <h2
            className="text-[#0A0A0A] font-bold tracking-tight mb-5"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            Led by Practitioners, Not Just Consultants
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We bring hands-on experience from actual migrations, real training
            engagements, and enterprise-grade systems—not just frameworks and slides.
          </p>
        </div>

        {/* Founder cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {founders.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 card-hover"
            >
              {/* Top color bar with avatar */}
              <div className={`bg-gradient-to-br ${f.gradient} h-28 relative`}>
                <div className="absolute -bottom-8 left-8">
                  <div className="w-16 h-16 rounded-2xl border-4 border-white bg-gradient-to-br from-[#4A9EFF] to-[#1A3EAF] flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">{f.initials}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-8 pb-8 pt-12">
                <div className="mb-4">
                  <h3 className="text-[#0A0A0A] font-bold text-xl">{f.name}</h3>
                  <p className="text-[#4A9EFF] text-sm font-medium mt-1">{f.role}</p>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{f.bio}</p>

                {/* Social links */}
                <div className="flex items-center gap-3">
                  <a
                    href={f.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-gray-500 hover:border-[#0077B5] hover:text-[#0077B5] transition-colors text-sm"
                  >
                    <ExternalLink size={15} />
                    LinkedIn
                  </a>
                  <a
                    href={f.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-gray-500 hover:border-[#E1306C] hover:text-[#E1306C] transition-colors text-sm"
                  >
                    <ExternalLink size={15} />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
