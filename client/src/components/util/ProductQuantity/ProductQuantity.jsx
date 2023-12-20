import React, { useState } from "react";

const ProductQuantity = () => {
  const [productCount, setProductCount] = useState(1);

  // increment product count

  const incrementProductCount = () => {
    setProductCount((prev) => prev + 1);
  };

  // decrement product count
  const decrementProductCount = () => {
    setProductCount((prev) => (prev <= 1 ? 1 : prev - 1));
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
        onClick={incrementProductCount}
      >
        +
      </button>
    </div>
  );
};

export default ProductQuantity;
