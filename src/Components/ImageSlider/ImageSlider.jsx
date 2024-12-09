import React, { useState } from 'react';

const images = [
  'https://i.pinimg.com/originals/7e/45/0f/7e450f80598feb3e152744b1cc3dd851.jpg',
  'https://i.pinimg.com/originals/7e/45/0f/7e450f80598feb3e152744b1cc3dd851.jpg',
  'https://i.pinimg.com/originals/7e/45/0f/7e450f80598feb3e152744b1cc3dd851.jpg',
  'https://via.placeholder.com/300?text=Image+4',
  'https://via.placeholder.com/300?text=Image+5',
  'https://via.placeholder.com/300?text=Image+6',
  'https://via.placeholder.com/300?text=Image+7',
  'https://via.placeholder.com/300?text=Image+8',
  'https://i.pinimg.com/originals/7e/45/0f/7e450f80598feb3e152744b1cc3dd851.jpg',
  'https://via.placeholder.com/300?text=Image+10',
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="relative w-full max-w-lg">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-64 object-cover transition-all duration-500 ease-in-out"
          />
        </div>
        <button
          onClick={handlePrevious}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
        >
          &#8249;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
        >
          &#8250;
        </button>
      </div>
      <div className="mt-4 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-blue-500' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
