import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Jolie Institute</h3>
            <p>Whitney Square, North Loop</p>
            <p>211 Washington Ave N #120</p>
            <p>Minneapolis, MN 55401</p>
            <p className="mt-2">(817) 774-6555</p>
            <p className="underline mt-2">MAP / DIRECTIONS</p>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="text-xl font-semibold mb-4">SITEMAP</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Courses</a></li>
              <li><a href="#" className="hover:underline">Curriculm</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-xl font-semibold mb-4">WANT OUR BEST COURSES?</h3>
            <p className="mb-4">We send out our best courses in a 1x-weekly newsletter. Only value.</p>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 rounded-md text-gray-900"
              />
              <button
                type="submit"
                className="bg-red-700 text-white py-2 px-4 rounded-md font-semibold hover:bg-red-600 transition duration-300"
              >
                SIGN UP
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Footer Section */}
        <div className="mt-12 border-t border-black pt-4 text-sm text-center md:text-left md:flex justify-between">
          <p>&copy; 2024 Jolie Institute. All rights reserved. <a href="#" className="underline">Privacy</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
