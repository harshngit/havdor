import React from 'react'

const BSBanner = () => {
	return (
		<div className='w-full lg:px-10 lg:pb-10 lg:pt-[12%] pt-[30%] px-5 py-5  bg-[#FFF1EA99]'>
			<div className='flex flex-col lg:w-[70%] lg:gap-16 gap-5 justify-start items-start'>
				<div className=''>
					<h2 className='font-normal font-helvetica text-lightgrey lg:text-[64px] text-[26px]'>
						The HAV’DOR Story
					</h2>
				</div>
				<div>
					<p className='font-thin font-helvetica text-lightgrey lg:text-[24px]'>
						Founded in 1998, La’Voeuz is an architectural firm with over 25 years of experience in transforming spaces with thoughtful, visionary design. With a rich portfolio of more than 500 projects across North India, our multidisciplinary team has consistently delivered work that balances aesthetic ambition with functional precision.
						From intimate residential sanctuaries to sprawling healthcare campuses and luxury villas, our passion-led approach has earned us a reputation for integrity, creativity, and craftsmanship. At the heart of everything we do is a deep respect for quality—especially the skill and dedication of local construction teams, including masons, carpenters, electricians, and plumbers who bring our visions to life.
						Over the years, we witnessed the evolution of nearly every aspect of the construction industry. From highly mechanized building techniques to modern plumbing, lighting, and modular woodwork—innovation has touched every corner of a project. But there was one critical element that remained overlooked: <span className='font-bold'> doors.</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default BSBanner