import { useState } from 'react';
import logo from '../assets/logo2.svg';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <nav className="bg-cover bg-center h-32 fixed w-full flex items-center backdrop-blur-xs z-10">
      <div className="container mx-auto h-full flex justify-between items-center px-8 relative">
        <div className="flex items-center cursor-pointer z-20">
          <img src={logo} alt="Logo" className="h-20" />
        </div>


        <div className="hidden md:flex gap-8">
          <a href="#" className="text-blue-400 hover:text-blue-200 text-lg transition duration-300">
            Inicio
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-200 text-lg transition duration-300">
            Servicios
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-200 text-lg transition duration-300">
            Contacto
          </a>
        </div>

      
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleMenu} className="text-black">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </div>


      {isMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 px-6 absolute top-32 left-0 z-30">
          <a href="#" onClick={() => setIsMenuOpen(false)} className="block text-blue-400 hover:text-blue-200 text-sm mb-4">
            Inicio
          </a>
          <a href="#" onClick={() => setIsMenuOpen(false)} className="block text-blue-400 hover:text-blue-200 text-sm mb-4">
            Servicios
          </a>
          <a href="#" onClick={() => setIsMenuOpen(false)} className="block text-blue-400 hover:text-blue-200 text-sm">
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
