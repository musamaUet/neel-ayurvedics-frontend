import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Paginator from "react-hooks-paginator";
import { LayoutSix } from "../../layouts";
import { Sidebar, ShopHeader, ShopProducts } from "../../components/Shop";
import { getSortedProducts } from "../../lib/product";

import categorySliderData from "../../data/category-sliders/category-slider-two.json";
import TestimonialSix from "../../components/Testimonial/TestimonialSix";
import testimonialSixData from "../../data/testimonials/testimonial-six.json";
import {
  getDiseases,
  getProductByDisease,
  getNavBarItems,
  getProductBrands,
} from "../../api/listings";

const diseaseName = ({ data, products, navBarItems, brands }) => {
  console.log(">>>", brands);

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

  return (
    <LayoutSix item={navBarItems}>
      <BreadcrumbOne>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="breadcrumb-item">Disease</li>
          <li className="breadcrumb-item active">{data.disease_name}</li>
        </ol>
      </BreadcrumbOne>
      <div className="shop-content space-pt--50 space-pb--50">
        <div className="custom-container5">
          <Row>
            <Col lg={10}>
              <TestimonialSix testimonialDataSix={testimonialSixData} />
              <div className="card">
                <div class="pageTitle">
                  <h1>{data.disease_name}</h1>
                  <span>( {data.products.length} Items)</span>
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
                <ShopProducts layout={layout} products={data?.products} />
                {/* {data.photos.map((product) => (
                <>
                  <h1>{product.title}</h1>
                  <p>{product.body}</p>
                </>
              ))} */}
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

                {/* <Sidebar products={products} getSortParams={getSortParams} /> */}

                <Sidebar
                  products={data?.latestProduct}
                  getSortParams={getSortParams}
                  brands={brands}
                  subcategory={data?.subcategories}
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

export default connect(mapStateToProps)(diseaseName);

// export async function getStaticPaths(props) {
//   // get the paths we want to pre render based on products
//   try {
//     const response = await getDiseases();
//     const paths = response?.diseases?.map((disease) => ({
//       params: { disease_name: disease._id },
//     }));

//     return { paths, fallback: true };
//   } catch (error) {
//     console.log("**************static paths disease********************");
//     console.log(error);
//     console.log("**********************************");
//     return { paths: [], fallback: true };
//   }
// }

// export async function getStaticProps({ params }) {
//   // console.log(params)
//   // get product data based on slug
//   try {
//     const products = await getProductByDisease(params.disease_name);
//     console.log(products);
//     let navBarItems = await getNavBarItems();
//     return { props: { data: products?.returnedObject, navBarItems } };
//   } catch (error) {
//     console.log("**************static props disease********************");
//     console.log(error);
//     console.log("**********************************");
//     return { props: { data: "" } };
//   }
// }
export async function getServerSideProps({ params }) {
  // console.log(params)
  // get product data based on slug
  try {
    const products = await getProductByDisease(params.disease_name);
    console.log(products);
    let navBarItems = await getNavBarItems();
    let brands = await getProductBrands();
    if (Array.isArray(products) && !products.length > 0)
      return { notFound: true };
    return { props: { data: products?.returnedObject, navBarItems, brands } };
  } catch (error) {
    console.log("**************static props disease********************");
    console.log(error);
    console.log("**********************************");
    return { props: { data: "" } };
  }
}
