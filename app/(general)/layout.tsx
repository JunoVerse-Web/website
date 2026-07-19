// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./general-pages.css";
import "../globals.css";
import Header from "../components/layout/navigation/header";
import Footer from "../components/layout/navigation/footer";
import Providers from "../providers";
import { Poppins } from "next/font/google";
import clsx from "clsx";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Header dark={false} />
			<html
				lang="en"
				className={clsx(poppins.className)}
			>
				<body className="min-h-full flex flex-col">
					<Providers>{children}</Providers>
				</body>
			</html>
			<Footer />
		</>
	);
}
