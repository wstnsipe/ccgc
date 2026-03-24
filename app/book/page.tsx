import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  CheckCircle,
  Phone,
  Mail,
  Clock,
  Shield,
  ArrowRight,
  Users,
  Lock,
} from "lucide-react";
import { company, leadership } from "@/lib/data";
import QualificationForm from "@/components/QualificationForm";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Book a Consultation — CCGC",
  description:
    "Request a confidential consultation with CCGC's senior leadership. Tell us about your federal and defense market objectives, then schedule directly on our calendar.",
};

const callCovers = [
  "Your current position in the federal or defense market",
  "The specific agencies, commands, or programs you're targeting",
  "Key relationships and gaps in your existing government network",
  "Where CCGC can apply its network to accelerate your objectives",
  "Next steps if there's a mutual fit",
];

const whoWeHelp = [
  {
    label: "01",
    title: "Defense contractors seeking DoD access",
    desc: "Strong capabilities but limited relationships inside the Pentagon, major commands, or acquisition offices.",
  },
  {
    label: "02",
    title: "Federal market entrants",
    desc: "Proven commercial technology ready to translate into government contracts across DoD and civilian agencies.",
  },
  {
    label: "03",
    title: "International firms pursuing FMS",
    desc: "Foreign defense companies seeking U.S. government relationships for Foreign Military Sales programs.",
  },
  {
    label: "04",
    title: "Established contractors seeking growth",
    desc: "Companies with existing government business expanding into new agencies, branches, or program offices.",
  },
];

const steps = [
  {
    num: "01",
    title: "Submit your brief",
    desc: "Tell us who you are and what you're trying to accomplish. Takes under two minutes.",
    time: "~2 min",
  },
  {
    num: "02",
    title: "We review personally",
    desc: "A senior CCGC leader reviews every inquiry before the call. You'll speak with someone prepared.",
    time: "≤1 business day",
  },
  {
    num: "03",
    title: "30-minute intro call",
    desc: "A focused conversation with the CCGC principal best suited to your market and objectives.",
    time: "30 min",
  },
];

export default function BookPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="grain relative pt-40 pb-20 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=1920&q=75"
            alt=""
            fill
            className="object-cover object-center opacity-[0.09]"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/40 to-[#0A1628]" />
        </div>
        <div className="bar-slide absolute top-0 left-0 w-[3px] h-full bg-[#C8102E] z-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-10">
            <span className="block h-px w-10 bg-[#C8102E]" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#C8102E]">
              Confidential Consultation
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <h1 className="font-display text-[clamp(2.75rem,6vw,4.75rem)] text-white leading-[1.05] text-balance mb-6">
                The first step is a conversation.
              </h1>
              <p className="text-[1.125rem] text-gray-300 leading-relaxed max-w-xl mb-10">
                Every CCGC engagement starts with a 30-minute call with senior leadership —
                not a junior associate. Tell us about your objectives and select a time that
                works for you.
              </p>

              {/* Key facts */}
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: Clock, label: "30-minute call" },
                  { icon: Users, label: "Senior leadership only" },
                  { icon: Lock, label: "Strictly confidential" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={12} className="text-[#C8102E]" />
                    </div>
                    <span className="text-sm text-gray-300">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: quick contact sidebar */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="border border-white/10 rounded-sm p-8 bg-white/[0.03] backdrop-blur-sm">
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-5">
                  Not ready to schedule?
                </div>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  Reach out directly. We respond to all inquiries within one business day.
                </p>
                <div className="space-y-4">
                  <a
                    href={`tel:${company.phone.replace(/\./g, "")}`}
                    className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-[#C8102E] flex items-center justify-center transition-colors flex-shrink-0">
                      <Phone size={12} className="text-[#C8102E]" />
                    </div>
                    {company.phone}
                  </a>
                  <a
                    href={`mailto:${company.email}`}
                    className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-[#C8102E] flex items-center justify-center transition-colors flex-shrink-0">
                      <Mail size={12} className="text-[#C8102E]" />
                    </div>
                    {company.email}
                  </a>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors"
                  >
                    Send a message instead
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process strip ── */}
      <section className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
            {steps.map((step) => (
              <div key={step.num} className="py-8 px-8 first:pl-0 last:pr-0">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-[11px] font-bold tracking-widest text-[#C8102E]">
                    {step.num}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                    {step.time}
                  </span>
                </div>
                <h3 className="font-bold text-[#0A1628] text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main layout ── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">

            {/* ── LEFT: Form + Calendly ── */}
            <div className="lg:col-span-7 space-y-14">

              {/* Step 1: Qualification form */}
              <div>
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-[11px] font-bold tracking-widest text-[#C8102E]">STEP 01</span>
                </div>
                <span className="divider-red" />
                <h2 className="font-display text-[clamp(1.5rem,2.5vw,2rem)] text-[#0A1628] mb-2">
                  Tell us about your objectives.
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-lg">
                  This brief intake helps our team prepare for your call. We review every submission
                  personally before we meet — so you speak with the right person.
                </p>
                <QualificationForm />
              </div>

              {/* Step 2: Calendly embed */}
              <div id="schedule">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-[11px] font-bold tracking-widest text-[#C8102E]">STEP 02</span>
                </div>
                <span className="divider-red" />
                <h2 className="font-display text-[clamp(1.5rem,2.5vw,2rem)] text-[#0A1628] mb-2">
                  Select a time on our calendar.
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-lg">
                  Choose a 30-minute slot that works for you. You'll receive a confirmation with
                  dial-in details. Calls are held over phone or video — your preference.
                </p>

                {/* Calendly embed — configured via CalendlyEmbed component */}
                <div className="rounded-sm border border-gray-200 bg-[#F8FAFC] overflow-hidden">
                  {/* Header bar */}
                  <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-200 bg-white">
                    <div className="w-7 h-7 rounded-full bg-[#0A1628] flex items-center justify-center flex-shrink-0">
                      <Calendar size={13} className="text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0A1628]">CCGC Introductory Call</div>
                      <div className="text-[11px] text-gray-500">30 min · Phone or Video</div>
                    </div>
                  </div>
                  {/* Swap this for live scheduling by configuring CalendlyEmbed.tsx */}
                  <CalendlyEmbed />
                </div>
              </div>

              {/* Secondary CTA — not ready */}
              <div className="rounded-sm border border-gray-100 bg-[#F8FAFC] p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-[#0A1628] mb-2">
                      Not ready to schedule?
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                      Send us a message and we'll reach out at your convenience.
                      All inquiries receive a personal reply within one business day.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 flex-shrink-0">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 border border-[#0A1628] text-[#0A1628] hover:bg-[#0A1628] hover:text-white text-sm font-semibold px-6 py-3 rounded-sm transition-colors whitespace-nowrap"
                    >
                      Send a message
                      <ArrowRight size={13} />
                    </Link>
                    <a
                      href={`tel:${company.phone.replace(/\./g, "")}`}
                      className="inline-flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-[#C8102E] transition-colors"
                    >
                      <Phone size={12} />
                      {company.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Trust sidebar ── */}
            <div className="lg:col-span-5 space-y-8">
              <div className="lg:sticky lg:top-28">

                {/* What you'll cover */}
                <div className="mb-8">
                  <span className="divider-red" />
                  <h3 className="font-display text-xl text-[#0A1628] mb-5">
                    What you'll cover on the call
                  </h3>
                  <ul className="space-y-3.5">
                    {callCovers.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle
                          size={14}
                          className="text-[#C8102E] mt-0.5 flex-shrink-0"
                          strokeWidth={2}
                        />
                        <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Who you'll speak with */}
                <div className="border-t border-gray-100 pt-8 mb-8">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#0A1628] mb-4">
                    Who you'll speak with
                  </div>
                  <div className="flex -space-x-2 mb-4">
                    {leadership.slice(0, 5).map((p) => (
                      <div
                        key={p.id}
                        className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                      >
                        <Image
                          src={p.photo}
                          alt={p.name}
                          width={40}
                          height={40}
                          className="object-cover object-top w-full h-full"
                          unoptimized
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Every call is taken by a CCGC Vice President or senior principal — matched
                    to your target market. You'll never be handed off to a junior associate.
                  </p>
                </div>

                {/* Confidentiality */}
                <div className="rounded-sm bg-[#0A1628] p-6 mb-8">
                  <div className="flex items-start gap-4">
                    <Shield size={18} className="text-[#C8102E] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white mb-2 tracking-wide uppercase">
                        Strict Confidentiality
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        Everything you share — your company's objectives, market activities,
                        and relationships — is treated as strictly confidential. CCGC never
                        shares client information with third parties, competitors, or partners.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct contact — desktop repeat */}
                <div className="border-t border-gray-100 pt-8">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#0A1628] mb-4">
                    Prefer to reach out directly?
                  </div>
                  <div className="space-y-3">
                    <a
                      href={`tel:${company.phone.replace(/\./g, "")}`}
                      className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#C8102E] transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-full border border-gray-200 group-hover:border-[#C8102E] flex items-center justify-center transition-colors flex-shrink-0">
                        <Phone size={12} className="text-[#C8102E]" />
                      </div>
                      {company.phone}
                    </a>
                    <a
                      href={`mailto:${company.email}`}
                      className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#C8102E] transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-full border border-gray-200 group-hover:border-[#C8102E] flex items-center justify-center transition-colors flex-shrink-0">
                        <Mail size={12} className="text-[#C8102E]" />
                      </div>
                      {company.email}
                    </a>
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0">
                        <Clock size={12} className="text-[#C8102E]" />
                      </div>
                      Mon–Fri, 8 AM – 6 PM ET
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who we help ── */}
      <section className="section-padding bg-[#F8FAFC] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-6">
              <span className="divider-red" />
              <h2 className="font-display text-[clamp(1.875rem,3.5vw,2.5rem)] text-[#0A1628]">
                Who we work with
              </h2>
            </div>
            <div className="lg:col-span-6 lg:text-right">
              <p className="text-sm text-gray-500 leading-relaxed">
                CCGC works exclusively with companies that are serious about capturing
                federal and defense market opportunities — not exploratory inquiries.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whoWeHelp.map((item) => (
              <div
                key={item.label}
                className="bg-white border border-gray-100 rounded-sm p-7 group hover:border-[#C8102E]/30 transition-colors"
              >
                <div className="text-[11px] font-bold uppercase tracking-widest text-[#C8102E] mb-4">
                  {item.label}
                </div>
                <div className="h-px w-6 bg-[#C8102E] mb-4" />
                <h3 className="font-bold text-[#0A1628] text-sm mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 pt-10 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm text-gray-600 font-semibold">
              Ready to explore what's possible?
            </p>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#a50d25] text-white text-sm font-semibold px-7 py-3.5 rounded-sm transition-colors tracking-wide"
            >
              Book a Consultation
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
