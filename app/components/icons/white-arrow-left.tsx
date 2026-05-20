import * as React from "react";

const WhiteArrowLeft = ({ dark = true }: { dark?: boolean }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="41"
		height="7"
		fill="none"
		viewBox="0 0 41 7"
	>
		<path
			fill="#fff"
			d="m9.54 1.63 2.73 1.55-2.73 1.55-4.73-1.55zM9.71 0 0 3.18l9.71 3.18 5.61-3.18z"
		></path>
		<path
			stroke="#fff"
			strokeMiterlimit="10"
			strokeWidth="1.5"
			d="M14 3.18h26.46"
		></path>
	</svg>
);

export default WhiteArrowLeft;
