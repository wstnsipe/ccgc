import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { company, navLinks, services } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] text-gray-300">
      {/* Crimson top accent */}
      <div className="h-[3px] bg-[#C8102E]" />

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="text-white font-bold text-2xl tracking-tight leading-none">CCGC</div>
              <div className="text-[10px] text-gray-500 tracking-[0.18em] uppercase mt-1.5">
                Continental Consulting Group
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-[220px]">
              Federal and defense market consulting. Est. 2000, Alexandria, VA.
            </p>
            <div className="h-px w-10 bg-[#C8102E]/60" />
            <div className="text-[11px] text-gray-600 mt-3">
              Strictly confidential engagements
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[10px] text-white font-bold uppercase tracking-[0.18em] mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[10px] text-white font-bold uppercase tracking-[0.18em] mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((svc) => (
                <li key={svc.id}>
                  <Link
                    href={`/services#${svc.id}`}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[10px] text-white font-bold uppercase tracking-[0.18em] mb-5">
              Contact
            </h3>
            <ul className="space-y-4 mb-7">
              <li className="flex items-start gap-3">
                <MapPin size={13} className="text-[#C8102E] mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-500">
                  <div>{company.address}</div>
                  <div>{company.city}</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={13} className="text-[#C8102E] flex-shrink-0" />
                <a
                  href={`tel:${company.phone.replace(/\./g, "")}`}
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={13} className="text-[#C8102E] flex-shrink-0" />
                <a
                  href={`mailto:${company.email}`}
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  {company.email}
                </a>
              </li>
            </ul>

            <Link
              href="/book"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#C8102E] hover:text-[#e8132e] transition-colors"
            >
              Book a Consultation
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-gray-700">
            © {new Date().getFullYear()} Continental Consulting Group Corporation. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[11px] text-gray-700">Alexandria, VA · Washington, DC Metro</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
