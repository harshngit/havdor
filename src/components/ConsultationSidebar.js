"use client";
import Link from "next/link";
import React from "react";

const ConsultationSidebar = ({ open, setOpen }) => {
	return (
		<>
			{/* Overlay */}
			<div
				className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
					}`}
				onClick={() => setOpen(false)}
			></div>

			{/* Mobile Sidebar */}
			<div className={`fixed bg-white font-helvetica z-[10000] w-full h-[86vh] overflow-y-scroll transition-transform duration-300 ease-in-out
          bottom-0 left-0
          ${open ? "translate-y-0" : "translate-y-full"}
          rounded-t-2xl shadow-xl lg:hidden
        `}
			>
				<div className="flex justify-between border-b-[1px] border-[#2F3435] items-center p-[15px] mb-[5px]">
					<h2 className="font-normal w-[90%] text-center text-[20px] text-[#0F2837]">
						Request Consultation
					</h2>
					<button onClick={() => setOpen(false)}><img className="w-[24px]" src="/asset/cross.png" /></button>
				</div>
				<div className="flex p-6 flex-col justify-start gap-[30px] items-start">
					<div className="flex flex-col justify-start items-start gap-[30px]">
						<div className="flex justify-start items-start flex-col gap-[20px]">
							<h2 className="font-normal  text-[20px] text-lightgrey">
								Your personalised door consultation
							</h2>
							<p className="font-light font-helvetica text-[14px] w-[100%] text-lightgrey">
								To help you find the perfect fit, we offer a personalized consultation experience tailored to your specific needs.
							</p>
						</div>
						<div className="flex gap-[8px] justify-center items-center">
							<div className="flex flex-col gap-[8px] justify-center items-center">
								<div>
									<img className="w-[50px]" src="/asset/sidebar/request.png" alt="" />
								</div>
								<div>
									<h3 className="w-[90px] text-center text-[10px] text-lightgrey font-helvetica font-normal">Submit your request</h3>
								</div>
							</div>
							<div className="flex flex-col gap-[8px] justify-center items-center">
								<div>
									<img className="w-[50px]" src="/asset/sidebar/expert.png" alt="" />
								</div>
								<div>
									<h3 className="w-[90px] text-center text-[10px] text-lightgrey font-helvetica font-normal">Get a call back from our expert</h3>
								</div>
							</div>
							<div className="flex flex-col gap-[8px] justify-center items-center">
								<div>
									<img className="w-[50px]" src="/asset/sidebar/1on1.png" alt="" />
								</div>
								<div>
									<h3 className="w-[80px] text-center text-[10px] text-lightgrey font-helvetica font-normal">1 on 1 consultation</h3>
								</div>
							</div>
							<div className="flex flex-col gap-[8px] justify-center items-center">
								<div>
									<img className="w-[50px]" src="/asset/sidebar/bring1.png" alt="" />
								</div>
								<div>
									<h3 className="w-[90px] text-center text-[10px] text-lightgrey font-helvetica font-normal">Bring your vision to life</h3>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-start items-start">
						<Link href="" className='px-2 py-2 text-[18px] border-[1px] border-black text-[#2F3435] font-normal uppercase flex justify-center items-center'>Submit request
							<img className="w-[24px]" src="/asset/right.png" alt="" />
						</Link>
					</div>
				</div>
				<div className="flex justify-center items-center">
					<div className=" bg-[#FFF1EA] w-[88%] font-helvetica mt-[40px]  px-[30px] py-[40px]">
						<h3 className="text-[20px] font-normal mb-1">
							Why Book a HAV’DOR Consultation?
						</h3>
						<p className="text-[12px] font-normal text-lightgrey mb-[20px]">
							We believe in making right choices for you!
						</p>
						<ul className="list-disc pl-5 space-y-2 text-[14px] text-lightgrey">
							<li>Get expert advice customized to your taste, space, and functionality.</li>
							<li>Choose the perfect combination with guided support from our team.</li>
							<li>Understand all the ways your door can be uniquely yours.</li>
							<li>Preview samples and visualize the final result with confidence.</li>
							<li>From your first call to final installation—we’ve got you covered.</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Desktop Sidebar */}
			<div
				className={`fixed bg-white font-helvetica z-[10000] w-[667px] overflow-y-scroll h-full pl-[20px] pr-[20px] pt-[20px] transition-transform duration-300 ease-in-out
          top-0 right-0
          ${open ? "translate-x-0" : "translate-x-full"}
          rounded-none shadow-xl hidden lg:block
        `}
			>
				<div className="flex justify-end items-end mb-[50px]">
					<button onClick={() => setOpen(false)}><img className="w-[24px]" src="/asset/cross.png" /></button>
				</div>
				<div className="flex flex-col justify-start gap-[80px] items-start">
					<div className="flex flex-col justify-start items-start gap-[60px]">
						<div className="flex justify-start items-start flex-col gap-[20px]">
							<h2 className="font-normal  text-[36px] text-lightgrey">
								Your personalised door consultation
							</h2>
							<p className="font-light font-helvetica text-[18px] text-lightgrey">
								To help you find the perfect fit, we offer a personalized consultation experience tailored to your specific needs.
							</p>
						</div>
						<div className="flex gap-[70px] justify-center items-center">
							<div className="flex flex-col gap-[8px] justify-center items-center">
								<div>
									<img className="w-[100px]" src="/asset/sidebar/request.png" alt="" />
								</div>
								<div>
									<h3 className="w-[100px] text-center text-[14px] text-lightgrey font-helvetica font-normal">Submit your request</h3>
								</div>
							</div>
							<div className="flex flex-col gap-[8px] justify-center items-center">
								<div>
									<img className="w-[100px]" src="/asset/sidebar/expert.png" alt="" />
								</div>
								<div>
									<h3 className="w-[100px] text-center text-[14px] text-lightgrey font-helvetica font-normal">Get a call back from our expert</h3>
								</div>
							</div>
							<div className="flex flex-col gap-[8px] justify-center items-center">
								<div>
									<img className="w-[100px]" src="/asset/sidebar/1on1.png" alt="" />
								</div>
								<div>
									<h3 className="w-[100px] text-center text-[14px] text-lightgrey font-helvetica font-normal">1 on 1 consultation</h3>
								</div>
							</div>
							<div className="flex flex-col gap-[8px] justify-center items-center">
								<div>
									<img className="w-[100px]" src="/asset/sidebar/bring1.png" alt="" />
								</div>
								<div>
									<h3 className="w-[100px] text-center text-[14px] text-lightgrey font-helvetica font-normal">Bring your vision to life</h3>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-start items-start">
						<Link href="" className='px-2 py-2 border-[1px] border-black text-[#2F3435] font-normal uppercase flex justify-center items-center'>Submit request
							<img className="w-[24px]" src="/asset/right.png" alt="" />
						</Link>
					</div>
				</div>
				<div className=" bg-[#FFF1EA] font-helvetica mt-[40px]  px-[30px] py-[40px]">
					<h3 className="text-[20px] font-normal mb-1">
						Why Book a HAV’DOR Consultation?
					</h3>
					<p className="text-[12px] font-normal text-lightgrey mb-[20px]">
						We believe in making right choices for you!
					</p>
					<ul className="list-disc pl-5 space-y-2 text-[14px] text-lightgrey">
						<li>Get expert advice customized to your taste, space, and functionality.</li>
						<li>Choose the perfect combination with guided support from our team.</li>
						<li>Understand all the ways your door can be uniquely yours.</li>
						<li>Preview samples and visualize the final result with confidence.</li>
						<li>From your first call to final installation—we’ve got you covered.</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default ConsultationSidebar;
