import React from 'react'

const AccordionAbout = () => {
	const items = [
		{
			id: "01",
			title: 'Standardization and Quality Control',
			description: 'Ensuring uniformity across production to meet industry standards.',
		},
		{
			id: "02",
			title: 'Efficiency and Speed',
			description: 'Optimizing workflows to reduce lead time and improve delivery speed.',
		},
		{
			id: "03",
			title: 'Cost-Effectiveness',
			description: 'We can benefit from economies of scale, reducing costs through bulk purchasing and optimized production processes.',
		},
		{
			id: "04",
			title: 'Design Expertise',
			description: 'Combining innovative design with functionality to create unique products.',
		},
		{
			id: "05",
			title: 'Warranty and After-Sales Support',
			description: 'Providing long-term support for products after they are sold.',
		},
	]

	return (
		<div className="space-y-6 w-full">
			{items.map((item, index) => (
				<div
					key={index}
					className="group border-b-2 border-gray-300 transition-all duration-300"
				>
					{/* Main row */}
					<div className="flex items-center gap-6 py-4 px-2 transition-all duration-300">
						{/* Number */}
						<h3 className='font-thin font-helvetica lg:text-[24px] text-[18px] w-[40%] group-hover:w-[5%]'>
							{item.id}
						</h3>

						{/* Image appears on hover */}
						<div className="hidden group-hover:flex w-[380px] h-[250px] items-center justify-center transition duration-300 ">
							<img src="/asset/about/Rectangle18.png" alt="Preview" className="w-full object-cover h-full rounded shadow" />
						</div>

						{/* Title */}
						<h3 className="font-thin  font-helvetica lg:text-[24px] text-[18px] group-hover:w-[30%] w-[60%]">
							{item.title}
						</h3>

						{/* Description appears on hover */}
						<p className="hidden group-hover:block text-gray-700 w-[50%] transition-all duration-300">
							{item.description}
						</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default AccordionAbout