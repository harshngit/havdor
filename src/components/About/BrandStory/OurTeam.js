import React from 'react'

const OurTeam = () => {
	const categories = [
		{
			title: 'NEERAJ GUPTA',
			desgination: "Director",
			img: '/asset/brand-story/team/1.png',
			content: "As Director at Hav’Dor, my focus is clear: to drive innovation that elevates both form and function.We’re not just offering doors—we’re delivering high- performance solutions that set new industry benchmarks.At Hav’Dor we ensure every door of ours is a statement of quality, craftsmanship, and lasting value. "
		},
		{
			title: 'SEEMA GUPTA',
			desgination: "CEO",
			img: '/asset/brand-story/team/2.png',
			content: "At Hav’dor, we set out with a clear purpose—to change how people experience doors. Our mission is to create strong, stylish, and fully customizable engineered wooden doors that stand the test of time. With our signature double-step soundproof design, we’ve solved the age-old problems of conventional doors—offering a smoother, quieter, and more reliable experience for every customer. Looking ahead, our vision is to become the most trusted name in engineered wooden doors across India. we’re working towards a future where there’s a Hav’dor door in every Indian home."
		},
		{
			title: 'RUCHIR ANGAD GUPTA',
			desgination: "Director & Head - Overseas Operations",
			img: '/asset/brand-story/team/3.png',
			content: "At Hav’Dor, we’re not here to sell just another door.We’re here to change what people expect from one.As Director of Hav’Dor, my goal is simple: to offer a premium, fully customizable door solution that outperforms traditional doors in every way.Our engineered wood doors combine the strength of solid wood with advanced resistance to moisture, termites, warping, and wear.If you’re building for quality, longevity, and detail—Hav’Dor is the door partner you’ve been waiting for."
		},
	];
	return (
		<div className="w-full py-[80px] lg:py-[150px] px-5 font-helvetica tracker-wider">
			<div className="flex justify-start items-center mb-6">
				<h2 className="lg:text-[36px] text-[24px] font-helvetica font-normal">Meet our Directors</h2>
			</div>

			<div className="grid grid-cols-1 items-center justify-center md:grid-cols-3 lg:grid-cols-3 gap-4">
				{categories.map((item, i) => (
					<div
						key={i}
						className="relative group overflow-hidden h-[588px] w-full rounded-md"
					>
						<img
							src={item.img}
							alt={item.title}
							className="w-full"
						/>

						{/* Overlay that slides up */}
						{item.content && (
							<div className="absolute bottom-0 left-0 w-full h-full bg-[#2F3435CC] text-[#FFF1EA] px-4 py-5 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-10">
								<div className='flex justify-between flex-col h-full'>
									<p className="text-[20px] font-thin font-helvetica">{item.content}</p>
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