import React from 'react';
import { Calendar, Users, CheckCircle, Clock, ArrowRight } from 'lucide-react';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen py-12 bg-primary-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-light mb-6">
            Projects & Initiatives
          </h1>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            Discover the impactful projects and initiatives we're leading to enhance student life and create positive change in our academic community.
          </p>
        </div>

        {/* Ongoing Projects */}
        <section className="mb-16 text-center">
          <div className="flex items-center mb-8">
            <Clock className="w-8 h-8 text-warm-gold mr-3" />
            <h2 className="text-3xl font-heading font-bold text-text-light">
              Ongoing Projects
            </h2>
          </div>
          <div className="bg-accent-black p-12 rounded-xl border border-dark-gray">
            <p className="text-text-gray text-lg">
              Project details coming soon...
            </p>
          </div>
        </section>

        {/* Completed Projects */}
        <section className="mb-16 text-center">
          <div className="flex items-center mb-8">
            <CheckCircle className="w-8 h-8 text-laurel-green mr-3" />
            <h2 className="text-3xl font-heading font-bold text-text-light">
              Completed Projects
            </h2>
          </div>
          <div className="bg-accent-black p-12 rounded-xl border border-dark-gray">
            <p className="text-text-gray text-lg">
              Project details coming soon...
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectsPage;