import React, { useState } from "react";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import categoryData from "./../../../data/categories.json";
import links from "./../../../data/navigationLinks.json";
const Footer = () => {
  const [categories, setCategories] = useState(categoryData);
  const [footerLinks, setFooterLinks] = useState(links);
  return (
    <footer className="bg-shop-bg-footer mb-14 md:mb-0">
      <div className="container p-4">
        {/* links */}
        <div className="flex items-start justify-between flex-col sm:flex-row gap-6 ">
          {/* base navigation */}
          <div className="space-y-2">
            {footerLinks?.baseLinks.map((link) => (
              <div
                className=" flex items-center text-sm text-white cursor-pointer group"
                key={link.id}
              >
                <MdOutlineKeyboardArrowRight className="text-lg group-hover:translate-x-1 smooth-transition" />
                <span className="group-hover:underline smooth-transition">
                  {link.link}
                </span>
              </div>
            ))}
          </div>
          {/* categories */}

          <div className="space-y-2">
            {categories?.categories.map((cat) => (
              <div
                className=" flex items-center text-sm text-white cursor-pointer group"
                key={cat.id}
              >
                <MdOutlineKeyboardArrowRight className="text-lg group-hover:translate-x-1 smooth-transition" />
                <span className="group-hover:underline smooth-transition">
                  {cat.title}
                </span>
              </div>
            ))}
          </div>
          {/* shop with us */}
          <div className="space-y-2">
            {footerLinks?.shopWithUs.map((link) => (
              <div
                className=" flex items-center text-sm text-white cursor-pointer group"
                key={link.id}
              >
                <MdOutlineKeyboardArrowRight className="text-lg group-hover:translate-x-1 smooth-transition" />
                <span className="group-hover:underline smooth-transition">
                  {link.link}
                </span>
              </div>
            ))}
          </div>
        </div>
        <hr className="mt-6" />
        {/* socials */}
        <div className="flex flex-col flex-between sm:flex-row text-white ">
          {/* soocial icons */}
          <div className="flex flex-start gap-4 text-2xl py-4">
            <BsFacebook className="cursor-pointer hover:text-shop-orange hover:scale-125 smooth-transition" />
            <BsTwitter className="cursor-pointer hover:text-shop-orange hover:scale-125 smooth-transition" />
            <BsYoutube className="cursor-pointer hover:text-shop-orange hover:scale-125 smooth-transition" />
          </div>
          {/* copy rights */}
          <h2 className="text-sm">&copy; Copy rights reserved 2023</h2>
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
