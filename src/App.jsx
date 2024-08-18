import React from "react";
import Hero from "./components/hero/hero";
import About from "./components/about/About";
import NavBar from "./components/navbar/NavBar";
import Portfolio from "./components/portfolio/Portfolio";
import FeaturedIn from "./components/featuredin/FeaturedIn";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Portfolio />
      <FeaturedIn />
      <Blog />
      <Contact />
    </>
  );
};

export default App;
