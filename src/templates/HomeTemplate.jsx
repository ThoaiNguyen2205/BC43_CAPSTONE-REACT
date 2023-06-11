import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";

export default function HomeTemplate() {
  return (
    <div>
      <Header />

      <div style={{ height: "130vh"}}>
      
        <Outlet  />
       
      </div>

      <Navigation />

      <Outlet />


      <Footer />
    </div>
  );
}
