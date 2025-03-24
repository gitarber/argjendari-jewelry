import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'rings', name: 'Rings' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'earrings', name: 'Earrings' },
    { id: 'bracelets', name: 'Bracelets' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="py-20 px-4 bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-8">Our Collections</h2>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 px-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors duration-300 ${
                activeCategory === category.id
                  ? 'bg-gold text-black'
                  : 'bg-neutral-800 text-white hover:bg-neutral-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button 
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="bg-gold text-black px-6 py-2 rounded-full text-sm transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-serif">{product.name}</h3>
                <p className="text-gold mt-1">{product.price}</p>
                <p className="text-sm text-gray-400 mt-1">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;