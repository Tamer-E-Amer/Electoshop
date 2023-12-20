import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa6";
const WelcomeBar = () => {
  return (
    <div className="bg-shop-green-dark py-2 w-full text-white text-sm font-semibold">
      <div className="container flex flex-center   px-4">
        <div className="flex flex-start gap-2">
          <FaHandHoldingHeart className="text-2xl" />
          <span>Welcome: Tamer Amer</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBar;
