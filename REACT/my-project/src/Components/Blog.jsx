import React from "react";
import Container from "react-bootstrap/Container";

const Blog = ({img , detail}) => {
  return (
    <>
      <Container>
        <div className="mb-20">
          <img src={img} className="w-[350px] h-[250px] rounded-[12px] hover:scale-110 transition-all ease-linear duration-300" />
          <div className="flex">
            <h2 className="mt-4 text-[#96ae00] uppercase font-bold text-[12px]">
              {detail}
            </h2>
            <span className="mt-[20px] ml-4 text-[#4d5574] uppercase font-bold text-[12px]">
              ADMIN
            </span>
            <p className="mt-[20px] ml-4 text-[#4d5574] uppercase font-bold text-[12px] ">
              OCTOBER 18, 2022
            </p>
          </div>
          <h1 className="text-[#2d2a6e] font-medium text-[16px] tracking-wide capitalize mt-2 leading-7">
            Transition Your favorite Looks Into <br />
            Fall France
          </h1>
          <p className="mt-2 text-[#4d5574] w-[350px] capitalize leading-7">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem...
          </p>
          <h1 className="mt-4 text-[#96ae00] text-[18px] uppercase">
            Continue reading
          </h1>
        </div>
      </Container>
    </>
  );
};

export default Blog;
