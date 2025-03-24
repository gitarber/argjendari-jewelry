import React from 'react';

const About = () => {
  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-8">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1581974944026-5d6ed762f617?auto=format&fit=crop&q=80"
              alt="Our Workshop"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-serif mb-4">Our Heritage</h2>
            <p className="text-gray-300 mb-6">
              Since 1990, ARGJENDARI KAPIDANI has been at the forefront of luxury jewelry craftsmanship. Our dedication to excellence and attention to detail has made us a trusted name in the industry.
            </p>
            <p className="text-gray-300">
              Every piece that leaves our workshop tells a story of artistry, passion, and uncompromising quality. Our master craftsmen combine traditional techniques with modern innovation to create timeless pieces that will be cherished for generations.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;