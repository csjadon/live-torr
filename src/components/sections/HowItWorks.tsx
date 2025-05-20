import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import { Banknote, BarChart3, Utensils, Home, Droplets, Shirt } from 'lucide-react';

const HowItWorks = () => {
  return (
    <Section id="how-it-works" background="gradient">
      <SectionTitle 
        title="How It Works"
        subtitle="Our model is beautifully simple yet powerful. We gather millions of ₹1 donations and transform them into direct action and impact."
        centered
        light
      />
      
      <div className="relative mt-16">
        {/* Timeline stem */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white opacity-30"></div>
        
        {/* Step 1 */}
        <div className="mb-16 relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-center md:text-right">
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">People Donate ₹1</h3>
              <p className="text-blue-100">
                Millions of people from around the world contribute just ₹1 (or local equivalent).
                This minimal amount ensures anyone can participate, regardless of their financial situation.
              </p>
            </div>
            
            <div className="z-10 w-14 h-14 rounded-full bg-yellow-400 text-blue-900 flex items-center justify-center flex-shrink-0">
              <Banknote size={24} />
            </div>
            
            <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
          </div>
        </div>
        
        {/* Step 2 */}
        <div className="mb-16 relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
            
            <div className="z-10 w-14 h-14 rounded-full bg-yellow-400 text-blue-900 flex items-center justify-center flex-shrink-0">
              <BarChart3 size={24} />
            </div>
            
            <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">Funds Are Pooled Transparently</h3>
              <p className="text-blue-100">
                All contributions are pooled into a transparent fund. Just 1% goes to operational costs,
                ensuring 99% of every donation directly supports our mission. All transactions and allocations
                are publicly visible.
              </p>
            </div>
          </div>
        </div>
        
        {/* Step 3 */}
        <div className="relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-center md:text-right">
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">Distributed For Basic Needs</h3>
              <p className="text-blue-100">
                Funds are used to provide essential needs to those in crisis. We work with local partners
                and volunteers to ensure resources reach those who need them most effectively.
              </p>
            </div>
            
            <div className="z-10 w-14 h-14 rounded-full bg-yellow-400 text-blue-900 flex items-center justify-center flex-shrink-0">
              <Utensils size={24} />
            </div>
            
            <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
          </div>
        </div>
      </div>
      
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
          <Utensils size={32} className="mx-auto mb-4 text-yellow-300" />
          <h4 className="text-xl font-bold mb-2 text-white">Food</h4>
          <p className="text-blue-100">
            Nutritious meals and food supplies for individuals and families facing hunger.
          </p>
        </div>
        
        <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
          <Droplets size={32} className="mx-auto mb-4 text-yellow-300" />
          <h4 className="text-xl font-bold mb-2 text-white">Clean Water</h4>
          <p className="text-blue-100">
            Access to safe drinking water through purification systems and delivery services.
          </p>
        </div>
        
        <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
          <Home size={32} className="mx-auto mb-4 text-yellow-300" />
          <h4 className="text-xl font-bold mb-2 text-white">Shelter</h4>
          <p className="text-blue-100">
            Emergency housing and long-term shelter solutions for the homeless.
          </p>
        </div>
        
        <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
          <Shirt size={32} className="mx-auto mb-4 text-yellow-300" />
          <h4 className="text-xl font-bold mb-2 text-white">Clothing</h4>
          <p className="text-blue-100">
            Essential clothing items for all seasons to maintain dignity and protection.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default HowItWorks;