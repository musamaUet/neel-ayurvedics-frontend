import http from "./client";

import config from "../config.json";

//get categories

export async function getAllCategories() {
  try {
    const response = await http.get(`${config.baseUrl}/public/categories`);
    return response?.data;
  } catch (error) {
    console.log("===========all categories=========================");
    console.log(error?.response);
    console.log("====================================");
    return [];
  }
}

// get products

export async function getProducts() {
  try {
    const response = await http.get(`${config.baseUrl}/public/new_products`);
    return response?.data || [];
  } catch (error) {
    console.log("=============get products=======================");
    console.log(error?.response);
    console.log("====================================");
    return [];
  }
}

// get all products

export async function getAllProducts() {
  try {
    const response = await http.get(`${config.baseUrl}/public/products/all`);
    return response?.data || [];
  } catch (error) {
    console.log("=============get products=======================");
    console.log(error?.response);
    console.log("====================================");
    return [];
  }
}

// get all the sliders and banners

export async function getBanners() {
  try {
    const response = await http.get(`${config.baseUrl}/public/slider`);
    return response?.data || [];
  } catch (error) {
    console.log("==========banners==========================");
    console.log(error?.response);
    console.log("====================================");
    return [];
  }
}

//get all the brands

export async function getProductBrands() {
  try {
    const response = await http.get(`${config.baseUrl}/public/brands`);
    return response?.data || [];
  } catch (error) {
    console.log("===========brands=========================");
    console.log(error?.response);
    console.log("====================================");
    return [];
  }
}

//get product according to the slug

export async function getCategoryWiseProducts(id) {
  // const { addToast } = useToasts();
  try {
    const response = await http.get(
      `${config.baseUrl}/public/subcategory_id/${id}`
    );
    return response?.data || [];
  } catch (error) {
    console.log("==========categoryWise Product==========================");
    console.log(error?.response);
    console.log("====================================");
    // addToast("Something Went Wrong", {
    //   appearance: "error",
    //   autoDismiss: true,
    // });
    return [];
  }
}

// get nav bar items

export async function getNavBarItems() {
  try {
    const response = await http.get(`${config.baseUrl}/public/navbar`);
    return response?.data || [];
  } catch (error) {
    console.log("===============navBArItems=====================");
    console.log(error?.response);
    console.log("====================================");
    return [];
  }
}

// get single product

export async function getProduct(id) {
  try {
    const response = await http.get(`${config.baseUrl}/public/product/${id}`);
    return response?.data || [];
  } catch (error) {
    console.log("============get Product========================");
    console.log(error?.response);
    console.log("====================================");
    return [];
  }
}
// get category by id

export async function getCategory(id) {
  try {
    const response = await http.get(`${config.baseUrl}/public/category/${id}`);
    return response?.data || [];
  } catch (error) {
    console.log("============get Category========================");
    console.log(error?.response);
    console.log("====================================");
    return [];
  }
}

// get subcategory by id
export async function getProductsBySubcategory(id) {
  try {
    const response = await http.get(
      `${config.baseUrl}/public/subcategory_id/${id}`
    );
    return response?.data || [];
  } catch (error) {
    console.log("============get subCategory products========================");
    console.log(error?.response);
    console.log("====================================");
    return [];
  }
}

// get brands by id
export async function getBrand(id) {
  try {
    const response = await http.get(`${config.baseUrl}/public/brand_id/${id}`);
    return response?.data || [];
  } catch (error) {
    console.log("============get Category========================");
    console.log(error?.response);
    console.log("====================================");
    return [];
  }
}

// search
export async function search(categoryId, title) {
  try {
    const response = await http.get(
      `${config.baseUrl}/public/category_products?categoryId=${categoryId}&product_title=${title}`
    );
    return response?.data || [];
  } catch (error) {
    console.log("============get search product========================");
    console.log(error?.response);
    console.log("====================================");
    return [];
  }
}

// get products acc to brands

export async function getProductsByBrands(id) {
  try {
    const response = await http.get(
      `${config.baseUrl}/public/brand/products/${id}`
    );
    return response?.data || [];
  } catch (error) {
    console.log("============get Product by brands========================");
    console.log(error?.response);
    console.log("====================================");
    return [];
  }
}

// get products acc to category
export async function getProductsByCategories(id) {
  try {
    const response = await http.get(
      `${config.baseUrl}/public/category/products/${id}`
    );
    return response?.data || [];
  } catch (error) {
    console.log(
      "============get Product by categories========================"
    );
    console.log(error?.response);
    console.log("====================================");
    return [];
  }
}

//get all diseases
export async function getDiseases() {
  try {
    const response = await http.get(`${config.baseUrl}/public/diseases/all`);
    return response?.data || [];
  } catch (error) {
    console.log("==========get diseases==========================");
    console.log(error?.response);
    console.log("====================================");
    return [];
  }
}

export async function getProductByDisease(id) {
  try {
    const response = await http.get(`${config.baseUrl}/public/diseases/${id}`);
    return response?.data || [];
  } catch (error) {
    console.log("============get Product by disease========================");
    console.log(error?.response);
    console.log("====================================");
    return [];
  }
}
