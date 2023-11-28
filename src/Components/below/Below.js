import React from "react";
import { useEffect } from "react";
import bg from "../../Images/bg.jpg";
import "../../Components/Main.css";

import { Link } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";

function Below() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <div
      className="flex flex-col md:flex-row justify-center md:justify-end mt-16 md:mt-32 items-center h-screen bg-fixed bg-cover bg-center positioning text-white overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        height: "600px", // Adjust the height value as needed
      }}
    >
      <div className="max-w-md pr-8 md:mr-32 text-opacity-90 text-shadow-lg">
        <p
          className="text-3xl md:text-5xl lg:text-4xl mb-4 font-serif text-white font-extrabold"
          data-aos="fade-left"
        >
          Accelerate the Green Shift in your Smart City or Energy Sector
          <div className="border-b-2 border bg-[#c58f56] w-20 h-1 mb-3 mt-2 p-1"></div>
        </p>
        <p
          className="text-base md:text-lg lg:text-xl mb-6"
          data-aos="fade-left"
        >
          Transform your Smart City or Energy Sector with our sustainable
          solutions. We're committed to reducing carbon footprints, enhancing
          energy efficiency, and fostering the transition to renewable energy.
        </p>

        <Link to={"/about"}>
          <button
            className="bg-[#c58f56] text-white font-bold py-2 px-4 rounded"
            data-aos="fade-left"
          >
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Below;
