import React from "react";
import "./Home.css";

export const Home: React.FC = () => {
  return (
    <div id="home" className="w-full min-h-screen flex lg:flex-row justify-start items-center imgEffectBotom  ">
      <div className=" hidden lg:flex md:w-1/2 md:h-[450px]  ml-10  flex-col justify-center items-end">
        <div className=" hidden lg:flex   ml-10  flex-col justify-center items-start">
          <h3 className=" md:text-2xl lg:text-3xl ml-2 font-texto md:tracking-wide">
            Bienvenidos a
          </h3>
          <h1 className=" text-[120px] lg:text-[110px] xl:text-[130px]  2xl:text-[180px] text-secunrdario font-titulo ">
            Stetic Glam
          </h1>
          <h3 className=" md:text-2xl ml-2 font-texto tracking-wider">
            Tu estetica de confianza
          </h3>
        </div> 
        <div className="w-3/4 flex justify-end">
        <a href="#service">
          <button className="w-[140px] h-[50px] text-center rounded bg-secunrdario text-primario text-xl buttonHover tracking-wide font-semibold">
              Servicios
            </button>
        </a>
        </div>
          
      </div>
      {/* CAJA DE BG-IMAGEN */}
      <div className="hidden lg:flex lg:w-1/2 min-h-screen bgHome imgEffectLeft"></div>


      {/* CAJA MOVILE */}
      {/* para movile cambiar la imagen a una mas chica */}
      <div className=" w-[100%]  min-h-screen bgHomeMovile flex flex-col justify-center items-center lg:hidden">
        <h3 className="text-2xl font-semibold tracking-wide mt-40 mb-5 ml-5">Bienvenidos a</h3>
        <h1 className="text-secunrdario font-titulo text-[65px] md:text-[100px] mb-5 ml-5">
          Stetic Glam
        </h1>
        <h3 className="text-2xl font-semibold tracking-wide mb-5 ml-5">
          Tu estetica de confianza
        </h3>
        <div className="w-3/4  flex justify-center sm:justify-center mb-24">
        <a href="#service">
          <button className="bg-secunrdario w-[100px] h-[40px] text-primario text-center rounded buttonHover tracking-wide text-lg ">
              Servicios
            </button>
        </a>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
