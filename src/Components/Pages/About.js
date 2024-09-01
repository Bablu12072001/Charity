import React from "react";
import AboutUs from "./AboutUs/AboutUs1";
import Vision from "./AboutUs/vision";
import List from "./AboutUs/List";
import Header from "../Header";
import Footer from "../Footer/Footer";

function About() {
  return (
    <div>
      <Header />
      <AboutUs />
      <Vision />
      <List />
      <Footer />
    </div>
  );
}

export default About;
