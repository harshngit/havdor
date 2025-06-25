import Link from 'next/link'
import React from 'react'

const ContactBanner = () => {
	return (
		<div className='flex w-full lg:flex-row flex-col'>
			<div className='lg:w-[60%] w-full object-cover'>
				<img src="/asset/contact/contactimg.png" className='lg:h-[100vh] h-[367px] w-full ' alt="" />
			</div>
			<div className='lg:w-[40%]  lg:px-6 lg:py-[80px] px-5 pb-[80px] pt-[20px]  w-full flex flex-col justify-center items-start'>
				<h2 className='font-normal font-helvetica lg:text-[36px] text-[22px]'>Get in Touch</h2>
				<div className='flex lg:flex-col flex-col mt-5 justify-center items-start lg:gap-10 gap-5 w-full'>
					<div className='lg:w-[50%] w-full'>
						<h3 className='font-thin font-helvetica lg:text-[20px] pb-[5px] text-[16px]'>CALL US</h3>
						<p className='font-light font-helvetica lg:text-[24px] text-[16px]'>702 702 9188</p>
					</div>
					<div className='lg:w-[50%] w-full'>
						<h3 className='font-thin font-helvetica lg:text-[20px] pb-[5px] text-[16px]'>EMAIL US</h3>
						<p className='font-light font-helvetica lg:text-[24px] text-[16px]'>contact@havdor.com</p>
					</div>
				</div>
				<div className='flex lg:flex-col flex-col mt-7 justify-center items-start lg:gap-10 gap-5 w-full'>
					<div className='lg:w-[50%] w-full'>
						<h3 className='font-thin font-helvetica lg:text-[20px] pb-[5px] text-[16px]'>VISIT US</h3>
						<p className='font-light font-helvetica lg:text-[24px] text-[16px]'>254/255, 3rd floor, MCC-2,
							Airport Road, Mohali, Punjab</p>
					</div>
					<div className='lg:w-[50%] w-full'>
						<h3 className='font-thin font-helvetica lg:text-[20px] pb-[5px] text-[16px]'>EXPERIENCE CENTRE TIME</h3>
						<p className='font-light font-helvetica lg:text-[24px] text-[16px]'>Mon - Fri _ 10:00 am - 8:00 pm</p>
					</div>
				</div>
				<div className="flex justify-start item-center gap-5 mt-[5%]">
					<Link href="">
						<img className="w-[24px]" src="/asset/navbar/Facebook.png" alt="" />
					</Link>
					<Link href="">
						<img className="w-[24px]" src="/asset/navbar/Instagram.png" alt="" />
					</Link>
					<Link href="">
						<img className="w-[24px]" src="/asset/navbar/Linkedin.png" alt="" />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ContactBanner