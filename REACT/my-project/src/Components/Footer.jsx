import React from "react";
import img1 from "../assets/download-app (1).png";
import img2 from "../assets/payment.png";

const Footer = () => {
  return (
    <div className="mt-20">
      <h1 className="border-2 border-green-500"></h1>
      <body class="bg-[#2D2C6E] text-white h-[688px] max-w-fit">
        <footer class="py-8">
          <div class="container mx-auto px-16">
            <div class="grid grid-cols-1 md:grid-cols-5 gap-10">
              <div>
                <h3 class="font-semibold">NEED HELP?</h3>
                <p className="text-[14px] text-[#B0AFC6] mt-10 leading-7 font-normal capitalize">
                  78 St. Vicent Place, Glasgow, Greater Newyork NH4014, UK.
                </p>
                <div class="mt-4">
                  <p className="text-[14px] text-[#B0AFC6] mt-10 leading-7 font-normal capitalize">
                    DOWNLOAD APP:
                  </p>
                  <div class="flex space-x-5 mt-2">
                    <a href="#">
                      <img
                        src={img1}
                        alt="Download on the App Store"
                        class="h-10"
                        className="mt-3"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3 class="font-semibold">NEED HELP?</h3>
                <p className="text-[14px] text-[#B0AFC6] mt-10 leading-7 font-normal capitalize">
                  Got Question?
                </p>
                <p class="text-2xl font-bold mt-2 text-[#96ae00]">
                  +88-1990-6886
                </p>
                <div class="mt-4 size-96">
                  <p className="text-[14px] text-[#B0AFC6] mt-4 leading-7 font-normal capitalize">
                    Monday – Friday:
                    <span className="text-white uppercase text-[16px] font-light">
                      {" "}
                      8:10 AM – 6:10 PM{" "}
                    </span>
                  </p>
                  <p className="text-[14px] text-[#B0AFC6] leading-7 font-normal capitalize">
                    Saturday: 10:
                    <span className="text-white uppercase text-[16px] font-light">
                      {" "}
                      10 AM – 06:10 PM
                    </span>
                  </p>
                  <p className="text-[14px] text-[#B0AFC6] leading-7 font-normal capitalize">
                    Sunday:
                    <span className="text-white uppercase text-[16px] font-light">
                      {" "}
                      Close
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <h3 class="font-semibold ml-4">INFORMATION</h3>
                <ul class="space-x-4 space-y-3 mt-4 text-[#B0AFC6]">
                  <li>
                    <a href="#" class="hover:underline ml-4">
                      Blog Us
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Secure Shopping
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Delivery Information
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      FeedBack
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="font-semibold">QUICK LINKS</h3>
                <ul class="space-y-3 mt-4 text-[#B0AFC6]">
                  <li>
                    <a href="#" class="hover:underline">
                      Store Location
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      My Account
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Orders Tracking
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="font-semibold">My ACCOUNT</h3>
                <ul class="space-y-3 mt-4 text-[#B0AFC6]">
                  <li>
                    <a href="#" class="hover:underline">
                      Product Support
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      CheakOut
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Shopping Cart
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Wishlist
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Custom Link
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Redeem voucher
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="border-b-2 border-black absolute" />
            <div class=" mt-2 flex justify-center md:mt-0">
              <img src={img2} alt="Payment Methods" class="h-8" />
            </div>
            <div>
              <p className="text-[#b0afcc] mt-4 text-center">
                Copyright © ORFARM all rights reserved. Powered by &nbsp;
                <a href="#" class="text-[#96ae00] hover:underline">
                  Blueskytecho
                </a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </div>
  );
};

export default Footer;
