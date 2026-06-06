"use client";

import { useEffect, useState } from "react";
import { useFormStore } from "@/store";
import clsx from "clsx";

export default function ContactForm() {
	const { isFormOpen, formDetails, closeForm } = useFormStore();

	const [formData, setFormData] = useState({
		title: "",
		description: "",
		name: "",
		email: "",
		phoneNumber: "",
		pdpa: false,
	});

	useEffect(() => {
		if (isFormOpen) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setFormData({
				title: formDetails.title,
				description: formDetails.description,
				name: formDetails.name,
				email: formDetails.email,
				phoneNumber: formDetails.phoneNumber,
				pdpa: formDetails.pdpa,
			});
		} else {
			setFormData({
				title: "",
				description: "",
				name: "",
				email: "",
				phoneNumber: "",
				pdpa: false,
			});
		}
	}, [isFormOpen]);

	return (
		<div
			className={clsx(
				"fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm duration-300",
				isFormOpen ? "pointer-events-auto z-100 delay-300" : "pointer-events-none opacity-0",
			)}
		>
			<div
				className={clsx(
					"bg-[#e7e4d5] w-[90%] max-w-lg rounded-2xl p-8 shadow-2xl relative duration-300",
					isFormOpen ? "translate-y-0 delay-300" : "translate-y-[20%] opacity-0",
				)}
				onClick={(e) => e.stopPropagation()}
			>
				<button
					onClick={closeForm}
					className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl leading-none"
				>
					&times;
				</button>

				<form className="space-y-5">
					<div>
						<h2>{formData.title}</h2>
						<p>{formData.description}</p>
					</div>
					<div>
						<label className="block text-sm font-medium mb-1">Name</label>
						<input
							type="text"
							value={formData.name}
							onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
							className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Your name"
						/>
					</div>

					<button
						type="submit"
						className="w-full bg-black text-white py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors"
					>
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
}
