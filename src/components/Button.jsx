import React from 'react';

export const Button = ({ 
  children, 
  variant = 'solid', 
  onClick, 
  className = '', 
  type = 'button',
  ...props 
}) => {
  const baseStyles = 'px-8 py-3 font-medium rounded-full transition-all duration-300 transform active:scale-95 text-xs tracking-wider uppercase inline-flex items-center justify-center cursor-pointer';
  
  const variants = {
    solid: 'bg-white text-[#09100B] hover:bg-flora-accent hover:text-[#09100B] shadow-md border border-white',
    outline: 'border border-flora-accent text-flora-accent hover:bg-flora-accent hover:text-[#09100B]',
    outlineWhite: 'border border-white text-white hover:bg-white hover:text-[#09100B]',
    glass: 'bg-flora-accent/20 border border-flora-accent/80 text-[#F3F4F3] hover:bg-flora-accent hover:text-[#09100B]',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
