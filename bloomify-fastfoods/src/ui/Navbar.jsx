import { NavLink } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import SearchOrder from "../feature/order/SearchOrder";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-red-500 shadow-md fixed left-0 right-0">
      <header className="container mx-auto px-2 py-1 flex justify-between items-center">
        <Header />
        
        {/* Search Order Component */}
        <div className="hidden md:block">
          <SearchOrder />
        </div>
        
        {/* Desktop Navbar */}
        <nav className="hidden md:flex space-x-6 text-black font-medium">
          <NavLink to="/burgermenu" onClick={closeMenu} className={({ isActive }) => isActive ? "text-black underline" : "hover:text-orange-600 transition"}>Burger</NavLink>
          <NavLink to="/pizzamenu" onClick={closeMenu} className={({ isActive }) => isActive ? "text-black underline" : "hover:text-orange-600 transition"}>Pizza</NavLink>
          <NavLink to="/tacobarmenu" onClick={closeMenu} className={({ isActive }) => isActive ? "text-black underline" : "hover:text-orange-600 transition"}>Taco Bar</NavLink>
          <NavLink to="/aboutus" onClick={closeMenu} className={({ isActive }) => isActive ? "text-black underline" : "hover:text-orange-600 transition"}>About Us</NavLink>
        </nav>
        
        {/* Hamburger Menu Button */}
        <button 
          className="md:hidden text-stone-100 text-2xl"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </header>

      {/* Sidebar Overlay */}
      <div 
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} 
        onClick={closeMenu} 
      ></div>
      
      {/* Sidebar */}
      <nav 
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button className="absolute top-4 right-4 text-xl p-2" onClick={closeMenu}>×</button>
        
        {/* Search Order in Sidebar for Mobile */}
        <div className="block md:hidden p-4 mt-10"> {/* Increased margin-top */}
          <SearchOrder />
        </div>
        
        <ul className="flex flex-col items-start p-6 space-y-4 text-gray-800 font-medium">
          <li>
            <NavLink to="/burgermenu" onClick={closeMenu} className={({ isActive }) => isActive ? "text-orange-500 underline" : "hover:text-blue-500 transition"}>
              Burger
            </NavLink>
          </li>
          <li>
            <NavLink to="/pizzamenu" onClick={closeMenu} className={({ isActive }) => isActive ? "text-orange-500  underline" : "hover:text-blue-500 transition"}>
              Pizza
            </NavLink>
          </li>
          <li>
            <NavLink to="/tacobarmenu" onClick={closeMenu} className={({ isActive }) => isActive ? "text-orange-500  underline" : "hover:text-blue-500 transition"}>
              Taco Bar
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutus" onClick={closeMenu} className={({ isActive }) => isActive ? "text-orange-500  underline" : "hover:text-blue-500  transition"}>
              About Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
