import React from "react";
import { Link } from "react-router-dom";
import { LuDelete } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../../redux/slices/cartSlice";
import { ProductQuantityInCart } from "./../../../components";
const CartItem = ({ id, title, price, isAvailable, img, quantity }) => {
  console.log("Availability", isAvailable);
  console.log("image", img);
  const dispatch = useDispatch();
  return (
    <div className="flex items-start gap-4 h-auto py-4 border-b-[1px] border-b-shop-gray-border last:border-none">
      {/* img */}
      <div className="border-[1px] border-shop-gray-border p-2 w-[80px] h-[80px] sm:w-[160px] sm:h-[160px] cursor-pointer  group overflow-hidden">
        <img
          src={img}
          alt=""
          className="group-hover:scale-110 smooth-transition"
        />
      </div>
      {/* data */}
      <div className="flex items-start flex-col gap-2">
        <Link to={`/products/${id}`}>
          <h2 className="font-semibold text-lg text-shop-gray-dark cursor-pointer hover:underline">
            {title}{" "}
          </h2>
        </Link>
        <span className="text-shop-blue-dark text-2xl font-Bold">${price}</span>
        <span className="text-shop-green-dark text-sm font-semi-bold">
          {isAvailable === 1 ? (
            <span>AVAILABLE</span>
          ) : (
            <span className="text-red-600">NOT IN STOCK</span>
          )}
        </span>

        <span className="text-shop-gray-dark text-sm ">
          {price > 350 ? "Can be shipped for free" : ""}
        </span>
        {/* Action button */}
        <div className="flex items-center text-sm text-shop-gray-dark gap-4">
          <ProductQuantityInCart qnt={quantity} id={id} />

          <div className=" text-red-500 border-l-[1px] border-l-shop-gray-border px-4 group flex items-center gap-1">
            <LuDelete className="text-xl" />
            <span
              className="cursor-pointer group-hover:underline"
              onClick={() => {
                dispatch(removeItemFromCart({ id }));
              }}
            >
              Delete
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
