import React from "react";
import Hero from "./components/hero/hero";
import About from "./components/about/About";
import NavBar from "./components/navbar/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
    </>
  );
};

export default App;
