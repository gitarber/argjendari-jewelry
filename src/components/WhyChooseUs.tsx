import React from 'react';
import { Shield, Award, Clock, Gem, Users, PenTool as Tool } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Certified Authenticity",
      description: "Every piece comes with a certificate of authenticity, ensuring the highest quality and genuine materials."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Master Craftsmanship",
      description: "Our artisans bring decades of experience and skill to create exquisite pieces that stand the test of time."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Lifetime Service",
      description: "Enjoy complimentary lifetime cleaning, maintenance, and expert care for your precious jewelry."
    },
    {
      icon: <Gem className="w-8 h-8" />,
      title: "Ethically Sourced",
      description: "We ensure all our materials are responsibly and ethically sourced, maintaining the highest standards."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Personal Consultation",
      description: "Experience one-on-one sessions with our experts who guide you to the perfect piece."
    },
    {
      icon: <Tool className="w-8 h-8" />,
      title: "Custom Design",
      description: "Transform your vision into reality with our bespoke design service and expert craftsmanship."
    }
  ];

  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gold rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Why Choose Us</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            With over three decades of excellence in fine jewelry, we combine traditional craftsmanship
            with contemporary design to create pieces that become your legacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-neutral-900/50 backdrop-blur-sm p-8 rounded-lg border border-neutral-800 hover:border-gold/50 transition-all duration-300 group"
            >
              <div className="text-gold mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-serif mb-3">{reason.title}</h3>
              <p className="text-gray-400">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-neutral-900/50 backdrop-blur-sm px-8 py-6 rounded-lg border border-neutral-800">
            <div>
              <p className="text-3xl font-serif text-gold">30+</p>
              <p className="text-sm text-gray-400">Years of Excellence</p>
            </div>
            <div className="w-px h-12 bg-neutral-800" />
            <div>
              <p className="text-3xl font-serif text-gold">5000+</p>
              <p className="text-sm text-gray-400">Happy Clients</p>
            </div>
            <div className="w-px h-12 bg-neutral-800" />
            <div>
              <p className="text-3xl font-serif text-gold">100%</p>
              <p className="text-sm text-gray-400">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;