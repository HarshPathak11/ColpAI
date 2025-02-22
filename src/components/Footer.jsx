import { FaFacebookF, FaTwitter, FaGooglePlusG, FaYoutube, FaInstagram, FaLinkedinIn, FaVk } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          {[FaFacebookF, FaTwitter, FaGooglePlusG, FaYoutube, FaInstagram, FaLinkedinIn, FaVk].map((Icon, index) => (
            <a key={index} href="#" className="text-gray-400 hover:text-white text-2xl border-2 border-gray-500 p-2 rounded-full transition">
              <Icon />
            </a>
          ))}
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-gray-300">
          <div>
            <h3 className="font-semibold text-white mb-2">ColpAI</h3>
            <ul>
              <li><a href="#" className="hover:text-white">Teardown</a></li>
              <li><a href="#" className="hover:text-white">News</a></li>
              <li><a href="#" className="hover:text-white">Partners</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Terms of Use</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">Social</h3>
            <ul>
              <li><a href="#" className="hover:text-white">Facebook</a></li>
              <li><a href="#" className="hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-white">YouTube</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">Service</h3>
            <ul>
              <li><a href="#" className="hover:text-white">Compare</a></li>
              <li><a href="#" className="hover:text-white">Download</a></li>
              <li><a href="#" className="hover:text-white">Feedback</a></li>
              <li><a href="#" className="hover:text-white">Bug Report</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">Activity</h3>
            <ul>
              <li><a href="#" className="hover:text-white">Influencers</a></li>
              <li><a href="#" className="hover:text-white">Affiliate</a></li>
              <li><a href="#" className="hover:text-white">Co-branding</a></li>
              <li><a href="#" className="hover:text-white">Honor</a></li>
              <li><a href="#" className="hover:text-white">Giveaway</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-400">Subscribe to our newsletter</p>
          <div className="flex mt-3 md:mt-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 bg-gray-800 text-white rounded-l-lg outline-none border border-gray-600"
            />
            <button className="px-4 py-2 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600">Subscribe</button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-6">
          <p>Copyright © 2025 <span className="font-semibold">ColpAI</span>. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
