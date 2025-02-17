"use client"

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import HamburgerIcon from './HamburgerIcon';
import SocialIcons from './SocialIcons';
import OffCanvasMenu from './OffCanvasMenu';

interface NavigationProps {
  onMenuToggle: (isOpen: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onMenuToggle }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setMenuOpen(newState);
    if (isHomePage) {
      onMenuToggle(newState);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 z-50">
      <SocialIcons />
      <HamburgerIcon onClick={toggleMenu} />
      <OffCanvasMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </nav>
  );
};

export default Navigation;