"use client";

import ConsultationSidebar from '@/components/ConsultationSidebar';
import CTA from '@/components/CTA';
import BannerEC from '@/components/Experience_Center/BannerEC';
import ExperienceCenterGallery from '@/components/Experience_Center/ExperienceCenterGallery';
import VideoSection from '@/components/Experience_Center/VideoSection';
import Footer from '@/components/Layout/Footer';
import NavbarBrandStory from '@/components/Layout/NavbarBrandStory';
import { useState } from 'react';

const ExperienceCenter = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<>
			<ConsultationSidebar open={isSidebarOpen} setOpen={setIsSidebarOpen} />
			<div className='overflow-hidden'>
				<NavbarBrandStory />
				<BannerEC />
				<ExperienceCenterGallery />
				<VideoSection />
				<CTA onOpenSidebar={() => setIsSidebarOpen(true)} />
				<Footer />
			</div>
		</>
	);
};

export default ExperienceCenter;
