import React, { useState } from 'react';
import { Calendar, Tag, Search, ArrowRight, Eye } from 'lucide-react';

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Events', 'Announcements', 'Projects', 'Awards', 'Community'];

  return (
    <div className="min-h-screen py-12 bg-primary-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-light mb-6">
            News & Announcements
          </h1>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            Stay updated with the latest news, events, and announcements from CENTRO SSLG.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 bg-accent-black p-6 rounded-xl shadow-lg border border-dark-gray opacity-50">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-gray w-5 h-5" />
              <input
                type="text"
                placeholder="Search news and announcements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-dark-gray border border-dark-gray text-text-light rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                disabled
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  disabled
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 cursor-not-allowed ${
                    selectedCategory === category
                      ? 'bg-accent-blue text-text-light'
                      : 'bg-cream text-text-dark hover:bg-accent-blue hover:text-text-light'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Article */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-heading font-bold text-text-light mb-6">Featured News</h2>
          <div className="bg-accent-black p-12 rounded-xl border border-dark-gray">
            <p className="text-text-gray text-lg">
              News content coming soon...
            </p>
          </div>
        </div>

        {/* News Grid */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-heading font-bold text-text-light mb-6">Latest Updates</h2>
          <div className="bg-accent-black p-12 rounded-xl border border-dark-gray">
            <p className="text-text-gray text-lg">
              News content coming soon...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default NewsPage