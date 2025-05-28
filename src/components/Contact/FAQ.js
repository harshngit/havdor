"use client"

import React, { useState } from 'react'

const FAQ = () => {
	const items = [
		{
			id: "01",
			title: 'Frequently Asked Questions 1',
			description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
		},
		{
			id: "02",
			title: 'Frequently Asked Questions 2',
			description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
		},
		{
			id: "03",
			title: 'Frequently Asked Questions 3',
			description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
		},
		{
			id: "04",
			title: 'Frequently Asked Questions 4',
			description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
		},
		{
			id: "05",
			title: 'Frequently Asked Questions 5',
			description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
		},
		{
			id: "06",
			title: 'Frequently Asked Questions 6',
			description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
		},
		{
			id: "07",
			title: 'Frequently Asked Questions 7',
			description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
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
							className='border-[1px] tracking-wider font-normal hover:bg-[#DDDDDD33] hover:border-[1px] hover:border-[#89898933] text-[#2F3435] border-lightgrey p-[15px] w-[200px] font-helvetica text-[20px]'
						>
							VIEW ALL FAQS
						</button>
					</div>
				)}
				{showAll && (
					<div>
						<button
							onClick={() => setShowAll(false)}
							className='border-[1px] tracking-wider font-normal hover:bg-[#DDDDDD33] hover:border-[1px] hover:border-[#89898933] text-[#2F3435] border-lightgrey p-[15px] w-[200px] font-helvetica text-[20px]'
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
