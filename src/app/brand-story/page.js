import BSBanner from '@/components/About/BrandStory/BSBanner'
import BSGallery from '@/components/About/BrandStory/BSGallery'
import OurTeam from '@/components/About/BrandStory/OurTeam'
import ReviewsBS from '@/components/About/BrandStory/ReviewsBS'
import AboutHome2 from '@/components/Home/AboutHome2'
import Reviews from '@/components/Home/Reviews'
import Footer from '@/components/Layout/Footer'
import NavbarBrandStory from '@/components/Layout/NavbarBrandStory'
import Navbar from '@/components/Layout/NavbarWhite'
import React from 'react'

export const metadata = {
	title: "Hav'dor - Brand Story",
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

const BrandStory = () => {
	return (
		<div className='relative overflow-hidden'>
			<NavbarBrandStory />
			<BSBanner />
			<BSGallery />
			<OurTeam />
			<Reviews />
			{/* <AboutHome2 /> */}
			<Footer />
		</div>
	)
}

export default BrandStory