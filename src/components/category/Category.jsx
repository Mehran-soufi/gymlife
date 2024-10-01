import React from "react";

// motion
import { easeInOut, motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import image
import trx from "../../assests/category/trx.png";
import fitness from "../../assests/category/fitness.png";
import zumba from "../../assests/category/zumba.png";
import bodyBuilder from "../../assests/category/body-builder.png";
import powerlifting from "../../assests/category/powerlifting.png";

// category data
const catData = [
  {
    id: 1,
    name: "TRX",
    img: trx,
  },
  {
    id: 2,
    name: "FITNESS",
    img: fitness,
  },
  {
    id: 3,
    name: "zumba",
    img: zumba,
  },
  {
    id: 4,
    name: "body building",
    img: bodyBuilder,
  },
  {
    id: 5,
    name: "power lifting",
    img: powerlifting,
  },
];

const Category = () => {
  return (
    <div className="category w-full h-screen flex justify-center items-center select-none bg-neutral-900">
      <div className="w-11/12 h-4/5 flex flex-col justify-around items-center">
        <p className="text-yellow-600 lg:text-2xl md:text-xl text-base mb-4">
          رشته های ورزشی جیم فیت
        </p>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper w-full h-[90%]"
        >
          {catData.map((item) => (
            <SwiperSlide key={item.id}>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,

                  transition: {
                    duration: 1,
                    ease: easeInOut,
                  },
                }}
                className="w-full h-[90%] flex justify-center items-center relative"
              >
                <img src={item.img} className="h-full z-50" alt={item.name} />
                <div className="w-4/5 h-4/5 absolute bottom-0 bg-black z-0"></div>
                <p
                  className="absolute top-1/2 transform -translate-y-1/2 left-2 py-2 px-8 bg-neutral-800/70 z-50 rounded-md text-white md:text-2xl text-xl"
                  style={{ fontFamily: "Bebas Neue" }}
                >
                  {item.name}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
