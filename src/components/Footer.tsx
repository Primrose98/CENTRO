import React from 'react';
import { CheckCircle, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-dark-card to-primary-blue text-white border-t border-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-warm-gold to-yellow-400 rounded-full flex items-center justify-center shadow-medium">
                <CheckCircle className="w-5 h-5 text-primary-blue" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-text-light">CENTRO SSLG</h3>
                <p className="text-sm text-accent-blue">A.Y. 2025-2026</p>
              </div>
            </div>
            <p className="text-text-muted mb-4 leading-relaxed">
              At the Center of Student Service — Promoting transparency, accountability, and excellence in student leadership.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text-muted hover:text-warm-gold transition-colors duration-300 p-2 rounded-lg hover:bg-dark-surface/50">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-muted hover:text-warm-gold transition-colors duration-300 p-2 rounded-lg hover:bg-dark-surface/50">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-muted hover:text-warm-gold transition-colors duration-300 p-2 rounded-lg hover:bg-dark-surface/50">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-text-light">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-text-muted hover:text-warm-gold transition-colors duration-300">About Us</a></li>
              <li><a href="/officers" className="text-text-muted hover:text-warm-gold transition-colors duration-300">Meet Officers</a></li>
              <li><a href="/projects" className="text-text-muted hover:text-warm-gold transition-colors duration-300">Projects</a></li>
              <li><a href="/news" className="text-text-muted hover:text-warm-gold transition-colors duration-300">News</a></li>
              <li><a href="/contact" className="text-text-muted hover:text-warm-gold transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-text-light">Academic Year</h4>
            <div className="space-y-3">
              <p className="text-text-muted text-sm">2025-2026</p>
              <p className="text-text-muted text-sm">Student Leadership Excellence</p>
              <p className="text-text-muted text-sm">Serving with Integrity</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-200" />
                <span className="text-blue-200 text-sm">+63 xxx xxx xxxx</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-200" />
                <span className="text-blue-200 text-sm">SSLG Office, Main Building</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-surface mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-muted text-sm">
              © 2025 CENTRO SSLG. All rights reserved.
            </p>
            <p className="text-text-muted text-sm mt-2 md:mt-0">
              Academic Year 2025-2026
            </p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;