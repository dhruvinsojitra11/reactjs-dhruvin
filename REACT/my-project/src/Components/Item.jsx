import React from "react";
import img1 from "../assets/banner42.jpg";
import img2 from "../assets/banner43.jpg";
import img3 from "../assets/icon-img4 (2).svg";
import img4 from "../assets/img-revo12.png";
import img5 from "../assets/bkg-tes1.png";
import img6 from "../assets/bkg-tes2.png";
import img7 from "../assets/author1.svg";
import img8 from "../assets/author2.svg";
import img9 from "../assets/author3.svg";
import { CiStar } from "react-icons/ci";

const Item = () => {
  return (
    <>
      <div className="mt-20 relative">
        <div className="grid grid-cols-2">
          <img src={img1} className="h-[450px]" />
          <div className="absolute top-36 left-48">
            <p className=" text-[#f82121] text-[20px]">WEEKEND DEALS </p>
            <h1 className="text-[#2d2a6e] text-4xl mt-3 font-medium">
              Fresh Food <br /> Restore Health
            </h1>
            <button className="w-40 h-10 rounded-full t-4 text-[#2d2a6e] text-[16px] uppercase">
              Shop Now
            </button>
          </div>
          <img src={img2} className="h-[450px] " />
          <div className="absolute top-36 right-[280px]">
            <p className=" text-[#fff500] text-[20px] uppercase">
              Top Offer This Week
            </p>
            <h1 className="text-[#fff] text-4xl mt-3 font-semibold">
              Fresh Bread <br /> Oatmeal Crumble
            </h1>
            <button className="w-40 h-10 rounded-full t-4 text-[#2d2a6e] text-[16px] uppercase">
              Shop Now
            </button>
            <img src={img3} className="tree" />
          </div>
        </div>
      </div>
      <div className="w-full h-[500px] mb-20 bg-[#FAF5ED] relative overflow-hidden">
        <img src={img5} className="" />
        <img src={img6} className="absolute top-44 right-0" />
        <img src={img4} className="tree1" />

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-40">
          <div class="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div class="rounded-lg p-6 flex flex-col items-center">
              <div class="flex items-center space-x-4">
                <img class="w-22 h-22 rounded-full" src={img7} />
              </div>
              <p class="mt-4 text-[#4d5574] text-center">
                "I think Hub is the best theme I ever seen this year. Amazing
                design, easy to customize and a design quality superlative
                account on its cloud platform for the optimized performance."
              </p>
              <div class="flex mt-4">
                <CiStar className="text-[20px] text-[#ffb800]" />
                <CiStar className="text-[20px] text-[#ffb800]" />
                <CiStar className="text-[20px] text-[#ffb800]" />
                <CiStar className="text-[20px] text-[#ffb800]" />
                <CiStar className="text-[20px] text-[#ffb800]" />
              </div>
              <div>
                <p class="font-bold text-gray-900 text-center leading-7">
                  JACKSON ROBEN
                </p>
                <p class="text-sm text-gray-500 text-center leading-7">
                  Web Designer at Blueskytechco
                </p>
              </div>
            </div>
            {/* <!-- Testimonial 2 --> */}
            <div class="rounded-lg p-6 flex flex-col items-center">
              <div class="flex items-center space-x-4">
                <img class="w-22 h-22 rounded-full" src={img8} />
              </div>
              <p class="mt-4 text-[#4d5574] text-center">
                "Thanks guys, keep up the good work! Great job, I will
                definitely be ordering again! Thanks guys, keep up the good
                work! Garden was worth a fortune to my company."
              </p>
              <div class="flex mt-4">
                <CiStar className="text-[20px] text-[#ffb800]" />
                <CiStar className="text-[20px] text-[#ffb800]" />
                <CiStar className="text-[20px] text-[#ffb800]" />
                <CiStar className="text-[20px] text-[#ffb800]" />
                <CiStar className="text-[20px] text-[#ffb800]" />
              </div>
              <div>
                <p class="font-bold text-gray-900 text-center leading-7">
                  ALGISTINO LIONEL
                </p>
                <p class="text-sm text-gray-500 text-center leading-7">
                  Web Designer at Blueskytechco
                </p>
              </div>
            </div>
            {/* <!-- Testimonial 3 --> */}
            <div class="rounded-lg p-6 flex flex-col items-center">
              <div class="flex items-center space-x-4">
                <img class="w-22 h-22 rounded-full" src={img9} />
              </div>
              <p class="mt-4 text-[#4d5574] text-center">
                "Love the easy and beautiful designed page builder and the
                documentation. All in one landing and startup solutions endless
                use-cases that make it highly reward for."
              </p>
              <div class="flex mt-4">
                <CiStar className="text-[20px] text-[#ffb800]" />
                <CiStar className="text-[20px] text-[#ffb800]" />
                <CiStar className="text-[20px] text-[#ffb800]" />
                <CiStar className="text-[20px] text-[#ffb800]" />
                <CiStar className="text-[20px] text-[#ffb800]" />
              </div>
              <div>
                <p class="font-bold text-gray-900 text-center leading-7">
                  LEONARDO ROBEN
                </p>
                <p class="text-sm text-gray-500 text-center leading-7">
                  Web Designer at Blueskytechco
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <p className="text-[18px] text-[#96ae00] text-center">
          ~ Read Our Blog ~
        </p>
        <h1 className="text-center text-3xl text-[#2d2a6e] font-semibold mt-3">
          OUR LATEST POST
        </h1>
        <p className="text-center text-[16px] text-[#2d2a6e] mt-3 tracking-wide">
          The liber tempor cum soluta nobis eleifend option congue doming quod
          mazim.
        </p>
      </div>
    </>
  );
};

export default Item;
