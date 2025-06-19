"use client"
import ConsultationSidebar from '@/components/ConsultationSidebar';
import Breadcrumb from '@/components/Door/Details/Breadcrumb';
import ProductDetails from '@/components/Door/Details/ProductDetails'
import Specification from '@/components/Door/Details/Specification';
import Footer from '@/components/Layout/Footer';
import NavbarBrandStory from '@/components/Layout/NavbarBrandStory'
import doors from '@/data/DoorData';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const ProductDescription = ({ params }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const id = parseInt(params.productid);
	const product = doors.find((door) => door.id === id);
	// console.log(product)
	return (
		<>
			<ConsultationSidebar open={isSidebarOpen} setOpen={setIsSidebarOpen} />
			<div className='overflow-hidden'>
				<NavbarBrandStory />
				<Breadcrumb product={product} />
				<ProductDetails onOpenSidebar={() => setIsSidebarOpen(true)} product={product} />
				<Specification product={product} />
				<Footer />
			</div>
		</>
	)
}

export default ProductDescription