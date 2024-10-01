import React from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import messImg from "../../assests/message/message.jpg";

const Message = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center select-none">
      <AnimatePresence>
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
          exit={{
            opacity:0,
            transition: {
              duration: .5,
              ease: easeInOut,
            },
          }}
          className="w-11/12 md:h-3/4 h-4/5 flex  flex-col md:flex-row"
        >
          <img
            src={messImg}
            alt="gym life"
            className="md:w-1/2 md:h-full w-full h-2/5 object-cover brightness-75 opacity-70"
          />
          <div className="md:w-1/2 md:h-full w-full h-3/5 relative">
            <div className="w-full h-full flex justify-center items-start flex-col absolute md:-right-16 md:top-0 -top-10">
              <h2 className="lg:text-5xl md:text-4xl text-2xl text-yellow-600">
                همین امروز شروع کنید
              </h2>
              <p className="text-white lg:text-2xl text-xl md:text-2xl my-4">
                به بهترین ورژن خود تبدیل شوید
              </p>
              <span className="text-slate-400 lg:text-xl md:text-base text-sm text-justify">
                شروع ورزش در باشگاه میتواند یک تجربه هیجان انگیز و مفید باشد.
                باشگاه ها امکانات و تجهیزات متنوعی برای تمرینات مختلف ارائه
                میدهند که به شما کمک میکند تا به اهداف سلامتی و تناسب اندام خود
                برسید. برای شروع، بهتر است با یک برنامه تمرینی ساده و متناسب با
                سطح آمادگی جسمانی خود آغاز کنید. میتوانید از مربیان حرفه ای
                باشگاه کمک بگیرید تا برنامه ای مناسب برای شما طراحی کنند.
                همچنین، توجه به تغذیه مناسب و استراحت کافی نیز از اهمیت بالایی
                برخوردار است. به یاد داشته باشید که استمرار و پشتکار کلید موفقیت
                در ورزش است. با گذشت زمان، نه تنها بهبود جسمانی را تجربه خواهید
                کرد، بلکه روحیه و انرژی شما نیز افزایش خواهد یافت.
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Message;
