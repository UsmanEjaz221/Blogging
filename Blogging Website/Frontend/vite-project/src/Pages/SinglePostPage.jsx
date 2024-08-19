import React from 'react';
import { Link } from 'react-router-dom';

const SinglePostPage = ({ post }) => {
  const author = {
    name: 'John Doe',
    bio: 'John is a seasoned travel writer with over a decade of experience exploring the world and sharing his insights.',
    profileLink: '/profile/johndoe',
  };

  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Post Content */}
        <div className="lg:col-span-3">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <div className="text-gray-800 leading-relaxed">
            {post.content}
          </div>
        </div>

        {/* Author Information */}
        <div className="lg:col-span-1 bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">About the Author</h2>
          <p className="text-gray-700 mb-4">{author.bio}</p>
          <Link
            to={author.profileLink}
            className="text-blue-500 hover:underline"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
