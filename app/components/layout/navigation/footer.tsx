import Link from "next/link";
import React from "react";

export default function Footer() {
	return (
		<footer>
			<div className="flex gap-5">
				<span>©Rekalabs Sdn. Bhd. All rights reserved.</span>
				<div className="flex gap-1.5">
          <Link href="/privacy-policy" className="underline">Privacy Policy</Link>
          <span> | </span>
          <Link href="/terms-of-use" className="underline">Terms of Use</Link>
        </div>
			</div>
		</footer>
	);
}
