import { useEffect } from 'react';
import Header from './components/layout/Header';
import { Helmet } from 'react-helmet';
import Footer from './components/layout/Footer';
//import Hero from './components/sections/Hero';
import HeroSlider from './components/sections/HeroSlider';
import Mission from './components/sections/Mission';
import WhoWeAre from './components/sections/WhoWeAre';
import HowItWorks from './components/sections/HowItWorks';
import Impact from './components/sections/Impact';
import Stories from './components/sections/Stories';
import Join from './components/sections/Join';
import Donate from './components/sections/Donate';
import Voting from './components/sections/Voting';
import Fundraiser from './components/sections/Fundraiser';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = 'One Rupee Revolution | Change the World';
    
    // Find and update the favicon
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.setAttribute('href', '/rupee-icon.svg');
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Helmet>
        <title>The One Rupee Revolution</title>
        <meta name="description" content="The One Rupee Revolution is a people-powered nonprofit transforming lives through ₹1 donations. Join the movement to provide food, water, shelter, and education to those in need—transparently and sustainably." />
        <meta name="keywords" content="NGO, HELP, one rupee, revolution, organisation, foundation organisation, shelter, humanity, need, One Rupee Revolution, The One Rupee Guy, ₹1 donation movement, Micro-donation charity India, Public charitable trust India, Section 8 company NGO, Education for underprivileged India, Transparent NGO India, Small donations big impact, Social impact through ₹1, People-powered charity Donate ₹1 to help India,	One rupee donation for education,	NGO with 1% admin cost,	Charity transparency India,	Small donations big impact,	India grassroots movement,	Nonprofit governance India,	Low-cost charity model,	Empowering marginalized communities,	Social unity through giving,	Digital fundraising India,	Charity for food and shelter,	Volunteer-led NGO India,	Charity startup India,	One rupee social revolution,	One Rupee Revolution,	The One Rupee Guy,	₹1 donation movement,	Charity with one rupee,	Micro-donation charity India,	Public charitable trust India,	Section 8 company NGO,	Society registration India,	FCRA registered NGO,	80G tax exemption NGO,	12A registered trust,	NGO for food, water, shelter,	Education for underprivileged India,	Human unity movement,	People-powered charity,	Transparent NGO India,	Volunteer-driven nonprofit,	Digital charity platform,	Social impact through ₹1,	One rupee change maker, Donate, Donation, Fundraising, Fundraiser, Best Fundraiser, Top Fundraiser, Charity, Non-Profit, Social impact,Humanitarian aid,Poverty alleviation, Community development, Volunteer, Partnership, Regional leader, Collective action,  Sustainable initiatives, Transparent, Impact dashboard, Stories of hope, UPI donation, Online donation, Help the needy, Support a cause, Make a difference " />
      </Helmet>
      <Header />
      <main className="flex-grow">
        <HeroSlider />
        <Mission />
        <WhoWeAre />
        <HowItWorks />
        <Impact />
        <Stories />
        <Voting />
        <Fundraiser />
        <Join />
        <Donate />
      </main>
      <Footer />
    </div>
  );
}

export default App