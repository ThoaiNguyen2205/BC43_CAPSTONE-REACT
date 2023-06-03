import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function HomeTemplate() {
  return (
    <div>
      <Header />
      <div style={{ height: "80vh" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
