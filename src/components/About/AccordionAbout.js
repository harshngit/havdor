"use client"

import React, { useRef } from 'react'

const AccordionAbout = () => {
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
			img: "/asset/about/Standardization.webp",
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
			img: "/asset/about/Efficiency.webp",
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
			img: "/asset/about/cost.webp",
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
			img: "/asset/about/designdefine.webp",
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
			img: "/asset/about/warranty.webp",
		},
	]

	const imageRefs = useRef({})

	const handleMouseEnter = (index) => {
		const el = imageRefs.current[index]
		if (el) {
			const scrollHeight = el.scrollHeight
			el.style.height = scrollHeight + 'px'
			el.style.opacity = 1
		}
	}

	const handleMouseLeave = (index) => {
		const el = imageRefs.current[index]
		if (el) {
			el.style.height = '0px'
			el.style.opacity = 0
		}
	}

	return (
		<div className="space-y-6 w-full">
			{items.map((item, index) => (
				<div
					key={index}
					className="group border-b-2 border-gray-300 transition-all duration-700 ease-in-out"
					onMouseEnter={() => handleMouseEnter(index)}
					onMouseLeave={() => handleMouseLeave(index)}
				>
					<div className="flex items-center gap-6 py-4 px-2 transition-all duration-700 ease-in-out">
						<h3 className="font-thin font-helvetica lg:text-[24px] text-[18px] w-[46%] group-hover:w-[5%] transition-all duration-700 ease-in-out">
							{item.id}
						</h3>

						<div
							ref={(el) => (imageRefs.current[index] = el)}
							className="group-hover:w-[50%] overflow-hidden opacity-0 flex justify-center item-center transition-all duration-700 ease-in-out h-0"
						>
							<img
								src={item.img}
								alt="Preview"
								className="w-[400px] object-cover h-[250px] rounded shadow"
							/>
						</div>

						<h3 className="font-thin font-helvetica lg:text-[24px] text-[18px] w-[110%] transition-all duration-700 ease-in-out group-hover:w-[40%] group-hover:pl-5">
							{item.title}
						</h3>

						<div className="opacity-0 group-hover:opacity-100 group-hover:block hidden h-[0px] group-hover:h-auto  text-gray-700 w-[40%] transition-opacity duration-700 ease-in-out font-light text-[14px] space-y-2">
							{item.description}
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default AccordionAbout
