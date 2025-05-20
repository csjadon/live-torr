import { Heart, Instagram, Youtube, Twitter, Mail, Download } from 'lucide-react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <div className="mb-4">
              <Logo light />
            </div>
            <p className="text-blue-100 mb-4">
              Uniting people across the world to contribute just ₹1, proving that small collective acts 
              can solve major global challenges.
            </p>
            <Button 
              href="#donate" 
              icon={<Heart size={16} />}
              variant="secondary"
              size="small"
            >
              Donate ₹1 Now
            </Button>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#mission" className="text-blue-100 hover:text-white transition">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#who-we-are" className="text-blue-100 hover:text-white transition">
                  Who We Are
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-blue-100 hover:text-white transition">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#impact" className="text-blue-100 hover:text-white transition">
                  Impact Dashboard
                </a>
              </li>
              <li>
                <a href="#stories" className="text-blue-100 hover:text-white transition">
                  Stories of Hope
                </a>
              </li>
              <li>
                <a href="#join" className="text-blue-100 hover:text-white transition">
                  Join The Revolution
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:contact@onerupeerevolution.org" className="text-blue-100 hover:text-white transition">
                  contact@onerupeerevolution.org
                </a>
              </li>
              <li>
                <p className="text-blue-100">
                  Registered as: One Rupee Revolution Trust
                </p>
              </li>
              <li>
                <p className="text-blue-100">
                  Registration No: 12345-67890
                </p>
              </li>
              <li className="pt-2">
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-100 hover:text-white transition"
                >
                  <Download size={16} className="mr-2" />
                  Download Press Kit
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <p className="text-blue-100 mb-4">
              @onerupeeguy
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/onerupeeguy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-blue-700 p-3 rounded-full transition"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://youtube.com/onerupeeguy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-blue-700 p-3 rounded-full transition"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="https://twitter.com/onerupeeguy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-blue-700 p-3 rounded-full transition"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-blue-800 text-center md:flex md:justify-between md:items-center">
          <p className="text-blue-200 text-sm mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} The One Rupee Revolution. All rights reserved.
          </p>
          <div className="flex justify-center md:justify-start space-x-6 text-sm text-blue-200">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Impact Reports</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;