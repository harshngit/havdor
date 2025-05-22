"use client"
import React from 'react'
import { IoMdArrowRoundUp } from 'react-icons/io'
import { PiLinkedinLogo } from "react-icons/pi";
import { PiInstagramLogo } from "react-icons/pi";
import { PiYoutubeLogo } from "react-icons/pi";
import Link from "next/link"
import Image from 'next/image';
const Footer = () => {
    return (
        <footer className="bg-[#2b2f2f] text-white pl-10 py-10 relative overflow-hidden">
            <div className='flex w-full justify-between items-start'>
                <div className="w-[100%] flex flex-col md:flex-row justify-start gap-10 z-10">
                    {/* Column 1 */}
                    <div className="flex lg:w-[30%] justify-between gap-5 items-start flex-col">
                        <ul className="space-y-4 lg:text-[36px] text-[26px]">
                            <li>
                                <Link href="/about">About Us</Link>
                            </li>
                            <li>Doors</li>
                            <li>Experience Centre</li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                        <div className="flex gap-4 pt-4">
                            <Link href="">
                                <img className="w-[24px]" src="/asset/footer/Facebookp.png" alt="" />
                            </Link>
                            <Link href="">
                                <img className="w-[24px]" src="/asset/footer/Instagramp.png" alt="" />
                            </Link>
                            <Link href="">
                                <img className="w-[24px]" src="/asset/footer/Linkedinp.png" alt="" />
                            </Link>
                        </div>
                        <div className='flex justify-start items-end mt-[116px]'>
                            <p className='text-[#ACACAC] font-helvetica text-[20px]'>All rights reserved</p>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className='flex lg:w-[20%] justify-between gap-5 items-start flex-col'>
                        <div className="space-y-4 font-thin lg:text-[20px] text-[18px]">
                            <p>FAQS</p>
                            <p>TESTIMONIALS</p>
                            <p>WE WORK WITH</p>
                            <p>SEND INQUIRY</p>
                            <p>BOOK YOUR VISIT</p>
                        </div>
                        <div className='flex justify-start items-end mt-[116px]'>
                            <p className='text-[#ACACAC] font-helvetica text-[20px]'>Terms & Conditions</p>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex lg:w-[20%] items-start flex-col gap-[30px] ">
                        <h3 className="uppercase font-semibold lg:text-[24px] text-[18px]">Get in touch</h3>
                        <div className=' font-helvetica'>
                            <p className="uppercase text-[20px] text-[#FFF1EA]">Call us</p>
                            <p className="text-[#FFF1EA] text-[24px]">Text here</p>
                        </div>
                        <div className=' font-helvetica'>
                            <p className="uppercase text-[20px] text-[#FFF1EA]">Email us</p>
                            <p className="text-[#FFF1EA] text-[24px]">Text here</p>
                        </div>
                        <div className=' font-helvetica'>
                            <p className="uppercase text-[20px] text-[#FFF1EA]">Visit us</p>
                            <p className="text-[#FFF1EA] text-[24px]">xxxxxxxxxxx<br />xxxxxxx</p>
                        </div>
                        <div className='flex justify-start items-end mt-[116px]'>
                            <p className='text-[#ACACAC] font-helvetica text-[20px]'>Privacy Policy</p>
                        </div>
                    </div>
                    <div className="w-[20%] flex justify-end">
                        <img className='lg:w-[20%] h-[532px]' src="/asset/footer/footernav.png" alt="" />
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer