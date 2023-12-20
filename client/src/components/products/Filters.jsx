import React from "react";
import { Button } from "./../../components";
import { CiFilter } from "react-icons/ci";
const Filters = ({ filterUIFunction }) => {
  return (
    <>
      <div className=" bg-white h-auto p-4 text-sm text-shop-gray-dark space-y-8 border-2 border-shop-gray-border ">
        {/* filter by category */}
        <div className="">
          <h2 className="font-semibold mb-2">Filter by category</h2>
          <div className="grid grid-cols-2 gap-2">{filterUIFunction}</div>
        </div>
        {/* filter by price */}
        <div className="">
          <h2 className="font-semibold mb-2">Filter by price</h2>
          <div className="flex gap-2 ">
            <span>0</span>
            <input type="range" name="price" id="price" min={0} max={100} />
            <span>1000</span>
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
              />
              <label htmlFor="sortDsc" className="cursor-pointer">
                {" "}
                Sort by price descending
              </label>
            </div>
          </div>
        </div>
        {/* filter button */}
        <Button
          title={"apply filter"}
          icon={<CiFilter className="text-2xl" />}
          style={"button primary"}
        />
      </div>
    </>
  );
};

export default Filters;
