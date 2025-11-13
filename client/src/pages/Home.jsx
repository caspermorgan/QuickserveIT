import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Laptop, Network, Database, Video, Globe } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">QuickServe IT</h1>
          <p className="text-2xl mb-8">Fast, Trusted, Local Tech Support for Rural India</p>
          <div className="flex gap-4 justify-center">
            <Link to="/services" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Our Services</Link>
            <Link to="/contact" className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Laptop className="mx-auto mb-4 text-blue-600" size={48} />
              <h3 className="text-xl font-semibold mb-2">Computer Repair</h3>
              <p className="text-gray-600">Expert repair services for all types of computers</p>
            </div>
            <div className="text-center p-6">
              <Network className="mx-auto mb-4 text-blue-600" size={48} />
              <h3 className="text-xl font-semibold mb-2">Network Setup</h3>
              <p className="text-gray-600">Professional network installation and configuration</p>
            </div>
            <div className="text-center p-6">
              <Globe className="mx-auto mb-4 text-blue-600" size={48} />
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-600">Custom websites for schools and small businesses</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Contact us today for fast and reliable IT support</p>
          <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-flex items-center gap-2">
            Get in Touch <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
