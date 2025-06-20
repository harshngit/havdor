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
	const item = [
		{
			id: "01",
			title: 'Benefits',
			description: "ABOUT ALUMINUM WOODEN DOORS Function & beauty Through the development of special styles, the aluminum wooden door not only retains the aesthetic and use functions of the traditional wooden door, but also further expands and improves the sanitary and environmental protection.",
		},
		{
			id: "02",
			title: 'Features',
			description: "(no mildew, no paint hazard) and protection (sound insulation, w a t e r barrier, flame retardant)functions of the wooden door.",
		},
		{
			id: "03",
			title: 'Scenarios',
			description: "Resorts / Hotel / Villas / Offices / Commercial Spaces"
		},
	]
	const item2 = [
		{
			id: "01",
			title: 'Benefits',
			description: [
				"Let More Natural Light in: Brightens up the room by allowing sunlight to come through.",
				"Looks Stylish: Gives your home or office a modern and elegant look.",
				"Space Feels Bigger: Clear glass creates an open and roomy feeling.",
				"Many Style Options: Comes in different types like sliding, folding, or hinged to fit your space.",
				"Easy to See Through: Great for seeing outside.",
				"Can Help Save Energy: Special glass can keep rooms cooler in summer and warmer in winter.",
				"Simple to Clean: Just wipe with a cloth—no worries about rust or swelling.",
			]
		},
		{
			id: "02",
			title: 'Features',
			description: "",
		},
		{
			id: "03",
			title: 'Scenarios',
			description: "Homes / Villas / High End Apartments / Commercial Spaces."
		},
	]
	const item3 = [
		{
			id: "01",
			title: 'Benefits',
			description: "/asset/door/B-mansion.png"
		},
		{
			id: "02",
			title: 'Features',
			description: "/asset/door/F-mansion.png",
		},
		{
			id: "03",
			title: 'Scenarios',
			description: "/asset/door/S-mansion.png"
		},
		{
			id: "04",
			title: 'Door Series',
			description: ""
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
			{product.type === "Aluminium Wooden Door" &&
				<div className='lg:py-[120px] py-[50px] flex justify-center items-center'>
					<div className='lg:w-[50%] w-[90%]'>
						{item.map((item, index) => (
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

									<div className="pt-[40px]">
										<p className=' font-thin font-helvetica text-[20px] text-lightgrey'>{item.description}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			}
			{product.type === "Glass Wooden Door" &&
				<div className='lg:py-[120px] py-[50px] flex justify-center items-center'>
					<div className='lg:w-[50%] w-[90%]'>
						{item2.map((item, index) => (
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

									{(item.title === "Benefits") &&
										<div className="pt-[40px]">
											{item.description.map((item) => (
												<p className=' font-thin font-helvetica text-[20px] text-lightgrey'>{item}</p>
											))}
										</div>}
									{item.title === "Scenarios" &&
										<div className='pt-[40px]'>
											<p className=' font-thin font-helvetica text-[20px] text-lightgrey'>{item.description}</p>
										</div>
									}
								</div>
							</div>
						))}
					</div>
				</div>
			}
			{(["HDM24082", "HDM24079"].includes(product.doorcode)) && (
				<div className='lg:py-[120px] py-[50px] flex justify-center items-center'>
					<div className='lg:w-[50%] w-[90%]'>
						{item3.map((item, index) => (
							<div
								key={index}
								className='w-full px-[0px] py-[40px] border-lightgrey border-b-[1px] transition-all ease-in-out duration-500'
							>
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

								<div
									className={`overflow-hidden transition-all duration-700 ease-in-out ${openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
								>
									{["Benefits", "Features", "Scenarios"].includes(item.title) && (
										<div className="pt-[40px]">
											<img className='w-full' src={item.description} alt={item.title} />
										</div>
									)}

									{item.title === "Door Series" && (
										<div className="pt-[40px]">
											<h2 className='text-lightgrey font-bold font-helvetica text-[20px]'>Broken Bridge System</h2>
											<p className='font-thin font-helvetica text-[20px] text-lightgrey'>
												Doors are often faced with severe weather disturbances such as strong typhoons,
												sudden heavy rains, high temperatures, and cold weather. Therefore, doors with strong
												sealing properties can withstand the challenges of various harsh environments and
												provide a safe, comfortable, and warm living experience.
											</p>
										</div>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			)}
			{(["HDM24039,40,41"].includes(product.doorcode)) && (
				<div className='lg:py-[120px] py-[50px] flex justify-center items-center'>
					<div className='lg:w-[50%] w-[90%]'>
						{item3.map((item, index) => (
							<div
								key={index}
								className='w-full px-[0px] py-[40px] border-lightgrey border-b-[1px] transition-all ease-in-out duration-500'
							>
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

								<div
									className={`overflow-hidden transition-all duration-700 ease-in-out ${openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
								>
									{["Benefits", "Features", "Scenarios"].includes(item.title) && (
										<div className="pt-[40px]">
											<img className='w-full' src={item.description} alt={item.title} />
										</div>
									)}

									{item.title === "Door Series" && (
										<div className="pt-[40px]">
											<h2 className='text-lightgrey font-bold font-helvetica text-[20px]'>Aluminium Glass Door </h2>
											<p className='font-thin font-helvetica text-[20px] text-lightgrey'>
												No matter how vast life may seem, it is an opportunity waiting to be explored,
												leading to growth and improvement. The pursuit of excellence captures our focus,
												as we aim for nothing less than the best. High quality paves the way for fulfiling
												experiences and remarkable years ahead.
											</p>
										</div>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			)}
			{(["HDM24019", "HDM24017", "HDM24015,16", "HDM24012,13", "HDM24003,04"].includes(product.doorcode)) && (
				<div className='lg:py-[120px] py-[50px] flex justify-center items-center'>
					<div className='lg:w-[50%] w-[90%]'>
						{item3.map((item, index) => (
							<div
								key={index}
								className='w-full px-[0px] py-[40px] border-lightgrey border-b-[1px] transition-all ease-in-out duration-500'
							>
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

								<div
									className={`overflow-hidden transition-all duration-700 ease-in-out ${openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
								>
									{["Benefits", "Features", "Scenarios"].includes(item.title) && (
										<div className="pt-[40px]">
											<img className='w-full' src={item.description} alt={item.title} />
										</div>
									)}

									{item.title === "Door Series" && (
										<div className="pt-[40px]">
											<h2 className='text-lightgrey font-bold font-helvetica text-[20px]'>ALUMINIUM Offset door </h2>
											<p className='font-thin font-helvetica text-[20px] text-lightgrey'>
												MODERN DESIGN INSPIRATION FOR OFF-AXIS DOORS <br />
												The industry benchmark of pursuing perfection, the five major performance
												measurement standards are higher than the industry standards.
												Our doors are designed with a perfect balance of functionality and aesthetics. Featuring
												an off-axis design, multiple seals, and advanced sound insulation, they effectively reduce
												noise while ensuring a smooth and effortless opening and closing experience. Built with
												high - quality , secure hardware , these doors provide durability and safety
												A thoughtfully engineered drainage system prevents leaks and blockages, ensuring long term reliability. When opened, the modern design-enhanced by sleek lines and the
												transparency of glass-creates a spacious and stylish ambiance. These doors seamlessly blend practicality with artistic elegance. elevating the beauty and sophistication of any
												living space
											</p>
										</div>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			)}
			{(["HDM24032"].includes(product.doorcode)) && (
				<div className='lg:py-[120px] py-[50px] flex justify-center items-center'>
					<div className='lg:w-[50%] w-[90%]'>
						{item3.map((item, index) => (
							<div
								key={index}
								className='w-full px-[0px] py-[40px] border-lightgrey border-b-[1px] transition-all ease-in-out duration-500'
							>
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

								<div
									className={`overflow-hidden transition-all duration-700 ease-in-out ${openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
								>
									{["Benefits", "Features", "Scenarios"].includes(item.title) && (
										<div className="pt-[40px]">
											<img className='w-full' src={item.description} alt={item.title} />
										</div>
									)}

									{item.title === "Door Series" && (
										<div className="pt-[40px]">
											<h2 className='text-lightgrey font-bold font-helvetica text-[20px]'>MINIMAL PRESENTATION </h2>
											<p className='font-thin font-helvetica text-[20px] text-lightgrey'>
												No matter how big the world is, it is just a door. Open it and you will meet a better life. The exquisite appearance has retained my most discerning eyes, just to not settle for less. Good quality will bring good times and amazing years.
											</p>
										</div>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</>
	)
}

export default Specification