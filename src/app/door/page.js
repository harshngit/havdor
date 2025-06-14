import DoorBanner from '@/components/Door/DoorBanner'
import DoorMain from '@/components/Door/DoorMain'
import Footer from '@/components/Layout/Footer'
import NavbarBrandStory from '@/components/Layout/NavbarBrandStory'
import Navbar from '@/components/Layout/NavbarWhite'
import React from 'react'

const Door = () => {
	return (
		<div className='overflow-hidden'>
			<NavbarBrandStory />
			<DoorBanner />
			<DoorMain />
			<Footer />
		</div>
	)
}

export default Door