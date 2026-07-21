import { Poppins } from "next/font/google";
import Header from "./navigation/header";
import Footer from "./navigation/footer";
import Providers from "../../providers";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

type DarkLayoutProps = {
	children: React.ReactNode;
	headerDark?: boolean; // Control header dark mode
};

export default function DarkLayout({
	children,
	headerDark = true, // default to dark
}: DarkLayoutProps) {
	return (
		<>
			<Header dark={headerDark} />
			<Providers>{children}</Providers>
			<Footer />
		</>
	);
}
