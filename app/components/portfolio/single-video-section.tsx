"use client";

import clsx from "clsx";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MuxPlayer, { MuxPlayerRefAttributes } from "@mux/mux-player-react";

gsap.registerPlugin(ScrollTrigger);

export default function SingleVideoSection({ playbackId, className }: { playbackId: string; className?: string }) {
	const sectionRef = useRef<HTMLDivElement>(null);
	const playerRef = useRef<MuxPlayerRefAttributes>(null);

	useEffect(() => {
		const player = playerRef.current;
		if (!player) return;

		player.muted = true;

		player.play()?.catch(() => {
			const resume = () => {
				player.play().catch(() => {});
				window.removeEventListener("touchstart", resume);
				window.removeEventListener("click", resume);
			};
			window.addEventListener("touchstart", resume, { once: true });
			window.addEventListener("click", resume, { once: true });
		});
	}, []);

	return (
		<section className={clsx("px-4 md:px-8 lg:px-[2.34vw]", className)} ref={sectionRef}>
			<div className="relative w-full aspect-[920/690] md:aspect-[1920/690] overflow-hidden flex items-center justify-center pointer-events-none">
				<MuxPlayer
					ref={playerRef}
					playbackId={playbackId}
					streamType="on-demand"
					autoPlay="muted" // Mux's own built-in "autoplay only if muted" handling
					muted
					loop
					playsInline // critical on iOS — without this, Safari forces fullscreen takeover on play
					preload="auto"
					disablePictureInPicture
					poster={`https://image.mux.com/${playbackId}/thumbnail.jpg?time=0`}
					className="w-full h-full object-cover scale-160 origin-center single-video-section"
					aria-hidden="true"
				/>
			</div>
		</section>
	);
}