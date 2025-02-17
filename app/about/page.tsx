"use client"
import { useState } from "react";
import Navigation from "@/components/navigation/Navigation";

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <Navigation onMenuToggle={(state) => setIsMenuOpen(state)} />
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">About Page</h1>
      </div>
    </div>
  );
}
