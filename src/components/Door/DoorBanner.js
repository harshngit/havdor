import React from 'react'

const DoorBanner = () => {
	return (
		<div className='w-full flex justify-center lg:px-10 mt-[100px] lg:py-10 px-5 py-5  items-center h-[300px] bg-[#FFF1EA99]'>
			<div className='flex lg:mt-10 flex-col justify-start items-start gap-[45px] lg:w-[50%] w-full'>
				<h2 className=' font-helvetica font-light text-[36px]'>View All Doors</h2>
				<p className=' font-helvetica font-thin tracking-wider text-[20px]'>
					Curated for luxury homes, villas, and upscale spaces, our collection features a wide range of styles—each customizable to reflect your unique vision. Browse through our selection to discover the perfect entrance that blends beauty with purpose.
				</p>
			</div>
		</div>
	)
}

export default DoorBanner