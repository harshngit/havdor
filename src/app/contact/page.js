import ContactBanner from '@/components/Contact/ContactBanner'
import Contactcta from '@/components/Contact/Contactcta'
import FAQ from '@/components/Contact/FAQ'
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import NavbarBrandStory from '@/components/Layout/NavbarBrandStory'
import Navbar from '@/components/Layout/NavbarWhite'
import React from 'react'

const Contact = () => {
	return (
		<div>
			<Navbar />
			<ContactBanner />
			<FAQ />
			<Contactcta />
			<Footer />
		</div>
	)
}

export default Contact