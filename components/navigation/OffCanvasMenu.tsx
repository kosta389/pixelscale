"use client"
import React, { useEffect } from 'react';
import MenuAnimation from '../animata/list/menu-animation';
import CloseIcon from './CloseIcon';

interface OffCanvasMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuItem {
  title: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "Contact", href: "/contact" }
];

const OffCanvasMenu: React.FC<OffCanvasMenuProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 w-screen h-screen backdrop-blur-lg bg-black/50 transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      } z-[200]`}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute right-4 top-4">
          <CloseIcon onClick={onClose} />
        </div>
        <MenuAnimation menuItems={menuItems}/>
      </div>
    </div>
  );
};

export default OffCanvasMenu;