"use client"
// import HomeBanner from '@/components/Home/HomeBanner.js'
import NavbarTwo from '../../components/Layout/Navbar.js'
import React from 'react'
import { Suspense } from 'react'
import Head from 'next/head.js'
import { ThemeProvider } from "@material-tailwind/react";
import BannerHome from '@/components/Home/BannerHome.js'
import AboutHome from '@/components/Home/AboutHome.js'
import IndustriesHome from '@/components/Home/IndustriesHome.js'
const Home = () => {
  return (
    <div className='relative'>
      {/* <ThemeProvider> */}
      <NavbarTwo />
      <BannerHome />
      <AboutHome />
      <IndustriesHome />
      {/* <Footer /> */}
      {/* </ThemeProvider> */}
    </div>
  )
}

export default Home