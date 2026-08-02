'use client'

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Divider() {
	const dividerRef = useRef<HTMLSpanElement>(null);
	
	useGSAP(() => {
		const divider = dividerRef.current;
		if (!divider) return;

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: divider,
				start: "top 80%",
				end: "bottom 20%",
				toggleActions: "play none none reverse", // enter, leave, enterBack, leaveBack
			},
		});

		tl.to(divider, { width: "100%", duration: 0.75 });
	});
	
	return <span className="bg-yellow h-px w-0 block" ref={dividerRef}></span>;
}
