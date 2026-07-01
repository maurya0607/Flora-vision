import React, { useState } from 'react';
import { Search, ShoppingBag, ChevronDown, Menu, X } from 'lucide-react';

export const Navbar = ({
  logoText = 'FloraVision.',
  navLinks = [
    { label: 'Home', href: '#home' },
    { 
      label: 'Plants Type', 
      href: '#types',
      dropdown: [
        { label: 'Indoor Plants', href: '#indoor' },
        { label: 'Outdoor Plants', href: '#outdoor' },
        { label: 'Office Desk Plants', href: '#office' }
      ]
    },
    { label: 'More', href: '#more' },
    { label: 'Contact', href: '#contact' }
  ],
  cartCount = 0
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 glassmorphism border-b border-flora-accent/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-2 cursor-pointer group">
          <span className="text-2xl" role="img" aria-label="plant logo">
            <img src="images/Floravision.png" alt="" className="w-10 h-8 object-contain" />
            </span> 
          <span className="text-xl font-bold tracking-wide bg-linear-to-r from-[#c6d7c6] to-flora-accent bg-clip-text text-transparent group-hover:text-white/90 group-hover:from-flora-accent  transition-all duration-500">
            {logoText}
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-10 text-sm font-medium">
          {navLinks.map((link, idx) => {
            if (link.dropdown) {
              return (
                <div key={idx} className="relative group cursor-pointer">
                  <span className="text-flora-textMuted group-hover:text-white/90 flex items-center transition-colors duration-300">
                    {link.label}
                    <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  </span>
                  <div className="absolute top-full left-0 mt-2 w-48 rounded-lg glassmorphism p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-xl">
                    {link.dropdown.map((item, dIdx) => (
                      <a 
                        key={dIdx} 
                        href={item.href} 
                        className="block px-4 py-2 text-xs text-flora-textMuted hover:text-white rounded-md hover:bg-flora-accent/20 transition-all"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <a 
                key={idx} 
                href={link.href} 
                className={`transition-colors duration-300 ${idx === 0 ? 'text-flora-accent hover:text-flora-accentLight' : 'text-flora-textMuted hover:text-gray-100'}`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Desktop Action Icons */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Search Toggle */}
          <div className="relative flex items-center">
            {showSearch && (
              <input
                type="text"
                placeholder="Search plants..."
                className="mr-2 px-3 py-1 bg-flora-bg/80 border border-flora-accent/30 text-xs rounded-full text-white focus:outline-none focus:border-flora-accent w-40 transition-all duration-300"
              />
            )}
            <button 
              onClick={() => setShowSearch(!showSearch)} 
              className="text-flora-textMuted hover:text-white transition-colors p-1 cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Icon */}
          <button className="text-flora-textMuted hover:text-white transition-colors relative p-1 cursor-pointer" aria-label="Cart">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-flora-accent text-black font-bold text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* User/Hamburger icon for layout completeness */}
          <button className="text-flora-textMuted hover:text-white transition-colors p-1 cursor-pointer" aria-label="Menu">
            <div className="flex flex-col space-y-1 w-5 items-end">
              <span className="block w-5 h-0.5 bg-current"></span>
              <span className="block w-3 h-0.5 bg-current"></span>
            </div>
          </button>
        </div>

        {/* Mobile Navbar Controls */}
        <div className="flex md:hidden items-center space-x-4">
          <button className="text-flora-textMuted hover:text-white transition-colors relative p-1 cursor-pointer" aria-label="Cart Mobile">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-flora-accent text-black font-bold text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-flora-textMuted hover:text-white focus:outline-none p-1 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-7" /> : <Menu className="w-6 h-7" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      <div className={`fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-flora-bg/95 backdrop-blur-lg border-t border-flora-accent/10 z-40 transform transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col p-8 space-y-6 text-lg font-medium">
          {navLinks.map((link, idx) => {
            if (link.dropdown) {
              return (
                <div key={idx} className="flex flex-col space-y-2 border-b border-white/5 pb-2">
                  <span className="text-flora-textMuted">{link.label}</span>
                  <div className="pl-4 flex flex-col space-y-2 text-sm text-flora-textMuted">
                    {link.dropdown.map((item, dIdx) => (
                      <a key={dIdx} href={item.href} onClick={() => setIsOpen(false)} className="hover:text-white">
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <a 
                key={idx} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className={`transition-colors border-b border-white/5 pb-2 ${idx === 0 ? 'text-flora-accent hover:text-white' : 'text-flora-textMuted hover:text-white'}`}
              >
                {link.label}
              </a>
            );
          })}

          {/* Mobile Search input */}
          <div className="pt-4 flex items-center bg-flora-accent/5 border border-flora-accent/20 rounded-full px-4 py-2">
            <Search className="text-flora-textMuted w-5 h-5 mr-2" />
            <input 
              type="text" 
              placeholder="Search plants..." 
              className="bg-transparent text-sm w-full text-white placeholder-flora-textMuted focus:outline-none"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
