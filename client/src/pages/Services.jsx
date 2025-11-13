import React from 'react';

const Services = () => {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Computer Repair</h2>
            <p className="text-gray-600">Expert computer repair and maintenance services for all devices.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Network Setup</h2>
            <p className="text-gray-600">Professional network installation and configuration for schools and businesses.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Web Development</h2>
            <p className="text-gray-600">Custom website development tailored to your needs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
