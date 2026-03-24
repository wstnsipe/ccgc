"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const SERVICE_OPTIONS = [
  "Strategic Planning",
  "Business Development",
  "Government Relations & Lobbying",
  "Multiple Services",
  "Not Sure Yet",
];

const SECTOR_OPTIONS = [
  "Army / Aviation",
  "Air Force / ISR",
  "Marine Corps / Navy",
  "Federal Agencies",
  "International / FMS",
  "Multiple Sectors",
];

const inputClass =
  "w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-[#0A1628] placeholder-gray-400 bg-white focus:outline-none focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E] transition-colors";

type FieldProps = {
  label: string;
  id: string;
  required?: boolean;
  children: React.ReactNode;
};

function Field({ label, id, required, children }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[10px] font-bold uppercase tracking-widest text-[#0A1628] mb-2"
      >
        {label}{" "}
        {required && (
          <span className="text-[#C8102E]" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center" role="status">
        <div className="w-14 h-14 rounded-full bg-green-50 ring-4 ring-green-100 flex items-center justify-center mb-6">
          <CheckCircle size={28} className="text-green-600" aria-hidden="true" />
        </div>
        <h3 className="font-display text-2xl text-[#0A1628] mb-3">Message Received</h3>
        <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
          Thank you for contacting CCGC. A member of our senior team will reach out
          within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="First Name" id="contact-first-name" required>
          <input
            id="contact-first-name"
            type="text"
            required
            autoComplete="given-name"
            placeholder="Jane"
            className={inputClass}
          />
        </Field>
        <Field label="Last Name" id="contact-last-name" required>
          <input
            id="contact-last-name"
            type="text"
            required
            autoComplete="family-name"
            placeholder="Smith"
            className={inputClass}
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Company" id="contact-company" required>
          <input
            id="contact-company"
            type="text"
            required
            autoComplete="organization"
            placeholder="Acme Defense Corp"
            className={inputClass}
          />
        </Field>
        <Field label="Title" id="contact-title">
          <input
            id="contact-title"
            type="text"
            autoComplete="organization-title"
            placeholder="VP Business Development"
            className={inputClass}
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Email Address" id="contact-email" required>
          <input
            id="contact-email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
            className={inputClass}
          />
        </Field>
        <Field label="Phone Number" id="contact-phone">
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            placeholder="555.000.0000"
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="Service Interest" id="contact-service">
        <select id="contact-service" className={inputClass}>
          <option value="">Select a service...</option>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Target Market / Sector" id="contact-sector">
        <select id="contact-sector" className={inputClass}>
          <option value="">Select a sector...</option>
          {SECTOR_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Tell Us About Your Objectives" id="contact-message" required>
        <textarea
          id="contact-message"
          required
          rows={5}
          placeholder="Briefly describe your company, current government market activities, and what you're hoping to achieve..."
          className={`${inputClass} resize-none`}
        />
      </Field>

      <Field label="How Did You Hear About CCGC?" id="contact-referral">
        <input
          id="contact-referral"
          type="text"
          placeholder="Referral, web search, industry event..."
          className={inputClass}
        />
      </Field>

      <p className="text-[11px] text-gray-400 leading-relaxed">
        All inquiries are handled with strict confidentiality. CCGC will never share your
        information with third parties.
      </p>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2.5 bg-[#C8102E] hover:bg-[#a50d25] disabled:bg-gray-300 disabled:cursor-not-allowed text-white text-sm font-semibold px-8 py-4 rounded-sm transition-colors tracking-wide"
      >
        {loading ? (
          <>
            <span
              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
              aria-hidden="true"
            />
            Sending...
          </>
        ) : (
          <>
            Submit Request
            <Send size={14} aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
