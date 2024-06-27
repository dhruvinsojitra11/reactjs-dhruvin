import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import fresh from "../assets/bkg-banner11-1 (1).png";
import fresh2 from "../assets/icon-img7 (1).svg";
import pan from "../assets/icon-img4 (2).svg";
import pan1 from "../assets/icon-img6-1 (1).svg";
import pan2 from "../assets/icon-img8 (1).svg";

const Fresh = () => {
  return (
    <>
      <div>
        <p className="text-center text-[#4d5574] tracking-wide">
          Discover Thousands Of Other Quality Products.&nbsp;
          <span className="text-[#96ae00] text-[18px]">
            Shop All Products{" "}
            <span className="relative">
              <MdKeyboardDoubleArrowRight className="absolute top-0.5 left-1 right-0 m-auto text-2xl" />
            </span>
          </span>
        </p>
      </div>
      <div className="mt-20 mb-20 overflow-hidden relative">
        <div className="absolute left-[250px] top-32">
          <p className="text-white font-semibold text-[20px]">
            ~ Deals Of The Day ~
          </p>
          <h1 className="mt-3 text-white font-semibold text-[35px] tracking-wide leading-[40px] capitalize">
            Premium Drinks <br /> Fresh Farm Product
          </h1>
          <p className="text-white mt-4 text-[14px] capitalize">
            The liber tempor cum soluta nobis eleifend option congue <br />{" "}
            doming quod mazim placerat facere possum assam going through.
          </p>
          <h2 className="mt-10 text-white font-medium">
            HURRY UP! OFFER END IN :
          </h2>
          <p className="mt-3 text-white capitalize">The event has ended</p>
          <button className="w-44 h-10 rounded-full bg-white mt-4 text-[#9eb414] text-[14px]">
            Shop Now
          </button>
        </div>
        <img src={fresh} className="w-[1600px] h-[650px]" />
        <img src={fresh2} className="fresh2" />
        <img src={pan} className="pan" />
        <img src={pan1} className="pan1" />
        <img src={pan2} className="pan2" />
      </div>
      <div>
        <p className="text-[18px] font-semibold text-center text-[#96ae00]">
          ~ Best Products ~
        </p>
        <h1 className="mt-4 font-semibold text-[30px] text-center text-[#2d2a6e] tracking-wide">
          THIS WEEK’S HIGHLIGHTS
        </h1>
        <p className="text-center text-[#4d5574] mt-4 text-[16px] mb-10">
          The liber tempor cum soluta nobis eleifend option congue doming quod
          mazim.
        </p>
      </div>
    </>
  );
};

export default Fresh;
