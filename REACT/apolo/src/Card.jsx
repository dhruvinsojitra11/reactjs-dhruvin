import React from "react";
import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { FaVolleyballBall } from "react-icons/fa";

const Card = () => {
  return (
    <>
      <div className="reletive mt-20">
        <h1 className="absolute mt-10 ml-[100px] text-white font-bold text-3xl rounded-xl">
          PROFILES
        </h1>
        <img
          className="w-full h-[140px]"
          src="https://media.licdn.com/dms/image/C4E16AQEsosm7s3WJsg/profile-displaybackgroundimage-shrink_200_800/0/1618253931001?e=2147483647&v=beta&t=B3BXIqVE3stvmvK9dicNQw1ZiXvavg_g1sSNHmu58K0"
          alt=""
        />
      </div>

      <div className="flex justify-center items-center">
        <div className="w-[400px] h-[500px] border-2 border-white mt-[40px] ml-8 shadow-xl">
          <div className="flex justify-center">
            <img
              className="h-[250px] w-[380px] rounded-lg"
              src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202405/kiara-advani-142355517-16x9_0.jpg?VersionId=dFMCDCKKbeeXYSP9L8Zxcmj.AOLNasU9&size=690:388"
              alt=""
            />
          </div>
          <h1 className="font-bold text-center text-2xl leading-[50px]">
            KIARAALI ADVANI
          </h1>
          <p className="font-bold text-center text-purple-500">PhotoGrapher</p>
          <p className="font-bold text-center text-gray-500 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            ex rem optio, eius ratione minus similique, odio officiis maxime
            excepturi.
          </p>
          <div className="flex space-x-9 justify-center mt-7 ">
            <FaLinkedinIn className="text-sky-500 text-xl" />
            <FaTwitter className="text-sky-600 text-xl" />
            <ImFacebook className="text-blue-800 text-xl" />
          </div>
        </div>
        <div className="w-[400px] h-[500px] border-2 border-white mt-[40px] ml-8 shadow-xl">
          <div className="flex justify-center">
            <img
              className="h-[250px] rounded-lg"
              src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"
              alt=""
            />
          </div>
          <div className="font-bold ">
            <ImSpoonKnife className="ml-4 mt-4 text-red-500 " />
            <h1 className="text-red-400 ml-4 leading-10">Culinary</h1>
            <h3 className="text-black ml-4 capitalize text-xl">
              FOODS
            </h3>
            <p className="ml-4 mt-2 text-gray-500 text-start">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
            </p>
            <button className="px-6 text-white mt-3 ml-4 py-2 bg-purple-500 rounded-lg">
              Click Me
            </button>
          </div>
        </div>
        <div className="w-[400px] h-[500px] border-2 border-white mt-[40px] ml-8 shadow-xl">
          <div className="flex justify-center">
            <img
              className="h-[250px] rounded-lg"
              src="https://variety.com/wp-content/uploads/2023/09/MCDPIOF_EC367.jpg"
              alt=""
            />
          </div>
          <h1 className="font-bold text-center text-2xl leading-[50px]">
            JACK SPARROW
          </h1>
          <p className="font-bold text-center">Web Devloper</p>
          <p className="font-bold text-center text-gray-500 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            ex rem optio, eius ratione minus similique, odio officiis maxime
            excepturi.
          </p>
          <div className="flex space-x-9 justify-center mt-7 ">
            <ImFacebook className="text-white size-8 rounded-full bg-blue-500" />
            <FaTwitter className="text-white size-8 rounded-full bg-sky-700" />
            <FaVolleyballBall className="text-white size-8 rounded-full bg-rose-500" />
          </div>
        </div>
      </div>
      
 </>
  );
};

export default Card;
