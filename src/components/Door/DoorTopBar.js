"use client";
import React, { useEffect, useState } from "react";

const DoorTapBar = ({
	resetFilters,
	openCategory,
	setOpenCategory,
	openType,
	setOpenType,
	selectedCategory,
	setSelectedCategory,
	selectedType,
	setSelectedType,
	optionsCategory,
	optionsType,
	optionsTypeMansion,
	filteredDoors,
	onOpenSidebar
}) => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div
			className={`font-helvetica py-4 px-[40px] flex flex-wrap justify-between items-center border-b border-gray-300 sticky top-0 left-0 right-0 z-0 transition-all duration-300 ${isScrolled ? "backdrop-blur-sm bg-white/70" : "bg-[#fef8f4]"
				}`}
		>
			{/* Filter Section */}
			<div className="flex flex-wrap justify-center items-center lg:gap-[62px] gap-[30px]">
				<div className="flex flex-wrap items-center gap-[30px]">
					{/* Door Category */}
					<div className="relative lg:w-[200px] w-full">
						<div
							className="flex items-center justify-between px-[15px] py-[15px] bg-[#DDDDDD33] cursor-pointer gap-[10px] h-[45px]"
							onClick={() => setOpenCategory(!openCategory)}
						>
							<span className="text-[18px] font-light text-black">Door Category</span>
							<img
								src="/asset/down.png"
								className={`${openCategory ? "rotate-180" : ""}`}
								alt="dropdown"
							/>
						</div>

						{openCategory && (
							<div className="absolute top-[110%] w-full bg-[#DDDDDD33] shadow z-10">
								{optionsCategory.map((option) => (
									<div
										key={option}
										className={`px-[15px] py-[15px] text-[15px] cursor-pointer transition-all duration-300 ${option === selectedCategory
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

					{/* Door Type */}
					<div className="relative lg:w-[250px] w-full">
						<div
							className="flex items-center justify-between px-[15px] py-[15px] bg-[#DDDDDD33] cursor-pointer gap-[10px] h-[45px]"
							onClick={() => setOpenType(!openType)}
						>
							<span className="text-[18px] font-light text-black">
								{selectedCategory === "Premium" ? "Premium Door Type" : "Mansion Door Type"}
							</span>
							<img
								src="/asset/down.png"
								className={`${openType ? "rotate-180" : ""}`}
								alt="dropdown"
							/>
						</div>

						{openType && (
							<div className="absolute top-[110%] w-full bg-[#DDDDDD33] shadow z-10">
								{(selectedCategory === "Premium" ? optionsType : optionsTypeMansion).map(
									(option) => (
										<div
											key={option}
											className={`px-[15px] py-[15px] text-[15px] cursor-pointer transition-all duration-300 ${option === selectedType
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
				</div>

				{/* Filter Summary */}
				<div className="flex justify-start items-start lg:mb-0 mb-5 gap-[30px]">
					<button
						onClick={resetFilters}
						className="text-lightgrey tracking-wide text-[20px] hover:underline transition"
					>
						Clear All
					</button>
					<p className="text-lightgrey italic tracking-wide text-[20px]">
						{filteredDoors.length} Doors found
					</p>
				</div>
			</div>

			{/* Right Action Buttons */}
			<div className="flex gap-[30px] lg:flex-nowrap flex-wrap justify-center items-center">
				<button className="border h-[45px] hover:bg-[#FFF1EA80] text-[20px] text-lightgrey border-lightgrey px-[15px] lg:w-auto w-full">
					DOWNLOAD BROCHURE
				</button>
				<button className="border h-[45px] hover:bg-[#FFF1EA80] text-[20px] text-lightgrey border-lightgrey px-[15px] lg:w-auto w-full" onClick={onOpenSidebar}>
					REQUEST CONSULTATION
				</button>
			</div>
		</div>
	);
};

export default DoorTapBar;
