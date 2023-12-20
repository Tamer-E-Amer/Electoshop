import React, { useState } from "react";
import categoryData from "./../../../data/categories.json";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
const CategoryMenu = ({ screen }) => {
  const navigate = useNavigate();
  const [currentCategory, setCurrentCategory] = useState("");
  return (
    <div
      className={` ${
        screen == "smallAndMobile"
          ? "invisible -left-[320px] group-hover:visible absolute top-[70px] group-hover:-left-4 sm:group-hover:-left-20 w-[240px] h-screen py-4 bg-shop-bg-gray z-50 smooth-transition"
          : "w-[320px]  bg-shop-bg-gray h-0 absolute left-0 top-[70px] z-50 group-hover:h-screen smooth-transition"
      } `}
    >
      <div className="relative w-full h-[100%] ">
        {/* menu arrow */}
        <div className="hidden group-hover:block w-[10px] h-[10px] bg-shop-bg-gray absolute -top-4 md:top-0 left-4 sm:left-20 rotate-45 -translate-y-1/2"></div>
        {/*  menu data */}
        <div className="hidden pt-8 w-full group-hover:flex flex-col">
          {categoryData.categories.map((cat) => (
            <div>
              {/* category item */}
              <div
                className="bg-shop-bg-gray h-16  flex  flex-between px-8 hover:bg-shop-orange hover:text-white text-shop-gray-dark"
                key={cat.id}
                onClick={() => {
                  currentCategory !== cat.title
                    ? setCurrentCategory(cat.title)
                    : setCurrentCategory("");
                }}
              >
                {/* icon and name */}
                <div className="flex gap-2 font-semibold text-sm ">
                  <img
                    src={`/img/icons/${cat.icon}`}
                    alt=""
                    className="h-6 w-6"
                  />
                  <h3 className="capitalize">{cat.title}</h3>
                </div>
                {/* submenu icon */}
                {cat.hasSubCateogry == 1 &&
                  (currentCategory !== cat.title ? (
                    <MdOutlineKeyboardArrowDown className="text-2xl " />
                  ) : (
                    <MdOutlineKeyboardArrowUp className="text-2xl " />
                  ))}
              </div>
              {/* sub categories */}
              <div className="flex flex-col items-center  bg-shop-gray-border">
                {/* subCategory Item */}
                {cat.title === currentCategory &&
                  cat.hasSubCateogry == 1 &&
                  cat.subCategories.map((sub) => (
                    <div
                      className="w-full h-12 text-shop-gray-dark text-sm font-semibold flex flex-center hover:bg-shop-blue-dark hover:text-white capitalize"
                      onClick={() => {
                        navigate(cat.link);
                      }}
                    >
                      {sub.subCategoryTitle}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
