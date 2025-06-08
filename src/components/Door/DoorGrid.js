"use client";

import React from "react";

const DoorGrid = ({ doors }) => {
	if (doors.length === 0) {
		return <p className="text-center text-gray-500 mt-8">No doors found.</p>;
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
			{doors.map((door) => (
				<div key={door.id} className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
					<img src={door.img} alt={door.name} className="w-full h-[250px] object-cover rounded" />
					<h2 className="text-xl font-semibold mt-4">{door.name}</h2>
					<p className="text-sm text-gray-500 mt-1">Type: {door.type}</p>
					<p className="text-sm text-gray-500">Category: {door.category}</p>
				</div>
			))}
		</div>
	);
};

export default DoorGrid;
