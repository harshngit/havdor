import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const BannerHome = () => {
	const images = [
		'/asset/home/1.png',
		'/asset/home/2.png',
		'/asset/home/3.png',
		'/asset/home/4.png',
		'/asset/home/5.png',
		'/asset/home/6.png',
	];

	return (
		<div>
			<div className='flex justify-center items-center lg:flex-row flex-col'>
				<div className='lg:w-[60%] w-full h-screen'>
					<div className="relative h-screen w-full">
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
										className="w-full h-full object-cover"
									/>
								</SwiperSlide>
							))}
						</Swiper>

						{/* Custom Pagination */}
						<div className="custom-pagination absolute !bottom-[2%] !left-[5%] z-10 flex gap-2"></div>
					</div>

				</div>
				<div className='lg:w-[40%] w-full bg-primary lg:h-screen h-[50%] flex justify-end items-start px-[1.6%] py-[5%] gap-5 flex-col'>
					<h1 className='text-[26px] w-[80%] text-left font-helvetica font-thin text-white'>
						Inspired by our work? <br />
						We would be delighted to give your space a dream entrance!
					</h1>
					<a href="#" className='px-2 py-2 border-[1px] border-white text-white'>REQUEST CONSULTATION</a>
				</div>
			</div>
		</div>
	)
}

export default BannerHome