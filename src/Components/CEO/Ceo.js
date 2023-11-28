import React from "react";
import { useEffect } from "react";
import ceo from "../../Images/MOTEN-CEO.jpg";
import "../../Components/Main.css";
import Aos from "aos";
import "aos/dist/aos.css"

function Ceo() {
  useEffect(()=>{
    Aos.init({duration: 800})
  },[])
  return (
    <div className="ceo">
    <div className="flex flex-col items-center justify-center text-black p-8 h-full   ">
      <p className="text-5xl md:text-6xl lg:text-7xl mt-36 font-semibold text-black"data-aos="fade-up">"</p>

      <p className="text-base md:text-1xl  lg:text-1xl text-center font-semibold mb-4 text-black texts"data-aos="fade-up">
        "I'm in IT to change IT. I believe that technology has the power to
        solve some of the world's <br className="hidden md:inline" /> biggest challenges, such as climate
        change and energy poverty. <br className="hidden md:inline" /> I'm passionate about using IT to
        create a more sustainable and equitable <br className="hidden md:inline" /> future."
      </p>

      <img src={ceo} alt="CEO" className="mt-4 rounded-full w-40 md:w-80 lg:w-64 Img "data-aos="fade-up"/>

      <p className="text-2xl md:text-3xl lg:text-4xl mt-4 font-bold"data-aos="fade-up">Morten Tønnesen</p>

      <p className="text-lg md:text-xl lg:text-2xl text-center mt-2"data-aos="fade-up">FOUNDER AND CEO</p>
    </div>
    </div>
  );
}

export default Ceo;

