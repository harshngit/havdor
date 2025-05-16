import BSBanner from '@/components/About/BrandStory/BSBanner'
import BSGallery from '@/components/About/BrandStory/BSGallery'
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
			<Footer />
		</div>
	)
}

export default BrandStory