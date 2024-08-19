import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

import CardSlider from './Components/CardSlider';
import ImageSlider from "./Components/ImageSlider";

const HomePage = () => {
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

export default HomePage