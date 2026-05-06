import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Courses", path: "/courses" },
  { name: "BL Studio", path: "/studio" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass =
    "block text-white/80 hover:text-yellow-500 transition font-medium text-sm lg:text-base";

  return (
    <nav className="w-full bg-[#2a073f] sticky top-0 z-50 shadow-md border-b border-white/10">
      {/* Navbar Bar */}
      <div className="max-w-[1400px] w-full h-[80px] mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          {/* Logo asset loading, mock fallback if it fails */}
          <img
            src={logo}
            alt="Binge Learning Logo"
            className="h-16 w-16 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-yellow-500 leading-none">Binge</span>
            <span className="text-lg font-bold text-white leading-none">Learning</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 xl:gap-8 items-center">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path} 
              className={({ isActive }) => 
                isActive && link.path !== "/#pricing" 
                  ? `${linkClass} text-yellow-500` 
                  : linkClass
              }
            >
              {link.name}
            </NavLink>
          ))}
          
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-yellow-500 text-3xl focus:outline-none"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden absolute top-[80px] left-0 w-full bg-[#1e052d] border-t border-white/10 shadow-xl overflow-y-auto max-h-[calc(100vh-80px)]">
          <div className="flex flex-col px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path} 
                onClick={() => setOpen(false)} 
                className={({ isActive }) => 
                  isActive && link.path !== "/#pricing" 
                    ? "block text-yellow-500 font-bold text-lg border-b border-white/5 pb-2" 
                    : "block text-white/80 font-medium text-lg hover:text-yellow-500 border-b border-white/5 pb-2"
                }
              >
                {link.name}
              </NavLink>
            ))}
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
