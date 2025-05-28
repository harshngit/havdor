import React from 'react'

const KeyPoints = () => {
	return (
		<div className='w-full lg:py-10 lg:pl-10 lg:pr-0 py-5 px-5 bg-primary flex lg:relative overflow-hidden'>
			<div className='lg:w-[90%] flex flex-col justify-start items-start gap-[50px]'>
				<div className='lg:w-[80%] flex flex-col justify-start items-start '>
					<h3 className='font-normal lg:text-[36px] text-[26px] font-helvetica text-[#FFF1EA]'>
						We strive to cater to your efficiency & control on-site construction limitations such as ...
					</h3>
				</div>
				<div className='w-full hidden mt-14 lg:grid lg:grid-cols-4 grid-cols-1 gap-5'>
					{/* 1 */}
					<div className='flex flex-col justify-start items-start gap-12'>
						<div>
							<img src="asset/about/keypoints/qualityvariability.png" alt="" />
						</div>
						<div className='flex justify-start flex-col items-start gap-5'>
							<h4 className='font-normal font-helvetica text-[20px] text-[#FFF1EA]'>Quality Variability</h4>
							<p className='font-thin font-helvetica text-[18px] text-[#FFF1EA]'>
								On-site construction can be affected by various factors, such as weather, labor skills, and material quality, leading to variability in quality.
							</p>
						</div>
					</div>
					{/* 2 */}
					<div className='flex justify-start flex-col items-start gap-12'>
						<div>
							<img src="asset/about/keypoints/Timeconsuming.png" alt="" />
						</div>
						<div className='flex justify-start flex-col items-start gap-5'>
							<h4 className='font-normal font-helvetica text-[20px] text-[#FFF1EA]'>Time-Consuming</h4>
							<p className='font-thin font-helvetica text-[18px] text-[#FFF1EA]'>On-site construction can be time-consuming, especially if there are delays or issues with labor or materials.
							</p>
						</div>
					</div>
					{/* 3 */}
					<div className='flex justify-start flex-col items-start gap-12'>
						<div>
							<img src="asset/about/keypoints/highlabourcost.png" alt="" />
						</div>
						<div className='flex justify-start flex-col items-start gap-5'>
							<h4 className='font-normal font-helvetica text-[20px] text-[#FFF1EA]'>Higher Labor Costs</h4>
							<p className='font-thin font-helvetica text-[18px] text-[#FFF1EA]'>
								On-site construction often requires skilled labor, which can be more expensive than modular production.
							</p>
						</div>
					</div>
					{/* 4 */}
					<div className='flex justify-start flex-col items-start gap-12'>
						<div>
							<img src="asset/about/keypoints/designlimitations.png" alt="" />
						</div>
						<div className='flex justify-start flex-col items-start gap-5'>
							<h4 className='font-normal font-helvetica text-[20px] text-[#FFF1EA]'>Design Limitations</h4>
							<p className='font-thin font-helvetica text-[18px] text-[#FFF1EA]'>On-site construction can be limited by the skills and experience of local carpenters, potentially restricting design options.
							</p>
						</div>
					</div>
				</div>
				<div className='w-full lg:hidden flex justify-start items-start flex-col gap-12'>
					{/* 1 */}
					<div className='flex flex-col justify-start items-start gap-5'>
						<div className='flex justify-center items-center gap-5'>
							<img src="asset/about/keypoints/qualityvariability.png" alt="" />
							<h4 className='font-normal font-helvetica text-[20px] text-[#FFF1EA]'>Quality Variability</h4>
						</div>
						<div className='flex justify-start flex-col items-start gap-12'>
							<p className='font-thin font-helvetica text-[18px] text-[#FFF1EA]'>
								On-site construction can be affected by various factors, such as weather, labor skills, and material quality, leading to variability in quality.
							</p>
						</div>
					</div>
					{/* 2 */}
					<div className='flex justify-start flex-col items-start gap-12'>
						<div className='flex justify-center items-center gap-5'>
							<img src="asset/about/keypoints/Timeconsuming.png" alt="" />
							<h4 className='font-normal font-helvetica text-[20px] text-[#FFF1EA]'>Time-Consuming</h4>
						</div>
						<div className='flex justify-start flex-col items-start gap-12'>

							<p className='font-thin font-helvetica text-[18px] text-[#FFF1EA]'>On-site construction can be time-consuming, especially if there are delays or issues with labor or materials.
							</p>
						</div>
					</div>
					{/* 3 */}
					<div className='flex justify-start flex-col items-start gap-12'>
						<div className='flex justify-center items-center gap-5'>
							<img src="asset/about/keypoints/highlabourcost.png" alt="" />
							<h4 className='font-normal font-helvetica text-[20px] text-[#FFF1EA]'>Higher Labor Costs</h4>
						</div>
						<div className='flex justify-start flex-col items-start gap-5'>

							<p className='font-thin font-helvetica text-[18px] text-[#FFF1EA]'>
								On-site construction often requires skilled labor, which can be more expensive than modular production.
							</p>
						</div>
					</div>
					{/* 4 */}
					<div className='flex justify-start flex-col items-start gap-12'>
						<div className='flex justify-center items-center gap-5'>
							<img src="asset/about/keypoints/designlimitations.png" alt="" />
							<h4 className='font-normal font-helvetica text-[20px] text-[#FFF1EA]'>Design Limitations</h4>
						</div>
						<div className='flex justify-start flex-col items-start gap-5'>

							<p className='font-thin font-helvetica text-[18px] text-[#FFF1EA]'>On-site construction can be limited by the skills and experience of local carpenters, potentially restricting design options.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='lg:block hidden absolute -bottom-[5%] -right-[65px] w-[400px]'>
				<img src="/asset/about/logoa.png" className=' opacity-[10%]' alt="logoa" />
			</div>
		</div>
	)
}

export default KeyPoints