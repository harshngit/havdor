import AboutBanner from '@/components/About/AboutBanner'
import AccordionAbout from '@/components/About/AccordionAbout'
import DefineSec from '@/components/About/DefineSec'
import KeyPoints from '@/components/About/KeyPoints'
import AboutHome2 from '@/components/Home/AboutHome2'
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import React from 'react'

const About = () => {
	return (
		<div className='relative'>
			{/* <ThemeProvider> */}
			<NavbarTwo />
			<AboutBanner />
			<DefineSec />
			<KeyPoints />
			<AboutHome2 />

			<Footer />
			{/* </ThemeProvider> */}
		</div>
	)
}

export default About