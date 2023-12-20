import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  AiOutlineFileSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { addToCart } from "../../../redux/slices/cartSlice";

const ProductItemCard = ({ title, img, id, price, isAvailable }) => {
  const dispatch = useDispatch();
  return (
    <div className="p-2 w-full h-[370px] sm:w-[160px] sm:h-[190px] border-[1px] border-shop-gray-border bg-shop-bg-gray flex items-center justify-start gap-2 flex-col cursor-pointer group relative overflow-hidden  ">
      <div className="border-[1px] border-shop-gray-border relative overflow-hidden w-full h-full flex flex-center">
        <img src={`${img}`} alt="" srcset="" />
        {/* name  */}
        <div className="text-sm text-center absolute -top-[70px] left-0 h-[70px] sm:h-[50px] bg-shop-orange/80 w-full group-hover:top-0 flex flex-center text-white smooth-transition ">
          {title}
        </div>
      </div>
      <span className="text-sm text-center text-shop-gray-light group-hover:translate-y-12 smooth-transition ">
        {title}
      </span>
      <div className="absolute -bottom-6 group-hover:bottom-2 left-1/2 -translate-x-1/2 flex flex-between gap-4 text-xl text-shop-gray-dark  smooth-transition ">
        <Link to={`/products/${id}`}>
          <AiOutlineFileSearch className="hover:text-shop-blue-dark cursor-pointer" />
        </Link>
        <AiOutlineHeart className="hover:text-shop-blue-dark cursor-pointer" />
        {isAvailable === 1 ? (
          <AiOutlineShoppingCart
            className="hover:text-shop-blue-dark cursor-pointer"
            onClick={() => {
              dispatch(
                addToCart({
                  id,
                  title,
                  img,
                  price,
                  quantity: 1,
                  isAvailable,
                })
              );
            }}
          />
        ) : (
          <span className="text-sm text-red-700 font-semibold">N/A</span>
        )}
      </div>
    </div>
  );
};

export default ProductItemCard;
