import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emily Thompson",
      role: "Bride",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      quote: "The bespoke engagement ring service exceeded all my expectations. The attention to detail and craftsmanship is extraordinary."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Collector",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      quote: "Their collection of rare pieces is unmatched. The expertise and knowledge of their staff make every visit a learning experience."
    },
    {
      id: 3,
      name: "Sarah Williams",
      role: "Fashion Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      quote: "LUXE has been my go-to for statement pieces. Their designs are timeless yet contemporary."
    }
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">Client Testimonials</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center">
              <div className="w-20 h-20 mx-auto mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <blockquote className="text-gray-300 italic mb-4">"{testimonial.quote}"</blockquote>
              <p className="font-serif text-lg">{testimonial.name}</p>
              <p className="text-gold text-sm">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;