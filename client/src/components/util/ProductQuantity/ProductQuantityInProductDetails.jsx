import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import {
//   incrementProductQnt,
//   decrementProductQnt,
// } from "../../../redux/slices/cartSlice";
const ProductQuantityInProductDetails = () => {
  const dispatch = useDispatch();
  // const product = useSelector((state) =>
  //   state.cart.products.find((product) => product.id === id)
  // );
  const [productCount, setProductCount] = useState(1);

  // increment product count

  const incrementProductCount = () => {
    setProductCount((prev) => prev + 1);
    // dispatch(incrementProductQnt());
  };

  // decrement product count
  const decrementProductCount = () => {
    setProductCount((prev) => (prev <= 1 ? 1 : prev - 1));
    // dispatch(decrementProductQnt({ quantity: qnt, id: id }));
  };

  return (
    <div className="flex flex-between text-lg text-shop-gray-dark">
      <button
        className="flex flex-center bg-shop-gray-border h-[30px] w-[30px]  hover:bg-shop-gray-light hover:text-white smooth-transition"
        onClick={decrementProductCount}
      >
        -
      </button>
      <div className="w-[60px] h-[30px] flex flex-center border-[1px] border-shop-gray-border">
        {productCount}
      </div>
      <button
        className="flex flex-center bg-shop-gray-border h-[30px] w-[30px] hover:bg-shop-gray-light  hover:text-white smooth-transition "
        onClick={() => {
          // dispatch(incrementProductQnt({ quantity: qnt, id: id }));
          // console.log("test increment");
          incrementProductCount();
        }}
      >
        +
      </button>
    </div>
  );
};

export default ProductQuantityInProductDetails;
