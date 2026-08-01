import { PortfolioPage } from "@/types/content";

export default function SmallDescriptionSection({ className, content }: { className?: string; content: PortfolioPage["smallDescriptionSection"] }) {
	return (
		<section className={className}>
			<div className="grid grid-cols-10 items-start max-[480px]:max-w-full max-[767px]:max-w-[80%] max-w-[50%] px-4 md:px-8 lg:px-[2.34vw]">
				<h3
					className="col-start-1 col-end-3 font-semibold text-orange uppercase"
					style={{ fontSize: "clamp(0.65rem, 1.042vw, 1.042vw)" }}
				>
					{content.title}
				</h3>
				<span
					className="col-start-3 min-[768px]:col-end-9 col-end-10 mb-0!"
					style={{ fontSize: "clamp(0.65rem, 1.042vw, 1.042vw)" }}
				>
					{content.description}
				</span>
			</div>
		</section>
	);
}
