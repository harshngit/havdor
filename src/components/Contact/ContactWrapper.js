"use client"

import ConsultationSidebar from '@/components/ConsultationSidebar'
import ContactBanner from '@/components/Contact/ContactBanner'
import Contactcta from '@/components/Contact/Contactcta'
import FAQ from '@/components/Contact/FAQ'
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import NavbarBrandStory from '@/components/Layout/NavbarBrandStory'
import Navbar from '@/components/Layout/NavbarWhite'
import React, { useState } from 'react'

const Contact = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	return (
		<>
			<ConsultationSidebar open={isSidebarOpen} setOpen={setIsSidebarOpen} />
			<div className='overflow-hidden'>
				<Navbar />
				<ContactBanner />
				<FAQ />
				<Contactcta onOpenSidebar={() => setIsSidebarOpen(true)} />
				<Footer />
			</div>
		</>
	)
}

export default Contact