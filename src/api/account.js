import http from "./client";
import config from "../config.json";

// get account details

export function GetAccount() {
  try {
    const response = http.get(`${config.baseUrl}/profile/get`);
    return response?.data || null;
  } catch (error) {
    console.log("====================================");
    console.log(error?.response?.data?.msg);
    console.log("====================================");
    alert(error?.response?.data?.msg);
  }
}
// create account
export function AddAccount(data) {
  return http.post(`${config.baseUrl}/public/profile/edit`, { ...data });
}
// update account details
export function UpdateAccount(data) {
  return http.post(`${config.baseUrl}/public/profile/edit`, { ...data });
}
