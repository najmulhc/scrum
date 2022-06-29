import React from "react";
import hero from "../Images/Hero.png";
import Navbar from "./Navbar";
const Hero = () => {
  return (
    <section className="hero relative ">
      <Navbar></Navbar>
      <div className="flex justify-between container mx-auto  ">
        <div  >
          <h1>this </h1>
        </div>
        <div>
 
        </div>

      </div>
      <img src={hero} className="absolute left-[1090px] top-[300px] scale-125 m-0 p-0"  alt="" />
    </section>
  );
};

export default Hero;
