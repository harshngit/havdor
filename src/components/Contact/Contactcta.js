"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Contactcta = ({ onOpenSidebar }) => {
	const images = [
		'/asset/home/1.png',
		'/asset/home/2.png',
		'/asset/home/3.png',
		'/asset/home/4.png',
		'/asset/home/5.png',
		'/asset/home/6.png',
	];
	const imagesMobile = [
		'/asset/home/mobile/1.png',
		'/asset/home/mobile/2.png',
		'/asset/home/mobile/3.png',
		'/asset/home/mobile/4.png',
		'/asset/home/mobile/5.png',
		'/asset/home/mobile/6.png',
	];
	return (
		<div className='w-full font-helvetica lg:h-[700px]  mt-10'>
			<div className='flex justify-center items-center lg:flex-row flex-col'>
				<div className='lg:w-[50%] lg:block hidden w-full relative'>
					<Swiper
						modules={[Pagination, Autoplay]}
						pagination={{
							clickable: true,
							el: '.custom-pagination', // This MUST match the className below
						}}
						effect="fade"
						fadeEffect={{ crossFade: true }} // Smooth transition
						loop
						speed={2000}
						direction="horizontal"
						autoplay={{
							delay: 2000,
							disableOnInteraction: false,
						}}
						className="h-full w-full"
					>
						{images.map((src, i) => (
							<SwiperSlide key={i}>
								<img
									src={src}
									alt={`Slide ${i}`}
									className="w-full h-[700px] object-cover"
								/>
							</SwiperSlide>
						))}
					</Swiper>

					{/* Custom Pagination */}
					<div className="custom-pagination absolute !bottom-[2%] !left-[5%] z-10 flex gap-2"></div>
				</div>
				<div className='lg:w-[50%] block lg:hidden w-full relative'>
					<Swiper
						modules={[Pagination, Autoplay]}
						pagination={{
							clickable: true,
							el: '.custom-pagination', // This MUST match the className below
						}}
						effect="fade"
						fadeEffect={{ crossFade: true }} // Smooth transition
						loop
						speed={2000}
						direction="horizontal"
						autoplay={{
							delay: 2000,
							disableOnInteraction: false,
						}}
						className="h-full w-full"
					>
						{imagesMobile.map((src, i) => (
							<SwiperSlide key={i}>
								<img
									src={src}
									alt={`Slide ${i}`}
									className="w-full h-[700px] object-cover"
								/>
							</SwiperSlide>
						))}
					</Swiper>

					{/* Custom Pagination */}
					<div className="custom-pagination absolute !bottom-[2%] !left-[5%] z-10 flex gap-2"></div>
				</div>
				<div className='lg:w-[50%]  w-full bg-primary lg:h-[700px] h-[50%] flex justify-end items-start lg:px-[1.6%] lg:py-[5%] pl-[15px] py-[50px] gap-5 flex-col'>
					<h1 className='text-[26px] w-[80%] text-left font-helvetica font-thin text-white'>
						Inspired by our work? <br />
						We would be delighted to give your space a dream entrance!
					</h1>
					<button onClick={onOpenSidebar} className='px-2 py-2 border-[1px] border-white text-white hover:bg-[#FFF1EA1A] hover:border-[1px] hover:border-[#FFF1EA] '>REQUEST CONSULTATION</button>
				</div>
			</div>
		</div>
	)
}

export default Contactcta