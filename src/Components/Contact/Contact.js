import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Ab1 from "../../Images/bg10.png";
import { Link } from "react-router-dom";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const Sendmail = () => {
    if (name.trim() !== "" && email.trim() !== "" && message.trim() !== "") {
      alert("Message sent successfully!");
    } else {
      alert("Please fill in all fields before sending the message.");
    }
  };

  return (
    <div style={{ marginTop: "100px", overflow: "hidden" }}>
      <Navbar />
      <div className="relative max-w-full overflow-hidden">
        <img className="w-full h-auto max-h-48 object-cover" src={Ab1} alt="" />
        <div className="absolute inset-0 flex lg:mt-20 md:mt-5">
          <div className="bg-[#c58f56] md:w-auto h-16 lg:w-52 w-52 mt-4 flex items-center justify-center rounded-br-3xl rounded-tl-3xl p-2 md:ml-8 md:mt-5 md:absolute md:inset-x-0">
            <p className="text-center text-[#3c3c3c]  font-bold font-serif text-1xl md:text-2xl ">
              CONTACT US
            </p>
          </div>
        </div>
      </div>

      <section class="text-gray-600 body-font bg-gray-100 mt-5">
        <div
          class="container flex flex-col md:flex-row lg:max-w-5xl w-full px-5 py-12 md:py-24 mx-auto section"
          id="contact-form"
        >
          <div class="md:w-1/3 w-full">
            <h3 class="text-4xl text-[#c58f56] sm:text-4xl font-bold title-font mb-4">
              Get In Touch
            </h3>
            <p class="leading-relaxed text-base text-gray-900">
              <p>
                TKS Investment is the Value Added Reseller and Local Business
                Partner to Market leading Norwegian and Australian IT/AI and
                Green Technology solutions providers.
              </p>
              <br />
              <p>
                With over 30 years experience , track record and net work, we
                specialise in Energy- ,Oil&Gas-, Maritime, Government secors in
                the Middle East-, Africa-, India- and Souh East Asian Markets.
              </p>
            </p>
            <p class="leading-relaxed text-base text-gray-900 mt-8">
              We use VeilMail.io to protect your email address from
              spam.Innovated in Norway - brought to you by TKS ! Operational
              headquarter in DIC Dubai, UA
            </p>
            <span class="inline-flex mt-6 justify-center sm:justify-start"></span>
          </div>
          <div class="md:w-2/3 w-full mt-10 md:mt-0 md:pl-28">
            <h3 class="text-4xl text-[#c58f56] sm:text-4xl font-bold title-font mb-4">
              Contact Us
            </h3>
            <form
              method="post"
              id="submit-contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                Sendmail();
              }}
            >
              <div class="p-2 w-full">
                <div class="relative">
                  <label
                    for="name"
                    class="leading-7 py-4 text-lg text-gray-900"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    class="w-full bg-white rounded border border-gray-400 focus:border-[#c58f56] focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label
                    for="email"
                    class="leading-7 py-4 text-lg text-gray-900"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    class="w-full bg-white rounded border border-gray-400 focus:border-[#c58f56] focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label
                    for="message"
                    class="leading-7 py-4 text-lg text-gray-900"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    class="w-full bg-white rounded border border-gray-400 focus:border-[#c58f56] focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out "
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button
                  onClick={Sendmail}
                  type=""
                  class="flex text-white bg-gray-900 border-0 py-4 px-6 focus:outline-none hover:bg-[#c58f56] rounded text-base font-bold shadow-lg mx-0 flex-col text-center"
                >
                  Send Message ✉
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

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
                    <h6 class="text-base font-medium text-black uppercase mb-2">
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
                        Culture
                      </a>
                      <a
                        href="/"
                        class="text-black font-base py-1 block hover:underline"
                      >
                        Team
                      </a>
                      <a
                        href="/"
                        class="text-black font-base py-1 block hover:underline"
                      >
                        Careers
                      </a>
                    </div>
                  </div>
                  <div class="sm:flex-1 mt-4 sm:mt-0">
                  <h6 class="text-base font-medium text-black uppercase mb-2">
                    What we offer
                  </h6>
                  <div>
                    <a
                      href="/"
                      class="text-black font-base py-1 block hover:underline"
                    >
                      Competitive Salary
                    </a>
                    <a
                      href="/"
                      class="text-black font-base py-1 block hover:underline"
                    >
                    Stock Options or Equi
                    </a>
                    <a
                      href="/"
                      class="text-black font-base py-1 block hover:underline"
                    >
                     Health Insurance
                    </a>
                    <a
                      href="/"
                      class="text-black font-base py-1 block hover:underline"
                    >
                    Flexible Work Arrangements
                    </a>
                    <a
                      href="/"
                      class="text-black font-base py-1 block hover:underline"
                    >
                  Professional Development
                    </a>
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
export default Contact;
