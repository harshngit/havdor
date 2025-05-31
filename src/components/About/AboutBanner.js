import React from 'react'

const AboutBanner = () => {
	return (
		<div className='banner_about w-full h-screen relative'>
			<div className="absolute inset-0 z-10" />


			<div className="absolute bottom-10 lg:left-10 left-5 z-20  lg:px-4 flex lg:flex-row flex-col-reverse justify-start items-end">
				<div className='flex justify-start items-end lg:w-[40%] w-[100%]'>
					<h1 className="text-white font-helvetica xl:text-[64px]  text-[26px] font-normal ">
						Our Philosophy
					</h1>
				</div>

				<div className='flex justify-start items-center lg:w-[60%] w-full'>
					<p className="text-white font-helvetica font-regular lg:text-[26px] text-[20px] w-[100%] ">
						HAV'DOR stands for "The Door to Your Home," symbolizing prestige, safety and connection. <br />
						With the philosophy of “LET'S CONNECT”, we aim to link spaces and emotions, luxury and functionality, meeting the ultimate expectations of elite clients for sophisticated living.
					</p>
				</div>
			</div>
		</div>
	)
}

export default AboutBanner