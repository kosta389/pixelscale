"use client"
import { useState } from 'react';
import CoolSection from "@/components/sections/CoolSection";
import Navigation from "../components/navigation/Navigation";
import HeroSection from "../components/sections/HeroSection";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = (state: boolean) => {
    setIsMenuOpen(state);
  };

  return (
    <div className="relative">
      <Navigation onMenuToggle={handleMenuToggle} />
      <HeroSection isMenuOpen={isMenuOpen} />
      <CoolSection />
    </div>
  );
}
