import React from "react";

interface RadioButtonProps {
	value: string;
	name: string;
	checked: boolean;
	onClickFunction: () => void;
}

export default function RadioButton({ value, name, checked, onClickFunction }: RadioButtonProps) {
	// const groupSlug = name.trim().toLowerCase().replace(/\s+/g, "-");
	// const inputId = `${groupSlug}-${value.trim().toLowerCase().replace(/\s+/g, "-")}`;
	const groupSlug = name;
	const inputId = `${groupSlug}-${value}`;

	return (
		<label
			htmlFor={inputId}
			className="flex gap-4 items-center cursor-pointer"
		>
			<input
				type="radio"
				id={inputId}
				name={groupSlug}
				value={value}
				checked={checked}
				onChange={onClickFunction}
			/>
			{value}
		</label>
	);
}
