"use client"

import React, { useState } from 'react'

const FAQ = () => {
	const items = [
		{
			id: "01",
			title: 'Still Stuck on Flush Doors? Let’s Clear the Air!',
			description: "Thinking of switching to engineered wooden doors but feeling unsure? We've taken your most common concerns and turned them into straight answers—with a dash of clarity and confidence!",
		},
		{
			id: "02",
			title: 'Are engineered doors as strong as my good old flush doors—or just fancy talk?',
			description: "They’re not just strong—they’re smarter.Engineered doors are made with high - density cores like HDF / Hem - Fir, Tubular  built to handle daily wear, heavy use, and even the occasional slam.",
		},
		{
			id: "03",
			title: 'Wait... don’t these doors swell or chip when it rains?',
			description: "Only if you buy the cheap knock-offs! Quality engineered doors are made for Indian conditions.With proper sealing and a moisture- resistant core, they’re designed to stay in shape—even when the monsoon knocks on your door.",
		},
		{
			id: "04",
			title: 'Are these doors a pain to maintain? I don’t want high-maintenance drama.',
			description: 'Tey’re super chill. Just wipe them to clean.No polishing marathons, no peeling nightmares.They stay looking fresh for years with minimal care.',
		},
		{
			id: "05",
			title: 'Aren’t engineered doors too heavy to handle or install?',
			description: 'Surprisingly, no! They’re solid where it matters, but smartly balanced.once installed, you’ll love how smoothly they swing and shut.',
		},
		{
			id: "06",
			title: 'I like simple designs. Do I really need fancy finishes and carvings?',
			description: 'Only if you want them!From sleek modern panels to classic wood grains to bold statement doors—engineered doors give you the freedom to match your personality Or stay minimalist if that’s your vibe!',
		},
		{
			id: "07",
			title: 'Can I really use them for the main door too?',
			description: "Absolutely.Engineered doors aren't just for interiors—they're built tough for entrances too.",
		},
		{
			id: "08",
			title: 'Bottom Line: Why Switch?',
			description: "Because you deserve a door that’s stronger, smarter, better looking, and built for India. it’s time to level up.",
		},
		{
			id: "09",
			title: 'Does it Come with any Warranty?',
			description: "Yes, At Hav’Dor we offer three year warranty against – Termite / Moisture / Bending / Discoloration , Deformations .Can you ask for such Warranty from your Wood Seller to Carpenter.Think of it .",
		},
		{
			id: "10",
			title: 'How much time it takes to Install the Door ?',
			description: "Just in 60 Seconds …. Yes you read it right with just two hands we install a door in 60 seconds with our High End Precision tools which are way better then tools used by your local Carpenter.",
		},
	]

	const [openIndex, setOpenIndex] = useState(null)
	const [showAll, setShowAll] = useState(false)

	const toggleIndex = (index) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<div className='w-full lg:mt-[80px] lg:px-10 lg:py-10 px-5 py-5 flex justify-center items-center '>
			<div className='flex justify-start items-start flex-col lg:w-[60%] w-full gap-6 transition-all ease-in-out duration-500'>
				<h2 className='font-normal font-helvetica lg:text-[36px] text-[26px]'>
					Frequently Asked Questions
				</h2>

				{(showAll ? items : items.slice(0, 5)).map((item, index) => (
					<div key={index} className='w-full px-[0px] py-[40px] border-lightgrey border-b-[1px] transition-all ease-in-out duration-500'>
						<div
							className='flex justify-between items-center w-full cursor-pointer'
							onClick={() => toggleIndex(index)}
						>
							<h3 className='font-thin font-helvetica lg:text-[24px] text-[18px]'>
								{item?.title}
							</h3>
							<img
								className='w-[18px]'
								src={openIndex === index ? 'asset/cross.png' : 'asset/Plus.png'}
								alt="toggle icon"
							/>
						</div>

						<div className={`overflow-hidden transition-all duration-700 ease-in-out ${openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
							<div className="pt-[40px]">
								<p className="text-[20px] text-lightgrey font-helvetica font-thin">
									{item.description}
								</p>
							</div>
						</div>
					</div>
				))}

				{!showAll && (
					<div>
						<button
							onClick={() => setShowAll(true)}
							className='border-[1px] tracking-wider font-normal hover:border-[1px] hover:bg-[#FFF1EA80] hover:border-[#2F3435] text-[#2F3435] border-lightgrey p-[15px] w-[200px] font-helvetica text-[20px]'
						>
							VIEW ALL FAQS
						</button>
					</div>
				)}
				{showAll && (
					<div>
						<button
							onClick={() => setShowAll(false)}
							className='border-[1px] tracking-wider font-normal hover:border-[1px] hover:bg-[#FFF1EA80] hover:border-[#2F3435] text-[#2F3435] border-lightgrey p-[15px] w-[200px] font-helvetica text-[20px]'
						>
							VIEW LESS
						</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default FAQ
