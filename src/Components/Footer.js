import React from "react";
import { TbPhoneCall } from 'react-icons/tb'
import {IoMailOutline} from 'react-icons/io5'
const Footer = () => {
  return (
    <footer className="text-white bg-[#27282B] w-screen ">
      {/* footer inner container  */}
      <div className="container mx-auto grid grid-cols-2">
        <div className=" border-r border-white border-opacity-30 p-16 ">
          <h1 className="text-4xl font-bold mb-8">logo</h1>
          <p className="text-thin leading-6 opacity-70">
            This is where you can write something about your brand. You may want
            to add your motto or mission over here.
          </p>
          <div className="grid grid-cols-2 mt-8">
            <div className="flex items-center gap-4">
              <h1 className="text-3xl p-4 rounded-full bg-white bg-opacity-10 inline-block">
                <TbPhoneCall />
                </h1>
              <div>
                <h3 className="text-thin leading-6 opacity-70">Have a question?</h3>
                <h2 className="text-2xl font-semibold">310-437-2766</h2>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <h1 className="text-3xl p-4 rounded-full bg-white bg-opacity-10 inline-block">
                <IoMailOutline />
                </h1>
              <div>
                <h3 className="text-thin leading-6 opacity-70">Contact us at</h3>
                <h2 className="text-2xl font-semibold">unreal@outlook.com</h2>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <hr className="border border-opacity-30 border-white" />
      <div className="container mx-auto"></div>
    </footer>
  );
};

export default Footer;
