export default function Home() {
	return (
		<div className="flex flex-col min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
			<main className="flex flex-col flex-1 max-w-4xl mx-auto w-full px-8 py-24 sm:py-32">
				{/* Header / Navigation */}
				<header className="w-full flex justify-between items-center mb-24">
					<h1 className="text-2xl font-bold tracking-tighter uppercase">
						BrightStack
					</h1>
					<a
						href="mailto:zanru2@icloud.com"
						className="text-sm font-medium hover:text-zinc-500 transition-colors"
					>
						Contact Support
					</a>
				</header>

				{/* Hero Section */}
				<section className="mb-24 text-left">
					<h2 className="text-4xl sm:text-6xl font-semibold tracking-tight mb-6">
						Digital infrastructure for the modern built environment.
					</h2>
					<p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
						We architect and deploy bespoke software, property management
						platforms, and custom IoT integrations. From full-stack web
						applications to real-time hardware monitoring.
					</p>
				</section>

				{/* Services Section (Crucial for Paystack Approval) */}
				<section className="grid sm:grid-cols-2 gap-12 mb-24">
					<div>
						<h3 className="text-xl font-medium mb-3">Software Architecture</h3>
						<p className="text-zinc-600 dark:text-zinc-400">
							End-to-end application development using modern frameworks like
							Next.js, React Native, and Supabase for scalable infrastructure.
						</p>
					</div>
					<div>
						<h3 className="text-xl font-medium mb-3">
							IoT & Hardware Integration
						</h3>
						<p className="text-zinc-600 dark:text-zinc-400">
							Custom microcontroller solutions and real-time telemetry systems
							for commercial monitoring and smart metering.
						</p>
					</div>
				</section>

				{/* Footer with Contact Info (Crucial for Paystack Approval) */}
				<footer className="mt-auto border-t border-zinc-200 dark:border-zinc-800 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm text-zinc-500">
					<p>© {new Date().getFullYear()} BrightStack. All rights reserved.</p>
					<div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
						<p>Email: zanru2@icloud.com</p>
						<p>Phone: +27 66 264 9219</p>
					</div>
				</footer>
			</main>
		</div>
	);
}
