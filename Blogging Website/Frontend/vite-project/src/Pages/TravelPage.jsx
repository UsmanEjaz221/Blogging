
import React from 'react';
import PostsSection from '../Components/PostSection';

const TravelPage = () => {
    return (
        <>
            <Header />
            <div className="container mx-auto my-8">
                <h1 className="text-3xl font-bold mb-4 text-center">Travel Posts</h1>
                <PostsSection />
            </div>
            <Footer />
        </>
    );
};

export default TravelPage;
