import React from 'react';
import { Play, Star, ChevronRight } from 'lucide-react';
import { Avatar } from './Avatar';
import { Button } from './Button';

export const Hero = ({
  title = "Earth's Exhale",
  description = '"Earth Exhale" symbolizes the purity and vitality of the Earth\'s natural environment and its essential role in sustaining life.',
  primaryBtnText = "Buy Now",
  secondaryBtnText = "Live Demo...",
  testimonial = {
    name: "Ronnie Hamill",
    text: "I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.",
    rating: 5
  },
  cardPlant = {
    name: "Aglaonema plant",
    category: "Indoor Plant",
    image: "/images/Aglaonema.png"
  }
}) => {
  return (
    <section id="home" className="relative pt-24 pb-8 md:pt-28 md:pb-10 overflow-hidden flex items-center w-full">

      {/* Background Radial Glow Lights for Premium Visual Depth */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 blur-bg-radial" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 blur-bg-radial bg-emerald-950/20!" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 lg:gap-8 items-center relative z-10">

        {/* Left Side: Content & floating review */}
        <div className="md:col-span-7 flex flex-col items-start space-y-6 md:space-y-8 relative">

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight font-sans drop-shadow-md">
            {title}
          </h1>

          {/* Description */}
          <p className="text-flora-textMuted text-base sm:text-lg max-w-xl leading-relaxed font-light drop-shadow-sm">
            {description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-6 pt-2">
            <Button variant="outlineWhite" className="px-9 py-3.5 text-xs font-semibold">
              {primaryBtnText}
            </Button>
            <button className="flex items-center space-x-3 text-white hover:text-flora-accent transition-colors group cursor-pointer">
              <span className="w-11 h-11 rounded-full border border-white/50 flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:border-flora-accent group-hover:bg-flora-accent/10 transition-all duration-300">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </span>
              <span className="font-medium tracking-wide text-xs uppercase">{secondaryBtnText}</span>
            </button>
          </div>

          {/* Floating Review Badge - Ronnie Hamill (Left Bottom) */}
          <div className="mt-8 md:mt-10 glassmorphism p-4 sm:p-5 rounded-3xl max-w-xs hover-lift relative select-none z-10">
            <div className="flex items-center space-x-3 mb-3">
              <Avatar name={testimonial.name} className="w-11 h-11" />
              <div>
                <h4 className="text-sm font-semibold text-white">{testimonial.name}</h4>
                <div className="flex space-x-0.5 text-amber-400 mt-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs text-flora-textMuted leading-relaxed font-light">
              "{testimonial.text}"
            </p>
          </div>

        </div>

        {/* Right Side: Glassmorphism plant container with overflow leaves */}


        <div className="md:col-span-5 flex justify-center md:justify-end relative">
          <div className="w-full max-w-xs glassmorphism p-4 rounded-[35px] hover-lift relative group overflow-visible">

            <div className="relative h-44 flex items-center justify-center mb-6">
              <img src={cardPlant.image} alt={cardPlant.name} className="absolute -top-20 w-[90%] h-60 object-contain drop-shadow-2xl group-hover:scale-105 transition-all duration-500" />
            </div>

            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] text-flora-textMuted">{cardPlant.category}</span>
                <h3 className="text-lg font-semibold text-white">{cardPlant.name}</h3>
              </div>

              <ChevronRight className="w-5 h-5 text-white/60 mt-3" />
            </div>

            <button className="mt-3 px-6 py-1.5 rounded-lg border border-white/40 text-white text-xs hover:bg-white/10 transition">
              Buy Now
            </button>

            <div className="flex justify-center gap-2 mt-4">
              <span className="w-2 h-1 rounded-full bg-white/30"></span>
              <span className="w-4 h-1 rounded-full bg-flora-accent"></span>
              <span className="w-2 h-1 rounded-full bg-white/30"></span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
