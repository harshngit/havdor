import AboutBanner from '@/components/About/AboutBanner'
import AccordionAbout from '@/components/About/AccordionAbout'
import DefineSec from '@/components/About/DefineSec'
import KeyPoints from '@/components/About/KeyPoints'
import MissionVission from '@/components/About/MissionVission'
import AboutHome2 from '@/components/Home/AboutHome2'
import Reviews from '@/components/Home/Reviews'
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import Navbar from '@/components/Layout/NavbarWhite'
import React from 'react'

const About = () => {
	return (
		<div className='relative'>
			<Navbar />
			<AboutBanner />
			<MissionVission />
			<DefineSec />
			<KeyPoints />
			<AboutHome2 />
			<Footer />
		</div>
	)
}

export default About