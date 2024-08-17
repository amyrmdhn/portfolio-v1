import React from "react";
import Hero from "./components/hero/hero";
import About from "./components/about/About";
import NavBar from "./components/navbar/NavBar";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Portfolio />
    </>
  );
};

export default App;
