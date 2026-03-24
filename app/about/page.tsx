import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "About CCGC",
  description:
    "Continental Consulting Group Corporation — over 25 years advising senior leadership and navigating federal and defense markets from Alexandria, VA.",
};

const timeline = [
  {
    year: "2000",
    event: "CCGC Founded",
    detail:
      "Continental Consulting Group Corporation is established in Alexandria, Virginia — minutes from the Pentagon, at the center of U.S. defense and federal decision-making.",
  },
  {
    year: "2007",
    event: "Alan Roberson Joins as President",
    detail:
      "Retired Army Colonel Alan Roberson — former Commander of the 82nd Combat Aviation Brigade and Senior Director at the National Defense University — joins CCGC, expanding the firm's military network and international reach.",
  },
  {
    year: "2009",
    event: "Federal Agency Practice Expands",
    detail:
      "Bobby Seigle joins, broadening CCGC's reach beyond Army Aviation into federal civilian agencies, Capitol Hill, and the wider National Capital Region government ecosystem.",
  },
  {
    year: "2019",
    event: "Aviation Strategy Practice Deepens",
    detail:
      "Retired Army Colonel Doug Hooks — with five years of Pentagon-level aviation strategy and direct ties to the Future Vertical Lift program — joins to lead CCGC's Army aviation vertical.",
  },
  {
    year: "2020",
    event: "Air Force & ISR Vertical Launched",
    detail:
      "Bo Marlin, a retired Air Force Colonel and former Defense Intelligence Senior Executive Service member who oversaw a $7 billion intelligence portfolio, joins to lead the Air Force and ISR practice.",
  },
  {
    year: "2025",
    event: "Marine Corps & Navy Practice Added",
    detail:
      "Gary Crouse — a registered lobbyist and former FLIR Systems Director of Government Affairs with 20+ years of USMC and naval industry relationships — joins to complete the firm's DoD branch coverage.",
  },
];

const principles = [
  {
    number: "01",
    title: "Relationships built over careers, not contracts",
    body:
      "Our team's access to senior government decision-makers was earned through decades of service — not purchased through event sponsorships or conference attendance. These are authentic, trusted relationships that open real doors.",
  },
  {
    number: "02",
    title: "Specialist-led, not generalist-advised",
    body:
      "Each market vertical we serve is led by an expert who spent their career in that domain. Army aviation clients work with a retired Army Colonel who led aviation strategy at the Pentagon. Air Force clients work with a former Defense Intelligence SES. No generalists.",
  },
  {
    number: "03",
    title: "Frequent, substantive communication",
    body:
      "CCGC is known for keeping clients tightly informed. We don't wait for quarterly check-ins — we send budget cycle alerts, program intelligence, and proactive strategic guidance as situations develop.",
  },
  {
    number: "04",
    title: "Positioned at the center of government",
    body:
      "Our Alexandria, Virginia headquarters places us minutes from the Pentagon, Capitol Hill, and every major federal agency in the National Capital Region. When things move fast — and they often do — we are already there.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="grain relative pt-40 pb-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1920&q=75"
            alt=""
            fill
            className="object-cover object-center opacity-[0.10]"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/50 to-[#0A1628]" />
        </div>
        <div className="bar-slide absolute top-0 left-0 w-[3px] h-full bg-[#C8102E] z-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-8">
            <span className="block h-px w-10 bg-[#C8102E]" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#C8102E]">
              Our Story
            </span>
          </div>
          <h1 className="font-display text-[clamp(2.75rem,6vw,5rem)] text-white leading-[1.05] max-w-3xl text-balance mb-6">
            Over 25 years navigating the federal marketplace.
          </h1>
          <p className="text-[1.125rem] text-gray-300 leading-relaxed max-w-2xl">
            Founded in {company.founded} and headquartered in Alexandria, Virginia,
            CCGC has spent over two decades building the relationships, market intelligence,
            and strategic discipline that clients depend on to succeed in the U.S.
            Government and Department of Defense.
          </p>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <span className="divider-red" />
              <h2 className="font-display text-[clamp(1.875rem,3.5vw,2.75rem)] text-[#0A1628] text-balance leading-tight">
                Trusted advisors to companies competing in the federal and defense marketplace.
              </h2>
              {/* Pull stat */}
              <div className="mt-10 border-t border-gray-100 pt-8">
                <div className="text-[3rem] font-black text-[#C8102E] leading-none">25+</div>
                <div className="text-sm text-gray-500 mt-1">Years navigating the federal marketplace</div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-5 lg:pt-2">
              <p className="text-[1.0625rem] text-gray-600 leading-relaxed">
                CCGC is dedicated to advising senior leadership on business strategy and
                fostering trusted relationships with the key personnel who influence
                programs, budgets, and procurements throughout the U.S. Government and
                Department of Defense.
              </p>
              <p className="text-[1.0625rem] text-gray-600 leading-relaxed">
                We carry our clients' business development messages through the corridors of
                federal power — from the Pentagon to Capitol Hill to the acquisition offices
                and program management teams that shape what government buys and from whom.
              </p>
              <p className="text-[1.0625rem] text-gray-600 leading-relaxed">
                Our success is measured by one thing: our clients' results. We are known for
                frequent, substantive communication and an exceptionally responsive approach
                to client support.
              </p>
              <div className="pt-4 grid grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded-sm overflow-hidden">
                {[
                  { num: "80+", label: "Yrs Military Service" },
                  { num: "50+", label: "Yrs Business Dev." },
                  { num: "All", label: "DoD Branches" },
                ].map((item) => (
                  <div key={item.label} className="bg-white py-5 px-4 text-center">
                    <div className="text-xl font-black text-[#0A1628]">{item.num}</div>
                    <div className="text-[10px] text-gray-500 mt-1 leading-snug">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="section-padding bg-[#F8FAFC] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <span className="divider-red" />
            <h2 className="font-display text-[clamp(1.875rem,3.5vw,2.75rem)] text-[#0A1628]">
              How we work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-gray-200">
            {principles.map((p) => (
              <div key={p.number} className="bg-white p-10 lg:p-12">
                <div className="text-[11px] font-bold tracking-widest text-[#C8102E] uppercase mb-5">
                  {p.number}
                </div>
                <h3 className="text-lg font-bold text-[#0A1628] mb-4 leading-snug">
                  {p.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── History Timeline ── */}
      <section className="grain section-padding bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <span className="divider-red" />
            <h2 className="font-display text-[clamp(1.875rem,3.5vw,2.75rem)] text-white">
              Building the network since 2000
            </h2>
          </div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-white/10 hidden md:block" />

            <div className="space-y-0 divide-y divide-white/10">
              {timeline.map((item) => (
                <div key={item.year} className="grid md:grid-cols-[7rem_1fr] gap-6 md:gap-14 py-10 group">
                  <div className="flex md:flex-col md:items-end gap-4 md:gap-0">
                    <div className="text-[#C8102E] text-sm font-black tracking-wider md:mb-4 tabular-nums">
                      {item.year}
                    </div>
                    {/* Dot on the line */}
                    <div className="hidden md:block w-2.5 h-2.5 rounded-full bg-[#C8102E] ring-[5px] ring-[#0A1628] relative md:-mr-[calc(0.625rem+0.5px)] self-start mt-0.5" />
                  </div>
                  <div className="pb-2">
                    <h3 className="text-white font-bold text-base mb-2.5">{item.event}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Location ── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="divider-red" />
              <h2 className="font-display text-[clamp(1.875rem,3.5vw,2.75rem)] text-[#0A1628] mb-6 text-balance">
                Headquartered at the center of power.
              </h2>
              <p className="text-gray-600 text-[1.0625rem] leading-relaxed mb-8">
                Our office in Old Town Alexandria places us within minutes of the
                Pentagon, Reagan National Airport, and the full breadth of federal agencies
                and congressional offices across the National Capital Region. When
                opportunities emerge quickly — and they often do — we are already in
                proximity.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { icon: MapPin, label: `${company.address}, ${company.city}` },
                  { icon: Phone, label: company.phone, href: "tel:7036837040" },
                  { icon: Mail, label: company.email, href: `mailto:${company.email}` },
                ].map(({ icon: Icon, label, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <Icon size={16} className="text-[#C8102E] flex-shrink-0" />
                    {href ? (
                      <a href={href} className="text-gray-600 text-sm hover:text-[#C8102E] transition-colors">
                        {label}
                      </a>
                    ) : (
                      <span className="text-gray-600 text-sm">{label}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {["Pentagon", "Capitol Hill", "Ft. Belvoir", "Reagan National Airport"].map((loc) => (
                  <span key={loc} className="text-[11px] border border-gray-200 rounded-sm px-3 py-1.5 text-gray-500 font-medium">
                    {loc} — minutes away
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-sm overflow-hidden aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1617480246550-86952d74a02c?w=900&q=80"
                  alt="Alexandria Virginia aerial"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-[#0A1628] text-white p-6 rounded-sm shadow-xl">
                <div className="text-2xl font-black">{company.founded}</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-400 mt-0.5">
                  Est. Alexandria, VA
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="grain section-padding bg-[#0A1628]">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <span className="block w-8 h-0.5 bg-[#C8102E] mx-auto mb-8" />
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-white mb-5 text-balance">
            Ready to put our network to work for you?
          </h2>
          <p className="text-gray-400 text-[1.0625rem] leading-relaxed mb-10 max-w-xl mx-auto">
            Schedule a confidential consultation with CCGC's senior leadership.
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
              href="/leadership"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white text-sm font-medium px-8 py-4 rounded-sm transition-colors"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
