import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import img1 from "../assets/ab1.png"
import img2 from "../assets/ab2.png"
import img3 from "../assets/ab3.png"
import img4 from "../assets/img-4.png";
import img5 from "../assets/img-2.png";
import img6 from "../assets/img-3.png";
import { IoCheckmarkSharp } from "react-icons/io5";
import tree1 from "../assets/icon-svg1.svg";
import tree2 from "../assets/icon-svg2.svg";
import tree3 from "../assets/icon-svg3.svg";
import arrow1 from "../assets/line-svg1.svg";
import arrow2 from "../assets/line-svg2.svg";
import Container from "react-bootstrap/Container";


const AboutUs = () => {
  return (
    <>
      <div>
        <Header />
        <Navbar />

        <div className="mt-28">
          <div>
            <h1 className="text-[#96AE00] text-[16px] text-center font-semibold">
              ABOUT FOR ORFARM
            </h1>
            <h1 className="text-[#96AE00] text-[50px] text-center font-bold tracking-wide mt-8 capitalize">
              Unique People
            </h1>
            <p className="text-center text-[20px] text-[#96ae00] font-semibold tracking-wide mt-8">
              Over 25 years of experience, we have crafted thousands of
              strategic discovery Your Product Is Good.
            </p>
            <div className="flex justify-center mt-10">
              <button className="px-14 py-3 rounded-md bg-[#96ae00] text-white font-semibold">
                ABOUT US
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-40">
            <div className="relative">
              <img
                src={img5}
                className="absolute top-4 left-16 hover:-translate-y-5 transition-all ease-linear duration-200"
              />
              <img
                src={img4}
                className="absolute top-10 left-40 hover:translate-y-2 transition-all ease-linear duration-200"
              />
              <img src={img6} className="absolute top-60 -right-4 " />
            </div>
            <div>
              <h1 className="w-28 rounded-md h-10 text-center p-2 bg-[#96ae00]">
                About Us
              </h1>
              <p className="text-[#2D2A6E] text-[30px] font-semibold capitalize mt-4">
                We Help your <br /> digital Business grow
              </p>
              <p className="mt-4 text-[#4d5574] text-[16px] leading-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                assumenda consequuntur explicabo error hic non, possimus, iste
                eum earum ratione, ab unde nemo nulla. Nihil, eveniet molestiae
                non totam quasi nulla cupiditate necessitatibus tempore. Saepe
                ducimus quas dicta. Incidunt animi saepe enim.
              </p>
              <div class="block space-y-4 mt-4 items-start">
                <div class="flex items-center space-x-2">
                  <IoCheckmarkSharp className="size-8 bg-[#96ae00] rounded-full text-white" />
                  <span className="text-[#4d5574]">
                    Track your daily activity.
                  </span>
                </div>
                <div class="flex items-center space-x-2">
                  <IoCheckmarkSharp className="size-8 bg-[#96ae00] rounded-full text-white" />
                  <span className="text-[#4d5574]">
                    Start a private group video call.
                  </span>
                </div>
                <div class="flex items-center space-x-2">
                  <IoCheckmarkSharp className="size-8 bg-[#96ae00] rounded-full text-white" />
                  <span className="text-[#4d5574]">
                    All the lorem ipsum generators on the Internet.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <Container className="mt-20">
            <div className="flex justify-evenly space-x-8 relative">
              <div>
                <img src={tree1} />
                <h1 className="-ml-10 mt-4 text-[20px] text-[#2d2a6e]">
                  Select Your Product
                </h1>
                <p className="-ml-10 mt-4 text-[#2d2a6e] leading-7 tracking-wide">
                  Choose from select produce to <br />
                  start. Keep, add, or remove items.
                </p>
                <div className="absolute top-20 left-[360px]">
                  <img src={arrow1} />
                </div>
              </div>
              <div>
                <img src={tree2} />
                <h1 className="-ml-10 mt-4 text-[#2d2a6e] text-[20px]">
                  Our Shop Orfarm
                </h1>
                <p className="-ml-10 mt-4 text-[#2d2a6e] leading-7 tracking-wide">
                  We provide 100+ products, provide <br /> enough nutrition for
                  your family.
                </p>
                <div className="absolute top-8 right-[450px]">
                  <img src={arrow2} />
                </div>
              </div>
              <div>
                <img src={tree3} />
                <h1 className="-ml-10 mt-4 text-[#2d2a6e] text-[20px]">
                  Delivery To Your
                </h1>
                <p className="-ml-10 mt-4 text-[#2d2a6e] leading-7 tracking-wide">
                  Delivery to your door. Up to <br /> 100km and it's completely
                  free.
                </p>
              </div>
            </div>
          </Container>

          <div className="bg-slate-300 mt-20">
            <section class="py-12">
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
                <h1 className="text-[#96ae00] text-center">~ Why Choose Us ~</h1>
                <h2 class="text-3xl font-extrabold text-gray-900">
                  Our Amazing Work
                </h2>
                <p class="mt-4 text-lg text-gray-500">
                  The liber tempor cum soluta nobis eleifend option congue
                  doming quod mazim.
                </p>

                <div class="mt-10 flex flex-col md:flex-row justify-around items-center space-y-10 md:space-y-0 md:space-x-10">
                  <div class="bg-white rounded-lg shadow-lg overflow-hidden w-80 md:w-1/3">
                    <img
                      class="w-full h-48 object-cover"
                      src={img1}
                    />
                    <div class="p-6">
                      <h3 class="text-lg leading-6 font-medium text-gray-900">
                        Who We Are
                      </h3>
                      <p class="mt-2 text-base text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit,
                        sed do eiusmod tempor labore et dolore dignissimos
                        cumque. Excepteur sint occaecat cupidatat proident.
                      </p>
                    </div>
                  </div>

                  <div class="bg-white rounded-lg shadow-lg overflow-hidden w-80 md:w-1/3">
                    <img
                      class="w-full h-48 object-cover"
                      src={img2}
                    />
                    <div class="p-6">
                      <h3 class="text-lg leading-6 font-medium text-gray-900">
                        Our Products
                      </h3>
                      <p class="mt-2 text-base text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit,
                        sed do eiusmod tempor labore et dolore dignissimos
                        cumque. Excepteur sint occaecat cupidatat proident.
                      </p>
                    </div>
                  </div>

                  <div class="bg-white rounded-lg shadow-lg overflow-hidden w-80 md:w-1/3">
                    <img
                      class="w-full h-48 object-cover"
                      src={img3}
                    />
                    <div class="p-6">
                      <h3 class="text-lg leading-6 font-medium text-gray-900">
                        How We Work
                      </h3>
                      <p class="mt-2 text-base text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit,
                        sed do eiusmod tempor labore et dolore dignissimos
                        cumque. Excepteur sint occaecat cupidatat proident.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
