"use client"

import React, { useState } from 'react'

const AccordionAboutmob = () => {
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
	const [openIndex, setOpenIndex] = useState(null)

	const toggleIndex = (index) => {
		setOpenIndex(openIndex === index ? null : index)
	}
	return (
		<div>
			{
				items.map((item, index) => (
					<div key={index} className="border-b-2 border-gray-300 pb-2">
						{/* Mobile: title + plus icon */}
						<div
							onClick={() => toggleIndex(index)}
							className="flex justify-between items-center cursor-pointer md:hidden px-2 py-3"
						>
							{openIndex !== index && <h3 className=" text-[20px] text-lightgrey font-helvetica font-normal">{item.title}</h3>}
							<span className="text-2xl">
								{openIndex === index ? '' : <img className='w-[18px]' src='asset/Plus.png' />}
							</span>
						</div>

						{/* Mobile: Expanded Content */}
						{openIndex === index && (
							<div className="md:hidden px-4 space-y-3 animate-fade-in">
								<img src="/asset/about/Rectangle18.png" alt="Preview" className="w-full object-cover h-full rounded shadow" />
								<h4 className="text-[20px] text-lightgrey font-helvetica font-normal">{item.title}</h4>
								<p className="text-[18px] text-lightgrey font-helvetica font-thin">{item.description}</p>
							</div>
						)}
					</div>
				))
			}
		</div>

	)
}

export default AccordionAboutmob