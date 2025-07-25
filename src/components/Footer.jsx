import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaChevronUp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../asstes/images/logo.png";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 relative">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Logo + Contact Info */}
        <div>
          <Link to="/" className="flex items-center space-x-3 mb-4">
            <div className="bg-white p-1 rounded-full shadow-md">
              <img
                src={logo}
                alt="Nature Hotel Logo"
                className="h-10 w-10 object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-green-400">Nature</span>
              <span className="text-sm font-semibold text-green-400">Hotel</span>
            </div>
          </Link>

          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <FaMapMarkerAlt className="mt-1 mr-2 text-orange-400" />
              62 Khúc Thừa Dụ, Dịch Vọng, Cầu Giấy, Hà Nội, Việt Nam
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2 text-orange-400" />
              (+84) 0243 223 2223
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2 text-orange-400" />
              datphong@naturehotel.vn
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-start md:items-center">
          <h3 className="text-lg font-medium text-white mb-3">Theo dõi chúng tôi</h3>
          <div className="flex space-x-3">
            {[
              { icon: <FaFacebookF />, url: "https://facebook.com" },
              { icon: <FaTwitter />, url: "https://twitter.com" },
              { icon: <FaInstagram />, url: "https://instagram.com" },
              { icon: <FaYoutube />, url: "https://youtube.com" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-800 p-2 rounded-full shadow hover:scale-110 transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-between items-start md:items-end">
          <p className="text-sm text-gray-400 mt-6 md:mt-0">
            © {new Date().getFullYear()} Nature Hospitality. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition"
        >
          <FaChevronUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
