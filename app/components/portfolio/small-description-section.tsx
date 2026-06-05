import { PortfolioPage } from "@/types/content";

export default function SmallDescriptionSection({ className, content }: { className?: string; content: PortfolioPage["smallDescriptionSection"] }) {
	return (
		<section className={className}>
			<div className="grid grid-cols-10 items-start max-w-[50%] px-4 md:px-8 lg:px-[2.34vw]">
				<h3 className="col-start-1 col-end-3 font-semibold text-orange uppercase text-sm! md:text-[0.83vw]!">{content.title}</h3>
				<span className="col-start-3 col-end-9 mb-0! text-[1.15vw]!">{content.description}</span>
			</div>
		</section>
	);
}
