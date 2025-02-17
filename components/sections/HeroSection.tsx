"use client"
import React from 'react';
import Squares from '../blocks/Backgrounds/Squares/Squares';
import Image from 'next/image'
import SplashCursor from '../blocks/Animations/SplashCursor/SplashCursor';
import ContactButton from '../animata/button/contact-button';
import SecondaryButton from '../animata/button/secondary-button';
import Link from 'next/link';

interface HeroSectionProps {
  isMenuOpen?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isMenuOpen = false }) => {
  return (
    <section className="flex justify-center items-center min-h-screen w-full p-4">
      <div className="relative w-[90vw] min-h-[80vh] rounded-3xl overflow-hidden">
        {/* Content Layer - Reduzierter z-index */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="flex flex-col items-center">
              {/* Logo und Text */}
              <div className="mb-8 pointer-events-none">
                <Image
                  src="/logo/logo-white.png"
                  alt="Pixelscale Logo"
                  width={200}
                  height={200}
                  className="w-auto h-auto"
                />
              </div>
              <h1 className="text-5xl font-bold text-white pointer-events-none">
                Welcome to My Portfolio
              </h1>
              <p className="mt-4 text-lg text-white pointer-events-none">
                I&apos;m a Three.js and Framer Motion Developer
              </p>
              
              {/* Buttons */}
              <div className="flex items-center gap-4 mt-8 pointer-events-auto">
                <Link href="/contact">
                  <ContactButton />
                </Link>
                <Link href="/projects">
                  <SecondaryButton />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Effect Layers */}
        <div className="absolute inset-0 z-20 [clip-path:inset(0_0_0_0_round_24px)]">
          <div className="relative w-full h-full" style={{ touchAction: 'none' }}>
            <SplashCursor 
              SPLAT_RADIUS={0.2}
              COLOR_UPDATE_SPEED={10}
              DENSITY_DISSIPATION={2.5}
            />
          </div>
        </div>
        
        <div className="absolute inset-0 z-10 bg-black">
          <Squares 
            speed={0.5} 
            squareSize={40} 
            direction="diagonal" 
            borderColor="#fff" 
            hoverFillColor="#222"
            isPaused={isMenuOpen}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;