import React from 'react';
import { motion } from 'framer-motion';

// Sample curriculum data with downloadable resources
const curriculumResources = [
  {
    id: 1,
    title: 'Introduction to Front-End Development',
    description: 'This PDF provides an overview of front-end development, covering HTML, CSS, and JavaScript basics.',
    fileUrl: '/path/to/resource1.pdf', // Replace with actual file path
  },
  {
    id: 2,
    title: 'React Essentials',
    description: 'Learn the core concepts of React, including components, hooks, and state management.',
    fileUrl: '/path/to/resource2.pdf', // Replace with actual file path
  },
  {
    id: 3,
    title: 'Advanced JavaScript Techniques',
    description: 'Explore advanced JavaScript topics and modern ES6+ features to enhance your development skills.',
    fileUrl: '/path/to/resource3.pdf', // Replace with actual file path
  },
  // Add more resources as needed
];

const CurriculumSection = () => {
  return (
    <section className="px-8 py-16 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-red-700 mb-8 text-center">Curriculum & Resources</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {curriculumResources.map((resource) => (
            <motion.div
              key={resource.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * resource.id }}
            >
              <h2 className="text-2xl font-semibold text-red-700 mb-2">{resource.title}</h2>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <motion.a
                href={resource.fileUrl}
                download
                className="mt-auto text-center inline-block bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Download PDF
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
