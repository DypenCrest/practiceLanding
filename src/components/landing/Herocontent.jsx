import React, { useState } from "react";
import HeroImage from "/images/skif.webp";

const Herocontent = () => {
  // active dots on banner dekhauna state
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="w-full bg-[#121D2D] relative overflow-hidden max-h-dvh mt-[100px] ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-between p-4 md:p-24 ">
        <div className="space-y-6 z-10 text-center md:text-start col-span-2 ">
          <h1 className=" font-bold  text-white leading-tight midorima">
            SHOTOKAN KARATE-DO INTERNATIONAL FEDERATION <br />
            NEPAL
          </h1>
          <div className="pt-4 ">
            <button className="bg-white w-full sm:w-fit hover:bg-gray-200 text-[#121D2D] font-semibold rounded-full px-8 ">
              Come Join Us
            </button>
          </div>
        </div>
        <div className="relative flex md:w-[200px] md:justify-end justify-center items-center w-full">
          <img
            src={HeroImage}
            alt="Hero Image"
            className="h-auto w-[20%] md:w-auto"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Herocontent;
