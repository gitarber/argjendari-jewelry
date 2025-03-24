import React, { useState, useEffect } from 'react';
import BespokeConsultationForm from '../components/BespokeConsultationForm';

const Bespoke = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-12 text-center">Bespoke Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[500px] overflow-hidden rounded-lg">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Bespoke Jewelry Process ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  currentImageIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentImageIndex === index ? 'bg-gold w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-serif mb-6">Create Your Perfect Piece</h2>
            <p className="text-gray-300 mb-6">
              Our bespoke service offers you the opportunity to create truly unique pieces that perfectly reflect your style and story. From initial concept to final creation, our master craftsmen will guide you through every step of the journey.
            </p>
            <BespokeConsultationForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Bespoke;