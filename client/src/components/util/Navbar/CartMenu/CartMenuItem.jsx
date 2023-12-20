import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { removeItemFromCart } from "../../../../redux/slices/cartSlice";
const CartMenuItem = ({ id, title, price, quantity, img }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-between border-b-[1px] border-b-shop-gray-border  py-1 mb-2 cursor-pointer ">
      {/* image */}
      <div className="flex flex-center  w-12 h-12 border-[1px] border-shop-gray-border overflow-hidden">
        <img src={img} alt="" className="" />
      </div>
      {/* data */}
      <div className="flex flex-col gap-2 ">
        <Link to={`/products/${id}`}>
          <h3 className="text- text-shop-gray-dark font-semibold hover:underline">
            {title}
          </h3>
        </Link>
        {/* quantities */}
        <div className="flex flex-center gap-2">
          <span className="text-xs font-semibold">${price}</span>
          <div className="flex flex-center text-sm font-semibold w-6 h-6 rounded-full bg-shop-bg-gray-light p-2">
            {quantity}
          </div>
          <span className="text-xs  font-semibold">${quantity * price}</span>
        </div>
      </div>
      {/* button */}
      <div className="flex flex-center text-xl hover:text-red-500 hover:bg-red-100 w-8 h-8 rounded-full ">
        <AiOutlineDelete
          className=" "
          onClick={() => {
            dispatch(removeItemFromCart({ id }));
          }}
        />
      </div>
    </div>
  );
};

export default CartMenuItem;
