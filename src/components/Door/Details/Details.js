import React from 'react'

const Details = ({ product, onOpenSidebar }) => {
	return (
		<div className='px-5 py-5 font-helvetica lg:px-10 lg:py-10 flex justify-start items-start flex-col'>
			<div className='flex justify-start items-start flex-col'>
				<h3 className='font-normal lg:text-[32px] text-[20px] text-lightgrey'>{product.doorcode}</h3>
				<h3 className='mt-[8px] lg:text-[20px] font-light text-[15px] text-lightgrey'>{product.category} | {product.type}</h3>
			</div>
			<div className='flex lg:w-[607px] w-full justify-start mt-[9%] items-start flex-col'>
				<p className='lg:text-[20px] font-light text-[15px] text-lightgrey'>{product.desc}</p>
			</div>
			<div className='mt-[9%] flex lg:flex-row flex-col gap-[30px] lg:justify-start justify-center items-start'>
				<a href="">
					<button className="border h-[45px] hover:bg-[#FFF1EA80] font-helvetica font-normal lg:text-[20px] text-lightgrey border-lightgrey px-[15px] lg:w-auto w-full">
						DOWNLOAD BROCHURE
					</button>
				</a>
				<button onClick={onOpenSidebar} className="border h-[45px] hover:bg-[#FFF1EA80] font-helvetica font-normal lg:text-[20px] text-lightgrey border-lightgrey px-[15px] lg:w-auto w-full">
					REQUEST CONSULTATION
				</button>
			</div>
		</div>
	)
}

export default Details