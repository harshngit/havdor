"use client"

import React, { useState } from 'react'
import DoorTapBar from './DoorTopBar'
import doors from '@/data/DoorData';
import DoorGrid from './DoorGrid';

const DoorMain = ({ onOpenSidebar }) => {
	const resetFilters = () => {
		setSelectedCategory("");
		setSelectedType("");
	};
	const [openCategory, setOpenCategory] = useState(false);
	const [openType, setOpenType] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState("");
	const [selectedType, setSelectedType] = useState("");
	const optionsCategory = ["Mansion", "Premium"];
	const optionsType = ["Premium Wooden Door", "Aluminium Wooden Door", "Glass Wooden Door"];
	const optionsTypeMansion = ["Aluminium Door"];
	const filteredDoors = doors.filter((door) => {
		if (!selectedCategory && !selectedType) return true;
		if (selectedCategory && !selectedType) return door.category === selectedCategory;
		if (!selectedCategory && selectedType) return door.type === selectedType;
		return door.category === selectedCategory && door.type === selectedType;
	});
	return (
		<div className=' lg:h-screen h-[200vh] flex flex-col'>
			<div className='lg:block hidden'>
				<DoorTapBar
					onOpenSidebar={onOpenSidebar}
					resetFilters={resetFilters}
					openCategory={openCategory}
					setOpenCategory={setOpenCategory}
					openType={openType}
					setOpenType={setOpenType}
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
					selectedType={selectedType}
					setSelectedType={setSelectedType}
					optionsCategory={optionsCategory}
					optionsType={optionsType}
					optionsTypeMansion={optionsTypeMansion}
					filteredDoors={filteredDoors}
				/>
			</div>
			<div className='lg:hidden block'>
				<DoorTapBar
					onOpenSidebar={onOpenSidebar}
					resetFilters={resetFilters}
					openCategory={openCategory}
					setOpenCategory={setOpenCategory}
					openType={openType}
					setOpenType={setOpenType}
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
					selectedType={selectedType}
					setSelectedType={setSelectedType}
					optionsCategory={optionsCategory}
					optionsType={optionsType}
					optionsTypeMansion={optionsTypeMansion}
					filteredDoors={filteredDoors}
				/>
			</div>

			<div className="overflow-y-scroll scroll-smooth lg:h-auto h-[200vh] flex-1">
				<DoorGrid resetFilters={resetFilters} openCategory={openCategory} setOpenCategory={setOpenCategory} openType={openType} setOpenType={setOpenType} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} selectedType={selectedType} setSelectedType={setSelectedType} optionsCategory={optionsCategory} optionsType={optionsType} optionsTypeMansion={optionsTypeMansion} filteredDoors={filteredDoors} doors={filteredDoors} />
			</div>
		</div>
	)
}

export default DoorMain