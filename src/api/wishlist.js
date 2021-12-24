import http from "./client";

import config from "../config.json";

// get all wishlist items

export async function getWishlistItems() {
  try {
    const response = await http.get(`${config.baseUrl}/public/wishlist/all`);
    console.log(response);
    return response?.data;
  } catch (error) {
    console.log(error?.response?.data);
    return null;
  }
}

// post item

export async function AddItemToWishlist(id) {
  try {
    console.log("**********************item Aded To Wishlist");
    console.log(id);
    const response = await http.post(`${config.baseUrl}/public/wishlist`, {
      product_id: id,
    });
    console.log(response);
    return response;
  } catch (error) {
    return null;
  }
}

// delete wishlist item

export function deleteWishlistItem(id) {
  console.log("**********************item deleted from Wishlist");
  console.log(id);
  return http.delete(`${config.baseUrl}/public/wishlist/${id}`);
}
