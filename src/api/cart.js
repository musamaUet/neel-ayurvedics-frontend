import http from "./client";

import config from "../config.json";

// get cart items
export async function getCartItems() {
  try {
    const response = await http.get(`${config.baseUrl}/public/cart/all`);
    // console.log(response);
    return response?.data;
  } catch (error) {
    console.log("====================================");
    console.log(error?.response?.data);
    console.log("====================================");
  }
}
//add cart item

export async function addItemToCart(id) {
  try {
    console.log("**********************item Aded To cart");
    const response = await http.post(`${config.baseUrl}/public/cart/add`, {
      product_id: id,
    });
    console.log(response);
    // return;
  } catch (error) {
    console.log("====================================");
    console.log(error?.response?.data);
    console.log("====================================");
  }
}

//delete cart item

export function deleteCartItem(id) {
  console.log("**********************item deleted from cart");
  console.log(id);
  return http.delete(`${config.baseUrl}/public/cart/${id}`);
}

export function deleteAllCartItems() {
  return http.delete(`${config.baseUrl}/public/cart/all`);
}
