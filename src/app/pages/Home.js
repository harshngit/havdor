"use client"
// import HomeBanner from '@/components/Home/HomeBanner.js'
import NavbarTwo from '../../components/Layout/Navbar.js'
import React, { useState } from 'react'
import { ThemeProvider } from "@material-tailwind/react";
import BannerHome from '@/components/Home/BannerHome.js'
import AboutHome from '@/components/Home/AboutHome.js'
import IndustriesHome from '@/components/Home/IndustriesHome.js'
import Reviews from '@/components/Home/Reviews.js'
import AboutHome2 from '@/components/Home/AboutHome2.js'
import CTA from '@/components/CTA.js'
import Footer from '@/components/Layout/Footer.js'
import FooterFigma from '@/components/Layout/FooterFigma.js';
import SiderBar from '@/components/SiderBar.js';
import ConsultationSidebar from '@/components/ConsultationSidebar.js';
const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <ConsultationSidebar open={isSidebarOpen} setOpen={setIsSidebarOpen} />
      <div className=' overflow-hidden'>
        {/* <ThemeProvider> */}
        <NavbarTwo />
        <BannerHome onOpenSidebar={() => setIsSidebarOpen(true)} />
        <AboutHome />
        <IndustriesHome />
        <Reviews />
        <AboutHome2 />
        <CTA onOpenSidebar={() => setIsSidebarOpen(true)} />
        <Footer />
        {/* </ThemeProvider> */}
      </div>
    </>
  )
}

export default Home