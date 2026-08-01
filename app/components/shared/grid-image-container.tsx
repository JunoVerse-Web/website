import clsx from "clsx";
import Image from "next/image";
import React from "react";

export default function GridImageContainer({
	image1,
	image2,
	image3,
	image4,
	image5,
	image6,
	className
}: {
	image1: string;
	image2: string;
	image3: string;
	image4: string;
	image5: string;
	image6: string;
	className?: string;
}) {
	return (
		<div className={clsx(`grid-image-container`, className)}>
			{Array.from({ length: 6 }).map((_, i) => {
				const currentImage = [image1, image2, image3, image4, image5, image6];
				return (
					<div key={i}>
						<Image
							src={currentImage[i]}
							alt="Image 1"
							className={clsx(`image-${i + 1}`)}
							width={400}
							height={400}
							loading="eager"
							quality={70}
						/>
					</div>
				);
			})}
		</div>
	);
}
