import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
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
      <div className=" w-full h-20 bg-purple-300 flex">
        <div className="w-1/2 md:w-1/4 h-20 flex justify-center items-center">
          <img src={Logo} alt="" className="w-14" />
        </div>
        {/* botonera */}
        <div className="hidden w-3/4 h-20  md:flex justify-evenly items-center">
          <Link to="#sec1">
            <button className="md:text-lg lg:text-xl xl:text-2xl font-bold text-white hover:scale-110 duration-1000 hover:text-gray-800 textShadow">
              Inicio{" "}
            </button>
          </Link>
          <Link to="#sec1">
            <button className="md:text-lg lg:text-xl xl:text-2xl font-bold text-white hover:scale-110 duration-1000 hover:text-gray-800 textShadow">
              Conocenos
            </button>
          </Link>
          <Link to="#sec1">
            <button className="md:text-lg lg:text-xl xl:text-2xl font-bold text-white hover:scale-110 duration-1000 hover:text-gray-800 textShadow">
              Servicios
            </button>
          </Link>
          <Link to="#sec1">
            <button className="md:text-lg lg:text-xl xl:text-2xl font-bold text-white hover:scale-110 duration-1000 hover:text-gray-800 textShadow">
              Contacto
            </button>
          </Link>
        </div>
        {/* hamburguesa */}
        <div className="w-1/2 h-20 flex justify-end items-center md:hidden">
          <button onClick={handleBurger}>
            {" "}
            <img src={Burger} alt="" className="w-12 mr-2" />
          </button>
        </div>
      </div>{" "}
      {/* container burger */}
      {burger === true ? (
        <div className=" w-full h-72 flex justify-end absolute md:hidden ">
          <div className="w-1/2 h-72 bg-red-200 flex flex-col justify-evenly items-end ">
            <Link to="#sec1">
              <button className="text-lg font-bold text-violet-500 hover:scale-110 duration-1000 hover:text-gray-800  mr-2">
                Inicio
              </button>
            </Link>
            <Link to="#sec1">
              <button className="text-lg font-bold text-violet-500  hover:scale-110 duration-1000 hover:text-gray-800  mr-2">
                Conocenos
              </button>
            </Link>
            <Link to="#sec1">
              <button className="text-lg font-bold text-violet-500  hover:scale-110 duration-1000 hover:text-gray-800  mr-2">
                Servicios
              </button>
            </Link>
            <Link to="#sec1">
              <button className="text-lg font-bold text-violet-500  hover:scale-110 duration-1000 hover:text-gray-800  mr-2">
                Contacto
              </button>
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
};
