import React from 'react';
import { motion } from 'framer-motion';

const LoginPage = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-red-700 text-center mb-6">Login</h2>
        <form className="space-y-4">
          <motion.input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-700"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-700"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button
            type="submit"
            className="w-full bg-red-700 text-white py-2 rounded-lg hover:bg-red-800 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Login
          </motion.button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{' '}
          <a href="/signup" className="text-red-700 hover:underline">
            Sign Up
          </a>
        </p>
      </motion.div>
    </section>
  );
};

export default LoginPage;
