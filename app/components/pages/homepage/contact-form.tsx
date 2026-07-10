"use client";

import { useEffect, useState } from "react";
import { useFormStore } from "@/store";
import clsx from "clsx";
import { CheckboxFieldType, FormData, RadioFieldType } from "@/types/global-types";
import RadioButton from "./form/radio-button";
// import Checkbox from "./form/checkbox";

const EMPTYFORM = {
	title: "",
	description: "",
	radioFields: [],
	selectedRadioboxes: [],
	name: "",
	email: "",
	phoneNumber: "",
	pdpa: false,
};

export default function ContactForm() {
	const { isFormOpen, formDetails, closeForm } = useFormStore();

	const [formData, setFormData] = useState(EMPTYFORM as FormData);

	useEffect(() => {
		if (isFormOpen) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setFormData({
				title: formDetails.title,
				description: formDetails.description,
				radioFields: formDetails.radioFields,
				selectedRadioboxes: formDetails.selectedRadioboxes,
				name: formDetails.name,
				email: formDetails.email,
				phoneNumber: formDetails.phoneNumber,
				pdpa: formDetails.pdpa,
			});
		} else {
			setFormData(EMPTYFORM);
		}
	}, [isFormOpen]);

	function updateFormRadioState(radioItem: RadioFieldType["radioBoxes"][number]) {
		const hasItem = formData.selectedRadioboxes.some((item) => item.value === radioItem.value);

		if (!hasItem) {
			setFormData((prevData) => ({
				...prevData,
				selectedRadioboxes: [...prevData.selectedRadioboxes, radioItem],
			}));
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
					"bg-[#e7e4d5] w-[90vw] max-h-[90vh] rounded-2xl px-[7.292vw] py-[3.25vw] shadow-2xl relative duration-300",
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
					<div className="text-center">
						<h2 className="leading-[1]! text-[3.13vw]! mb-[1.2rem]! lg:mb-[2.08vw]!">{formData.title}</h2>
						<p>{formData.description}</p>
					</div>

					<div className="flex">
						<div className="flex flex-col gap-4 flex-1">
							{formData.radioFields.map((field, index) => (
								<div
									key={index}
									className="grid gap-1"
								>
									<label className="block text-md font-bold">
										{index + 1}. {field.label}
									</label>

									<div className="flex flex-col gap-1">
										{field.radioBoxes.map((radio, radioIndex) => (
											<div
												key={radioIndex}
												className="flex items-center gap-2"
											>
												<RadioButton
													name={field.label}
													value={radio.value}
													onClickFunction={() => {
														updateFormRadioState(radio);
													}}
												/>
											</div>
										))}
									</div>
								</div>
							))}
						</div>

						{/* General Details */}
						<div className="flex flex-col flex-1">
							<input
								type="text"
								placeholder="Name"
								className="input"
							/>
							<input
								type="email"
								placeholder="Email"
								className="input"
							/>
							<input
								type="text"
								placeholder="Phone Number"
								className="input"
							/>
							<RadioButton
								name="pdpa"
								value="pdpa"
								onClickFunction={() => {
									setFormData((prevData) => ({
										...prevData,
										pdpa: !prevData.pdpa,
									}));
								}}
							/>
							<button
								type="submit"
								className="w-full bg-black text-white py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors"
							>
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
