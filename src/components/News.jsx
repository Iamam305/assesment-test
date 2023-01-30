import React from "react";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <div className="mt-40 container xl:px-40 mx-auto">
      <h3 className="text-blue-500 flex items-center  w-full justify-center">
        {" "}
        <span className="border border-solid border-blue-500 w-20 mr-4" /> NEWS{" "}
        <span className="border border-solid border-blue-500 w-20 ml-4" />
      </h3>

      <h2 className="text-2xl font-bold text-center my-4">Our Latest News</h2>

      <div className="flex justify-center flex-col-reverse md:flex-row gap-2 items-center mt-10">
        <span>
          <NewsCard />
        </span>
        <span className="mt-10">
          <NewsCard />
        </span>
        <span className="mt-20">
          <NewsCard />
        </span>
        <span className="mt-[120px]">
          <NewsCard />
        </span>
      </div>
    </div>
  );
};

export default News;
