"use client";
import React, { useEffect, useRef, useState } from "react";
import {
	IconButton,
	Menu,
	MenuHandler,
	MenuItem,
	MenuList,
	Typography,
} from "@material-tailwind/react";
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
export default function Navbar() {
	const [scrolling, setScrolling] = useState(false);
	const [openDrawer, setOpenDrawer] = useState(false);
	const pathname = usePathname();
	const [openDropdown, setOpenDropdown] = useState(false);

	const isActive = (href) => pathname === href;

	useEffect(() => {
		const handleScroll = () => {
			setScrolling(window.scrollY > window.innerHeight);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const [isOpen, setIsOpen] = useState(false);
	const timeoutRef = useRef(null);

	const handleMouseEnter = (label) => {
		clearTimeout(timeoutRef.current);
		setOpenDropdown(label);
	};

	const handleMouseLeave = () => {
		timeoutRef.current = setTimeout(() => {
			setOpenDropdown(false);
		}, 150); // delay to allow smooth mouse movement
	};

	useEffect(() => {
		return () => clearTimeout(timeoutRef.current);
	}, []);


	const navList = (
		<ul className="flex flex-col lg:flex-row items-start lg:items-center lg:flex-wrap gap-3 lg:gap-3 text-white uppercase font-medium !text-sm tracking-wide">
			{navItems.map((item, idx) => {
				const hasChildren = item.children && item.children.length > 0;
				const isParentActive =
					isActive(item.href) || item.children?.some((child) => isActive(child.href));

				return (
					<li key={idx} className="relative">
						<div
							onMouseEnter={() => handleMouseEnter(item.label)}
							onMouseLeave={handleMouseLeave}
						>
							<Link
								href={item.href}
								className={`group px-3 py-2 transition block ${isParentActive ? "bg-[#89898933] text-lightgrey" : "bg-[#DDDDDD33] hover:bg-[#DDDDDD33] hover:border-[1px] text-lightgrey border-[#89898933]"
									}`}
							>
								{item.label}
							</Link>

							{/* Dropdown */}
							{hasChildren && openDropdown === item.label && (
								<div className="absolute left-0 mt-1 z-20 shadow-lg w-48">
									{item.children.map((child, i) => (
										<Link key={i} href={child.href}>
											<div
												className={`px-4 py-2 transition cursor-pointer ${isActive(child.href)
													? "bg-[#89898933] text-lightgrey"
													: "bg-[#DDDDDD33] hover:bg-[#DDDDDD33] hover:border-[1px] text-lightgrey border-[#89898933]"
													}`}
											>
												{child.label}
											</div>
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
		<ul className="flex flex-col lg:flex-row items-start lg:items-center lg:flex-wrap gap-[40px] lg:gap-4 text-white uppercase font-medium !text-sm tracking-wide">

			<div className="flex flex-col items-center relative">
				<div className="flex justify-center items-center gap-2">
					<li className="cursor-pointer text-[20px] text-[#2F3435] font-helvetica">
						About Us
					</li>
					<div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
						{isOpen ? <img className="w-[20px]" src="asset/up.png" alt="dropdown icon" /> : <img className="w-[20px]" src="asset/down.png" alt="dropdown icon" />}
					</div>
				</div>

				{isOpen && (
					<div className="absolute top-4 mt-2 left-0 rounded w-[200px] z-10">
						<li>
							<Link
								href="/brand-story"
								className="block px-4 py-2 text-[15px] text-[#2F3435] hover:bg-gray-100 font-helvetica"
							>
								Brand Story
							</Link>
						</li>
					</div>
				)}
			</div>


			{["Door", "Experience Centre", "Contact"].map((item, i) => (
				<li key={i} className="">
					<Link
						href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
						className="cursor-pointer text-[20px] text-[#2F3435] font-helvetica  transition"
					>
						{item}
					</Link>
				</li>
			))}


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
					<Link href="/"
					>
						<div className="lg:w-[60%] xl:w-[70%] w-[50%]">
							<img
								className="w-[250px] "
								src="/asset/navbar/havdorblack.png"
								alt="logo"
							/>
						</div>
					</Link>

					{/* Desktop Menu */}
					<div className="hidden lg:block w-[40%]">{navList}</div>

					{/* Mobile Icon */}
					<div
						variant="text"
						className="text-black lg:hidden w-[50px] h-[50px] flex justify-center items-center"
						onClick={() => setOpenDrawer(true)}
					>
						{/* <svg
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
            </svg> */}
						<img className="w-[28px]" src="/asset/navbar/hamburger.png" alt="" />
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`fixed top-0 right-0 w-screen h-screen bg-[#FFFFFF] z-[9998] px-6 pt-6 transform transition-transform duration-300 ${openDrawer ? "translate-x-0" : "translate-x-full"
					}`}
			>
				<div className="flex justify-end items-center mb-4">
					{/* <Typography variant="h5" className="text-white">
            Menu
          </Typography> */}
					<div
						variant="text"
						className="text-white"
						onClick={() => setOpenDrawer(false)}
					>
						{/* <svg
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
            </svg> */}
						<img className="w-[28px]" src="/asset/navbar/cancel.png" alt="" />
					</div>
				</div>
				{navListMobile}
				<div className="mt-5">
					<ul className="flex flex-col justify-start items-start gap-[15px]">
						<li className="cursor-pointer text-[14px] text-[#2F3435] font-light font-helvetica uppercase">FAQS</li>
						<li className="cursor-pointer text-[14px] text-[#2F3435] font-light font-helvetica uppercase">Testimonials</li>
						<li className="cursor-pointer text-[14px] text-[#2F3435] font-light font-helvetica uppercase">We work with</li>
						<li className="cursor-pointer text-[14px] text-[#2F3435] font-light font-helvetica uppercase">Send Inquiry</li>
						<li className="cursor-pointer text-[14px] text-[#2F3435] font-light font-helvetica uppercase">Book your visit</li>
					</ul>
				</div>
				<div className="flex justify-start item-center gap-5 mt-5">
					<Link href="">
						<img className="w-[24px]" src="/asset/navbar/Facebook.png" alt="" />
					</Link>
					<Link href="">
						<img className="w-[24px]" src="/asset/navbar/Instagram.png" alt="" />
					</Link>
					<Link href="">
						<img className="w-[24px]" src="/asset/navbar/Linkedin.png" alt="" />
					</Link>
				</div>
				<div className="flex justify-center item-center">
					<img className="w-screen h-[134px]" src="/asset/navbar/havdorblack.png" alt="" />
				</div>
			</div>
		</div>
	);
}
