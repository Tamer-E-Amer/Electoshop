import React from "react";
import { IoIosMail } from "react-icons/io";
const Subscription = () => {
  return (
    <div className="bg-shop-green-dark h-auto ">
      <div className="container p-4 ">
        <p className="text-sm text-white text-center mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          explicabo ratione voluptatem a accusamus repudiandae architecto, iure
          aut! Minus sit eius maxime, esse adipisci fugiat distinctio quis
          nobis. Sed, debitis.
        </p>
        {/* subscription input */}
        <div className="bg-white h-12 rounded-full px-4 flex flex-between">
          <input
            type="text"
            name=""
            id=""
            placeholder="Subscribe Electro shop ..."
            className="outline-none border-none w-full text-center gap-6 text-shop-gray-dark"
          />
          <button className=" group flex flex-between gap-2 bg-shop-gray-dark hover:bg-shop-blue-dark smooth-transition px-6 md:px-8 py-1 md:py-2 rounded-full text-white">
            <IoIosMail className="text-2xl " />
            <span className="hidden sm:block">Subscribe</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
