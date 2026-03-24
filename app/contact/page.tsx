import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowRight, ArrowUpRight } from "lucide-react";
import { company, leadership } from "@/lib/data";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact CCGC's team directly or submit an inquiry. 683 S Washington Street, Alexandria, VA 22314. 703.683.7040.",
};

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="grain relative pt-40 pb-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=75"
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
              Get in Touch
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <h1 className="font-display text-[clamp(2.75rem,6vw,5rem)] text-white leading-[1.05] text-balance mb-5">
                We'd like to hear from you.
              </h1>
              <p className="text-[1.125rem] text-gray-300 leading-relaxed">
                Reach out with a question, an introduction, or a request.
                Our team responds to all inquiries promptly.
              </p>
            </div>

            {/* Contact quick-facts */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: MapPin, label: "Office", value: `${company.address}`, sub: company.city },
                { icon: Phone, label: "Direct Line", value: company.phone, href: "tel:7036837040" },
                { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
                { icon: Clock, label: "Hours", value: "Mon–Fri", sub: "8 AM – 6 PM ET" },
              ].map(({ icon: Icon, label, value, sub, href }) => (
                <div key={label} className="bg-white/5 border border-white/10 rounded-sm p-5">
                  <Icon size={14} className="text-[#C8102E] mb-3" />
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">{label}</div>
                  {href ? (
                    <a href={href} className="text-sm text-white hover:text-[#C8102E] transition-colors font-medium">
                      {value}
                    </a>
                  ) : (
                    <div className="text-sm text-white font-medium">{value}</div>
                  )}
                  {sub && <div className="text-xs text-gray-500 mt-0.5">{sub}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Main content: Form + Sidebar ── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">

            {/* ── Form ── */}
            <div className="lg:col-span-7">
              <span className="divider-red" />
              <h2 className="font-display text-[clamp(1.75rem,3vw,2.25rem)] text-[#0A1628] mb-2">
                Send us a message
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                We respond to all inquiries within one business day.
              </p>
              <ContactForm />
            </div>

            {/* ── Sidebar ── */}
            <div className="lg:col-span-5 space-y-6">

              {/* Book CTA */}
              <div className="bg-[#0A1628] rounded-sm p-8">
                <div className="h-px w-8 bg-[#C8102E] mb-5" />
                <h3 className="font-display text-xl text-white mb-3">
                  Looking to schedule a consultation?
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Use our dedicated booking page to schedule a 30-minute
                  introductory call and describe your objectives in detail.
                </p>
                <Link
                  href="/book"
                  className="group flex items-center justify-between bg-[#C8102E] hover:bg-[#a50d25] text-white text-sm font-semibold px-6 py-3.5 rounded-sm transition-colors"
                >
                  Book a Consultation
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Office details */}
              <div className="border border-gray-100 rounded-sm p-8">
                <div className="h-px w-8 bg-[#C8102E] mb-5" />
                <h3 className="font-bold text-[#0A1628] text-base mb-5">Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={14} className="text-[#C8102E] mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-gray-600">
                      <div>{company.address}</div>
                      <div>{company.city}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={14} className="text-[#C8102E] flex-shrink-0" />
                    <a href="tel:7036837040" className="text-sm text-gray-600 hover:text-[#C8102E] transition-colors">
                      {company.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={14} className="text-[#C8102E] flex-shrink-0" />
                    <a href={`mailto:${company.email}`} className="text-sm text-gray-600 hover:text-[#C8102E] transition-colors">
                      {company.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={14} className="text-[#C8102E] flex-shrink-0" />
                    <span className="text-sm text-gray-600">Mon–Fri, 8:00 AM – 6:00 PM ET</span>
                  </div>
                </div>
              </div>

              {/* Nearby landmarks */}
              <div className="bg-[#F8FAFC] border border-gray-100 rounded-sm p-6">
                <div className="text-[11px] font-bold uppercase tracking-widest text-[#0A1628] mb-4">
                  Nearby
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { place: "Pentagon", dist: "5 min" },
                    { place: "Reagan National", dist: "8 min" },
                    { place: "Capitol Hill", dist: "20 min" },
                    { place: "Federal Triangle", dist: "22 min" },
                  ].map((item) => (
                    <div key={item.place} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <span className="text-xs text-gray-600 font-medium">{item.place}</span>
                      <span className="text-[10px] text-gray-400">{item.dist}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Direct Contacts (Team) ── */}
      <section className="section-padding bg-[#F8FAFC] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <span className="divider-red" />
              <h2 className="font-display text-[clamp(1.75rem,3vw,2.25rem)] text-[#0A1628]">
                Contact the team directly
              </h2>
            </div>
            <Link
              href="/leadership"
              className="arrow-link text-sm font-medium text-gray-500 hover:text-[#C8102E] transition-colors whitespace-nowrap"
            >
              View full bios <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {leadership.map((person) => (
              <div
                key={person.id}
                className="bg-white border border-gray-100 rounded-sm p-6 flex gap-5 hover:border-gray-200 hover:shadow-sm transition-all"
              >
                {/* Photo */}
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-gray-100">
                  <Image
                    src={person.photo}
                    alt={person.name}
                    width={56}
                    height={56}
                    className="object-cover object-center w-full h-full"
                    unoptimized
                  />
                </div>

                {/* Info */}
                <div className="min-w-0">
                  <div className="font-bold text-[#0A1628] text-sm leading-tight">{person.name}</div>
                  <div className="text-[10px] text-[#C8102E] font-semibold uppercase tracking-wide mt-0.5 mb-3.5 leading-tight">
                    {person.title.split(",")[0]}
                  </div>
                  <a
                    href={`mailto:${person.email}`}
                    className="flex items-center gap-1.5 text-[11px] text-gray-400 hover:text-[#C8102E] transition-colors"
                  >
                    <Mail size={11} className="flex-shrink-0" />
                    <span className="truncate">{person.email}</span>
                  </a>
                  {person.phone && (
                    <a
                      href={`tel:${person.phone.replace(/\./g, "")}`}
                      className="flex items-center gap-1.5 text-[11px] text-gray-400 hover:text-[#C8102E] transition-colors mt-1.5"
                    >
                      <Phone size={11} className="flex-shrink-0" />
                      {person.phone}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Location visual ── */}
      <section className="grain bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="divider-red" />
              <h2 className="font-display text-[clamp(1.75rem,3vw,2.25rem)] text-white mb-4 text-balance">
                Old Town Alexandria — at the center of the federal ecosystem.
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our office at 683 S Washington Street places us in one of
                the most strategically positioned consulting locations in the country —
                adjacent to the nation's defense establishment, accessible to Capitol
                Hill, and in the heart of a community of defense industry professionals.
              </p>
            </div>
            <div className="img-zoom relative rounded-sm overflow-hidden aspect-video">
              <Image
                src="https://images.unsplash.com/photo-1617480246550-86952d74a02c?w=900&q=80"
                alt="Alexandria Virginia"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-[#0A1628]/30" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
