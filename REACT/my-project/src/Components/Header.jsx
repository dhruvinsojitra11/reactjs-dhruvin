import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShop } from "react-icons/ci";

const Header = () => {
  return (
    <div>
      <div>
        <p className="p-3 bg-[#330C5F] text-center font-medium text-white">
          Due to the <span className="text-orange-300">COVID-19</span> epidemic, orders may be processed
          with a slight delay.
        </p>
      </div>
      <div>
        <div className="mt-10 ml-14">
          <span className="flex items-center max-w-fit px-3 py-2 bg-[#f4f4f4] rounded-2xl">
            <CiSearch className="text-2xl" />
            <input
              type="text"
              placeholder="&nbsp;Search Products..."
              className="focus:outline-none bg-[#f4f4f4] "
            />
            <div className="text-[#2d2a6e]">Search</div>
          </span>

          <div className="flex justify-end -mt-8 mr-20 gap-3">
            <span className="bg-[#FFF3EC] size-10 rounded-full flex justify-center items-center">
              <CiUser className="size-5" />
            </span>
            <span className="bg-[#ECFBFF] size-10 rounded-full flex justify-center items-center">
              <CiHeart className="size-5" />
            </span>
            <span className="bg-[#FEEFD0] size-10 rounded-full flex justify-center items-center">
              <CiShop className="size-5" />
            </span>
          </div>
          <hr className="mt-10 max-w-[1400px]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
