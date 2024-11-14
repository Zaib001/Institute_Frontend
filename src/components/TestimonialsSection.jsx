import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Lance Jarvis',
    role: 'Entrepreneur',
    image: 'https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image path
    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat, sapien vitae congue fringilla, sem eros consequat tellus.',
    backgroundColor: 'bg-green-500',
  },
  {
    id: 2,
    name: 'Ericka Lynda',
    role: 'Product Manager',
    image: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat, sapien vitae congue fringilla, sem eros consequat tellus.',
    backgroundColor: 'bg-purple-500',
  },
  {
    id: 3,
    name: 'Neil Wilford',
    role: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat, sapien vitae congue fringilla, sem eros consequat tellus.',
    backgroundColor: 'bg-blue-500',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const TestimonialsSection = () => {
  return (
    <section className="px-4 py-16 bg-gray-50">
    <h2 className="text-3xl font-bold text-center mb-4">Customer reviews</h2>
    <p className="text-center text-gray-600 mb-12">What our customers are saying...</p>
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`h-20 ${testimonial.backgroundColor} relative`}>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full border-4 border-white absolute -bottom-8 left-1/2 transform -translate-x-1/2"
              />
            </div>
            <div className="p-6 text-center">
              <p className="text-gray-700 mb-4">
                <span className="text-xl text-purple-700">&ldquo;</span>
                {testimonial.feedback}
                <span className="text-xl text-purple-700">&rdquo;</span>
              </p>
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{testimonial.role}</p>
              <div className="flex justify-center space-x-4 text-gray-400">
                <a href="#" className="hover:text-blue-600">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="hover:text-blue-400">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="hover:text-blue-700">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default TestimonialsSection;
