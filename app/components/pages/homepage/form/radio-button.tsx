import React from "react";

export default function RadioButton({value, name, onClickFunction}: {value: string; name: string; onClickFunction: () => void}) {
	return (
		<label className="flex gap-4 items-center" onClick={onClickFunction}>
			<input
				type="radio"
				id={value}
				name={name.replace(" ", "-")}
				value={value}
			/>
			{value}
		</label>
	);
}
