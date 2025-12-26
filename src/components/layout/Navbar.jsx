import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Coins, BookOpen, Calculator, Download, FileText, User } from 'lucide-react';
import { Button } from '../ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home', icon: Coins, path: '/' },
    { id: 'learn', label: 'Kids\' Corner', icon: BookOpen, path: '/kit-corner' },
    { id: 'tools', label: 'Tools', icon: Calculator, path: '/tools' },
    { id: 'resources', label: 'Resources', icon: Download, path: '/resources' },
    { id: 'blog', label: 'Blog', icon: FileText, path: '/blogs' },
    { id: 'about', label: 'About', icon: User, path: '/about' },
  ];

  // Function to check if current route is active
  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  // Function to handle navigation
  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer transform hover:scale-105 transition-transform duration-200"
            onClick={() => handleNavigation('/')}
          >
            <div className="bg-primary rounded-full w-[70px] h-[70px]">
              <img src="/Logo.webp" alt="ChequeItOut" />
              
            </div>
            <span className="text-2xl font-bold text-primary font-display">ChequeItOut</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.path)}
                className={`flex items-center space-x-2 cursor-pointer px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                  isActiveRoute(item.path)
                    ? 'text-black shadow-md'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50 hover:shadow-sm'
                }`}
                style={isActiveRoute(item.path) ? { 
                  backgroundColor: '#e879a7',
                  color: '#fff'
                } : {}}
              >
                <item.icon className={`h-4 w-4 ${isActiveRoute(item.path) ? '!text-white' : ''}`} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-yellow-50 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-3 pt-3 pb-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.path)}
                  className={`flex items-center space-x-3 w-full px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-102 shadow-sm ${
                    isActiveRoute(item.path)
                      ? 'text-black shadow-md'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50 hover:shadow-sm'
                  }`}
                  style={isActiveRoute(item.path) ? { 
                    backgroundColor: '#e879a7',
                    color: '#fff'
                  } : {}}
                >
                  <item.icon className={`h-5 w-5 ${isActiveRoute(item.path) ? '!text-white' : ''}`} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
