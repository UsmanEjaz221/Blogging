import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-white py-8 m-6 p-9 rounded-lg">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Section 1: About */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">
            We are a team of passionate developers building innovative web solutions. Stay tuned for more amazing content!
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-gray-300">Home</a></li>
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#services" className="hover:text-gray-300">Services</a></li>
            <li><a href="#blog" className="hover:text-gray-300">Blog</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>

        {/* Section 3: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">Email: info@mybrand.com</p>
          <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.94 9.8a7.51 7.51 0 01-2.17.59 3.76 3.76 0 001.65-2.08 7.52 7.52 0 01-2.38.91 3.76 3.76 0 00-6.4 3.42 10.69 10.69 0 01-7.76-3.94 3.76 3.76 0 001.17 5.01A3.74 3.74 0 012 14v.05a3.76 3.76 0 003.01 3.68 3.76 3.76 0 01-1.7.06 3.76 3.76 0 003.52 2.62A7.54 7.54 0 012 20.71a10.65 10.65 0 005.76 1.69c6.92 0 10.71-5.72 10.71-10.7v-.49a7.66 7.66 0 001.88-1.95 7.5 7.5 0 01-2.12.58z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.5 0-9.96 4.45-9.96 9.96 0 4.41 2.89 8.14 6.86 9.47.5.09.68-.21.68-.48 0-.23-.01-.82-.01-1.61-2.79.61-3.38-1.34-3.38-1.34-.46-1.17-1.12-1.48-1.12-1.48-.91-.62.07-.6.07-.6 1 .07 1.53 1.04 1.53 1.04.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.55 9.55 0 015.01 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.69 1.03 1.58 1.03 2.67 0 3.84-2.33 4.69-4.55 4.94.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48 3.97-1.33 6.86-5.06 6.86-9.47 0-5.51-4.46-9.96-9.96-9.96z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.94 4.11a7.5 7.5 0 01-2.17.59 3.75 3.75 0 001.65-2.07 7.49 7.49 0 01-2.38.9A3.76 3.76 0 0016.54 2c-2.08 0-3.77 1.69-3.77 3.77 0 .3.04.6.1.88-3.13-.16-5.91-1.66-7.77-3.95-.32.55-.5 1.19-.5 1.87 0 1.29.66 2.42 1.66 3.08a3.76 3.76 0 01-1.7-.46v.05c0 1.8 1.28 3.3 2.97 3.64a3.76 3.76 0 01-1.69.06 3.76 3.76 0 003.52 2.62A7.53 7.53 0 012 17.5a10.65 10.65 0 005.76 1.69c6.92 0 10.7-5.71 10.7-10.7v-.49a7.66 7.66 0 001.88-1.95 7.51 7.51 0 01-2.12.58z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-4">
        <p className="text-center text-gray-500">&copy; {new Date().getFullYear()} MyBrand. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
