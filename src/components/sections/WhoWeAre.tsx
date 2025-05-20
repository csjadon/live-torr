import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

const WhoWeAre = () => {
  return (
    <Section id="who-we-are" background="light">
      <SectionTitle 
        title="Who We Are"
        subtitle="We are social entrepreneurs, dreamers, and changemakers driven by one powerful idea: everyone has the power to change the world with just ₹1."
        centered
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        {/* Founder 1 */}
        <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
          <div className="w-40 h-40 rounded-full overflow-hidden shrink-0">
            <img
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="Chitresh Singh Jadon"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-bold mb-2">Chitresh Singh Jadon</h3>
            <p className="text-blue-800 font-medium mb-4">Co-Founder & Visionary</p>
            <p className="text-gray-700">
              A passionate advocate for global equity and sustainable development,
              Chitresh believes in the transformative power of collective small actions.
              His work combines grassroots activism with innovative social entrepreneurship.
            </p>
          </div>
        </div>
        
        {/* Founder 2 */}
        <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
          <div className="w-40 h-40 rounded-full overflow-hidden shrink-0">
            <img
              src="https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="Kanishk Raj Singh Dodiya"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-bold mb-2">Kanishk Raj Singh Dodiya</h3>
            <p className="text-blue-800 font-medium mb-4">Co-Founder & Strategist</p>
            <p className="text-gray-700">
              With extensive experience in organizational development and community
              mobilization, Kanishk excels at turning vision into reality. He leads our
              strategic partnerships and oversees implementation of our ground initiatives.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center max-w-3xl mx-auto">
        <p className="text-xl font-semibold text-blue-900 mb-6">
          We are not a charity — we are a <span className="text-yellow-500">people's revolution</span>.
        </p>
        <p className="text-gray-700">
          Our team extends beyond our founders to include thousands of volunteers, partners, and supporters worldwide.
          We are united in our belief that humanity has all the resources it needs to solve its most pressing problems—
          we just need to connect and mobilize effectively.
        </p>
      </div>
    </Section>
  );
};

export default WhoWeAre;