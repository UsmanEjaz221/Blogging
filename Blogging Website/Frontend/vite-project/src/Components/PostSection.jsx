import React, { useState } from 'react';

const PostsSection = () => {
  // Initial set of posts
  const initialPosts = [
    { title: 'Post 1', description: 'This is a description for post 1.', image: 'https://via.placeholder.com/300x200' },
    { title: 'Post 2', description: 'This is a description for post 2.', image: 'https://via.placeholder.com/300x200' },
    { title: 'Post 3', description: 'This is a description for post 3.', image: 'https://via.placeholder.com/300x200' },
    { title: 'Post 4', description: 'This is a description for post 4.', image: 'https://via.placeholder.com/300x200' },
    { title: 'Post 5', description: 'This is a description for post 5.', image: 'https://via.placeholder.com/300x200' },
    { title: 'Post 6', description: 'This is a description for post 6.', image: 'https://via.placeholder.com/300x200' },
    { title: 'Post 7', description: 'This is a description for post 7.', image: 'https://via.placeholder.com/300x200' },
    { title: 'Post 8', description: 'This is a description for post 8.', image: 'https://via.placeholder.com/300x200' },
    { title: 'Post 9', description: 'This is a description for post 9.', image: 'https://via.placeholder.com/300x200' },
    { title: 'Post 10', description: 'This is a description for post 10.', image: 'https://via.placeholder.com/300x200' },
    { title: 'Post 11', description: 'This is a description for post 11.', image: 'https://via.placeholder.com/300x200' },
    { title: 'Post 12', description: 'This is a description for post 12.', image: 'https://via.placeholder.com/300x200' },
    { title: 'Post 13', description: 'This is a description for post 13.', image: 'https://via.placeholder.com/300x200' },
    { title: 'Post 14', description: 'This is a description for post 14.', image: 'https://via.placeholder.com/300x200' },
    { title: 'Post 15', description: 'This is a description for post 15.', image: 'https://via.placeholder.com/300x200' },
  ];

  // State to manage displayed posts
  const [visiblePosts, setVisiblePosts] = useState(9); // Show 3x3 cards initially

  // Function to load more posts
  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 5);
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-6">Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {initialPosts.slice(0, visiblePosts).map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
      {visiblePosts < initialPosts.length && (
        <div className="text-center mt-8">
          <button
            onClick={loadMorePosts}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default PostsSection;
