import Link from "next/link";
import InstagramIcon from "../../icons/instagram-icon";
import LinkedinIcon from "../../icons/linkedin-icon";

export default function Footer() {
	return (
		<footer className="bg-yellow flex items-center justify-between px-4 lg:px-[3.13vw] py-8 lg:py-[4.17vw]">
			{/* Copyright Holder */}
			<div className="flex gap-5">
				<span>©Rekalabs Sdn. Bhd. All rights reserved.</span>
				<div className="flex gap-1.5">
					<Link
						scroll={false}
						href="/privacy-policy"
						className="underline"
					>
						Privacy Policy
					</Link>
					<span> | </span>
					<Link
						scroll={false}
						href="/terms-of-use"
						className="underline"
					>
						Terms of Use
					</Link>
				</div>
			</div>

			{/* Social Holder */}
			<div className="flex gap-5 items-center">
				<p className="mb-0!">Let&apos;s Look Deeper. Plays into our theme of all-seeing, and our eye logo.</p>
				<div className="flex items-center justify-center gap-5">
					<InstagramIcon link={"#"} />
					<LinkedinIcon link={"#"} />
				</div>
			</div>
		</footer>
	);
}
