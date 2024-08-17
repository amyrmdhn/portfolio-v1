import React from "react";
import Hero from "./components/hero/hero";
import About from "./components/about/About";
import NavBar from "./components/navbar/NavBar";
import Portfolio from "./components/portfolio/Portfolio";
import FeaturedIn from "./components/featuredin/FeaturedIn";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Portfolio />
      <FeaturedIn />
    </>
  );
};

export default App;
