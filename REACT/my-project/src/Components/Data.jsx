import React from "react";
import Container from "react-bootstrap/Container";


const Data = ({ img, name, detail, prize, star }) => {
  return (
    <>
      <Container>
        <div className="mb-10 mt-10 flex justify-center">
          <div className="w-[250px] h-[390px] border-2 border-slate-300 shadow-md rounded-lg">
            <img src={img} className="size-56" />
            <h1 className="text-[#79819c] ml-6  hover:underline">{name}</h1>
            <p className="text-[#4d5574] ml-6 mt-2 hover:text-[#96ae00]">
              {detail}
            </p>
            <div className="flex ml-6 mt-2">{star}</div>
            <h1 className="mt-3 text-[20px] ml-6 text-[#ea0d42]">{prize}</h1>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Data;
