import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-black text-white'>
      <div className='container mx-auto flex flex-wrap justify-between items-center p-4 md:p-6'>
        <div>
          <h2 className='font-bold text-2xl'>Mesob Restaurant</h2>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className='md:hidden text-white focus:outline-none'
          onClick={toggleMenu}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Navigation Links */}
        <div className={`w-full md:w-auto md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className='flex flex-col md:flex-row md:items-center md:justify-between md:gap-8 mt-4 md:mt-0'>
            <li className={`font-bold text-lg cursor-pointer hover:text-amber-400 transition-colors py-2 md:py-0 ${location.pathname === '/' ? 'text-amber-400' : ''}`}>
              <Link to="/">HOME</Link>
            </li>
            <li className={`font-bold text-lg cursor-pointer hover:text-amber-400 transition-colors py-2 md:py-0 ${location.pathname === '/reservation' ? 'text-amber-400' : ''}`}>
              <Link to="/reservation">RESERVATION</Link>
            </li>
            <li className={`font-bold text-lg cursor-pointer hover:text-amber-400 transition-colors py-2 md:py-0 ${location.pathname === '/menu' ? 'text-amber-400' : ''}`}>
              <Link to="/menu">MENU</Link>
            </li>
            <li className={`font-bold text-lg cursor-pointer hover:text-amber-400 transition-colors py-2 md:py-0 ${location.pathname === '/contact' ? 'text-amber-400' : ''}`}>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar