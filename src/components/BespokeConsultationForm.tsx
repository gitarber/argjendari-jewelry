import React, { useState } from 'react';
import { Check, ArrowRight, ArrowLeft } from 'lucide-react';

interface FormData {
  step1: {
    jewelryType: string;
    budget: string;
  };
  step2: {
    name: string;
    email: string;
    phone: string;
  };
  step3: {
    preferredDate: string;
    preferredTime: string;
    specialRequests: string;
  };
}

const BespokeConsultationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    step1: {
      jewelryType: '',
      budget: '',
    },
    step2: {
      name: '',
      email: '',
      phone: '',
    },
    step3: {
      preferredDate: '',
      preferredTime: '',
      specialRequests: '',
    },
  });

  const handleInputChange = (step: keyof FormData, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [step]: {
        ...prev[step],
        [field]: value,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsOpen(false);
    setCurrentStep(1);
    // Reset form data if needed
  };

  const jewelryTypes = [
    'Engagement Ring',
    'Wedding Band',
    'Necklace',
    'Earrings',
    'Bracelet',
    'Other',
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    'Over $50,000',
  ];

  const timeSlots = [
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Type of Jewelry</label>
              <div className="grid grid-cols-3 gap-2">
                {jewelryTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => handleInputChange('step1', 'jewelryType', type)}
                    className={`p-2 text-sm rounded-lg border transition-colors duration-300 ${
                      formData.step1.jewelryType === type
                        ? 'border-gold bg-gold/10 text-gold'
                        : 'border-neutral-700 hover:border-gold/50'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Budget Range</label>
              <div className="grid grid-cols-2 gap-2">
                {budgetRanges.map((range) => (
                  <button
                    key={range}
                    type="button"
                    onClick={() => handleInputChange('step1', 'budget', range)}
                    className={`p-2 text-sm rounded-lg border transition-colors duration-300 ${
                      formData.step1.budget === range
                        ? 'border-gold bg-gold/10 text-gold'
                        : 'border-neutral-700 hover:border-gold/50'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                value={formData.step2.name}
                onChange={(e) => handleInputChange('step2', 'name', e.target.value)}
                className="w-full bg-neutral-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={formData.step2.email}
                onChange={(e) => handleInputChange('step2', 'email', e.target.value)}
                className="w-full bg-neutral-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                value={formData.step2.phone}
                onChange={(e) => handleInputChange('step2', 'phone', e.target.value)}
                className="w-full bg-neutral-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Preferred Date</label>
              <input
                type="date"
                value={formData.step3.preferredDate}
                onChange={(e) => handleInputChange('step3', 'preferredDate', e.target.value)}
                className="w-full bg-neutral-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Preferred Time</label>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => handleInputChange('step3', 'preferredTime', time)}
                    className={`p-2 text-sm rounded-lg border transition-colors duration-300 ${
                      formData.step3.preferredTime === time
                        ? 'border-gold bg-gold/10 text-gold'
                        : 'border-neutral-700 hover:border-gold/50'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Special Requests</label>
              <textarea
                value={formData.step3.specialRequests}
                onChange={(e) => handleInputChange('step3', 'specialRequests', e.target.value)}
                className="w-full bg-neutral-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold h-24"
                placeholder="Tell us about your vision or any special requirements"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gold hover:bg-gold/90 text-black px-8 py-3 text-sm uppercase tracking-wider transition-colors duration-300"
      >
        Book Consultation
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-neutral-900 rounded-xl w-full max-w-xl p-6 shadow-xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-serif">Book Your Consultation</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-neutral-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="flex justify-between mb-6">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`flex items-center ${step < 3 ? 'flex-1' : ''}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  step === currentStep
                    ? 'bg-gold text-black'
                    : step < currentStep
                    ? 'bg-gold/20 text-gold'
                    : 'bg-neutral-800 text-neutral-400'
                }`}
              >
                {step < currentStep ? <Check className="w-4 h-4" /> : step}
              </div>
              {step < 3 && (
                <div
                  className={`flex-1 h-0.5 transition-colors duration-300 ${
                    step < currentStep ? 'bg-gold' : 'bg-neutral-800'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {renderStep()}

          <div className="flex justify-between mt-6">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            )}
            <button
              type="button"
              onClick={() => {
                if (currentStep < 3) {
                  setCurrentStep(currentStep + 1);
                } else {
                  handleSubmit;
                }
              }}
              className="flex items-center gap-2 bg-gold hover:bg-gold/90 text-black px-6 py-2 rounded-lg text-sm ml-auto transition-colors duration-300"
            >
              {currentStep === 3 ? 'Submit' : 'Next'}
              {currentStep < 3 && <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BespokeConsultationForm;