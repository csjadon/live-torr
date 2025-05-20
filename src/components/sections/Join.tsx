import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { Users, Building, MapPin } from 'lucide-react';

const Join = () => {
  return (
    <Section id="join" background="blue">
      <SectionTitle 
        title="Join the Revolution"
        subtitle="Be part of something bigger than yourself. There are many ways to contribute beyond your one rupee donation."
        centered
        light
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {/* Volunteer Card */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1 duration-300">
          <div className="bg-blue-800 p-6 flex justify-center">
            <Users size={48} className="text-white" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 text-blue-900">Become a Volunteer</h3>
            <p className="text-gray-700 mb-6">
              Join our global network of volunteers who help distribute resources, 
              organize local campaigns, and spread our message.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Community outreach</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Distribution support</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Social media advocacy</span>
              </li>
            </ul>
            <Button variant="outline" fullWidth>
              Apply as Volunteer
            </Button>
          </div>
        </div>
        
        {/* Partner Card */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1 duration-300">
          <div className="bg-blue-800 p-6 flex justify-center">
            <Building size={48} className="text-white" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 text-blue-900">Become a Partner</h3>
            <p className="text-gray-700 mb-6">
              Organizations can partner with us to amplify impact, share resources, 
              and collaboratively address humanitarian challenges.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">NGO collaborations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Corporate partnerships</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Distribution networks</span>
              </li>
            </ul>
            <Button variant="outline" fullWidth>
              Partnership Inquiry
            </Button>
          </div>
        </div>
        
        {/* Regional Leader Card */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1 duration-300">
          <div className="bg-blue-800 p-6 flex justify-center">
            <MapPin size={48} className="text-white" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 text-blue-900">Become a Regional Leader</h3>
            <p className="text-gray-700 mb-6">
              Lead the revolution in your community by coordinating local efforts
              and representing our mission in your region.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Local leadership</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Community organization</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Needs assessment</span>
              </li>
            </ul>
            <Button variant="outline" fullWidth>
              Apply as Regional Leader
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-16 bg-white bg-opacity-10 rounded-lg p-8 text-center">
        <blockquote className="text-xl md:text-2xl font-medium text-white italic mb-6">
          "The One Rupee Revolution isn't just about donations, it's about active participation
          in building a more equitable world."
        </blockquote>
        <p className="text-blue-100 mb-8">
          Whatever your skills, whatever your capacity—there's a place for you in this movement.
        </p>
        <Button 
          variant="primary" 
          size="large"
          href="mailto:join@onerupeerevolution.org"
        >
          Get Involved Today
        </Button>
      </div>
    </Section>
  );
};

export default Join;