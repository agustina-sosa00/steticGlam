import React from "react";
import { servicios } from "../../helpers/servicios";

export const Service: React.FC = () => {
  return (
    <div
      id="service"
      className="w-full min-h-screen  flex flex-col justify-center items-center  "
    >
      <div className="w-full  min-h-screen  flex flex-wrap  justify-center  ">
        {servicios.length > 0
          ? servicios.map((e, i) => {
              return (
                <div
                  key={i}
                  className="w-full xl:h-[350px] flex flex-col md:flex-row justify-evenly items-center mb-5 overflow-hidden  "
                >
                  <div className=" hidden md:block w-1/2 max-h-[400px] overflow-hidden">
                    <img
                      src={e.image}
                      alt=""
                      className=" w-full imgEffectRight"
                    />
                  </div>
                  <div className="w-full md:hidden ">
                    <img
                      src={e.image}
                      alt=""
                      className="w-full max-h-52 imgEffectLow "
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <h2 className="text-3xl text-center md:text-start xl:text-5xl p-2 text-secunrdario font-titulo font-semibold ">
                      {e.name}
                    </h2>
                    <p className="p-2 text-md xl:text-xl font-medium text-center md:text-start ">
                      {e.description}{" "}
                    </p>

                    <p className="p-2 text-md xl:text-xl font-medium text-center md:text-start ">
                      {e.sesion}
                    </p>
                    <p className="p-2 text-md xl:text-xl font-medium text-center md:text-start ">
                      {e.beneficios}
                    </p>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};
