import React from 'react';
import { Eye, Target, Heart, Users } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Eye className="w-8 h-8 text-warm-gold" />,
      title: "Transparency",
      description: "We believe in open communication and accountability in all our actions and decisions."
    },
    {
      icon: <Target className="w-8 h-8 text-warm-gold" />,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, from projects to student services."
    },
    {
      icon: <Heart className="w-8 h-8 text-warm-gold" />,
      title: "Service",
      description: "We are committed to serving our fellow students with dedication and genuine care."
    },
    {
      icon: <Users className="w-8 h-8 text-warm-gold" />,
      title: "Unity",
      description: "We foster collaboration and inclusivity, bringing students together for common goals."
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-dark mb-6">
            About CENTRO SSLG
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At the center of student service, we are dedicated to fostering transparency, accountability, and excellence in student leadership for Academic Year 2025-2026.
          </p>
        </div>

        {/* Vision and Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <Eye className="w-8 h-8 text-warm-gold mr-3" />
              <h2 className="text-2xl font-heading font-bold text-text-dark">Our Vision</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To be the leading student government organization that exemplifies integrity, innovation, and inclusive leadership, creating a vibrant academic community where every student's voice is heard and valued.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-warm-gold mr-3" />
              <h2 className="text-2xl font-heading font-bold text-text-dark">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To serve as effective advocates for student welfare, promote academic excellence, foster leadership development, and create meaningful opportunities for student engagement while maintaining the highest standards of transparency and accountability.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-text-dark text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-heading font-semibold text-text-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutPage;