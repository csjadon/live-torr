import React from 'react';

interface SliderDotsProps {
  slideCount: number;
  activeIndex: number;
  onDotClick: (index: number) => void;
}

const SliderDots: React.FC<SliderDotsProps> = ({ slideCount, activeIndex, onDotClick }) => {
  return (
    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
      {Array.from({ length: slideCount }).map((_, index) => (
        <button
          key={index}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            activeIndex === index 
              ? "bg-white scale-125" 
              : "bg-white/40 hover:bg-white/60"
          }`}
          onClick={() => onDotClick(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default SliderDots;