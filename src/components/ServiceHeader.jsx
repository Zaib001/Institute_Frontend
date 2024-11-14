import React from 'react';

const ServiceHeader = () => {
  return (
    <section
      className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }} // Replace with actual image path
    >
      <div className="bg-black bg-opacity-50 w-full h-full absolute"></div>
      <h1 className="relative text-white text-5xl font-bold">Services</h1>
    </section>
  );
};

export default ServiceHeader;
