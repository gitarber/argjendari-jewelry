import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FeaturedCollection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  
  const collections = [
    {
      id: 1,
      name: "Diamond Solitaire",
      price: "$12,500",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Pearl Necklace",
      price: "$8,900",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Pink Sapphire Ring",
      price: "$15,700",
      image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      name: "Diamond Tennis Bracelet",
      price: "$18,900",
      image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&q=80"
    },
    {
      id: 5,
      name: "Emerald Pendant",
      price: "$9,500",
      image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&fit=crop&q=80"
    },
    {
      id: 6,
      name: "Ruby Eternity Band",
      price: "$11,200",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80"
    },
    {
      id: 7,
      name: "Diamond Chandelier Earrings",
      price: "$16,800",
      image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&q=80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % collections.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const visibleItems = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % collections.length;
      items.push(collections[index]);
    }
    return items;
  };

  return (
    <section className="py-20 px-4 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">Featured Collection</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleItems().map((item, index) => (
            <div 
              key={`${item.id}-${index}`} 
              className="group relative transform transition-all duration-700 ease-in-out"
              style={{
                opacity: 1,
                transform: `translateX(${(index - 1) * 0}%)`
              }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button 
                    onClick={() => navigate(`/product/${item.id}`)}
                    className="bg-gold text-black px-6 py-2 rounded-full text-sm transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-serif">{item.name}</h3>
                <p className="text-gold mt-2">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {collections.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index >= currentIndex && index < currentIndex + 3
                  ? 'bg-gold w-8'
                  : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;