import React from 'react'
import LightBox from './LightBox'
import Details from './Details'

const ProductDetails = ({ product, onOpenSidebar }) => {
	return (
		<div className='py-5 lg:py-1'>
			<div className='flex lg:flex-row flex-col'>
				{/* lightbox */}
				<div className='lg:w-[60%] w-full'>
					<LightBox product={product} />
				</div>
				<div>
					<Details product={product} onOpenSidebar={onOpenSidebar} />
				</div>
			</div>
		</div>
	)
}

export default ProductDetails