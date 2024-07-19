import React from "react";
import "./Home.css";

export const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex  lg:flex-row justify-start items-center ">
      <div className=" hidden lg:flex md:w-1/2 md:h-[450px] ml-10  flex-col justify-evenly items-start">
        <h3 className=" md:text-3xl lg:text-5xl font-texto md:tracking-wide">
          Bienvenidos a
        </h3>
        <h1 className=" text-[130px]  xl:text[150px]  2xl:text-[180px] text-secunrdario font-titulo ">
          Stetic Glam
        </h1>
        <h3 className=" md:text-3xl  font-texto tracking-wider">
          Tu estetica de confianza
        </h3>
        <div className="w-3/4 flex justify-end">
          <button className="w-[140px] h-[50px] text-center rounded bg-secunrdario text-primario text-xl buttonHover tracking-wide font-semibold">
            Servicios
          </button>
        </div>
      </div>
      <div className="hidden lg:flex lg:w-1/2 min-h-screen bgHome imgEffectLeft"></div>
      {/* para movile cambiar la imagen a una mas chica */}
      <div className=" w-[100%] min-h-screen bgHomeMovile flex flex-col justify-center items-start lg:hidden">
        <h3 className="text-2xl tracking-wide mb-5 ml-5">Bienvenidos a</h3>
        <h1 className="text-secunrdario font-titulo text-[80px] md:text-[100px] mb-5 ml-5">
          Stetic Glam
        </h1>
        <h3 className="text-2xl tracking-wide mb-5 ml-5">
          Tu estetica de confianza
        </h3>
        <div className="w-3/4  flex justify-end sm:justify-center">
          <button className="bg-secunrdario w-[100px] h-[40px] text-primario text-center rounded buttonHover tracking-wide text-lg">
            Servicios
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
