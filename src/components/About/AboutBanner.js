import React from 'react'

const AboutBanner = () => {
	return (
		<div className='banner_about w-full h-screen relative'>
			<div className="absolute inset-0 z-10" />


			<div className="absolute bottom-10 lg:left-10 left-5 z-20  lg:px-4 flex lg:flex-row flex-col-reverse justify-start items-end">
				<div className='flex justify-start items-end lg:w-[40%] w-[100%]'>
					<h1 className="text-white font-helvetica xl:text-[36px]  text-[26px] font-normal ">
						About HAV’DOR
					</h1>
				</div>

				<div className='flex justify-start items-center lg:w-[60%] w-full'>
					<p className="text-white font-helvetica font-thin lg:text-[26px] text-[20px] w-[100%] ">
						As a pioneer in the premium Indian market,<br />
						HAV’DOR combines exceptional design, exquisite craftsmanship, and an unparalleled attention to detail to deliver unique door solutions for mansions, villas, boutique hotels, and high-end commercial spaces.
					</p>
				</div>
			</div>
		</div>
	)
}

export default AboutBanner