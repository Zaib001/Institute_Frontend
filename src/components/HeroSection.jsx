import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import ScrollingTextSection from './ScrollingTextSection';

const HeroSection = () => {
    return (
        <>
        <div className="relative">
            {/* Parallax Background */}
            <Parallax
                bgImage="https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with the path to your background image
                strength={500}
            >
                <div className="h-screen flex items-center justify-center bg-black bg-opacity-50">
                    <div className="text-left px-8 max-w-full overflow-x-auto">
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold text-white leading-tight whitespace-nowrap"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Jolie Institute <br/><span className="text-red-600">Sterile Processing Excellence</span>
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-[20px] mt-6 text-white leading-tight whitespace-nowrap"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Train for a Vital Healthcare Role Behind the Scenes, Ensuring Safety and Sterility in Patient Care
                        </motion.p>
                        <div className="flex space-x-4 mt-8">
                            <motion.button
                                className="px-4 py-2 uppercase border border-white text-white hover:bg-white hover:text-black transition duration-300"
                            >
                                Book Your Appointment
                            </motion.button>
                           
                        </div>
                    </div>
                </div>

            </Parallax>
           
        </div>
        {/* <ScrollingTextSection/> */}
        </>
    );
};

export default HeroSection;
