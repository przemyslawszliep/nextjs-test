/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
		serverActions: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "static-ourstore.hyperfunctor.com",
			},
		],
	},
	async redirects() {
		return [
			{
				source: "/products",
				destination: "/products/1",
				permanent: true,
			},
			{
				source: "/categories/:categorySlug",
				destination: "/categories/:categorySlug/1",
				permanent: true,
			},
		];
	},
};

const withMDX = require("@next/mdx")();

module.exports = withMDX(nextConfig);
