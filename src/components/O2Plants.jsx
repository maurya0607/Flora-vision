import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionTitle } from "./SectionTitle";


export const O2Plants = ({
  title = "We Have Small And Best O2 Plants Collection's",
  descriptions = [
    "Oxygen-producing plants release oxygen into the atmosphere through photosynthesis.",
    "Plants help filter pollutants and toxins from the air, making it cleaner and healthier."
  ],
  exploreBtnText = "Explore",
  image = "/images/Aglaonema.png",
}) => {
  return (
    <section id="office" className="relative py-8 bg-flora-bg overflow-hidden scroll-mt-20">

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">

        <SectionTitle>
          Our Best O2
        </SectionTitle>

        <div className="mt-5 glassmorphism rounded-[50px] p-5 sm:p-8 flex flex-col md:flex-row items-center gap-5 overflow-visible">


          {/* Plant Image */}
          <div className="w-full md:w-1/2 flex justify-center items-end -mt-20">

            <img
              src={image}
              alt="Best oxygen plant"
              className="w-100 h-105 object-contain drop-shadow-2xl"
            />

          </div>


          {/* Content */}
          <div className="w-full md:w-1/2 space-y-5 text-left">


            <h2 className="text-2xl sm:text-3xl font-bold text-flora-textLight leading-tight">
              {title}
            </h2>


            <div className="space-y-4 text-sm text-flora-textMuted leading-relaxed">

              {descriptions.map((desc, index) => (
                <p key={index}>
                  {desc}
                </p>
              ))}

            </div>


            <div className="flex items-center justify-between pt-3">


              <button className="px-8 py-2 rounded-lg border border-flora-accent text-flora-accent text-sm hover:bg-flora-accent hover:text-black transition">
                {exploreBtnText}
              </button>


              <div className="flex items-center gap-4 text-white/70">

                <ChevronLeft className="w-5 h-5" />

                <span className="text-xs">
                  01/04
                </span>

                <ChevronRight className="w-5 h-5" />

              </div>


            </div>


          </div>


        </div>


        <div className="flex justify-center items-center gap-2 mt-10">

          <span className="w-2 h-2 rounded-full bg-white/30"></span>
          <span className="w-4 h-2 rounded-full bg-flora-accent"></span>
          <span className="w-2 h-2 rounded-full bg-white/30"></span>

        </div>


      </div>

    </section>
  );
};