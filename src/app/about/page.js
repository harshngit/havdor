import AboutBanner from '@/components/About/AboutBanner'
import AccordionAbout from '@/components/About/AccordionAbout'
import DefineSec from '@/components/About/DefineSec'
import KeyPoints from '@/components/About/KeyPoints'
import MissionVission from '@/components/About/MissionVission'
import AboutHome2 from '@/components/Home/AboutHome2'
import Reviews from '@/components/Home/Reviews'
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import Navbar from '@/components/Layout/NavbarWhite'
import React from 'react'

export const metadata = {
	title: "Hav'dor - About",
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

const About = () => {
	return (
		<div className='relative'>
			<Navbar />
			<AboutBanner />
			<MissionVission />
			<DefineSec />
			<KeyPoints />
			<AboutHome2 />
			<Footer />
		</div>
	)
}

export default About