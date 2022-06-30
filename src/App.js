import "./App.css";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Courses from "./Components/Courses";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import StartLearning from "./Components/StartLearning";
function App() {
  return (
    <div className="App">
      <Hero /> 
      <Courses />
      <StartLearning />
      <Footer />
      
    </div>
  );
}

export default App;
