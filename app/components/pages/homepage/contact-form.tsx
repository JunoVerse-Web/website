"use client";

import { useEffect, useState } from "react";
import { useFormStore } from "@/store";

export default function ContactForm() {
	const { isFormOpen, selectedCard, closeForm } = useFormStore();

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	// Initialize form when modal opens (avoids setState warning)
	useEffect(() => {
		if (isFormOpen && selectedCard?.title) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setFormData({
				name: selectedCard.title,
				email: "",
				message: "",
			});
		}
	}, [isFormOpen]); // ← Only depend on isFormOpen (removes the warning)

	// Reset form when modal closes
	useEffect(() => {
		if (!isFormOpen) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setFormData({
				name: "",
				email: "",
				message: "",
			});
		}
	}, [isFormOpen]);

    useEffect(() => {
        console.log('formData: ', formData);
    }, [formData])

	if (!isFormOpen) return null;

	return (
		<div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm">
			<div
				className="bg-white w-[90%] max-w-lg rounded-2xl p-8 shadow-2xl relative"
				onClick={(e) => e.stopPropagation()}
			>
				<button
					onClick={closeForm}
					className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl leading-none"
				>
					&times;
				</button>

				<h2 className="text-2xl font-semibold mb-6 text-center">{selectedCard?.title || "Contact Us"}</h2>

				<form className="space-y-5">
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

					<div>
						<label className="block text-sm font-medium mb-1">Email</label>
						<input
							type="email"
							value={formData.email}
							onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
							className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="your@email.com"
						/>
					</div>

					<div>
						<label className="block text-sm font-medium mb-1">Message</label>
						<textarea
							value={formData.message}
							onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
							rows={5}
							className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
							placeholder="How can we help you?"
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
