"use client";

import { useState, useRef, forwardRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import MuxPlayer from "@mux/mux-player-react";
import type MuxPlayerElement from "@mux/mux-player";
import WhiteArrowLeft from "../../icons/white-arrow-left";
import SkipButtton from "../../icons/skip-button";
import clsx from "clsx";
import gsap from "gsap";

const VIDEO_PLAYBACK_IDS = {
	video1: "KAz4KRfcAKB8cINErUCuugUFztXwctGurra6kwu3ky00",
	video2: "U01rXa9BoDxEyHaThJwNr9gTmeKt00302aUVvp6fNFBx28",
};

export default function PhilosophyInteractive() {
	const router = useRouter();
	const [activeVideo, setActiveVideo] = useState<keyof typeof VIDEO_PLAYBACK_IDS | null>(null);

	const firstButtonRef = useRef<HTMLButtonElement>(null);
	const secondButtonRef = useRef<HTMLButtonElement>(null);
	const thirdButtonRef = useRef<HTMLButtonElement>(null);

	// Permanent refs to the two players — mounted once, never unmounted, so
	// calling .play() here always lands inside the click's own call stack.
	const video1Ref = useRef<MuxPlayerElement>(null);
	const video2Ref = useRef<MuxPlayerElement>(null);

	const pathname = usePathname();

	const animateButton = (
		ref: React.RefObject<HTMLButtonElement | null>,
		yDirection: number = 0,
		xDirection: "left" | "right" | "up" | "",
		animateInOut: "in" | "out" | "" = "",
		animDelay: number = 0,
		reset: boolean = false,
	) => {
		if (!ref.current) return;

		const xValue = xDirection === "left" ? -30 : xDirection === "right" ? 30 : 0;
		const yValue = yDirection || 0;
		const animateInOutValue = animateInOut === "out" ? 0 : animateInOut === "in" ? 1 : 1;

		if (reset) {
			gsap.fromTo(
				ref.current,
				{ xPercent: -30, yPercent: 0, opacity: 0 },
				{ xPercent: 0, yPercent: 0, duration: 0.4, delay: animDelay, ease: "power1.out", opacity: 1 },
			);
		} else {
			gsap.fromTo(
				ref.current,
				{ scale: 1, xPercent: 0, yPercent: 0, opacity: 1 },
				{ xPercent: xValue, yPercent: yValue, duration: 0.4, delay: animDelay, ease: "power1.out", opacity: animateInOutValue },
			);
		}
	};

	const delayedCallRef = useRef<gsap.core.Tween | null>(null);

	// Calls .play() immediately, synchronously, inside the triggering click —
	// this is the part that actually satisfies iOS's autoplay-gesture rule.
	// Falls back to a muted play if the browser still refuses (e.g. Low Power
	// Mode), so playback at least starts instead of failing silently.
	const playVideo = (key: keyof typeof VIDEO_PLAYBACK_IDS) => {
		const el = key === "video1" ? video1Ref.current : video2Ref.current;
		const other = key === "video1" ? video2Ref.current : video1Ref.current;
		other?.pause();
		if (!el) return;
		el.currentTime = 0;
		const playPromise = el.play();
		if (playPromise && typeof playPromise.catch === "function") {
			playPromise.catch(() => {
				el.muted = true;
				el.play().catch(() => {});
			});
		}
	};

	const handleFirstClick = () => {
		playVideo("video1"); // synchronous, inside the gesture

		animateButton(secondButtonRef, 0, "right", "out");
		animateButton(thirdButtonRef, 0, "right", "out", 0.2);

		delayedCallRef.current?.kill();
		delayedCallRef.current = gsap.delayedCall(0.65, () => {
			setActiveVideo("video1"); // this can stay delayed — it only reveals the overlay now
		});
	};

	const handleSecondClick = () => {
		playVideo("video2");

		animateButton(firstButtonRef, 0, "right", "out");
		animateButton(thirdButtonRef, 0, "right", "out", 0.2);
		animateButton(secondButtonRef, -100, "", "in", 0.3);

		delayedCallRef.current?.kill();
		delayedCallRef.current = gsap.delayedCall(0.65, () => {
			setActiveVideo("video2");
		});
	};

	const handleThirdClick = () => {
		animateButton(firstButtonRef, 0, "right", "out");
		animateButton(secondButtonRef, 0, "right", "out", 0.2);
		animateButton(thirdButtonRef, -200, "", "in", 0.3);

		delayedCallRef.current?.kill();
		delayedCallRef.current = gsap.delayedCall(0.65, () => {
			router.push("/our-creations");
		});
	};

	const resetAll = () => {
		delayedCallRef.current?.kill();
		setActiveVideo(null);
		video1Ref.current?.pause();
		video2Ref.current?.pause();

		animateButton(firstButtonRef, 0, "", "", 0.2, true);
		animateButton(secondButtonRef, 0, "", "", 0.3, true);
		animateButton(thirdButtonRef, 0, "", "", 0.4, true);
	};

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			resetAll();
		}, 0);

		return () => {
			clearTimeout(timeoutId);
			delayedCallRef.current?.kill();
		};
	}, [pathname]);

	return (
		<>
			<div className="flex flex-col items-center min-[1024px]:min-w-100 max-w-[60%] min-[1024px]:max-w-[35%] ml-auto max-md:max-w-full max-md:mx-auto max-md:mb-20">
				<PhilosophyButton ref={firstButtonRef} title="What does JUNO actually believe?" onClick={handleFirstClick} className={"opacity-0"} />
				<PhilosophyButton ref={secondButtonRef} title="What makes JUNO different?" onClick={handleSecondClick} className={"opacity-0"} />
				<PhilosophyButton ref={thirdButtonRef} title="Skip the philosophy. Show me the work." onClick={handleThirdClick} className={"opacity-0"} />
			</div>

			{/* Video Overlay */}
			<div
				className={clsx(
					"fixed! m-auto bottom-0 left-0 right-0 h-screen w-screen z-[99999999]! duration-300",
					activeVideo ? "opacity-100 scale-100" : "opacity-0 pointer-events-none scale-75",
				)}
				onClick={() => setActiveVideo(null)}
			>
				<div className="relative w-full h-full" onClick={(e) => e.stopPropagation()}>
					<button onClick={() => resetAll()} aria-label="Close video" className="absolute top-[10%] right-[15%] cursor-pointer">
						<div className="relative w-auto h-[30px] md:h-[50px] aspect-square z-[100]">
							<SkipButtton className="w-auto h-full object-contain hover:-translate-x-4 duration-300" />
						</div>
					</button>

					{/* Both players stay mounted at all times — never conditionally
					    rendered — so their refs exist before the user ever clicks,
					    and .play() in the handler always targets a real element. */}
					<MuxPlayer
						ref={video1Ref}
						playbackId={VIDEO_PLAYBACK_IDS.video1}
						metadata={{ video_title: "video1" }}
						playsInline
						thumbnailTime={1}
						className={clsx(
							"absolute inset-0 w-full h-full aspect-video philosophy-video",
							activeVideo === "video1" ? "opacity-100" : "opacity-0 pointer-events-none",
						)}
					/>
					<MuxPlayer
						ref={video2Ref}
						playbackId={VIDEO_PLAYBACK_IDS.video2}
						metadata={{ video_title: "video2" }}
						playsInline
						thumbnailTime={1}
						className={clsx(
							"absolute inset-0 w-full h-full aspect-video philosophy-video",
							activeVideo === "video2" ? "opacity-100" : "opacity-0 pointer-events-none",
						)}
					/>
				</div>
			</div>
		</>
	);
}

const PhilosophyButton = forwardRef<
	HTMLButtonElement,
	{
		title: string;
		onClick: () => void;
		className?: string;
	} & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ title, onClick, className, ...props }, ref) => {
	return (
		<button
			ref={ref}
			onClick={onClick}
			className={clsx(className, "philosophy-button group relative border border-white rounded-md w-full flex items-center justify-center mb-4 text-left hover:bg-white/10 transition-colors cursor-pointer")}
			{...props}
		>
			<span
				className="text-white m-0! text-center"
				style={{ fontSize: "clamp(1rem, 0.938vw, 0.938vw)" }}
			>
				{title}
			</span>
			<WhiteArrowLeft
				dark={true}
				className="rotate-180 absolute right-4 w-[10%]! translate-x-[-50%] group-hover:translate-x-0 duration-300 max-md:opacity-0"
			/>
		</button>
	);
});

PhilosophyButton.displayName = "PhilosophyButton";
