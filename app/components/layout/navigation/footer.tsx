import Link from "next/link";
import InstagramIcon from "../../icons/instagram-icon";
import LinkedinIcon from "../../icons/linkedin-icon";
import CustomLink from "../../shared/custom-link";

export default function Footer() {
	return (
		<footer className="bg-yellow flex flex-wrap items-center justify-between px-4 lg:px-[3.13vw] py-8 lg:py-[4.17vw] max-[1390px]:flex-col max-[1390px]:justify-center max-[1390px]:items-center ">
			{/* Copyright Holder */}
			<div className="flex gap-5 max-md:flex-col max-md:items-center max-md:gap-1 max-md:mb-1.5">
				<span className="max-md:text-center max-sm:text-[12px]!">©Rekalabs Sdn. Bhd. All rights reserved.</span>
				<div className="flex gap-1.5">
					<CustomLink
						scroll={false}
						href="/privacy-policy"
						className="block text-2xl font-medium text-black underline max-sm:text-[12px]!"
					>
						Privacy Policy
					</CustomLink>
					<span> | </span>
					<CustomLink
						scroll={false}
						href="/terms-of-use"
						className="block text-2xl font-medium text-black underline max-sm:text-[12px]!"
					>
						Terms of Use
					</CustomLink>
				</div>
			</div>

			{/* Social Holder */}
			<div className="flex gap-5 items-center max-[1390px]:gap-1 max-[1390px]:flex-col max-[1390px]:justify-center max-[1390px]:items-center">
				<p className="mb-0! max-md:text-center max-sm:text-[12px]!">Let&apos;s Look Deeper. Plays into our theme of all-seeing, and our eye logo.</p>
				<div className="flex items-center justify-center gap-5 max-sm:mt-4">
					<InstagramIcon className="max-sm:w-10" link={"#"} />
					<LinkedinIcon className="max-sm:w-10" link={"#"} />
				</div>
			</div>
		</footer>
	);
}
