import http from "./client";

import config from "../config.json";

const filterProducts = (subcategory = "", brand = "", min = "", max = "") => {
  return http.get(
    `${config.baseUrl}/public/products/filter?subcategory=${subcategory}&brand=${brand}&min=${min}&max=${max}`
  );
};

export default filterProducts;
