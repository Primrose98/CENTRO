import React from 'react';

const OfficersPage = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-dark mb-6">
            Meet Our Officers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated team of student leaders working tirelessly to serve the academic community with integrity, passion, and excellence.
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="text-center py-16">
          <div className="bg-white p-12 rounded-xl shadow-lg max-w-2xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-text-dark mb-4">
              Coming Soon
            </h2>
            <p className="text-gray-600 text-lg">
              Our officer profiles and information will be available soon. Stay tuned for updates!
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OfficersPage;