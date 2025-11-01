import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../App';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm tracking-wider uppercase transition-colors duration-300 ${isActive ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`;

  return (
    <header className="bg-[#F9F9F7]/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 border-b border-gray-200">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-xl font-medium tracking-widest text-gray-800 uppercase">
              AURA
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-8">
            <NavLink to="/" className={navLinkClasses}>Accueil</NavLink>
            <NavLink to="/about" className={navLinkClasses}>À Propos</NavLink>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <NavLink to="/profil" className="text-gray-500 hover:text-gray-900 transition-all duration-300 active:scale-90 inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </NavLink>
            <NavLink to="/panier" className="relative text-gray-500 hover:text-gray-900 transition-all duration-300 active:scale-90 inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-[#8A9A5B] rounded-full">
                  {totalItems}
                </span>
              )}
            </NavLink>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-500 hover:text-gray-900 transition-all duration-300 active:scale-90"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#F9F9F7] border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Accueil</NavLink>
            <NavLink to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>À Propos</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;