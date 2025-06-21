import React from 'react';

const BannerEC = () => {
	return (
		<div className='w-full banner_EC h-[100vh]'>
			<div className='h-[50%]'></div>

			<div className='font-helvetica  hidden h-[50%] text-[#fff1ea] lg:px-10 px-4 py-5 lg:flex flex-col lg:justify-end lg:items-end relative'>
				{/* Headline block */}
				<div className='w-full font-light text-center leading-tight flex justify-start items-start flex-col gap-3'>

					{/* Large heading row */}
					<div className='flex lg:justify-start justify-center flex-wrap gap-4 w-full items-center'>
						<span className='font-light tracking-wider text-[clamp(2rem,8vw,7.875rem)]'>EXPERIENCE</span>
						<span className='font-light tracking-wider text-[clamp(2rem,8vw,7.875rem)]'>CENTRE</span>
						<span className='italic font-light tracking-wider text-[clamp(1.5rem,6vw,6.25rem)]'>for your</span>
					</div>

					{/* Desktop paragraph + "LUXURIOUS DOORS" */}
					<div className='lg:flex justify-start w-full items-start flex-wrap hidden gap-10'>
						<p className='text-[clamp(1rem,1.5vw,20px)] w-[25%] font-light text-left'>
							The HAV’DOR Experience Centre is thoughtfully created for those who appreciate the finer details—where you can see, feel, and explore our premium quality doors up close. From rich materials to precision finishes, discover how each door is a testament to timeless luxury, modern innovation, and personalized artistry.
						</p>
						<div className='flex gap-4'>
							<span className='font-normal tracking-wider text-[clamp(2rem,8vw,7.875rem)]'>LUXURIOUS</span>
							<span className='font-normal tracking-wider text-[clamp(2rem,8vw,7.875rem)]'>DOORS</span>
						</div>
					</div>

					{/* Mobile layout */}
					{/* <div className='lg:hidden flex justify-start flex-col gap-2 items-start'>
						<span className='italic tracking-wider text-[clamp(1.25rem,4vw,2rem)]'>for your</span>
						<div className='flex gap-3'>
							<span className='font-normal tracking-wider text-[clamp(2rem,8vw,7rem)]'>LUXURIOUS</span>
							<span className='font-normal tracking-wider text-[clamp(2rem,8vw,7rem)]'>DOORS</span>
						</div>
					</div> */}

				</div>
			</div>
		</div>
	);
};

export default BannerEC;
