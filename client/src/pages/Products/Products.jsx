import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PageHeader, Filters, ProductsList } from "../../components";
import categoriesData from "./../../data/categories.json";
import useFetch from "../../hooks/useFetch";
import { priceComparisonSchema } from "../../validationSchemas/priceComparisonSchema";
import { AiOutlineClose } from "react-icons/ai";
import { CiFilter } from "react-icons/ci";
const Productscd = () => {
  /**
   * States
   */
  const [subCategoriesFilter, setSubCategoriesFilter] = useState([]);
  const [isHidden, setIsHidden] = useState(1);
  const [sort, setSort] = useState("asc");
  const [filteredProductsByCategories, setFilteredProductsByCategories] =
    useState([]);
  const [filteredProductsByPrice, setFilteredProductsByPrice] = useState([]);
  /**
   * Variables
   */
  const { catID, subCatID } = useParams();
  console.log("id", catID, "sub", subCatID);
  const { loading, data } = useFetch(catID, subCatID);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(priceComparisonSchema),
  });

  // category of the current page
  const category = categoriesData.categories.find((c) => {
    if (c.title === catID) {
      return c;
    }
  });

  const combinedFilteredProduct =
    filteredProductsByCategories.length > 0
      ? filteredProductsByCategories
      : data;

  const finalFilteredProducts =
    filteredProductsByPrice.length > 0
      ? filteredProductsByPrice.filter((product) =>
          combinedFilteredProduct.includes(product)
        )
      : combinedFilteredProduct;

  /**
   * Functions
   */

  // sub categories change handler
  const subCategoriesChangeHandler = (value) => {
    setSubCategoriesFilter((prev) => {
      const selectedValues = prev.includes(value)
        ? prev.filter((sub) => sub !== value)
        : [...prev, value];

      const filteredByCategory = data.filter((p) => {
        return selectedValues.some((subCat) => p.subCategory.includes(subCat));
      });

      setFilteredProductsByCategories(filteredByCategory);
      return selectedValues;
    });
  };

  // sorting products
  const sortProducts = (items, sortType) => {
    if (sortType === "asc") {
      items.sort((a, b) => a.price - b.price);
    }

    if (sortType === "desc") {
      items.sort((a, b) => b.price - a.price);
    }
  };

  // filter products be price
  const filterByPrice = ({ minPrice, maxPrice }) => {
    console.log(minPrice, maxPrice);

    const filterByPrice = data.filter(
      (product) =>
        product.price >= parseFloat(minPrice) &&
        product.price <= parseFloat(maxPrice)
    );
    setFilteredProductsByPrice(filterByPrice);
  };

  // get subcategories
  const getSubCategories = () => {
    return (
      <>
        {category.subCategories.map((sub) => (
          <div className="flex items-center gap-2 ">
            <input
              type="checkbox"
              name={sub.subCategoryTitle}
              id={sub.subCategoryTitle}
              value={sub.subCategoryTitle}
              checked={subCategoriesFilter.includes(`${sub.subCategoryTitle}`)}
              onChange={() => {
                subCategoriesChangeHandler(`${sub.subCategoryTitle}`);
              }}
            />
            <label
              htmlFor={sub.subCategoryTitle}
              className="cursor-pointer uppercase"
            >
              {sub.subCategoryTitle}
            </label>
          </div>
        ))}
      </>
    );
  };

  // sort products
  sortProducts(finalFilteredProducts, sort);

  const sortChangeHandler = (e) => {
    setSort(e.target.value);

    sortProducts(finalFilteredProducts, sort);
  };
  ///////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <PageHeader title={catID} />
      {/* filter and sort section with mobile */}
      <div className="sticky top-[60px] z-40">
        <div className=" text-sm font-semibold w-full px-8 h-[40px] bg-shop-bg-gray-light mb-2 sm:hidden  flex flex-between  ">
          <span className="text-shop-gray-dark">
            {data.length} result in this category
          </span>
          <span
            className=" text-shop-blue-dark capitalize hover:underline cursor-pointer "
            onClick={() => {
              setIsHidden((prev) => !prev);
            }}
          >
            filter
          </span>
        </div>

        {/* filter screen on mobile */}
        {isHidden == 0 && (
          <div className="w-full h-auto py-4 bg-shop-bg-gray-light sm:hidden ">
            <div className="p-6  w-full  relative">
              {/* close button */}
              <div
                className="h-6 w-6 border-shop-gray-dark text-red-500 absolute top-0 right-6 cursor-pointer "
                onClick={() => setIsHidden(1)}
              >
                <AiOutlineClose className="text-lg" />
              </div>
              <Filters filterUIFunction={getSubCategories()} />
            </div>
          </div>
        )}
      </div>

      {/*  product section */}
      <section className="container min-h-[550px] px-4 flex flex-col sm:flex-row items-start justify-center sm:gap-4 ">
        {/* side Menu */}
        <div className="hidden sm:block basis-1/4 bg-shop-bg-gray-light h-auto py-8 px-4 text-sm text-shop-gray-dark space-y-8 sticky top-[160px]">
          {/* filter by category */}
          <div className="">
            <h2 className="font-semibold mb-2">Filter by category</h2>
            <div className="flex flex-col gap-2">
              {/* sub Categories */}
              {getSubCategories()}
            </div>
          </div>
          {/* filter by price */}
          <div className="">
            <h2 className="font-semibold mb-2">Filter by price. Between:</h2>
            <form
              className="flex  flex-center  flex-col gap-2 lg:flex-row"
              onSubmit={handleSubmit(filterByPrice)}
            >
              <div>
                <input
                  type="text"
                  {...register("minPrice", {
                    required: "Min price is required",
                  })}
                  className="w-full h-8 outline-none border-none  text-center bg-white/80"
                />
                {errors.minPrice && (
                  <span className="text-sm text-red-500 lg:hidden">
                    {errors.minPrice.message}
                  </span>
                )}
              </div>
              <span className="hidden lg:block">:</span>
              <div>
                <input
                  {...register("maxPrice")}
                  type="text"
                  className="w-full h-8 outline-none border-none  text-center bg-white/80"
                />
                {errors.maxPrice && (
                  <span className="text-sm text-red-500 lg:hidden">
                    {errors.maxPrice.message}
                  </span>
                )}
              </div>

              <button
                className="h-8 w-full bg-shop-bg-footer text-white text-sm flex flex-center gap-2 px-2 md:px-4 hover:bg-shop-gray-dark"
                type="submit"
              >
                <CiFilter className="text-lg" />
                <span>Apply</span>
              </button>
            </form>
            {/* error message in large screens */}
            <div className="mt-2 hidden lg:flex flex-col">
              {errors.minPrice && (
                <span className="text-red-600 text-sm ">
                  {errors.minPrice.message}
                </span>
              )}
              {errors.maxPrice && (
                <span className="text-red-600 text-sm ">
                  {errors.maxPrice.message}
                </span>
              )}
            </div>
          </div>
          {/* sort by  */}
          <div className="">
            <h2 className="font-semibold mb-2">Sort by</h2>
            <div className="flex flex-col gap-2 ">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="sortByPrice"
                  id="sortAsc"
                  value={"asc"}
                  defaultChecked
                  onChange={(e) => {
                    sortChangeHandler(e);
                  }}
                />
                <label htmlFor="sortAsc" className="cursor-pointer">
                  {" "}
                  Sort by price ascending
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="sortByPrice"
                  id="sortDsc"
                  value={"desc"}
                  onChange={(e) => {
                    sortChangeHandler(e);
                  }}
                />
                <label htmlFor="sortDsc" className="cursor-pointer">
                  {" "}
                  Sort by price descending
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* products */}
        <ProductsList
          filteredProducts={finalFilteredProducts}
          loading={loading}
        />
      </section>
    </>
  );
};

export default Products;
