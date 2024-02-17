import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
			<body className={inter.className}>
				<main>
					<section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center">
						{children}
					</section>
					<footer className="text-center text-sm text-orange-500">
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
