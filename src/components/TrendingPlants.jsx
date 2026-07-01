
import React from "react";
import { ShoppingBag } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { Button } from "./Button";

const DEFAULT_TRENDY_PLANTS = [
  {
    id: 1,
    title: "For Your Desks Decorations",
    description:
      "I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!",
    price: "Rs. 599/-",
    image: "/images/Desks1.png",
    reverse: false,
  },
  {
    id: 2,
    title: "For Your Desks Decorations",
    description:
      "The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming.",
    price: "Rs. 399/-",
    image: "/images/Desks2.png",
    reverse: true,
  },
];

export const TrendingPlants = ({ plants = DEFAULT_TRENDY_PLANTS }) => {
  return (
    <section
      id="indoor"
      className="relative py-12 overflow-visible scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <SectionTitle>Our Trendy Plants</SectionTitle>

        <div className="space-y-10 mt-10">
          {plants.map((plant) => (
            <div
              key={plant.id}
              className={`glassmorphism border border-flora-accent/10 rounded-[40px] min-h-65 flex items-center relative overflow-visible ${plant.reverse
                  ? "lg:pr-80 lg:pl-12"
                  : "lg:pl-100 lg:pr-12"
                }`}
            >
              {/* Plant Image */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 z-20 ${plant.reverse
                    ? "right-8 w-55 h-60"
                    : "left-8 w-55 h-60"
                  }`}
              >
                <img
                  src={plant.image}
                  alt={plant.title}
                  className="w-full h-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)] hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Content */}
              <div className="max-w-130 relative z-10">
                <h3 className="text-4xl font-bold text-flora-textLight mb-4">
                  {plant.title}
                </h3>

                <p className="text-base text-flora-textMuted leading-7 mb-6">
                  {plant.description}
                </p>

                <div className="text-4xl font-bold text-flora-accent mb-6">
                  {plant.price}
                </div>

                <div className="flex items-center gap-4">
                  <Button
                    variant="outline" 
                    className="h-12 px-8 rounded-full border border-flora-accent text-flora-accent hover:bg-flora-accent hover:text-black"
                  >
                    EXPLORE
                  </Button>

                  <button
                    className="w-12 h-12 rounded-xl border border-flora-accent/40 hover:border-flora-accent flex items-center justify-center text-flora-accent hover:text-white hover:bg-flora-accent transition-all duration-300"
                    aria-label="Add to cart"
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};