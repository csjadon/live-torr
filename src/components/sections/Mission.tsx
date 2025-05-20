import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import { Globe, Users, TrendingUp } from 'lucide-react';

const Mission = () => {
  return (
    <Section id="mission" background="white">
      <SectionTitle 
        title="Why ₹1 Can Change the World"
        subtitle="Our mission is to unite people across the world to contribute just ₹1, proving that small collective acts can solve major challenges—permanently."
        centered
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mb-6">
            <Globe size={28} />
          </div>
          <h3 className="text-xl font-bold mb-3">Global Collective Action</h3>
          <p className="text-gray-700">
            When billions contribute just ₹1, we create a self-sustaining ecosystem where 
            humanity supports itself without depending solely on governments or broken systems.
          </p>
        </div>
        
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mb-6">
            <Users size={28} />
          </div>
          <h3 className="text-xl font-bold mb-3">Human Dignity for All</h3>
          <p className="text-gray-700">
            Every person deserves food, water, shelter, and clothing. Through our collective 
            effort, we ensure no one is left behind—proving what's possible when we unite.
          </p>
        </div>
        
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mb-6">
            <TrendingUp size={28} />
          </div>
          <h3 className="text-xl font-bold mb-3">Permanent Solutions</h3>
          <p className="text-gray-700">
            We're not a charity—we're a revolution. Our goal isn't temporary relief, but 
            lasting transformation through community-driven, sustainable initiatives.
          </p>
        </div>
      </div>
      
      <div className="mt-16 p-8 bg-blue-50 rounded-lg border border-blue-100">
        <blockquote className="text-xl md:text-2xl font-medium text-center text-blue-900 italic">
          "Never doubt that a small group of thoughtful, committed citizens can change the world; 
          indeed, it's the only thing that ever has."
          <footer className="text-base font-normal text-blue-700 mt-2">
            — Margaret Mead
          </footer>
        </blockquote>
      </div>
    </Section>
  );
};

export default Mission;