import React from 'react';
import Link from 'next/link';

const Breadcrumb = ({ product }) => {
	const { category, type, doorcode } = product;

	return (
		<div className="flex  justify-start items-center lg:mt-[8%] mt-[25%] h-[64px] text-lightgrey px-6 py-4">
			<Link href="/door" className='flex justify-center items-center'>
				<span className="hover:underline font-thin lg:text-[20px] text-[13px] cursor-pointer">Doors</span>
			</Link>
			<span className="mx-1 font-thin lg:text-[20px] text-[13px]">/</span>
			<span className='font-thin lg:text-[20px] text-[13px]'>{category}, {type}</span>
			<span className="mx-1 font-thin lg:text-[20px] text-[13px]">/</span>
			<span className="text-black font-semibold lg:text-[20px] text-[13px]">{doorcode}</span>
		</div>
	);
};

export default Breadcrumb;
