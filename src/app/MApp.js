import React from "react";
import "./MApp.css";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import Navbar from "./Ocomponents/navbar";
import Footer from "./Ocomponents/footer";
import Home from "./Opages/Home";

const MApp = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default MApp;
