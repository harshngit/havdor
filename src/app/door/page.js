export const metadata = {
	title: "Hav'dor - Door",
	description: "Experience precision-engineered doors with durability, aesthetics, and performance.",
	keywords: [
		"Hav'dor",
		"Premium Doors",
		"Designer Doors",
		"Moisture Resistant Doors",
		"Termite Proof Doors",
		"Luxury Door Manufacturer"
	],
	openGraph: {
		title: "Hav'dor | Premium & Durable Designer Doors",
		description:
			"Every Hav'dor door is engineered for lasting strength, sound insulation, and contemporary aesthetics. Discover the modern standard in door technology.",
		url: "https://havdor.com/",
		siteName: "Hav'dor",
		images: [
			{
				url: "/asset/favicon.png",
				width: 800,
				height: 600,
				alt: "Hav'dor Doors",
			},
		],
		type: "website",
	},
	alternates: {
		canonical: "https://havdor.com/",
	},
	icons: {
		icon: "/asset/favicon.png",
		shortcut: "/asset/favicon.png",
		apple: "/asset/favicon.png",
		other: {
			rel: "apple-touch-icon-precomposed",
			url: "/asset/favicon.png",
		},
	},
};

import Door from '@/components/Door/DoorWrapper';

export default function ExperienceCenterPage() {
	return <Door />;
}