import React from 'react'

const AboutHome2 = () => {
	return (
		<div className='w-full lg:px-10 px-5 py-5 lg:py-10 font-helvetica mt-10'>
			<div className='flex justify-center items-center lg:flex-row flex-col gap-10'>
				<div className='lg:w-[40%] w-full'>
					<img className='w-[647px] h-[570px]' src="/asset/home/testinomial/testinomial.png" alt="" />
				</div>
				<div className='lg:w-[60%] w-full flex gap-[50px] flex-col'>
					<div className='flex justify-start items-start flex-col gap-[50px]'>
						<h2 className='text-[36px] font-helvetica font-normal'>The HAV’DOR Story</h2>
						<p className='font-helvetica font-thin tracking-wider text-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
					</div>
					<div className='flex justify-start item-start mt-[10px]'>
						<a href="#" className='px-2 py-2 border-[1px] border-black text-black uppercase'>About us</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutHome2