import clsx from "clsx";


const WhiteArrowLeft = ({ dark, className, style }: { dark?: boolean, className: string; style?: React.CSSProperties }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 41 7"
		className={clsx("w-full h-full object-contain", className)}
		style={style}
	>
		<path
			fill={dark ? "#fff" : "#000"}
			d="m9.54 1.63 2.73 1.55-2.73 1.55-4.73-1.55zM9.71 0 0 3.18l9.71 3.18 5.61-3.18z"
			className="duration-300"
		></path>
		<path
			stroke={dark ? "#fff" : "#000"}
			strokeMiterlimit="10"
			strokeWidth="1.5"
			d="M14 3.18h26.46"
			className="duration-300"
		></path>
	</svg>
);

export default WhiteArrowLeft;
