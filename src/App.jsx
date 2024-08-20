import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
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
      <ToastContainer
        className="Toastify__toast-container--top-right"
        position="bottom-right"
        autoClose={2500}
        hideProgressBar
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      />
    </>
  );
};

export default App;
