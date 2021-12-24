import axios from "axios";
import { getJwt } from "./auth";
// import { toast } from "react-toastify";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEwMGVjOWZkZTU1NDY2NTA4ZTJhMGZlIn0sImlhdCI6MTYyNzgyMDI3MiwiZXhwIjoxNjI4MTgwMjcyfQ.xWXFXZyLsTVALxPCmCBTX7u7T9OkPfL7UggM6avRYXs";

const setAuthHeader = () => {
  const token = getJwt();
  console.log("undersetHeader ", token);
  if (token !== null) axios.defaults.headers.common["x-auth-token"] = token;
};
setAuthHeader();
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log("logging error", error);
    // toast("An UnExpected Error occured");
  }
  return Promise.reject(error);
});

const setJwt = (token) => {
  axios.defaults.headers.common["x-auth-token"] = token;
  console.log("axios headeer set");
  console.log(axios.defaults.headers.common);
};
console.log(
  "*************************************ClientCalled*****************************"
);
console.log(getJwt(), typeof window);
console.log(
  "*************************************Client*****************************"
);

// axios.defaults.headers.common["x-auth-token"] = token;

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
