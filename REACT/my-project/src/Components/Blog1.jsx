import React from "react";
import Container from "react-bootstrap/Container";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaPinterest } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import img1 from "../assets/payment.png";

const Blog = ({ img, detail, data }) => {
  return (
    <>
      <Container>
        <div className="mb-40">
          <img
            src={img}
            className="w-[450px] h-[300px] rounded-[12px] hover:scale-110 transition-all ease-linear duration-300"
          />
          <div className="flex">
            <h2 className="mt-4 text-[#96ae00] uppercase font-bold text-[12px]">
              {detail}
            </h2>
            <span className="mt-[20px] ml-4 text-[#79819c] uppercase font-bold text-[12px]">
              ADMIN
            </span>
            <p className="mt-[20px] ml-4 text-[#79819c] uppercase font-bold text-[12px] ">
              OCTOBER 18, 2022
            </p>
          </div>
          <h1 className="text-[#2D2A6E] font-medium text-[20px] tracking-wide capitalize mt-2 leading-8">
            {data}
          </h1>
          <p className="mt-2 text-[#79819c] w-[450px] capitalize leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod esse
            nemo ad eveniet dolorum velit officiis illo cupiditate neque, animi
            nobis iste ullam...
          </p>
          <h1 className="mt-4 text-[#96ae00] text-[18px] uppercase">
            Continue reading
          </h1>
        </div>  
      </Container>
    </>
  );
};

export const Blog2 = ({ img, name }) => {
  return (
    <>
      <Container>
        <div className="mb-16">
          <div className="flex justify-center items-center">
            <img src={img} />
          </div>
        </div>
        <h1 className="text-[#b0afcc] -mt-5 ml-8">{name}</h1>
      </Container>
    </>
  );
};

export const Footer1 = () => {
  return (
    <>
      <body className="bg-gray-900 text-white mt-8">
        <footer className="bg-indigo-900 text-white py-8">
          <hr className="mb-20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 -ml-24">
              <div>
                <h2 className="font-medium mb-4">LET US HELP YOU</h2>
                <p className="text-[#b0afcc] text-[14px] leading-7">
                  If you have any question, please <br /> contact us at:
                  <span>
                    <a
                      href="mailto:support@example.com"
                      className="text-green-400"
                    >
                      &nbsp; support@example.com
                    </a>
                  </span>
                </p>
                <div className="mt-4">
                  <h1 className="font-medium text-[#b0afcc]">Social Media:</h1>
                  <div className="flex mt-3 space-x-3">
                    <a
                      href="#"
                      className="size-8 rounded-full bg-white text-black flex justify-center items-center"
                    >
                      <FaFacebookF className="text-[20px] hover:text-sky-500 transition-all ease-linear duration-200" />
                    </a>
                    <a
                      href="#"
                      className="size-8 rounded-full bg-white text-black flex justify-center items-center"
                    >
                      <FaTwitter className="text-[20px] hover:text-sky-500 transition-all ease-linear duration-200" />
                    </a>
                    <a
                      href="#"
                      className="size-8 rounded-full bg-white text-black flex justify-center items-center"
                    >
                      <TfiYoutube className="text-[20px] hover:text-sky-500 transition-all ease-linear duration-200" />
                    </a>
                    <a
                      href="#"
                      className="size-8 rounded-full bg-white text-black flex justify-center items-center"
                    >
                      <FaPinterest className="text-[20px] hover:text-sky-500 transition-all ease-linear duration-200" />
                    </a>
                    <a
                      href="#"
                      className="size-8 rounded-full bg-white text-black flex justify-center items-center"
                    >
                      <FaSkype className="text-[20px] hover:text-sky-500 transition-all ease-linear duration-200" />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="font-medium text-sm mb-4">
                  LOOKING FOR ORFARM?
                </h2>
                <div className="text-[#b0afcc] text-[14px] leading-6">
                  <p className="leading-7 text-[14px]">
                    68 St. Vicent Place, Glasgow, Greater Newyork NH2012, UK.
                  </p>
                  <p className="mt-4">
                    Monday – Friday:{" "}
                    <span className="text-white"> &nbsp;8:10 AM – 6:10 PM</span>
                  </p>
                  <p>
                    Saturday:{" "}
                    <span className="text-white">
                      {" "}
                      &nbsp;10:10 AM – 06:10 PM
                    </span>{" "}
                  </p>
                  <p>
                    Sunday: <span className="text-white"> &nbsp; Close</span>
                  </p>
                </div>
              </div>
              <div>
                <h2 className="font-medium text-sm mb-4">HOT CATEGORIES</h2>
                <ul className="leading-9   text-[14px] text-[#b0afcc]">
                  <li>Fruits & Vegetables</li>
                  <li>Dairy Products</li>
                  <li>Package Foods</li>
                  <li>Beverage</li>
                  <li>Health & Wellness</li>
                </ul>
              </div>
              <div>
                <h2 className="font-medium mb-4">OUR NEWSLETTER</h2>
                <p className="text-[16px] leading-6">
                  Subscribe to the Orfarm mailing list to receive updates.
                </p>

                <div className="flex bg-white rounded-sm overflow-hidden shadow-lg w-[350px] h-[50px] mt-3">
                  <div className="flex items-center px-2">
                    <MdOutlineEmail className="size-7 text-gray-300" />
                  </div>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-64 p-2 text-gray-700 focus:outline-none text-[14px]"
                  />
                  <button className="bg-[#96AE00] text-white px-2 py-2 hover:bg-green-600 focus:outline-none">
                    SUBSCRIBE
                  </button>
                </div>

                <div className="mt-2">
                  <span className="text-sm">
                    <input type="checkbox" className="size-4 mt-3" /> &nbsp; I
                    accept terms & conditions & privacy.
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-indigo-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
              <p className="text-[#b0afcc]">
                Copyright © ORFARM all rights reserved. Powered by &nbsp;
                <a href="#" className="text-green-400">
                  Blueskytechco
                </a>
              </p>
              <div className="mt-4 md:mt-0">
                <img src={img1} className="h-8" />
              </div>
            </div>
          </div>
        </footer>
      </body>
    </>
  );
};

export default Blog;
