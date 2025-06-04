import Link from 'next/link'
import React from 'react'

const CTA = ({
	onOpenSidebar
}) => {
	return (
		<div className='w-full font-helvetica  mt-10'>
			<div className='flex justify-center items-center lg:flex-row flex-col'>
				<div className='lg:w-[50%] w-full h-full'>
					<img className='w-full lg:h-[664px]' src="/asset/home/ctaimg.png" alt="" />
				</div>
				<div className='lg:w-[50%] lg:h-[664px] h-auto lg:pt-[100px] lg:pb-[100px] lg:pl-[60px] lg:pr-[150px] pr-5 pl-5 pt-5 pb-5 w-full bg-primary text-white flex justify-start items-start  gap-[50px] flex-col'>
					<div className='flex justify-start items-start flex-col gap-[50px]'>
						<h2 className='lg:text-[36px] text-[26px] font-helvetica font-normal'>Experience our Extra-ordinary Craftsmanship & Premium Quality Doors.</h2>
						<p className='font-helvetica font-thin tracking-wider lg:text-[20px] text-[18px]'>At HAV’DOR, we don’t just build doors—we shape experiences that embody luxury, warmth, and lasting strength.Explore our curated collections up close and witness the artistry behind India's finest handcrafted entrances.</p>
					</div>
					<div className='flex justify-start item-start mt-[10px]'>
						<Link href="https://forms.gle/v7BbgT77nydN6Wu1A" target='_blank'
							// onClick={onOpenSidebar}
							className="px-2 tracking-[.25em] font-thin py-2 border-[1px] border-white hover: hover:bg-[#FFF1EA1A] hover:border-[1px] hover:border-[#FFF1EA] text-white uppercase"
						>
							Book Your Visit
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
// 

export default CTA