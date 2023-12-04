// import React, { useRef, useEffect, useState } from "react";
// import EmblaCarousel from "./EmblaCarousel";
import HeroSlider from "./SwiperSlide";
import VidOne from "../../Videos/Vid1.mp4";
import VidTwo from "../../Videos/vid2.mp4";
import Vid from "../../Videos/fvid.mp4";
import bgHero2 from "../../Images/bg3.jpg"
import bgHero4 from "../../Images/Bg5.jpg"

import "../../Components/Main.css";

function Hero() {
  // const OPTIONS = { containScroll: "trimSnaps" };
  // const SLIDE_COUNT = 5;
  // const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  const HERO_SLIDE =  [
    {
      title: "IT/AI and Green technology solutions for the Middle East, Africa, and Asia",
      body: "Welcome to ",
      span: "tks investment",
      video: Vid,
      
  },
    {
      title: "Our IT Solutions can help you transform your business and leave the competition behind.",
      body: "IT Innovations Driving the Future",
      span: "",
      image: bgHero2,
      video: VidOne,
  },
    {
      title: "Unleash the power of AI to automate tasks, Improve efficiency, and make better decisions.",
      body: "The Next Frontier of Business ",
      span: "",
      video: VidTwo,
  },
    {
      title: "Our green engineering solutions can help you reduce your environmental impact and build a more sustainable future",
      body: "Building a Better Future",
      span: "",
      image: bgHero4,
  },
  ]

  return (
    <div>
      {/* <section className='sandbox__carousel'>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section> */}
      <div className="w-full mt-[6rem] ">
        <HeroSlider heroSlider={HERO_SLIDE} />
      </div>
    </div>
  );
}

export default Hero;
