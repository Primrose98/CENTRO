import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-black text-text-light border-t border-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/Untitled144_20250713151103.png" 
                alt="CENTRO SSLG Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <h3 className="text-lg font-heading font-bold">CENTRO SSLG</h3>
                <p className="text-sm text-warm-gold">A.Y. 2025-2026</p>
              </div>
            </div>
            <p className="text-text-gray mb-4">
              At the Center of Student Service — Promoting transparency, accountability, and excellence in student leadership.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text-gray hover:text-warm-gold transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-gray hover:text-warm-gold transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-gray hover:text-warm-gold transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-text-gray hover:text-warm-gold transition-colors duration-200">About Us</a></li>
              <li><a href="/officers" className="text-text-gray hover:text-warm-gold transition-colors duration-200">Meet Officers</a></li>
              <li><a href="/projects" className="text-text-gray hover:text-warm-gold transition-colors duration-200">Projects</a></li>
              <li><a href="/news" className="text-text-gray hover:text-warm-gold transition-colors duration-200">News</a></li>
            </ul>
          </div>

          {/* Academic Year */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Academic Year</h4>
            <p className="text-text-gray">2025-2026</p>
            <p className="text-text-gray text-sm mt-2">At the Center of Student Service</p>
          </div>
        </div>

        <div className="border-t border-dark-gray mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-gray text-sm">
              © 2025 CENTRO SSLG. All rights reserved.
            </p>
            <p className="text-text-gray text-sm mt-2 md:mt-0">
              Academic Year 2025-2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;