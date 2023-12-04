import React from "react";
import { useEffect } from "react";
import img1 from "../../Images/bg1.jpg";
import img2 from "../../Images/bg2.jpg";
import img3 from "../../Images/bg3.jpg";
import img4 from "../../Images/bg4.jpg";
import "../../Components/Main.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Homepage() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <div className="w-full min-h-auto flex items-center justify-center post responsive lg:relative lg:bottom-20">
      <div className="flex flex-col max-w-7xl w-full md:flex-row md:mt-10 ">
        <div className="w-full md:w-1/2 md:pr-8">
          <p
            className="text-base sm:text-5xl md:text-4xl lg:text-4xl font-bold mb-4 mt-4 sm:mt-10"
            id="mytext"
            data-aos="fade-up"
          >
            YOUR VISION IS OUR MISSION
            <div className="border-b-2 border bg-[#c58f56] w-12 h-1 mb-3 mt-2"></div>
          </p>
          <p
            className="mb-4 text-base sm:text-base md:text-lg lg:text-lg font-semibold lg:whitespace-pre-line"
            data-aos="fade-up"
          >
            THINK SMART - THINK SCIENCE <br />{" "}
            <p className="mt-3">
              Driven by passion and Experience – armed with working solutions –
              supported by Norwegian, Malaysian, Australian, and UAE
              innovations, finance, and values.
            </p>
          </p>
          <p
            className="mb-4 text-sm sm:text-base md:text-lg lg:text-1xl"
            data-aos="fade-up"
          >
            Backed by more than 30 years of experience in the Energy, Maritime,
            and IT sectors in Norway, Middle East, Asia, Africa, and globally,
            our strategic and hands-on services, unique patents and solutions
            meet the needs of all types and sizes of clients – from small
            startups to large firms and governments – and deliver lasting
            changes with measurable growth and profit.
          </p>
          <p
            className="mb-4 text-sm sm:text-base md:text-lg lg:text-1xl"
            data-aos="fade-up"
          >
            Delivering Norwegian, Australian, and Malaysian Innovations and
            Proven Solutions.
          </p>
          <p
            className="mb-4 text-sm sm:text-base md:text-lg lg:text-1xl"
            data-aos="fade-up"
          >
            Supporting Smart Cities and the Green Shift in the Energy Sectors in
            the Middle East, Africa, India, and Southeast Asia.
          </p>

          <a href="/about">
            <button
              className="bg-[#c58f56] mb-2  text-white font-bold py-2 px-4 rounded md:mb-2"
              data-aos="fade-up"
            >
              Read More
            </button>
          </a>
        </div>

        <div className="w-full md:w-1/2 hidden md:flex flex-wrap justify-around mt-4 Image-Box">
          <div className="w-1/2 p-4" data-aos="fade-left">
            <img
              src={img1}
              alt=""
              style={{ width: "100%", height: "auto" }}
              className="mb-4"
            />
          </div>
          <div className="w-1/2 p-4" data-aos="fade-up-left">
            <img
              src={img2}
              alt=""
              style={{ width: "100%", height: "auto" }}
              className="mb-4 Image"
            />
          </div>
          <div className="w-1/2 p-4" data-aos="fade-up">
            <img
              src={img3}
              alt=""
              style={{ width: "100%", height: "auto" }}
              className="mb-4 Img3"
            />
          </div>
          <div className="w-1/2 p-4" data-aos="fade-up">
            <img
              src={img4}
              alt=""
              style={{ width: "100%", height: "auto" }}
              className="Image2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
