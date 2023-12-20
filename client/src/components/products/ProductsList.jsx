import React from "react";
import ProductItemCard from "../util/ProductItemCard/ProductItemCard";
import Skelton from "../util/Skelton/Skelton";

const ProductsList = ({ filteredProducts, loading }) => {
  return (
    <div className="basis-auto sm:basis-3/4  mb-8 h-auto  sm:pl-4 grid gap-4 grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 place-items-center">
      {loading != true
        ? filteredProducts.map((product) => (
            <ProductItemCard
              title={product.name}
              img={product.img[0]}
              price={product.price}
              isAvailable={product.isAvailable}
              id={product.id}
              key={product.id}
            />
          ))
        : [1, 2, 3, 4, 5, 6].map(() => <Skelton />)}
    </div>
  );
};

export default ProductsList;
