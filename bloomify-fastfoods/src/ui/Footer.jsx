import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-8 px-4 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm md:text-base">
        {/* About Kolafoods */}
        <div>
          <h3 className="text-[14px] font-semibold mb-2">ABOUT KOLAFOODS</h3>
          <ul className="space-y-1  sm:text-sm text-[10px]">
            <li><Link to="/about" className="hover:text-red-500">About Us</Link></li>
            <li><Link to="/culture" className="hover:text-red-500">Culture</Link></li>
            <li><Link to="/blog" className="hover:text-red-500">Blog</Link></li>
            <li><Link to="/careers" className="hover:text-red-500">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-red-500">Contact</Link></li>
          </ul>
        </div>

        {/* Popular Cities */}
        <div>
          <h3 className="text-[14px] font-semibold mb-2">POPULAR CITIES</h3>
          <ul className="space-y-1 sm:text-sm text-[10px]">
            <li><Link to="/boston" className="hover:text-red-500">Dhaka </Link></li>
            <li><Link to="/brooklyn" className="hover:text-red-500">Chattogram </Link></li>
            <li><Link to="/chicago" className="hover:text-red-500">Khulna </Link></li>
            <li><Link to="/hoboken" className="hover:text-red-500">Sylhet </Link></li>
            <li><Link to="/los-angeles" className="hover:text-red-500">Rajshahi </Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <p><h3 className="text-[14px] font-semibold mb-2">Central Hub</h3></p>
          <p className="mb-1">Dhaka</p>
          <p className="mb-1">Tangail, Dhanbari</p>
          <p className="mb-1">01315889487</p>
          <p className="mb-3"><a href="mailto:support@chmpstudio.com" className="hover:text-red-500">adibmahi14@gmail.com</a></p>
          <div className="flex space-x-3">
            <a href="https://www.facebook.com/tasin.mahi.50" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-red-500"><FaFacebookF size={20} /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-red-500"><FaTwitter size={20} /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-red-500"><FaInstagram size={20} /></a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-red-500"><FaYoutube size={20} /></a>
          </div>
        </div>

        {/* Subscribe Now */}
        <div>
          <h3 className="text-lg font-semibold mb-3">SUBSCRIBE NOW</h3>
          <p className="mb-3">Subscribe now for our new updates and get regular offers and stuff to your Email</p>
          <input type="email" placeholder="Your email address" className="w-full p-2 border border-gray-300 rounded-lg mb-3 text-sm" />
          <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300 text-sm">Subscribe</button>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8 pt-3 text-center text-xs">
        <p>2025 All rights reserved. By Bloomify.com</p>
      </div>
    </footer>
  );
};

export default Footer;
