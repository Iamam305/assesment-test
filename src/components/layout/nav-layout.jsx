import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const NavLayout = ({children}) => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <main>
       {children}
      </main>
      <Footer />
    </div>
  );
};

export default NavLayout;
