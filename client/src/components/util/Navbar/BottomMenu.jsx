import React from "react";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
const BottomMenu = () => {
  const cartItemNumber = useSelector(
    (state) => state.cart.cartItems.items.length
  );

  return (
    <div className="fixed bottom-0 left-0 md:hidden h-[60px] w-full border-t-[1px] border-t-shop-gray-light/80 shadow-inner bg-shop-bg-gray-light flex flex-center gap-12 pt-4 ">
      <div className="h-6 w-6">
        <AiOutlineUser className="text-3xl hover:text-4xl cursor-pointer transition-all duration-300" />
      </div>
      <div className="h-6 w-6 relative">
        <AiOutlineHeart className="text-3xl hover:text-4xl cursor-pointer transition-all duration-300" />
        <div className="flex flex-center absolute top-[-13px] left-[-13px] w-6 h-6 rounded-full bg-red-600 text-white text-sm">
          0
        </div>
      </div>
      <Link to={cartItemNumber != 0 ? "/cart" : ""}>
        <div className="h-6 w-6 relative">
          <AiOutlineShoppingCart className="text-3xl hover:text-4xl cursor-pointer transition-all duration-300" />
          <div className="flex flex-center absolute top-[-15px] left-[-15px] w-6 h-6 rounded-full bg-red-600 text-white text-sm">
            {cartItemNumber}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BottomMenu;
