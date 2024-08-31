import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import OurTeam from "./Components/Pages/Ourteam";
import Donation from "./Components/Pages/Donation";
import ContactUs from "./Components/Pages/Contactus";
import Signup from "./Components/Pages/Signup";
import NewsAndEvent from "./Components/Pages/NewsAndEvent";
import SignInPage from "./Components/Pages/Signpage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/news" element={<NewsAndEvent />} />

        <Route path="/donation" element={<Donation />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signuppage" element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default App;
