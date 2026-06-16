import type { Metadata } from "next";
import LegalPageLayout from "../components/LegalPageLayout";

export const metadata: Metadata = {
	title: "Refund & Cancellation Policy",
	description:
		"Refund and Cancellation Policy for Bright Stack — milestone payment refunds, cancellation terms, and consumer rights under the South African Consumer Protection Act.",
};

const sections = [
	{
		title: "Nature of Services",
		content:
			"Bright Stack provides custom software development services. Because all deliverables are bespoke, standard product return policies do not apply. This policy establishes transparent terms governing refunds and cancellations.",
	},
	{
		title: "Payment Structure",
		content:
			"Deposit (typically 50%) due before work commences; milestone payments due upon review and approval of each stage; final payment due prior to delivery of final files and handover.",
	},
	{
		title: "Deposit Policy",
		content:
			"The upfront deposit is non-refundable once work has commenced, as it covers initial planning, architecture, and resource allocation. If a project is cancelled before any work has commenced, the full deposit is refunded.",
	},
	{
		title: "Milestone Payment Refunds",
		content:
			"Refunds may apply if Bright Stack fails to deliver a milestone within the agreed timeline without prior communication, or if a deliverable materially fails to meet the agreed specifications and the defect cannot reasonably be remedied. Requests must be in writing within 14 calendar days of the relevant delivery.",
	},
	{
		title: "Client-Initiated Cancellation",
		content:
			"The Client is liable for all work completed to the date of written cancellation. Bright Stack delivers a cancellation statement within 5 business days. Any overpayment is refunded within 10 business days. The deposit is non-refundable after commencement.",
	},
	{
		title: "Supplier-Initiated Cancellation",
		content:
			"If Bright Stack cancels without cause, all amounts paid are refunded in full within 10 business days, and all completed work is delivered.",
	},
	{
		title: "Dispute Resolution",
		content:
			"Both parties first attempt good-faith resolution. If unresolved within 14 days, the matter may be escalated to mediation or the applicable consumer tribunal under South African law.",
	},
	{
		title: "Consumer Protection Rights",
		content:
			"Nothing in this Policy limits rights under the Consumer Protection Act 68 of 2008, including Section 17 (right to cancel a fixed-term agreement) and Section 56 (implied warranty of quality).",
	},
	{
		title: "Chargebacks",
		content:
			"If a Client initiates a chargeback without first attempting resolution with Bright Stack, we reserve the right to suspend active work until resolved. We cooperate fully with the payment provider's dispute process.",
	},
	{
		title: "How to Request a Refund",
		content:
			"Send a written request to zanru2@icloud.com including your name, project reference, the payment in question, and reason. We acknowledge within 2 business days and resolve valid requests within 10 business days.",
	},
];

export default function RefundPage() {
	return (
		<LegalPageLayout
			badge="Legal · CPA Compliant"
			title="Refund & Cancellation Policy"
			lastUpdated="June 2025"
			intro="This Refund and Cancellation Policy applies to all software development services provided by Bright Stack, operated by Zanru Kruger, Kempton Park, South Africa, and is compliant with the Consumer Protection Act 68 of 2008 (CPA)."
			sections={sections}
		/>
	);
}
