import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-gray-300 mt-8">
      <div className="max-w-5xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 py-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">MRO Solutions</h3>
            <p className="text-sm mb-4">
              Providing industry-leading maintenance, repair, and operations services since 1998.
            </p>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">FB</span>
              </div>
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">TW</span>
              </div>
              <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">LI</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Support Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Request Quote</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Emergency Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Training Resources</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="text-sm space-y-2">
              <li>1250 Industrial Parkway</li>
              <li>Suite 500</li>
              <li>Cleveland, OH 44135</li>
              <li className="pt-2">support@mrosolutions.com</li>
              <li>+1 (800) 555-MRO1</li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for the latest industry trends and technology updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 text-sm bg-gray-700 rounded-l text-white flex-grow focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-3 py-2 text-sm rounded-r hover:bg-blue-700 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-700 px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <div>
            &copy; {currentYear} MRO Solutions, Inc. All rights reserved.
          </div>
          <div className="mt-2 md:mt-0">
            <a href="#" className="mx-2 hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="mx-2 hover:text-white transition-colors duration-200">Terms of Service</a>
            <a href="#" className="mx-2 hover:text-white transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;