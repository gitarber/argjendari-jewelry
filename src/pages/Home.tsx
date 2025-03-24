import React from 'react';
import Hero from '../components/Hero';
import FeaturedCollection from '../components/FeaturedCollection';
import Collections from '../components/Collections';
import BespokeServices from '../components/BespokeServices';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedCollection />
      <Collections />
      <BespokeServices />
      <Testimonials />
      <WhyChooseUs />
      <Newsletter />
    </main>
  );
};

export default Home;