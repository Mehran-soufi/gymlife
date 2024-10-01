import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const Social = () => {
  return (
    <div className="w-full h-[60vh] flex justify-center select-none">
      <div className="lg:w-2/3 md:w-3/4 w-11/12 relative overflow-hidden my-20 bg-zinc-900 rounded-xl flex flex-col justify-center items-center">
        <div className="lg:w-32 md:w-28 lg:h-32 md:h-28 w-20 h-20 border-4 border-slate-500 absolute rounded-full -top-10 -left-10"></div>
        <div className="lg:w-32 md:w-28 lg:h-32 md:h-28 w-20 h-20 border-4 border-white absolute rounded-full -bottom-10 -right-10"></div>
        <p className="text-white md:text-xl mb-6">
          ما را در شبکه های اجتماعی دنبال کنید
        </p>
        <div
          className="w-full flex flex-col md:flex-row justify-center items-center md:mt-6 text-white lg:text-2xl text-xl"
          style={{ fontFamily: "Bebas Neue" }}
        >
          <button className="py-3 lg:w-44 md:w-40 w-2/3 border border-slate-300 md:mx-4 md:my-0 my-2 rounded-md flex justify-center items-center transition duration-75 ease-in-out hover:border-0 transform hover:scale-95 hover:bg-gradient-to-r from-fuchsia-700 to-[#cd486b]">
            instagram
            <FaInstagram className="mx-2" />
          </button>
          <button className="py-3 lg:w-44 md:w-40 w-2/3 border border-slate-300 md:mx-4 md:my-0 my-2 rounded-md flex justify-center items-center transition duration-75 ease-in-out hover:border-0 transform hover:scale-95 hover:bg-red-600">
            youtube
            <FaYoutube className="mx-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Social;
