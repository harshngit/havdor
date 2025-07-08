"use client"
import React from 'react'
import { IoMdArrowRoundUp } from 'react-icons/io'
import { PiLinkedinLogo } from "react-icons/pi";
import { PiInstagramLogo } from "react-icons/pi";
import { PiYoutubeLogo } from "react-icons/pi";
import Link from "next/link"
import Image from 'next/image';
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
const Footer = () => {
    return (
        <footer className="bg-[#2b2f2f] text-[#FFF1EA] pl-[15px] py-10 lg:h-[627px] h-auto relative overflow-hidden">
            <div className='flex w-full justify-between items-start'>
                <div className="w-[100%] flex flex-col md:flex-row justify-start gap-10 z-10">
                    {/* Column 1 */}
                    <div className="flex lg:w-[30%] justify-between gap-5 items-start flex-col">
                        <ul className="space-y-4 lg:text-[36px] font-normal  text-[26px]">
                            <li className='hover:text-[#CA622A] transition-colors duration-300 ease-in-out'>
                                <Link href="/about">About Us</Link>
                            </li>
                            <li className='hover:text-[#CA622A] transition-colors duration-300 ease-in-out'>
                                <Link href={"/door"} >Door</Link>
                            </li>
                            <li className='hover:text-[#CA622A] transition-colors duration-300 ease-in-out'>
                                <Link href="/experience-centre">X'perience Centre</Link>
                            </li>
                            <li className='hover:text-[#CA622A] transition-colors duration-300 ease-in-out'><Link href="/contact">Contact</Link></li>
                        </ul>
                        <div className="lg:flex hidden gap-[30px] pt-4">
                            <Link href="https://www.facebook.com/share/1Ejfnddk9n/?mibextid=wwXIfr" target='_blank'>
                                {/* <img className="w-[24px]" src="/asset/footer/Facebookp.png" alt="" /> */}
                                <IoLogoFacebook className='text-[30px] hover:text-primary' />
                            </Link>
                            <Link href="https://www.instagram.com/havdorindia?igsh=MXF4YWZ4dmVuYTFsbg==" target='_blank'>
                                {/* <img className="w-[24px]" src="/asset/footer/Instagramp.png" alt="" /> */}
                                <FaInstagram className='text-[28px] hover:text-primary' />
                            </Link>
                            <Link href="https://www.linkedin.com/company/hav-dor-india/" target='_blank'>
                                <FaLinkedin className='text-[28px] hover:text-primary' />
                            </Link>
                        </div>
                        <div className='lg:flex hidden justify-start items-end mt-[116px]'>
                            <p className='text-[#ACACAC] font-helvetica font-light text-[20px]'>All rights reserved</p>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className='flex lg:w-[20%] justify-between gap-5 items-start flex-col'>
                        <div className="flex justify-start items-start gap-[20px] flex-col font-light lg:text-[20px] text-[18px]">
                            <Link href="contact/#FAQ">
                                <p className='hover:text-primary cursor-pointer'>FAQS</p>
                            </Link>
                            <Link href="/#testimonials">
                                <p className='hover:text-primary cursor-pointer'>TESTIMONIALS</p>
                            </Link>
                            <Link href="/#we-work-with">
                                <p className='hover:text-primary cursor-pointer'>WE WORK WITH</p>
                            </Link>
                            <Link href="/#send-inquiry">
                                <p className='hover:text-primary cursor-pointer'>REQUEST CONSULTATION</p>
                            </Link>
                            <Link href="/#send-inquiry">
                                <p className='hover:text-primary cursor-pointer'>BOOK YOUR VISIT</p>
                            </Link>
                        </div>
                        <div className='lg:flex hidden justify-start items-end mt-[116px]'>
                            <p className='text-[#ACACAC] font-helvetica font-light text-[20px]'>Terms & Conditions</p>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex lg:w-[20%] items-start flex-col gap-[30px] ">
                        <h3 className="uppercase font-normal lg:text-[24px] text-[18px]">Get in touch</h3>
                        <div className='font-helvetica'>
                            <p className="uppercase font-light text-[16px] text-[#FFF1EA]">Call us</p>
                            <Link href="tel:+917027029188" target='_blank' className="text-[#FFF1EA] font-light text-[24px] hover:underline">
                                702 702 9188
                            </Link>
                        </div>

                        <div className='font-helvetica'>
                            <p className="uppercase text-[16px] font-light text-[#FFF1EA]">Email us</p>
                            <Link href="mailto:contact@havdor.com" target='_blank' className="text-[#FFF1EA] font-light text-[24px] hover:underline">
                                contact@havdor.com
                            </Link>
                        </div>

                        <div className='font-helvetica'>
                            <p className="uppercase text-[16px] font-thin text-[#FFF1EA]">Visit us</p>
                            <Link href="https://maps.google.com/?q=30.635426,76.760468" target='_blank' className="text-[#FFF1EA] font-light text-[24px] hover:underline">
                                254/255, 3rd floor, MCC-2,<br />
                                Airport Road, Mohali, Punjab
                            </Link>
                        </div>

                        <div className='lg:flex hidden justify-start items-end mt-[116px]'>
                            <Link href="/privacy-policy">
                                <p className='text-[#ACACAC] font-helvetica font-light text-[20px] hover:text-[#CA622A] transition-colors duration-300 ease-in-out'>Privacy Policy</p>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:hidden flex gap-4 pt-4">
                        <Link href="https://www.facebook.com/share/1Ejfnddk9n/?mibextid=wwXIfr" target='_blank'>
                            {/* <img className="w-[24px]" src="/asset/footer/Facebookp.png" alt="" /> */}
                            <IoLogoFacebook className='text-[30px] hover:text-primary' />
                        </Link>
                        <Link href="https://www.instagram.com/havdorindia?igsh=MXF4YWZ4dmVuYTFsbg==" target='_blank'>
                            {/* <img className="w-[24px]" src="/asset/footer/Instagramp.png" alt="" /> */}
                            <FaInstagram className='text-[28px] hover:text-primary' />
                        </Link>
                        <Link href="https://www.linkedin.com/company/hav-dor-india/" target='_blank'>
                            <FaLinkedin className='text-[28px] hover:text-primary' />
                        </Link>
                    </div>
                    <div className="lg:hidden flex lg:w-[30%] justify-between gap-5 items-start flex-col">
                        <ul className="space-y-2 font-300 lg:text-[14px]">
                            <li>
                                All rights reserved
                            </li>
                            <li>Terms & Conditions</li>
                            <li className='hover:text-[#CA622A] transition-colors duration-300 ease-in-out'><Link href="/privacy-policy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div className="w-[30%] absolute right-2 lg:flex hidden justify-end">
                        <img className='lg:w-[20%] h-[35rem]' src="/asset/footer/footernav.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="w-[20%] lg:hidden absolute -right-[10%] top-[4%]">
                <img className='lg:w-[20%] h-[200px]' src="/asset/footer/footernav.png" alt="" />
            </div>

        </footer>
    )
}

export default Footer