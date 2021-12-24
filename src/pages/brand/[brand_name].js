import React, { useState, useEffect } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { Container, Row, Col } from "react-bootstrap";
import Paginator from "react-hooks-paginator";
import { LayoutSix } from "../../layouts";
import { Sidebar, ShopHeader, ShopProducts } from "../../components/Shop";
import { getSortedProducts } from "../../lib/product";
import { useRouter } from "next/router";

import TestimonialSix from "../../components/Testimonial/TestimonialSix";
import testimonialSixData from "../../data/testimonials/testimonial-six.json";

import {
  getProductBrands,
  getProductsByBrands,
  getNavBarItems,
} from "../../api/listings";

const brandName = ({ brand_name, products, navBarItems }) => {
  const router = useRouter();
  console.log(brand_name);
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
          <li className="breadcrumb-item">Brand</li>
          <li className="breadcrumb-item active">{brand_name.brand_name}</li>
        </ol>
      </BreadcrumbOne>
      <div className="shop-content space-pt--50 space-pb--50">
        <div className="custom-container5">
          <Row>
            <Col lg={10}>
              <TestimonialSix testimonialDataSix={testimonialSixData} />
              <div className="card">
                <div class="pageTitle">
                  <h1>{brand_name.brand_name} </h1>
                  <span>({brand_name?.products?.length} Items)</span>
                  {/* <div class="searchinCategory">
            <input type="text" placeholder="Search in Allopathy" maxlength="100" class="form-control" />
            </div> */}
                </div>
                {/* shop page header */}
                {brand_name?.products?.length > 0 ? (
                  <>
                    {" "}
                    <ShopHeader
                      getLayout={getLayout}
                      getFilterSortParams={getFilterSortParams}
                      shopTopFilterStatus={shopTopFilterStatus}
                      setShopTopFilterStatus={setShopTopFilterStatus}
                      layout={layout}
                    />
                    <ShopProducts
                      layout={layout}
                      products={brand_name?.products}
                    />
                    <div className="pagination pagination-style pagination-style--two justify-content-center space-pb--20">
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
                  </>
                ) : (
                  <h2 className="mt-50 text-center">No Products to Show</h2>
                )}
              </div>
            </Col>
            <Col lg={2} className="order-lg-first mt-4 pt-2 mt-lg-0 pt-lg-0">
              <div className="card">
                {/* sidebar */}
                <Sidebar
                  products={brand_name?.latestProduct}
                  getSortParams={getSortParams}
                  // brands={brands}
                  subcategory={brand_name?.subcategories}
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

export default connect(mapStateToProps)(brandName);

// export async function getStaticPaths(props) {
//   // get the paths we want to pre render based on products
//   try {
//     const response = await getProductBrands();

//     const paths = response?.brands?.map((brand) => ({
//       params: { brand_name: brand._id || "" },
//     }));

//     return { paths, fallback: true };
//   } catch (error) {
//     console.log(error);
//     return { paths: [] };
//   }
// }

// export async function getStaticProps({ params }) {
//   // console.log(params)
//   // get product data based on slug
//   // const brandName = brandLogoData.filter((single) => single.pera === params.brand_name)[0];
//   // console.log(brandName);
//   try {
//     const data = await getProductsByBrands(params.brand_name);
//     let navBarItems = await getNavBarItems();
//     console.log(data);
//     return { props: { brand_name: data?.returnedObject, navBarItems } };
//   } catch (error) {
//     console.log(error);
//     return { props: {} };
//   }
// }

export async function getServerSideProps({ params }) {
  // console.log(params)
  // get product data based on slug
  // const brandName = brandLogoData.filter((single) => single.pera === params.brand_name)[0];
  // console.log(brandName);
  try {
    // const data = await getProductsByBrands(params.brand_name);
    // let navBarItems = await getNavBarItems();
    // let
    let data = [];
    console.log(">>>>>>>>", data);
    if (Array.isArray(data) && !data.length > 0) return { notFound: true };
    return { props: { brand_name: data?.returnedObject, navBarItems } };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
}
