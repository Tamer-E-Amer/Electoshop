import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { priceComparisonSchema } from "../../validationSchemas/priceComparisonSchema";
import { CiFilter } from "react-icons/ci";
import {
  setFilteredProductsByCategories,
  setFilteredProductsByPrice,
  setSort,
} from "../../redux/slices/productsSlice";

const FilterAndSorting = ({ data, category }) => {
  /**
   * states
   */
  const [subCategoriesFilter, setSubCategoriesFilter] = useState([]);
  /**
   * variables
   */
  const sort = useSelector((state) => state.products.sort);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(priceComparisonSchema),
  });

  /**
   * functions
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

      dispatch(setFilteredProductsByCategories(filteredByCategory));
      return selectedValues;
    });
  };

  console.log("sort type", sort);
  // sort change handler
  const sortChangeHandler = (e) => {
    const selectedSortType = e.target.value;
    dispatch(setSort(selectedSortType));

    sortProducts(data, sort);
  };
  // sorting products

  const sortProducts = (items, sortType) => {
    let sortedProducts = [...items];
    if (sortType === "asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    }

    if (sortType === "desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
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
    dispatch(setFilteredProductsByPrice(filterByPrice));
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

  return (
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
  );
};

export default FilterAndSorting;
