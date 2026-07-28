import { NextResponse } from "next/server";
import { Resend } from "resend";
import { FormData } from "@/types/global-types";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

function isValidEmail(email: string): boolean {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
	return /^\+?[0-9\s-]{7,15}$/.test(phone);
}

export async function POST(request: Request) {
	let body: FormData;

	try {
		body = await request.json();
	} catch {
		return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
	}

	// Server-side validation — never trust the client alone.
	const errors: Record<string, string> = {};

	if (!body.name?.trim()) errors.name = "Name is required.";
	if (!body.email?.trim() || !isValidEmail(body.email)) errors.email = "Valid email is required.";
	if (!body.phoneNumber?.trim() || !isValidPhone(body.phoneNumber)) errors.phoneNumber = "Valid phone number is required.";
	if (!body.pdpa) errors.pdpa = "PDPA consent is required.";

	(body.radioFields ?? []).forEach((field) => {
		const answered = (body.selectedRadioboxes ?? []).some((r) => r.label === field.label);
		if (!answered) errors[field.label] = "Please select an option.";
	});

	if (Object.keys(errors).length > 0) {
		return NextResponse.json({ error: "Validation failed.", fieldErrors: errors }, { status: 422 });
	}

	const answersHtml = (body.radioFields ?? [])
		.map((field, i) => {
			const answer = (body.selectedRadioboxes ?? []).find((r) => r.label === field.label);
			return `<p><strong>${i + 1}. ${field.label}</strong>: ${answer?.value ?? "—"}</p>`;
		})
		.join("");

	try {
		const { error } = await resend.emails.send({
			from: "Contact Form <onboarding@resend.dev>", // swap to your verified domain later
			to: process.env.NEXT_PUBLIC_CONTACT_EMAIL_TO!,
			replyTo: body.email,
			subject: `New submission: ${body.title || "Contact Form"}`,
			html: `
				<h2>${body.title || "New Contact Form Submission"}</h2>
				<p><strong>Name:</strong> ${body.name}</p>
				<p><strong>Email:</strong> ${body.email}</p>
				<p><strong>Phone:</strong> ${body.phoneNumber}</p>
				${answersHtml}
				<p><strong>PDPA consent:</strong> ${body.pdpa ? "Yes" : "No"}</p>
			`,
		});

		if (error) {
			console.error("Resend error:", error);
			return NextResponse.json({ error: "Failed to send email." }, { status: 502 });
		}

		return NextResponse.json({ success: true }, { status: 200 });
	} catch (err) {
		console.error("Contact form submission error:", err);
		return NextResponse.json({ error: "Unexpected server error." }, { status: 500 });
	}
}