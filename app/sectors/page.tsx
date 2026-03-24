import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { sectors, leadership } from "@/lib/data";

export const metadata: Metadata = {
  title: "Government Focus",
  description:
    "CCGC serves clients across Army Aviation, Air Force & ISR, Marine Corps & Navy, Federal Agencies, and International FMS markets — each led by a dedicated sector specialist.",
};

const sectorImages: Record<string, string> = {
  "army-aviation":
    "https://images.unsplash.com/photo-1569943016257-1dc4fe4c1f67?w=900&q=80",
  "air-force-isr":
    "https://images.unsplash.com/photo-1608178398319-48f814d0750c?w=900&q=80",
  "marine-corps-navy":
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
  "federal-agencies":
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=900&q=80",
  "international-fms":
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80",
};

const sectorBadge: Record<string, string> = {
  helicopter: "ARMY",
  satellite: "USAF",
  anchor: "USMC / USN",
  building: "GOV",
  globe: "INT'L",
};

/* Look up the leader photo by name */
function getLeaderPhoto(name: string) {
  const person = leadership.find((l) => l.name === name);
  return person?.photo ?? null;
}

export default function SectorsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="grain relative pt-40 pb-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1554774853-719586f82d77?w=1920&q=75"
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
              Government Focus
            </span>
          </div>
          <h1 className="font-display text-[clamp(2.75rem,6vw,5rem)] text-white leading-[1.05] max-w-3xl text-balance mb-6">
            Every branch. Every agency. Specialist-led.
          </h1>
          <p className="text-[1.125rem] text-gray-300 leading-relaxed max-w-2xl">
            Each market CCGC serves is led by a dedicated Vice President with deep
            sector expertise — not a generalist covering multiple domains. Our clients
            receive specialist knowledge, not broad-market advice.
          </p>

          {/* Quick-jump anchors */}
          <div className="flex flex-wrap gap-4 mt-12">
            {sectors.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 hover:text-white transition-colors border-b border-gray-600 hover:border-white pb-0.5"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sector sections ── */}
      {sectors.map((sector, i) => {
        const leaderPhoto = getLeaderPhoto(sector.leader);
        return (
          <section
            key={sector.id}
            id={sector.id}
            className={`section-padding ${i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className={`grid lg:grid-cols-2 gap-14 lg:gap-20 items-start ${i % 2 !== 0 ? "lg:[&>*:first-child]:order-last" : ""}`}>

                {/* Content */}
                <div>
                  <div className="mb-6">
                    <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-[#C8102E] border border-[#C8102E]/30 px-2.5 py-1 rounded-sm">
                      {sectorBadge[sector.icon]}
                    </span>
                  </div>
                  <span className="divider-red" />
                  <h2 className="font-display text-[clamp(2rem,3.5vw,2.75rem)] text-[#0A1628] mb-5 text-balance">
                    {sector.title}
                  </h2>
                  <p className="text-gray-600 text-[1.0625rem] leading-relaxed mb-8">
                    {sector.description}
                  </p>

                  {/* Key access points */}
                  <div className="mb-8">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-[#0A1628] mb-4">
                      Key Access Points
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {sector.keyAccess.map((point) => (
                        <span
                          key={point}
                          className="text-xs border border-gray-200 rounded-sm px-3 py-1.5 text-gray-600 font-medium"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Sector lead */}
                  <div className="flex items-center gap-4 bg-[#F8FAFC] border border-gray-100 rounded-sm p-4 mt-8">
                    {leaderPhoto && (
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-white">
                        <Image
                          src={leaderPhoto}
                          alt={sector.leader}
                          width={48}
                          height={48}
                          className="object-cover object-top w-full h-full"
                          unoptimized
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] uppercase tracking-widest text-[#C8102E] font-semibold mb-0.5">
                        Sector Lead
                      </div>
                      <div className="text-sm font-bold text-[#0A1628]">{sector.leader}</div>
                      <div className="text-xs text-gray-500 truncate">{sector.leaderTitle}</div>
                    </div>
                    <Link
                      href="/leadership"
                      className="flex-shrink-0 arrow-link text-xs font-semibold text-gray-400 hover:text-[#C8102E] transition-colors"
                    >
                      Full bio <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div className="img-zoom relative rounded-sm overflow-hidden aspect-[4/3] shadow-lg">
                  <Image
                    src={sectorImages[sector.id]}
                    alt={sector.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-[#0A1628]/25" />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Network reach ── */}
      <section className="grain section-padding bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <span className="divider-red" />
              <h2 className="font-display text-[clamp(1.875rem,3.5vw,2.5rem)] text-white mb-6 text-balance">
                A network built across the communities that matter.
              </h2>
              <p className="text-gray-400 text-[1.0625rem] leading-relaxed mb-8">
                CCGC's team is active in the communities where government decisions are
                made and where industry must be present — not just Washington, DC, but
                the acquisition and operational hubs where programs are run.
              </p>
              <Link
                href="/book"
                className="group inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#a50d25] text-white text-sm font-semibold px-7 py-3.5 rounded-sm transition-colors tracking-wide"
              >
                Discuss Your Market
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { label: "Pentagon", sub: "Arlington, VA" },
                  { label: "Capitol Hill", sub: "Washington, DC" },
                  { label: "Redstone Arsenal", sub: "Huntsville, AL" },
                  { label: "Fort Novosel", sub: "Alabama" },
                  { label: "MacDill AFB", sub: "Tampa, FL" },
                  { label: "DSCA / State Dept.", sub: "Foreign Military Sales" },
                  { label: "National Capital Region", sub: "Federal Agencies" },
                  { label: "Austin, TX", sub: "Army Aviation community" },
                  { label: "International", sub: "Coalition partner nations" },
                ].map((loc) => (
                  <div
                    key={loc.label}
                    className="bg-white/[0.04] border border-white/10 rounded-sm p-5"
                  >
                    <div className="h-[2px] w-5 bg-[#C8102E] mb-3" />
                    <div className="text-white text-sm font-bold leading-snug">{loc.label}</div>
                    <div className="text-gray-500 text-[11px] mt-1 leading-snug">{loc.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <span className="block w-8 h-0.5 bg-[#C8102E] mx-auto mb-8" />
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-[#0A1628] mb-5 text-balance">
            Which markets matter to your company?
          </h2>
          <p className="text-gray-500 text-[1.0625rem] leading-relaxed mb-10 max-w-xl mx-auto">
            Tell us about your target market and we'll share exactly how CCGC can
            help you gain access and win.
          </p>
          <Link
            href="/book"
            className="group inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#a50d25] text-white text-sm font-semibold px-10 py-4 rounded-sm transition-colors tracking-wide"
          >
            Book a Consultation
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
