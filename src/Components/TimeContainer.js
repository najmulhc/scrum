import React from "react";

const TimeContainer = ({ time, str }) => {
  return (
    <div className="w-32 h-32 rounded-xl bg-white bg-opacity-20 text-white text-center p-4  m-2 flex justify-center items-center flex-col">
      <h1 className="font-bold text-7xl">
        {time < 10 && "0"}
        {time}
      </h1>
      <h2 className="text-md ">{str}</h2>
    </div>
  );
};

export default TimeContainer;
