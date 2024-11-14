import React from 'react';

const teamMembers = [
  {
    id: 1,
    name: 'Robert Anderson',
    role: 'Founder & CEO',
    image: '/path/to/image1.jpg', // Replace with actual image path
  },
  {
    id: 2,
    name: 'Maria Sanchez',
    role: 'Co-Founder & Educator',
    image: '/path/to/image2.jpg', // Replace with actual image path
  },
  {
    id: 3,
    name: 'John Doe',
    role: 'Technical Lead',
    image: '/path/to/image3.jpg', // Replace with actual image path
  },
];

const TeamMembersSection = () => {
  return (
    <section className="px-8 py-16 mt-10 bg-gray-50 w-full">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-lg p-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembersSection;
