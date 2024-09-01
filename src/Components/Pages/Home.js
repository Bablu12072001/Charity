import React from "react";
import FirstPage from "./Fristpage/Fristpage";

import Header from "../../Components/Header";
import CardPage from "./Fristpage/card";
import Footer from "../Footer/Footer";
import Heading from "./Fristpage/Heading ";
import Accelerate from "./Fristpage/Aceelarating";
import Cardgrid from "./Fristpage/CardGrid";
import Slide from "./Fristpage/slide";

function Home() {
  return (
    <div>
      <Header />
      <FirstPage />
      <CardPage />
      <Heading />
      <Accelerate />

      <Cardgrid />
      {/* <Slide /> */}
      <Footer />
    </div>
  );
}

export default Home;
