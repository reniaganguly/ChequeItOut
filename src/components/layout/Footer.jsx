import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Coins, Heart, Mail, MapPin, BookOpen, Calculator, Download, FileText } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  // Function to handle navigation
  const handleNavigation = (path) => {
    navigate(path);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div 
              className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => handleNavigation('/')}
            >
              <div className="bg-primary rounded-full w-[50px] h-[50px]">
                <img className='bg-white rounded-full' src="/Logo.webp" alt="ChequeItOut" />
                {/* <Coins className="h-6 w-6 text-white" /> */}
              </div>
              <span className="text-2xl font-bold font-display">ChequeItOut</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering children with financial literacy through fun, 
              interactive learning experiences that build confidence and knowledge.
            </p>
            <div className="flex items-center space-x-2 text-primary">
              <Heart className="h-5 w-5" />
              <span className="text-sm">Made with love for kids everywhere</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-display">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavigation('/')}
                  className="text-gray-300 hover:text-primary cursor-pointer transition-colors flex items-center space-x-2 text-left"
                >
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/kit-corner')}
                  className="text-gray-300 hover:text-primary cursor-pointer transition-colors flex items-center space-x-2 text-left"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Kids' Corner</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/tools')}
                  className="text-gray-300 hover:text-primary cursor-pointer transition-colors flex items-center space-x-2 text-left"
                >
                  <Calculator className="h-4 w-4" />
                  <span>Tools</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/resources')}
                  className="text-gray-300 hover:text-primary cursor-pointer transition-colors flex items-center space-x-2 text-left"
                >
                  <Download className="h-4 w-4" />
                  <span>Resources</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/blogs')}
                  className="text-gray-300 hover:text-primary cursor-pointer transition-colors flex items-center space-x-2 text-left"
                >
                  <FileText className="h-4 w-4" />
                  <span>Blog</span>
                </button>
              </li>
            </ul>
          </div>

          {/* For Parents & Teachers */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-display">For Adults</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavigation('/resources')}
                  className="text-gray-300 hover:text-secondary cursor-pointer transition-colors text-left"
                >
                  Parent Guide
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/resources')}
                  className="text-gray-300 hover:text-secondary cursor-pointer transition-colors text-left"
                >
                  Teacher Resources
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/blogs')}
                  className="text-gray-300 hover:text-secondary cursor-pointer transition-colors text-left"
                >
                  Educational Articles
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/about')}
                  className="text-gray-300 hover:text-secondary cursor-pointer transition-colors text-left"
                >
                  Partnership Opportunities
                </button>
              </li>
              <li>
                <a href="https://docs.google.com/forms/d/1iYrrINnAHDErko6Pkjdi6APkB_wYsGQr9OTG0NACub4/viewform?edit_requested=true" target='_blank'>
                <button 
                  className="text-gray-300 hover:text-secondary cursor-pointer transition-colors text-left"
                >
                  Ambassador Program
                </button></a>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-display">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <a 
                  href="mailto:chequeitout.contact@gmail.com" 
                  className="text-sm hover:text-primary transition-colors"
                >
                  chequeitout.contact@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">London, UK</span>
              </div>
            </div>
            
            <div className="mt-6 space-y-2">
              <h5 className="font-semibold text-gray-200">Legal</h5>
              <ul className="space-y-1 text-sm">
                <li>
                  <button 
                    onClick={() => handleNavigation('/privacy-policy')}
                    className="text-gray-300 hover:text-accent cursor-pointer transition-colors text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigation('/terms-of-service')}
                    className="text-gray-300 hover:text-accent cursor-pointer transition-colors text-left"
                  >
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigation('/cookie-policy')}
                    className="text-gray-300 hover:text-accent cursor-pointer transition-colors text-left"
                  >
                    Cookie Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} ChequeItOut. All rights reserved. Empowering financial literacy for children.
            </div>
            <div className="text-gray-400 text-sm">
              Built with ❤️ for the next generation
            </div>
          </div>
        </div>

        {/* Fun Kid-Friendly Footer Elements */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-4 text-2xl">
            <span className="animate-bounce" style={{animationDelay: '0s'}}>🏦</span>
            <span className="animate-bounce" style={{animationDelay: '0.2s'}}>💰</span>
            <span className="animate-bounce" style={{animationDelay: '0.4s'}}>📚</span>
            <span className="animate-bounce" style={{animationDelay: '0.6s'}}>🎯</span>
            <span className="animate-bounce" style={{animationDelay: '0.8s'}}>✨</span>
          </div>
          <p className="text-gray-300 text-sm mt-2">
            Making money learning fun, one lesson at a time!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
