import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SliderContent from './SliderContent';
import SliderDots from './SliderDots';

// Slider images and content configuration
const slides = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Building a World Without Hunger",
    subtitle: "Unite with us to ensure no one suffers from lack of basic needs",
    buttonText: "Join the Movement"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/6647021/pexels-photo-6647021.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "The Power of ₹1",
    subtitle: "Small contributions create massive change when we stand together",
    buttonText: "Make a Difference"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Transparency in Every Action",
    subtitle: "See exactly how your contribution creates real impact",
    buttonText: "Learn More"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const slideLength = slides.length;

  // Auto advance slides
  useEffect(() => {
    let slideInterval: ReturnType<typeof setInterval>;
    
    if (isAutoPlaying) {
      slideInterval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slideLength);
      }, 5000); // Change slide every 5 seconds
    }
    
    return () => {
      if (slideInterval) clearInterval(slideInterval);
    };
  }, [isAutoPlaying, slideLength]);

  // Reset auto-play timer when manually changing slides
  useEffect(() => {
    setIsAutoPlaying(true);
    return () => setIsAutoPlaying(false);
  }, [currentSlide]);

  // Navigation functions
  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slideLength);
  }, [slideLength]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slideLength) % slideLength);
  }, [slideLength]);

  const goToSlide = useCallback((slideIndex: number) => {
    setCurrentSlide(slideIndex);
  }, []);

  return (
    <div className="relative h-[100vh] overflow-hidden">
      {/* Slides container */}
      <div className="h-full w-full relative">
        {slides.map((slide, index) => (
          <SliderContent
            key={slide.id}
            slide={slide}
            isActive={index === currentSlide}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 transition-all z-10"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 transition-all z-10"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide indicators */}
      <SliderDots 
        slideCount={slideLength} 
        activeIndex={currentSlide} 
        onDotClick={goToSlide} 
      />
    </div>
  );
};

export default HeroSlider;