import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { getTotalPrice } from "../../../../redux/slices/cartSlice.js";
import { AiOutlineCreditCard, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartMenuItem, Button, CartItem } from "./../../../../components";
import { getFees, getTotalPrice } from "../../../../redux/slices/cartSlice";

const CartMenu = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  dispatch(getTotalPrice());
  dispatch(getFees());
  const totalPrice = cartItems.totalPrice;

  return (
    <div className="hidden group-hover:block w-[300px] h-auto border-[1px] border-shop-gray-border bg-white  absolute -right-4 top-10 z-50 px-2">
      {/* arrow */}
      <div className="relative  ">
        <div className="h-0 w-0 border-l-transparent border-l-8 border-r-transparent border-r-8 border-b-8 border-b-shop-orange absolute right-2 top-0 -translate-y-2"></div>
      </div>
      {/* Cart menu data */}
      <div className="p-4">
        {/* <CartMenuItem />
        <CartMenuItem />
        <CartMenuItem /> */}
        {cartItems.items.map((item) => (
          <CartMenuItem
            id={item.id}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            img={item.img}
          />
        ))}
      </div>
      {/* total */}
      <div className="w-full h-16 border-2 border-shop-gray-dark border-dashed flex flex-center bg-shop-bg-gray-light">
        <span className="text-2xl text-black font-semibold">
          {/* TOTAL: ${getTotalPrice()} */}${totalPrice}
        </span>
      </div>
      {/* buttons */}
      <div className="flex flex-col gap-2 my-4">
        <Button
          title={"checkout"}
          icon={<AiOutlineCreditCard className="text-2xl" />}
          style={"button primary"}
        />
        <Link to={"/cart"}>
          <Button
            title={"view cart"}
            icon={<AiOutlineShoppingCart className="text-2xl" />}
            style={"button secondery"}
          />
        </Link>
      </div>
    </div>
  );
};

export default CartMenu;
