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