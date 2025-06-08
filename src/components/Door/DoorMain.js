"use client"

import React, { useState } from 'react'
import DoorTapBar from './DoorTopBar'
import doors from '@/data/DoorData';
import DoorGrid from './DoorGrid';

const DoorMain = () => {
	const resetFilters = () => {
		setSelectedCategory("");
		setSelectedType("");
	};
	const [openCategory, setOpenCategory] = useState(false);
	const [openType, setOpenType] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState("");
	const [selectedType, setSelectedType] = useState("");
	const optionsCategory = ["Mansion", "Premium"];
	const optionsType = ["Premium Wooden Door", "Aluminium Wooden Door", "Glass Door", "Glass Wooden Door"];
	const optionsTypeMansion = ["Aluminium Wooden Door"];
	const filteredDoors = doors.filter((door) => {
		if (!selectedCategory && !selectedType) return true;
		if (selectedCategory && !selectedType) return door.category === selectedCategory;
		if (!selectedCategory && selectedType) return door.type === selectedType;
		return door.category === selectedCategory && door.type === selectedType;
	});
	return (
		<div className='h-screen flex flex-col'>

			<DoorTapBar resetFilters={resetFilters} openCategory={openCategory} setOpenCategory={setOpenCategory} openType={openType} setOpenType={setOpenType} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} selectedType={selectedType} setSelectedType={setSelectedType} optionsCategory={optionsCategory} optionsType={optionsType} optionsTypeMansion={optionsTypeMansion} filteredDoors={filteredDoors} />
			<div className="overflow-y-scroll scroll-smooth flex-1">
				<DoorGrid doors={filteredDoors} />
			</div>
		</div>
	)
}

export default DoorMain