import React, { useRef, useState, useLayoutEffect } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube'; // Add this line for the cube effect

function HeroSlider({ heroSlider }) {
  const pagination = {
    clickable: true,
  };
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 2000)}s`;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.7 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 1 },
    },
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setActiveIndex(currentIndex);
    console.log(`Slide changed to index ${currentIndex}`);
  };

  useLayoutEffect(() => {
    console.log(`Animations triggered for index ${activeIndex}`);
  }, [activeIndex]);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      loop={false}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      effect="cube" // Enable cube effect
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      pagination={pagination}
      onSlideChangeTransitionEnd={(swiper) => handleSlideChange(swiper)}
    >
      <AnimatePresence initial={false}>
        {heroSlider.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-image-content w-full bg-[#14171e] h-fit lg:h-[85vh] relative">
              <div className="text-content max-w-[100%] flex flex-col justify-between absolute top-[5rem] lg:top-[9rem] xl:top-[15rem] ">
                <motion.div
                  className="text-content-heading h-[150px]"
                  variants={containerVariants}
                  initial="hidden"
                  animate={index === activeIndex ? "visible" : "hidden"}
                  exit="hidden"
                >
                  <motion.h2
                    className="text-3xl lg:text-6xl pt-36 lg:relative lg:bottom-32 00 xl:text-7xl 2xl:text-9xl lg:max-w-6xl font-bold font-inter text-white pl-4 lg:pl-6 flex flex-col gap-8"
                    variants={textVariants}
                  >
                    {item.body}{" "}
                    <span className="text-tertiary relative bottom-[2rem] lg:bottom-[2.5rem] xl:bottom-[3rem] 2xl:bottom-[3.5rem] uppercase">
                      {item.span}
                    </span>
                  </motion.h2>
                  <motion.div
                    className="w-full lg:flex gap-4 px-4 lg:px-6"
                    variants={textVariants}
                  >
                    <motion.h2
                      className="text-white lg:relative lg:bottom-32 text-xl lg:text-xl xl:text-3xl 2xl:text-4xl font-normal max-w-6xl"
                      variants={textVariants}
                    >
                      {item.title}
                    </motion.h2>
                    <motion.button
                      className="bg-white rounded-lg lg:relative lg:bottom-32 py-3 lg:py-5 w-[10rem] lg:w-[12rem] xl:w-[15rem] text-base lg:text-xl font-medium mt-3 lg:mt-0"
                      variants={textVariants}
                    >
                      Contact Us
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
              <div className="image-content min-w-[100%] min-h-full">
                {item.video ? (
                  <video
                    src={item.video}
                    className="h-[86vh] w-screen object-cover video"
                    autoPlay
                    loop
                    muted
                  />
                ) : (
                  <img
                    src={item.image}
                    alt=""
                    className="h-[86vh] w-screen object-cover"
                  />
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </AnimatePresence>
    </Swiper>
  );
}

export default HeroSlider;
