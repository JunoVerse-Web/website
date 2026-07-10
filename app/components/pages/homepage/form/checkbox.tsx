import clsx from "clsx";

export default function Checkbox({ label, checked, onClickFunction }: { label: string; checked: boolean; onClickFunction: () => void }) {
	return (
		<div
			onClick={onClickFunction}
			className="flex items-center gap-2 cursor-pointer select-none"
		>
			<span className={clsx("block size-4 border-2 flex-shrink-0 transition-colors mb-0!", checked ? "bg-orange border-orange" : "bg-white border-gray-300")} />
			<span className="text-sm! mb-0!">{label}</span>
		</div>
	);
}
