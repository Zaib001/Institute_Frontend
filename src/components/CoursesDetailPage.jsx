import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

// Mock course details data
const courseDetails = {
  1: {
    title: 'Mastering Front-End Development',
    description: 'A comprehensive course covering all aspects of front-end development.',
    content: 'Detailed content of the course goes here...',
    instructor: {
      name: 'Jane Doe',
      bio: 'Jane Doe is an experienced front-end developer and instructor with over 10 years of experience building modern web applications.',
      image: '/path/to/instructor-image.jpg', // Replace with actual image path
    },
    image: '/path/to/image1.jpg', // Replace with actual image path
    previewVideoUrl: '/path/to/preview-video.mp4', // Replace with actual video URL
    reviews: [
      { id: 1, name: 'John Smith', rating: 5, comment: 'Great course, highly recommend!' },
      { id: 2, name: 'Emily Johnson', rating: 4, comment: 'Very informative and engaging.' },
      // Add more reviews as needed
    ],
  },
  // Add more course details as needed
};

const CourseDetailsPage = () => {
  const { id } = useParams();
  const course = courseDetails[id];

  if (!course) {
    return <p className="text-center mt-20 text-red-700">Course not found.</p>;
  }

  return (
    <section className="px-8 py-16 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Course Preview Video */}
        <motion.div
          className="video-container mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <video controls className="w-full h-64 object-cover rounded-t-lg">
            <source src={course.previewVideoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4 text-red-700">{course.title}</h1>
          <p className="text-gray-700 mb-6">{course.description}</p>

          {/* Instructor Bio */}
          <div className="flex items-center mb-6">
            <img
              src={course.instructor.image}
              alt={course.instructor.name}
              className="w-16 h-16 rounded-full mr-4 border-4 border-red-700"
            />
            <div>
              <h3 className="text-lg font-semibold text-red-700">{course.instructor.name}</h3>
              <p className="text-gray-500">{course.instructor.bio}</p>
            </div>
          </div>

          {/* Student Reviews & Ratings */}
          <h2 className="text-2xl font-bold mb-4 text-red-700">Student Reviews & Ratings</h2>
          <div className="space-y-4 mb-8">
            {course.reviews.map((review) => (
              <motion.div
                key={review.id}
                className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * review.id }}
              >
                <h4 className="text-lg font-semibold text-red-700">{review.name}</h4>
                <p className="text-yellow-500">Rating: {review.rating} / 5</p>
                <p className="text-gray-600">{review.comment}</p>
              </motion.div>
            ))}
          </div>

          {/* Enrollment & Payment Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-red-700">Enrollment & Payment</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Enter Discount Code"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-700"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full bg-red-700 text-white py-2 rounded-lg hover:bg-red-800 transition duration-300"
              >
                Apply Discount
              </motion.button>
            </form>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-red-700">Choose a Payment Option:</h3>
              <div className="flex space-x-4 mt-2">
                <button className="px-4 py-2 border border-red-700 text-red-700 rounded-lg hover:bg-red-100 transition duration-300">
                  PayPal
                </button>
                <button className="px-4 py-2 border border-red-700 text-red-700 rounded-lg hover:bg-red-100 transition duration-300">
                  Credit/Debit Card
                </button>
                {/* Add more payment options as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailsPage;
