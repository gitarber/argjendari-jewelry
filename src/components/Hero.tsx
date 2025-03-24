import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80",
      title: "Timeless Elegance",
      subtitle: "Discover our curated collection of exquisite jewelry"
    },
    {
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80",
      title: "Bespoke Creations",
      subtitle: "Custom designs crafted to perfection"
    },
    {
      image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&q=80",
      title: "Luxury Defined",
      subtitle: "Experience the finest in jewelry craftsmanship"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center max-w-3xl mx-auto px-4">
              <h1 className="text-5xl md:text-7xl font-serif mb-6">{slide.title}</h1>
              <p className="text-xl mb-8 text-gray-200">{slide.subtitle}</p>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 px-8 py-3 text-sm uppercase tracking-wider">
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-gold w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;