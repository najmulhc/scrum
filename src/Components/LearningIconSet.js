import React from "react";
const LearningIconSet = ({color, icon, firstText, lastText }) => {
  return (
    <div className="flex items-center justify-between  gap-4 mr-8">
      <h1 className={` font-bold text-md `} style={{color:`#${color}`}}>
        {firstText}
        <br />
        {lastText}
      </h1>
      <div className={`p-16 rounded-full`}  style={{backgroundColor:`#${color}44`,}}>
        {icon}
      </div>
    </div>
  );
};

export default LearningIconSet;
