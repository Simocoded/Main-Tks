import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import S1 from "../../Images/s1.jpg";
import S2 from "../../Images/s2.jpg";
import S3 from "../../Images/s3.jpg";
import "../Main.css";

function Service() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <body className="bg-gray-100 font-sans mt-10 h-auto service-page">
      <header className="flex items-center justify-center text-black py-2">
        <p className="text-4xl lg:text-5xl font-bold">What We Do </p>
      </header>

      <section
        className="container mx-auto my-8 flex flex-wrap justify-around mb-10"
        data-aos="fade-up"
      >
        <div className="w-full  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 lg:mr-20" data-aos="fade-up">
          <div className="bg-white lg:w-96 p-6 rounded-lg shadow-md">
            <img src={S2} alt="" className="mb-4 rounded-md " />
            <h5 className="lg:text-2xl lg:font-bold rw md:text-lg txt1 mb-5 pl-5 lg:pl-12 lg:pb-3">
              Pioneering Smart AI
            </h5>
            <p className="text-gray-700 text-center lg:relative lg:bottom-4">
              TKS Innovations is the hub of cutting-edge Artificial Intelligence,
              crafting intelligent solutions that revolutionise industries
            </p>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 lg:mr-20" data-aos="fade-up">
          <div className="bg-white lg:w-96 p-6 rounded-lg shadow-md">
            <img src={S3} alt="" className="mb-4 rounded-md" />
            <h5 className="lg:text-2xl lg:ml-8 lg:font-bold md:text-lg txt2 mb-2 pl-5 lg:pl-12">
              Future of Electric  <p className="lg:ml-8">Mobility</p>
            </h5>
            <p className="text-gray-700 text-center">
              TKS Academy & Services empowers the next-gen EV workforce with
              essential skills. Our hub offers diverse business management
              courses for the evolving landscape
            </p>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 lg:mr-20" data-aos="fade-up">
          <div className="bg-white lg:w-96 p-6 rounded-lg shadow-md">
            <img src={S1} alt="" className="mb-4 rounded-md" />
            <h5 className="lg:text-2xl md:text-lg  mb-2 pl-5 lg:pl-12 txt3 lg:font-bold">
              Leading EV Tech and <p className="lg:ml-1">Sustainable Energy</p>
            </h5>
            <p className="text-gray-700 text-center ">
              TKS Integrated Technologies pioneers electric vehicle and sustainable energy, carbon capture
              transforming the industry
            </p>
          </div>
        </div>

     
      </section>
    </body>
  );
}

export default Service;
