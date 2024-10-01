import React from "react";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-4 flex justify-center items-center bg-zinc-900">
      <p className="text-sm md:text-base lg:text-xl text-slate-300 flex items-center">
        تمامی حقوق برای وب سایت جیم لایف محفوظ می باشد.
        <FaRegCopyright className="mr-2" />
      </p>
    </footer>
  );
};

export default Footer;
