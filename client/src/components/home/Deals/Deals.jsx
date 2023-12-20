import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  AiOutlineFileSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import productsData from "./../../../data/products.json";
import { addToCart } from "../../../redux/slices/cartSlice";
const Deals = () => {
  const [promoProducts, setPromoProducts] = useState(
    productsData.products.filter((product) => {
      if (product.type === "promo") return product;
    })
  );

  const dispatch = useDispatch();
  return (
    <div className=" container  p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center w-full h-auto">
      {promoProducts.map((p) => (
        <div
          key={p.id}
          className="flex flex-center border-[1px] w-full sm:w-[250px] h-[250px] border-shop-gray-light sm:cursor-pointer group relative overflow-hidden "
        >
          <img src={p.img[0]} alt="" className="w-[250px] " />
          {/* product details */}
          <div className="bg-shop-orange/80 absolute h-[120px] w-full -bottom-[120px] left-0  group-hover:bottom-0 smooth-transition cursor-default ">
            {/* description */}
            <p className="text-white text-sm p-2 text-justify">
              Lorem ipsum dolor sit met consectetur adipisicing elit.
              Perferendis vitae commodi adipis
            </p>
            <hr />
            <div className="py-2 px-12 flex flex-between text-white text-2xl">
              <Link to={`/products/${p.id}`}>
                <AiOutlineFileSearch className="hover:text-shop-blue-dark cursor-pointer" />
              </Link>
              <AiOutlineHeart className="hover:text-shop-blue-dark cursor-pointer" />
              <AiOutlineShoppingCart
                className="hover:text-shop-blue-dark cursor-pointer"
                onClick={() => {
                  dispatch(
                    addToCart({
                      id: p.id,
                      title: p.name,
                      img: p.img,
                      price: p.price,
                      quantity: 1,
                      isAvailable: p.isAvailable,
                    })
                  );
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Deals;
