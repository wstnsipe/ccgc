"use client";

// ─── Calendly Live Integration ─────────────────────────────────────────────
//
// To activate the live scheduling widget:
//
//   Step 1 — Install the package:
//     npm install react-calendly
//
//   Step 2 — Set your Calendly event URL in .env.local:
//     NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/YOUR_HANDLE/intro
//
//   Step 3 — In this file, uncomment the import below and swap the
//             placeholder <div> for the <InlineWidget> usage shown.
//
// ──────────────────────────────────────────────────────────────────────────

// import { InlineWidget } from "react-calendly";

import { Calendar, ExternalLink } from "lucide-react";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL;

export default function CalendlyEmbed() {
  if (CALENDLY_URL) {
    // ── Live embed ── Uncomment after installing react-calendly:
    // return (
    //   <InlineWidget
    //     url={CALENDLY_URL}
    //     styles={{ height: "680px", minWidth: "320px" }}
    //     pageSettings={{
    //       backgroundColor: "ffffff",
    //       primaryColor: "C8102E",
    //       textColor: "0A1628",
    //       hideLandingPageDetails: true,
    //       hideEventTypeDetails: false,
    //     }}
    //   />
    // );
  }

  // ── Prototype placeholder ─────────────────────────────────────────────────
  return (
    <div
      className="rounded-sm border border-dashed border-gray-300 bg-white flex flex-col items-center justify-center py-20 px-8 text-center gap-5"
      role="region"
      aria-label="Calendly scheduling widget — not yet configured"
    >
      <div className="w-12 h-12 rounded-full bg-[#0A1628] flex items-center justify-center">
        <Calendar size={20} className="text-white" aria-hidden="true" />
      </div>
      <div>
        <p className="text-sm font-semibold text-[#0A1628] mb-1.5">Live Calendar Scheduling</p>
        <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
          Set{" "}
          <code className="font-mono text-[10px] bg-gray-100 px-1.5 py-0.5 rounded">
            NEXT_PUBLIC_CALENDLY_URL
          </code>{" "}
          and install{" "}
          <code className="font-mono text-[10px] bg-gray-100 px-1.5 py-0.5 rounded">
            react-calendly
          </code>{" "}
          to activate inline scheduling.
        </p>
      </div>
      <a
        href="https://calendly.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C8102E] hover:underline"
      >
        Open Calendly directly
        <ExternalLink size={11} aria-hidden="true" />
      </a>
    </div>
  );
}
