// components/Navbar.jsx
import { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Link, useLocation, useNavigate } from "react-router-dom";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (item) => {
    setIsMenuOpen(false);

    if (item.type === "page") {
      // For page navigation, just close menu - Link will handle navigation
      return;
    }

    // For section navigation
    if (location.pathname === "/") {
      // If we're on home page, scroll to section
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        
        // Update URL hash without scrolling
        window.history.pushState(null, null, `#${item.id}`);
      }
    } else {
      // If we're on another page, navigate to home with hash
      navigate(`/#${item.id}`);
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      // Scroll to top of home page
      window.scrollTo({ top: 0, behavior: "smooth" });
      // Clear hash from URL
      window.history.pushState(null, null, ' ');
    }
  };

  const navItems = [
    { id: "home", label: "Home", type: "section" },
    { id: "about", label: "About", type: "page", path: "/about" },
    { id: "technologies", label: "Technologies", type: "section" },
    { id: "services", label: "Services", type: "section" },
    { id: "our-works", label: "Our Works", type: "section" },
    { id: "contact-us", label: "Contact Us", type: "section" },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMenu}
        className="lg:hidden fixed top-4 right-4 z-50 p-3 text-white bg-gray-800/90 backdrop-blur-sm rounded-xl border border-teal-400/10 hover:bg-gray-700/90 transition-all duration-250"
      >
        {isMenuOpen ? <RxCross1 size={24} /> : <RxHamburgerMenu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
          onClick={toggleMenu}
        >
          <div 
            className="fixed top-0 right-0 w-64 h-full bg-gray-900/95 backdrop-blur-md border-l border-teal-400/10 shadow-2xl" // Changed from w-3/4 to w-64
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button inside menu */}
            <div className="flex justify-end p-4 border-b border-gray-700">
              <button 
                onClick={toggleMenu}
                className="p-2 text-white hover:text-teal-400 transition-colors"
              >
                <RxCross1 size={24} />
              </button>
            </div>
            
            {/* Logo in Mobile Menu */}
            <div className="flex justify-center py-6 border-b border-gray-700">
              <Link to="/" onClick={() => { handleLogoClick(); setIsMenuOpen(false); }}>
                <img 
                  src="./Logo.png" 
                  alt="logo" 
                  className="w-16 h-16 rounded-full"
                />
              </Link>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-4 p-6">
              {navItems.map((item) => (
                item.type === "page" ? (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => handleNavClick(item)}
                    className="px-4 py-3 text-gray-300 hover:text-teal-400 hover:bg-teal-400/10 rounded-lg transition-all duration-250 font-medium text-lg border border-transparent hover:border-teal-400/20 text-center"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className="px-4 py-3 text-gray-300 hover:text-teal-400 hover:bg-teal-400/10 rounded-lg transition-all duration-250 font-medium text-lg border border-transparent hover:border-teal-400/20 text-center"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Desktop Navigation - Reduced width for mobile */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-10/12 lg:w-4/5 bg-gray-900/90 backdrop-blur-sm rounded-xl z-30 border border-teal-400/10 shadow-2xl shadow-teal-400/20"> {/* Changed from w-11/12 to w-10/12 */}
        <div className="flex items-center justify-between lg:justify-end px-3 lg:px-6 py-3"> {/* Changed from px-2 to px-3 */}
          {/* Logo */}
          <div className="lg:absolute lg:left-6 lg:top-1/2 lg:transform lg:-translate-y-1/2">
            <Link to="/" onClick={handleLogoClick}>
              <img 
                src="./Logo.png" 
                alt="logo" 
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full cursor-pointer hover:scale-105 transition-transform duration-250"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              item.type === "page" ? (
                <Link
                  key={item.id}
                  to={item.path}
                  className="px-4 py-2 text-gray-300 hover:text-teal-400 hover:bg-teal-400/10 rounded-lg transition-all duration-250 ease-in-out hover:-translate-y-0.5 font-medium text-sm"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className="px-4 py-2 text-gray-300 hover:text-teal-400 hover:bg-teal-400/10 rounded-lg transition-all duration-250 ease-in-out hover:-translate-y-0.5 font-medium text-sm"
                >
                  {item.label}
                </button>
              )
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}