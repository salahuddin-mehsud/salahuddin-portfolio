import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Certification" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled 
          ? "glass-morphism py-2 shadow-2xl" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="text-white flex justify-between items-center">
        {/* Enhanced Logo */}
        <a href="#about" className="group">
          <div className="text-lg font-semibold cursor-pointer flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-[#8245ec] to-[#a855f7] rounded-full animate-pulse"></div>
            <span className="text-gradient font-bold text-sm tracking-wider">
              SALAH UD DIN
            </span>
            <div className="w-3 h-3 bg-gradient-to-r from-[#a855f7] to-[#ec4899] rounded-full animate-pulse"></div>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item, index) => (
            <li
              key={item.id}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button 
                onClick={() => handleMenuItemClick(item.id)}
                className={`px-4 py-2 transition-all duration-300 ${
                  activeSection === item.id 
                    ? "text-white" 
                    : "hover:text-white"
                }`}
              >
                {item.label}
              </button>
              {/* Active underline */}
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#8245ec] to-[#a855f7] transition-all duration-300 ${
                activeSection === item.id 
                  ? "w-full" 
                  : "w-0 group-hover:w-full"
              }`}></div>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          {[
            { icon: <FaGithub size={20} />, link: "https://github.com/salahuddin-mehsud" },
            { icon: <FaLinkedin size={20} />, link: "https://www.linkedin.com/in/salahuddinmehsud/" },
            { icon: <SiGmail size={20} />, link: "mailto:salahudinsaani4@gmail.com" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card w-10 h-10 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 magnetic-btn"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-2xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-2xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 glass-morphism backdrop-blur-xl rounded-2xl shadow-2xl mx-4 mt-4 md:hidden animate-slide-in">
          <ul className="flex flex-col space-y-2 p-4 text-gray-300">
            {menuItems.map((item) => (
              <li key={item.id} className="relative">
                <button 
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`w-full text-left px-6 py-4 transition-all duration-300 ${
                    activeSection === item.id 
                      ? "text-white" 
                      : "hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
                {/* Active underline for mobile */}
                <div className={`absolute bottom-2 left-6 right-6 h-0.5 bg-gradient-to-r from-[#8245ec] to-[#a855f7] transition-all duration-300 ${
                  activeSection === item.id 
                    ? "w-full" 
                    : "w-0"
                }`}></div>
              </li>
            ))}
            <div className="flex justify-center space-x-4 pt-4 border-t border-white/10">
              {[
                { icon: <FaGithub size={20} />, link: "https://github.com/salahuddin-mehsud" },
                { icon: <FaLinkedin size={20} />, link: "https://www.linkedin.com/in/salahuddinmehsud/" },
                { icon: <SiGmail size={20} />, link: "mailto:salahudinsaani4@gmail.com" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card w-12 h-12 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;