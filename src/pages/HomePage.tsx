import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Award, Calendar } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-warm-gold" />,
      title: "Student Leadership",
      description: "Empowering students through inclusive leadership and representation."
    },
    {
      icon: <Target className="w-8 h-8 text-warm-gold" />,
      title: "Transparency",
      description: "Open communication and accountability in all our initiatives."
    },
    {
      icon: <Award className="w-8 h-8 text-warm-gold" />,
      title: "Excellence",
      description: "Committed to delivering outstanding projects and services."
    }
  ];

  const latestNews = [
    {
      title: "Campus Clean-Up Drive Success",
      date: "March 15, 2025",
      excerpt: "Over 500 students participated in our environmental initiative...",
      image: "https://images.pexels.com/photos/7656745/pexels-photo-7656745.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Student Scholarship Program Launch",
      date: "March 10, 2025",
      excerpt: "New scholarship opportunities for underprivileged students...",
      image: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Leadership Training Workshop",
      date: "March 5, 2025",
      excerpt: "Developing future leaders through comprehensive training...",
      image: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-blue via-accent-blue to-laurel-green text-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              At the Center of Student Service
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              CENTRO SSLG 2025-2026 — Leading with transparency, accountability, and dedication to student excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/officers"
                className="bg-warm-gold hover:bg-yellow-400 text-primary-blue px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group shadow-medium hover:shadow-large transform hover:-translate-y-1"
              >
                Meet the Leaders
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/projects"
                className="border-2 border-white/80 hover:bg-white hover:text-primary-blue text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center backdrop-blur-sm hover:shadow-medium transform hover:-translate-y-1"
              >
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-dark-card to-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-text-light mb-4">
              Our Core Values
            </h2>
            <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto">
              Built on the foundation of service, integrity, and student empowerment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-dark-surface to-dark-card border border-dark-surface/50 hover:shadow-large transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-semibold text-text-light mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-muted text-sm sm:text-base leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-dark mb-2">
                Latest News & Updates
              </h2>
              <p className="text-lg text-gray-600">
                Stay informed about our latest initiatives and achievements.
              </p>
            </div>
            <Link
              to="/news"
              className="bg-primary-blue hover:bg-accent-blue text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center"
            >
              View All News
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((news, index) => (
              <article
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    {news.date}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-text-dark mb-3">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{news.excerpt}</p>
                  <Link
                    to="/news"
                    className="text-primary-blue hover:text-accent-blue font-semibold transition-colors duration-200 flex items-center"
                  >
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-laurel-green via-accent-blue to-primary-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4">
            Get Involved with CENTRO SSLG
          </h2>
          <p className="text-base sm:text-lg text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Your voice matters. Join us in building a better student community through active participation and collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-laurel-green px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Contact Us
            </Link>
            <Link
              to="/projects"
              className="border-2 border-white/80 hover:bg-white hover:text-primary-blue text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm hover:shadow-medium transform hover:-translate-y-1"
            >
              Join Our Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;