"use client";

import clsx from "clsx";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import HoodleFandom from "../../../../public/our-world/hoodle-fandom-image.webp";
import GridImageContainer from "@/app/components/shared/grid-image-container";
import { OurWorldPage } from "@/types/content";
import CharacterSequence from "./character-sequence";

import OffTheRecords from "../../../../public/our-world/off-the-records.svg";
import HiveMind from "../../../../public/our-world/hive-mind.svg";

gsap.registerPlugin(ScrollTrigger);

export default function ContentSection({ box2, box3 }: { box2: OurWorldPage["box2"]; box3: OurWorldPage["box3"] }) {
	const box1Ref = useRef<HTMLDivElement>(null);
	const box2Ref = useRef<HTMLDivElement>(null);
	const box3Ref = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const mm = gsap.matchMedia();

		mm.add("(min-width: 969px)", () => {
			const boxes = [
				{ ref: box1Ref, fromX: -8 }, // left → right
				{ ref: box2Ref, fromX: 8 }, // right → left
				{ ref: box3Ref, fromX: -8 }, // left → right
			];

			const triggers: ScrollTrigger[] = [];

			boxes.forEach(({ ref, fromX }) => {
				const box = ref.current;
				if (!box) return;

				const items = gsap.utils.toArray<HTMLElement>(box.querySelectorAll("h2, p"));

				gsap.set(items, { opacity: 0, yPercent: 8 });

				const enterBox = () => {
					gsap.timeline()
						.fromTo(box, { opacity: 0, xPercent: fromX }, { opacity: 1, xPercent: 0, duration: 0.4, ease: "power2.out" })
						.to(items, { opacity: 1, yPercent: 0, stagger: 0.05, duration: 0.4, ease: "power2.out" }, "<0.1");
				};

				const exitBox = () => {
					gsap.timeline()
						.fromTo(box, { opacity: 1, xPercent: 0 }, { opacity: 0, xPercent: fromX, duration: 0.4, ease: "power2.out" })
						.to(items, { opacity: 0, yPercent: 8, stagger: 0.05, duration: 0.4, ease: "power2.out" }, "<0.1");
				};

				triggers.push(
					ScrollTrigger.create({
						trigger: box,
						start: "top 40%",
						end: "90% 40%",
						onEnter: enterBox,
						onLeave: exitBox,
						onEnterBack: enterBox,
						onLeaveBack: exitBox,
					}),
				);
			});

			return () => {
				triggers.forEach((trigger) => trigger.kill());
			};
		});

		return () => {
			mm.revert();
		};
	}, []);

	return (
		<>
			<section className={clsx("px-4 md:px-8 lg:px-[7.29vw] pb-[160px] sm:pb-[240px] min-[969px]:pb-[15.63vw] lg:pb-[14.58vw] content-section")}>
				{/* Green Box 1 */}
				<div
					ref={box1Ref}
					className="min-[566px]:max-w-[75%] min-[969px]:max-w-[40%] min-[969px]:opacity-0 min-[969px]:translate-x-[-8%]"
				>
					<div className="bg-[#d8ff00] rounded-4xl px-6 py-8 min-[969px]:p-[6%]">
						<div className="mb-5 min-[969px]:mb-10">
							<h2 className="uppercase leading-[1.2]!">
								Hoodle,
								<br />
								Passion Power
							</h2>
							<p className="font-size-16 mb-2!">
								Live across 20+ Malaysian campuses. Built by us, for youth. HOODLE exists on campus before it exists on a screen. Students
								encounter it before they ever download it.
							</p>
							<p className="font-size-16 mb-2!">
								Malaysia&apos;s first youth passion platform. The thesis: passion has become a luxury young Malaysians can&apos;t afford. The
								job: channel brand resources, funding, skills, access, to students ready to use them.
							</p>
							<p className="font-size-16 mb-2!">
								Not CSR. Not an influencer marketplace. A movement with one promise to brands: stop buying attention from youth. Earn it.
							</p>
						</div>
						<Image
							src={HoodleFandom}
							alt="Hoodle Fandom"
							className="max-[969px]:mb-[-30%] min-[969px]:scale-[1.3] origin-top"
							loading="lazy"
							quality={70}
						/>
					</div>
				</div>

				{/* Green Box 2 */}
				<div
					ref={box2Ref}
					className="min-[566px]:max-w-[75%] min-[969px]:max-w-[40%] ml-auto mt-[35%] min-[969px]:mt-[-10%] min-[969px]:opacity-0 min-[969px]:translate-x-[8%]"
				>
					<div className="bg-[#d8ff00] rounded-4xl px-6 py-8 min-[969px]:p-[6%]">
						<div className="mb-5 min-[969px]:mb-10">
							<Image
								src={OffTheRecords}
								className={`h-[4.69vw] min-h-14.25 w-auto object-contain mb-7`}
								width={423}
								height={110}
								alt={`Off The Records`}
								loading="eager"
							/>
							<p className="font-size-16 mb-2! max-w-[80%]">
								The honest version of the story you heard. A speaker series that skips the polished &quot;making it&quot; narrative for what
								almost didn&apos;t work. No motivational gloss. Real people, saying what they&apos;d only say off the record.
							</p>
						</div>
						<GridImageContainer
							image1={box2.image1}
							image2={box2.image2}
							image3={box2.image3}
							image4={box2.image4}
							image5={box2.image5}
							image6={box2.image6}
							className={`max-[969px]:scale-100! max-[969px]:mb-[-30%]`}
						/>
					</div>
				</div>

				{/* Green Box 3 */}
				<div
					ref={box3Ref}
					className="min-[566px]:max-w-[75%] min-[969px]:max-w-[40%] mt-[35%] min-[969px]:mt-[-10%] min-[969px]:opacity-0 min-[969px]:translate-x-[-8%]"
				>
					<div className="bg-[#d8ff00] rounded-4xl px-6 py-8 min-[969px]:p-[6%]">
						<div className="mb-5 min-[969px]:mb-10">
							<Image
								src={HiveMind}
								className={`h-[6.73vw] min-h-20.25 w-auto object-contain mb-7`}
								width={110}
								height={110}
								alt={`Hive Mind`}
								loading="eager"
							/>
							<p className="font-size-16 mb-2!">Youth get heard. Brands get the truth.</p>
							<p className="font-size-16 mb-2!">
								Honest youth opinions turned into insight brands can actually use. No panels selling secondhand answers.
							</p>
						</div>
						<div className="flex flex-wrap max-[969px]:mb-[-30%] min-[969px]:scale-[1.3] origin-top">
							{Array.from({ length: 6 }).map((_, i) => {
								const currentImage = [box3.image1, box3.image2, box3.image3, box3.image4, box3.image5, box3.image6];
								return (
									<div
										key={i}
										className="overflow-hidden w-1/3 p-1.5"
									>
										<Image
											src={currentImage[i]}
											alt="Image 1"
											className={clsx(`image-${i + 1}`, "w-full h-full object-cover")}
											width={400}
											height={400}
											loading="eager"
											quality={70}
										/>
									</div>
								);
							})}
						</div>
					</div>
				</div>

				<CharacterSequence />
			</section>
		</>
	);
}
