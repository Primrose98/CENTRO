import React from 'react';
import { Mail, Linkedin, Facebook } from 'lucide-react';

const OfficersPage = () => {
  return (
    <div className="min-h-screen py-12 bg-primary-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-light mb-6">
            Meet Our Officers
          </h1>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            Our dedicated team of student leaders working tirelessly to serve the academic community with integrity, passion, and excellence.
          </p>
        </div>

        {/* Officers Grid */}
        <div className="text-center mb-16">
          <div className="bg-accent-black p-12 rounded-xl border border-dark-gray">
            <p className="text-text-gray text-lg">
              Officer profiles coming soon...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficersPage;