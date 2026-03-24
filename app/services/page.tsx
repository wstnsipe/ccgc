import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services & Expertise",
  description:
    "CCGC delivers strategic planning, business development, and government relations for companies competing in the federal and defense marketplace.",
};

const process = [
  {
    step: "01",
    title: "Market Assessment",
    body:
      "We assess your current government market position: existing relationships, active programs, competitive landscape, and alignment between your capabilities and government priorities.",
  },
  {
    step: "02",
    title: "Strategic Planning",
    body:
      "We develop a custom strategy identifying your most viable near- and long-term opportunities, the stakeholders who matter, and the budget windows you need to align with.",
  },
  {
    step: "03",
    title: "Active Market Engagement",
    body:
      "Our team activates its networks on your behalf — arranging the right introductions, facilitating briefings, and representing your interests at the levels that count.",
  },
  {
    step: "04",
    title: "Ongoing Intelligence & Positioning",
    body:
      "We keep you continuously positioned through budget tracking, program monitoring, relationship cultivation, and proactive strategic guidance as conditions evolve.",
  },
];

const serviceImages: Record<string, string> = {
  "strategic-planning":
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80",
  "business-development":
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80",
  lobbying:
    "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=900&q=80",
};

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="grain relative pt-40 pb-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=1920&q=75"
            alt=""
            fill
            className="object-cover object-center opacity-[0.10]"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/60 to-[#0A1628]" />
        </div>
        <div className="bar-slide absolute top-0 left-0 w-[3px] h-full bg-[#C8102E] z-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-8">
            <span className="block h-px w-10 bg-[#C8102E]" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#C8102E]">
              What We Do
            </span>
          </div>
          <h1 className="font-display text-[clamp(2.75rem,6vw,5rem)] text-white leading-[1.05] max-w-3xl text-balance mb-6">
            Three disciplines. One objective.
          </h1>
          <p className="text-[1.125rem] text-gray-300 leading-relaxed max-w-2xl">
            Strategic planning, business development, and government relations — delivered
            as integrated disciplines by a team with direct access to the people who
            shape federal programs, budgets, and procurements.
          </p>

          {/* Anchor nav */}
          <div className="flex flex-wrap gap-4 mt-12">
            {services.map((svc) => (
              <a
                key={svc.id}
                href={`#${svc.id}`}
                className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 hover:text-white transition-colors border-b border-gray-600 hover:border-white pb-0.5"
              >
                {svc.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service sections ── */}
      {services.map((svc, i) => (
        <section
          key={svc.id}
          id={svc.id}
          className={`section-padding ${i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className={`grid lg:grid-cols-2 gap-14 lg:gap-20 items-start ${i % 2 !== 0 ? "lg:[&>*:first-child]:order-last" : ""}`}>

              {/* Content */}
              <div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-[#C8102E] mb-5">
                  {String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                </div>
                <span className="divider-red" />
                <h2 className="font-display text-[clamp(2rem,3.5vw,2.75rem)] text-[#0A1628] mb-3 text-balance">
                  {svc.title}
                </h2>
                <p className="text-[#C8102E] text-base font-medium italic mb-6">
                  {svc.tagline}
                </p>
                <p className="text-gray-600 text-[1.0625rem] leading-relaxed mb-10">
                  {svc.description}
                </p>

                {/* Capabilities */}
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-[#0A1628] mb-5">
                    Capabilities
                  </div>
                  <ul className="space-y-3">
                    {svc.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-3">
                        <CheckCircle
                          size={15}
                          className="text-[#C8102E] mt-0.5 flex-shrink-0"
                          strokeWidth={2}
                        />
                        <span className="text-gray-600 text-sm leading-relaxed">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10">
                  <Link
                    href="/book"
                    className="group inline-flex items-center gap-2 border border-[#C8102E] text-[#C8102E] hover:bg-[#C8102E] hover:text-white text-sm font-semibold px-6 py-3 rounded-sm transition-all tracking-wide"
                  >
                    Discuss this service
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="img-zoom relative rounded-sm overflow-hidden aspect-[4/3] shadow-lg">
                <Image
                  src={serviceImages[svc.id]}
                  alt={svc.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-[#0A1628]/20" />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── Divider ── */}
      <div className="h-px bg-gray-100" />

      {/* ── How We Engage (Process) ── */}
      <section className="grain section-padding bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <span className="divider-red" />
            <h2 className="font-display text-[clamp(1.875rem,3.5vw,2.5rem)] text-white">
              How we engage
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/8">
            {process.map((step) => (
              <div key={step.step} className="bg-[#0A1628] p-8 lg:p-10">
                <div className="text-[2rem] font-black text-white/10 leading-none mb-4 tabular-nums">
                  {step.step}
                </div>
                <div className="h-[2px] w-8 bg-[#C8102E] mb-5" />
                <h3 className="text-white font-bold text-base mb-4 leading-snug">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why CCGC for services ── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5">
              <span className="divider-red" />
              <h2 className="font-display text-[clamp(1.875rem,3.5vw,2.5rem)] text-[#0A1628] text-balance">
                Integrated disciplines, not siloed service lines.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 lg:pt-2">
              <p className="text-gray-600 text-[1.0625rem] leading-relaxed">
                At CCGC, strategic planning, business development, and government relations
                are not three separate offerings — they are three dimensions of a single,
                coherent approach to winning in the federal marketplace.
              </p>
              <p className="text-gray-600 text-[1.0625rem] leading-relaxed">
                Your strategic plan informs how we deploy our business development relationships.
                Our government relations work illuminates the budget realities that sharpen
                your strategy. The three reinforce each other, which is why clients who engage
                CCGC across all three disciplines consistently outperform those who pursue
                one in isolation.
              </p>
              <div className="pt-4">
                <Link
                  href="/book"
                  className="group inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#a50d25] text-white text-sm font-semibold px-8 py-4 rounded-sm transition-colors tracking-wide"
                >
                  Schedule a Consultation
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
