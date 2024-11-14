import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const newsItems = [
  {
    id: 1,
    category: 'Category',
    date: 'June 2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    id: 2,
    category: 'Category',
    date: 'June 2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    id: 3,
    category: 'Category',
    date: 'June 2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
];

const LatestNewsSection = () => {
  return (
    <section className="container mx-auto px-4 py-16  rounded-lg ">
      <div className="flex flex-col md:flex-row md:space-x-8 items-start">
        {/* Left Section - Heading and Description */}
        <div className="md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-6xl font-extrabold mb-4">Latest<br/> News</h2>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-orange-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-orange-600 transition duration-300">
            View All News
          </button>
        </div>

        {/* Right Section - News Items */}
        <div className="md:w-2/3">
          {newsItems.map((item) => (
            <motion.div
              key={item.id}
              className="bg-gray-100 p-8 rounded-lg mb-4 shadow-sm hover:shadow-md cursor-pointer transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-center mb-2">
                <p className="text-orange-500 font-semibold text-sm">{item.category}</p>
                <p className="text-gray-500 text-xs">{item.date}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-700 font-extrabold">{item.description}</p>
                <FiArrowRight className="text-gray-400 text-xl ml-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection;
