"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import MuxPlayer from "@mux/mux-player-react";
import WhiteArrowLeft from "../../icons/white-arrow-left";
import SkipButtton from "../../icons/skip-button";

// Mux playback IDs — the string after player.mux.com/ in your embed URL.
// Replace VIDEO_2_PLAYBACK_ID with your second video's actual ID.
const VIDEO_PLAYBACK_IDS = {
	video1: "KAz4KRfcAKB8cINErUCuugUFztXwctGurra6kwu3ky00",
	video2: "U01rXa9BoDxEyHaThJwNr9gTmeKt00302aUVvp6fNFBx28",
};

export default function PhilosophyInteractive() {
	const router = useRouter();
	const [activeVideo, setActiveVideo] = useState<keyof typeof VIDEO_PLAYBACK_IDS | null>(null);

	return (
		<>
			<div className="flex flex-col items-center min-w-100 max-w-[35%] ml-auto">
				<PhilosophyButton
					title="What does JUNO actually believe?"
					onClick={() => setActiveVideo("video1")}
				/>
				<PhilosophyButton
					title="What makes JUNO different?"
					onClick={() => setActiveVideo("video2")}
				/>
				<PhilosophyButton
					title="Skip the philosophy. Show me the work."
					onClick={() => router.push("/our-creations")}
				/>
			</div>

			{activeVideo && (
				<div
					// className="fixed! m-auto bottom-0 left-0 right-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-sm"
					className="fixed! m-auto bottom-0 left-0 right-0 h-screen w-screen z-[99999999]!"
					onClick={() => setActiveVideo(null)}
				>
					<div
						className="relative w-full h-full "
						onClick={(e) => e.stopPropagation()}
					>
						<button
							onClick={() => setActiveVideo(null)}
							aria-label="Close video"
							className="absolute top-[10%] right-[15%] cursor-pointer"
						>
							<div className="relative w-[50px] h-[50px] aspect-square z-[100] ">
								<SkipButtton className="w-ful h-full object-contain" />
							</div>
						</button>
						<MuxPlayer
							playbackId={VIDEO_PLAYBACK_IDS[activeVideo]}
							metadata={{ video_title: activeVideo }}
							autoPlay
							className="w-full h-full aspect-video philosophy-video"
                            
						/>
					</div>
				</div>
			)}
		</>
	);
}

function PhilosophyButton({ title, onClick }: { title: string; onClick: () => void }) {
	return (
		<button
			onClick={onClick}
			className="group relative border border-white rounded-md w-full flex items-center justify-center pl-[10%] pr-[15%] py-[0.833vw] mb-4 text-left hover:bg-white/10 transition-colors cursor-pointer"
		>
			<span
				className="text-[white] m-0! text-center"
				style={{ fontSize: "clamp(1rem, 0.83vw, 0.83vw)" }}
			>
				{title}
			</span>
			<WhiteArrowLeft
				dark={true}
				className="rotate-180 absolute right-4 w-[10%]! translate-x-[-50%] group-hover:translate-x-0 duration-300"
			/>
		</button>
	);
}
