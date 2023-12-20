import React, { useState } from "react";
import {
  Slider,
  Deals,
  ShopAdvantages,
  ProductSection,
  CategoryCard,
  Subscription,
} from "../../components";
import data from "./../../data/featuredProducts.json";
import categories from "./../../data/categories.json";
import trendings from "./../../data/trendingProducts.json";
const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState(data);
  const [categoryData, setCategoryData] = useState(categories);
  const [trendingProducts, setTrendingProducts] = useState(trendings);

  return (
    <div>
      <Slider />
      <Deals />
      <ShopAdvantages />
      {/* featured section */}
      <ProductSection
        title={"Featured products"}
        titleDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla
            rerum ex omnis. Provident Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Animi nulla rerum ex omnis. Provident"
        // products={featuredProducts}
        type={"featured"}
      />
      {/* category section */}
      <section className="w-full bg-shop-bg-gray-light h-auto ">
        <div className="container px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center">
          {categoryData.categories.map((cat) => (
            <CategoryCard
              title={cat.title}
              key={cat.id}
              subCategory={cat.subCategories}
            />
          ))}
        </div>
      </section>
      {/* trending products */}
      <ProductSection
        title={"Trending products"}
        titleDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla
            rerum ex omnis. Provident Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Animi nulla rerum ex omnis. Provident"
        // products={trendingProducts}
        type={"trending"}
      />
      {/* subscription */}
      <Subscription />
    </div>
  );
};

export default Home;
