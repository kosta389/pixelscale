"use client"
import React from 'react';
import PixelCard from '../blocks/Components/PixelCard/PixelCard';

const CoolSection: React.FC = () => {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <PixelCard variant="blue">
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <h3 className="text-2xl font-bold text-gray-500 text-center">Web Development</h3>
              <p className="text-gray-500 text-center">Modern web applications with React & Next.js</p>
            </div>
          </PixelCard>

          <PixelCard variant="blue">
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <h3 className="text-2xl font-bold text-gray-500 text-center">Web Development</h3>
              <p className="text-gray-500 text-center">Modern web applications with React & Next.js</p>
            </div>
          </PixelCard>

          <PixelCard variant="blue">
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <h3 className="text-2xl font-bold text-gray-500 text-center">Web Development</h3>
              <p className="text-gray-500 text-center">Modern web applications with React & Next.js</p>
            </div>
          </PixelCard>
        </div>
      </div>
    </section>
  );
};

export default CoolSection;