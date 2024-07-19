import React from "react";
import WP from "../../assets/whatsapp-color-svgrepo-com.svg";
import IG from "../../assets/instagram-svgrepo-com.svg";
import Ubi from "../../assets/address.svg";

export const Contact: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex ">
      <div className="w-1/2 h-screen flex flex-col items-center justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.788096026798!2d-58.457838225204924!3d-34.73573536448058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccdddae39272d%3A0xe295b1a80aaac2c8!2sAmberes%202649%2C%20B1821AYA%20Ingeniero%20Budge%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1721415851255!5m2!1ses-419!2sar"
          width="600"
          height="600"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>{" "}
      <div className="w-1/2 h-screen flex flex-col  justify-evenly">
        <div>
          <h1 className=" text-[120px]  xl:text[150px]  xl:text-[100px] text-secunrdario font-titulo ">
            Contactos
          </h1>
          <div className="w-3/4  m-2 flex items-center">
            <p className="text-2xl font-medium ">
              Para agendar tu turno con Yohana Campos, puedes contactarnos a
              través de los siguientes medios
            </p>
          </div>
        </div>

        <div className="w-1/2 h-52  flex flex-col  justify-evenly   ">
          <div className="w-full flex items-center">
            <img src={WP} alt="" className="w-14  " />
            <a className="text-2xl font-bold text-green-600 ml-2 " href="###">
              +54 01130768825
            </a>
          </div>
          <div className="w-full flex items-center">
            <img src={IG} alt="" className="w-14  " />
            <a className="text-2xl font-bold text-pink-600 ml-2  " href="###">
              @steticglam__
            </a>
          </div>
          <div className="w-full flex items-center">
            <img src={Ubi} alt="" className="w-14  " />
            <a className="text-2xl font-bold text-red-600 ml-2  " href="###">
              Amberes 2649
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
