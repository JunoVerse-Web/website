const LinkedinIcon = ({ link = "#w" }: { link?: string }) => (
	<a
		href={link}
		target="_blank"
		className="cursor-pointer bg-black rounded-full flex justify-center items-center w-12 lg:w-[2.86vw] h-auto aspect-square p-[11%] mb-0!"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="422"
			height="448"
			fill="none"
			viewBox="0 0 422 448"
			className="w-full h-full object-contain"
		>
			<path
				fill="#fff"
				d="M20.08 142.56a15.84 15.84 0 0 0-15.84 15.824V432.16c0 8.752 7.088 15.84 15.84 15.84h63.36a15.84 15.84 0 0 0 15.84-15.84V158.4a15.84 15.84 0 0 0-15.84-15.84zM51.76 0a51.76 51.76 0 1 0 0 103.52A51.76 51.76 0 0 0 51.76 0m158.052 142.56h-62.784a15.84 15.84 0 0 0-15.84 15.824V431.5c0 8.752 7.088 15.84 15.84 15.84h63.36c4.201 0 8.23-1.669 11.201-4.639s4.639-7 4.639-11.201V267.84a51.472 51.472 0 0 1 102.944 0V431.5c0 8.752 7.088 15.84 15.84 15.84h60.8c4.201 0 8.23-1.669 11.201-4.639s4.639-7 4.639-11.201V242.944a104.927 104.927 0 0 0-104.928-104.928h-14.896a84.54 84.54 0 0 0-64.128 29.488l-12.048 14.08v-23.2c0-4.201-1.669-8.23-4.639-11.201s-7-4.623-11.201-4.623"
			></path>
		</svg>
	</a>
);

export default LinkedinIcon;
