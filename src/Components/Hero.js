import React from "react";
import hero from '../Images/Hero.png'
import Navbar from "./Navbar";
const Hero = () => {
  return (
    <section className="hero">
      <Navbar></Navbar>
      <div>
        <div></div>
        <img src={hero} alt="" />
      </div>
    </section>
  );
};

export default Hero;
