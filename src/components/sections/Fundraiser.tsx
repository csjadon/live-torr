import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Heart, Clock, Target, Users, Share2 } from 'lucide-react';
import CounterAnimation from '../ui/CounterAnimation';

interface Campaign {
  id: number;
  title: string;
  description: string;
  image: string;
  goal: number;
  raised: number;
  daysLeft: number;
  supporters: number;
  story: string;
}

const campaigns: Campaign[] = [
  {
    id: 1,
    title: "Help Aanya's Family Rebuild",
    description: "Support Aanya's family of 5 rebuild their lives after losing everything in recent floods.",
    image: "https://images.pexels.com/photos/3585798/pexels-photo-3585798.jpeg?auto=compress&cs=tinysrgb&w=300",
    goal: 100000,
    raised: 45000,
    daysLeft: 15,
    supporters: 234,
    story: "Aanya's family lost their home and livelihood in the devastating floods. They need our support to rebuild their lives and secure their children's future."
  },
  {
    id: 2,
    title: "Clean Water for Rajasthan Village",
    description: "Install water purification system in a village of 500 people suffering from contaminated water.",
    image: "https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=300",
    goal: 50000,
    raised: 35000,
    daysLeft: 10,
    supporters: 156,
    story: "The village has been struggling with contaminated water for years, leading to numerous health issues. A water purification system will transform their lives."
  }
];

const Fundraiser = () => {
  return (
    <Section id="fundraiser" background="white">
      <SectionTitle 
        title="Current Fundraisers"
        subtitle="Support specific causes and track your impact. Every rupee brings hope to those who need it most."
        centered
      />

      <div className="max-w-6xl mx-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {campaigns.map(campaign => (
            <Card key={campaign.id} className="overflow-hidden">
              <img 
                src={campaign.image} 
                alt={campaign.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                  {campaign.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {campaign.description}
                </p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">
                      ₹<CounterAnimation end={campaign.raised} /> raised
                    </span>
                    <span className="text-gray-600">
                      of ₹{campaign.goal.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-900">
                      {campaign.daysLeft}
                    </div>
                    <div className="text-sm text-gray-600">Days Left</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-900">
                      {campaign.supporters}
                    </div>
                    <div className="text-sm text-gray-600">Supporters</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-900">
                      {Math.round((campaign.raised / campaign.goal) * 100)}%
                    </div>
                    <div className="text-sm text-gray-600">Funded</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button 
                    variant="primary"
                    icon={<Heart size={16} />}
                    fullWidth
                  >
                    Donate Now
                  </Button>
                  <Button 
                    variant="outline"
                    icon={<Share2 size={16} />}
                  >
                    Share
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
            Start a Fundraiser
          </h3>
          <p className="text-gray-700 text-center mb-8">
            Have a cause that needs support? Start a fundraiser and let the community help.
          </p>
          <div className="flex justify-center">
            <Button 
              variant="primary"
              size="large"
              href="#start-fundraiser"
            >
              Start Fundraising
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Fundraiser;