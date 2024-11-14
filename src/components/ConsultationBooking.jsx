import React from 'react';
import { motion } from 'framer-motion';

const ConsultationBooking = () => {
  return (
    <section className="bg-gray-100 min-h-screen py-16 px-4 md:px-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-red-700 p-6 text-center text-white">
          <h1 className="text-3xl font-bold">Book a Consultation</h1>
          <p className="mt-2">Schedule a demo or consultation session with our experts.</p>
        </div>
        <div className="p-8">
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">
                Select Date & Time
              </label>
              <input
                type="datetime-local"
                id="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Message (Optional)
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Any specific details or questions?"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-red-700 text-white font-bold py-2 rounded-lg hover:bg-red-900 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Schedule Consultation
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBooking;
