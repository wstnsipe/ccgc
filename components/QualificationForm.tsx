"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const SUPPORT_OPTIONS = [
  "Strategic Planning & Market Entry",
  "Business Development & Capture",
  "Government Relations & Lobbying",
  "Multiple Services / Not Sure Yet",
];

const inputClass =
  "w-full px-4 py-3.5 border border-gray-200 rounded-sm text-sm text-[#0A1628] placeholder-gray-400 bg-white focus:outline-none focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E] transition-all";

type FieldProps = { label: string; id: string; required?: boolean; children: React.ReactNode };
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

export default function QualificationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-sm border border-green-100 bg-green-50 px-8 py-10 flex items-start gap-5">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
          <CheckCircle size={20} className="text-green-600" strokeWidth={2} />
        </div>
        <div>
          <h3 className="font-bold text-[#0A1628] text-base mb-1">Brief received — thank you.</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Select a time on our calendar below and a member of CCGC's senior leadership will
            join you prepared. If no time works, we'll follow up within one business day.
          </p>
          <div className="mt-4">
            <a
              href="#schedule"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#C8102E] hover:underline"
            >
              Select a time on the calendar
              <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="First Name" id="qual-first-name" required>
          <input
            id="qual-first-name"
            type="text"
            required
            autoComplete="given-name"
            placeholder="Jane"
            className={inputClass}
          />
        </Field>
        <Field label="Last Name" id="qual-last-name" required>
          <input
            id="qual-last-name"
            type="text"
            required
            autoComplete="family-name"
            placeholder="Smith"
            className={inputClass}
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Company" id="qual-company" required>
          <input
            id="qual-company"
            type="text"
            required
            autoComplete="organization"
            placeholder="Acme Defense Corp"
            className={inputClass}
          />
        </Field>
        <Field label="Work Email" id="qual-email" required>
          <input
            id="qual-email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="Type of Support Needed" id="qual-support" required>
        <select id="qual-support" required className={inputClass}>
          <option value="">Select one...</option>
          {SUPPORT_OPTIONS.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </Field>

      <Field label="Brief overview of your objectives (optional)" id="qual-notes">
        <textarea
          id="qual-notes"
          rows={3}
          placeholder="Tell us where you are today and what you're trying to achieve in the federal or defense market..."
          className={`${inputClass} resize-none`}
        />
      </Field>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2.5 bg-[#0A1628] hover:bg-[#102a43] disabled:bg-gray-300 text-white text-sm font-semibold px-6 py-4 rounded-sm transition-colors tracking-wide"
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Submit Brief &amp; Proceed to Calendar
            <ArrowRight size={14} />
          </>
        )}
      </button>

      <p className="text-[11px] text-gray-400 text-center leading-relaxed">
        All submissions are reviewed personally by senior leadership and treated with strict confidentiality.
      </p>
    </form>
  );
}
