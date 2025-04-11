import React, { useState } from "react";
import HeroImage from "/images/hero.png";

const Herocontent = () => {
  // active dots on banner dekhauna state
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="w-full bg-[#121D2D] relative overflow-hidden max-h-[521px] mt-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-between border-4 px-4 md:px-24">
        <div className="space-y-6 z-10 text-center md:text-start">
          <h1 className=" font-bold text-white leading-tight ">
            Get instant cash flow with invoice factoring
          </h1>
          <p className="text-lg text-gray-300">
            Why wait? Get same day funding and a faster way to access cash flow.
          </p>
          <div className="pt-4">
            <button className="bg-white w-full sm:w-fit hover:bg-gray-200 text-[#4532FC] font-semibold rounded-full px-8">
              Get started
            </button>
          </div>
          <div className="flex space-x-2 pt-4">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className={`w-[14px] h-[14px] rounded-full cursor-pointer bg-${
                  activeIndex == index ? "purple-500" : "gray-600" // if index ra stateindex match then purple color else gray color
                }`}
                onClick={() => setActiveIndex(index)}
              ></div>
            ))}
          </div>
        </div>
        <div className="relative hidden md:flex  justify-end items-center">
          <img
            src={HeroImage}
            alt="Hero Image"
            className="w-[533px]"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Herocontent;
