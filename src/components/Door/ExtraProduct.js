"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const products = [
	{ name: "Door Lock | Black", code: "S26", image: "/asset/door/otherproducts/1.png" },
	{ name: "Door Stopper | Gold", code: "", image: "/asset/door/otherproducts/2.png" },
	{ name: "Hydraulic Buffer Hinge | Black", code: "", image: "/asset/door/otherproducts/3.png" },
	{ name: "Door Hinge | Gold", code: "", image: "/asset/door/otherproducts/4.png" },
	{ name: "Door Lock | Matt Gold", code: "S01", image: "/asset/door/otherproducts/5.png" },
	{ name: "Door Stopper | Black", code: "", image: "/asset/door/otherproducts/6.png" },
	{ name: "Hydraulic Buffer Hinge | Gold", code: "", image: "/asset/door/otherproducts/7.png" },
	{ name: "Door Lock | Black", code: "S08", image: "/asset/door/otherproducts/8.png" },
	{ name: "Door Stopper | Black", code: "", image: "/asset/door/otherproducts/9.png" },
	{ name: "Door Lock | Gold", code: "S08", image: "/asset/door/otherproducts/10.png" },
];

const ExtraProduct = () => {
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	return (
		<div className="bg-[#FFF1EA99] font-helvetica py-[40px] px-[20px] md:px-[60px] relative">
			<div className="flex justify-between flex-row items-end mb-[30px] flex-wrap gap-4">
				<div className="w-[50%]">
					<h2 className="font-normal  text-lightgrey text-[24px] md:text-[36px]">
						Other Product Recommendations
					</h2>
					<p className="text-[16px] md:text-[24px] font-thin">Locks | Hinges | Door Stoppers</p>
				</div>

				{/* Navigation Arrows */}
				<div className="flex gap-3 ">
					<button
						ref={prevRef}
						className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex justify-center items-center bg-[#FFF1EA] hover:bg-[#f9e3d8] transition"
					>
						<img src="/asset/right.png" className="rotate-180 w-[16px]" alt="Previous" />
					</button>
					<button
						ref={nextRef}
						className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex justify-center items-center bg-[#FFF1EA] hover:bg-[#f9e3d8] transition"
					>
						<img src="/asset/right.png" className="w-[16px]" alt="Next" />
					</button>
				</div>
			</div>

			<Swiper
				spaceBetween={20} // This controls space between slides
				modules={[Navigation]}
				navigation={{
					prevEl: prevRef.current,
					nextEl: nextRef.current,
				}}
				onBeforeInit={(swiper) => {
					swiper.params.navigation.prevEl = prevRef.current;
					swiper.params.navigation.nextEl = nextRef.current;
				}}
				breakpoints={{
					0: { slidesPerView: 1.3 },
					500: { slidesPerView: 1 },
					768: { slidesPerView: 3 },
					1024: { slidesPerView: 4 },
					1280: { slidesPerView: 5 },
				}}
			>
				{products.map((item, index) => (
					<SwiperSlide key={index}>
						<div className="lg:w-[313px] w-full h-auto text-left lg:px-[10%] px-[5%]"> {/* Added px-2 for spacing inside */}
							<img
								src={item.image}
								alt={item.name}
								className="w-full h-[200px] md:h-[281px] mb-3"
							/>
							<h3 className="text-[16px] md:text-[20px] font-light text-lightgrey">{item.name}</h3>
							<p className={`text-[14px] md:text-[16px] font-thin ${item.code ? "text-lightgrey" : "text-[#C6AFA0]"}`}>
								{item.code || ""}
							</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

		</div>
	);
};

export default ExtraProduct;
