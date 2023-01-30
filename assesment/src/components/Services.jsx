import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="flex my-20 container mx-auto">
      <div className="basis-1/3">
        <ServiceCard />
      </div>
      <div className="basis-1/3">
        <ServiceCard />
      </div>{" "}
      <div className="basis-1/3">
        <ServiceCard />
      </div>
    </div>
  );
};

export default Services;
