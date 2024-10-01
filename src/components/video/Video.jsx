import React, { useState } from "react";

// icon import
import { FaRegCirclePlay } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

// import image
import plank from "../../assests/video/plank.webp";
import deadlift from "../../assests/video/deadlift.webp";
import Barbell from "../../assests/video/Barbell Curl.webp";
import Incline from "../../assests/video/Barbell Incline.webp";
import crunch from "../../assests/video/crunch.webp";
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";

// video data
const videoData = [
  {
    id: 1,
    title: "Plank",
    img: plank,
    link: "https://www.youtube.com/watch?v=pSHjTRCQxIw",
  },
  {
    id: 2,
    title: "deadlift",
    img: deadlift,
    link: "https://www.youtube.com/watch?v=1ZXobu7JvvE",
  },
  {
    id: 3,
    title: "Barbell Curl",
    img: Barbell,
    link: "https://www.youtube.com/watch?v=kwG2ipFRgfo",
  },
  {
    id: 4,
    title: "Barbell Incline",
    img: Incline,
    link: "https://www.youtube.com/watch?v=2jFFCy8JBU8",
  },
  {
    id: 5,
    title: "crunch",
    img: crunch,
    link: "https://www.youtube.com/watch?v=Xyd_fa5zoEU",
  },
];

const Video = () => {
  const [hover, setHover] = useState(null);
  return (
    <div className="video w-full lg:h-screen md:h-[90vh] h-[80vh] bg-neutral-900 flex justify-center items-center">
      <div className="w-11/12 h-4/5 relative">
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
              centeredSlides: true,
              slidesOffsetAfter: 80,
              slidesOffsetBefore: 80,
            },
          }}
          modules={[Navigation]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          cssMode={true}
          loop={true}
          speed={1000}
          slideVisibleClass="swiper-slide-visible"
          className="mySwiper w-full h-[90%] relative"
        >
          {videoData.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="w-full h-full select-none"
                onMouseEnter={() => setHover(item.id)}
                onMouseLeave={() => setHover(null)}
              >
                <a
                  href={item.link}
                  target="_blank"
                  className="relative w-full h-full no-underline flex justify-center items-center"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className={`h-full w-full ${
                      hover === item.id ? "opacity-60" : "opacity-100"
                    }`}
                  />
                  <FaRegCirclePlay
                    className={`absolute text-5xl text-slate-300 transition duration-75 ease-in-out ${
                      hover === item.id ? "opacity-100" : "opacity-60"
                    }`}
                  />
                  <div className="absolute w-[99%] h-[99%]  border-2 border-slate-300"></div>
                  <div className="absolute w-[98%] h-[98%]  border-2 border-slate-300"></div>
                  <div className="absolute w-[97%] h-[97%]  border-2 border-slate-300"></div>
                  <span
                    className="absolute top-[4%] left-[3%] bg-neutral-800/70 text-white text-xl py-1 px-2"
                    style={{ fontFamily: "Bebas Neue" }}
                  >
                    {item.title}
                  </span>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-next cursor-pointer">
          <HiOutlineArrowLongLeft className="text-white lg:text-4xl md:text-3xl text-2xl transition duration-75 ease-in-out hover:text-yellow-600" />
        </div>
        <div className="custom-prev cursor-pointer">
          <HiOutlineArrowLongRight className="text-white lg:text-4xl md:text-3xl text-2xl transition duration-75 ease-in-out hover:text-yellow-600" />
        </div>
      </div>
    </div>
  );
};

export default Video;
