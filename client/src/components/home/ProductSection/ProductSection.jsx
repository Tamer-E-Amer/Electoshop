import React, { useState } from "react";
import { ProductCardPortrait } from "../../../components";
import data from "./../../../data/products.json";
const ProductSection = ({ title, titleDescription, type }) => {
  const [productData, setProductDate] = useState(
    data.products.filter((p) => p.type === `${type}`)
  );
  console.log(`products data of type ${type}`, productData);
  return (
    <section className="py-4 h-auto mb-8">
      <div className="container px-4">
        {/* header */}
        <div className="flex gap-2 sm:gap-4 flex-col sm:flex-row flex-center py-6 ">
          <h2 className="text-shop-gray-dark text-lg capitalize font-semibold">
            {title}
          </h2>
          <p className="flex-1 text-sm text-shop-gray-dark text-center sm:text-left">
            {titleDescription}
          </p>
        </div>
        {/* product cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
          {productData.map((item) => (
            <ProductCardPortrait
              id={item.id}
              title={item.name}
              price={item.price}
              description={`${item.description.substr(0, 100)}...`}
              img={item.img}
              isNew={item.isNew}
              isAvailable={item.isAvailable}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
