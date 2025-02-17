import React from 'react';

const NavLinks: React.FC = () => {
  return (
    <nav className="flex flex-col space-y-4 p-4">
      <a href="#about" className="text-white hover:text-gray-300">About</a>
      <a href="#projects" className="text-white hover:text-gray-300">Projects</a>
      <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
    </nav>
  );
};

export default NavLinks;