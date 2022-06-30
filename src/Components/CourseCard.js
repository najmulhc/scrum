import React from "react";
import { SwiperSlide } from "swiper/react";

import CourseImg from "../Images/CourseImg.png";
import CourseIcon from "./Icons/CourseIcon";
import FullStar from "./Icons/FullStar";
import HalfStar from "./Icons/HalfStar";
const CourseCard = () => {
  const times = [1, 2, 3, 4];
  // as there is no multiple data in figma file, I am hardcoding data here. You can send props data to it to make dynamic cards
  return (
    <div className="shadow-lg rounded-2xl my-20  mx-4">
      <img src={CourseImg} className="w-full" alt="" />
      <div className="px-8 py-4">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold pr-4">
            Learn SCRUM: The Commplete Beginner Course
          </h2>
          <CourseIcon className="" />
        </div>
        <h3 className="text-[14px] mt-2">Samay Jain, Ex-KPMG</h3>
        <div className="flex gap-4 items-center justify-start">
          <h3 className="text-md">4.5</h3>{" "}
          <div className="flex justify-start my-4">
            {times.map((num) => (
              <FullStar />
            ))}{" "}
            <HalfStar />{" "}
          </div>{" "}
        </div>
        <button className="text-[#5F72BE] text-sm font-semibold border-2 border-[#5F72BE] uppercase py-1 px-3 rounded-full">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
