import { Link, useLocation } from "react-router-dom";

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
        {/* Logo */}
        <h1 className="text-2xl font-bold text-green-500 drop-shadow-md tracking-wide">
          <Link to="/">Nature Hotel</Link>
        </h1>

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
