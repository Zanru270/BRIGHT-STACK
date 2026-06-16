import Badge from "./Badge";

interface LegalSection {
  title: string;
  content: string;
}

interface LegalPageLayoutProps {
  badge: string;
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}

export default function LegalPageLayout({
  badge,
  title,
  lastUpdated,
  intro,
  sections,
}: LegalPageLayoutProps) {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      {/* Header */}
      <div className="mb-10">
        <Badge>{badge}</Badge>
        <h1 className="mt-4 text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
          {title}
        </h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {lastUpdated}</p>
      </div>

      {/* Intro */}
      <div className="mb-10 p-5 bg-blue-50 border border-blue-100 rounded-xl text-sm text-slate-700 leading-relaxed">
        {intro}
      </div>

      {/* Sections */}
      <div className="space-y-8">
        {sections.map((section, i) => (
          <div
            key={i}
            className="bg-white border border-slate-200 rounded-xl p-6"
          >
            <h2 className="text-base font-semibold text-slate-900 mb-2 font-display">
              {i + 1}. {section.title}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
