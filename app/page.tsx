import type { Metadata } from "next";
import Link from "next/link";
import Badge from "./components/Badge";

export const metadata: Metadata = {
	title: "Bright Stack — Software Development Studio",
	description:
		"Johannesburg-based software development studio building custom web apps, mobile apps, and digital platforms for businesses that want to scale.",
};

const quickFacts = [
	{
		label: "Custom builds",
		detail: "Every project tailored to your requirements",
	},
	{ label: "Full-stack", detail: "Web & mobile, front to back" },
	{ label: "SA-based", detail: "Kempton Park, South Africa" },
	{ label: "24hr response", detail: "All enquiries acknowledged within a day" },
];

const services = [
	{
		title: "Web Application Development",
		description:
			"Full-stack web applications from the ground up: customer-facing portals, internal tools, SaaS products, and e-commerce platforms.",
		popular: true,
	},
	{
		title: "Mobile App Development",
		description:
			"Cross-platform iOS and Android apps built with React Native — custom UI, push notifications, and App Store submission assistance.",
		popular: false,
	},
	{
		title: "Software Consulting",
		description:
			"Architecture reviews, performance assessments, code audits, and migration planning — structured advice that moves your project forward.",
		popular: false,
	},
	{
		title: "CMS & Admin System Development",
		description:
			"Custom content management and admin dashboards matched to your data model — role-based access, real-time tables, and bulk exports.",
		popular: false,
	},
];

const whyPoints = [
	{
		title: "Scope-first approach",
		body: "We agree on a detailed scope before any code is written. You always know what you're getting and for how much.",
	},
	{
		title: "You own what we build",
		body: "Full IP transfer on project completion. Code, designs, and assets are all yours — no lock-in, no ongoing licence fees.",
	},
	{
		title: "Clear communication",
		body: "Regular milestone check-ins and progress updates. You're never left wondering what's happening with your project.",
	},
];

export default function Home() {
	return (
		<>
			{/* ── Hero ── */}
			<section className="relative bg-white border-b border-slate-200">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
					<div className="max-w-3xl">
						<Badge>Software Development Studio</Badge>
						<h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-slate-900 tracking-tight leading-tight">
							We build software that{" "}
							<span className="text-blue-600">scales with your business.</span>
						</h1>
						<p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-2xl">
							Bright Stack is a Kempton Park-based software development studio.
							We design and build custom web applications, mobile apps, and
							digital platforms for businesses across South Africa and beyond.
						</p>
						<div className="mt-8 flex flex-wrap gap-3">
							<Link
								href="/contact"
								className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
							>
								Start a project
							</Link>
							<Link
								href="/services"
								className="px-6 py-3 bg-white text-slate-900 font-medium rounded-lg border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-colors"
							>
								View services
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* ── Quick Facts Strip ── */}
			<section className="bg-slate-900 text-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
						{quickFacts.map(({ label, detail }) => (
							<div key={label} className="py-2">
								<p className="text-sm font-semibold text-blue-400 font-display">
									{label}
								</p>
								<p className="mt-1 text-sm text-slate-400">{detail}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── Services Preview ── */}
			<section className="py-20 sm:py-24">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="mb-12 text-center">
						<Badge>What we do</Badge>
						<h2 className="mt-4 text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
							Services built around your goals
						</h2>
						<p className="mt-3 text-slate-500 max-w-xl mx-auto">
							Every engagement starts with understanding your requirements —
							then we pick the right stack and scope to deliver it.
						</p>
					</div>

					<div className="grid sm:grid-cols-2 gap-5">
						{services.map(({ title, description, popular }) => (
							<div
								key={title}
								className="relative bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
							>
								{popular && (
									<span className="absolute top-4 right-4 text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 rounded-full px-2.5 py-0.5">
										Most popular
									</span>
								)}
								<h3 className="text-base font-semibold text-slate-900 font-display pr-24">
									{title}
								</h3>
								<p className="mt-2 text-sm text-slate-500 leading-relaxed">
									{description}
								</p>
							</div>
						))}
					</div>

					<div className="mt-8 text-center">
						<Link
							href="/services"
							className="inline-flex items-center gap-1.5 text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors"
						>
							See full service details
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M1 8a.5.5 0 01.5-.5h10.793L9.146 4.354a.5.5 0 11.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L12.293 8.5H1.5A.5.5 0 011 8z"
								/>
							</svg>
						</Link>
					</div>
				</div>
			</section>

			{/* ── Why Bright Stack ── */}
			<section className="py-20 sm:py-24 bg-white border-y border-slate-200">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="mb-12 text-center">
						<Badge>Why us</Badge>
						<h2 className="mt-4 text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
							How we&apos;re different
						</h2>
					</div>

					<div className="grid sm:grid-cols-3 gap-6">
						{whyPoints.map(({ title, body }) => (
							<div
								key={title}
								className="p-6 bg-surface rounded-xl border border-slate-200"
							>
								<div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
									<svg
										width="18"
										height="18"
										viewBox="0 0 20 20"
										fill="none"
										stroke="#2563EB"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M5 10l4 4L15 6" />
									</svg>
								</div>
								<h3 className="font-semibold text-slate-900 font-display mb-2">
									{title}
								</h3>
								<p className="text-sm text-slate-500 leading-relaxed">{body}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── Closing CTA ── */}
			<section className="py-20 sm:py-24">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<Badge>Ready to build?</Badge>
					<h2 className="mt-4 text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
						Let&apos;s turn your idea into a product
					</h2>
					<p className="mt-4 text-slate-500 max-w-lg mx-auto">
						Email us a brief description of what you need. We respond within 24
						hours and send a detailed proposal within 2–3 business days.
					</p>
					<div className="mt-8 flex flex-wrap justify-center gap-3">
						<Link
							href="/contact"
							className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
						>
							Get a quote
						</Link>
						<Link
							href="/faq"
							className="px-6 py-3 text-slate-700 font-medium rounded-lg border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-colors"
						>
							Read the FAQ
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
