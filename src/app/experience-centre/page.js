import CTA from '@/components/CTA'
import BannerEC from '@/components/Experience_Center/BannerEC'
import ExperienceCenterGallery from '@/components/Experience_Center/ExperienceCenterGallery'
import VideoSection from '@/components/Experience_Center/VideoSection'
import Footer from '@/components/Layout/Footer'
import NavbarBrandStory from '@/components/Layout/NavbarBrandStory'
import Navbar from '@/components/Layout/NavbarWhite'
import React from 'react'

const ExperienceCenter = () => {
	return (
		<div>
			<Navbar />
			<BannerEC />
			<ExperienceCenterGallery />
			<VideoSection />
			<CTA />
			<Footer />
		</div>
	)
}

export default ExperienceCenter