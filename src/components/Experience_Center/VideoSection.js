import Link from 'next/link'
import React from 'react'

const VideoSection = () => {
	return (
		<div className='w-full lg:px-10  lg:py-10 font-helvetica mt-10'>
			<div className='flex justify-center items-center lg:flex-row flex-col gap-10'>
				<div className='lg:w-[40%] w-full flex gap-[50px] flex-col px-5 py-5'>
					<div className='flex justify-start items-start flex-col gap-[50px]'>
						<h2 className='text-[36px] font-helvetica font-normal'>Fully Equipped Centre</h2>
						<p className='font-helvetica font-thin tracking-wider text-[20px]'>From curated design galleries to material samples, live hardware displays, and finish options, every corner is built to inspire. Equipped with the latest in modular construction technology, it allows architects, interior designers, and homeowners to explore endless customization possibilities, compare finishes, and understand the quality behind each creation.
							Whether you're selecting for a luxury villa, boutique hotel, or a signature home, this space empowers you to make informed, confident choices—guided by our team of design experts.</p>
					</div>
					<div className='flex justify-start item-start mt-[10px]'>
						<Link href="" className='px-2  hover:bg-[#FFF1EA80] hover:border-[1px] hover:border-[#2F3435]   py-2 border-[1px] border-black text-black uppercase'>VIEW VIDEO</Link>
					</div>
				</div>
				<div className='lg:w-[60%] w-full'>
					<img className='w-full h-[570px]' src="/asset/home/testinomial/testinomial.png" alt="" />
				</div>
			</div>
		</div>
	)
}

export default VideoSection