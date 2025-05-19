import React from 'react'

const AccordionAbout = () => {
	const items = [
		{
			id: "01",
			title: 'Standardization and Quality Control',
			description: 'We can standardize their production processes, ensuring consistent quality and reducing errors.',
		},
		{
			id: "02",
			title: 'Efficiency and Speed',
			description: 'Our production allows for faster assembly and installation, reducing project timelines.',
		},
		{
			id: "03",
			title: 'Cost-Effectiveness',
			description: 'We can benefit from economies of scale, reducing costs through bulk purchasing and optimized production processes.',
		},
		{
			id: "04",
			title: 'Design Expertise',
			description: 'We employ experienced designers who can create functional and aesthetically pleasing designs.',
		},
		{
			id: "05",
			title: 'Warranty and After-Sales Support',
			description: 'We typically offer warranties and after-sales support, providing customers with peace of mind.',
		},
	]

	return (
		<div className="space-y-6 w-full">
			{items.map((item, index) => (
				<div
					key={index}
					className="group border-b-2 border-gray-300 group-hover:transition-all duration-700 ease-in-out"
				>
					{/* Main row */}
					<div className="flex items-center gap-6 py-4 px-2 transition-all duration-700 ease-in-out">
						{/* Number */}
						<h3 className="font-thin font-helvetica lg:text-[24px] text-[18px] w-[20%] transition-all duration-700 ease-in-out">
							{item.id}
						</h3>

						{/* Image appears on hover */}
						<div className="opacity-0 group-hover:opacity-100 w-[380px] h-[250px] items-center justify-center transition-opacity duration-700 ease-in-out hidden group-hover:flex">
							<img
								src="/asset/about/Rectangle18.png"
								alt="Preview"
								className="w-full object-cover h-full rounded shadow"
							/>
						</div>

						{/* Title */}
						<h3 className="font-thin font-helvetica lg:text-[24px] text-[18px] w-[40%] transition-all duration-700 ease-in-out">
							{item.title}
						</h3>

						{/* Description appears on hover */}
						<p className="opacity-0 group-hover:opacity-100 text-gray-700 w-[40%] transition-opacity duration-700 ease-in-out">
							{item.description}
						</p>
					</div>
				</div>
			))}
		</div>


	)
}

export default AccordionAbout