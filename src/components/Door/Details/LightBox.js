import React, { useState, useEffect } from 'react';

const LightBox = ({ product }) => {
	const images = [product.mainimg, product.img2, product.img3].filter(Boolean);
	const [selectedImage, setSelectedImage] = useState(images[0]);

	useEffect(() => {
		setSelectedImage(images[0]);
	}, [product]);

	return (
		<div className="w-full flex flex-col gap-6">
			{/* Main Image */}
			<div
				className=" bg-gray-100 lg:h-[691px] flex items-center justify-center overflow-hidden"
			>
				<img
					src={selectedImage}
					alt="Selected"
					className=" object-contain w-full"
				/>
			</div>

			{/* Thumbnails */}
			<div className="flex gap-4 justify-start items-start">
				{images.map((img, index) => (
					<img
						key={index}
						src={img}
						alt={`Thumbnail ${index}`}
						onClick={() => setSelectedImage(img)}
						className={`lg:w-[176px] w-24 lg:h-[117px] object-cover cursor-pointer hover:border-2 border-primary rounded ${selectedImage === img ? 'border-black' : 'border-gray-300'
							}`}
					/>
				))}
			</div>
		</div>
	);
};

export default LightBox;
