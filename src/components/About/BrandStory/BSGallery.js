import React from 'react'

const BSGallery = () => {
	return (
		<div className='bg-[#FFF1EA] w-full lg:py-0 lg:px-0 py-5 px-5'>
			<div className='flex lg:flex-row flex-col lg:mb-0 mb-2 w-full h-[800px] gap-5'>
				<div className='lg:w-[40%] w-full h-[500px] bg-[#fbe1d5]  lg:h-[800px]'></div>
				<div className='lg:w-[20%] w-full h-[500px] bg-[#fbe1d5] lg:h-[800px]'></div>
				<div className='lg:w-[40%] w-full h-[500px] bg-[#fbe1d5] lg:h-[800px]'></div>
			</div>
			<div className='flex lg:flex-row flex-col lg:px-10 gap-5 lg:py-16'>
				<div className='lg:w-[50%] flex justify-end items-start'>
					<p className='font-thin lg:w-[70%] font-helvetica text-lightgrey lg:text-[20px]'>
						Despite being the symbolic and literal entrance to a space, doors were often treated as an afterthought—reduced to merely a covering for an opening in the wall. No focus on precision, little attention to design intricacies, and a lack of standardization in quality or installation. This insight became our turning point.
					</p>
				</div>
				<div className='lg:w-[50%] flex justify-start items-start'>
					<p className='font-thin lg:w-[70%] font-helvetica text-lightgrey lg:text-[20px]'>
						We began extensive research into door-making—studying the gaps, the challenges faced during on-site execution, and the limitations of traditional methods. What we discovered reinforced our belief: a door is not just a component. It is a statement. A threshold. An introduction to the soul of a space.
						And so, our journey toward <span className='font-bold font-helvetica text-lightgrey lg:text-[20px]'>
							reinventing the modern Indian door began.
						</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default BSGallery