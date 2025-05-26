"use client"
// import HomeBanner from '@/components/Home/HomeBanner.js'
import NavbarTwo from '../../components/Layout/Navbar.js'
import React from 'react'
import { ThemeProvider } from "@material-tailwind/react";
import BannerHome from '@/components/Home/BannerHome.js'
import AboutHome from '@/components/Home/AboutHome.js'
import IndustriesHome from '@/components/Home/IndustriesHome.js'
import Reviews from '@/components/Home/Reviews.js'
import AboutHome2 from '@/components/Home/AboutHome2.js'
import CTA from '@/components/CTA.js'
import Footer from '@/components/Layout/Footer.js'
import FooterFigma from '@/components/Layout/FooterFigma.js';
const Home = () => {
  return (
    <div className='relative '>
      {/* <ThemeProvider> */}
      <NavbarTwo />
      <BannerHome />
      <AboutHome />
      <IndustriesHome />
      <Reviews />
      <AboutHome2 />
      <CTA />
      <Footer />
      {/* </ThemeProvider> */}
    </div>
  )
}

export default Home