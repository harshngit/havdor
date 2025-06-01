"use client"
import React, { useRef, useState } from 'react'
import { Navigation, Controller, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

const Reviews = () => {
	const testimonials = [
		{
			name: "Rajesh S",
			title: "Architect & Interior Designer",
			text: "The quality of Hav'Dor doors is top-class and we loved picking our own style and finish. It was simple to select and our home now looks elegant and grand. Installation was clean and quick.",
			image: "/asset/home/testinomial/testinomial.png",
		},
		{
			name: "Anjali Pal",
			title: "Marketing Manager",
			text: "Hav'Dor made our dream door so easy with their clear options and support. The doors are sturdy, stylish, and make our new house feel like a luxury Villa.",
			image: "/asset/home/testinomial/testinomial.png",
		},

		{
			name: "Vikram R.",
			title: "Government Officer",
			text: "Hav'Dor’s doors are superbly crafted and add a rich, classy vibe to our home. Customizing was hassle-free, and the quality makes every paisa worth it.",
			image: "/asset/home/testinomial/testinomial.png",
		},

		{
			name: "Neha K.",
			title: "Charted Accountant",
			text: "We picked Hav'Dor for their amazing quality and easy customization process. The doors look so luxurious, our guests can’t stop praising our home’s new look!",
			image: "/asset/home/testinomial/testinomial.png",
		},
	];
	const textSwiperRef = useRef(null);
	const imageSwiperRef = useRef(null);
	const [textSwiper, setTextSwiper] = useState(null);
	const [imageSwiper, setImageSwiper] = useState(null);

	return (
		<div className="w-full lg:pl-10 lg:pr-0 lg:py-10 mb-10	 py-10 px-5 font-helvetica">
			<h2 className="lg:text-[36px] text-[24px] lg:font-light font-light font-helvetica mb-10 lg:ml-[41%]">Our Proud Supporters Say</h2>

			<div className="flex relative justify-center lg:flex-row flex-col gap-10 lg:items-start items-center ">
				<div className="absolute lg:left-4 left-[30%] lg:bottom-[32rem] bottom-[31rem] z-10 lg:flex justify-center items-center gap-5 hidden">
					<button className="swiper-button-prev !bg-[#fceae5] text-black hover:border-[1px] hover:border-lightgrey cursor-pointer transition-all duration-100 ease-in  !shadow-none !rounded-sm ">
						<img className='!w-[24px]' src="/asset/Back.png" alt="" />
					</button>
					<button className="swiper-button-next !bg-[#fceae5] hover:border-[1px] hover:border-lightgrey cursor-pointer transition-all duration-100 ease-in   !shadow-none !rounded-sm ">
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
									<h3 className="lg:text-[32px] text-[20px] font-helvetica font-400 text-[#2F3435]">{item.name}</h3>
									<p className="italic text-[#2F3435] font-thin lg:text-[32px] ">{item.title}</p>
								</div>
								<p className="relative text-[#2F3435] font-thin italic pl-10">
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
						className="h-full w-full "
					>
						{testimonials.map((item, index) => (
							<SwiperSlide key={index} className='flex justify-start  items-start lg:!w-[90%] w-full'>
								<img
									src={item.image}
									alt={item.name}
									className="w-[97%] h-[300px] rounded-lg"
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