import React from 'react';
import { SectionTitle } from './SectionTitle';
import { PlantCard } from './PlantCard';

const DEFAULT_SELLING_PLANTS = [
  {
    id: 1,
    name: 'Aglaonema plant',
    description: 'The Aglaonema plant commonly known as Chinese evergreen is a popular houseplants choice due to its attractive foliage and ease of care.',
    price: 'Rs. 300/-',
    image: '/images/Aglaonema.png'
  },
  {
    id: 2,
    name: 'Plantain Lilies',
    description: 'Hostas are primarily grown for their lush, decorative foliage, which comes in a wide variety of shapes, sizes.',
    price: 'Rs. 380/-',
    image: '/images/Plantain.png'
  },
  {
    id: 3,
    name: 'Cactus',
    description: 'It is known for their ability to thrive in arid environments.',
    price: 'Rs. 250/-',
    image: '/images/Cactus.png'
  },
  {
    id: 4,
    name: 'Swiss cheese Plant',
    description: 'The popular tropical houseplant known for its distinctive, perforated leaves.',
    price: 'Rs. 400/-',
    image: '/images/Swiss.png'
  },
  {
    id: 5,
    name: 'Sansevieria plant',
    description: 'It is a popular indoor plant admired for its striking appearance and low-maintenance nature.',
    price: 'Rs. 450/-',
    image: '/images/Sansevieriya.png'
  },
  {
    id: 6,
    name: 'Agave plant',
    description: 'The agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural form.',
    price: 'Rs. 350/-',
    image: '/images/Agave.png'
  }
];

export const TopSellingPlants = ({ plants = DEFAULT_SELLING_PLANTS }) => {
  return (
    <section id="outdoor" className="relative py-5 bg-flora-bg overflow-visible scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Title */}
        <SectionTitle>Our Top Selling Plants</SectionTitle>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-y-12 gap-x-6 md:gap-x-8 lg:gap-x-10 max-w-6xl mx-auto pt-5">
          {plants.map((plant, index) => (
            <PlantCard 
              key={plant.id} 
              name={plant.name}
              description={plant.description}
              price={plant.price}
              image={plant.image}
              isReverse={index % 2 !== 0}
              onAddToCart={() => console.log(`Added ${plant.name} to cart`)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
