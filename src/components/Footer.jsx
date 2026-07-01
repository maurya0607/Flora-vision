import React from 'react';

export const Footer = ({
  logoText = "FloraVision.",
  brandDesc = "From lush indoor greenery to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment.",
  quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Type's Of plant's", href: "#types" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy", href: "#privacy" }
  ],
  socials = [
    { label: "FB", href: "#facebook" },
    { label: "TW", href: "#twitter" },
    { label: "LI", href: "#linkedin" }
  ],
  copyright = "FloraVision © all right reserve"
}) => {
  return (
    <footer className="relative bg-flora-bg pt-12 pb-8 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-10">
        
        {/* Left Column: Brand Info */}
        <div className="md:col-span-5 space-y-6 text-left">
          <div className="flex items-center space-x-2">
            <span className="text-2xl" role="img" aria-label="plant logo">
              <img src="images/Floravision.png" alt="" className="w-8 h-8 object-contain" />
            </span>
            <span className="text-xl font-bold tracking-wide text-white">
              {logoText}
            </span>
          </div>
          
          <p className="text-xs sm:text-sm text-flora-textMuted leading-relaxed font-light max-w-sm mt-4">
            "{brandDesc}"
          </p>
        </div>

        {/* Middle Column: Quick Links */}
        <div className="md:col-span-3 space-y-6 text-left">
          <h4 className="text-sm font-bold text-white tracking-wide">
            Quick Link's
          </h4>
          <ul className="space-y-3.5 text-xs sm:text-sm text-white underline decoration-white/30 underline-offset-4 font-light">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="hover:text-flora-accent transition-colors duration-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Newsletter Subscription */}
        <div className="md:col-span-4 space-y-6 text-left">
          <h4 className="text-sm font-bold text-white tracking-wide">
            For Every Update.
          </h4>
          
          <form 
            onSubmit={(e) => e.preventDefault()} 
            className="flex items-center w-full max-w-md bg-transparent border border-white/30 rounded overflow-hidden"
          >
            <input 
              type="email" 
              placeholder="Enter Email"
              className="bg-transparent text-xs text-white placeholder-flora-textMuted px-4 py-3 grow focus:outline-none"
              required
            />
            <button 
              type="submit"
              className="bg-white text-black font-bold text-xs px-6 py-3 tracking-widest uppercase hover:bg-flora-accentLight transition-colors duration-300 cursor-pointer border-l border-flora-accent/30 m-px rounded-r-sm"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-white tracking-widest select-none">
        {/* Social Links on Left */}
        <div className="flex items-center space-x-6">
          {socials.map((social, idx) => (
            <a 
              key={idx} 
              href={social.href} 
              className="hover:text-flora-accent transition-colors duration-300"
            >
              {social.label}
            </a>
          ))}
        </div>
        
        {/* Copyright on Right */}
        <div className="text-[10px] sm:text-xs font-light text-white tracking-wide normal-case">
          {copyright}
        </div>
      </div>
    </footer>
  );
};
