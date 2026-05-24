import { getPage } from "@/lib/content/getPage";
import { getSeo } from "@/lib/seo/getSeo";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	const page = await getPage("home");

	return getSeo(page);
}

export default async function AboutPage() {

	return (
		<main className="homepage">
			
		</main>
	);
}
