import React from "react";

const PageHeader = ({ title }) => {
  return (
    <div className=" text-lg sm:text-2xl text-white mb-4 sm:mb-8 capitalize">
      <div className="py-4 sm:py-6 flex flex-center bg-[url('/img/bgBack.png')] bg-cover">
        {title}
      </div>
    </div>
  );
};

export default PageHeader;
