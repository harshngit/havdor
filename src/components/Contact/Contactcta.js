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
	return (
		<div className='w-full font-helvetica lg:h-[40rem]  mt-10'>
			<div className='flex justify-center items-center lg:flex-row flex-col'>
				<div className='lg:w-[50%] w-full relative'>
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
									className="w-full h-[277px] object-cover"
								/>
							</SwiperSlide>
						))}
					</Swiper>

					{/* Custom Pagination */}
					<div className="custom-pagination absolute !bottom-[2%] !left-[5%] z-10 flex gap-2"></div>
				</div>
				<div className='lg:w-[50%] lg:h-[40rem] h-auto lg:px-16 px-5 py-5 w-full bg-primary text-white flex justify-end items-start  gap-[20px] flex-col'>
					<div className='flex justify-end items-start flex-col gap-[50px]'>
						<p className='font-helvetica font-thin tracking-wider lg:text-[36px] text-[18px]'>Inspired by our work?<br />
							We would be delighted to give your space a dream entrance!</p>
					</div>
					<div className='flex justify-start item-start lg:mb-[5rem]'>
						<button onClick={onOpenSidebar} className='px-2 py-2 tracking-wider lg:text-[20px] text-[18px] border-[1px] border-[#FFF1EA] text-[#FFF1EA] uppercase  hover:bg-[#FFF1EA1A] hover:border-[1px] hover:border-[#FFF1EA] '>REQUEST CONSULTATION</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contactcta