import React from 'react';

interface HamburgerIconProps {
  onClick: () => void;
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col justify-center items-center w-10 h-10 bg-transparent focus:outline-none"
      aria-label="Toggle menu"
    >
      <span className="block w-8 h-1 bg-white mb-1 transition-transform duration-300"></span>
      <span className="block w-8 h-1 bg-white mb-1 transition-transform duration-300"></span>
      <span className="block w-8 h-1 bg-white transition-transform duration-300"></span>
    </button>
  );
};

export default HamburgerIcon;