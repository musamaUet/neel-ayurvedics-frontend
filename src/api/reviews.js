import http from "./client";

import config from "../config.json";

export function AddReview(data) {
  data = {
    name: data.name,
    email: data.email,
    description: data.description,
    product_id: data.product_id,
    rating: data.rating,
  };
  // console.log(data);
  // return;
  return http.post(`${config.baseUrl}/public/productdetails/addreview`, {
    ...data,
  });
}

export function getReviews(id) {
  return http.get(`${config.baseUrl}/public/productdetails/reviews/${id}`);
}
