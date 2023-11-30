import Navbar from "../Navbar/Navbar";
import Ab1 from "../../Images/bg10.png";

// import S1 from "../../Images/s1.jpg";
// import S2 from "../../Images/s2.jpg";
// import S3 from "../../Images/s3.jpg";
import "../Main.css";
import { Link } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faDesktop,
//   faKeyboard,
//   faMagnifyingGlass,
// } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div style={{ marginTop: "100px", overflow: "hidden" }}>
      <Navbar />
      <div className="relative max-w-full overflow-hidden">
        <img className="w-full h-auto max-h-48 object-cover" src={Ab1} alt="" />
        <div className="absolute inset-0 flex lg:mt-20 md:mt-5">
          <div className="bg-[#c58f56] md:w-auto h-16 lg:w-52 w-52 mt-4 flex items-center justify-center rounded-br-3xl rounded-tl-3xl p-2 md:ml-8 md:mt-5 md:absolute md:inset-x-0">
            <p className="text-center text-[#3c3c3c]  font-bold font-serif text-1xl md:text-2xl ">
              About US
            </p>
          </div>
        </div>
      </div>

      <div class="container mx-auto mt-8 p-8 bg-white shadow-lg rounded-lg">
        <h2 class="text-3xl font-bold text-[#c58f56]  mb-4">Our Mission</h2>
        <p class="text-base leading-relaxed font-serif">
          TKS Investment is the official Value-Added Reseller and Local Partner
          to Market-leading Norwegian , Malaysian and Australian IT /AI and Green Technology
          companies specialised in Energy, Transport, and Maritime; delivering
          proven solutions to Governments, National and Private Companies in the
          Middle East, Africa and Asia markets.
          <br />{" "}
          <p className="mt-4">
            Driven by passion and experience - armed with working solutions -
            supported by Norwegian finance and values We are In IT to Change IT:
            Think Smart - Think Science - Think People Think Green
          </p>
          <h2 class="text-3xl font-extrabold  mt-7 mb-4 text-[#c58f56] ">
            <u> THINK SMART - THINK SCIENCE – THINK PEOPLE</u>
          </h2>
          <p className="font-normal font-serif  mt-2">
            {" "}
            Backed by more than 30 years of experience in the Energy, Maritime
            and IT sectors in Norway, Middle East, Asia, Africa and globally,
            our strategic and hands-on services, unique patents and solutions
            meet the needs of all types and sizes of clients - from small
            startups to large Co-operations and governments - and deliver lasting
            changes with measurable growth and profit. Supporting IT and
            Consultancy companies/SMEs for Energy, Transportation, and Maritime
            Sectors… ...Towards the Green Shift in the ME, Africa and Asia.
            {/* <div className="text-base font-serif m-3">
              <li>Sales Channel Management</li>
              <li>Marketing and Board-level Communications</li>
              <li>Strategic and Tactical Planning</li>
              <li>International Business Development Support</li>
              <li>Sales and Marketing Execution and Leadership</li>
              <li>Technology Commercialisation Software and IPO’s</li>
              <li>Go-To-Market Strategy and Execution Support</li>
              <li>Brand Management</li>
              <li>Cross-Cultural Team Leadership Support</li>
              <li>Communications, Public Speaking</li>
              <li>Sales Excellence Implementation</li>
            </div> */}
          </p>
        </p>
        <h2 class="text-3xl underline-offset-8  font-bold text-[#c58f56] mt-4  mb-4">
          <u>
            {" "}
            Pioneering the Future: TKS Investment Launches in Dubai with
            Visionary Leadership from Mr. Morten Tønnesen
          </u>
        </h2>
        <p class="text-base leading-relaxed font-serif">
          In a groundbreaking move set to reshape the landscape of Energy, AI,
          and Green Technology, TKS Investment has officially unveiled it’s
          presence in Dubai. With the resounding slogan{" "}
          <b>"Think Smart, Think Science".</b> TKS Investment is poised to lead
          the charge in transforming the Energy, Transport,  Maritime, Finance and Public
          sectors across the Middle East, Africa, and Asia, under the astute
          guidance of its CEO and Chairman, Mr.Morten Tønnesen.
        </p>

        {/* <h2 class="text-3xl underline-offset-8  font-bold text-[#c58f56] mt-4  mb-4">
          <u>A Fusion of Passion, Experience, and Cutting-Edge Solutions</u>
        </h2>
        <p class="text-base leading-relaxed font-serif">
          Mr. Morten Tønnesen, is a visionary leader with over 30 years of
          experience in the energy, maritime, and IT sectors. His unrelenting
          passion and expertise have been instrumental in driving market growth,
          technology commercialisation, and strategic planning for his clients
          and partners.
          <p className="mt-4">
            As the CEO of TKS Investment FZ LLC, Mr. Tønnesen has positioned the
            company as a value-added reseller and local service partner for
            Norwegian, Malaysian and Australian IT, AI, and green tech companies
            in the Middle East, Africa, and Asia. Additionally, he serves as the
            Managing Director and Senior Business Development Consultant of
            Tønnesen Consulting, a consultancy and cost transformation service
            provider, extending his influence on diverse industries.
          </p>
          <p className="mt-4">
            Mr. Tønnesen’s core competencies encompass sales and marketing
            execution and leadership, cross-cultural team leadership,
            communications, public speaking, and a dedication to sales
            excellence in practice. He boasts a proven track record of
            delivering successful outcomes for clients and partners, including
            securing large contracts, increasing user retention, facilitating
            technology adoption, and enabling innovation.
          </p>{" "}
          <p className="mt-4">
            <b> His mission</b> is clear - to help clients and partners achieve
            their goals and transform their businesses with smart and
            sustainable solutions. His motto, "Think smart, think science."
            resonates throughout TKS Investment, encapsulating their commitment
            to pioneering innovation and groundbreaking solutions.
          </p>
        </p> */}

        <h2 class="text-3xl underline-offset-8  font-bold text-[#c58f56] mt-4  mb-4">
          <u>A Triumph of Innovation and Proven Solutions</u>
        </h2>
        <p class="text-base leading-relaxed font-serif">
          Under the visionary leadership of Mr. Morten Tønnesen, TKS Investment
          is the epicenter of innovation, resonating with the echoes of
          Norwegian, Australian, and Malaysian ingenuity.
          <p className="mt-4">
            {" "}
            At its core, the company aims to support the evolution of Smart
            Cities and drive the Green Shift in Energy sectors across the Middle
            East, Africa, India, and South East Asia. TKS Investment comprises
            three dynamic wings, each guided by visionaries in their respective
            fields:
          </p>
        </p>

        <h2 class="text-2xl underline-offset-8  font-bold text-[#c58f56] mt-4  mb-4">
          <u> TKS Innovations: Pioneering Smart AI</u>
        </h2>
        <p class="text-base leading-relaxed font-serif">
          Under Mr. Tønnesen leadership, TKS Innovations is the hub of
          cutting-edge Artificial Intelligence, <br /> crafting intelligent
          solutions that revolutionize industries.
        </p>

        <h2 class="text-2xl underline-offset-8  font-bold text-[#c58f56] mt-4  mb-4">
          <u>
            TKS Integrated Technologies: Leading EV Technologies and Sustainable
            Energy
          </u>
        </h2>
        <p class="text-base leading-relaxed font-serif">
          TKS Integrated Technologies, under the astute guidance of Dr. Chris
          Howells, charts a path to the future of Electric Vehicle technologies
          and sustainable energy, positioning them as a transformative force in
          the industry
        </p>

        <h2 class="text-2xl underline-offset-8  font-bold text-[#c58f56] mt-4  mb-4">
          <u>TKS Academy & Services: Shaping the Future of Electric Mobility</u>
        </h2>
        <p class="text-base leading-relaxed font-serif">
          TKS Academy & Services, is offering a comprehensive approach to the
          academy, committed to equipping the future generation of EV
          technicians, technologists and consultants with necessary tools and
          resources, the academy will play a pivotal role in championing and
          ensuring the maintenance and serviceability of tomorrow’s Electrical
          Vehicle technology, the academy will also be a dynamic hub for
          empowering individuals with a diverse range of business management and
          leadership courses to the ever evolving business landscape.
          <p className="mt-4">
            In the grand tapestry of technological innovation and sustainable
            solutions, TKS Investment,stands as a beacon of hope and progress. With Dubai as its
            launchpad, the company is set to be a catalyst for change ushering
            in a future where smart thinking and the power of science converge
            to create a sustainable and thriving world. Think smart, think
            science – with TKS Investment, the future has never looked brighter.
          </p>
        </p>
       
        </div>

      <div class="bg-gray-300 p-8 text-center mt-8">
        <Link to="/contact">
          <h2 class="text-2xl font-bold">Contact Us</h2>
        </Link>
        <p class="text-lg">
          Have questions or inquiries? Feel free to reach out to us!
        </p>
        <a href="/contact">
        <button class="mt-4 bg-[#c58f56]  text-white px-6 py-2 rounded-full hover:bg-[#c58f56cb]">
          Contact
        </button>
        </a>
      </div>

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
                    <h6 class="text-2xl font-black  uppercase mb-2">
                      About
                    </h6>
                    <div>
                      <a
                        href="/"
                        class="text-black font-base py-1 block hover:underline"
                      >
                        Company
                      </a>
                    
                      <a
                        href="/"
                        class="text-black font-base py-1 block hover:underline"
                      >
                        Team
                      </a>
                      
                    </div>
                  </div>
                </div>
              </div>

              <div class="md:w-1/3 md:px-4 md:text-center mt-12 lg:mt-0">
                <h5 class=" text-black mb-4 text-lg font-black">
                  Explore our site
                </h5>
                <button class="bg-[#c58f56] text-black hover:bg-[#c58f56] rounded py-2 px-6 md:px-12 transition-colors duration-300">
                  Explore
                </button>
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
                  <a
                    href="/"
                    class="py-2 px-4 text-black inline-block hover:underline"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="/"
                    class="py-2 px-4 text-black inline-block hover:underline"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
