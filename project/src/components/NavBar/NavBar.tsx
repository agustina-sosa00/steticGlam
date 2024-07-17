import Burger from "../../assets/burger.svg";
import React, { useState } from "react";

export const NavBar = () => {
  const [burger, setBurger] = useState(false);

  function handleBurger(event: React.MouseEvent) {
    event.preventDefault();
    setBurger(!burger);
  }

  return (
    <>
      <div className=" w-full h-20 bg-white flex shadow-gray-400 shadow-lg fixed z-50">
        <div className="w-1/2 md:w-1/4 h-20 flex justify-center items-center ">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800  ">
            Stetic<span className="text-[#f3499edd]">Glam</span>
          </h1>
        </div>
        {/* botonera */}
        <div className="hidden w-3/4 h-20  md:flex justify-evenly items-center">
          <a href="#sec1">
            <button className="md:text-lg lg:text-xl xl:text-2xl font-bold text-[#f47ab7] hover:scale-110 duration-1000 hover:text-gray-800 ">
              Inicio{" "}
            </button>
          </a>
          <a href="#sec1">
            <button className="md:text-lg lg:text-xl xl:text-2xl font-bold text-[#f47ab7] hover:scale-110 duration-1000 hover:text-gray-800 ">
              Conocenos
            </button>
          </a>
          <a href="#service">
            <button className="md:text-lg lg:text-xl xl:text-2xl font-bold text-[#f47ab7] hover:scale-110 duration-1000 hover:text-gray-800 ">
              Servicios
            </button>
          </a>
          <a href="#sec1">
            <button className="md:text-lg lg:text-xl xl:text-2xl font-bold text-[#f47ab7] hover:scale-110 duration-1000 hover:text-gray-800 ">
              Contacto
            </button>
          </a>
        </div>
        {/* hamburguesa */}
        <div className="w-1/2 h-20 flex justify-end items-center md:hidden ">
          <button onClick={handleBurger}>
            {" "}
            <img src={Burger} alt="" className="w-12 mr-2" />
          </button>
        </div>
      </div>{" "}
      {/* container burger */}
      {burger === true ? (
        <div className=" w-full h-72 flex justify-end absolute md:hidden ">
          <div className="w-1/2 h-72 bg-[#f47ab7c2] flex flex-col justify-evenly items-end ">
            <a href="#sec1">
              <button className="text-lg font-bold text-white hover:scale-110 duration-1000 hover:text-gray-800  mr-5">
                Inicio
              </button>
            </a>
            <a href="#sec1">
              <button className="text-lg font-bold text-white  hover:scale-110 duration-1000 hover:text-gray-800  mr-5">
                Conocenos
              </button>
            </a>
            href{" "}
            <a href="#sec1">
              <button className="text-lg font-bold text-white  hover:scale-110 duration-1000 hover:text-gray-800  mr-5">
                Servicios
              </button>
            </a>
            href{" "}
            <a href="#sec1">
              <button className="text-lg font-bold text-white  hover:scale-110 duration-1000 hover:text-gray-800  mr-5">
                Contacto
              </button>
            </a>
            href{" "}
          </div>
        </div>
      ) : null}
    </>
  );
};
