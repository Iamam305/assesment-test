import { useState } from "react";
import About from "./components/About";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

import Navbar from "./components/Navbar";
import News from "./components/News";
import Services from "./components/Services";
import Solution from "./components/Solution";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <News/>
      <Services/>
      <Solution/>
      <Clients/>
      <Footer/>
      
    </>
  );
}

export default App;
