import { ArrowDown, Heart } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
  const scrollToMission = () => {
    const missionSection = document.getElementById('mission');
    if (missionSection) {
      missionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-blue-900 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-yellow-400 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-400 filter blur-3xl"></div>
      </div>
      
      {/* Diagonal pattern overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{ 
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)'
        }}
      ></div>

      {/* Content container */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          <span className="block mb-2">One Rupee.</span>
          <span className="block mb-2">One Purpose.</span>
          <span className="block text-yellow-400">One Revolution.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
          A movement that proves humanity's smallest collective actions can 
          solve our biggest challenges—permanently.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Button 
            href="#donate" 
            variant="primary" 
            size="large" 
            icon={<Heart size={20} />}
          >
            Donate ₹1 Now
          </Button>
          
          <Button 
            variant="outline" 
            size="large" 
            onClick={scrollToMission}
          >
            Learn More
          </Button>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <button 
            onClick={scrollToMission}
            className="text-blue-100 hover:text-white focus:outline-none transition"
            aria-label="Scroll down"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;