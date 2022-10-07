import React from "react";
import Dropdown from "./component/Dropdown";
import Hero from "./component/HeroSection";
import Features from "./component/Features";
import Cta from "./component/Cta";

function App() {
  return (
    <div>
      <Dropdown />
      <Hero/>
      <Features/>
      <Cta/>
    </div>
  );
}

export default App;