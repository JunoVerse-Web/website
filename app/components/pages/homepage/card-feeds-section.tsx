"use client";

import { HomePage } from "@/types/content";
import Link from "next/link";

import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import CardFrame from "../../icons/card-frame";
import Image from "next/image";
import GradientOne from "../../../../public/general/gradient-image-1.jpg";
import GradientTwo from "../../../../public/general/gradient-image-2.jpg";
import GradientThree from "../../../../public/general/gradient-image-3.jpg";
import ArrowButton from "../../shared/arrow-button";
import BlurText from "../../animations/BlurText";
import { useRef } from "react";
import { useTextFadeUpObserver } from "@/hooks/useTextFadeUpObserver";

const gradients = [GradientOne, GradientTwo, GradientThree];

export default function CardFeedsSection({ content }: { content: HomePage["cardFeedsSection"] }) {
	const { title, cards } = content;

	const sectionRef = useRef<HTMLElement>(null);
	useTextFadeUpObserver();
	return (
		<section
			className="relative z-10 bg-gray px-[10.4vw] text-center py-[7.2vw]"
			ref={sectionRef}
		>
			<div className="relative flex items-center justify-center">
				<h2 className="mb-0! flex-1">
					<BlurText
						text={title}
						delay={100}
						animateBy="words"
						direction="bottom"
						className="justify-center items-center"
					/>
				</h2>
			</div>

			<div className="text-fade-up">
				<Swiper
					spaceBetween={50}
					slidesPerView={3}
					breakpoints={{
						480: { slidesPerView: 1, spaceBetween: 20 },
						768: { slidesPerView: 2, spaceBetween: 30 },
						1024: { slidesPerView: 3, spaceBetween: 40 },
						1280: { slidesPerView: 3, spaceBetween: 50 },
					}}
				>
					{cards?.map((card, index) => {
						// Cycle through the 3 gradients (0, 1, 2 → repeat)
						const gradientIndex = index % 3;
						const currentGradient = gradients[gradientIndex];

						return (
							<SwiperSlide
								key={index}
								className="relative flex flex-col items-center justify-center font-medium mb-[1.25vw] aspect-410/500 overflow-hidden rounded-[2.5vw] mt-8 md:mt-12 lg:mt-[4.17vw]"
							>
								{/* Background Gradient Image */}
								<Image
									src={currentGradient}
									alt={`Gradient ${gradientIndex + 1}`}
									fill
									sizes="auto"
									className="object-cover absolute inset-0 w-full h-full z-0"
									priority={index < 3} // Optional: prioritize first few
								/>

								{/* Content Overlay */}
								<Link
									scroll={false}
									href="#"
									className="CardFeedHolder relative z-10 text-center px-[10%] pt-[25%] grid justify-center place-content-start w-fill h-full"
								>
									<span>{card.topTitle}</span>
									<h3>{card.mainTitle}</h3>
									<p>{card.description}</p>
								</Link>

								{/* Card Frame */}
								<CardFrame className="absolute inset-0 w-full h-full z-20 pointer-events-none p-[5%]" />
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</section>
	);
}
