"use client";
import React, { useEffect, useState } from "react";

const DoorTapBar = ({ resetFilters, openCategory, setOpenCategory, openType, setOpenType, selectedCategory, setSelectedCategory, selectedType, setSelectedType, optionsCategory, optionsType, optionsTypeMansion, filteredDoors }) => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return (
		<div className={`font-helvetica py-4 px-[40px] flex flex-wrap justify-between items-center border-b border-gray-300 z-50 transition-all duration-300 sticky left-0 right-0  ${isScrolled ? " backdrop-blur-sm" : "bg-[#fef8f4]"
			}`}>
			{/* Left filters */}
			<div className="flex flex-wrap justify-center items-center lg:gap-[62px] gap-[30px]">
				<div className="flex flex-wrap items-center gap-[30px]">
					<div className="relative lg:w-[200px] w-full font-helvetica">
						<div
							className="flex items-center justify-between px-[15px] py-[15px] bg-[#DDDDDD33] backdrop-blur-sm cursor-pointer gap-[10px]"
							onClick={() => setOpenCategory(!openCategory)}
						>
							<span className="text-[18px] font-helvetica font-light text-black">Door Category</span>
							{openCategory ? <img src="/asset/down.png" className=" rotate-180" alt="" /> : <img src="/asset/down.png" alt="" />}
						</div>

						{openCategory && (
							<div className="absolute top-[110%] w-full bg-[#DDDDDD33] shadow z-10">
								{optionsCategory.map((option, idx) => (
									<div
										key={option}
										className={`px-[15px] py-[15px]  font-helvetica font-normal text-[15px] cursor-pointer transition-all duration-500 ease-in-out ${option === selectedCategory
											? "text-[#C14B1A] border-b-2 border-[#C14B1A] font-light"
											: "text-[#2F3435] border-b-2 border-lightgrey hover:bg-[#DDDDDD66]"
											}`}
										onClick={() => {
											setSelectedCategory(option);
											setOpenCategory(false);
										}}
									>
										{option}
									</div>
								))}
							</div>
						)}
					</div>
					{/*  */}
					<div className="relative lg:w-[250px] w-full  font-helvetica">
						<div
							className="flex items-center justify-between px-[15px] py-[15px] bg-[#DDDDDD33] backdrop-blur-sm cursor-pointer gap-[10px]"
							onClick={() => setOpenType(!openType)}
						>
							{selectedCategory === "Premium" ? <span className="text-[18px] font-helvetica font-light text-black">
								Premium Door Type
							</span> : <span className="text-[18px] font-helvetica font-light text-black">
								Mansion Door Type
							</span>}
							<img
								src="/asset/down.png"
								className={`${openType ? "rotate-180" : ""}`}
								alt=""
							/>
						</div>

						{openType && (
							<div className="absolute top-[110%] w-full bg-[#DDDDDD33] shadow z-10">
								{(selectedCategory === "Premium" ? optionsType : optionsTypeMansion).map(
									(option, idx) => (
										<div
											key={option}
											className={`px-[15px] py-[15px] font-helvetica font-normal text-[15px] cursor-pointer transition-all duration-500 ease-in-out ${option === selectedType
												? "text-[#C14B1A] border-b-2 border-[#C14B1A] font-light"
												: "text-[#2F3435] border-b-2 border-lightgrey hover:bg-[#DDDDDD66]"
												}`}
											onClick={() => {
												setSelectedType(option);
												setOpenType(false);
											}}
										>
											{option}
										</div>
									)
								)}
							</div>
						)}
					</div>
					{/*  */}
				</div>
				<div className="flex justify-start items-start lg:mb-0 mb-5 gap-[30px]">
					<button
						onClick={resetFilters}
						className="text-lightgrey tracking-wide text-[20px] hover:underline transition"
					>
						Clear All
					</button>
					<p className="text-lightgrey italic tracking-wide text-[20px] ">{filteredDoors.length} Doors found</p>
				</div>
			</div>

			{/* Right buttons */}
			<div className="flex gap-[30px] lg:flex-nowrap flex-wrap justify-center items-center ">
				<button className="border h-[45px] hover:bg-[#FFF1EA80] font-helvetica font-normal text-[20px] text-lightgrey border-lightgrey px-[15px] lg:w-auto w-full">
					DOWNLOAD BROCHURE
				</button>
				<button className="border h-[45px] hover:bg-[#FFF1EA80] font-helvetica font-normal text-[20px] text-lightgrey border-lightgrey px-[15px] lg:w-auto w-full">
					REQUEST CONSULTATION
				</button>
			</div>
		</div>
	);
};

export default DoorTapBar;
