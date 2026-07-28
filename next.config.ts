import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	images: {
		qualities: [70, 75],
	},
	async headers() {
		return [
			{
				source: "/:path*",
				headers: [
					{
						key: "Content-Security-Policy",
						value: [
							"default-src 'self'",
							"script-src 'self' 'unsafe-inline' 'unsafe-eval'",
							"style-src 'self' 'unsafe-inline'",
							"img-src 'self' https://image.mux.com data:",
							"media-src 'self' https://stream.mux.com",
							"connect-src 'self' https://stream.mux.com https://inferred.litix.io",
							"frame-src 'self' https://player.mux.com",
						].join("; "),
					},
				],
			},
		];
	},
};

export default nextConfig;