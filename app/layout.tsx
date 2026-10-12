import type { Metadata, Viewport } from "next";
import { Poppins as FontSans } from "next/font/google";
import "@/app/styles/globals.css";

const fontSans = FontSans({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-sans",
});

export const viewport: Viewport = {
	themeColor: "#050816",
	width: "device-width",
	initialScale: 1,
};

export const metadata: Metadata = {
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_SITE_URL || "https://faisal-khan-dev.vercel.app",
	),
	title: "Faisal Khan | Full-Stack Web Developer Portfolio",
	description:
		"Explore the portfolio of Faisal Khan, a Full-Stack Web Developer and Software Engineer specializing in React, Next.js, TypeScript, Node.js, and interactive 3D web experiences.",
	keywords: [
		"Faisal Khan",
		"Full-Stack Developer",
		"Web Developer Portfolio",
		"React.js Developer",
		"Next.js Developer",
		"MERN Stack Developer",
		"Three.js Portfolio",
		"Software Engineer",
	],
	authors: [{ name: "Faisal Khan", url: "https://github.com/Faisal-Khan-dev" }],
	creator: "Faisal Khan",
	icons: {
		icon: "/logo.png",
	},
	openGraph: {
		title: "Faisal Khan | Full-Stack Web Developer Portfolio",
		description:
			"Explore modern web applications, full-stack projects, and interactive 3D experiences built by Faisal Khan.",
		siteName: "Faisal Khan Portfolio",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "/logo.png",
				width: 512,
				height: 512,
				alt: "Faisal Khan Portfolio",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Faisal Khan | Full-Stack Web Developer Portfolio",
		description:
			"Explore modern web applications, full-stack projects, and interactive 3D experiences built by Faisal Khan.",
		images: ["/logo.png"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={fontSans.variable}>{children}</body>
		</html>
	);
}
