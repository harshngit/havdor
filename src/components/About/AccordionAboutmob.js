"use client"

import React, { useState } from 'react'

const AccordionAboutmob = () => {
	const items = [
		{
			id: "01",
			title: 'Standardization and Quality Control',
			description: (
				<>
					<p className="mb-2">
						Every Hav'Dor door is a benchmark of durability and performance. Built with advanced engineering, our doors are:
					</p>
					<ul className="list-disc list-inside mb-2 text-gray-700">
						<li>Moisture-resistant</li>
						<li>Termite-proof</li>
						<li>Scratch-resistant</li>
						<li>Fade-free in color</li>
						<li>Structurally stable – no warping, bending, or distortion</li>
					</ul>
					<p>
						Beyond performance, our doors feature clean, contemporary aesthetics and excellent sound insulation. With stringent quality controls, we ensure that every door meets premium standards—equal to, if not better than, the traditional wooden doors.
					</p>
				</>
			),
			img: "/asset/about/Standardization.png",
		},
		{
			id: "02",
			title: 'Efficiency and Speed',
			description: (
				<>
					<p className="mb-2">
						We redefine door installation with precision-engineered tools that allow us to hang your door in just 60 minutes. Unlike conventional carpentry, our process is:
					</p>
					<ul className="list-disc list-inside mb-2 text-gray-700">
						<li>Fast and efficient</li>
						<li>Highly accurate</li>
						<li>Non-invasive – no marks or damage to your walls</li>
					</ul>
					<p>
						It’s a seamless experience designed to save your time and ensure flawless results.
					</p>
				</>
			),
			img: "/asset/about/Efficiency.png",
		},
		{
			id: "03",
			title: 'Cost-Effectiveness',
			description: (
				<>
					<p className="mb-2">
						Our engineered doors are a smart investment. While we maintain premium quality, we eliminate the typical hassles of the traditional process—no running between timber yards and carpenters. You get a ready-to-install, high-quality product with:
					</p>
					<ul className="list-disc list-inside mb-2 text-gray-700">
						<li>No hidden costs</li>
						<li>No daily follow-ups</li>
						<li>No compromises in quality</li>
					</ul>
					<p>
						In short, you pay for quality—and we make sure it’s worth every rupee.
					</p>
				</>
			),
			img: "/asset/about/cost.png",
		},
		{
			id: "04",
			title: 'Design Expertise',
			description: (
				<>
					<p className="mb-2">
						Your door should reflect your style. With Hav'Dor, you get complete design customization tailored to your aesthetic preferences, space, and architectural needs. Whatever your vision is, we bring it to life.
					</p>
				</>
			),
			img: "/asset/about/designdefine.png",
		},
		{
			id: "05",
			title: 'Warranty and After-Sales Support',
			description: (
				<>
					<p className="mb-2">
						We stand behind our craftsmanship. Every Hav'Dor door comes with a 3-year warranty covering:
					</p>
					<ul className="list-disc list-inside mb-2 text-gray-700">
						<li>Termite damage</li>
						<li>Moisture Issue</li>
						<li>Warping or distortion</li>
						<li>Bending or discoloration</li>
					</ul>
					<p>
						And our after-sales support ensures peace of mind long after installation.
					</p>
				</>
			),
			img: "/asset/about/warranty.png",
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
							className="flex justify-between gap-[15px] items-center cursor-pointer md:hidden px-2 py-3"
						>
							{openIndex !== index && <h3 className=" text-[20px] text-lightgrey font-helvetica font-normal">{item.title}</h3>}
							<span className="text-2xl">
								{openIndex === index ? '' : <img className='w-[18px]' src='asset/Plus.png' />}
							</span>
						</div>

						{/* Mobile: Expanded Content */}
						{openIndex === index && (
							<div className="md:hidden px-4 space-y-3 animate-fade-in">
								<img src={item.img} alt="Preview" className="w-full object-cover h-full " />
								<h4 className="text-[20px] text-lightgrey font-helvetica font-normal">{item.title}</h4>
								<p className="text-[14px] text-lightgrey font-helvetica font-thin">{item.description}</p>
							</div>
						)}
					</div>
				))
			}
		</div>

	)
}

export default AccordionAboutmob