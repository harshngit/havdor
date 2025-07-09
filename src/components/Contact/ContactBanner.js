import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { IoLogoFacebook } from 'react-icons/io'

const ContactBanner = () => {
	return (
		<div className='flex w-full lg:flex-row flex-col mt-[0px]'>
			<div className='lg:w-[60%] w-full object-cover'>
				<img src="/asset/contact/contactimg.png" className='lg:h-[120vh] h-[367px] w-full ' alt="" />
			</div>
			<div className='lg:w-[40%]  lg:px-6 lg:py-[80px] px-5 pb-[80px] pt-[20px]  w-full flex flex-col justify-center items-start'>
				<h2 className='font-normal font-helvetica lg:text-[36px] text-[22px]'>Get in Touch</h2>
				<div className='flex lg:flex-col flex-col mt-5 justify-center items-start lg:gap-10 gap-5 w-full'>
					<div className='lg:w-[50%] w-full'>
						<h3 className='font-thin font-helvetica lg:text-[20px]  pb-[5px] text-[16px]'>CALL US</h3>
						<Link href="tel:+917027029188" target='_blank'>
							<p className='font-light font-helvetica hover:underline lg:text-[24px] text-[16px]'>702 702 9188</p>
						</Link>

						<Link href="tel:+917027028892" target='_blank'>
							<p className='font-light font-helvetica hover:underline lg:text-[24px] text-[16px]'>702 702 8892</p>
						</Link>
					</div>
					<div className='lg:w-[50%] w-full'>
						<h3 className='font-thin font-helvetica lg:text-[20px] pb-[5px] text-[16px]'>EMAIL US</h3>
						<Link href="mailto:contact@havdor.com">
							<p className='font-light hover:underline font-helvetica lg:text-[24px] text-[16px]'>contact@havdor.com</p>
						</Link>
					</div>
				</div>
				<div className='flex lg:flex-col flex-col mt-7 justify-center items-start lg:gap-10 gap-5 w-full'>
					<div className='lg:w-[50%] w-full'>
						<h3 className='font-thin font-helvetica lg:text-[20px] pb-[5px] text-[16px]'>VISIT US</h3>
						<Link href="https://maps.google.com/?q=30.635426,76.760468" target='_blank'>
							<p className='font-light font-helvetica hover:underline lg:text-[24px] text-[16px]'>254/255, 3rd floor, MCC-2,
								Airport Road, Mohali, Punjab</p>
						</Link>
					</div>
					<div className='lg:w-[50%] w-full'>
						<h3 className='font-thin font-helvetica lg:text-[20px] pb-[5px] text-[16px]'>EXPERIENCE CENTRE TIME</h3>
						<p className='font-light font-helvetica lg:text-[24px] text-[16px]'>Mon - Sat _ 10:00 am - 8:00 pm</p>
					</div>
				</div>
				<div className="flex justify-start item-center gap-5 mt-[5%]">
					<Link href="https://www.facebook.com/share/1Ejfnddk9n/?mibextid=wwXIfr" target='_blank'>
						{/* <img className="w-[24px]" src="/asset/footer/Facebookp.png" alt="" /> */}
						<IoLogoFacebook className='text-[30px] hover:text-primary' />
					</Link>
					<Link href="https://www.instagram.com/havdorindia?igsh=MXF4YWZ4dmVuYTFsbg==" target='_blank'>
						{/* <img className="w-[24px]" src="/asset/footer/Instagramp.png" alt="" /> */}
						<FaInstagram className='text-[28px] hover:text-primary' />
					</Link>
					<Link href="https://www.linkedin.com/company/hav-dor-india/" target='_blank'>
						<FaLinkedin className='text-[28px] hover:text-primary' />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ContactBanner