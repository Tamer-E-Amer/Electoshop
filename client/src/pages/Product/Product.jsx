import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  PageHeader,
  Button,
  ProductQuantityInProductDetails,
  // ButtonLight,
} from "./../../components";
import { BiStore } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import productData from "./../../data/products.json";
import { addToCart } from "../../redux/slices/cartSlice";
import { CiShop } from "react-icons/ci";
const Product = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [products, setProducts] = useState(productData);
  const product = products.products.find((el) => el.id === params.id * 1);
  const [currentMainImg, setCurrentMainImg] = useState(product.img[0]);
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

  console.log(product.id);
  // change main image
  const changeMainImg = (img) => {
    setCurrentMainImg(img);
  };
  return (
    <>
      <PageHeader title={"Product details"} />
      <section className="container px-4 mb-4 flex flex-col sm:flex-row items-start justify-between gap-8">
        {/* product images */}
        <div className="space-y-4 w-full sm:w-2/5 md:w-1/3  ">
          {/* large image */}
          <div className=" flex flex-center w-full sm:w-[240px] lg:w-[385px] h-auto border-[1px] border-shop-gray-border">
            <img src={currentMainImg} alt="" className="object-fit" />
          </div>
          {/* small images */}
          <div className="flex flex-center gap-2">
            {product.img?.map((img, index) => (
              <div className="w-[60px] h-[60px] border-[1px] border-shop-gray-border cursor-pointer hover:border-shop-orange group overflow-hidden">
                <img
                  key={index}
                  src={img}
                  alt=""
                  srcset=""
                  className="group-hover:scale-110 smooth-transition"
                  onClick={() => {
                    changeMainImg(img);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        {/* product details */}
        <div className=" flex-1 h-[600px]">
          <h2 className="font-semibold text-xl md:text-3xl text-shop-gray-dark mb-6 border-[1px] border-shop-gray-border p-2 text-center bg-shop-bg-gray-light">
            {product.name}
          </h2>
          <div className="space-y-4">
            <h2 className="font-semibold text-sm text-shop-gray-dark flex items-center gap-4">
              <h2 className="w-[110px]">AVAILABLE:</h2>{" "}
              <div className="flex flex-center gap-2 text-shop-green-dark">
                {product.isAvailable === 1 ? (
                  <>
                    <span>In stock</span> <BiStore className="text-lg " />
                  </>
                ) : (
                  <>
                    <span className="text-red-500">Not In stock</span>{" "}
                    <BiStore className="text-lg text-red-500 " />
                  </>
                )}
              </div>
            </h2>
            <h2 className="font-semibold text-sm text-shop-gray-dark flex items-center gap-4">
              <h2 className="w-[110px]">SN:</h2> <span>{product.sn}</span>
            </h2>
            <h2 className="font-semibold text-sm text-shop-gray-dark flex items-center gap-4">
              <h2 className="w-[110px]">CATEGORY:</h2>{" "}
              <span>{`${product.category.toUpperCase()} -> ${product.subCategory[0].toUpperCase()}`}</span>
            </h2>
            <p className="text-sm text-shop-gray-dark">{product.description}</p>
            <h1 className="text-5xl text-shop-blue-dark font-semibold">
              ${product.price}
            </h1>
            <h2 className="font-semibold text-sm text-shop-gray-dark flex items-center gap-4">
              <h2 className="w-[110px]">COLOR:</h2>{" "}
              <span>{product.color.map((color) => color.concat(" "))}</span>
            </h2>
            <h2 className="font-semibold text-sm text-shop-gray-dark flex items-center gap-4">
              <h2 className="w-[110px]">VENDOR:</h2>{" "}
              <span>{product.vendor}</span>
            </h2>
            {/* quantity */}
            <h2 className="font-semibold text-sm text-shop-gray-dark flex items-center gap-4">
              <h2 className="w-[110px]">Quantity:</h2>{" "}
              {/* <ProductQuantity id={params.id} qnt={1} /> */}
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
            </h2>

            {/* Action buttons */}

            <div className="flex flex-col lg:flex-row gap-2 mb-6">
              {product.isAvailable === 1 && (
                <Button
                  title={"Add to cart"}
                  icon={<AiOutlineShoppingCart className="text-2xl" />}
                  style={"button primary"}
                  onClickHandler={() => {
                    dispatch(
                      addToCart({
                        id: product.id,
                        title: product.name,
                        img: product.img[0],
                        price: product.price,
                        quantity: productCount,
                        isAvailable: product.isAvailable,
                      })
                    );
                  }}
                />
              )}
              <Button
                title={"Add to wish list"}
                icon={<AiOutlineHeart className="text-2xl" />}
                onClickHandler={() => {}}
                style={"button secondery"}
              />
              <Link
                to={`/products/cat/${product.category}`}
                className={"w-full"}
              >
                <Button
                  title={"Continue shopping"}
                  icon={<CiShop className="text-2xl" />}
                  onClickHandler={() => {}}
                  style={"button secondery"}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
