import React from 'react'

const OurTeam = () => {
	const categories = [
		{ title: 'NEERAJ GUPTA', desgination: "Desgination", img: '/asset/home/industries/1.png', content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen. " },
		{ title: 'SEEMA GUPTA', desgination: "Desgination", img: '/asset/home/industries/2.png', content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen. " },
		{ title: 'RUCHIR ANGAD GUPTA', desgination: "Desgination", img: '/asset/home/industries/3.png', content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen." },
	];
	return (
		<div className="w-full py-10 px-5 font-helvetica tracker-wider">
			<div className="flex justify-start items-center mb-6">
				<h2 className="lg:text-[40px] text-[24px] font-helvetica font-normal">Meet our Directors</h2>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
				{categories.map((item, i) => (
					<div
						key={i}
						className="relative group overflow-hidden h-[400px] rounded-md"
					>
						<img
							src={item.img}
							alt={item.title}
							className="w-full h-full object-cover"
						/>

						{/* Overlay that slides up */}
						{item.content && (
							<div className="absolute bottom-0 left-0 w-full h-full bg-[#2F3435CC] text-[#FFF1EA] px-4 py-5 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-10">
								<div className='flex justify-between flex-col h-full'>
									<p className="text-sm font-thin font-helvetica">{item.content}</p>
									<div className='absolute flex-col bottom-5 flex justify-start items-start'>
										<h3 className="font-helvetica font-normal text-[24px]">{item.title}</h3>
										<p className='font-helvetica font-thin italic text-[20px]'>{item.desgination}</p>
									</div>
								</div>
							</div>
						)}

						{/* Always visible title */}
						<div className="absolute bottom-0 left-0 w-full ">
							<div className=" h-[150px] bg-gradient-to-t from-[#FFF1EA] via-[#fff1ea77] to-transparent px-4 pt-10 pb-4 flex justify-start item-end">
								<div className='absolute flex-col bottom-5 flex justify-start items-start'>
									<h3 className="text-lightgrey font-helvetica font-normal text-[24px]">{item.title}</h3>
									<p className='text-lightgrey font-helvetica font-thin italic text-[20px]'>{item.desgination}</p>
								</div>
							</div>
						</div>

					</div>
				))}
			</div>
		</div>
	)
}

export default OurTeam