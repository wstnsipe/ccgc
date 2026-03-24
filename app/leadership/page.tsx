import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Phone, GraduationCap, Briefcase } from "lucide-react";
import { leadership, advisoryBoard } from "@/lib/data";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet the CCGC leadership team — retired senior military officers and experienced government affairs professionals with unmatched federal market access.",
};

export default function LeadershipPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="grain relative pt-40 pb-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=75"
            alt=""
            fill
            className="object-cover object-center opacity-[0.08]"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/60 to-[#0A1628]" />
        </div>
        <div className="bar-slide absolute top-0 left-0 w-[3px] h-full bg-[#C8102E] z-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-8">
            <span className="block h-px w-10 bg-[#C8102E]" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#C8102E]">
              Our Team
            </span>
          </div>
          <h1 className="font-display text-[clamp(2.75rem,6vw,5rem)] text-white leading-[1.05] max-w-3xl text-balance mb-6">
            The team behind the access.
          </h1>
          <p className="text-[1.125rem] text-gray-300 leading-relaxed max-w-2xl">
            Over 80 combined years of military service. Over 50 years of federal
            business development. Six senior leaders, each with deep specialist expertise
            in the markets they serve.
          </p>
        </div>
      </section>

      {/* ── Team overview strip ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex overflow-x-auto gap-0 divide-x divide-gray-100 py-0">
            {leadership.map((person) => (
              <a
                key={person.id}
                href={`#${person.id}`}
                className="flex-shrink-0 flex flex-col items-center text-center px-7 py-6 hover:bg-gray-50 transition-colors group min-w-[140px]"
              >
                <div className="w-14 h-14 rounded-full overflow-hidden mb-3 ring-2 ring-transparent group-hover:ring-[#C8102E] transition-all">
                  <Image
                    src={person.photo}
                    alt={person.name}
                    width={56}
                    height={56}
                    className="object-cover object-center w-full h-full"
                    unoptimized
                  />
                </div>
                <div className="text-xs font-bold text-[#0A1628] leading-tight">{person.name.split(" ")[0]}</div>
                <div className="text-[10px] text-gray-400 mt-0.5 leading-tight">{person.title.split(",")[0]}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full leadership bios ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 divide-y divide-gray-100">
          {leadership.map((person, i) => (
            <div
              key={person.id}
              id={person.id}
              className="grid lg:grid-cols-12 gap-10 lg:gap-16 py-20"
            >
              {/* ── Photo + contact ── */}
              <div className={`lg:col-span-4 ${i % 2 !== 0 ? "lg:col-start-9 lg:row-start-1" : ""}`}>
                <div className="sticky top-28">
                  {/* Photo */}
                  <div className="img-zoom relative rounded-sm overflow-hidden bg-[#0A1628] aspect-[3/4] mb-5">
                    <Image
                      src={person.photo}
                      alt={person.name}
                      fill
                      className="object-cover object-center"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5">
                      <div className="h-px w-6 bg-[#C8102E] mb-2" />
                      <div className="text-[10px] uppercase tracking-widest text-gray-300 font-semibold">
                        {person.title.split(",")[0]}
                      </div>
                    </div>
                  </div>

                  {/* Contact card */}
                  <div className="border border-gray-100 rounded-sm p-5 space-y-3">
                    <a
                      href={`mailto:${person.email}`}
                      className="flex items-center gap-3 text-sm text-gray-500 hover:text-[#C8102E] transition-colors group"
                    >
                      <Mail size={13} className="text-[#C8102E]" />
                      <span className="truncate">{person.email}</span>
                    </a>
                    {person.phone && (
                      <a
                        href={`tel:${person.phone.replace(/\./g, "")}`}
                        className="flex items-center gap-3 text-sm text-gray-500 hover:text-[#C8102E] transition-colors"
                      >
                        <Phone size={13} className="text-[#C8102E]" />
                        {person.phone}
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* ── Bio content ── */}
              <div className={`lg:col-span-8 ${i % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div className="h-px w-10 bg-[#C8102E] mb-6" />
                <h2 className="font-display text-[clamp(2rem,3.5vw,2.75rem)] text-[#0A1628] mb-1">
                  {person.name}
                </h2>
                <p className="text-[#C8102E] font-semibold text-base mb-8 tracking-wide">
                  {person.title}
                </p>
                <p className="text-gray-600 text-[1.0625rem] leading-relaxed mb-10">
                  {person.bio}
                </p>

                <div className="grid sm:grid-cols-2 gap-10">
                  {person.background.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-5">
                        <Briefcase size={13} className="text-[#C8102E]" />
                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#0A1628]">
                          Background
                        </span>
                      </div>
                      <ul className="space-y-3">
                        {person.background.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <div className="w-1 h-1 rounded-full bg-[#C8102E] mt-2 flex-shrink-0" />
                            <span className="text-gray-500 text-sm leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {person.education.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-5">
                        <GraduationCap size={13} className="text-[#C8102E]" />
                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#0A1628]">
                          Education
                        </span>
                      </div>
                      <ul className="space-y-3">
                        {person.education.map((e) => (
                          <li key={e} className="flex items-start gap-3">
                            <div className="w-1 h-1 rounded-full bg-[#C8102E] mt-2 flex-shrink-0" />
                            <span className="text-gray-500 text-sm leading-relaxed">{e}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Advisory Board ── */}
      <section className="section-padding bg-[#F8FAFC] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <span className="divider-red" />
            <h2 className="font-display text-[clamp(1.875rem,3.5vw,2.5rem)] text-[#0A1628]">
              Advisory Board
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl text-sm leading-relaxed">
              CCGC's advisory board extends the firm's expertise and reach with
              senior counsel from distinguished government and defense industry leaders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
            {advisoryBoard.map((advisor) => (
              <div key={advisor.name} className="bg-white border border-gray-100 rounded-sm p-8">
                <div className="h-px w-8 bg-[#C8102E] mb-5" />
                <h3 className="font-bold text-[#0A1628] text-xl mb-1">{advisor.name}</h3>
                <p className="text-[11px] uppercase tracking-widest text-[#C8102E] font-semibold mb-4">
                  Advisory Board Member
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">{advisor.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Associates Network ── */}
      <section className="grain section-padding bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="divider-red" />
              <h2 className="font-display text-[clamp(1.875rem,3.5vw,2.5rem)] text-white mb-6 text-balance">
                A broader network of trusted associates.
              </h2>
              <p className="text-gray-400 text-[1.0625rem] leading-relaxed mb-5">
                Beyond the core leadership team, CCGC maintains a curated network of
                associates who provide specialized intelligence, regional expertise,
                and targeted business development support across government and defense markets.
              </p>
              <p className="text-gray-400 text-[1.0625rem] leading-relaxed mb-8">
                This extended network amplifies our reach and ensures comprehensive
                coverage across agencies, branches, geographic communities, and
                international defense markets.
              </p>
              <Link
                href="/contact"
                className="arrow-link text-sm font-semibold text-gray-300 hover:text-white transition-colors"
              >
                Learn more about our network <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Pentagon", sub: "Arlington, VA" },
                { label: "Capitol Hill", sub: "Washington, DC" },
                { label: "Huntsville", sub: "Redstone Arsenal" },
                { label: "Fort Novosel", sub: "Alabama" },
                { label: "MacDill AFB", sub: "Tampa, FL" },
                { label: "International", sub: "FMS Markets" },
              ].map((loc) => (
                <div key={loc.label} className="bg-[#102a43] border border-white/8 rounded-sm p-5">
                  <div className="h-px w-5 bg-[#C8102E] mb-3" />
                  <div className="text-white text-sm font-bold">{loc.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{loc.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <span className="block w-8 h-0.5 bg-[#C8102E] mx-auto mb-8" />
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-[#0A1628] mb-5 text-balance">
            Work directly with our senior team.
          </h2>
          <p className="text-gray-500 text-[1.0625rem] leading-relaxed mb-10 max-w-xl mx-auto">
            Book a confidential consultation to discuss your company's federal
            and defense market objectives.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/book"
              className="group inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#a50d25] text-white text-sm font-semibold px-8 py-4 rounded-sm transition-colors tracking-wide"
            >
              Book a Consultation
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-400 text-[#0A1628] text-sm font-medium px-8 py-4 rounded-sm transition-colors"
            >
              Contact the Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
