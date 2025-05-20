import { ArrowDown, Heart } from 'lucide-react';
import Button from '../ui/Button';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const scrollToMission = () => {
    const missionSection = document.getElementById('mission');
    if (missionSection) {
      missionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const images = [
    { url: 'placeholder_image_1.jpg', alt: 'Image 1' },
    { url: 'placeholder_image_2.jpg', alt: 'Image 2' },
    { url: 'placeholder_image_3.jpg', alt: 'Image 3' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative text-white overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-10" 
        style={{ 
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)'
        }}
      ></div>

      {/* Content container */}
      {/* Slider Background */}
      <div className="absolute inset-0 z-0">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${image.url})` }}>
              {/* Optional: Add an overlay for better text readability */}
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Foreground Content */}
      <div className="container mx-auto px-4 z-10 text-center relative">
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
            Learn More
          </Button>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <button 
            onClick={scrollToMission}
            className="text-white hover:text-gray-200 focus:outline-none transition"
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