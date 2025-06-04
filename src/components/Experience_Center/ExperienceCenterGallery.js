"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ExperienceCenterGallery = () => {
	const img = [
		"/asset/experience_center/img/1.png",
		"/asset/experience_center/img/2.png",
		"/asset/experience_center/img/3.png",
		"/asset/experience_center/img/4.png",
	]
	return (
		<div>
			<div className='w-full bg-white lg:flex hidden justify-center mt-10 lg:py-10 items-center gap-5'>
				{/* <div className='lg:w-[40%] w-full h-[800px] bg-[#FFF1EA]'></div>
				<div className='w-[40%] h-[800px] bg-[#FFF1EA]'></div>
				<div className='w-[20%] h-[800px] bg-[#FFF1EA]'></div> */}
				<Swiper
					spaceBetween={20}
					slidesPerView={3} // adjust as needed
					className='px-4'
				>
					{img.map((slide) => (
						<SwiperSlide>
							<div className='w-full h-full bg-[#FFF1EA]'>
								<img className='h-[997px]' src={slide} alt="" />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className='lg:hidden w-full py-5'>
				<Swiper
					autoplay={2000}
					spaceBetween={20}
					slidesPerView={1} // adjust as needed
					className='px-4'
				>
					{img.map((slide) => (
						<SwiperSlide className='flex justify-center items-center'>
							<div className='w-full h-[350px] bg-[#FFF1EA] '>
								<img src={slide} alt="" />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}

export default ExperienceCenterGallery