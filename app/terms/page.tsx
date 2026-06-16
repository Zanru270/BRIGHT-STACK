import type { Metadata } from "next";
import LegalPageLayout from "../components/LegalPageLayout";

export const metadata: Metadata = {
	title: "Terms & Conditions",
	description:
		"Terms and Conditions governing all software development services provided by Bright Stack, operated by Zanru Kruger, Kempton Park, South Africa.",
};

const sections = [
	{
		title: "Services",
		content:
			"Bright Stack provides custom software development services including web application development, mobile application development, software consulting, and content management system design. The scope for each engagement is defined in a separate Project Proposal or Service Agreement agreed by both parties.",
	},
	{
		title: "Project Scope & Change Requests",
		content:
			"All work is carried out within the scope defined in the agreed Project Proposal. Requests for changes outside the original scope (new features, significant design changes, additional integrations) will be assessed and may require a written amendment with revised pricing and timelines.",
	},
	{
		title: "Payment Terms",
		content:
			"All projects use milestone-based payments as outlined in the Project Proposal. An upfront deposit (typically 50%) is required before work commences. Subsequent milestone payments become due upon the Client's review and approval of each deliverable. Payments are processed via Paystack (card or instant EFT) or bank EFT, in ZAR unless otherwise specified. Late payments (beyond 7 days of invoice date) may attract interest at 2% per month, and Bright Stack may pause work until the account is settled.",
	},
	{
		title: "Intellectual Property",
		content:
			"Upon full payment of all amounts due, the Client receives full ownership of all custom code, designs, and digital assets created for that project. Third-party libraries and open-source components remain subject to their original licences, disclosed in handover documentation.",
	},
	{
		title: "Client Responsibilities",
		content:
			"The Client agrees to provide timely feedback at each milestone (within 5 business days of delivery), supply all required content and credentials, ensure provided materials do not infringe third-party IP rights, and designate a single point of contact. Delays caused by the Client may revise timelines.",
	},
	{
		title: "Confidentiality",
		content:
			"Both parties agree to keep all proprietary information shared during the engagement confidential and not disclose it to third parties without prior written consent, except as required by law. This obligation survives termination.",
	},
	{
		title: "Limitation of Liability",
		content:
			"Bright Stack's total liability shall not exceed the total fees paid by the Client for the specific project in question. Bright Stack is not liable for indirect, consequential, or special damages, including lost revenue, lost data, or business interruption.",
	},
	{
		title: "Termination",
		content:
			"Either party may terminate an engagement by written notice. Upon termination, the Client is liable for all work completed to that date. Bright Stack will deliver all completed work and assets. Upfront deposits are non-refundable once work has commenced, except where Bright Stack terminates without cause.",
	},
	{
		title: "Warranties",
		content:
			"Bright Stack warrants that work will be performed with reasonable skill and care. A 30-day warranty period for bug fixes is included after delivery. We do not warrant that software will be entirely error-free or uninterrupted.",
	},
	{
		title: "Governing Law & Dispute Resolution",
		content:
			"These Terms are governed by the laws of the Republic of South Africa. Disputes will first be addressed through good-faith negotiation, and if unresolved within 30 days, submitted to mediation or the appropriate jurisdiction within Gauteng. Nothing limits a Consumer's rights under the Consumer Protection Act 68 of 2008.",
	},
	{
		title: "Contact",
		content: "For questions regarding these Terms: zanru2@icloud.com",
	},
];

export default function TermsPage() {
	return (
		<LegalPageLayout
			badge="Legal"
			title="Terms & Conditions"
			lastUpdated="June 2025"
			intro={`These Terms and Conditions ("Terms") govern all services provided by Bright Stack, a software development studio based in Kempton Park, South Africa, operated by Zanru Kruger trading as Bright Stack. By engaging our services, you ("the Client") agree to be bound by these Terms.`}
			sections={sections}
		/>
	);
}
