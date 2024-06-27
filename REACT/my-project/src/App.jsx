import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import Home from "./Components/Home";
import Data from "./Components/Data";
import "./index.css";

import Fresh from "./Components/Fresh";
import Prize, {
  Prize1,
  Prize2,
  Prize3,
  Prize4,
  Prize5,
  Prize6,
  Prize7,
  Prize8,
} from "./Components/Prize";
import Star5, { Star1, Star3, Star4, Star6, Star2 } from "./Components/Star";
import New_Product from "./Components/New_Product";
import Item from "./Components/Item";
import Blog from "./Components/Blog";
import img1 from "./assets/blog9-min-500x321 (1).jpg";
import img2 from "./assets/blog7-min-500x321 (1).jpg";
import img3 from "./assets/blog6-min-500x321 (1).jpg";
import img4 from "./assets/blog5-min-500x321 (1).jpg";
import img5 from "./assets/blog9-min-500x321 (1).jpg";
import img6 from "./assets/blog7-min-500x321 (1).jpg";
import img7 from "./assets/blog4-min-500x321.jpg";
import img8 from "./assets/blog3-min.jpg";
import img9 from "./assets/blog2-min (1).jpg";
import img10 from "./assets/icon.svg";
import img11 from "./assets/icon2.svg";
import img12 from "./assets/icon3.svg";
import img13 from "./assets/icon4.svg";
import img14 from "./assets/icon5.svg";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Blogs from "./Components/Blogs";
import Blog1, { Blog2, Footer1 } from "./Components/Blog1";
import FAQ from "./Components/FAQ";
import Shop from "./Components/Shop";
import AboutUs from "./Components/AboutUs";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/shop",
      element: <Shop />,
    },
    {
      path: "/blog",
      element: <Blogs />,
    },
    {
      path: "/FAQ",
      element: <FAQ />,
    },
    {
      path: "/About",
      element: <AboutUs />,
    },
  ]);

  return (
    <>
      <RouterProvider router={route}></RouterProvider>

      {/* <div> */}
      {/* <Header /> */}
      {/* <Navbar1/> */}
      {/* * <Navbar /> */}
      {/* <Home /> */}
      {/* <Product /> */}

      {/* <div className="flex justify-end -space-x-40">
        <Data
          img={pro1}
          name="Vegetables"
          detail="1kg Purple Onion / Onion / Dried Onion Ki.."
          prize={<Prize />}
          star={<Star2 />}
        />
        <Data
          img={pro2}
          name="Fresh Meat"
          detail="1st Quality Fresh Meat From USA 500g"
          prize={<Prize1 />}
          star={<Star5 />}
        />
        <Data
          img={pro3}
          name="Fresh Meat"
          detail="Cheap And Delicious Fresh Chicken"
          prize={<Prize2 />}
          star={<Star6 />}
        />
        <Data
          img={pro4}
          name="Fresh Fruits"
          detail="Fresh Organic Plum Moc Chau Trip 100g"
          prize={<Prize3 />}
          star={<Star6 />}
        />
        <Data
          img={pro5}
          name="Fresh Milk , Fruit Drink"
          detail="Fresh Milk Chocolate Quaker Popped Rice..."
          prize={<Prize4 />}
          star={<Star3 />}
        />
      </div> */}
      {/* {<Fresh />} */}

      {/* <div className="grid grid-cols-3 space-y-5">
          <New_Product
            img={pro1}
            detail="1kg Purple Onion / Onion / Dried Onion Kinh Men"
            prize={<Prize />}
            star={<Star3 />}
          />
          <New_Product
            img={pro4}
            detail="Fresh Organic Plum Moc Chau Trip 100g"
            prize={<Prize3 />}
            star={<Star6 />}
          />
          <New_Product
            img={pro9}
            detail="Lettuce Fresh Produce Vegetables"
            prize={<Prize6 />}
            star={<Star6 />}
          />
          <New_Product
            img={pro2}
            detail="1st Quality Fresh Meat From USA 500g"
            prize={<Prize1 />}
            star={<Star6 />}
          />
          <New_Product
            img={pro5}
            detail="Fresh Milk Chocolate Quaker Popped Rice..."
            prize={<Prize4 />}
            star={<Star6 />}
          />
          <New_Product
            img={pro7}
            detail="Fresh And Sour Lemon Like An Old Lover"
            prize={<Prize7 />}
            star={<Star4 />}
          />
          <New_Product
            img={pro3}
            detail="Cheap And Delicious Fresh Chicken"
            prize={<Prize2 />}
            star={<Star6 />}
          />
          <New_Product
            img={pro8}
            detail="Enormous Granite Bag Fresh Goods 100%"
            prize={<Prize5 />}
            star={<Star6 />}
          />
          <New_Product
            img={pro6}
            detail="Fresh Organic Grape Tomatoes 100g"
            prize={<Prize8 />}
            star={<Star3 />}
          />
        </div> */}
      {/* <Item />
        <div className="grid grid-cols-4 ml-3">
          <Blog img={img1} detail="PHOTOGRAPHY" />
          <Blog img={img2} detail="SHOPPING" />
          <Blog img={img3} detail="ORGANICS" />
          <Blog img={img4} detail="LIFESTYLE" />
        </div>
        <Footer /> */}

      {/* <div className="grid grid-cols-3 ml-10">
          <Blogs
            img={img5}
            text="Trasition Your Favorite Looks Into Fall France"
          />
          <Blogs
            img={img6}
            text="Perfect Quality Reasonable Price For Your Family"
          />
          <Blogs
            img={img7}
            text="Populer Reasons You Must Drinks Juice EveryDay"
          />
        </div> */}
      {/* <New text="Trasition Your Favorite Looks Into Fall France" /> */}
      {/* <div className="grid grid-cols-3 ml-10">
        <Blog1
          img={img2}
          detail="SHOPPING"
          data="Perfect Quality Reasonable Price For Your Family"
        />
        <Blog1
          img={img3}
          detail="ORGANICS"
          data="Ways To Choose Fruits & Seafoods Good For Pregnancy"
        />
        <Blog1
          img={img4}
          detail="LIFESTYLE"
          data="Summer Breakfast For The Healthy Morning With Tomatoes"
        />
        <Blog1
          img={img7}
          detail="BLOG"
          data="Popular Reasons You Must Drinks Juice Everyday"
        />
        <Blog1
          img={img8}
          detail="DAIRY FARM"
          data="Perfect Quality Reasonable Price For Your Family"
        />
        <Blog1
          img={img9}
          detail="ORGANICS"
          data="The Best Great Benefits Of Fresh Beef For Women’s Health"
        />
      </div> */}
      {/* <div className="grid grid-cols-5 gap-4">
        <Blog2 img={img13} name="Across West & East India" />
        <Blog2 img={img11} name="100% Secure Payment" />
        <Blog2 img={img12} name="Add Multi-buy Discount" />
        <Blog2 img={img13} name="Dedicated 24/7 Support" />
        <Blog2 img={img14} name="From Handpicked Sellers" />
      </div> */}
      {/* <Footer1 /> */}
      {/* <FAQ /> */}
    </>
  );
}

export default App;
