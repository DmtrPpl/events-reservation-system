import React from "react";
import Companies from "../UI/Companies/Companies";
import Contact from "../UI/Contact/Contact";
import Hero from "../UI/Hero/Hero";
import Value from "../UI/Value/Value";
import "../styles/home.css"

const Home = () => {
    return (
        <div className="App">
          <div>
            <div className="white-gradient" />
            <Hero />
          </div>
          <Companies />
          <Value/>
          <Contact/>
        </div>
      );
};

export default Home;