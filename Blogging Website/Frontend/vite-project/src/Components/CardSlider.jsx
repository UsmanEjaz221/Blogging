import React from 'react';
import Slider from 'react-slick';

const CardSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    arrows: true,
  };

  const cards = [
    {
      title: 'Lifestyle',
      image: '../Pics/Cards/Lifestyle.jpg',
      description: 'Inspiration and tips for enhancing everyday living.',
    },
    {
      title: 'Health & Wellness',
      image: '../Pics/Cards/HealthAndWellness.jpg',
      description: 'Guides to mental and physical well-being for a balanced life.',
    },
    {
      title: 'Travel Tips & Hacks',
      image: '../Pics/Cards/Travel.jpg',
      description: 'Smart tips and hacks for a seamless travel experience.',
    },
    {
      title: 'Technology & Gadgets',
      image: '../Pics/Cards/Tech.jpg',
      description: 'Explore the latest tech trends and must-have gadgets.',
    },
    {
      title: 'Sustainable Living',
      image: '../Pics/Cards/Living.jpg',
      description: 'Practical advice for living an eco-friendly lifestyle.',
    },
  ];

  return (
    <div className="container mx-auto my-8">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Image */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-40 object-cover"
              />
              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSection;
