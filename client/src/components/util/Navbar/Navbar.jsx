import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiMail } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import { FaBarsStaggered } from "react-icons/fa6";
import { NavMobileMenu, CartMenu } from "./../../../components";
const Navbar = () => {
  const cartItemsCount = useSelector(
    (state) => state.cart.cartItems.items.length
  );
  // console.log("cart items count", cartItemsCount);
  const [isMenuDisplayed, setIsMenuDisplayed] = useState(0);
  const toggleNavbarMobileMenu = () => {
    setIsMenuDisplayed((prev) => !prev);
  };
  return (
    <header className="relative bg-white sticky top-0 z-50 shadow-md pb-0 lg:pb-4">
      <div className="sm:container h-[60px] md:h-[140px] flex  flex-between px-4 pt-4 gap-6 ">
        {/* logo */}
        <div className="hidden  relative bg-shop-blue-dark w-[150px] lg:w-[200px] h-[60%] lg:h-[100%] px-4 md:flex flex-start pt-2 lg:pt-6">
          <Link to="/">
            <img src="/img/logo.png" alt="logo" />
          </Link>
          <span className="absolute bottom-0 left-0 border-b-[15px] lg:border-b-[30px] border-b-white border-r-transparent border-r-[75px] lg:border-r-[100px] border-l-transparent border-l-[75px] lg:border-l-[100px]"></span>
        </div>
        {/* logo mobile */}
        <div className=" md:hidden flex flex-start h-[60px] pt-2">
          <Link to={"/"}>
            <img src="/img/logo-mobil.png" alt="logo" />
          </Link>
        </div>
        {/* mobile menu*/}
        <FaBarsStaggered
          className="block md:hidden text-2xl text-shop-gray-dark cursor-pointer hover:text-shop-blue-dark smooth-transition"
          onClick={() => {
            toggleNavbarMobileMenu();
          }}
        />

        {/* navigation */}
        <div className="hidden md:block flex-1">
          {/* loginbar */}
          <div className="flex flex-end lg:justify-between border-b-[1px] border-b-shop-gray-light py-2 mb-2">
            <div className="hidden lg:flex flex-center gap-1 text-sm text-shop-gray-dark">
              <HiMail className="text-xl" />
              <span>E-Mail:support@electroshop.com</span>
            </div>
            <div className="hidden lg:flex flex-center gap-1 text-sm text-shop-gray-dark">
              <BsFillTelephoneFill className="text-lg" />
              <span>Hotline:0123456789</span>
            </div>
            {/* login-register button */}
            <div className="flex flex-center gap-4 ">
              <Link to={"/register"}>
                <button className="text-shop-gray-dark text-xs font-semibold hover:underline transition hover:text-shop-blue-dark">
                  REGISTER
                </button>
              </Link>
              <Link to={"/login"}>
                <button className=" border-[1px] border-shop-orange  bg-shop-orange text-white text-xs font-semibold flex flex-center rounded-full px-8 py-2 hover:bg-white hover:border hover:text-shop-blue-dark  hover:border-shop-blue-dark transition">
                  LOGIN
                </button>
              </Link>
            </div>
          </div>
          {/* cartbar */}
          <div className="flex flex-between px-4 text-shop-blue-dark py-4 ">
            {/* links */}
            <div></div>
            <div className="flex flex-center gap-6 text-lg ">
              <Link to="/" className="hover:underline">
                <span>Home</span>
              </Link>
              <Link to="/" className="hover:underline">
                <span>About</span>
              </Link>
              <Link to="/" className="hover:underline">
                <span>Contact us</span>
              </Link>
            </div>
            {/* cart */}
            <div className="flex flex-center gap-6 text-shop-gray-dark">
              <div className="h-6 w-6">
                <AiOutlineUser className="text-3xl hover:text-4xl cursor-pointer transition-all duration-300" />
              </div>
              <div className="h-6 w-6 relative">
                <AiOutlineHeart className="text-3xl hover:text-4xl cursor-pointer transition-all duration-300" />
                <div className="flex flex-center absolute top-[-13px] left-[-13px] w-6 h-6 rounded-full bg-red-600 text-white text-sm">
                  0
                </div>
              </div>
              <div className="h-6 w-6 relative group">
                <AiOutlineShoppingCart className="text-3xl hover:text-4xl cursor-pointer transition-all duration-300" />
                <div className="flex flex-center absolute top-[-15px] left-[-15px] w-6 h-6 rounded-full bg-red-600 text-white text-sm">
                  {cartItemsCount}
                </div>
                {cartItemsCount > 0 && <CartMenu />}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Menu appears on the bottom of the page with small devices */}
      {isMenuDisplayed == 1 && (
        <NavMobileMenu onClickFunction={toggleNavbarMobileMenu} />
      )}
    </header>
  );
};

export default Navbar;
