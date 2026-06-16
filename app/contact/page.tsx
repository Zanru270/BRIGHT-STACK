import type { Metadata } from "next";
import Badge from "../components/Badge";

export const metadata: Metadata = {
	title: "Contact",
	description:
		"Get in touch with Bright Stack to discuss your project. We respond within 24 hours and send a detailed proposal within 2–3 business days.",
};

const engagementSteps = [
	"Email us with a brief description of your project",
	"We schedule a 30-minute discovery call",
	"We send a detailed proposal within 2–3 business days",
	"You approve the scope and we get started",
];

const emailChecklist = [
	"A short description of what you need built",
	"Your target timeline",
	"Your rough budget range (optional)",
	"Any technical requirements or constraints",
	"Whether you have existing designs or a brief",
];

export default function ContactPage() {
	return (
		<main>
			{/* Header */}
			<section className="bg-white border-b border-slate-200 py-16 sm:py-20">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<Badge>Get in touch</Badge>
					<h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 tracking-tight">
						Let&apos;s talk about your project
					</h1>
					<p className="mt-4 text-slate-500 max-w-xl leading-relaxed">
						Tell us what you&apos;re building. We respond within 24 hours and
						have a proposal ready within 2-3 business days.
					</p>
				</div>
			</section>

			{/* Content */}
			<section className="py-16 sm:py-20">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid md:grid-cols-2 gap-10 lg:gap-16">
						{/* Left: contact details + engagement steps */}
						<div>
							<div className="mb-8">
								<p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
									Contact details
								</p>
								<div className="space-y-3">
									<div className="flex items-center gap-3">
										<div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
											<svg
												width="14"
												height="14"
												viewBox="0 0 20 20"
												fill="none"
												stroke="#2563EB"
												strokeWidth="1.75"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
												<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
											</svg>
										</div>
										<a
											href="mailto:zanru2@icloud.com"
											className="text-slate-700 hover:text-blue-600 transition-colors font-medium text-sm"
										>
											zanru2@icloud.com
										</a>
									</div>
									<div className="flex items-center gap-3">
										<div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
											<svg
												width="14"
												height="14"
												viewBox="0 0 20 20"
												fill="none"
												stroke="#2563EB"
												strokeWidth="1.75"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9z" />
												<circle cx="10" cy="9" r="2" />
											</svg>
										</div>
										<span className="text-sm text-slate-700">
											Johannesburg, Gauteng, South Africa
										</span>
									</div>
								</div>
							</div>

							<div>
								<p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
									How to engage with us
								</p>
								<ol className="space-y-4">
									{engagementSteps.map((step, i) => (
										<li key={i} className="flex items-start gap-3">
											<span className="shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center mt-0.5">
												{i + 1}
											</span>
											<p className="text-sm text-slate-600 leading-relaxed">
												{step}
											</p>
										</li>
									))}
								</ol>
							</div>
						</div>

						{/* Right: send a message / email guide */}
						<div>
							<div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8">
								<h2 className="font-bold text-slate-900 font-display text-lg mb-1">
									Send us a message
								</h2>
								<p className="text-sm text-slate-500 mb-6">
									For the fastest response, send an email directly. Here&apos;s
									what to include:
								</p>

								<ul className="space-y-3 mb-8">
									{emailChecklist.map((item, i) => (
										<li key={i} className="flex items-start gap-2.5">
											<svg
												className="shrink-0 mt-0.5 text-blue-600"
												width="16"
												height="16"
												viewBox="0 0 16 16"
												fill="none"
											>
												<circle cx="8" cy="8" r="8" fill="#EFF6FF" />
												<path
													d="M4.5 8l2.5 2.5 4.5-5"
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

								<a
									href="mailto:zanru2@icloud.com"
									className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
								>
									<svg
										width="16"
										height="16"
										viewBox="0 0 20 20"
										fill="none"
										stroke="currentColor"
										strokeWidth="1.75"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
										<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
									</svg>
									Email zanru2@icloud.com
								</a>

								<p className="mt-4 text-xs text-center text-slate-400">
									We acknowledge all enquiries within 24 hours
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
