import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Logo and brand name animation
      gsap.from(".header-logo", {
        opacity: 0,
        y: -50, // Move from top
        duration: 2,
        ease: "power2.out",
      });

      // Navigation links animation (staggered)
      gsap.from(".header-link", {
        opacity: 0,
        y: -50, // Move from top
        duration: 2,
        stagger: 0.2, // Delay effect for each link
        ease: "power2.out",
      });
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <>
      <header className="flex justify-between items-center sticky top-0 z-10 max-sm:pl-10">
        <div className="flex justify-between px-10 max-sm:px-0 items-center backdrop-blur-sm w-[100%]">
          
          {/* Logo & Brand Name */}
          <div className="flex items-center font-bold font-serif italic text-2xl max-sm:text-xl header-logo">
            <img src="./logo.png" alt="" className="h-20" />
            <h1 className="text-yellow-300">
              <span className="text-pink-600">C</span>
              <span className="text-violet-400">ode</span> 
              <span className="text-green-500">And</span> Canva
            </h1>
          </div>

          {/* Toggle Button for Mobile */}
          <button 
            className="sm:hidden text-white text-2xl focus:outline-none" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"} {/* Cross for open, bars for closed */}
          </button>

          {/* Navigation Links - Desktop */}
          <ul className="flex items-center text-white font-semibold gap-8 max-sm:hidden">
            <li className="header-link"><Link to="/" className="hover:text-red-400 transition-all duration-200 ease-in">Home</Link></li>
            <li className="header-link"><Link to="/about" className="hover:text-red-400 transition-all duration-200 ease-in">About</Link></li>
            <li className="header-link"><Link to="/services" className="hover:text-red-400 transition-all duration-200 ease-in">Services</Link></li>
            <li className="header-link"><Link to="/contact" className="hover:text-red-400 transition-all duration-200 ease-in">Contact</Link></li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden bg-gray-900 text-white py-4 px-6 absolute top-full left-0 w-full">
            <ul className="flex flex-col space-y-4">
              <li><Link to="/" className="hover:text-red-400 transition-all duration-200 ease-in" onClick={() => setMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" className="hover:text-red-400 transition-all duration-200 ease-in" onClick={() => setMenuOpen(false)}>About</Link></li>
              <li><Link to="/services" className="hover:text-red-400 transition-all duration-200 ease-in" onClick={() => setMenuOpen(false)}>Services</Link></li>
              <li><Link to="/contact" className="hover:text-red-400 transition-all duration-200 ease-in" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
