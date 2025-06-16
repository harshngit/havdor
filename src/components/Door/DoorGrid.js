"use client";

import React from "react";
import DoorTapBar from "./DoorTopBar";

const DoorGrid = ({ resetFilters, openCategory, setOpenCategory, openType, setOpenType, selectedCategory, setSelectedCategory, selectedType, setSelectedType, optionsCategory, optionsType, optionsTypeMansion, filteredDoors, doors }) => {
	if (doors.length === 0) {
		return <p className="text-center text-gray-500 mt-8">No doors found.</p>;
	}

	return (
		<>
			<DoorTapBar resetFilters={resetFilters} openCategory={openCategory} setOpenCategory={setOpenCategory} openType={openType} setOpenType={setOpenType} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} selectedType={selectedType} setSelectedType={setSelectedType} optionsCategory={optionsCategory} optionsType={optionsType} optionsTypeMansion={optionsTypeMansion} filteredDoors={filteredDoors} />
			<div className="grid grid-cols-1 font-helvetica md:grid-cols-2 gap-[26px] p-6">
				{doors.map((door) => (
					<div key={door.id} className=" bg-white">
						<img src={door.img} alt={door.name} className="lg:w-[811px] w-full lg:h-[412px] object-cover" />
						<h2 className="text-[28px] font-bold mt-[20px]">{door.doorcode}</h2>
						<p className="text-[28px] text-lightgrey font-light mt-1">{door.category} | {door.type}</p>
					</div>
				))}
			</div>
		</>
	);
};

export default DoorGrid;
