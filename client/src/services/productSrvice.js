/**
 * @description this file is a service that provides the function of getting products
 */
import productsData from "./../data/products.json";

const productService = {
  fetchProducts: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsData.products);
      }, 1000);
    });
  },
};

export default productService;
