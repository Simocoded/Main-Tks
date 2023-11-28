import "../../Components/Main.css";
function Footer() {
  return (
    <div className="foot">
      <div class="footer-2 bg-gray-100 pt-6 md:pt-12">
        <div class="container px-4 mx-auto">
          <div class="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12">
            <div class="footer-info lg:w-1/3 md:px-4">
              <h4 class="text-black text-4xl font-extrabold mb-4">Get in touch</h4>
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
  );
}

export default Footer;
