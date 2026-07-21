import { getPage } from "@/lib/content/getPage";
import { HomePage } from "@/types/content";
import { getSeo } from "@/lib/seo/getSeo";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	const page = await getPage("our-philosophy");

	return getSeo(page);
}

export default async function Home() {
	const content: HomePage = await getPage("our-philosophy");

	const { hero } = content;

	return (
		<main className="our-philosophy">
			<section
				data-section="philosophy-hero"
				className="px-[9.38vw] pt-[12vw] pb-[2vw] h-screen"
			>
				<div className="text-center">
					<h1>{hero.title}</h1>
				</div>

				<div className="flex flex-col items-center max-w-[40%] ml-auto">
					<PhilosophyButton title="What does JUNO actually believe?" />
					<PhilosophyButton title="What makes JUNO different?" />
					<PhilosophyButton title="Skip the philosophy. Show me the work." />
				</div>
			</section>
		</main>
	);
}

function PhilosophyButton({ title }: { title: string }) {
	return (
		<div className="border-[1px] border-white rounded-md  w-full flex items-center px-[4.17vw] py-[0.833vw] mb-4">
			<span className="font-light! text-[white] text-[1rem]! md:text-[1.1rem]! lg:text-[1.04vw]! m-0!">{title}</span>
		</div>
	);
}
