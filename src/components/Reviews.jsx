import React from 'react';
import { SectionTitle } from './SectionTitle';
import { TestimonialCard } from './TestimonialCard';

const DEFAULT_REVIEWS = [
  {
    id: 1,
    name: 'Shelly Russel',
    rating: 5,
    text: "Just got my hands on some absolutely gorgeous plants, and I couldn't be happier!"
  },
  {
    id: 2,
    name: 'Lula Rolfson',
    rating: 5,
    text: "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home."
  },
  {
    id: 3,
    name: 'Carol Huals',
    rating: 5,
    text: "If you're looking to bring some of nature indoors, definitely check this store out-my plant collection has never looked better!"
  }
];

export const Reviews = ({ reviews = DEFAULT_REVIEWS }) => {
  return (
    <section className="relative py-8 bg-flora-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Title */}
        <SectionTitle>Customer Review</SectionTitle>

        {/* Responsive Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch pt-6">
          {reviews.map((review, index) => (
            <TestimonialCard 
              key={review.id} 
              name={review.name}
              rating={review.rating}
              text={review.text}
              isReverse={index % 2 !== 0}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
