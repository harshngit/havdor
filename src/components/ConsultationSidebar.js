"use client";
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
			<div className={`fixed bg-white font-helvetica z-[10000] w-full h-[80vh] p-6 transition-transform duration-300 ease-in-out
          bottom-0 left-0
          ${open ? "translate-y-0" : "translate-y-full"}
          rounded-t-2xl shadow-xl lg:hidden
        `}
			>
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-xl font-semibold">Your personalised door consultation</h2>
					<button onClick={() => setOpen(false)}>Close</button>
				</div>

				<div className="space-y-4 text-sm">
					<ul className="space-y-2">
						<li>✅ Submit your request</li>
						<li>✅ Get matched with an expert</li>
						<li>✅ 1-on-1 consultation</li>
						<li>✅ Bring your vision to life</li>
					</ul>
					<button className="bg-black text-white px-4 py-2 rounded">
						Submit Request
					</button>
				</div>
			</div>

			{/* Desktop Sidebar */}
			<div
				className={`fixed bg-white font-helvetica z-[10000] w-[667px] h-full p-6 transition-transform duration-300 ease-in-out
          top-0 right-0
          ${open ? "translate-x-0" : "translate-x-full"}
          rounded-none shadow-xl hidden lg:block
        `}
			>
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-xl font-semibold">Your personalised door consultation</h2>
					<button onClick={() => setOpen(false)}>Close</button>
				</div>

				<div className="space-y-4 text-sm">
					<ul className="space-y-2">
						<li>✅ Submit your request</li>
						<li>✅ Get matched with an expert</li>
						<li>✅ 1-on-1 consultation</li>
						<li>✅ Bring your vision to life</li>
					</ul>
					<button className="bg-black text-white px-4 py-2 rounded">
						Submit Request
					</button>
				</div>
			</div>
		</>
	);
};

export default ConsultationSidebar;
