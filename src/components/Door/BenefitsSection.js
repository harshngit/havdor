import React from 'react';

const BenefitsSection = () => {
	return (
		<div className="bg-primary text-[#FFF1EA] font-helvetica py-16 px-6 md:px-20">
			<div className="w-full">
				<h2 className="lg:text-[32px] text-[20px] font-normal mb-10">
					Benefits of having an Hav’dor
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:text-[20px] text-[16px] font-light tracking-wider text-[#FFF1EA]">
					<p>
						With a wide range of design options and deep customization capabilities, HAV’DOR empowers clients
						to create doors that truly reflect their spaces and personalities.
					</p>
					<p>
						As modular construction gains popularity for its precision, efficiency, and cost-effectiveness,
						our advanced manufacturing ensures each door is crafted with uncompromising quality.
					</p>
					<p>
						Trusted by homeowners, architects, and interior designers alike, HAV’DOR delivers timeless
						craftsmanship with modern reliability—making us the preferred choice for premium spaces.
					</p>
				</div>
			</div>
		</div>
	);
};

export default BenefitsSection;
