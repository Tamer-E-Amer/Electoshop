import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
const CategoryCard = ({ title, subCategory }) => {
  let _bgColorFor = title;
  let bgColor;
  const setTitleBgColor = () => {
    switch (_bgColorFor) {
      case "smartphones":
        bgColor = "#1FB94D";
        break;
      case "computers":
        bgColor = "#0C1C68";
        break;
      case "smart watches":
        bgColor = "#6C7278";
        break;
      case "cameras":
        bgColor = "#FC7F01";
        break;

      default:
        break;
    }
  };
  setTitleBgColor();
  return (
    <div className="border-[1px] border-shop-gray-light w-[260px] xs:w-[350px] sm:w-[460px] h-auto p-4">
      {/* title header */}
      <div
        className="flex flex-between text-white text-sm px-4 py-2  mb-4"
        style={{ background: `${bgColor}` }}
      >
        <h2 className="uppercase font-semibold ">{title}</h2>
        <Link to={`/products/cat/${title}`}>
          <div className="flex  gap-2 group cursor-pointer">
            <AiOutlineEye className="text-lg" />
            <span className="hidden md:block group-hover:underline">
              View category
            </span>
          </div>
        </Link>
      </div>
      {/* subCategory images */}
      <div className="grid grid-cols-2 place-items-center gap-4 cursor-pointer">
        {subCategory.map((sub) => (
          <div
            className="group overflow-hidden border-[1px] border-shop-gray-light relative"
            key={sub.id}
          >
            <img
              src={sub.img}
              alt={sub.subCategoryTitle}
              className="scale-105 group-hover:scale-125 smooth-transition "
            />
            {/* subCategory name */}
            <h2 className="uppercase font-semibold text-white w-24 flex flex-center  bg-shop-orange/80 absolute -bottom-10 left-1/2 -translate-x-1/2 group-hover:bottom-1/2 group-hover:translate-y-1/2 smooth-transition">
              {sub.subCategoryTitle}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
