"use client"

import ConsultationSidebar from '@/components/ConsultationSidebar'
import BenefitsSection from '@/components/Door/BenefitsSection'
import DoorBanner from '@/components/Door/DoorBanner'
import DoorMain from '@/components/Door/DoorMain'
import ExtraProduct from '@/components/Door/ExtraProduct'
import Footer from '@/components/Layout/Footer'
import NavbarBrandStory from '@/components/Layout/NavbarBrandStory'
import Navbar from '@/components/Layout/NavbarWhite'
import React, { useState } from 'react'



const Door = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	return (
		<>
			<ConsultationSidebar open={isSidebarOpen} setOpen={setIsSidebarOpen} />
			<div className='overflow-hidden'>
				<NavbarBrandStory />
				<DoorBanner />
				<DoorMain onOpenSidebar={() => setIsSidebarOpen(true)} />
				<ExtraProduct />
				<BenefitsSection />
				<Footer />
			</div>
		</>
	)
}

export default Door