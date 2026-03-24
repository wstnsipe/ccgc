import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Shield, TrendingUp, Users } from "lucide-react";
import { company, stats, services, leadership } from "@/lib/data";

export const metadata: Metadata = {
  title: "CCGC | Navigating Your Path to Government Business",
  description:
    "Continental Consulting Group Corporation — federal and defense consulting in strategic planning, business development, and government relations. Alexandria, VA. Founded 2000.",
};

/* ── Service icon map ── */
const SVC_ICONS: Record<string, React.ReactNode> = {
  strategy:  <Shield  size={20} strokeWidth={1.5} />,
  growth:    <TrendingUp size={20} strokeWidth={1.5} />,
  advocacy:  <Users  size={20} strokeWidth={1.5} />,
};

/* ─────────────────────────────────────────────────────────────────────────── */
/*  HOMEPAGE                                                                   */
/* ─────────────────────────────────────────────────────────────────────────── */
export default function Home() {
  const featuredLeaders = leadership.slice(0, 3);

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════ HERO ═══ */}
      <section className="grain relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#0A1628]">

        {/* Photographic backdrop */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920&q=75"
            alt=""
            fill
            priority
            className="object-cover object-top opacity-[0.20]"
            unoptimized
          />
          {/* Vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/60 via-transparent to-[#0A1628]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/70 via-transparent to-[#0A1628]/30" />
        </div>

        {/* Left accent rail */}
        <div className="bar-slide absolute top-0 left-0 w-[3px] h-full bg-[#C8102E] origin-top z-10" />

        {/* ── Main hero content ── */}
        <div className="relative z-10 flex-1 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 pt-28 pb-12">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-0 items-end">

              {/* ── Headline column ── */}
              <div className="lg:col-span-8">
                {/* Eyebrow */}
                <div className="reveal flex items-center gap-3 mb-10">
                  <span className="block h-px w-10 bg-[#C8102E]" />
                  <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#C8102E]">
                    Federal &amp; Defense Consulting · Est. {company.founded}
                  </span>
                </div>

                {/* Display headline — DM Serif for the pull phrase */}
                <h1 className="reveal delay-100 text-balance">
                  <span className="block font-display text-[clamp(3.2rem,7vw,6rem)] text-white leading-[1.0] mb-2">
                    Navigating
                  </span>
                  <span className="block font-display text-[clamp(3.2rem,7vw,6rem)] text-white leading-[1.0] mb-2">
                    Your Path to
                  </span>
                  <span className="block font-display text-[clamp(3.2rem,7vw,6rem)] text-[#C8102E] leading-[1.0]">
                    Government Business.
                  </span>
                </h1>

                {/* Subline */}
                <p className="reveal delay-200 mt-8 text-[1.125rem] text-gray-300 leading-relaxed max-w-xl">
                  CCGC advises senior leadership on business strategy and builds
                  trusted relationships with the decision-makers who control programs,
                  budgets, and procurements across the U.S. Government and
                  Department of Defense.
                </p>

                {/* CTAs */}
                <div className="reveal delay-300 flex flex-wrap gap-4 mt-10">
                  <Link
                    href="/book"
                    className="group inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#a50d25] text-white text-sm font-semibold px-8 py-4 rounded-sm transition-all duration-200 tracking-wide"
                  >
                    Book a Consultation
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/about"
                    className="group inline-flex items-center gap-2 border border-white/25 hover:border-white/60 text-white text-sm font-medium px-8 py-4 rounded-sm transition-all duration-200 tracking-wide"
                  >
                    About CCGC
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* ── Right: address/contact aside ── */}
              <div className="reveal delay-400 hidden lg:flex lg:col-span-4 justify-end pb-2">
                <div className="border-l border-white/10 pl-8 space-y-6">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Headquarters</div>
                    <div className="text-sm text-gray-300 leading-relaxed">
                      {company.address}<br />{company.city}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Direct Line</div>
                    <a href="tel:7036837040" className="text-sm text-gray-300 hover:text-white transition-colors">
                      {company.phone}
                    </a>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Established</div>
                    <div className="text-sm text-gray-300">{company.founded} · Alexandria, VA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div className="relative z-10 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`reveal delay-${(i + 3) * 100} py-7 px-6 first:pl-0`}
                >
                  <div className="text-[2.25rem] lg:text-[2.75rem] font-black text-white tracking-tight leading-none">
                    {s.value}
                  </div>
                  <div className="text-xs text-gray-400 mt-2 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════ WHO WE ARE / POSITION ═══ */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            {/* Left — bold pull quote */}
            <div className="lg:col-span-5">
              <span className="divider-red" />
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] text-[#0A1628] leading-tight text-balance">
                The network that most firms spend decades trying to build.
              </h2>
            </div>

            {/* Right — description + credibility */}
            <div className="lg:col-span-7 lg:pt-2">
              <p className="text-[1.0625rem] text-gray-600 leading-relaxed mb-6">
                Founded in {company.founded} and headquartered steps from the Pentagon,
                CCGC has spent over 25 years cultivating trusted relationships at every
                level of the U.S. Government and Department of Defense. Our team of
                retired senior officers and government affairs veterans doesn't cold-call
                — we walk into rooms that others can't access.
              </p>
              <p className="text-[1.0625rem] text-gray-600 leading-relaxed mb-10">
                Clients retain CCGC to navigate the federal marketplace with precision:
                from Pentagon stakeholder alignment to Capitol Hill appropriations
                engagement to multi-year business development strategy.
              </p>

              {/* Credibility pillars */}
              <div className="grid grid-cols-3 gap-0 border border-gray-100">
                {[
                  { number: "25+",  label: "Years in Business" },
                  { number: "80+",  label: "Years Combined Military Service" },
                  { number: "All",  label: "DoD Branches & Federal Agencies" },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className="py-6 px-5 border-r last:border-r-0 border-gray-100 text-center"
                  >
                    <div className="text-2xl font-black text-[#C8102E] mb-1">{item.number}</div>
                    <div className="text-[11px] text-gray-500 leading-snug">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link href="/about" className="arrow-link text-sm font-semibold text-[#0A1628] hover:text-[#C8102E] transition-colors">
                  Our story <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ SERVICES ═══ */}
      <section className="grain section-padding bg-[#0A1628] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <span className="divider-red" />
              <h2 className="font-display text-[clamp(2rem,3.5vw,2.75rem)] text-white">
                What We Do
              </h2>
            </div>
            <Link
              href="/services"
              className="arrow-link text-sm font-medium text-gray-400 hover:text-white transition-colors whitespace-nowrap"
            >
              View all services <ArrowRight size={14} />
            </Link>
          </div>

          {/* Editorial service list */}
          <div className="divide-y divide-white/8">
            {services.map((svc, i) => (
              <Link
                key={svc.id}
                href={`/services#${svc.id}`}
                className="group flex flex-col sm:flex-row sm:items-start gap-6 py-10 hover:bg-white/[0.03] transition-colors -mx-6 px-6 lg:-mx-12 lg:px-12"
              >
                {/* Number */}
                <span className="hidden sm:block flex-shrink-0 text-[11px] font-bold tracking-widest text-gray-600 uppercase pt-1 w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#C8102E] group-hover:border-[#C8102E]/40 transition-colors">
                  {SVC_ICONS[svc.icon]}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                    {svc.tagline}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 self-center">
                  <ArrowUpRight
                    size={18}
                    className="text-gray-700 group-hover:text-[#C8102E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ LEADERSHIP PREVIEW ═══ */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <span className="divider-red" />
              <h2 className="font-display text-[clamp(2rem,3.5vw,2.75rem)] text-[#0A1628]">
                Senior Leadership
              </h2>
            </div>
            <Link
              href="/leadership"
              className="arrow-link text-sm font-medium text-gray-500 hover:text-[#C8102E] transition-colors whitespace-nowrap"
            >
              Meet the full team <ArrowRight size={14} />
            </Link>
          </div>

          {/* Leader cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {featuredLeaders.map((person) => (
              <Link
                key={person.id}
                href="/leadership"
                className="group img-zoom bg-white rounded-sm shadow-sm shadow-gray-100 border border-gray-100/80 overflow-hidden card-hover"
              >
                {/* Photo */}
                <div className="relative h-80 bg-[#0A1628]">
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    className="object-cover object-center transition-all duration-500"
                    unoptimized
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/75 via-[#0A1628]/10 to-transparent" />

                  {/* Title badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="h-px w-6 bg-[#C8102E] mb-2" />
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-gray-300">
                      {person.title.split(",")[0]}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="px-6 py-5">
                  <h3 className="font-bold text-[#0A1628] text-lg leading-tight">{person.name}</h3>
                  <p className="text-[#C8102E] text-xs font-semibold uppercase tracking-wide mt-0.5 mb-3">
                    {person.title}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                    {person.bio}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-gray-400 group-hover:text-[#C8102E] transition-colors">
                    Full biography <ArrowUpRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════ MARKET FOCUS / SECTORS ═══ */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* Left */}
            <div className="lg:col-span-5">
              <span className="divider-red" />
              <h2 className="font-display text-[clamp(2rem,3.5vw,2.75rem)] text-[#0A1628] mb-6 text-balance">
                Every branch. Every agency. One firm.
              </h2>
              <p className="text-gray-600 text-[1.0625rem] leading-relaxed mb-8">
                CCGC maintains active networks across all branches of the Department
                of Defense and throughout the federal agency landscape. Each of our
                Vice Presidents leads a dedicated market vertical, ensuring
                specialist-level access for every client.
              </p>
              <Link
                href="/sectors"
                className="group inline-flex items-center gap-2 bg-[#0A1628] hover:bg-[#102a43] text-white text-sm font-semibold px-7 py-3.5 rounded-sm transition-colors tracking-wide"
              >
                View All Sectors
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right — sector grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { label: "Army Aviation",      sub: "Led by Doug Hooks, Ret. Colonel" },
                  { label: "Air Force & ISR",    sub: "Led by Bo Marlin, Ret. SES" },
                  { label: "Marine Corps & Navy",sub: "Led by Gary Crouse" },
                  { label: "Pentagon",           sub: "Direct staff relationships" },
                  { label: "Capitol Hill",       sub: "Appropriations engagement" },
                  { label: "International / FMS",sub: "Foreign Military Sales" },
                ].map((sector) => (
                  <Link
                    key={sector.label}
                    href="/sectors"
                    className="group border border-gray-150 hover:border-[#C8102E] rounded-sm p-5 transition-all duration-200 hover:shadow-sm"
                  >
                    <div className="h-px w-5 bg-[#C8102E] mb-3 group-hover:w-8 transition-all duration-200" />
                    <div className="text-sm font-bold text-[#0A1628] mb-1 leading-tight">
                      {sector.label}
                    </div>
                    <div className="text-[11px] text-gray-400 leading-snug">{sector.sub}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ WHY CCGC / EDGE ═══ */}
      <section className="grain section-padding bg-[#0A1628] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* Left: image */}
            <div className="lg:col-span-5 order-last lg:order-first">
              <div className="relative">
                <div className="img-zoom rounded-sm overflow-hidden aspect-[4/5]">
                  <Image
                    src="https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?w=900&q=80"
                    alt="Washington D.C. federal district"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-[#0A1628]/30" />
                </div>
                {/* Callout box */}
                <div className="absolute -bottom-5 -right-5 bg-[#C8102E] text-white p-6 rounded-sm shadow-2xl">
                  <div className="text-3xl font-black leading-none">{company.founded}</div>
                  <div className="text-[11px] text-red-200 tracking-widest uppercase mt-1">Founded</div>
                  <div className="text-xs text-red-300 mt-0.5">Alexandria, VA</div>
                </div>
              </div>
            </div>

            {/* Right: copy */}
            <div className="lg:col-span-7">
              <span className="divider-red" />
              <h2 className="font-display text-[clamp(2rem,3.5vw,2.75rem)] text-white mb-8 text-balance">
                Why clients trust CCGC with their most critical market access.
              </h2>

              <div className="space-y-7">
                {[
                  {
                    title: "Authentic, earned relationships",
                    desc: "Our team's government connections were built over careers in uniform and in government — not purchased through event sponsorships or cold outreach.",
                  },
                  {
                    title: "Dedicated, specialist-led verticals",
                    desc: "Each market we serve is led by a Vice President with deep sector expertise — Army Aviation, Air Force & ISR, Marine Corps & Navy. No generalists.",
                  },
                  {
                    title: "Frequent, substantive communication",
                    desc: "Clients receive regular intelligence updates, budget cycle alerts, and proactive strategic guidance — not quarterly check-ins.",
                  },
                  {
                    title: "Strategically positioned in Alexandria, VA",
                    desc: "Minutes from the Pentagon, Capitol Hill, and the federal government's center of gravity — CCGC is where the action is.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-5">
                    <div className="flex-shrink-0 mt-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-base mb-1.5">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="arrow-link text-sm font-semibold text-gray-300 hover:text-white transition-colors"
                >
                  More about CCGC <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ CTA ═══ */}
      <section className="relative py-28 bg-white overflow-hidden">
        {/* Decorative lines */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#C8102E]/20" />
        <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-[#C8102E]/20" />

        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <span className="block w-8 h-0.5 bg-[#C8102E] mx-auto mb-8" />
          <h2 className="font-display text-[clamp(2.25rem,4vw,3.5rem)] text-[#0A1628] mb-6 text-balance">
            Ready to navigate the government market?
          </h2>
          <p className="text-gray-500 text-[1.0625rem] leading-relaxed mb-10 max-w-xl mx-auto">
            Schedule a confidential consultation with CCGC's senior team.
            We'll assess your current position and outline a clear path forward.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/book"
              className="group inline-flex items-center gap-2.5 bg-[#C8102E] hover:bg-[#a50d25] text-white text-sm font-semibold px-10 py-4 rounded-sm transition-all duration-200 tracking-wide"
            >
              Book a Consultation
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:7036837040"
              className="group inline-flex items-center gap-2 border border-gray-200 hover:border-gray-400 text-[#0A1628] text-sm font-medium px-8 py-4 rounded-sm transition-colors tracking-wide"
            >
              Call {company.phone}
            </a>
          </div>

          {/* Trust footnote */}
          <p className="mt-8 text-[11px] text-gray-400 tracking-wide uppercase">
            All inquiries handled with strict confidentiality
          </p>
        </div>
      </section>
    </>
  );
}
