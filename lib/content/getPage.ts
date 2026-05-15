import fs from "fs/promises";
import path from "path";

export async function getPage(slug: string) {
	const filePath = path.join(process.cwd(), "./content/pages", `${slug}.json`);

	const file = await fs.readFile(filePath, "utf-8");

	return JSON.parse(file);
}
