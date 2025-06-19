import React, { useState } from 'react'

const Specification = ({ product }) => {
	const items = [
		{
			id: "01",
			title: 'Benefits',
			description: "/asset/door/Benefits.png",
		},
		{
			id: "02",
			title: 'Features',
			description: "/asset/door/Features.png",
		},
		{
			id: "03",
			title: 'Scenarios',
			description: [
				"Owners of luxury villas and premium residential properties",
				"High-end commercial spaces (e.g., flagship stores, premium offices)",
				"Boutique hotels and luxury resort developers",
				"Prominent figures in politics, business, and the arts"
			],
		},
	]
	const [openIndex, setOpenIndex] = useState(null)
	const [showAll, setShowAll] = useState(false)

	const toggleIndex = (index) => {
		setOpenIndex(openIndex === index ? null : index)
	}
	return (
		<>
			{product.type === "Premium Wooden Door" &&
				<div className='lg:py-[120px] py-[50px] flex justify-center items-center'>
					<div className='lg:w-[50%] w-[90%]'>
						{items.map((item, index) => (
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
										src={openIndex === index ? '/asset/cross.png' : '/asset/Plus.png'}
										alt="toggle icon"
									/>
								</div>

								<div className={`overflow-hidden transition-all duration-700 ease-in-out ${openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
									{(item.title === "Benefits" || item.title === "Features") && (
										<div className="pt-[40px]">
											<img src={item.description} alt="" />
										</div>
									)}
									{(item.title === "Scenarios") && (
										<div className="pt-[40px]">
											{item.description.map((point, idx) => (
												<li className='lg:text-[20px] text-[13px] font-thin text-lightgrey font-helvetica' key={idx}>{point}</li>
											))}
										</div>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			}
		</>
	)
}

export default Specification