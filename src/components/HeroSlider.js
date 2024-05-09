import React, { useState, useEffect } from 'react';
import '../App.css'; // Import CSS for styling

const CarouselSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      text: "Slide 1 Text",
      backgroundImage: "url('/path/to/image1.jpg')"
    },
    {
      text: "Slide 2 Text",
      backgroundImage: "url('/path/to/image2.jpg')"
    },
    {
      text: "Slide 3 Text",
      backgroundImage: "url('/path/to/image3.jpg')"
    }
  ];

  // Function to handle click on dots
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  // Function to move to next slide
  const nextSlide = () => {
    const nextSlideIndex = (currentSlide + 1) % slides.length;
    setCurrentSlide(nextSlideIndex);
  };

  // Automatically change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="carousel-slider">
      <div className="slides-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${currentSlide === index ? 'active' : ''}`}
            style={{ backgroundImage: slide.backgroundImage }}
          >
            <div className="slide-text border border-black text-black">{slide.text}</div>
          </div>
        ))}
      </div>
      <div className="dots-container">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentSlide === index ? 'active-dot' : ''}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CarouselSlider;
