import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'

import CardSlider from './Components/CardSlider';
import ImageSlider from "./Components/ImageSlider";
import PostsSection from "./Components/PostSection";


const App = () => {
  document.querySelector("body").style.backgroundColor = "#A0BAAB";
  return (
    <>
      <Header />
      <ImageSlider />
      <CardSlider />
      <PostsSection />
      <Footer />
    </>
  )
}

export default App