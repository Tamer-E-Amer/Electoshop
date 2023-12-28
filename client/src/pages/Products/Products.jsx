import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  PageHeader,
  Filters,
  ProductsList,
  FilterAndSorting,
} from "../../components";
import categoriesData from "./../../data/categories.json";
import useFetch from "../../hooks/useFetch";
import { AiOutlineClose } from "react-icons/ai";
const Products = () => {
  /**
   * States
   */
  // const [subCategoriesFilter, setSubCategoriesFilter] = useState([]);
  const [isHidden, setIsHidden] = useState(1);
  // const [sort, setSort] = useState("asc");

  /**
   * Variables
   */
  const { catID, subCatID } = useParams();
  const { loading, data } = useFetch(catID, subCatID);

  const filteredProductsByCategories = useSelector(
    (state) => state.products.filteredProductsByCategories
  );

  const filteredProductsByPrice = useSelector(
    (state) => state.products.filteredProductsByPrice
  );

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

  // // sub categories change handler
  // const subCategoriesChangeHandler = (value) => {
  //   setSubCategoriesFilter((prev) => {
  //     const selectedValues = prev.includes(value)
  //       ? prev.filter((sub) => sub !== value)
  //       : [...prev, value];

  //     const filteredByCategory = data.filter((p) => {
  //       return selectedValues.some((subCat) => p.subCategory.includes(subCat));
  //     });

  //     setFilteredProductsByCategories(filteredByCategory);
  //     return selectedValues;
  //   });
  // };

  // // sorting products
  // const sortProducts = (items, sortType) => {
  //   if (sortType === "asc") {
  //     items.sort((a, b) => a.price - b.price);
  //   }

  //   if (sortType === "desc") {
  //     items.sort((a, b) => b.price - a.price);
  //   }
  // };

  // // filter products be price
  // const filterByPrice = ({ minPrice, maxPrice }) => {
  //   console.log(minPrice, maxPrice);

  //   const filterByPrice = data.filter(
  //     (product) =>
  //       product.price >= parseFloat(minPrice) &&
  //       product.price <= parseFloat(maxPrice)
  //   );
  //   setFilteredProductsByPrice(filterByPrice);
  // };

  // // get subcategories
  // const getSubCategories = () => {
  //   return (
  //     <>
  //       {category.subCategories.map((sub) => (
  //         <div className="flex items-center gap-2 ">
  //           <input
  //             type="checkbox"
  //             name={sub.subCategoryTitle}
  //             id={sub.subCategoryTitle}
  //             value={sub.subCategoryTitle}
  //             checked={subCategoriesFilter.includes(`${sub.subCategoryTitle}`)}
  //             onChange={() => {
  //               subCategoriesChangeHandler(`${sub.subCategoryTitle}`);
  //             }}
  //           />
  //           <label
  //             htmlFor={sub.subCategoryTitle}
  //             className="cursor-pointer uppercase"
  //           >
  //             {sub.subCategoryTitle}
  //           </label>
  //         </div>
  //       ))}
  //     </>
  //   );
  // };

  // sort products
  // sortProducts(finalFilteredProducts, sort);

  // const sortChangeHandler = (e) => {
  //   setSort(e.target.value);

  //   sortProducts(finalFilteredProducts, sort);
  // };
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
        <FilterAndSorting data={data} category={category} />
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
