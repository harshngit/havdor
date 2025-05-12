import React from 'react'

const CTA = () => {
	return (
		<div className='w-full font-helvetica  mt-10'>
			<div className='flex justify-center items-center lg:flex-row flex-col'>
				<div className='lg:w-[60%] w-full'>
					<img className='w-full h-[570px]' src="/asset/home/testinomial/testinomial.png" alt="" />
				</div>
				<div className='lg:w-[40%] lg:h-[570px] h-auto px-5 py-5 w-full bg-primary text-white flex justify-start items-start  gap-[50px] flex-col'>
					<div className='flex justify-start items-start flex-col gap-[50px]'>
						<h2 className='lg:text-[36px] text-[26px] font-helvetica font-normal'>Experience our Extra-ordinary Craftsmanship & Premium Quality Doors.y</h2>
						<p className='font-helvetica font-thin tracking-wider lg:text-[20px] text-[18px]'>At HAV’DOR, we don’t just build doors—we shape experiences that embody luxury, warmth, and lasting strength.Explore our curated collections up close and witness the artistry behind India's finest handcrafted entrances.</p>
					</div>
					<div className='flex justify-start item-start mt-[10px]'>
						<a href="#" className='px-2 py-2 border-[1px] border-white text-white uppercase'>book your visit</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CTA