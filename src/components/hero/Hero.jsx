import React from "react";
import { easeInOut, motion } from "framer-motion";


// import image
import heroImg from "../../assests/hero/hero.png";

const Hero = () => {
  return (
    <div className="w-full h-screen flex md:flex-row flex-col select-none overflow-hidden">
      <div className="absolute -z-10 left-0 w-3/4 h-3/4 hero-path bg-gradient-to-b from-zinc-900 to-transparent"></div>
      <div className="md:w-[45%] md:h-full w-full h-1/2 flex flex-col justify-center items-center">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              ease: easeInOut,
            },
          }}
          className="text-white lg:text-8xl md:text-6xl text-5xl hero-font"
        >
          gym life
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              ease: easeInOut,
            },
          }}
          className="text-yellow-600 lg:text-3xl md:text-2xl text-xl  mt-6"
        >
          وب سایت ورزشی باشگاه جیم لایف
        </motion.p>
      </div>
      <div className="md:w-[55%] md:h-full w-full h-1/2 flex justify-center items-center relative">
        <motion.img
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              ease: easeInOut,
            },
          }}
          src={heroImg}
          alt=""
          className="w-full"
        />
        <motion.div
          initial={{
            opacity: 0,
            rotate: 90,
            x: 100,
          }}
          animate={{
            opacity: 1,
            rotate: 0,
            x: 0,
            transition: {
              duration: 1,
              ease: easeInOut,
            },
          }}
          className="w-6 h-6 bg-yellow-600 absolute top-[30%] right-[10%] hero_img-path"
        ></motion.div>
        <motion.div
          initial={{
            opacity: 0,
            rotate: -90,
            x: -100,
          }}
          animate={{
            opacity: 1,
            rotate: 0,
            x: 0,
            transition: {
              duration: 1,
              ease: easeInOut,
            },
          }}
          className="w-6 h-6 bg-yellow-600 absolute top-[40%] left-[10%] hero_img-path"
        ></motion.div>
      </div>
    </div>
  );
};

export default Hero;
