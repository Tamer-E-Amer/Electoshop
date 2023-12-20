import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  AiOutlineFileSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { addToCart } from "../../../redux/slices/cartSlice";

const ProductCardPortrait = ({
  id,
  title,
  price,
  description,
  img,
  isNew,
  isAvailable,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="w-[206px] drop-shadow-[10px_10px_rgb(105,201,134)] sm:cursor-pointer group relative overflow-hidden">
      <img src={img} alt="" srcset="" />
      {/* product details */}
      <div className="bg-shop-orange/80 absolute h-[150px] w-full -bottom-[160px] left-0  group-hover:bottom-0 smooth-transition cursor-default ">
        {/* description */}
        <p className="text-white text-sm p-2 text-justify">{description}</p>
        <hr />
        {/* icons */}
        <div className="py-2 px-12 flex flex-between text-white text-2xl">
          <Link to={`/products/${id}`}>
            <AiOutlineFileSearch className="hover:text-shop-blue-dark cursor-pointer" />
          </Link>
          <AiOutlineHeart className="hover:text-shop-blue-dark cursor-pointer" />
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
        </div>
      </div>
      {isNew === 1 && (
        <img src="/img/newBage.png" alt="" className="absolute top-2 left-5" />
      )}
    </div>
  );
};

export default ProductCardPortrait;
