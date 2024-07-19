import React from "react";

export const About: React.FC = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center justify-center mb-5 fondoAbout ">
        <h1 className=" text-[130px]  xl:text[150px]  2xl:text-[80px] text-secunrdario font-titulo border-b-4  border-secunrdario ">
          Sobre SteticGlam
        </h1>

        <div className="w-1/2 h-96 flex flex-col justify-evenly items-center ">
          <p className=" text-[130px]  xl:text[150px]  xl:text-2xl  font-medium text-center  text-gray-800 ">
            Stetic Glam es una estética dirigida por <span>Yohana Campos</span>,
            una profecional que tiene una dedicación especial hacia sus
            clientes, quienes son atendidos con cuidado y de manera exclusiva
            por ella.
          </p>
          <p className=" text-[130px]  xl:text[150px]  xl:text-2xl  font-medium  text-center text-gray-800 ">
            Stetic Glam se dedica a ofrecer tratamientos avanzados de belleza y
            cuidado personal. Nuestra misión es realzar la belleza y confianza
            de nuestros clientes mediante servicios de alta calidad, adaptados a
            sus necesidades individuales.
          </p>
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
