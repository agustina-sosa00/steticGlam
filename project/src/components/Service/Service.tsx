import React from "react";
import Portada from "../../assets/logo.png";

export const Service: React.FC = () => {
  return (
    <div className="w-full min-h-screen  flex ">
      <div
        id="service"
        className="w-1/2 h-screen flex justify-center items-center overflow-hidden   "
      >
        <img
          src={Portada}
          alt=""
          className="w-[450px] mt-20 border-b-8 border-rosa rounded-full ShadowEffect  "
        />
      </div>
      <div className="w-1/2 h-screen   flex flex-col justify-center items-center ">
        <h2 className="text-[80px] text-rosa  font-bold ">Servicios</h2>
        <div className="w-full h-72 flex justify-evenly items-center flex-wrap ">
          <div className="w-1/2 h-52 bg-rosa border-4 border-white "></div>
          <div className="w-1/2 h-52 bg-rosa border-4 border-white "></div>
          <div className="w-1/2 h-52 bg-rosa border-4 border-white "></div>
          <div className="w-1/2 h-52 bg-rosa border-4 border-white "></div>
        </div>
      </div>
    </div>
  );
};
