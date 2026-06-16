"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden">
      {items.map(({ question, answer }, i) => (
        <div key={i} className="bg-white">
          <button
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors"
            onClick={() => toggle(i)}
            aria-expanded={openIndex === i}
          >
            <span className="font-medium text-slate-900 font-display text-sm sm:text-base">
              {question}
            </span>
            <span
              className={`shrink-0 flex items-center justify-center w-6 h-6 rounded-full border border-slate-300 text-slate-500 transition-transform duration-200 ${
                openIndex === i ? "rotate-45" : ""
              }`}
              aria-hidden="true"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
          </button>
          {openIndex === i && (
            <div className="px-6 pb-5">
              <p className="text-sm text-slate-600 leading-relaxed">{answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
