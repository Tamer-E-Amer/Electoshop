import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const ButtonLight = ({ title, icon }) => {
  return (
    <>
      {" "}
      <button className="text-sm font-semibold text-shop-gray-dark border-[1px] border-shop-gray-border w-full h-[50px] hover:bg-shop-bg-gray-light uppercase flex flex-center gap-2 smooth-transition">
        {icon}
        <span>{title}</span>
      </button>
    </>
  );
};

export default ButtonLight;
