import { useState } from "react";
import About from "./components/About";
import Clients from "./components/Clients";
import Footer from "./components/layout/Footer";
import Hero from "./components/Hero";

import Navbar from "./components/layout/Navbar";
import News from "./components/News";
import Services from "./components/Services";
import Solution from "./components/Solution";

import { Route, Routes } from "react-router-dom"
import Home from "./pages/home";
import Employees from "./pages/employees";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/employees" element={<Employees/>}/>
     </Routes>

    
      
    </>
  );
}

export default App;
