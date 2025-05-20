import { useEffect, useRef } from 'react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import CounterAnimation from '../ui/CounterAnimation';
import { Users, IndianRupee, MapPin, Utensils } from 'lucide-react';

const Impact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisibleRef = useRef<boolean>(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || isVisibleRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      
      if (isVisible) {
        isVisibleRef.current = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <Section id="impact" background="white">
      <div ref={sectionRef}>
        <SectionTitle 
          title="Our Impact Dashboard"
          subtitle="Real-time tracking of our collective impact. Every rupee counted, every life changed, with complete transparency."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {/* Donors Counter */}
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={28} className="text-blue-700" />
            </div>
            <h3 className="text-4xl font-bold text-blue-900 mb-2">
              <CounterAnimation end={1548673} prefix="" suffix="" />
            </h3>
            <p className="text-lg text-blue-700">People Donating</p>
          </div>
          
          {/* Funds Raised Counter */}
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <IndianRupee size={28} className="text-blue-700" />
            </div>
            <h3 className="text-4xl font-bold text-blue-900 mb-2">
              <CounterAnimation end={1548673} prefix="₹" suffix="" />
            </h3>
            <p className="text-lg text-blue-700">Total Raised</p>
          </div>
          
          {/* Locations Counter */}
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin size={28} className="text-blue-700" />
            </div>
            <h3 className="text-4xl font-bold text-blue-900 mb-2">
              <CounterAnimation end={124} prefix="" suffix="" />
            </h3>
            <p className="text-lg text-blue-700">Locations</p>
          </div>
          
          {/* Meals Provided Counter */}
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Utensils size={28} className="text-blue-700" />
            </div>
            <h3 className="text-4xl font-bold text-blue-900 mb-2">
              <CounterAnimation end={287459} prefix="" suffix="" />
            </h3>
            <p className="text-lg text-blue-700">Meals Provided</p>
          </div>
        </div>
        
        <div className="mt-16 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
          <div className="bg-blue-900 text-white p-4">
            <h3 className="text-xl font-bold">Fund Allocation Breakdown</h3>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 font-medium">Food Distribution</span>
                <span className="text-gray-700 font-medium">47%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '47%' }}></div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 font-medium">Clean Water Projects</span>
                <span className="text-gray-700 font-medium">28%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '28%' }}></div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 font-medium">Emergency Shelter</span>
                <span className="text-gray-700 font-medium">18%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '18%' }}></div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 font-medium">Clothing Support</span>
                <span className="text-gray-700 font-medium">6%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '6%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 font-medium">Operations</span>
                <span className="text-gray-700 font-medium">1%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-gray-500 h-2.5 rounded-full" style={{ width: '1%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 text-center border-t border-gray-200">
            <a href="#" className="text-blue-700 hover:text-blue-900 font-medium transition">
              View Detailed Financial Reports →
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Impact;