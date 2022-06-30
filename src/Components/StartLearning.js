import React from "react";
import Exams from "./Icons/Exams";
import Lessons from "./Icons/Lessons";
import Lessons2 from "./Icons/Lessons2";
import LiveClass from "./Icons/LiveClass";
import Views from "./Icons/Views";
import LearningIconSet from "./LearningIconSet";

const StartLearning = () => {
  return (
    <section className="container mx-auto py-10 grid grid-cols-2">
      <div className=" my-auto justify-center   w-full">
        <h1 className="text-[#9921E8] text-5xl font-bold mt-10">
          Start learning with <br /> us right now!
        </h1>
        <h3 className="text-xl font-medium my-6">Choose from 100+ online video <br /> courses with new updates.</h3>
        <button className="text-[#5F72BE] text-sm font-semibold border-2 border-[#5F72BE] uppercase py-1 px-3 rounded-full mb-10">
          Enroll Now
        </button>
      </div>
          <div className="grid grid-cols-2 mr-48 py-20">
              <div className="flex flex-col justify-center gap-8">
                  <LearningIconSet color="FFAD3B" icon={<Exams/> } firstText="FREE" lastText="EXAMS"/>  
                  <LearningIconSet color="2D81F7" icon={<LiveClass/> } firstText="LIVE" lastText="CLASS"/>  
                  <LearningIconSet color="FE5702" icon={<Views/> } firstText="100K+" lastText="VIEWS"/>  
                 
              </div>
              <div className="flex flex-col justify-center gap-8">
                  <LearningIconSet icon={<Lessons /> } firstText="1000+" lastText="LESSONS" color="EB5757" />
                  <LearningIconSet icon={<Lessons2 /> } firstText="1000+" lastText="LESSONS" color="08BD80" />
              </div>
          </div>
    </section>
  );
};

export default StartLearning;
