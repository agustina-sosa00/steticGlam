import React from "react";

export const About: React.FC = () => {
  return (
    <>
      <div
        id="about"
        className="w-full min-h-screen flex flex-col items-center justify-center mb-5 "
      >
        <h1 className=" text-5xl sm:text-6xl  md:text-7xl  xl:text[50px]  2xl:text-[80px] text-secunrdario font-titulo border-b-4  border-secunrdario  mt-10">
          Sobre SteticGlam
        </h1>

        <div className="w-full ml-5 mr-5 md:2/3 lg:w-1/2 h-[500px] sm:h-[350px] md:h-[300px] lg:h-96 flex flex-col justify-evenly items-center ">
          <p className=" text-lg sm:text-[20px]  md:text-xl   xl:text[50px]  xl:text-2xl  font-medium text-center  text-gray-800 p-5">
            Stetic Glam es una estética dirigida por <span>Yohana Campos</span>,
            una profecional que tiene una dedicación especial hacia sus
            clientes, quienes son atendidos con cuidado y de manera exclusiva
            por ella.
          </p>
          <p className=" text-lg sm:text-[20px] md:text-xl  xl:text[50px]  xl:text-2xl  font-medium  text-center text-gray-800 p-5">
            Stetic Glam se dedica a ofrecer tratamientos avanzados de belleza y
            cuidado personal. Nuestra misión es realzar la belleza y confianza
            de nuestros clientes mediante servicios de alta calidad, adaptados a
            sus necesidades individuales.
          </p>
          <button></button>
        </div>
      </div>
    </>
  );
};

//  <div className="w-full h-20 flex justify-evenly items-center ">
//    <div className="w-1/2 flex justify-evenly items-cente">
//      <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
//      <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
//      <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
//    </div>
//  </div>;
