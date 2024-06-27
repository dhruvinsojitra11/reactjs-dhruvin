import React from "react";
import phone from "../assets/Phone.svg";
import email from "../assets/Email.svg";
import location from "../assets/location.svg";

const Footer = () => {
  return (
    <>
      <body className="bg-gray-100 mt-20" id="footer">
        <footer className="bg-[#f5f5f5] p-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
            <div className="space-y-8">
              <h2 className="text-[50px] font-bold">
                Let's discuss <br /> your project
              </h2>
              <div className="flex items-center space-x-2">
                <img src={phone} />
                <span className="text-[#767676] text-[18px]">
                  +44 1632 967704
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <img src={email} />
                <span className="text-[#767676] text-[18px]">
                  your@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <img src={location} />
                <span className="text-[#767676] text-[18px]">
                  245 King Street, Touterie Victoria <br /> 8520 Australia
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-[25px] w-[500px] h-[100px] text-[#767676] leading-[50px]">
                I'm always open to discussing product <br />
                <span className="text-[#0F172A] font-semibold text-[25px]">
                  design work or partnerships.
                </span>
              </h3>
              <form className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <label
                    for="name"
                    className="text-[16px] leading-6 font-medium"
                  >
                    Name*
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="p-2 border-b-2 border-gray-300 bg-[#f5f5f5] outline-none"
                    required
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="flex flex-row space-x-20 pt-12 pb-20">
                  <div className="flex flex-col space-y-2">
                    <label
                      for="email"
                      className="text-[16px] leading-6 font-medium"
                    >
                      Email*
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="p-2 border-b-2 border-gray-300 outline-none bg-[#f5f5f5]"
                      required
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label
                      for="subject"
                      className="text-[16px] leading-6 font-medium"
                    >
                      Subject*
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className="p-2 border-b-2 border-gray-300 outline-none bg-[#f5f5f5]"
                      required
                      placeholder="Enter Your Subject "
                    />
                  </div>
                </div>
                <hr className="border-b-2 border-[#CBD3D9]" />
                <button
                  type="submit"
                  className="w-[135px] h-[48px] text-[#0F172A] leading-8 text-[18px] border-2 border-[#7E7E7E] rounded-md"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </footer>
        <div class="copyright">
          <p>
            Copyright &copy; dhruvin <i class="fa-solid fa-heart"></i>{" "}
      
          </p>
        </div>
      </body>
    </>
  );
};

export default Footer;
