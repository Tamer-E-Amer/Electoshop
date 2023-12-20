import React from "react";

const Skelton = () => {
  return (
    <div className="p-2 w-[350px] h-[370px] sm:w-[160px] sm:h-[190px] border-[1px] border-shop-gray-border bg-shop-bg-gray flex  justify-start gap-2 flex-col   ">
      {/* img position */}
      <div className="bg-shop-gray-border w-full h-[370px] sm:h-[180px]"></div>
      {/* bottons positions */}
      <div className="w-full bg-shop-gray-border flex flex-center p-2"></div>
    </div>
  );
};

export default Skelton;
