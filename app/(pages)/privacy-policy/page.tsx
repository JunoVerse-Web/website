import { getPage } from "@/lib/content/getPage";
// import { HomePage } from "@/types/content";
import { getSeo } from "@/lib/seo/getSeo";
import type { Metadata } from "next";


// export async function generateMetadata(): Promise<Metadata> {
// 	const page = await getPage("privacy-policy");

// 	return getSeo(page);
// }

export default async function Home() {
	// const content: HomePage = await getPage("privacy-policy");

	return (
		<main className="privacy-policy">
			
		</main>
	);
}
