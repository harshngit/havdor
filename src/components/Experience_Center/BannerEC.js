import React from 'react';

const BannerEC = () => {
	return (
		<div className='w-full  bg-[#FFF1EA] '>
			<div className='h-[50%]'>
				<img className='' src="/asset/experience_center/experience-center.png" alt="" />
			</div>
			<div className='font-helvetica h-[50%] lg:px-10 lg:py-10 px-2 py-5 flex flex-col lg:justify-end lg:items-center relative'>
				{/* Paragraph block at the top center */}
				<div className='absolute lg:block hidden bottom-[60%] right-[35%] text-left w-[15%]'>
					<p className='text-sm font-light text-lightgrey'>
						The HAV’DOR Experience Centre is thoughtfully created for those who appreciate the finer details—where you can see, feel, and explore our premium quality doors up close. From rich materials to precision finishes, discover how each door is a testament to timeless luxury, modern innovation, and personalized artistry.
					</p>
				</div>

				{/* Large headline lines */}
				<div className='text-[clamp(2rem,8vw,6rem)]  font-light text-center leading-tight space-y-2'>
					<div className='flex lg:justify-between justify-start gap-2 items-center'>
						<span className='font-normal font-helvetica'>EXPERIENCE</span>{' '}
						<span className='font-normal font-helvetica'>CENTRE</span>
					</div>
					<div className='lg:block hidden'>
						<span className='italic font-helvetica'>for your</span>{' '}
						<span className='font-normal font-helvetica'>LUXURIOUS</span>{' '}
						<span className='font-normal font-helvetica'>DOORS</span>
					</div>
					<div className='lg:hidden flex justify-start flex-col gap-2 items-start'>
						<span className='italic font-helvetica'>for your</span>{' '}
						<div>
							<span className='font-normal font-helvetica'>LUXURIOUS</span>{' '}
							<span className='font-normal font-helvetica'>DOORS</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BannerEC;
