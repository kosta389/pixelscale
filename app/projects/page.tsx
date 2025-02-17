"use client"
import { useState } from "react";
import Navigation from "@/components/navigation/Navigation";

export default function Projects() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <Navigation onMenuToggle={(state) => setIsMenuOpen(state)} />
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Projects Page</h1>
      </div>
    </div>
  );
}
