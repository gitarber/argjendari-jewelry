import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate API call
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section className="py-20 px-4 bg-neutral-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-6">Join Our Inner Circle</h2>
        <p className="text-gray-300 mb-8">
          Subscribe to receive exclusive updates, early access to new collections, and special VIP invitations.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-neutral-800 rounded-full focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button
              type="submit"
              className="bg-gold hover:bg-gold/90 text-black px-8 py-3 rounded-full transition-colors duration-300"
            >
              Subscribe
            </button>
          </div>
          {status === 'success' && (
            <p className="text-green-500 mt-4">Thank you for subscribing!</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Newsletter;