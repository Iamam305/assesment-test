import React from "react";
import HeroImg from "/assets/1.jpg";

const Hero = () => {
  return (
    <div className="relative ">
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full h-full object-contain  overflow-clip object-center">
        <img
          src={HeroImg}
          alt=""
          className="w-full  object-contain object-center overflow-clip"
        />
      </div>

      <div className="relative z-10 container xl:px-80 py-40 text-center bg-gradient-to-t from-[#3b83f656] to-[#222222bb] bg-opacity-5">
        <h2 className="text-5xl text-white font-bold">
          A NEW STANDARD IN COMMERCIAL DRIVING
        </h2>
        <p className="text-white mt-6 font-medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, ab
          qui natus quod possimus consequuntur perferendis iste vel repellendus
          placeat quasi cupiditate, molestiae ducimus atque porro id unde ad cum
          quibusdam in!placeat quasi cupiditate, molestiae ducimus atque porro
          id unde ad cum quibusdam in!
        </p>

        <button className="py-3 px-6 bg-blue-500 rounded-3xl text-white text-sm mt-6">
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default Hero;
