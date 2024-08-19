import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const UploadPostPage = () => {
    

  document.querySelector("body").style.backgroundColor = "#A0BAAB";
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!title || !content || !image) {
      setError('All fields are required!');
      return;
    }

    // Create a form data object to submit
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', image);

    // Simulate API call to submit the post
    console.log('Submitting post:', {
      title,
      content,
      image,
    });

    // Reset form fields after submission
    setTitle('');
    setContent('');
    setImage(null);
    setError('');
  };

  return (
    <>
    <Header />
    <div className="container mx-auto my-8 max-w-lg">
      <h1 className="text-3xl font-bold mb-6">Upload a New Post</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Post Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter the post title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Post Content
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Write your post content here"
            rows="6"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Post Image
          </label>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Submit Post
        </button>
      </form>
    </div>
    <Footer />
    </>
  );
};

export default UploadPostPage;
