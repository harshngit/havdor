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
			className={`font-helvetica lg:py-4 lg:px-[40px] px-2 flex flex-wrap justify-between items-center border-b border-gray-300 lg:sticky top-0 left-0 right-0 z-0 transition-all bg-[#fef8f4] duration-300 ${isScrolled ? "lg:backdrop-blur-sm lg:bg-white/70" : "lg:bg-[#fef8f4]"
				}`}
		>
			{/* Filter Section */}
			<div className="flex flex-wrap lg:justify-start justify-center items-center lg:gap-[62px] gap-[30px]">
				<div className="flex flex-wrap items-center gap-[30px]">
					{/* Door Category */}
					<div className="relative lg:w-[200px] w-full">
						<div
							className="flex items-center justify-between lg:px-[15px] px-[12px] py-[15px] lg:bg-[#DDDDDD33] bg-[#F4F4F4] cursor-pointer gap-[10px]  lg:h-[40px] h-[45px]"
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
							<div className="absolute top-[110%] w-full bg-[#f4f4f4] shadow z-10">
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
							className="flex items-center justify-between px-[15px] py-[15px] lg:bg-[#DDDDDD33] cursor-pointer gap-[10px] bg-[#F4F4F4] lg:h-[40px] h-[45px]"
							onClick={() => setOpenType(!openType)}
						>
							<span className="text-[18px] font-light text-black">
								{selectedCategory === "Premium"
									? "Premium Door Type"
									: selectedCategory === "Mansion"
										? "Mansion Door Type"
										: "Door Type"}
							</span>
							<img
								src="/asset/down.png"
								className={`${openType ? "rotate-180" : ""}`}
								alt="dropdown"
							/>
						</div>

						{openType && (
							<div className="absolute top-[110%] w-full bg-[#f4f4f4] shadow z-10">
								{[
									...(selectedCategory === "Premium"
										? optionsType
										: selectedCategory === "Mansion"
											? optionsTypeMansion
											: [...optionsType, ...optionsTypeMansion] // default case: show both
									)
								].map((option) => (
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
								))}
							</div>
						)}

					</div>
				</div>

				{/* Filter Summary */}
				<div className="flex justify-between lg:flex-row flex-row-reverse items-start lg:mb-0 mb-5 lg:gap-[30px] gap-[100px]">
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
			<div className="lg:flex hidden gap-[30px] lg:flex-nowrap flex-wrap justify-center items-center">
				<a
					href="/asset/Docs/havdoor.pdf" // Replace with your actual file path
					download
					className="border  lg:h-[40px] h-[35px] font-light hover:bg-[#FFF1EA80] text-[20px] text-lightgrey border-lightgrey px-[15px] lg:w-auto w-full flex items-center justify-center"
				>
					DOWNLOAD BROCHURE
				</a>
				<button className="border  lg:h-[40px] h-[35px] font-light hover:bg-[#FFF1EA80] text-[20px] text-lightgrey border-lightgrey px-[15px] lg:w-auto w-full" onClick={onOpenSidebar}>
					REQUEST CONSULTATION
				</button>
			</div>
		</div>
	);
};

export default DoorTapBar;
