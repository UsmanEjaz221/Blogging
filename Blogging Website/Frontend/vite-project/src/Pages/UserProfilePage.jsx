import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import PostsSection from './Components/PostSection';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const UserProfilePage = ({ author }) => {
  document.querySelector("body").style.backgroundColor = "#A0BAAB";
  return (
    <>
    <Header />
    <div className="container mx-auto my-8 max-w-3xl">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {/* Author Details */}
        <div className="flex items-center space-x-6 mb-6">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold">{author.name}</h1>
            <p className="text-gray-600">{author.bio}</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4 mt-4">
          {author.socials.twitter && (
            <a
              href={author.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              <FaTwitter size={30} />
            </a>
          )}
          {author.socials.linkedin && (
            <a
              href={author.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800"
            >
              <FaLinkedin size={30} />
            </a>
          )}
          {author.socials.instagram && (
            <a
              href={author.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600"
            >
              <FaInstagram size={30} />
            </a>
          )}
          {author.socials.facebook && (
            <a
              href={author.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 hover:text-blue-900"
            >
              <FaFacebook size={30} />
            </a>
          )}
        </div>
      </div>
    </div>
    <PostsSection />
    <Footer />
    </> 
  );
};

// Example usage of the component
const author = {
  name: 'John Doe',
  bio: 'A passionate blogger who loves to share knowledge about travel, tech, and lifestyle.',
  avatar: 'https://via.placeholder.com/150',
  socials: {
    twitter: 'https://twitter.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe',
    instagram: 'https://instagram.com/johndoe',
    facebook: 'https://facebook.com/johndoe',
  },
};

export default function App() {
  return <UserProfilePage author={author} />;
}
