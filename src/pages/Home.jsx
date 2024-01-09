import React from "react";
import Companies from "../UI/Companies/Companies";
import Contact from "../UI/Contact/Contact";
import Hero from "../UI/Hero/Hero";
import Value from "../UI/Value/Value";
import "../styles/home.css"
import Helmet from "../Helmet/Helmet";

const Home = () => {
    return (
        <Helmet title='Home'>
        <div className="App">
          <div>
            <div className="white-gradient" />
            <Hero />
          </div>
          <Companies />
          <Value/>
          <Contact/>
        </div>
        </Helmet>
      );
};

export default Home;