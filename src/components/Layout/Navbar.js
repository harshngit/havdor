"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const navItems = [
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Brand Story", href: "/brand-story" },
    ],
  },
  {
    label: "Door",
    href: "/door",
  },
  {
    label: "Experience Centre",
    href: "/experience-centre",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function NavbarTwo() {
  const [scrolling, setScrolling] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const timeoutRef = useRef(null);

  const isActive = (href) => pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const handleMouseEnter = (label) => {
    clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(false);
    }, 150);
  };

  const navList = (
    <ul className="flex flex-col lg:flex-row items-start lg:items-center lg:flex-wrap gap-3 lg:gap-3 text-white font-medium !text-sm tracking-wide">
      {navItems.map((item, idx) => {
        const hasChildren = item.children && item.children.length > 0;
        const isParentActive = isActive(item.href) || item.children?.some((child) => isActive(child.href));
        return (
          <li key={idx} className="relative">
            <div onMouseEnter={() => handleMouseEnter(item.label)} onMouseLeave={handleMouseLeave}>

              {item?.label === "About Us" ? (
                <Link href={item.href} className={`group px-3 py-2 transition flex justify-center items-center gap-[10px] ${isParentActive ? "bg-[#91431A]" : "bg-[#C24E1F] hover:border-[1px] hover:shadow-[inset_0_0_0_1px_#91431A] border-[#91431A]"}`}>
                  {item.label}
                  <img src="/asset/PlusWhite.png" className="w-[12px]" alt="" />
                </Link>
              ) :
                (
                  <Link href={item.href} className={`group px-3 py-2 transition block ${isParentActive ? "bg-[#91431A]" : "bg-[#C24E1F] hover:border-[1px] hover:shadow-[inset_0_0_0_1px_#91431A] border-[#91431A]"}`}>
                    {item.label}
                  </Link>
                )
              }

              {hasChildren && openDropdown === item.label && (
                <div className="absolute left-0 mt-1 z-20 bg-[#C24E1F] w-[150px]">
                  {item.children.map((child, i) => (
                    <Link key={i} href={child.href}>
                      <div className={`px-4 py-2 transition cursor-pointer text-white ${isActive(child.href) ? "bg-[#91431A]" : "hover:shadow-[inset_0_0_0_1px_#91431A] hover:border-[1px] border-[#91431A]"}`}>{child.label}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );

  const navListMobile = (
    <ul className="flex flex-col lg:flex-row items-start lg:items-center lg:flex-wrap gap-[40px] text-white font-medium !text-sm hover:text-primary tracking-wide">
      <div className="flex flex-col items-center relative">
        <div className="flex justify-center items-center gap-1">
          <Link href="/about">
            <li className="cursor-pointer text-[32px] text-[#2F3435] font-helvetica">About Us</li>
          </Link>
        </div>
        {isOpen && (
          <div className="absolute top-4 mt-2 left-0 rounded w-[200px] z-10">
            <li>
              <Link href="/brand-story" className="block px-4 py-2 text-[15px] text-[#2F3435] hover:bg-gray-100 font-helvetica">
                Brand Story
              </Link>
            </li>
          </div>
        )}
      </div>
      {["Door", "Experience Centre", "Contact"].map((item, i) => (
        <li key={i}>
          <Link href={`/${item.toLowerCase().replace(/\s+/g, "-")}`} className="cursor-pointer text-[32px] text-[#2F3435] font-helvetica transition">
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );

  const navListScroll = (
    <ul className="flex flex-col lg:flex-row items-start lg:items-center lg:flex-wrap gap-3 lg:gap-3 text-white font-medium !text-sm tracking-wide">
      {navItems.map((item, idx) => {
        const hasChildren = item.children && item.children.length > 0;
        const isParentActive = isActive(item.href) || item.children?.some((child) => isActive(child.href));
        return (
          <li key={idx} className="relative">
            <div onMouseEnter={() => handleMouseEnter(item.label)} onMouseLeave={handleMouseLeave}>
              {item.label === "About Us" ? (
                <Link href={item.href} className={`group px-3 py-2 gap-[10px] transition flex justify-center items-center ${isParentActive ? "bg-[#89898933] text-lightgrey" : "bg-[#DDDDDD33] hover:bg-[#DDDDDD33] hover:border-[1px] text-lightgrey border-[#89898933]"}`}>
                  {item.label}
                  <img src="/asset/PlusNavbar.png" className="w-[10px]" alt="" />
                </Link>
              )
                : (
                  <Link href={item.href} className={`group px-3 py-2 transition block ${isParentActive ? "bg-[#89898933] text-lightgrey" : "bg-[#DDDDDD33] hover:bg-[#DDDDDD33] hover:border-[1px] text-lightgrey border-[#89898933]"}`}>
                    {item.label}
                  </Link>
                )
              }
              {hasChildren && openDropdown === item.label && (
                <div className="absolute left-0 mt-1 z-20 w-[140px]">
                  {item.children.map((child, i) => (
                    <Link key={i} href={child.href}>
                      <div className={`px-4 py-2 transition cursor-pointer ${isActive(child.href) ? "bg-[#89898933] text-lightgrey" : "bg-[#DDDDDD33] hover:bg-[#DDDDDD33] hover:border-[1px] text-lightgrey border-[#89898933]"}`}>{child.label}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="fixed top-0 left-0 w-screen z-[9999]">
      <div className={`w-full px-4 lg:px-0 py-4 lg:py-0 transition-all duration-300 ${scrolling ? "!backdrop-blur-3xl bg-[#EEEEEE66]" : ""}`}>
        <div className={`w-full ${scrolling ? "lg:pt-[3%] lg:pl-[3%] lg:pb-[3%]" : "lg:pt-[3%] lg:pl-[3%] lg:pb-[2%]"} flex items-center justify-between`}>
          <Link href="/">
            <div className="lg:w-[60%] xl:w-[70%] w-[50%]">
              <img className="w-[250px]" src={scrolling ? "/asset/navbar/blacklogo.png" : "/asset/navbar/whitelogo.png"} alt="logo" />
            </div>
          </Link>
          <div className="hidden lg:block w-[40%]">{scrolling ? navListScroll : navList}</div>
          <div className="text-black lg:hidden w-[50px] h-[50px] flex justify-center items-center" onClick={() => setOpenDrawer(true)}>
            <img className="w-[28px]" src="/asset/navbar/hamburger.png" alt="menu" />
          </div>
        </div>
      </div>

      <div className={`fixed top-0 right-0 w-screen h-screen bg-[#FFFFFF] z-[9998] pt-6 transform transition-transform duration-700 ${openDrawer ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-end items-center mb-4 px-6">
          <div className="text-white" onClick={() => setOpenDrawer(false)}>
            <img className="w-[28px]" src="/asset/navbar/cancel.png" alt="close" />
          </div>
        </div>
        <div className="px-6">{navListMobile}</div>
        <div className="mt-5 px-6">
          <ul className="flex flex-col justify-start items-start gap-[15px]">
            <Link href="/contact/#FAQ"><li className="cursor-pointer text-[14px] text-[#2F3435] font-light font-helvetica uppercase">FAQS</li></Link>
            <Link href="/#testimonials"><li className="cursor-pointer text-[14px] text-[#2F3435] font-light font-helvetica uppercase">Testimonials</li></Link>
            <Link href="/#we-work-with"><li className="cursor-pointer text-[14px] text-[#2F3435] font-light font-helvetica uppercase">We work with</li></Link>
            <Link href="/#send-inquiry"><li className="cursor-pointer text-[14px] text-[#2F3435] font-light font-helvetica uppercase">Send Inquiry</li></Link>
            <Link href="/#send-inquiry"><li className="cursor-pointer text-[14px] text-[#2F3435] font-light font-helvetica uppercase">Book your visit</li></Link>
          </ul>
        </div>
        <div className="flex justify-start items-center gap-5 mt-5 px-6">
          {['Facebook', 'Instagram', 'Linkedin'].map((social, i) => (
            <Link key={i} href="">
              <img className="w-[24px]" src={`/asset/navbar/${social}.png`} alt={social} />
            </Link>
          ))}
        </div>
        <div className="flex w-full absolute bottom-0 justify-end items-end">
          <img className="w-full h-[72.5px]" src="/asset/navbar/blacklogo.png" alt="logo bottom" />
        </div>
      </div>
    </div>
  );
}
