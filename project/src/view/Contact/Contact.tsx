import React from "react";
import WP from "../../assets/whatsapp-color-svgrepo-com.svg";
import IG from "../../assets/instagram-svgrepo-com.svg";
import Ubi from "../../assets/address.svg";

export const Contact: React.FC = () => {
  return (
    <div
      id="contacto"
      className="w-full min-h-screen flex flex-col items-center mt-20"
    >
      <div className="w-full  flex justify-center items-center m-5 lg:m-14 xl:m-16">
        <h1 className="text-4xl md:text-[70px] lg:text-[80px] xl:text-[100px] text-secunrdario font-titulo ">
          Contactos
        </h1>
      </div>
      <div className="w-3/4 flex flex-col justify-center items-center  rounded-xl ">
        <div className="w-full flex flex-col justify-center items-center ">
          <div className="w-3/4  flex items-center">
            <p className="md:text-lg lg:text-xl xl:text-2xl font-medium text-black text-center  ">
              Para agendar tu turno con Yohana Campos, puedes contactarnos a
              través de los siguientes medios
            </p>
          </div>
        </div>

        <div className="w-full  m-5  flex  flex-col md:flex-row  justify-evenly   ">
          <div className="w-full md:w-1/3 flex flex-col items-center mb-3">
            <img src={WP} alt="" className="w-8 md:w-10 lg:w-12 xl:w-14  " />
            <a
              className="md:text-md   xl:text-2xl font-bold text-green-600 ml-2 hover:scale-110 hover:text-secunrdario duration-1000"
              href="https://wa.me/541130768825"
            >
              +54 01130768825
            </a>
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center mb-3">
            <img
              src={IG}
              alt=""
              className="w-8 md:w-10 lg:w-12 xl:w-14 opacity-70  "
            />
            <a
              className="md:text-md lg:text-xl xl:text-2xl font-bold text-pink-600 ml-2 hover:scale-110 hover:text-secunrdario duration-1000 "
              href="https://www.instagram.com/steticglam__/"
            >
              @steticglam__
            </a>
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center mb-3">
            <img
              src={Ubi}
              alt=""
              className="w-8 md:w-10 lg:w-12 xl:w-14 opacity-70 "
            />
            <span className="md:text-md lg:text-xl xl:text-2xl font-bold text-red-600 ml-2 opacity-70 ">
              Amberes 2649
            </span>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2  flex flex-col items-center justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.788096026798!2d-58.457838225204924!3d-34.73573536448058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccdddae39272d%3A0xe295b1a80aaac2c8!2sAmberes%202649%2C%20B1821AYA%20Ingeniero%20Budge%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1721415851255!5m2!1ses-419!2sar"
          className="w-full h-[200px] md:w-[760px] md:h-[250px] lg:w-[1020px] lg:h-[350px] xl:w-[1200px] xl:h-[450px] mb-10"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};
