import Countdown from "react-countdown";
import hero from "../Images/Hero.png";
import Navbar from "./Navbar";
const Hero = () => {
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
    
    } else {
      // Render a countdown
      return (
        <>
          <div className="w-40 h-40 rounded bg-white bg-opacity-20 text-white text-center p-8 m-8">
            <h1 className="font-bold text-3xl">{hours}</h1>
            <h2 className="text-lg mt-4">Hours</h2>
          </div>
          <div className="w-40 h-40 rounded bg-white bg-opacity-20 text-white text-center p-8 m-8">
            <h1 className="font-bold text-3xl">{minutes}</h1>
            <h2 className="text-lg mt-4">Minutes</h2>
          </div>
          <div className="w-40 h-40 rounded bg-white bg-opacity-20 text-white text-center p-8  m-8">
            <h1 className="font-bold text-3xl">{seconds}</h1>
            <h2 className="text-lg mt-4">Seconds</h2>
          </div>
        </>
      )
    }
  };
  return (
    <section className="hero relative ">
      <Navbar></Navbar>
      <div className="container mx-auto w-full h-full flex flex-col justify-center items-start">
        <h2 className="bg-white text-[#9921E8] px-6 py-1 font-medium rounded-full inline-block">
          #MOST TRUSTED CERTIFICATIONS BY THE INDUSTRY
        </h2>
        <h1 className="text-white text-5xl font-semibold my-8">Unleash Your SCRUM Skils, <br /> Grab More Attention to Résumé</h1>
        <button className="text-white rounded-full uppercase border-2 font-semibold px-6 py-2 border-white">Enroll Now</button>
        <div className="counter-container">
          <h3 className="text-white text-center text-lg font-semibold">10% OFF on all courses* | <span className="font-normal">Only valid for</span></h3>
          <hr className="mx-auto w-12 border my-2 border-white" />
          <div className="flex justify-between">
          <Countdown date={Date.now() + 10000000} renderer={renderer} /> 
        </div>
        </div>
      </div>
      <img
        src={hero}
        className="absolute left-[1090px] top-[300px] scale-125 m-0 p-0"
        alt=""
      />
    </section>
  );
};

export default Hero;
