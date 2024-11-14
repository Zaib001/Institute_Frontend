import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedCourses from '../components/FeaturedCourses';
import TestimonialsSection from '../components/TestimonialsSection';
import LatestNewsSection from '../components/LatestNewsSection';
import BlogSection from '../components/BlogSection';

const HeaderPage = () => {
    return (
        <div>
            <HeroSection />
            <FeaturedCourses />
            <TestimonialsSection />
            <LatestNewsSection />
            <BlogSection />
        </div>
    );
};

export default HeaderPage;
