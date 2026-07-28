"use client";

import { useEffect } from "react";

const FADE_UP_SELECTOR = ".text-fade-up";
const ACTIVE_CLASS = "active";
const STAGGER_MS = 120;

export function useTextFadeUpObserver(root?: HTMLElement | Document) {
	useEffect(() => {
		const scope = root ?? document; // safe here — effect only runs client-side
		const elements = Array.from(scope.querySelectorAll<HTMLElement>(FADE_UP_SELECTOR));

		if (elements.length === 0) return;

		let staggerIndex = 0;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return;

					const el = entry.target as HTMLElement;
					if (el.classList.contains(ACTIVE_CLASS)) return;

					const delay = staggerIndex * STAGGER_MS;
					staggerIndex += 1;

					window.setTimeout(() => {
						el.classList.add(ACTIVE_CLASS);
					}, delay);

					observer.unobserve(el); // animate once, don't re-trigger on scroll back
				});
			},
			{
				threshold: 0.2, // fires once 20% of the element is visible
				rootMargin: "0px 0px -10% 0px", // trigger slightly before it fully enters
			},
		);

		elements.forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	}, [root]);
}