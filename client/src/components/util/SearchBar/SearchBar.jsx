import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BiSolidCategory } from "react-icons/bi";
import { CategoryMenu } from "./../../../components";
const SearchBar = () => {
  return (
    <div className="bg-shop-blue-dark h-[70px] mt-2 flex flex-center sm:sticky md:top-[140px] lg:top-[150px] z-40 ">
      <div className="w-full flex flex-between gap-2 md:gap-6 px-4 sm:container ">
        {/* category button */}
        <div className="hidden relative group  bg-shop-orange text-white font-semibold h-[70px] w-[200px] md:flex flex-center gap-2 px-2 cursor-pointer hover:bg-shop-green-light hover:border-b-[1px] hover:border-b-shop-blue-dark group smooth-transition">
          <AiOutlineBars className="text-3xl group-hover:text-shop-blue-dark" />
          <span>CATEGEORIES</span>
          <CategoryMenu screen={"largeAndMedium"} />
        </div>

        {/* Mobile category menu */}
        <div className="group relative h-[70px] flex flex-center cursor-pointer">
          <BiSolidCategory className="text-white text-3xl md:hidden  group-hover:text-shop-orange smooth-transition " />
          <CategoryMenu screen={"smallAndMobile"} />
        </div>

        {/* searchbar */}

        <div className="flex-1 bg-white h-10 rounded-full px-4 flex flex-between">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search Electro shop ..."
            className="outline-none border-none w-full text-center text-shop-gray-dark"
          />
          <button className="group flex flex-center bg-shop-orange px-4 md:px-6 py-1 md:py-2 rounded-full">
            <BsSearch className="text-white text-lg group-hover:text-shop-blue-dark  hover:cursor-pointer" />
          </button>
        </div>
      </div>
      {/* Mobile category */}
    </div>
  );
};

export default SearchBar;
