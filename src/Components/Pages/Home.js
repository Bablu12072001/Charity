import React from "react";
import FirstPage from "./Fristpage/Fristpage";

import Header from "../../Components/Header";
import CardPage from "./Fristpage/card";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div>
      <Header />
      <FirstPage />
      <CardPage />
      <Footer />
    </div>
  );
}

export default Home;
