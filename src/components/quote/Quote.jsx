import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// svg import
import svgQuote from "../../assests/quote/quote-.svg";
import user from "../../assests/quote/user.jpg";

const quoteData = [
  {
    id: 1,
    userName: "مهران صوفی",
    img: user,
    comment:
      "یک باشگاه حرفه ای و فوق العاده.ممون از مدیریت خوب باشگاه جیم لایف",
  },
  {
    id: 2,
    userName: "هادی چوپان",
    img: user,
    comment:
      "باشگاه جیم لایف واقعا یک باشگاه عالی و کاربردیه. قهرمانیمو توی مستر المپیا یک بخشیشو مدیون جیم لایفم",
  },
  {
    id: 3,
    userName: "هانی رامبد",
    img: user,
    comment:
      "به هادی گفته بودم اگه میخوای قهرمانی مسترالمپیا رو به دست بیاری توی گام اول باید تو باشگاه جیم لایف ثبت نام کنی",
  },
  {
    id: 4,
    userName: "کریس بامستد",
    img: user,
    comment:
      "منم با هادی موافقم و واقعا جیم لایف توی قهرمانی من به شدت موثر بود",
  },
];

const Quote = () => {
  return (
    <div className="quote w-full md:h-[50vh] h-[100vh] flex justify-center items-center">
      <div className="w-11/12 h-3/4 flex md:flex-row flex-col relative">
        <div className="md:w-1/3 md:h-full w-full h-1/2 relative">
          <img
            src={svgQuote}
            alt="svgQuote"
            className="w-full h-full opacity-60 md:p-4 p-6"
          />
          <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center">
            <p className="text-white lg:text-5xl md:text-3xl text-2xl py-1">نظــرات</p>
            <span className="text-white/80 lg:text-2xl md:text-xl py-1">
              شما عزیزان
            </span>
          </div>
        </div>
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
              slidesPerView: 2.6,
              spaceBetween: 15,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          loop={true}
          className="mySwiper w-2/3 h-full"
        >
          {quoteData.map((item) => (
            <SwiperSlide className="bg-neutral-900 rounded-s-3xl rounded-ee-3xl p-3 flex flex-col justify-start">
              <div className="w-full p-1 border-b border-slate-300 flex items-center">
                <img
                  src={item.img}
                  alt={item.userName}
                  className="w-9 h-9 rounded-full"
                />
                <span className="text-lg text-slate-300 mr-2">
                  {item.userName}
                </span>
              </div>
              <p className="w-full text-white md:text-lg text-base text-justify mt-4">
                {item.comment}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Quote;
