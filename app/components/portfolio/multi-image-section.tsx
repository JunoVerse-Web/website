// components/MultiImageSection.tsx
import Image from "next/image";
import Divider from "../shared/divider";

type LayoutType = "1-1-1" | "2-1" | "1-2";

interface MultiImageSectionProps {
	images: string[]; // Array of image URLs
	layout?: LayoutType;
	className?: string;
	divider?: boolean;
	dividerPosition?: "top" | "bottom";
}

export default function MultiImageSection({ images, layout = "1-1-1", className = "", divider = false, dividerPosition = "bottom" }: MultiImageSectionProps) {
	if (!images || images.length === 0) return null;

	return (
		<section className={`w-full pb-50 ${className}`}>
			{divider && dividerPosition === "top" && <Divider />}

			<div className="px-4 md:px-8 lg:px-[2.34vw] py-4 md:py-8 lg:py-[2.34vw]">
				{layout === "1-1-1" && (
					<div className="grid md:grid-cols-3 gap-4 md:gap-[0.83vw]">
						{images.map((src, index) => {
							if (index >= 3) return null;

							if (src) {
								return (
									<div
										key={index}
										className="relative aspect-square overflow-hidden"
									>
										<Image
											src={src}
											alt={`Gallery image ${index + 1}`}
											fill
											className="object-cover transition-transform duration-500"
											sizes="(max-width: 768px) 100vw, 33vw"
										/>
									</div>
								);
							}
						})}
					</div>
				)}

				{layout === "2-1" && (
					<div className="space-y-4">
						{/* First row: 2 images */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{images.map((src, index) => {
								if (index >= 2) return null;
								if (src) {
									return (
										<div
											key={index}
											className="relative aspect-[16/10] overflow-hidden"
										>
											<Image
												src={src}
												alt={`Gallery image ${index + 1}`}
												fill
												className="object-cover transition-transform duration-500"
												sizes="(max-width: 768px) 100vw, 50vw"
											/>
										</div>
									);
								}
							})}
						</div>

						{/* Second row: 1 wide image */}
						{images[2] && (
							<div className="relative aspect-[16/9] overflow-hidden">
								<Image
									src={images[2]}
									alt="Gallery image 3"
									fill
									className="object-cover transition-transform duration-500"
									sizes="100vw"
								/>
							</div>
						)}
					</div>
				)}

				{layout === "1-2" && (
					<div className="space-y-4">
						{/* First row: 1 wide image */}
						{images[0] && (
							<div className="relative aspect-[16/9] overflow-hidden">
								<Image
									src={images[0]}
									alt="Gallery image 1"
									fill
									className="object-cover transition-transform duration-500"
									sizes="100vw"
								/>
							</div>
						)}

						{/* Second row: 2 images */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{images.slice(1, 3).map((src, index) => (
								<div
									key={index}
									className="relative aspect-[16/10] overflow-hidden"
								>
									<Image
										src={src}
										alt={`Gallery image ${index + 2}`}
										fill
										className="object-cover transition-transform duration-500"
										sizes="(max-width: 768px) 100vw, 50vw"
									/>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
			{divider && dividerPosition === "bottom" && <Divider />}
		</section>
	);
}
