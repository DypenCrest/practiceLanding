import React from "react";
import { outSourceData } from "../../assets/constant";
import groupImg from "/images/groupPhoto.jpg";

const OutsourcePayment = () => {
  return (
    <div className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className=" font-bold text-gray-900 mb-4 midorima">
            COME AND TRAIN WITH US
          </h2>
        </div>
        <div>
          <img
            src={groupImg}
            alt="SKIF Team"
            className="w-full h-auto rounded-2xl shadow-lg mb-8"
            loading="lazy"
            
          />
        </div>
        {/* 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px] mb-16">
          {outSourceData?.map((item, index) => (
            <div
              className="text-center group h-[290px] py-[52px] px-[24px] hover:bg-purple-100/30 rounded-4xl cursor-pointer"
              key={item?.id || index}
            >

              <div className="mx-auto w-12 h-12 mb-6 group-hover:animate-spin ">
                <img src={item?.img} alt={item?.title} loading="lazy" />
              </div>
              <h3 className="text-[24px] font-semibold mb-2">{item?.title}</h3>
              <p className="text-gray-600 text-[16px]">{item?.description}</p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default OutsourcePayment;
