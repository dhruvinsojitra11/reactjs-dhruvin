import React from "react";
import img1 from "../assets/logo.png";
import img2 from "../assets/SVG1.png";
import img3 from "../assets/vector.svg";
import img4 from "../assets/User.png";
import img5 from "../assets/Pin.png";
import img6 from "../assets/Black-Men.jpeg";
import img7 from "../assets/Black-Girl.jpeg";
import img8 from "../assets/White-girl.jpeg";
import img9 from "../assets/White-Men.jpeg";
import img10 from "../assets/Birthday-Girl.jpeg";
import img11 from "../assets/HotWhite-Girl.jpeg";
import img12 from "../assets/div.main.png";
import img13 from "../assets/div.main1.png";
import img14 from "../assets/div.main2.png";
import Footer from "./Footer";

const Header = () => {
  return (
    <>
      <div>
        <nav className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-40 lg:py-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <img src={img1} />
              </div>
              <div className="hidden items-center md:flex space-x-8">
                <a href="#home" className="text-[#1473E6] font-semibold">
                  Home
                </a>
                <a href="#about" className="text-[#7E7E7E] font-semibold">
                  About
                </a>
                <a href="#service" className="text-[#7E7E7E] font-semibold">
                  Service
                </a>
                <a href="#Protfolio" className="text-[#7E7E7E] font-semibold">
                  Portfolio
                </a>
                <a href="#blog" className="text-[#7E7E7E] font-semibold">
                  Blog
                </a>
                <a
                  href="#footer"
                  className="text-[#7E7E7E] px-7 py-1.5 rounded-full border-2 border-[#7E7E7E]"
                >
                  Contact
                </a>
              </div>
              <div className="md:hidden flex items-center">
                <button
                  id="menu-btn"
                  className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div id="mobile-menu" className="md:hidden">
          <a
            href="#home"
            className="block px-4 py-2 text-sm text-[#7e7e7e] font-semibold hover:bg-gray-100"
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-4 py-2 text-sm text-[#7e7e7e] font-semibold hover:bg-gray-100"
          >
            About
          </a>
          <a
            href="#service"
            className="block px-4 py-2 text-sm text-[#7e7e7e] font-semibold hover:bg-gray-100"
          >
            Service
          </a>
          <a
            href="#Protfolio"
            className="block px-4 py-2 text-sm text-[#7e7e7e] font-semibold hover:bg-gray-100"
          >
            Portfolio
          </a>
          <a
            href="#blog"
            className="block px-4 py-2 text-sm text-[#7e7e7e] font-semibold hover:bg-gray-100"
          >
            Blog
          </a>
          <a
            href="#Contact"
            className="block px-4 py-2 text-sm text-[#7e7e7e] font-semibold hover:bg-gray-100"
          >
            Contact
          </a>
        </div>
      </div>

{/* Home Page */}


      <div className="grid lg:grid-cols-2 grid-cols-1" id="home">
        <div className="lg:p-56 sm:p-4">
          <h1 className="text-[#0F172A] text-[50px] w-[400px] font-extrabold">
            Building digital produts, brands
          </h1>
          <span className="text-[#1473E6] text-[50px] underline font-extrabold">
            experience.
          </span>
          <p className="text-[#767676] leading-6 mt-4 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            consequuntur.
          </p>
          <button className="border-2 border-[#7e7e7e]  text-[#0F172A] font-bold rounded-full px-8 py-2">
            Get Started
          </button>
        </div>
        <div className="relative">
          <div className=""></div>
        </div>
      </div>

{/* About Page */}

      <div className="grid md:grid-cols-2 grid-cols-1" id="about">
        <div>
          <img className="img1" />
        </div>
        <div className="p-10 mt-16">
          <h1 className="text-[#0F172A] text-[40px] font-bold">
            We Are Experts <br /> In Our Field.
          </h1>
          <h3 className="text-[#767676] mt-4 mb-4 text-[20px] leading-7">
            My digital company of professionals has br been developing <br />
            products for 15 years
          </h3>
          <p className="text-[#767676] w-[450px]">
            Ultrices sagittis feugiat pulvinar faucibus neque pretium mentum.
            Convallis egestas rhoncus iaculis laoreet feugiat orci amet turpis
            sagittis.Ultrices sagittis feugiat pulvinar faucibus neque pretium
            elementum. Convallis egestas rhoncus iaculis laoreet feugiat orci
            amet turpis sagittis.
          </p>
          <button className="border-2 border-[#7E7E7E] rounded-full px-6 py-2 mt-6 text-[#0F172A] font-bold">
            Download CV
          </button>
        </div>
      </div>

{/* Service Page */}

      <div className="mt-10 bg-slate-50 w-full h-[600px]" id="service">
        <div className="pt-10">
          <h1 className="text-[#0F172A] font-bold text-[40px] text-center">
            My Awesome Services
          </h1>
          <p className="text-center text-[#767676] mt-4 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            laboriosam asperiores quo <br /> perferendis quia, in vel corrupti
            molestiae recusandae mollitia.
          </p>
        </div>
        <div className="flex justify-evenly items-center mt-10 flex-wrap gap-6">
          <div className="w-[250px] h-[200px] bg-white p-10 rounded-md">
            <img src={img2} className="size-10" />
            <h1 className="mt-4 font-bold text-[#0F172A]">UI/UX Design</h1>
          </div>
          <div className="w-[250px] h-[200px] bg-white p-10 rounded-md">
            <img src={img3} className="size-10" />
            <h1 className="mt-4 font-bold text-[#0F172A]">Graphic Design</h1>
          </div>
          <div className="w-[250px] h-[200px] bg-white p-10 rounded-md">
            <img src={img5} className="size-10" />
            <h1 className="mt-4 font-bold text-[#0F172A]">Product Design</h1>
          </div>
          <div className="w-[250px] h-[200px] bg-white p-10 rounded-md">
            <img src={img4} className="size-10" />
            <h1 className="mt-4 font-bold text-[#0F172A]">Brand Identity</h1>
          </div>
        </div>
      </div>


{/* Protfolio Page */}

      <div className="bg-[#ffffff] w-full h-[600px]" id="Protfolio">
        <div className="pt-10">
          <h1 className="text-[#0F172A] font-bold text-[40px] text-center">
            Our Selected Projects
          </h1>
          <p className="text-center text-[#767676] mt-4 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            laboriosam asperiores quo <br /> perferendis quia, in vel corrupti
            molestiae recusandae mollitia.
          </p>
        </div>
        <div className="grid gap-y-4">
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <img src={img6} className="size-80 rounded-md " />
            <img src={img7} className="size-80 rounded-md" />
          </div>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <img src={img8} className="size-80 rounded-md" />
            <img src={img9} className="size-80 rounded-md" />
          </div>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <img src={img10} className="size-80 rounded-md" />
            <img src={img11} className="size-80 rounded-md" />
          </div>
        </div>

{/* Blog Page */}


        <div className="mt-10 bg-white w-full h-[650px]" id="blog">
          <div className="pt-10">
            <h1 className="text-[#0F172A] font-bold text-[40px] text-center">
              Latest Blogs
            </h1>
            <p className="text-center text-[#767676] mt-4 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              laboriosam asperiores quo <br /> perferendis quia, in vel corrupti
              molestiae recusandae mollitia.
            </p>
          </div>
          <div className="flex justify-evenly items-center flex-wrap mt-10 gap-4">
            <div class="main-overlay">
              <img src={img12} className="w-fit" />
              <div class="overlay"></div>
              <div className="absolute bottom-0 p-6">
                <h1 className="text-[#EEEEEE]">July 01, 2021</h1>
                <h2 className="text-white font-semibold text-[22px] tracking-wide">
                  World’s most famous developers and designers
                </h2>
              </div>
            </div>
            <div class="main-overlay">
              <img src={img13} className="w-fit" />
              <div class="overlay"></div>
              <div className="absolute bottom-0 p-6">
                <h1 className="text-[#EEEEEE]">June 22, 2021</h1>
                <h2 className="text-white font-semibold text-[22px] tracking-wide">
                  Learn About Wireframes Before Hiring a Web Developer
                </h2>
              </div>
            </div>
            <div class="main-overlay">
              <img src={img14} className="w-fit" />
              <div class="overlay"></div>
              <div className="absolute bottom-0 p-6">
                <h1 className="text-[#EEEEEE]">April 07, 2021</h1>
                <h2 className="text-white font-semibold text-[22px] tracking-wide">
                  7 Ways to Optimize Your WordPress Website7 Ways .
                </h2>
              </div>
            </div>
          </div>
          <div class="pagination flex justify-center items-center mt-10">
            <div>
              <span>&laquo;</span>
            </div>
            <div>
              <span>1</span>
            </div>
            <div>
              <span>2</span>
            </div>
            <div>
              <span>3</span>
            </div>
            <div>
              <span>4</span>
            </div>
            <div>
              <span>&raquo;</span>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Header;
