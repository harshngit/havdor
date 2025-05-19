import React from 'react'

const Contactcta = () => {
	return (
		<div className='w-full font-helvetica lg:h-[40rem]  mt-10'>
			<div className='flex justify-center items-center lg:flex-row flex-col'>
				<div className='lg:w-[50%] w-full'>
					<img className='w-full lg:h-[40rem]' src="/asset/contact/cta.png" alt="" />
				</div>
				<div className='lg:w-[50%] lg:h-[40rem] h-auto lg:px-16 px-5 py-5 w-full bg-primary text-white flex justify-end items-start  gap-[20px] flex-col'>
					<div className='flex justify-end items-start flex-col gap-[50px]'>
						<p className='font-helvetica font-thin tracking-wider lg:text-[36px] text-[18px]'>Inspired by our work?<br />
							We would be delighted to give your space a dream entrance!</p>
					</div>
					<div className='flex justify-start item-start lg:mb-[5rem]'>
						<a href="#" className='px-2 py-2 lg:text-[20px] text-[18px] border-[1px] border-[#FFF1EA] text-white uppercase'>REQUEST CONSULTATION</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contactcta