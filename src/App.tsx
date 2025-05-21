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
        <meta name="description" content="Join the One Rupee Revolution and make a difference with just one rupee." />
        <meta name="keywords" content="NGO, HELP, one rupee, revolution, organisation, foundation organisation, shelter, humanity, need," />
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