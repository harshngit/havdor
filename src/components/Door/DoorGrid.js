"use client";

import React, { useState } from "react";
import DoorTapBar from "./DoorTopBar";
import Link from "next/link";

const DoorGrid = ({
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
	doors
}) => {
	const [visibleCount, setVisibleCount] = useState(6);

	const loadMore = () => {
		setVisibleCount((prev) => prev + 2);
	};

	if (doors.length === 0) {
		return <p className="text-center text-gray-500 mt-8">No doors found.</p>;
	}

	return (
		<>


			<div className="grid grid-cols-1 font-helvetica md:grid-cols-2 gap-[26px] p-6">
				{doors.slice(0, visibleCount).map((door) => (
					<Link href={`/door/${door.id}`} key={door.id}>
						<div className="bg-white group transition-opacity duration-500 ease-in-out hover:opacity-90">
							<img
								src={door.mainimg}
								alt={door.name}
								className="lg:w-[811px] w-full lg:h-[412px] object-cover"
							/>
							<h2 className="text-[28px] hover:text-[#CA622A] font-bold mt-[20px]">
								{door.doorcode}
							</h2>
							<p className="text-[28px] text-lightgrey font-light mt-1">
								{door.category} | {door.type}
							</p>
						</div>
					</Link>
				))}
			</div>

			{visibleCount < doors.length && (
				<div className="flex justify-start my-2 p-6">
					<button
						onClick={loadMore}
						className="border h-[45px] hover:bg-[#FFF1EA80] font-helvetica font-normal text-[20px] text-lightgrey border-lightgrey px-[15px] lg:w-auto w-full flex justify-center items-center gap-2"
					>
						Load More <img src="/asset/down.png" alt="" />
					</button>
				</div>
			)}
		</>
	);
};

export default DoorGrid;
