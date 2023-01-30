import React from "react";
import AboutImg from "/assets/about.jfif";
import AbtImg2 from "/assets/infinity_1.jpg"
const About = () => {
  return (
    <>
      <div className="flex items-center flex-col-reverse md:flex-row">
        <div className="md:w-1/2 object-cover h-full ">
          <img src={AboutImg} alt="" className="h-full"/>
        </div>
        <div className="md:w-1/2 py-36 px-10 xl:pr-40">
          <h3 className="text-blue-500 flex items-center">
            ABOUT <span className="border border-solid border-blue-500 w-20 ml-4"/>
          </h3>
          <h2 className="text-3xl font-semibold my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat{" "}
          </h2>
          <p className="text-sm text-gray-500 my-2 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            odit doloremque commodi deleniti accusantium adipisci, aspernatur
            quaerat magni fugit ea cum? Iste fuga expedita molestias nobis ea
            corporis, facilis vero!
          </p>

          <button className="py-3 px-6 bg-blue-500 rounded-3xl text-white text-sm mt-6">
           Read More
          </button>
        </div>
      </div>

      <div className="bg-blue-800">
<div className="px-4 md:px-40  flex items-center justify-center flex-col md:flex-row">
    <div className="md:w-1/2 py-40">
        <h2 className="text-3xl text-white font-bold mb-6">Lorem, ipsum dolor.</h2>
        <p className="text-sm text-white my-2 font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo impedit debitis nemo reprehenderit, tempore quos ad tenetur ipsam ipsa, ea dolorum sequi soluta placeat minima fugiat, fuga modi maiores necessitatibus!</p>
        <p className="text-sm text-white my-2 font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo impedit debitis nemo reprehenderit, tempore quos ad tenetur ipsam ipsa, ea dolorum sequi soluta placeat minima fugiat, fuga modi maiores necessitatibus!</p>
        <button className="py-3 px-6 bg-blue-500 rounded-3xl text-white text-sm mt-6">
           Read More
          </button>
    </div>
    <div className="md:w-1/2 md:-mb-10 mt-20">
        <img src={AbtImg2} alt="" />
    </div>

</div>
      </div>
    </>
  );
};

export default About;
