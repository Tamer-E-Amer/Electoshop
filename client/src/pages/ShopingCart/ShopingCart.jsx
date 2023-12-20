import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineCreditCard, AiOutlineShoppingCart } from "react-icons/ai";
import { PageHeader, CartItem, Button } from "./../../components";
import {
  getTotalPrice,
  getFees,
  emptyCart,
} from "../../redux/slices/cartSlice";
import { MdOutlineDelete } from "react-icons/md";

const ShopingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  dispatch(getTotalPrice());
  dispatch(getFees());
  const cartPrice = cartItems.totalPrice;
  const fees = cartItems.fees;
  return (
    <>
      {/* page Header */}
      <PageHeader title={"Yor shoping cart"} />
      <div className="sm:container px-4 ">
        {cartItems.items.length > 0 ? (
          <>
            {/*  cart table and info. */}
            <div className="flex items-start justify-between flex-col gap-4 md:flex-row my-8">
              {/*  cart */}
              <div className=" basis-2/3 w-full space-y-2">
                {/* cart header */}
                <div className="px-4 sm:px-16 flex flex-between text-sm text-shop-gray-dark font-semibold bg-shop-gray-border py-2 w-full sticky top-16 md:top-52 lg:top-56 ">
                  {" "}
                  <span>Cart items</span>
                  <div className="flex flex-center gap-2 group">
                    <MdOutlineDelete className="group-hover:text-red-600 text-xl" />
                    <span
                      className="group-hover:text-red-600 hover:underline group-hover:cursor-pointer"
                      onClick={() => {
                        dispatch(emptyCart());
                      }}
                    >
                      Empty shopping cart
                    </span>
                  </div>
                </div>
                {/* cart card */}
                {cartItems.items.map((item) => (
                  <CartItem
                    title={item.title}
                    price={item.price}
                    id={item.id}
                    quantity={item.quantity}
                    img={item.img}
                    isAvailable={item.isAvailable}
                  />
                ))}
              </div>
              {/* info */}
              <div className=" basis-1/3 w-full border-[1px] border-shop-gray-border sticky top-16 sm: md:top-52 lg:top-56 ">
                {/* title */}
                <h2 className="text-center text-sm text-shop-gray-dark font-semibold bg-shop-gray-border py-2 w-full">
                  There are{" "}
                  <span className="text-shop-blue-dark font-bold">
                    ({cartItems.items.length} Items)
                  </span>{" "}
                  in your cart
                </h2>
                {/*  totals and shipping */}
                <div className="p-4 flex flex-col gap-2 mb-6">
                  <div className=" text-sm text-shop-gray-dark flex flex-between px-4">
                    <h3>Items price</h3>
                    <span className="font-semibold">${cartPrice}</span>
                  </div>
                  <div className=" text-sm text-shop-gray-dark flex flex-between px-4">
                    <h3>Shipping fees</h3>
                    <span className="font-semibold">{fees}</span>
                  </div>
                  <hr />
                  <div className="text-black text-lg font-semibold flex flex-between px-4">
                    <h3 className="uppercase ">total</h3>
                    <span className="font-semibold">${cartPrice + fees}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* shipping bar */}
            <div className=" h-auto p-2 w-full bg-shop-green-light mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-evenly gap-2 text-sm text-black">
              <span>
                Shipping will be by{" "}
                <span className="font-semibold">Aramex</span>{" "}
              </span>
              <span className="self-end">
                Delevery date: <span className="font-semibold">01.09.2023</span>
              </span>
            </div>
            {/* Action buttons */}

            <div className="flex flex-col sm:flex-row gap-2 mb-6">
              <Button
                title={"Check out"}
                icon={<AiOutlineCreditCard className="text-2xl" />}
                style={"button primary"}
              />

              <Link to={"/"} className="w-full">
                <Button
                  title={"continue shopping"}
                  icon={<AiOutlineShoppingCart className="text-2xl" />}
                  style={"button secondery"}
                />
              </Link>
            </div>
          </>
        ) : (
          <div className="text-xl text-shop-blue-dark text-center py-16 h-[300px]">
            {" "}
            Your cart is empty !!!
          </div>
        )}
      </div>
    </>
  );
};

export default ShopingCart;
