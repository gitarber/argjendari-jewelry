import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-12 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-serif mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-gold" />
                <span>info@argjendarikapidani.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-gold" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-gold" />
                <span>123 Luxury Lane, New York, NY 10001</span>
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full bg-neutral-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-neutral-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full bg-neutral-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gold hover:bg-gold/90 text-black font-medium py-3 rounded-lg transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;