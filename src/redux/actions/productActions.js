import { getCartItems } from "../../api/cart";

export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";

const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

// fetch products
const fetchProducts = (products) => {
  return (dispatch) => {
    dispatch(fetchProductsSuccess(products));
  };
};

// const fetchProducts = async () => {
//   const products = await getCartItems();
//   return (dispatch) => {
//     dispatch(fetchProductsSuccess(products?.returnedObjects));
//   };
// };

export default fetchProducts;
