import React from "react";
import home from "../assets/bkg-revo41.png";
import chery from "../assets/img-revo42.png";
import left from "../assets/coca1.png";
import right from "../assets/coca2.png";
import lemon from "../assets/img-revo41.png";
import tree from "../assets/img-revo32.png";
import Navbar from "./Navbar";
import Header from "./Header";
import fruit from "../assets/banner41 (1).png";
import tree1 from "../assets/icon-svg1.svg";
import tree2 from "../assets/icon-svg2.svg";
import tree3 from "../assets/icon-svg3.svg";
import arrow1 from "../assets/line-svg1.svg";
import arrow2 from "../assets/line-svg2.svg";
import Container from "react-bootstrap/Container";
import pro1 from "../assets/products33-min.jpg";
import pro2 from "../assets/products9-min.jpg";
import pro3 from "../assets/products29-min.jpg";
import pro4 from "../assets/products35-min.jpg";
import pro5 from "../assets/products2-min.jpg";
import { FaStar } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import fresh from "../assets/bkg-banner11-1 (1).png";
import fresh2 from "../assets/icon-img7 (1).svg";
import pan from "../assets/icon-img4 (2).svg";
import pan1 from "../assets/icon-img6-1 (1).svg";
import pan2 from "../assets/icon-img8 (1).svg";
import pro6 from "../assets/products4-min.jpg";
import pro7 from "../assets/products8-min.jpg";
import pro8 from "../assets/products24-min.jpg";
import pro9 from "../assets/products37-min.jpg";
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
import Footer from "./Footer";
import { Footer1 } from "./Blog1";

const Home = () => {
  return (
    <>
      {/* This Is Header Part */}
      <Header />

      {/* This Is Navbar Part */}
      <Navbar />

      <div className="mt-4 relative overflow-hidden h-[600px] mb-10">
        <div className="absolute top-20 left-[510px]">
          <h1 className="text-2xl text-white font-bold uppercase tracking-wide">
            Top Seller In The Week
          </h1>
          <h1 className="mt-14 text-6xl text-white font-semibold leading-[70px]">
            Perfect <br /> Your Healthy Life
          </h1>
          <p className="mt-4 text-white font-semibold tracking-wide capitalize leading-6">
            Prosentition matters. Our Fresh Vienamese Vegetable <br /> look good
            and taste even better.
          </p>
          <button className="mt-5 w-40 h-14 text-[#4d5574] bg-white rounded-full hover:bg-fuchsia-500">
            Shop Now
          </button>
        </div>
        <div>
          <img src={home} />
        </div>
        <div>
          <img src={chery} className="absolute -top-[50px] left-[300px]" />
        </div>
        <div>
          <img src={left} className="left1" />
        </div>
        <div>
          <img src={right} className="right" />
        </div>
        <div>
          <img src={lemon} className="lemon" />
        </div>
        <div>
          <img
            src={tree}
            className="absolute bottom-0 right-[600px] top-[380px] size-[200px]"
          />
        </div>
      </div>
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

      <Container>
        <div className="mb-10 mt-10 flex justify-center items-center space-x-8">
          <div className="w-[250px] h-[390px] border-2 border-slate-300 shadow-md rounded-lg">
            <img src={pro1} className="size-56" />
            <h1 className="text-[#79819c] ml-6  hover:underline">Vegetables</h1>
            <p className="text-[#4d5574] ml-6 mt-2 hover:text-[#96ae00]">
              1Kg Purple Onion / <br /> Onion / Dried Onion Key...
            </p>
            <div className="flex ml-6 mt-2">
              <FaStar className="text-[20px] text-yellow-500" />
              <FaStar className="text-[20px] text-yellow-500" />
              <FaStar className="text-[20px] text-yellow-500" />
            </div>
            <h1 className="mt-3 text-[20px] ml-6 text-[#ea0d42]">
              $56.00 - $12.00
            </h1>
          </div>
          <div className="w-[250px] h-[390px] border-2 border-slate-300 shadow-md rounded-lg">
            <img src={pro2} className="size-56" />
            <h1 className="text-[#79819c] ml-6  hover:underline">Fresh Meat</h1>
            <p className="text-[#4d5574] ml-6 mt-2 hover:text-[#96ae00]">
              1st Quality Fresh <br /> Meat From USA
            </p>
            <div className="flex ml-6 mt-2">
              <FaStar className="text-[20px] text-yellow-500" />
              <FaStar className="text-[20px] text-yellow-500" />
              <FaStar className="text-[20px] text-yellow-500" />
              <FaStar className="text-[20px] text-yellow-500" />
            </div>
            <h1 className="mt-3 text-[20px] ml-6 text-[#ea0d42]">$44.00</h1>
          </div>
          <div className="w-[250px] h-[390px] border-2 border-slate-300 shadow-md rounded-lg">
            <img src={pro3} className="size-56" />
            <h1 className="text-[#79819c] ml-6  hover:underline">fresh Meat</h1>
            <p className="text-[#4d5574] ml-6 mt-2 hover:text-[#96ae00]">
              Cheap And Delicious Fresh...
            </p>
            <div className="flex ml-6 mt-2">
              <FaStar className="text-[20px] text-yellow-500" />
              <FaStar className="text-[20px] text-yellow-500" />
              <FaStar className="text-[20px] text-yellow-500" />
              <FaStar className="text-[20px] text-yellow-500" />
              <FaStar className="text-[20px] text-yellow-500" />
            </div>
            <h1 className="mt-3 text-[20px] ml-6 text-[#ea0d42]">$55.00</h1>
          </div>
          <div className="w-[250px] h-[390px] border-2 border-slate-300 shadow-md rounded-lg">
            <img src={pro4} className="size-56" />
            <h1 className="text-[#79819c] ml-6  hover:underline">
              Fresh Fruits
            </h1>
            <p className="text-[#4d5574] ml-6 mt-2 hover:text-[#96ae00]">
              Fresh Organic Plum <br /> Moc Trip 100g
            </p>
            <div className="flex ml-6 mt-2">
              <FaStar className="text-[20px] text-yellow-500" />
              <FaStar className="text-[20px] text-yellow-500" />
              <FaStar className="text-[20px] text-yellow-500" />
              <FaStar className="text-[20px] text-yellow-500" />
            </div>
            <h1 className="mt-3 text-[20px] ml-6 text-[#ea0d42]">$26.00</h1>
          </div>
          <div className="w-[250px] h-[390px] border-2 border-slate-300 shadow-md rounded-lg">
            <img src={pro5} className="size-56" />
            <h1 className="text-[#79819c] ml-6  hover:underline">
              Fresh Milk , Fruit Drink
            </h1>
            <p className="text-[#4d5574] ml-6 mt-2 hover:text-[#96ae00]">
              Fresh Milk Chocolate <br /> Quaker Popped Key..
            </p>
            <div className="flex ml-6 mt-2">
              <FaStar className="text-[20px] text-yellow-500" />
              <FaStar className="text-[20px] text-yellow-500" />
              <FaStar className="text-[20px] text-yellow-500" />
              <FaStar className="text-[20px] text-yellow-500" />
              <FaStar className="text-[20px] text-yellow-500" />
            </div>
            <h1 className="mt-3 text-[20px] ml-6 text-[#ea0d42]">$19</h1>
          </div>
        </div>
      </Container>

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

      <Container>
        <div className="grid grid-cols-3 gap-2">
          <div className="flex max-w-md h-[160px] mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <img
              className="w-36 h-36 object-cover"
              src={pro1}
              alt="Purple Onion"
            />
            <div className="p-4 flex flex-col justify-between">
              <h3 className="text-md text-[#4d5574]">
                1Kg Purple Onion / <br /> Onion / Dried Onion Key...
              </h3>
              <div className="flex items-center mt-2">
                <div className="flex">
                  <FaStar className="text-[20px] text-yellow-500" />
                  <FaStar className="text-[20px] text-yellow-500" />
                  <FaStar className="text-[20px] text-yellow-500" />
                  <FaStar className="text-[20px] text-yellow-500" />
                </div>
              </div>
              <p className="text-red-500 text-xl">$56.00-$12.00</p>
            </div>
          </div>

          <div className="flex max-w-md h-[160px] mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <img
              className="w-36 h-36 object-cover"
              src={pro2}
              alt="Purple Onion"
            />
            <div className="p-4 flex flex-col justify-between">
              <h3 className="text-md text-[#4d5574]">
                1st Quality Fresh Meat From Usa 500g
              </h3>
              <div className="flex items-center mt-2">
                <div className="flex">
                  <FaStar className="text-[20px] text-yellow-500" />
                  <FaStar className="text-[20px] text-yellow-500" />
                  <FaStar className="text-[20px] text-yellow-500" />
                  <FaStar className="text-[20px] text-yellow-500" />
                </div>
              </div>
              <p className="text-red-500 text-xl">$44.00</p>
            </div>
          </div>
          <div className="flex max-w-md h-[160px] mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <img
              className="w-36 h-36 object-cover"
              src={pro3}
              alt="Purple Onion"
            />
            <div className="p-4 flex flex-col justify-between">
              <h3 className="text-md text-[#4d5574]">
                Cheap And Deliciouns Fresh Chicken
              </h3>
              <div className="flex items-center mt-2">
                <div className="flex">
                  <FaStar className="text-[20px] text-yellow-500" />
                  <FaStar className="text-[20px] text-yellow-500" />
                  <FaStar className="text-[20px] text-yellow-500" />
                  <FaStar className="text-[20px] text-yellow-500" />
                </div>
              </div>
              <p className="text-red-500 text-xl">$55.00</p>
            </div>
          </div>
          <div className="flex max-w-md h-[160px] mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <img
              className="w-36 h-36 object-cover"
              src={pro4}
              alt="Purple Onion"
            />
            <div className="p-4 flex flex-col justify-between">
              <h3 className="text-md text-[#4d5574]">
                Fresh Organic Plum Moc chau Trip 100g
              </h3>
              <div className="flex items-center mt-2">
                <div className="flex">
                  <FaStar className="text-[20px] text-yellow-500" />
                  <FaStar className="text-[20px] text-yellow-500" />
                  <FaStar className="text-[20px] text-yellow-500" />
                  <FaStar className="text-[20px] text-yellow-500" />
                </div>
              </div>
              <p className="text-red-500 text-xl">$26.00</p>
            </div>
          </div>
          <div className="flex max-w-md h-[160px] mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <img
              className="w-36 h-36 object-cover"
              src={pro5}
              alt="Purple Onion"
            />
            <div className="p-4 flex flex-col justify-between">
              <h3 className="text-md text-[#4d5574]">
                Fresh Milk Chocolate Quaker Popped Rice Crisps
              </h3>
              <div className="flex items-center mt-2">
                <div className="flex">
                  <FaStar className="text-[20px] text-yellow-500" />
                  <FaStar className="text-[20px] text-yellow-500" />
                  <FaStar className="text-[20px] text-yellow-500" />
                  <FaStar className="text-[20px] text-yellow-500" />
                </div>
              </div>
              <p className="text-red-500 text-xl">$19.00</p>
            </div>
          </div>
          <div className="flex max-w-md h-[160px] mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <img
              className="w-36 h-36 object-cover"
              src={pro6}
              alt="Purple Onion"
            />
            <div className="p-4 flex flex-col justify-between">
              <h3 className="text-md text-[#4d5574]">
                Lettuce Fresh Produce Vegetables
              </h3>
              <div className="flex items-center mt-2">
                <div className="flex">
                  <FaStar className="text-[20px] text-yellow-500" />
                  <FaStar className="text-[20px] text-yellow-500" />
                  <FaStar className="text-[20px] text-yellow-500" />
                </div>
              </div>
              <p className="text-red-500 text-xl">$11.00</p>
            </div>
          </div>
          <div className="flex max-w-md h-[160px] mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <img
              className="w-36 h-36 object-cover"
              src={pro7}
              alt="Purple Onion"
            />
            <div className="p-4 flex flex-col justify-between">
              <h3 className="text-md text-[#4d5574]">
                Enormous Granite Bag Fresh Goods 100%
              </h3>
              <div className="flex items-center mt-2">
                <div className="flex">
                  <FaStar className="text-[20px] text-yellow-500" />
                  <FaStar className="text-[20px] text-yellow-500" />
                  <FaStar className="text-[20px] text-yellow-500" />
                  <FaStar className="text-[20px] text-yellow-500" />
                </div>
              </div>
              <p className="text-red-500 text-xl">$35.00</p>
            </div>
          </div>
          <div className="flex max-w-md h-[160px] mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <img
              className="w-36 h-36 object-cover"
              src={pro8}
              alt="Purple Onion"
            />
            <div className="p-4 flex flex-col justify-between">
              <h3 className="text-md text-[#4d5574]">
                Fresh Organic Grape Tomatoes 100g
              </h3>
              <div className="flex items-center mt-2">
                <div className="flex">
                  <FaStar className="text-[20px] text-yellow-500" />
                  <FaStar className="text-[20px] text-yellow-500" />
                  <FaStar className="text-[20px] text-yellow-500" />
                  <FaStar className="text-[20px] text-yellow-500" />
                  <FaStar className="text-[20px] text-yellow-500" />
                </div>
              </div>
              <p className="text-red-500 text-xl">$24.00</p>
            </div>
          </div>
          <div className="flex max-w-md h-[160px] mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <img
              className="w-36 h-36 object-cover"
              src={pro9}
              alt="Purple Onion"
            />
            <div className="p-4 flex flex-col justify-between">
              <h3 className="text-md text-[#4d5574]">
                Fresh And Sour Lemon Like An Old Lover
              </h3>
              <div className="flex items-center mt-2">
                <div className="flex">
                  <FaStar className="text-[20px] text-yellow-500" />
                  <FaStar className="text-[20px] text-yellow-500" />
                  <FaStar className="text-[20px] text-yellow-500" />
                  <FaStar className="text-[20px] text-yellow-500" />
                  <FaStar className="text-[20px] text-yellow-500" />
                </div>
              </div>
              <p className="text-red-500 text-xl">$8.00</p>
            </div>
          </div>
        </div>
      </Container>

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
      {/*       
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
      </div> */}

      {/* <Footer /> */}
      <Footer1 />
    </>
  );
};

export default Home;
