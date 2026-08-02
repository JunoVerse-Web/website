"use client";

import { useState } from "react";
import { useFormStore } from "@/store";
import clsx from "clsx";
import { FormData, RadioFieldType } from "@/types/global-types";
import RadioButton from "./form/radio-button";
import Image from "next/image";
import MailImage from "../../../../public/general/mail-image.webp";
import BlackArrowRight from "../../icons/black-arrow-right";

const EMPTYFORM: FormData = {
	formTitle: "",
	title: "",
	description: "",
	radioFields: [],
	selectedRadioboxes: [],
	name: "",
	email: "",
	phoneNumber: "",
	pdpa: false,
};

// Merge formDetails over EMPTYFORM, but never let an `undefined` key
// overwrite a defined default — that's what flips inputs from
// controlled to uncontrolled.
function mergeFormData(base: FormData, incoming: Partial<FormData>): FormData {
	const merged = { ...base };
	(Object.keys(incoming) as (keyof FormData)[]).forEach((key) => {
		if (incoming[key] !== undefined) {
			(merged[key] as FormData[keyof FormData]) = incoming[key]!;
		}
	});
	return merged;
}

export default function ContactForm() {
	const { isFormOpen, formDetails, closeForm } = useFormStore();
	const [formData, setFormData] = useState<FormData>(EMPTYFORM);
	const [errors, setErrors] = useState<Record<string, string>>({});
	const [submitting, setSubmitting] = useState(false);
	const [formSubmitted, setFormSubmitted] = useState(false);

	const errorClass = "text-red-600 m-0!";

	// Tracks the isFormOpen value we last synced formData/errors for.
	const [syncedOpenState, setSyncedOpenState] = useState(isFormOpen);

	// Adjusting state during render (React-recommended pattern) instead of
	// useEffect — avoids the extra "render with stale data, then effect,
	// then re-render" cascade. This only runs when isFormOpen actually
	// changes, so it doesn't loop.
	if (isFormOpen !== syncedOpenState) {
		setSyncedOpenState(isFormOpen);
		setFormData(isFormOpen ? mergeFormData(EMPTYFORM, formDetails) : EMPTYFORM);
		setErrors({});
	}

	// Replace any existing selection for the same question (matched by
	// question label), not just add — this is what was broken before.
	function updateFormRadioState(field: RadioFieldType, radioItem: RadioFieldType["radioBoxes"][number]) {
		setFormData((prev) => ({
			...prev,
			selectedRadioboxes: [...prev.selectedRadioboxes.filter((item) => item.label !== field.label), { ...radioItem, label: field.label }],
		}));
	}

	function validate(): boolean {
		const next: Record<string, string> = {};

		formData.radioFields.forEach((field) => {
			const answered = formData.selectedRadioboxes.some((r) => r.label === field.label);
			if (!answered) next[field.label] = "Please select an option.";
		});

		if (!formData.name.trim()) next.name = "Name is required.";
		if (!formData.email.trim()) {
			next.email = "Email is required.";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			next.email = "Enter a valid email.";
		}
		if (!formData.phoneNumber.trim()) {
			next.phoneNumber = "Phone number is required.";
		} else if (!/^\+?[0-9\s-]{7,15}$/.test(formData.phoneNumber)) {
			next.phoneNumber = "Enter a valid phone number.";
		}
		if (!formData.pdpa) next.pdpa = "You must agree to the PDPA statement.";

		setErrors(next);
		return Object.keys(next).length === 0;
	}

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		if (!validate()) return;

		setSubmitting(true);
		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			const data = await res.json();

			if (!res.ok) {
				setErrors((prev) => ({
					...prev,
					...(data.fieldErrors ?? {}),
					form: data.error ?? "Something went wrong. Please try again.",
				}));
				return;
			}

			setFormSubmitted(true);
		} catch (err) {
			setErrors((prev) => ({ ...prev, form: "Something went wrong. Please try again." }));
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<div
			className={clsx(
				"fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm duration-300",
				isFormOpen ? "pointer-events-auto z-100 delay-300" : "pointer-events-none opacity-0",
			)}
		>
			<div
				className={clsx(
					"rounded-2xl px-[7.292vw] py-[40px] md:py-[3.25vw] shadow-2xl relative duration-300 w-[95vw] md:w-[80vw] max-h-[90vh]",
					isFormOpen ? "translate-y-0 delay-300" : "translate-y-[20%] opacity-0",
					formSubmitted ? "bg-yellow min-h-[70vh] flex flex-col items-center justify-center" : "bg-[#e7e4d5] overflow-y-auto",
				)}
				onClick={(e) => e.stopPropagation()}
			>
				<button
					onClick={closeForm}
					aria-label="Close form"
					className="absolute top-[4%] right-[3%] min-w-10 w-[2.6vw] aspect-square text-gray-500 hover:text-gray-800  leading-none cursor-pointer"
				>
					<div className="relative w-full h-full">
						<BlackArrowRight className="absolute inset-0 w-full h-full object-contain -rotate-45" />
						<BlackArrowRight className="absolute inset-0 w-full h-full object-contain -rotate-135" />
					</div>
				</button>

				<form
					onSubmit={handleSubmit}
					noValidate
					className={clsx("space-y-5", formSubmitted ? "opacity-0 scale-50 pointer-events-none h-0 duration-300" : "opacity-100")}
				>
					<div className="text-center mb-10">
						<h2 className="leading-[1]! mb-[1rem]! lg:mb-[1.48vw]! max-[480px]:max-w-[70%] mx-auto">{formData.title}</h2>
						<p>{formData.description}</p>
					</div>

					<div className="flex flex-col lg:flex-row gap-6">
						<div className="flex flex-col gap-4 flex-1">
							{formData.radioFields.map((field, index) => (
								<div
									key={`${field.label ?? "field"}-${index}`}
									className="relative grid gap-1"
								>
									<label className="block text-md font-bold">
										{index + 1}. {field.label}
									</label>

									<div className="flex flex-col gap-1">
										{field.radioBoxes.map((radio, radioIndex) => (
											<div
												key={`${radio.value ?? "radio"}-${radioIndex}`}
												className="flex items-center gap-2"
											>
												<RadioButton
													name={field.label}
													value={radio.value}
													checked={formData.selectedRadioboxes.some((r) => r.label === field.label && r.value === radio.value)}
													onClickFunction={() => updateFormRadioState(field, radio)}
												/>
											</div>
										))}
									</div>
									{errors[field.label] && (
										<span className={clsx(errorClass, "error-text absolute bottom-0.5 left-0 !ml-[5%]")}>{errors[field.label]}</span>
									)}
								</div>
							))}
						</div>

						{/* General Details */}
						<div className="flex flex-col flex-1 justify-between">
							<div className="flex flex-col flex-1 ">
								<div className="relative flex flex-col w-full gap-4">
									<input
										type="text"
										placeholder="Name"
										className="input"
										required
										value={formData.name ?? ""}
										onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
									/>
									{errors.name && (
										<span className={clsx(errorClass, "error-text absolute bottom-0.5 left-0 !ml-[5%]")}>{errors.name}</span>
									)}
								</div>

								<div className="relative flex flex-col w-full gap-4">
									<input
										type="email"
										placeholder="Email"
										className="input"
										required
										value={formData.email ?? ""}
										onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
									/>
									{errors.email && (
										<span className={clsx(errorClass, "error-text absolute bottom-0.5 left-0 !ml-[5%]")}>{errors.email}</span>
									)}
								</div>

								<div className="relative flex flex-col w-full gap-4">
									<input
										type="tel"
										placeholder="Phone Number"
										className="input"
										required
										pattern="^\+?[0-9\s-]{7,15}$"
										value={formData.phoneNumber ?? ""}
										onChange={(e) => setFormData((prev) => ({ ...prev, phoneNumber: e.target.value }))}
									/>
									{errors.phoneNumber && (
										<span className={clsx(errorClass, "error-text absolute bottom-0.5 left-0 !ml-[5%]")}>{errors.phoneNumber}</span>
									)}
								</div>

								<div className={clsx(`relative flex flex-col w-full gap-4`, errors.phoneNumber ? "mt-6" : "")}>
									<label
										htmlFor="pdpa"
										className="flex items-start gap-1 md:gap-2 text-sm"
									>
										<input
											type="checkbox"
											id="pdpa"
											name="pdpa"
											required
											checked={formData.pdpa ?? false}
											onChange={() => setFormData((prev) => ({ ...prev, pdpa: !prev.pdpa }))}
											className="mt-[3px]"
										/>
										<span className="m-0!">
											I agree to the collection and processing of my personal data in accordance with PDPA Malaysia
										</span>
									</label>
									{errors.pdpa && (
										<span className={clsx(errorClass, "error-text absolute bottom-0.5 left-0 !ml-[5%]")}>{errors.pdpa}</span>
									)}
								</div>

								{errors.form && <span className={clsx(errorClass, "error-text ")}>{errors.form}</span>}
							</div>
							<button
								type="submit"
								disabled={submitting}
								className="max-lg:mx-auto lg:ml-auto mt-6 w-fit bg-[#136cbc] cursor-pointer text-white rounded-xl font-medium hover:bg-gray-800 transition-colors disabled:opacity-50"
							>
								{submitting ? "Submitting..." : "Submit"}
							</button>
						</div>
					</div>
				</form>

				{/* Form Submitted */}
				<div
					className={clsx("text-center", formSubmitted ? "opacity-100 scale-100 duration-300 delay-200" : "absolute inset-0 pointer-events-none scale-50 opacity-0")}
					data-container="success-container"
				>
					<Image
						src={MailImage}
						alt="Success Mail"
						width={400}
						height={250}
						className={clsx(`min-w-60 w-[23.96vw] h-full object-contain mx-auto mb-2rem md:mb-[1.88vw]`)}
					/>
					<h2 className="text-2xl">Received. The thinking starts now.</h2>
					<p className="md:max-w-[65%] mx-auto">
						We read every brief ourselves. You&apos;ll hear from a human within 48 hours with a point of view, not a calendar link.
					</p>
				</div>
			</div>
		</div>
	);
}
