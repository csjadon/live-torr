import React from 'react';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
}

interface SliderContentProps {
  slide: Slide;
  isActive: boolean;
}

const SliderContent: React.FC<SliderContentProps> = ({ slide, isActive }) => {
  return (
    <div 
      className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
        isActive ? "opacity-100 z-10" : "opacity-0 z-0"
      }`}
    >
      {/* Background image with overlay gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${slide.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-6 md:px-12">
        <div className="text-center max-w-4xl mx-auto">
          <h1 
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 transform transition-all duration-700 ease-out"
            style={{
              transform: isActive ? 'translateY(0)' : 'translateY(20px)',
              opacity: isActive ? 1 : 0,
              transitionDelay: '300ms'
            }}
          >
            {slide.title}
          </h1>
          <p 
            className="text-xl md:text-2xl text-white/90 mb-8 md:mb-10 transform transition-all duration-700 ease-out"
            style={{
              transform: isActive ? 'translateY(0)' : 'translateY(20px)',
              opacity: isActive ? 1 : 0,
              transitionDelay: '500ms'
            }}
          >
            {slide.subtitle}
          </p>
          <button 
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:scale-105 duration-300 ease-out"
            style={{
              transform: isActive ? 'translateY(0)' : 'translateY(20px)',
              opacity: isActive ? 1 : 0,
              transitionDelay: '700ms'
            }}
          >
            {slide.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderContent;