import type { Metadata, Viewport } from "next";
import "@/app/styles/globals.css";

export const metadata: Metadata = {
	metadataBase: new URL("https://farhankhan.dev"),
	title: "Farhan Khan | Full-Stack Web Developer & Gen AI Specialist",
	description:
		"Interactive 3D Portfolio of Farhan Khan - Full-Stack Developer specializing in React.js, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, and Generative AI SaaS applications.",
	keywords: [
		"Farhan Khan",
		"Full-Stack Developer",
		"Gen AI Developer",
		"React Developer",
		"Next.js Developer",
		"Web Developer Portfolio",
		"JavaScript Engineer",
		"Software Engineer",
	],
	authors: [{ name: "Farhan Khan", url: "https://github.com/lestrofarhan" }],
	creator: "Farhan Khan",
	publisher: "Farhan Khan",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		title: "Farhan Khan | Full-Stack Web Developer & Gen AI Specialist",
		description:
			"Explore the interactive 3D portfolio of Farhan Khan featuring Next.js, React, Node.js, and Gen AI applications.",
		url: "https://farhankhan.dev",
		siteName: "Farhan Khan Portfolio",
		images: [
			{
				url: "/logo.png",
				width: 1200,
				height: 630,
				alt: "Farhan Khan - Full-Stack Developer & Gen AI Specialist",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Farhan Khan | Full-Stack Web Developer & Gen AI Specialist",
		description:
			"Interactive 3D Portfolio of Farhan Khan - Full-Stack Developer & Gen AI Specialist.",
		images: ["/logo.png"],
	},
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
	},
};

export const viewport: Viewport = {
	themeColor: "#050816",
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Person",
				"@id": "https://farhankhan.dev/#person",
				name: "Farhan Khan",
				jobTitle: "Full-Stack Web Developer & Gen AI Specialist",
				description:
					"Full-Stack Web Developer specializing in React.js, Next.js, Node.js, Express.js, MongoDB, and Generative AI SaaS applications.",
				url: "https://farhankhan.dev",
				sameAs: ["https://github.com/lestrofarhan"],
			},
			{
				"@type": "WebSite",
				"@id": "https://farhankhan.dev/#website",
				url: "https://farhankhan.dev",
				name: "Farhan Khan Portfolio",
				description:
					"Interactive 3D Portfolio of Farhan Khan - Full-Stack & Gen AI Engineer",
			},
		],
	};

	return (
		<html lang="en" className="scroll-smooth">
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body className="font-sans antialiased bg-primary text-white selection:bg-purple-600 selection:text-white">
				{children}
			</body>
		</html>
	);
}

