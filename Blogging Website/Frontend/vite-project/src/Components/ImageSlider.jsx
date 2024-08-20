import React from 'react';
import Slider from 'react-slick';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  };

  const images = [
    { url: '../Pics/Travel2.jpg', alt: 'Travel' },
    { url: '../Pics/Fashion.jpg', alt: 'Fashion' },
    { url: '../Pics/Food.jpg', alt: 'Food' },
    { url: '../Pics/Fitness.jpg', alt: 'Fitness' },
  ];

  return (
    <div className="container bg-emerald-950 rounded-lg mx-auto my-8 px-7">
        <h2 className="text-5xl text-white my-3 pt-3 ">Blogs</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-72 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-bold">
              {image.alt}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
