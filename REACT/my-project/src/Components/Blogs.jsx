import React from "react";
import Container from "react-bootstrap/Container";
import img1 from "../assets/blog9-min-500x321 (1).jpg";
import img2 from "../assets/blog7-min-500x321 (1).jpg";
import img3 from "../assets/blog6-min-500x321 (1).jpg";
import Header from "./Header";
import Navbar from "./Navbar";
import img11 from "../assets/icon2.svg";
import img12 from "../assets/icon3.svg";
import img13 from "../assets/icon4.svg";
import img14 from "../assets/icon5.svg";
import { Footer1 } from "./Blog1";

const Blogs = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Container>
        <div className="mt-20 mb-20">
          <div className="grid grid-cols-3 ml-10">
            <div class="main-overlay">
              <img src={img1} className="w-fit" />
              <div class="overlay"></div>
              <div className="absolute top-20 text-center space-x-6">
                <p className="text-white font-semibold space-x-4 uppercase">
                  PhotoGraphy
                  <span className="ml-4">ADMIN</span>
                  <span>OCTOBER 18 ,2020</span>
                </p>
                <h1 className="mt-4 tracking-wide text-center text-white font-semibold text-[20px] leading-7">
                  Transition Your favorite Looks <br /> Into Fall France
                </h1>
                <h2 className="mt-4 text-center text-white font-bold uppercase">
                  Continue reading...
                </h2>
              </div>
            </div>
            <div class="main-overlay">
              <img src={img2} className="w-fit" />
              <div class="overlay"></div>
              <div className="absolute top-20 text-center space-x-6">
                <p className="text-white font-semibold space-x-4 uppercase">
                  SHOPPING
                  <span className="ml-4">ADMIN</span>
                  <span>OCTOBER 18 ,2020</span>
                </p>
                <h1 className="mt-4 tracking-wide text-center text-white font-semibold text-[20px] leading-7">
                  Perfect Quality Reasonable Price <br /> For Your Family
                </h1>
                <h2 className="mt-4 text-center text-white font-bold uppercase">
                  Continue reading...
                </h2>
              </div>
            </div>
            <div class="main-overlay">
              <img src={img3} className="w-fit" />
              <div class="overlay"></div>
              <div className="absolute top-20 text-center space-x-6">
                <p className="text-white font-semibold space-x-4 uppercase">
                  BLOG
                  <span className="ml-4">ADMIN</span>
                  <span>OCTOBER 18 ,2020</span>
                </p>
                <h1 className="mt-4 tracking-wide text-center text-white font-semibold text-[20px] leading-7">
                  Popular Reasons You Must Drinks <br /> Juice Everyday
                </h1>
                <h2 className="mt-4 text-center text-white font-bold uppercase">
                  Continue reading...
                </h2>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="mb-20 ml-10">
        <div class="main-overlay h-screen w-[1420px]">
          <img src={img1} className="h-screen w-screen" />
          <div class="overlay"></div>
        </div>
        <div>
          <p className="text-[#96ae00] mt-4 font-semibold space-x-4 uppercase">
            PhotoGraphy
            <span className="ml-4 text-[#79819c]">ADMIN</span>
            <span className="text-[#79819c]">OCTOBER 18 ,2020</span>
          </p>
          <h1 className="mt-3 tracking-wide text-[#2d2a6e] text-[24px] leading-7">
            Transition Your Favorite Looks into Fall France
          </h1>
          <p className="mt-3 text-[#4d5574] tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
            maiores inventore vel eius ipsam magni nisi eum quaerat pariatur
            deserunt?
          </p>
          <h2 className="mt-3 text-[#96ae00] font-bold uppercase">
            Continue reading...
          </h2>
        </div>
      </div>

      <Container>
        <div className="flex justify-center items-center">
          <div className="mb-40">
            <img
              src={img2}
              className="w-[450px] h-[300px] rounded-[12px] hover:scale-110 transition-all ease-linear duration-200"
            />
            <div className="flex">
              <h2 className="mt-4 text-[#96ae00] uppercase font-bold text-[12px]">
                Shopping
              </h2>
              <span className="mt-[20px] ml-4 text-[#79819c] uppercase font-bold text-[12px]">
                ADMIN
              </span>
              <p className="mt-[20px] ml-4 text-[#79819c] uppercase font-bold text-[12px] ">
                OCTOBER 18, 2022
              </p>
            </div>
            <h1 className="text-[#2D2A6E] font-medium text-[18px] tracking-wide capitalize mt-2 leading-8">
              Perfect Quality Reasonable Price For Your Family
            </h1>
            <p className="mt-2 text-[#79819c] w-[450px] capitalize leading-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
              esse nemo ad eveniet dolorum velit officiis illo cupiditate neque,
              animi nobis iste ullam...
            </p>
            <h1 className="mt-4 text-[#96ae00] text-[18px] uppercase">
              Continue reading
            </h1>
          </div>
        </div>
      </Container>

      <>
        <div className="mb-16">
          <div className="flex justify-around items-center">
            <img src={img11} />
            <img src={img12} />
            <img src={img13} />
            <img src={img14} />
            <img src={img12} />
          </div>
          <div className="flex justify-around items-center mt-10 text-[#b0afcc]">
            <h1>Across West & East India</h1>
            <h1>100% Secure Payment</h1>
            <h1>Add Multi-Buy Discount</h1>
            <h1>Dedicated 24/7 Support</h1>
            <h1>From Handpicked Sellers</h1>
          </div>
        </div>
      </>

      <Footer1 />
    </div>
  );
};

export default Blogs;
