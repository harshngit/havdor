"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ExperienceCenterGallery = () => {
	return (
		<div>
			<div className='w-full bg-white lg:flex hidden justify-center mt-10 lg:py-10 items-center gap-5'>
				<div className='lg:w-[40%] w-full h-[800px] bg-[#FFF1EA]'></div>
				<div className='w-[40%] h-[800px] bg-[#FFF1EA]'></div>
				<div className='w-[20%] h-[800px] bg-[#FFF1EA]'></div>
			</div>
			<div className='lg:hidden w-full py-5'>
				<Swiper
					spaceBetween={20}
					slidesPerView={0.8} // adjust as needed
					className='px-4'
				>
					{[1, 2, 3].map((slide, index) => (
						<SwiperSlide key={index}>
							<div className='w-[329px] h-[350px] bg-[#FFF1EA] flex items-center justify-center text-xl font-thin'>
								Slide {slide}
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}

export default ExperienceCenterGallery