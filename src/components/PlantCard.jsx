import React from "react";
import { ShoppingBag } from "lucide-react";

export const PlantCard = ({
  name,
  description,
  price,
  image,
  isReverse = false,
  onAddToCart,
  className = "",
}) => {
  return (
    <div
      className={`glassmorphism pt-16 pb-3 px-6 ${
        isReverse ? "rounded-flora-reverse" : "rounded-flora"
      } flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group relative overflow-visible mt-10 before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-40 before:h-14 before:bg-[#1b2418] before:rounded-b-full before:opacity-80 before:blur-[1px] before:z-0 border border-white/10 backdrop-blur-xl ${className}`}
    >
      {/* Plant Image */}
      <div className="absolute -top-15 left-1/2 -translate-x-1/2 w-full flex justify-center z-20">
        <div className="w-60 h-48 flex items-center justify-center">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.45)] group-hover:scale-110 transition-all duration-500"
          />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-2 grow text-left mt-20 relative z-10">
        <span className="text-[10px] uppercase tracking-wider text-flora-textMuted">
          Indoor Plant
        </span>

        <h3 className="text-lg font-semibold text-white tracking-wide leading-tight group-hover:text-flora-accent transition-colors duration-300">
          {name}
        </h3>

        <p className="text-xs text-flora-textMuted leading-relaxed font-light min-h-12 line-clamp-3 mt-2">
          {description}
        </p>
      </div>

      {/* Bottom */}
      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between relative z-10">
        <div className="text-lg font-semibold text-flora-accent">
          {price}
        </div>

        <button
          onClick={onAddToCart}
          aria-label={`Add ${name} to cart`}
          className="w-10 h-10 border border-flora-accent/40 hover:border-flora-accent rounded-xl flex items-center justify-center text-flora-accent hover:text-white hover:bg-flora-accent transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <ShoppingBag className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};