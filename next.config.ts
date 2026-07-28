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
							"script-src 'self' 'unsafe-inline' 'unsafe-eval' https://src.litix.io",
							"style-src 'self' 'unsafe-inline'",
							"img-src 'self' https://image.mux.com https://*.litix.io data:",
							"media-src 'self' blob: https://*.mux.com",
							"connect-src 'self' https://*.mux.com https://*.litix.io https://storage.googleapis.com",
							"worker-src 'self' blob:",
							"frame-src 'self' https://player.mux.com",
						].join("; "),
					},
				],
			},
		];
	},
};

export default nextConfig;