import BSBanner from '@/components/About/BrandStory/BSBanner'
import BSGallery from '@/components/About/BrandStory/BSGallery'
import OurTeam from '@/components/About/BrandStory/OurTeam'
import ReviewsBS from '@/components/About/BrandStory/ReviewsBS'
import Reviews from '@/components/Home/Reviews'
import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/NavbarWhite'
import React from 'react'

const BrandStory = () => {
	return (
		<div className='relative'>
			<Navbar />
			<BSBanner />
			<BSGallery />
			<OurTeam />
			<ReviewsBS />
			<Footer />
		</div>
	)
}

export default BrandStory