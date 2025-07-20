import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, AlertCircle, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    studentId: '',
    name: '',
    email: '',
    subject: '',
    category: '',
    message: '',
    anonymous: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call with realistic delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would normally send the data to your backend
      console.log('Form submitted:', formData);
      
      // Simulate successful submission
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        studentId: '',
        name: '',
        email: '',
        subject: '',
        category: '',
        message: '',
        anonymous: false
      });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary-blue" />,
      title: "Email Address",
      details: "centro.sslg@school.edu",
      description: "Send us an email for general inquiries"
    },
    {
      icon: <Phone className="w-6 h-6 text-primary-blue" />,
      title: "Phone Number",
      details: "+63 (02) 123-4567",
      description: "Call us during office hours"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary-blue" />,
      title: "Office Location",
      details: "SSLG Office, Main Building",
      description: "Ground Floor, Room 101"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-blue" />,
      title: "Office Hours",
      details: "Mon - Fri: 8:00 AM - 5:00 PM",
      description: "Saturday: 9:00 AM - 12:00 PM"
    }
  ];

  const categories = [
    "General Inquiry",
    "Project Proposal",
    "Complaint/Feedback",
    "Event Organization",
    "Scholarship Application",
    "Academic Concern",
    "Other"
  ];

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-800 mb-6">
            Contact & Feedback
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We value your voice. Reach out to us with your questions, suggestions, or feedback. We're here to listen and serve.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-heading font-bold text-slate-800 mb-6">
              Get In Touch
            </h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">{info.title}</h3>
                    <p className="text-primary-blue font-medium mb-1">{info.details}</p>
                    <p className="text-sm text-slate-600">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Anonymous Suggestion Box */}
            <div className="mt-8 bg-gradient-to-br from-laurel-green to-green-600 text-white p-6 rounded-xl shadow-medium">
              <div className="flex items-center mb-4">
                <MessageSquare className="w-6 h-6 mr-3" />
                <h3 className="text-lg font-heading font-semibold">Anonymous Suggestion Box</h3>
              </div>
              <p className="text-green-100 text-sm mb-4">
                Have a concern but prefer to remain anonymous? Use our suggestion box to share your thoughts safely.
              </p>
              <div className="flex items-center text-green-200 text-sm">
                <AlertCircle className="w-4 h-4 mr-2" />
                <span>Your identity will be completely protected</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-xl shadow-large">
              <h2 className="text-2xl font-heading font-bold text-slate-800 mb-6">
                Send Us A Message
              </h2>
              
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center animate-fade-in">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <div>
                    <p className="text-green-800 font-medium">Message sent successfully!</p>
                    <p className="text-green-600 text-sm">We'll get back to you within 24-48 hours.</p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center animate-fade-in">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                  <div>
                    <p className="text-red-800 font-medium">Failed to send message</p>
                    <p className="text-red-600 text-sm">Please try again or contact us directly.</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Anonymous Option */}
                <div className="flex items-center p-4 bg-slate-50 rounded-lg">
                  <input
                    type="checkbox"
                    id="anonymous"
                    name="anonymous"
                    checked={formData.anonymous}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded focus:ring-primary-blue focus:ring-2"
                  />
                  <label htmlFor="anonymous" className="ml-3 text-sm font-medium text-slate-700">
                    Submit anonymously (your contact details will not be shared)
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Student ID */}
                  <div>
                    <label htmlFor="studentId" className="block text-sm font-medium text-slate-700 mb-2">
                      Student ID *
                    </label>
                    <input
                      type="text"
                      id="studentId"
                      name="studentId"
                      value={formData.studentId}
                      onChange={handleInputChange}
                      placeholder="Enter your student ID"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name {!formData.anonymous && '*'}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={formData.anonymous ? "Anonymous" : "Enter your full name"}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent disabled:bg-slate-100 disabled:text-slate-500 transition-all duration-200"
                      required={!formData.anonymous}
                      disabled={formData.anonymous}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address {!formData.anonymous && '*'}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={formData.anonymous ? "Anonymous" : "Enter your email address"}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent disabled:bg-slate-100 disabled:text-slate-500 transition-all duration-200"
                      required={!formData.anonymous}
                      disabled={formData.anonymous}
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-slate-700 mb-2">
                      Category *
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-200"
                      required
                    >
                      <option value="">Select a category</option>
                      {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Brief description of your message"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="Please provide detailed information about your inquiry, suggestion, or feedback..."
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent resize-vertical transition-all duration-200"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary-blue to-accent-blue hover:from-accent-blue hover:to-primary-blue disabled:from-slate-400 disabled:to-slate-400 disabled:cursor-not-allowed text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center shadow-medium hover:shadow-large transform hover:-translate-y-1 disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Quick Response Info */}
        <div className="mt-16 bg-white p-8 rounded-xl shadow-large">
          <div className="text-center">
            <h2 className="text-2xl font-heading font-bold text-slate-800 mb-8">
              Expected Response Time
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <div className="text-3xl font-bold text-primary-blue mb-2">24hrs</div>
                <p className="text-slate-600 font-medium">General Inquiries</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl">
                <div className="text-3xl font-bold text-warm-gold mb-2">48hrs</div>
                <p className="text-slate-600 font-medium">Project Proposals</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                <div className="text-3xl font-bold text-laurel-green mb-2">72hrs</div>
                <p className="text-slate-600 font-medium">Complex Issues</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;