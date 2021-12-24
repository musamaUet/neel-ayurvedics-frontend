import http from "./client";

import config from "../config.json";

export function createOrder(amount) {
  return http.post(`${config.baseUrl}/public/order/create`, { amount });
}

export function SendOrderCredentials(data) {
  return http.post(`${config.baseUrl}/public/order/update`, { ...data });
}
