import React from 'react'
import AccordionAbout from './AccordionAbout'
import AccordionAboutmob from './AccordionAboutmob'

const DefineSec = () => {
	return (
		<div className='w-full lg:py-10 px-5 py-5 lg:px-10'>
			<div className='flex justify-center item-center'>
				<h1 className='font-normal font-helvetica lg:text-[36px] text-[20px]'>What defines US...</h1>
			</div>
			<div className='mt-5 lg:flex hidden'>
				<AccordionAbout />
			</div>
			<div className='mt-5 lg:hidden flex'>
				<AccordionAboutmob />
			</div>
		</div>
	)
}

export default DefineSec