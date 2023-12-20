import React from "react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

import axios from "axios";
const Slider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const silderImages = [
    "/img/herosection1.png",
    "/img/herosection2.png",
    "/img/herosection3.png",
  ];

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    console.log(currentSlide);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    console.log(currentSlide);
  };

  return (
    <div className="w-full overflow-hidden relative">
      {/*  silder container */}
      <div
        className="flex w-[300vw] h-[100%] smooth-transition"
        style={{ transform: `translate(-${currentSlide * 100}vw)` }}
      >
        <img
          src={`${silderImages[0]}`}
          alt=""
          className="w-[100vw] h-[100%] object-cover"
        />
        <img
          src={`${silderImages[1]}`}
          alt=""
          className="w-[100vw] h-[100%] object-cover"
        />
        <img
          src={`${silderImages[2]}`}
          alt=""
          className="w-[100vw] h-[100%] object-cover"
        />
      </div>
      {/* buttons */}
      <div className="container  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-between">
        {/* previous button */}
        <div>
          <MdOutlineArrowBackIosNew
            className="text-7xl md:text-[160px] text-shop-gray-light hover:text-shop-gray-dark cursor-pointer transition"
            onClick={() => {
              prevSlide();
            }}
          />
        </div>
        {/* next button */}
        <div>
          <MdOutlineArrowForwardIos
            className="text-7xl md:text-[160px] text-shop-gray-light hover:text-shop-gray-dark cursor-pointer transition"
            onClick={() => {
              nextSlide();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
