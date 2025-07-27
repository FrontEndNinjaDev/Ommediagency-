import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "./contextApi/ThemeContext";
import { useState, useEffect } from "react";
import Logo from "../assets/IMG_0930.JPEG-removebg-preview.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/chat-box", label: "About" },
    { path: "/social-media", label: "Contact" },
    { path: "/projects", label: "Projects" },
    { path: "/about-me", label: "Services" },
  ];

  return (
    <nav className="dark:bg-gray-800 bg-white shadow-md top-5 sticky z-50 mb-5 mx-4 sm:mx-10 rounded-lg ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
            <img
              src={Logo}
              alt="Influencers"
              width={60}
              height={60}
              className="object-contain"
            />

            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
              <NavLink to="/" className="hover:underline">
                OmmediaAgency
              </NavLink>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center text-lg font-bold text-gray-800 dark:text-white">
            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 dark:text-blue-400"
                    : "hover:text-blue-600 dark:hover:text-blue-300"
                }
              >
                {label}
              </NavLink>
            ))}

            {/* Dark Mode Button */}
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              {isDarkMode ? "🌙" : "☀️"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-lg font-semibold text-gray-800 dark:text-gray-300 sm:rounded-sm">
          <button
            onClick={toggleDarkMode}
            className="block w-full text-left hover:text-blue-600 dark:hover:text-blue-300"
          >
            {isDarkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className="block hover:text-blue-600 dark:hover:text-blue-300"
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
