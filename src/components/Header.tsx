import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, CheckCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Officers', href: '/officers' },
    { name: 'Projects', href: '/projects' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-dark-card/95 backdrop-blur-sm border-b border-dark-surface shadow-large sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-blue to-accent-blue rounded-full flex items-center justify-center shadow-medium">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-warm-gold" />
            </div>
            <div className="min-w-0">
              <h1 className="text-lg sm:text-xl font-heading font-bold text-text-light truncate">
                CENTRO SSLG
              </h1>
              <p className="text-xs sm:text-sm text-accent-blue">A.Y. 2025-2026</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'text-warm-gold bg-dark-surface shadow-soft'
                    : 'text-text-light hover:text-warm-gold hover:bg-dark-surface/50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-text-light hover:text-warm-gold hover:bg-dark-surface/50 transition-all duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-dark-surface">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-warm-gold bg-dark-surface shadow-soft'
                      : 'text-text-light hover:text-warm-gold hover:bg-dark-surface/50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;