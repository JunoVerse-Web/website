"use client";

import { PropsWithChildren } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

const Providers = ({ children }: PropsWithChildren) => {
	return <ReactLenis root>{children}</ReactLenis>;
};

export default Providers;
