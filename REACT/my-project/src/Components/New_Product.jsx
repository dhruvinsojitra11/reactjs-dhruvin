import React from "react";
import Container from "react-bootstrap/Container";

const New_Product = ({ img, detail, prize, star }) => {
  return (
    <>
      <Container>
        <div className="flex max-w-md h-[160px] mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <img
            className="w-36 h-36 object-cover"
            src={img}
            alt="Purple Onion"
          />
          <div className="p-4 flex flex-col justify-between">
            <h3 className="text-md text-[#4d5574]">{detail}</h3>
            <div className="flex items-center mt-2">
              <div className="flex">{star}</div>
            </div>
            <p className="text-red-500 text-xl">{prize}</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default New_Product;
