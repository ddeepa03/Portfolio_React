import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
