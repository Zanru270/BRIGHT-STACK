import type { Metadata } from "next";
import Link from "next/link";
import Badge from "../components/Badge";
import FaqAccordion from "../components/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Bright Stack's services, payment process, timelines, technologies, and consumer rights.",
};

const faqs = [
  {
    question: "What services does Bright Stack offer?",
    answer:
      "Custom web app development, mobile app development (iOS & Android), software consulting, and CMS/admin system development. All projects are built to specification — no templates, no off-the-shelf platforms.",
  },
  {
    question: "How does the payment process work?",
    answer:
      "Milestone-based payment structure. A deposit is required before work begins, with subsequent payments due when agreed milestones are reviewed and approved. Payments are processed via Paystack or bank EFT. Full details are in our Terms & Conditions and Refund Policy.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Timelines vary. A simple web application may take 2–4 weeks; a full-featured platform typically takes 6–16 weeks. We include a detailed timeline in every proposal.",
  },
  {
    question: "Do you work with clients outside South Africa?",
    answer:
      "Yes, across Africa and internationally. All communication is via email and video call. Contracts and pricing are in ZAR unless otherwise agreed.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "Primarily React and Next.js for web, React Native for mobile, Node.js and Supabase for backends, and PostgreSQL for data. We choose the best stack per project.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Email zanru2@icloud.com with a description of your project. We respond within 24 hours to arrange a discovery call and draft a proposal.",
  },
  {
    question: "What happens if I need changes after delivery?",
    answer:
      "Minor revisions within the agreed scope are included. Changes outside the original scope are handled as a separate agreement or retainer.",
  },
  {
    question: "Are my consumer rights protected?",
    answer:
      "Yes. Bright Stack operates in full compliance with the South African Consumer Protection Act (CPA). Our Refund Policy sets out your rights clearly.",
  },
];

export default function FaqPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-white border-b border-slate-200 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge>Common questions</Badge>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 tracking-tight">
            Frequently asked questions
          </h1>
          <p className="mt-4 text-slate-500 leading-relaxed">
            Everything you need to know before starting a project with us.
          </p>
        </div>
      </section>

      {/* Accordion */}
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* Still have questions card */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-slate-900 font-display">
                Still have questions?
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                We&apos;re happy to answer anything before you commit to a
                project.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
