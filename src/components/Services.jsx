import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row my-20 container mx-auto gap-2">
      <div className="md:basis-1/3">
        <ServiceCard />
      </div>
      <div className="md:basis-1/3">
        <ServiceCard />
      </div>{" "}
      <div className="md:basis-1/3">
        <ServiceCard />
      </div>
    </div>
  );
};

export default Services;
