import React from "react";
import About from "../components/About";
import Clients from "../components/Clients";
import Footer from "../components/layout/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/layout/Navbar";
import News from "../components/News";
import Services from "../components/Services";
import Solution from "../components/Solution";

import NavLayout from "../components/layout/nav-layout";

const Home = () => {
  return (
    <div>
      <NavLayout>
        <div>
          <Hero />
          <About />
          <News />
          <Services />
          <Solution />
          <Clients />
        </div>
      </NavLayout>
    </div>
  );
};

export default Home;
