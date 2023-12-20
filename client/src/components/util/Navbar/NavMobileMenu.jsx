import React from "react";
import { Link } from "react-router-dom";
import { navMenuItems } from "../../../data/constants";
const NavMobileMenu = ({ onClickFunction }) => {
  return (
    <div className="md:hidden w-full h-[300px] bg-shop-gray-light absolute -bottom-[300px] z-50 ">
      <div className="    bg-shop-gray-light w-full ">
        {/* upper triangle in the menu */}
        <div className="sm:container relative">
          <div className="h-[10px] w-[10px] bg-shop-gray-light rotate-45 absolute top-0 right-4 -translate-y-1/2"></div>
        </div>
        {/* menu items*/}
        <div className="pt-4 w-full">
          {navMenuItems?.map((item) => (
            <Link to={`${item.link}`} key={item.id} onClick={onClickFunction}>
              <h3 className=" uppercase text-sm font-semibold bg-shop-gray-light py-4 text-center  cursor-pointer hover:bg-shop-orange hover:text-white ">
                {item.linkTitle}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavMobileMenu;
