import React from "react";

const ShopAdvantages = () => {
  return (
    <div className="h-auto lg:h-[126px] bg-[url('/img/shopAdvantagesBg.png')] bg-cover bg-no-repeat p-4 flex flex-center ">
      <div className="container px-8 grid grid-cols-2 lg:grid-cols-4 place-items-center gap-4 ">
        <div className="flex gap-2 flex-center text-white">
          <div className="w-[100px] h-[70px] flex items-center justify-end">
            <img src="/img/delivery.png" alt="" className="w-16 lg:w-20" />
          </div>
          <div>
            <h3 className="text-xs  lg:text-sm uppercase">Free delivery</h3>
            <h3 className="text-xs  lg:text-sm uppercase">at $20</h3>
          </div>
        </div>
        <div className="flex gap-2 flex-center text-white">
          <div className="w-[100px] h-[70px] flex items-center justify-end">
            <img src="/img/money.png" alt="" className="w-10 lg:w-14" />
          </div>
          <div>
            <h3 className="text-xs  lg:text-sm uppercase">money back</h3>
            <h3 className="text-xs  lg:text-sm uppercase"> guaranteed</h3>
          </div>
        </div>
        <div className="flex gap-2 flex-center text-white">
          <div className="w-[100px] h-[70px] flex items-center justify-end">
            <img src="/img/wallet.png" alt="" className="w-10 lg:w-14" />
          </div>
          <div>
            <h3 className="text-xs  lg:text-sm uppercase">cash on delivery</h3>
            <h3 className="text-xs  lg:text-sm uppercase">at from $20</h3>
          </div>
        </div>
        <div className="flex gap-2 flex-center text-white">
          <div className="w-[100px] h-[70px] flex items-center justify-end">
            <img src="/img/support.png" alt="" className="w-10 lg:w-14" />
          </div>
          <div>
            <h3 className="text-xs  lg:text-sm uppercase">technical support</h3>
            <h3 className="text-xs  lg:text-sm uppercase">at 24/7</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopAdvantages;
