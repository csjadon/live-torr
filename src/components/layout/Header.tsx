import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import Button from '../ui/Button';
import Logo from '../ui/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-2`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#mission" className="text-gray-900 hover:text-blue-900 font-medium transition">
            Mission
          </a>
          <a href="#who-we-are" className="text-gray-900 hover:text-blue-900 font-medium transition">
            Who We Are
          </a>
          <a href="#how-it-works" className="text-gray-900 hover:text-blue-900 font-medium transition">
            How It Works
          </a>
          <a href="#impact" className="text-gray-900 hover:text-blue-900 font-medium transition">
            Impact
          </a>
          <a href="#stories" className="text-gray-900 hover:text-blue-900 font-medium transition">
            Stories
          </a>
          <a href="#voting" className="text-gray-900 hover:text-blue-900 font-medium transition">
            Vote
          </a>
          <a href="#fundraiser" className="text-gray-900 hover:text-blue-900 font-medium transition">
            Fundraiser
          </a>
          <a href="#join" className="text-gray-900 hover:text-blue-900 font-medium transition">
            Join
          </a>
          <Button href="#donate" icon={<Heart size={16} />}>
            Donate ₹1
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-gray-900 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-white absolute top-full left-0 right-0 shadow-lg transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a
            href="#mission"
            className="text-gray-900 hover:text-blue-900 font-medium py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Mission
          </a>
          <a
            href="#who-we-are"
            className="text-gray-900 hover:text-blue-900 font-medium py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Who We Are
          </a>
          <a
            href="#how-it-works"
            className="text-gray-900 hover:text-blue-900 font-medium py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </a>
          <a
            href="#impact"
            className="text-gray-900 hover:text-blue-900 font-medium py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Impact
          </a>
          <a
            href="#stories"
            className="text-gray-900 hover:text-blue-900 font-medium py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Stories
          </a>
          <a
            href="#voting"
            className="text-gray-900 hover:text-blue-900 font-medium py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Vote
          </a>
          <a
            href="#fundraiser"
            className="text-gray-900 hover:text-blue-900 font-medium py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Fundraiser
          </a>
          <a
            href="#join"
            className="text-gray-900 hover:text-blue-900 font-medium py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Join
          </a>
          <Button
            href="#donate"
            icon={<Heart size={16} />}
            onClick={() => setIsMenuOpen(false)}
            fullWidth
          >
            Donate ₹1
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;