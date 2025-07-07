import React from 'react'

const DoorBanner = () => {
	return (
		<div className='w-full flex justify-center lg:px-10 lg:mt-[0px] lg:py-10 px-5 pt-[5rem]  items-center lg:h-[70vh] h-[60vh] bg-[#FFF1EA99]'>
			<div className='lg:flex hidden lg:mt-10 flex-col justify-start items-start gap-[45px] lg:w-[50%] w-full'>
				<h2 className=' font-helvetica font-light text-[36px]'>View All Doors</h2>
				<p className=' font-helvetica font-thin tracking-wider text-[20px]'>
					Curated for luxury homes, villas, and upscale spaces, our collection features a wide range of styles—each customizable to reflect your unique vision. Browse through our selection to discover the perfect entrance that blends beauty with purpose.
				</p>
			</div>
			<div className='flex lg:hidden lg:mt-10 flex-col justify-start items-start gap-[45px] lg:w-[50%] w-full'>
				<div className='flex justify-between w-full items-center'>
					<h2 className=' font-helvetica font-light text-[26px]'>View All Doors</h2>
					<a href="">
						<img src="/asset/Download.png" className='w-[24px] h-[24px]' alt="" />
					</a>
				</div>
				<p className=' font-helvetica font-thin tracking-wider text-[14px]'>
					Curated for luxury homes, villas, and upscale spaces, our collection features a wide range of styles—each customizable to reflect your unique vision. Browse through our selection to discover the perfect entrance that blends beauty with purpose.
				</p>
			</div>
		</div>
	)
}

export default DoorBanner