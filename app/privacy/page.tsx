import type { Metadata } from "next";
import LegalPageLayout from "../components/LegalPageLayout";

export const metadata: Metadata = {
	title: "Privacy Policy",
	description:
		"Privacy Policy for Bright Stack — how we collect, use, and protect your personal information in compliance with POPIA (Protection of Personal Information Act).",
};

const sections = [
	{
		title: "Responsible Party",
		content:
			"Zanru Kruger, trading as Bright Stack, Kempton Park, Gauteng, South Africa. Contact: zanru2@icloud.com",
	},
	{
		title: "Information We Collect",
		content:
			"Identity (name, surname); contact (email, phone); business (company name, project requirements); payment (processed by Paystack — we do not store card details); technical (IP address, browser type for analytics); project data (files and content shared for delivery).",
	},
	{
		title: "Why We Collect Your Information",
		content:
			"To respond to enquiries and provide quotes; to enter into and fulfil service agreements; to process payments and issue invoices; to communicate project updates; to comply with South African legal and tax obligations.",
	},
	{
		title: "Sharing of Personal Information",
		content:
			"We do not sell or rent your personal information. Limited information may be shared with Paystack (payment processing), accounting providers (invoicing/tax), and authorities where required by South African law.",
	},
	{
		title: "Data Security",
		content:
			"We implement reasonable technical and organisational measures, including HTTPS transmission, access controls, and regular security reviews. No system can guarantee absolute security.",
	},
	{
		title: "Retention",
		content:
			"Financial records are retained for a minimum of 5 years per South African tax law. Project data is retained for 12 months after completion unless earlier deletion is requested.",
	},
	{
		title: "Your Rights Under POPIA",
		content:
			"Request access; request correction; request deletion (subject to legal retention); object to processing; and lodge a complaint with the Information Regulator at www.justice.gov.za/inforeg. To exercise any right: zanru2@icloud.com",
	},
	{
		title: "Cookies",
		content:
			"Our website may use basic analytics cookies. You can disable cookies in your browser settings. We do not use advertising or behavioural tracking cookies.",
	},
	{
		title: "Changes",
		content:
			"We may update this Policy from time to time, published with a revised effective date.",
	},
	{
		title: "Contact",
		content: "For privacy queries: zanru2@icloud.com",
	},
];

export default function PrivacyPage() {
	return (
		<LegalPageLayout
			badge="Legal · POPIA Compliant"
			title="Privacy Policy"
			lastUpdated="June 2025"
			intro="Bright Stack, operated by Zanru Kruger and based in Kempton Park, South Africa, is committed to protecting your personal information in compliance with the Protection of Personal Information Act 4 of 2013 (POPIA)."
			sections={sections}
		/>
	);
}
