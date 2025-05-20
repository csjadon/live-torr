import { useState } from 'react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

// Testimonial data
const stories = [
  {
    id: 1,
    name: 'Aanya Sharma',
    location: 'Mumbai, India',
    quote: 'The One Rupee Revolution provided meals for my entire family during the pandemic when we lost everything. That one rupee from millions of people meant my children could eat.',
    image: 'https://images.pexels.com/photos/3585798/pexels-photo-3585798.jpeg?auto=compress&cs=tinysrgb&w=300',
    videoThumbnail: 'https://images.pexels.com/photos/3584430/pexels-photo-3584430.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 2,
    name: 'Rahul Patel',
    location: 'Delhi, India',
    quote: 'After the flood destroyed our home, the Revolution provided emergency shelter and clean water. It\'s amazing what happens when everyone gives just a little.',
    image: 'https://images.pexels.com/photos/7709342/pexels-photo-7709342.jpeg?auto=compress&cs=tinysrgb&w=300',
    videoThumbnail: 'https://images.pexels.com/photos/7389134/pexels-photo-7389134.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 3,
    name: 'Priya Singh',
    location: 'Bengaluru, India',
    quote: 'When my daughter was sick, I couldn\'t afford both medicine and food. The One Rupee Revolution\'s meal program meant I could focus on her recovery without worrying about hunger.',
    image: 'https://images.pexels.com/photos/3587883/pexels-photo-3587883.jpeg?auto=compress&cs=tinysrgb&w=300',
    videoThumbnail: 'https://images.pexels.com/photos/3587878/pexels-photo-3587878.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
];

const Stories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextStory = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };
  
  const prevStory = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + stories.length) % stories.length);
  };
  
  const activeStory = stories[activeIndex];
  
  return (
    <Section id="stories" background="light">
      <SectionTitle 
        title="Stories of Hope"
        subtitle="Real stories from real people whose lives have been changed through our collective one-rupee action."
        centered
      />
      
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Featured Video */}
        <div className="lg:col-span-2">
          <div className="relative h-0 pb-[56.25%] rounded-lg overflow-hidden bg-gray-800">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${activeStory.videoThumbnail})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <button 
                  className="w-16 h-16 bg-yellow-500 hover:bg-yellow-600 text-blue-900 rounded-full flex items-center justify-center transition transform hover:scale-110"
                  aria-label="Play video"
                >
                  <Play size={30} fill="currentColor" className="ml-1" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-white text-lg font-bold">{activeStory.name}'s Story</h3>
                <p className="text-gray-200 text-sm">{activeStory.location}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonial */}
        <div className="flex flex-col">
          <Card className="flex-grow p-6 flex flex-col">
            <div className="mb-6 flex items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img 
                  src={activeStory.image} 
                  alt={activeStory.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">{activeStory.name}</h3>
                <p className="text-gray-600">{activeStory.location}</p>
              </div>
            </div>
            
            <blockquote className="text-lg text-gray-800 italic flex-grow mb-8">
              "{activeStory.quote}"
            </blockquote>
            
            <div className="flex justify-between mt-auto">
              <button 
                onClick={prevStory} 
                className="w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-900 flex items-center justify-center transition"
                aria-label="Previous story"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex items-center space-x-2">
                {stories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition ${
                      index === activeIndex ? 'bg-blue-700' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to story ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextStory} 
                className="w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-900 flex items-center justify-center transition"
                aria-label="Next story"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </Card>
          
          <div className="mt-6 text-center">
            <a href="#" className="inline-flex items-center text-blue-700 hover:text-blue-900 font-medium transition">
              View All Impact Stories
              <ChevronRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Before and After Section */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-center mb-10">Before & After</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden">
            <div className="h-64 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1432794/pexels-photo-1432794.jpeg?auto=compress&cs=tinysrgb&w=300)' }}>
              <div className="h-full w-full bg-black bg-opacity-40 flex flex-col justify-end p-6">
                <span className="text-white font-bold text-lg mb-2">Before</span>
                <p className="text-gray-200">Villagers walking 5km daily for contaminated water</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden">
            <div className="h-64 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=300)' }}>
              <div className="h-full w-full bg-black bg-opacity-40 flex flex-col justify-end p-6">
                <span className="text-white font-bold text-lg mb-2">After</span>
                <p className="text-gray-200">Clean water well installed directly in the village center</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Stories;