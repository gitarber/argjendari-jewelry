import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { Heart } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-2xl">Product not found</h1>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full aspect-square object-cover rounded-lg"
            />
          </div>
          
          <div>
            <h1 className="text-3xl md:text-4xl font-serif mb-4">{product.name}</h1>
            <p className="text-2xl text-gold mb-6">{product.price}</p>
            <p className="text-gray-300 mb-8">{product.description}</p>
            
            <div className="space-y-6">
              <div className="flex space-x-4">
                <button className="flex-1 bg-gold hover:bg-gold/90 text-black py-3 rounded-lg transition-colors duration-300">
                  Add to Cart
                </button>
                <button className="p-3 border border-neutral-700 rounded-lg hover:border-gold transition-colors duration-300">
                  <Heart className="h-6 w-6" />
                </button>
              </div>
              
              <div className="border-t border-neutral-700 pt-6">
                <h3 className="font-serif text-xl mb-4">Product Details</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Material: 18k White Gold</li>
                  <li>Gemstone: {product.name.includes('Diamond') ? 'Natural Diamonds' : 'Natural Gemstones'}</li>
                  <li>Certification: IGI Certified</li>
                  <li>Free Shipping & Returns</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;