import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Award, Calendar } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-accent-blue" />,
      title: "Student Leadership",
      description: "Empowering students through inclusive leadership and representation."
    },
    {
      icon: <Target className="w-8 h-8 text-accent-blue" />,
      title: "Transparency",
      description: "Open communication and accountability in all our initiatives."
    },
    {
      icon: <Award className="w-8 h-8 text-accent-blue" />,
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
      <section className="bg-gradient-to-br from-primary-black to-accent-black text-text-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              At the Center of Student Service
            </h1>
            <p className="text-xl md:text-2xl text-text-gray mb-8 max-w-3xl mx-auto">
              CENTRO SSLG 2025-2026 — Leading with transparency, accountability, and dedication to student excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/officers"
                className="bg-warm-gold hover:bg-yellow-500 text-text-dark px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center group"
              >
                Meet the Leaders
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/projects"
                className="border-2 border-accent-blue hover:bg-accent-blue hover:text-text-light text-accent-blue px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center"
              >
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-accent-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-light mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-text-gray max-w-2xl mx-auto">
              Built on the foundation of service, integrity, and student empowerment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-dark-gray hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">
                  <div className="text-warm-gold">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-heading font-semibold text-text-light mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-gray">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;