"use client"

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

const BSGallery = () => {
	return (
		<div className='bg-[#FFF1EA99] w-full lg:py-0 lg:px-0 py-5 px-5 '>
			{/* <div className='w-full lg:h-[800px] pb-[20px]'>
				<div className='flex flex-row gap-5 overflow-x-auto lg:overflow-hidden lg:flex-row lg:mb-0 mb-2 w-full lg:h-[800px] scrollbar-hide
  '>
					<div className='w-[100%] lg:min-w-[30%] h-[277px] lg:h-[800px] bg-[#fbe1d5] rounded-md'></div>
					<div className='w-[100%] lg:min-w-[20%] h-[277px] lg:h-[800px] bg-[#fbe1d5] rounded-md'></div>
					<div className='w-[100%] lg:min-w-[30%] h-[277px] lg:h-[800px] bg-[#fbe1d5] rounded-md'></div>
				</div>
			</div> */}

			<div className='flex lg:flex-row flex-col lg:px-10 gap-5 lg:py-16'>
				<div className='lg:w-[50%] flex justify-end items-start'>
					<p className='font-thin lg:w-[70%] font-helvetica text-lightgrey lg:text-[20px]'>
						Despite being the symbolic and literal entrance to a space, doors were often treated as an afterthought—reduced to merely a covering for an opening in the wall. No focus on precision, little attention to design intricacies, and a lack of standardization in quality or installation. This insight became our turning point.
					</p>
				</div>
				<div className='lg:w-[50%] flex justify-start items-start'>
					<p className='font-thin lg:w-[70%] font-helvetica text-lightgrey lg:text-[20px]'>
						We began extensive research into door-making—studying the gaps, the challenges faced during on-site execution, and the limitations of traditional methods. What we discovered reinforced our belief: a door is not just a component. It is a statement. A threshold. An introduction to the soul of a space.
						And so, our journey toward <span className='font-medium font-helvetica text-lightgrey lg:text-[20px]'>
							reinventing the modern Indian door began.
						</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default BSGallery