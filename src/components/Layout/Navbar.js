"use client";
import React, { useEffect, useState } from "react";
import {
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";

export default function NavbarTwo() {
  const [scrolling, setScrolling] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navList = (
    <ul className="flex flex-col lg:flex-row items-start lg:items-center lg:flex-wrap gap-3 lg:gap-4 text-white uppercase font-medium !text-sm tracking-wide">
      <Menu>
        <MenuHandler>
          <li className="cursor-pointer px-3 py-2 bg-[#C24E1F] hover:bg-[#a7411a] transition">
            About Us
          </li>
        </MenuHandler>
      </Menu>

      {["Door", "Experience Centre", "Contact"].map((item, i) => (
        <li key={i}>
          <Link
            href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="px-3 py-2 bg-[#C24E1F] hover:bg-[#a7411a] transition"
          >
            {item}
          </Link>
        </li>
      ))}

      <li>
        <Link
          href="/brand-story"
          className="px-3 py-2 bg-[#C24E1F] hover:bg-[#913c18] transition"
        >
          Brand Story
        </Link>
      </li>
    </ul>
  );

  return (
    <div className="fixed top-0 left-0 w-screen z-[9999]">
      <div
        className={`w-full px-4 lg:px-0 py-4 lg:py-0 transition-all duration-300 ${scrolling ? "!backdrop-blur-3xl " : ""
          }`}
      >
        <div className="w-full lg:pt-[10px] lg:pl-[35px] lg:pb-[20px] flex items-center justify-between">
          {/* Logo */}
          <div className="lg:w-[60%] xl:w-[70%] w-full">
            <img
              className="lg:w-[150px] w-[10px] lg:block hidden"
              src="/asset/navbar/havdorwhitelogo.png"
              alt="logo"
            />
            <img
              className="w-[100px] lg:hidden block"
              src="/asset/navbar/havdorblack.png"
              alt="logo"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block w-[40%]">{navList}</div>

          {/* Mobile Icon */}
          <IconButton
            variant="text"
            className="text-black lg:hidden"
            onClick={() => setOpenDrawer(true)}
          >
            <svg
              className="h-6 pt-0 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </IconButton>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-screen h-screen bg-[#C24E1F] z-[9998] px-6 pt-6 transform transition-transform duration-300 ${openDrawer ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center mb-4">
          <Typography variant="h5" className="text-white">
            Menu
          </Typography>
          <IconButton
            variant="text"
            className="text-white"
            onClick={() => setOpenDrawer(false)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
      </div>
    </div>
  );
}
