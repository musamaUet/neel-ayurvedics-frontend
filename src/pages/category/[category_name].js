import React, { useState, useEffect } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { Container, Row, Col } from "react-bootstrap";
import Paginator from "react-hooks-paginator";
import { LayoutSix } from "../../layouts";
import { Sidebar, ShopHeader, ShopProducts } from "../../components/Shop";
import { getSortedProducts } from "../../lib/product";
import {
  getAllCategories,
  getProductsByCategories,
  getNavBarItems,
  getProductBrands,
} from "../../api/listings";

import categorySliderData1 from "../../data/category-sliders/category-slider-one.json";
import { get } from "react-scroll/modules/mixins/scroller";

import testimonialSixData from "../../data/testimonials/testimonial-six.json";
import TestimonialSix from "../../components/Testimonial/TestimonialSix";
import filterProducts from "../../api/filter";

const categoryName = ({ category_name, products, navBarItems, brands }) => {
  console.log(">>>>>>", category_name);

  const [layout, setLayout] = useState("grid");
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [shopTopFilterStatus, setShopTopFilterStatus] = useState(false);
  const [brand, setBrand] = useState([]);
  const [subcategory, setSubcategory] = useState("");
  const [price, setPrice] = useState({ min: "", max: "" });

  const pageLimit = 12;

  const getLayout = (layout) => {
    setLayout(layout);
  };

  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  // console.log(">>>brand", brand);

  useEffect(() => {
    let sortedProducts = getSortedProducts(products, sortType, sortValue);
    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [offset, products, sortType, sortValue, filterSortType, filterSortValue]);

  // console.log(brand, price, subcategory );

  useEffect(() => {
    if (brand.length > 0 || price.min || price.max || subcategory) {
      const data = filterProducts(subcategory, brand, price.min, price.max);
      console.log(">>>>>>>>>>>>>>>>>>>>>>.");
      console.log(data);
      console.log(">>>>>>>>>>>>>>>>>>>>>>>");
    }
  }, [brand, price, subcategory]);
  return (
    <LayoutSix navPositionClass="justify-content-start" item={navBarItems}>
      <BreadcrumbOne>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="breadcrumb-item">Category</li>
          <li className="breadcrumb-item active">
            {category_name.category_name}
          </li>
        </ol>
      </BreadcrumbOne>
      <div className="shop-content space-pt--50 space-pb--50">
        <div className="custom-container5">
          <Row>
            <Col lg={10}>
              <TestimonialSix testimonialDataSix={testimonialSixData} />
              <div className="card">
                <div class="pageTitle">
                  <h1>{category_name.category_name}</h1>
                  <span>( {category_name.products.length} Items)</span>
                  {/* <div class="searchinCategory">
            <input type="text" placeholder="Search in Allopathy" maxlength="100" class="form-control" />
            </div> */}
                </div>
                {/* shop page header */}
                <ShopHeader
                  getLayout={getLayout}
                  getFilterSortParams={getFilterSortParams}
                  shopTopFilterStatus={shopTopFilterStatus}
                  setShopTopFilterStatus={setShopTopFilterStatus}
                  layout={layout}
                />
                {/* shop products */}
                <ShopProducts
                  layout={layout}
                  products={category_name?.products}
                />

                {/* shop product pagination */}
                <div className="pagination pagination-style pagination-style--two justify-content-center">
                  <Paginator
                    totalRecords={sortedProducts.length}
                    pageLimit={pageLimit}
                    pageNeighbours={2}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageContainerClass="mb-0 mt-0"
                    pagePrevText="«"
                    pageNextText="»"
                  />
                </div>
              </div>
            </Col>
            <Col lg={2} className="order-lg-first mt-4 pt-2 mt-lg-0 pt-lg-0">
              <div className="card">
                {/* sidebar */}
                <Sidebar
                  products={category_name?.latestProduct}
                  brands={brands}
                  subcategory={category_name?.subcategories}
                  getSortParams={getSortParams}
                  setFilterBrand={(val) => {
                    console.log(val);
                    setBrand((prevState) => [...prevState, val]);
                  }}
                  setSubcategory={(value) => setSubcategory(value)}
                  selectedSubcategory={subcategory}
                  setPrice={(max, min) =>
                    setPrice((prevState) => ({ ...prevState, max, min }))
                  }
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </LayoutSix>
  );
};

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    products: state.productData,
  };
};

export default connect(mapStateToProps)(categoryName);

// export async function getStaticPaths(props) {
//   try {
//     const response = await getAllCategories();
//     // console.log(response);
//     const paths = response?.categories?.map((category) => ({
//       params: { category_name: category._id || "" },
//     }));
//     // console.log(paths,"==");
//     // if (!paths.length>0) return()
//     return { paths, fallback: true };
//   } catch (error) {
//     console.log(error);
//     return { paths: [], fallback: true };
//   }

//   // get the paths we want to pre render based on products
// }

export async function getServerSideProps({ params }) {
  // console.log(params)
  // get product data based on slug
  // const categoryName = categorySliderData1.filter((single) => single.pera === params.category_name)[0];
  // console.log(params);

  try {
    const data = await getProductsByCategories(params.category_name);
    // console.log("<<<<<<>>>>>", data);
    let navBarItems = await getNavBarItems();
    let brands = await getProductBrands();
    if (Array.isArray(data) && !data.length > 0) return { notFound: true };
    return {
      props: { category_name: data?.returnedObject, navBarItems, brands },
    };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
}

// export async function getStaticProps({ params }) {
//   // console.log(params)
//   // get product data based on slug
//   // const categoryName = categorySliderData1.filter((single) => single.pera === params.category_name)[0];
//   // console.log(params);

//   try {
//     const data = await getProductsByCategories(params.category_name);
//     // console.log(data);
//     let navBarItems = await getNavBarItems();

//     return { props: { category_name: data?.returnedObject, navBarItems } };
//   } catch (error) {
//     console.log(error);
//     return { props: {} };
//   }
// }
