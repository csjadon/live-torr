import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { Heart, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const Donate = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  
  const handleCopyUPI = () => {
    navigator.clipboard.writeText('donate@onerupeerevolution');
    setCopySuccess(true);
    
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };
  
  return (
    <Section id="donate" background="white">
      <SectionTitle 
        title="Donate ₹1 Now"
        subtitle="Your one rupee joins millions of others to create massive, meaningful change. It's a small act with an extraordinary impact."
        centered
      />
      
      <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* QR Code */}
        <div className="flex flex-col items-center">
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 mb-6">
            <img 
              src="https://images.pexels.com/photos/278430/pexels-photo-278430.jpeg?auto=compress&cs=tinysrgb&w=300" 
              alt="UPI QR Code" 
              className="w-64 h-64 object-cover"
            />
          </div>
          <p className="text-gray-700 text-center mb-4">
            Scan with any UPI app to donate ₹1
          </p>
          <div className="flex items-center bg-gray-100 rounded-lg p-2 mb-6">
            <span className="text-gray-700 font-medium mr-2">UPI ID:</span>
            <code className="bg-white px-3 py-1 rounded text-blue-900 border border-gray-200">
              donate@onerupeerevolution
            </code>
            <button 
              onClick={handleCopyUPI}
              className="ml-2 p-2 text-blue-700 hover:text-blue-900 transition"
              aria-label="Copy UPI ID"
            >
              {copySuccess ? <Check size={18} /> : <Copy size={18} />}
            </button>
          </div>
          <p className="text-sm text-gray-600 text-center">
            Powered by secure UPI payment technology
          </p>
        </div>
        
        {/* Benefits */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">
            What Your ₹1 Achieves:
          </h3>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                <Check size={16} className="text-green-600" />
              </div>
              <p className="text-gray-700">
                <span className="font-medium">Immediate Relief:</span> Your donation combines with millions of others to provide food, water, and shelter today.
              </p>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                <Check size={16} className="text-green-600" />
              </div>
              <p className="text-gray-700">
                <span className="font-medium">99% Direct Impact:</span> Only 1% goes to operations, ensuring maximum benefit to those in need.
              </p>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                <Check size={16} className="text-green-600" />
              </div>
              <p className="text-gray-700">
                <span className="font-medium">Transparent Tracking:</span> See exactly how your rupee contributes through our real-time dashboard.
              </p>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                <Check size={16} className="text-green-600" />
              </div>
              <p className="text-gray-700">
                <span className="font-medium">Join a Movement:</span> Become part of a global community proving the power of collective small actions.
              </p>
            </li>
          </ul>
          
          <Button 
            variant="primary" 
            size="large" 
            icon={<Heart size={20} />}
            fullWidth
          >
            Donate ₹1 Now
          </Button>
          
          <p className="text-sm text-gray-600 text-center mt-4">
            International donors can also use credit/debit cards via our payment gateway
          </p>
        </div>
      </div>
      
      <div className="mt-20 text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">
          Imagine What We Can Achieve Together
        </h3>
        <p className="text-gray-700 mb-8">
          If just 10% of India's population donates ₹1, that's over ₹130 million—enough to feed thousands, 
          provide clean water to entire villages, and shelter families in crisis.
        </p>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <p className="text-lg font-medium text-blue-900">
            One rupee seems small, but together, we are mighty.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Donate;