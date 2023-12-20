import React from "react";

const NavMenu = () => {
  return (
    <div className="md:hidden w-full h-[300px] bg-shop-gray-light absolute -bottom-[300px] z-20 ">
      <div className=" sm:container  relative bg-shop-gray-light w-full h-[100%]">
        {/* upper triangle in the menu */}
        <div className="h-[10px] w-[10px] bg-shop-gray-light rotate-45 absolute top-0 right-6 -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default NavMenu;
