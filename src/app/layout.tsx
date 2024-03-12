import type { Metadata } from "next";
import "./globals.css";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const metadata: Metadata = {
	title: "Next.js Moja pierwsza strona",
	description: "Bardzo fajny opis nowej stronki na Next.js",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl">
			<body className="bg-slate-100">
				<main>
					<nav role="navigation" className="flex justify-center gap-2 py-6">
						<ActiveLink
							exact={false}
							aria-description="Home"
							href={"/"}
						>
							<span className="text-blue-300">Home</span>
						</ActiveLink>
						<ActiveLink
							exact={false}
							aria-description="All"
							href={"/products"}
						>
							<span className="text-blue-300">All</span>
						</ActiveLink>
					</nav>
					<section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center">
						{children}
					</section>
					<footer className="mt-8 text-center text-sm text-orange-500">
						<p>
							© {new Date().getFullYear()}{" "}
							<a href="https://www.example.com">Moja firma</a>
						</p>
					</footer>
				</main>
			</body>
		</html>
	);
}
