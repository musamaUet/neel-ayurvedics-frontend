import http from "./client";
import config from "../config.json";

const tokenKey = "token";

// http.setJwt(getJwt());

export function register(data) {
  data = {
    name: data.name,
    email: data.email,
    password: data.password,
    role: "user",
    status: "active",
  };
  return http.post(`${config.baseUrl}/user/register`, { ...data });
}

export async function login({ email, password }) {
  const response = await http.post(`${config.baseUrl}/user/login`, {
    email,
    password,
  });
  if (typeof window !== "undefined") {
    if (response?.status === 200) {
      console.log("Under Login REsponse Window");
      http.setJwt(response?.data);
      window.localStorage.setItem(tokenKey, response.data);
      return response?.data;
    }
  }
  console.log("Window uundefined ");
}

export function logout() {
  //   localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    if (typeof window !== "undefined")
      try {
        const jwt = window.localStorage.getItem(tokenKey);
        const authToken = jwt;
        // const nowTime = new Date().getTime();
        // if (nowTime > authToken.exp * 1000) window.location = '/logout';
        return authToken;
      } catch (error) {
        return null;
      }
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
}

export function getJwt() {
  try {
    if (typeof window !== "undefined") {
      console.log("under getjwt window");
      console.log(tokenKey);
      console.log(localStorage.getItem("token"));
      return localStorage.getItem("token");
    }
    console.log("window undefined");
    return "";
  } catch (error) {
    console.log("===============getJwt=====================");
    console.log(error);
    console.log("====================================");
  }
}
