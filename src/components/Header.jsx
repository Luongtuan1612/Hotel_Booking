import { Link, useLocation } from "react-router-dom";
import logo from "../asstes/images/logo.png";

const navLinks = [
  { path: "/", label: "Trang chủ" },
  { path: "/rooms", label: "Phòng" },
  { path: "/contact", label: "Liên hệ" },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/30 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo & Tiêu đề */}
        <Link to="/" className="flex items-center space-x-3">
          {/* Logo hình chiếc lá */}
          <div className="bg-white p-1 rounded-full shadow-md">
            <img
              src={logo}
              alt="Nature Hotel Logo"
              className="h-10 w-10 object-contain"
            />
          </div>

          {/* Tiêu đề 2 dòng */}
          <div className="flex flex-col leading-tight">
            <span className="text-lg sm:text-xl font-bold text-green-400">
              Nature
            </span>
            <span className="text-sm sm:text-base font-semibold  text-green-400">
              Hotel
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden sm:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium px-4 py-2 rounded-md transition-all duration-200 ${
                location.pathname === link.path
                  ? "text-white bg-white/20 shadow-sm"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
