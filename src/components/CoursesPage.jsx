import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const courses = [
  {
    id: 1,
    title: 'Mastering Front-End Development',
    description: 'A comprehensive course covering all aspects of front-end development.',
    image: '/path/to/image1.jpg', // Replace with actual image path
  },
  {
    id: 2,
    title: 'Introduction to Data Science',
    description: 'Learn the fundamentals of data analysis and machine learning.',
    image: '/path/to/image2.jpg', // Replace with actual image path
  },
  {
    id: 3,
    title: 'Full-Stack JavaScript Bootcamp',
    description: 'Become a full-stack developer by mastering front-end and back-end development.',
    image: '/path/to/image3.jpg', // Replace with actual image path
  },
  {
    id: 4,
    title: 'Mastering Front-End Development',
    description: 'A comprehensive course covering all aspects of front-end development.',
    image: '/path/to/image1.jpg', // Replace with actual image path
  },
  {
    id: 5,
    title: 'Introduction to Data Science',
    description: 'Learn the fundamentals of data analysis and machine learning.',
    image: '/path/to/image2.jpg', // Replace with actual image path
  },
  {
    id: 6,
    title: 'Full-Stack JavaScript Bootcamp',
    description: 'Become a full-stack developer by mastering front-end and back-end development.',
    image: '/path/to/image3.jpg', // Replace with actual image path
  },
  // Add more courses as needed
];

const CoursesPage = () => {
  return (
    <section className="px-8 py-16 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Courses & Exams</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <Link to={`/courses/${course.id}`}>
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
                  <p className="text-gray-600">{course.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesPage;
