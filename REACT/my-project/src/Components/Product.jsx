import React from "react";
import fruit from "../assets/banner41 (1).png";
import tree1 from "../assets/icon-svg1.svg";
import tree2 from "../assets/icon-svg2.svg";
import tree3 from "../assets/icon-svg3.svg";
import arrow1 from "../assets/line-svg1.svg";
import arrow2 from "../assets/line-svg2.svg";
import Container from "react-bootstrap/Container";

const Product = () => {
  return (
    <>
      <div className="flex justify-center mt-14 hover:-translate-y-5 transition-all ease-linear duration-500">
        <img src={fruit} />
      </div>
      <p className="text-center leading-7 capitalize text-[16px] tracking-wide font-medium  text-[#4d5574]">
        We are Online Market of fresh fruits & vegetables. <br /> You can also
        find organic & healthy juice, processed food as <br /> well as gentle
        skin tcare at our store.
      </p>
      <Container className="mt-10">
        <div className="flex justify-around relative">
          <div>
            <img src={tree1} />
            <h1 className="-ml-10 mt-4 text-[20px] text-[#2d2a6e]">
              Select Your Product
            </h1>
            <p className="-ml-10 mt-4 text-[#2d2a6e] leading-7 tracking-wide">
              Choose from select produce to <br />
              start. Keep, add, or remove items.
            </p>
            <div className="absolute top-20 left-[340px]">
              <img src={arrow1} />
            </div>
          </div>
          <div>
            <img src={tree2} />
            <h1 className="-ml-10 mt-4 text-[#2d2a6e] text-[20px]">
              Our Shop Orfarm
            </h1>
            <p className="-ml-10 mt-4 text-[#2d2a6e] leading-7 tracking-wide">
              We provide 100+ products, provide <br /> enough nutrition for your
              family.
            </p>
            <div className="absolute top-10 right-[420px]">
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
       <div className="mt-10">
        <h1 className="text-center text-[#96ae00] ">~ Our Products ~</h1>
        <h2 className="text-2xl font-bold text-[#4C4A84] text-center mt-4 tracking-wider">
          WHAT'S HOT ITEMS
        </h2>
        <div className="mt-4 flex justify-center">
          <ul className="flex gap-10 text-[#505876] ">
            <li className="text-[#96ae00]">All Products</li>
            <li className="hover:text-[#96ae00] transition-all ease-linear duration-200">
              Fresh Meat
            </li>
            <li className="hover:text-[#96ae00] transition-all ease-linear duration-200">
              Fresh Vegetables
            </li>
            <li className="hover:text-[#96ae00] transition-all ease-linear duration-200">
              Biscuits Snack
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Product;
