import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrendingPlants } from './components/TrendingPlants';
import { TopSellingPlants } from './components/TopSellingPlants';
import { Reviews } from './components/Reviews';
import { O2Plants } from './components/O2Plants';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-flora-bg text-flora-textLight min-h-screen relative font-sans selection:bg-flora-accent hover:text-black overflow-x-hidden">

      {/* Fixed Navigation Header */}
      <Navbar />

      {/* Core Landings and Products Sections */}
      <main className="relative">

        {/* Central Topiary Background Image (hero-bg.jpg) */}
        <div className="absolute -top-10 md:-top-20 left-1/2 -translate-x-1/2 w-225 md:w-245 lg:w-325 z-0 pointer-events-none flex justify-center opacity-100" style={{ mixBlendMode: 'lighten' }}>
          {/* Fading edges to blend seamlessly into the dark background */}
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-flora-bg z-10"></div>
          <div className="absolute inset-0 bg-linear-to-r from-flora-bg via-transparent to-flora-bg z-10"></div>

          <img
            src="/images/hero-bg.jpg"
            alt="Hero Background Topiary"
            className="w-full h-auto object-contain filter contrast-125"
          />
        </div>


        <Hero />

        {/* Section divider glow lines */}
        <div id="types" className="relative">
          <TrendingPlants />
        </div>

        <TopSellingPlants />

        <div id="reviews">
          <Reviews />
        </div>

        <O2Plants />
      </main>

      {/* Footer Links & Newsletter */}
      <Footer />

    </div>
  );
}

export default App;
