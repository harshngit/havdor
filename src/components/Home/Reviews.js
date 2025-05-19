"use client"
import React, { useRef, useState } from 'react'
import { Navigation, Controller, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

const Reviews = () => {
	const testimonials = [
		{
			name: "John Smith",
			title: "Architect & Interior Designer",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
			image: "/asset/home/testinomial/testinomial.png",
		},
		{
			name: "Alice Johnson",
			title: "Product Designer",
			text: "Great service and support. Highly recommended for professionals.",
			image: "/asset/home/testinomial/testinomial.png",
		},

		{
			name: "Jhn Lee",
			title: "Creative Director",
			text: "Truly elevated our business with their amazing work and approach.",
			image: "/asset/home/testinomial/testinomial.png",
		},
	];
	const textSwiperRef = useRef(null);
	const imageSwiperRef = useRef(null);
	const [textSwiper, setTextSwiper] = useState(null);
	const [imageSwiper, setImageSwiper] = useState(null);

	return (
		<div className="w-full lg:px-10 lg:py-10 py-10 px-5">
			<h2 className="lg:text-[36px] text-[24px] lg:font-light font-light font-helvetica lg:text-center text-left mb-10">Our Proud Supporters Say</h2>

			<div className="flex relative justify-center lg:flex-row flex-col gap-10 lg:items-start items-center ">
				<div className="absolute lg:left-4 left-[30%] lg:bottom-[30rem] bottom-[31rem] z-10 lg:flex justify-center items-center gap-5 hidden">
					<button className="swiper-button-prev !bg-[#fceae5] text-black  !shadow-none !rounded-sm ">
						<img className='!w-[24px]' src="/asset/Back.png" alt="" />
					</button>
					<button className="swiper-button-next !bg-[#fceae5]  !shadow-none !rounded-sm ">
						<img className='!w-[24px]' src="/asset/front.png" alt="" />
					</button>
				</div>
				{/* Text Swiper */}
				<Swiper
					modules={[Controller, Navigation]}
					onSwiper={setTextSwiper}
					// speed={700}
					// autoplay={{
					// 	delay: 5000,
					// 	disableOnInteraction: true,
					// }}
					controller={{ control: imageSwiper }}
					allowTouchMove={false}
					className="lg:w-[40%] w-full h-full"
				>
					{testimonials.map((item, index) => (
						<SwiperSlide key={index}>
							<div className="space-y-10">
								<div className='flex flex-col'>
									<h3 className="lg:text-[32px] text-[20px] font-helvetica font-semibold">{item.name}</h3>
									<p className="italic font-thin lg:text-[22px] text-gray-500">{item.title}</p>
								</div>
								<p className="relative text-lightgrey italic pl-10">
									<span className="absolute left-7 top-[-10px] w-2 text-black leading-none font-helveticaN"><img src="/asset/comma.png" alt="comma" /></span>
									{item.text}
								</p>
							</div>
						</SwiperSlide>
					))}

				</Swiper>

				{/* Image Swiper */}
				<div className="lg:w-[60%] w-full">
					<Swiper
						modules={[Controller, Navigation]}
						onSwiper={setImageSwiper}
						controller={{ control: textSwiper }}
						navigation={{
							nextEl: ".swiper-button-next",
							prevEl: ".swiper-button-prev",
						}}
						// speed={700}
						// autoplay={{
						// 	delay: 5000,
						// 	disableOnInteraction: true,
						// }}
						className="h-full w-full"
					>
						{testimonials.map((item, index) => (
							<SwiperSlide key={index} className='flex justify-start items-start lg:!w-[90%] w-full'>
								<img
									src={item.image}
									alt={item.name}
									className="w-[90%] h-[300px] rounded-lg"
								/>
							</SwiperSlide>
						))}
					</Swiper>

					{/* Navigation buttons */}

				</div>
			</div>
		</div>
	)
}

export default Reviews