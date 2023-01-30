import React from "react";
import SolutionImg from "/assets/pro_1.png"
const Solution = () => {
  return (
    <div className="mt-40 container  mx-auto">
      <h3 className="text-blue-500 flex items-center  w-full justify-center">
        {" "}
        <span className="border border-solid border-blue-500 w-20 mr-4 " />{" "}
        SOLUTIONS{" "}
        <span className="border border-solid border-blue-500 w-20 ml-4" />
      </h3>

      <h2 className="text-2xl font-bold text-center my-4">
        Our Inovative Solutions
      </h2>

      <div className="flex justify-between items-center flex-col-reverse md:flex-row">
        <div className="md:w-1/2 bg-gray-200 pr-10 md:pl-40 py-40  ">
          <h2 className="text-5xl font-semibold py-2 text-gray-800">Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            consectetur, inventore illum nobis culpa qui quasi dolorum optio
            molestias nostrum nemo? Libero eligendi nemo ullam aspernatur
            sapiente voluptatum obcaecati at corporis voluptates tempora laborum
            totam, necessitatibus suscipit quisquam aliquam vel vero labore
            ducimus veniam, ratione, repellat sed. Quam, nulla vitae?
          </p>

          <button className="py-3 px-6 bg-blue-500 rounded-3xl text-white text-sm mt-6">
            Read More
          </button>
        </div>
        <div className="md:w-1/2">
            <img src={SolutionImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Solution;
