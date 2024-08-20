
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Search query:', searchQuery);
  };

  return (
    <header className="bg-emerald-500 text-white ">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-gray-300">MyBrand</a>
        </div>

        {/* Navbar for large screens */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#services" className="hover:text-gray-300">Services</a>
          <a href="#blog" className="hover:text-gray-300">Blog</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>

          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="p-2 rounded-lg text-gray-800"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 mt-2 mr-2 text-gray-500 hover:text-gray-900"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
        </nav>

        {/* Hamburger Menu for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800">
          <div className="px-4 py-2 space-y-2">
            <a href="#home" className="block hover:bg-gray-700 p-2 rounded">Home</a>
            <a href="#about" className="block hover:bg-gray-700 p-2 rounded">About</a>
            <a href="#services" className="block hover:bg-gray-700 p-2 rounded">Services</a>
            <a href="#blog" className="block hover:bg-gray-700 p-2 rounded">Blog</a>
            <a href="#contact" className="block hover:bg-gray-700 p-2 rounded">Contact</a>

            {/* Search Bar for Mobile */}
            <form onSubmit={handleSearchSubmit} className="relative mt-2">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="w-full p-2 rounded-lg text-gray-800"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-2 mr-2 text-gray-500 hover:text-gray-900"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header