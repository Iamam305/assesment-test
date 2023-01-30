import React from "react";
import serviceImg from "/assets/service_1.png";
const ServiceCard = () => {
  return (
    <div className="relative">
      <img src={serviceImg} alt="" />
      <div className="absolute z-10 bottom-0 p-4 w-full h-full flex flex-col justify-end items-start bg-gradient-to-t from-[#1d4fd8a3]  ">
        <span className="text-xs py-1 px-2 bg-blue-500 text-white">DIVING</span>
        <h2 className="text-sm text-white my-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, minus
          culpa? Omnis eligendi veritatis voluptatum tempora accusamus
        </h2>
        <p>September 24 2022</p>
      </div>
    </div>
  );
};

export default ServiceCard;
