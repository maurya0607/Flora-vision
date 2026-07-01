import React from 'react';
import { Star } from 'lucide-react';
import { Avatar } from './Avatar';

export const TestimonialCard = ({ name, rating = 5, text, isReverse = false, className = '' }) => {
  return (
    <div className={`glassmorphism p-6 sm:p-8 ${isReverse ? 'rounded-flora-reverse' : 'rounded-flora'} hover-lift flex flex-col ${className}`}>
      
      {/* User Profile (Top) */}
      <div className="flex items-center space-x-3.5 mb-6">
        <Avatar name={name} className="w-12 h-12" />
        <div>
          <h4 className="text-sm font-bold text-white tracking-wide">
            {name}
          </h4>
          {/* Star Rating */}
          <div className="flex space-x-1 text-amber-400 mt-1">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-current" />
            ))}
          </div>
        </div>
      </div>

      {/* Review Text (Bottom) */}
      <p className="text-xs text-flora-textMuted leading-relaxed font-light">
        {text}
      </p>

    </div>
  );
};
