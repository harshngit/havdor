"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ExperienceCenterGallery = () => {
	const img = [
		"/asset/experience_center/img/1.webp",
		"/asset/experience_center/img/2.webp",
		"/asset/experience_center/img/3.webp",
		"/asset/experience_center/img/4.webp",
	]
	return (
		<div>
			<div className='w-full bg-white lg:flex hidden justify-center mt-10 lg:py-10 items-center gap-5'>
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
				<p className='text-[#2F3435] text-[18px] px-5 py-5'>
					The HAV’DOR Experience Centre is thoughtfully created for those who appreciate the finer details—where you can see, feel, and explore our premium quality doors up close. From rich materials to precision finishes, discover how each door is a testament to timeless luxury, modern innovation, and personalized artistry.
				</p>
				<Swiper
					autoplay={2000}
					spaceBetween={20}
					slidesPerView={1} // adjust as needed
					className='px-4'
				>
					{img.map((slide) => (
						<SwiperSlide className='flex justify-center !w-[85%] items-center'>
							<div className='w-[100%] h-[350px] bg-[#FFF1EA] '>
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