import type { Metadata } from "next";
import Link from "next/link";
import Badge from "../components/Badge";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom web application development, mobile app development, software consulting, and CMS/admin system development — all scoped and priced upfront.",
};

const services = [
  {
    title: "Web Application Development",
    description:
      "Full-stack web applications from the ground up: customer-facing portals, internal business tools, SaaS products, and e-commerce platforms. We handle everything from architecture to deployment.",
    includes: [
      "React & Next.js frontends",
      "Serverless and REST backends",
      "Database design (PostgreSQL, Supabase)",
      "Authentication & authorisation",
      "Third-party API integrations (payments, maps, email)",
      "Admin dashboards and CMS",
    ],
    timeline: "Typical project length: 2–12 weeks",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform iOS and Android apps built with React Native. One codebase, two stores — without compromising on performance or native feel.",
    includes: [
      "iOS & Android from a single codebase",
      "Custom UI and animations",
      "Push notifications and background services",
      "Device hardware integration (camera, GPS, biometrics)",
      "App Store & Play Store submission assistance",
      "Ongoing maintenance packages",
    ],
    timeline: "Typical project length: 4–16 weeks",
  },
  {
    title: "Software Consulting",
    description:
      "Structured consulting to audit, advise, and plan. Whether you need a second opinion on your architecture or a full technical due-diligence report, we deliver clear, actionable findings.",
    includes: [
      "Architecture and tech-stack reviews",
      "Performance and scalability assessments",
      "Code and security audits",
      "Technical due diligence",
      "Migration planning (legacy to cloud)",
      "Documentation and developer onboarding guides",
    ],
    timeline: "Engagements hourly or fixed-price",
  },
  {
    title: "CMS & Admin System Development",
    description:
      "Custom content management and admin dashboards matched to your data model and workflows. No generic platforms — built exactly for how your team works.",
    includes: [
      "Role-based access control",
      "Real-time data tables and filters",
      "Image and file management",
      "Audit logs and change history",
      "Bulk operations and CSV/PDF exports",
      "Mobile-responsive admin interfaces",
    ],
    timeline: "Typically delivered as part of a larger engagement",
  },
];

const steps = [
  {
    number: "01",
    title: "Discovery",
    body: "We learn about your goals and requirements through a detailed briefing session.",
  },
  {
    number: "02",
    title: "Proposal",
    body: "You receive a formal scope, timeline, milestones, and pricing. Nothing starts without your sign-off.",
  },
  {
    number: "03",
    title: "Build",
    body: "Development happens in milestones. You review and give feedback before we proceed to the next stage.",
  },
  {
    number: "04",
    title: "Deliver",
    body: "We launch, hand over all source code and credentials, and provide full documentation.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-white border-b border-slate-200 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge>What we offer</Badge>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 tracking-tight max-w-2xl">
            Services built around your goals
          </h1>
          <p className="mt-4 text-slate-500 max-w-xl leading-relaxed">
            Every project starts with a clear scope. We never write a line of
            code before you know exactly what you&apos;re getting and what
            it&apos;ll cost.
          </p>
        </div>
      </section>

      {/* Service blocks */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {services.map(({ title, description, includes, timeline }) => (
            <div
              key={title}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6 sm:p-8">
                <h2 className="text-xl font-bold font-display text-slate-900 mb-3">
                  {title}
                </h2>
                <p className="text-slate-500 leading-relaxed mb-6">
                  {description}
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
                      This service includes
                    </p>
                    <ul className="space-y-2">
                      {includes.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <svg
                            className="mt-0.5 shrink-0 text-blue-600"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <circle cx="7" cy="7" r="7" fill="#EFF6FF" />
                            <path
                              d="M4 7l2 2 4-4"
                              stroke="#2563EB"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-sm text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-end">
                    <div className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-600 w-full sm:w-auto">
                      <span className="font-medium text-slate-900">
                        Timeline:{" "}
                      </span>
                      {timeline}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="bg-white border-y border-slate-200 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <Badge>Our process</Badge>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
              How we work
            </h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto">
              A structured process that keeps you in control at every stage.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ number, title, body }) => (
              <div
                key={number}
                className="bg-surface rounded-xl border border-slate-200 p-6"
              >
                <span className="text-3xl font-bold font-display text-blue-100 select-none">
                  {number}
                </span>
                <h3 className="mt-3 font-semibold text-slate-900 font-display">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing note */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 sm:p-8 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="shrink-0 mt-0.5">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="text-blue-600"
                >
                  <circle cx="10" cy="10" r="10" fill="#DBEAFE" />
                  <path
                    d="M10 6v5M10 14v.5"
                    stroke="#2563EB"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 font-display mb-2">
                  Pricing
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  All projects are quoted individually based on scope,
                  complexity, and timeline. Payments are milestone-based,
                  processed via Paystack or EFT. Contact us at{" "}
                  <a
                    href="mailto:zanru2@icloud.com"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    zanru2@icloud.com
                  </a>{" "}
                  for a quote.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get a quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
