import Navbar from "../Navbar/Navbar";
import Ab1 from "../../Images/bg10.png";
import Ab2 from "../../Images/bg11.png";
import Ab3 from "../../Images/bg12.png";
import Ab4 from "../../Images/bg13.png";
import Ab5 from "../../Images/bg14.png";
import ceo from "../../Images/MOTEN-CEO.jpg";
import "./Service.css";
import { Link } from "react-router-dom";

function Service() {
  return (
    <div style={{ marginTop: "100px", overflow: "hidden" }}>
      <Navbar />
      <div class="relative max-w-full overflow-hidden">
        <img className="w-full h-auto max-h-48 object-cover" src={Ab1} alt="" />
        <div class="absolute inset-0 flex items-center justify-center ">
          <p class="text-white text-center text-lg font-extrabold">
            TKS Investment FZ LLC is the official Value-Added Reseller and Local
            Service Partner to Market- <br />
            leading Norwegian, Malaysian, Australian, and UAE Principals
            specialised in Energy, <br/> Maritime, IT, and Executive
            Consultancy Services, delivering proven solutions to Governments,
            <br /> National and Private Companies in the Middle East, India,
            Africa, and Asia Pacific.
          </p>
        </div>
      </div>

      <div class="bg-[#c58f56]  md:w-1/2 h-16 flex items-center justify-center rounded-br-3xl rounded-tl-3xl p-2 md:ml-80 mt-5">
        <p class="text-center text-[#3c3c3c] font-bold font-serif text-1xl md:text-2xl  ">
          THINK SMART - THINK SCIENCE
        </p>
      </div>
      <div className="flex flex-col sm:flex-row h-auto relative bottom-14 First-Box">
        {/* Text Box */}
        <div className="w-full sm:w-1/2 p-2">
          <div className="blue-500 mb-2 relative lg:left-36 lg:top-20 flex-grow p-1 w-full sm:w-2/3 m-4 sm:m-24 text-1xl font-serif Text-one">
            <p className="font-bold ">
              Driven by passion and experience - armed with working solutions -
              supported by Norwegian, Malaysian, Australian, and UAE
              innovations, finance and values
            </p>
            <br />
            <p>
              Backed by more than 30 years of experience in the Energy,
              Maritime, and IT sectors in Norway, Middle East, Asia, Africa and
              globally, our strategic and hands-on services, unique patents and
              solutions meet the needs of all types and sizes of clients - from
              small startups to large firms and governments - and deliver
              lasting changes with measurable growth and profit.
            </p>
            <br />
            <p>
              Delivering Norwegian, Australian, Malaysian, and UAE Innovations
              and Proven Solutions
            </p>
            <br /> Supporting Smart Cities, Energy Sectors, and the Green Shift
            in the Middle East, Africa, India, and South East Asia
          </div>
        </div>

        {/* Image Box */}
        <div className="w-1/2 p-8 mt-28  Ab2-Img ">
          <img
            className=""
            src={Ab2}
            alt=""
            style={{ maxWidth: "70%", height: "100%" }}
          />
        </div>
      </div>

      <div className="flex justify-center items-center flex-wrap">
        {/* Box 1 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-2 text-center">
          <div className="w-full flex justify-center items-center">
            <img
              className="w-full h-auto ml-0 sm:ml-2 img-box"
              src={Ab3}
              alt=""
            />
          </div>
          <p className="font-bold"> TKS Integrated Technologies</p>
          <p className="lg:pt-2">
            Carbon Capture Solutions
            <br />
            Geothermal Energy <br/> Charging EV vehicles and vessels.
          </p>
        </div>

        {/* Box 2 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-2 text-center">
          <div className="w-full flex justify-center items-center">
            <img
              className="w-full h-auto ml-0 sm:ml-2 img-box"
              src={Ab4}
              alt=""
            />
          </div>
          <p className="font-bold"> TKS Innovations</p>
          <p className="lg:pt-2">
            Smart AI Solutions for Energy, Medical,
            <br />
            Financial sectors and Governments / Municipalities
          </p>
        </div>

        {/* Box 3 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-2 text-center">
          <div className="w-full flex justify-center items-center">
            <img
              className="w-full h-auto ml-0 sm:ml-2 img-box"
              src={Ab5}
              alt=""
            />
          </div>
          <p className="font-bold"> TKS Academy and Services</p>
          <p>Training and Consultancy Services</p>
        </div>
      </div>

      <div className="text-center mt-10 sm:flex sm:flex-col mb-9 sm:items-center">
        <img
          src={ceo}
          alt="CEO"
          className="w-64 md:w-96 lg:w-80 h-80 mx-auto mb-4 md:mb-0"
        />

        <p className="text-2xl sm:text-xl lg:text-2xl mt-2">Morten Tønnesen</p>

        <p className="text-lg md:text-xl lg:text-2xl mt-2">FOUNDER AND CEO</p>
      </div>

      {/* FOOTER */}
      <div className="">
        <div class="footer-2 bg-gray-100 mt-2 pt-6 md:pt-12 ">
          <div class="container px-4 mx-auto">
            <div class="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12">
              <div class="footer-info lg:w-1/3 md:px-4">
                <h4 class="text-[#c58f56] text-4xl font-extrabold mb-4">
                  Get in touch
                </h4>
                <p class="text-black font-base">
                  TKS Investment FZ LLC{" "}
                  <p>
                    {" "}
                    Office 207, Building 15 Dubai Internet City, Dubai UAE
                    info@tks-investment.com +971 44215888
                  </p>
                </p>
              </div>

              <div class="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
                <div class="sm:flex">
                  <div class="sm:flex-1">
                    <h6 class="lg:text-2xl text-base  font-medium text-[#c58f56] lg:font-bold uppercase mb-2">
                      About
                    </h6>
                    <div>
                      <p
                       
                        class="text-black font-base py-1 block hover:underline"
                      >
                        Company
                      </p>
                    
                      <p
                  
                        class="text-black font-base py-1 block hover:underline"
                      >
                        Team
                      </p>
                    
                    </div>
                  </div>
                  
              </div>
            </div>


              <div class="md:w-1/3 md:px-4 md:text-center mt-12 lg:mt-0">
                <h5 class="text-lg text-black font-medium mb-4">
                  Explore our site
                </h5>

                <Link to={"/App"}>
                  <button class="bg-[#c58f56] text-black hover:bg-[#c58f56] rounded py-2 px-6 md:px-12 transition-colors duration-300">
                    Explore
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div class="border-t border-solid border-gray-900 mt-4 py-4">
            <div class="container px-4 mx-auto">
              <div class="md:flex md:-mx-4 md:items-center">
                <div class="md:flex-1 md:px-4 text-center md:text-left">
                  <p class="text-black">
                    &copy; <strong>TKS</strong>
                  </p>
                </div>
                <div class="md:flex-1 md:px-4 text-center md:text-right">
                  <p
                  
                    class="py-2 px-4 text-black inline-block hover:underline"
                  >
                    Terms of Service
                  </p>
                  <p
                    href="/"
                    class="py-2 px-4 text-black inline-block hover:underline"
                  >
                    Privacy Policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
