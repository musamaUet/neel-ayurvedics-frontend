import React, { useState, useEffect } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import Paginator from "react-hooks-paginator";
import { LayoutSix } from "../../layouts";
import { Sidebar, ShopHeader, ShopProducts } from "../../components/Shop";
import { getSortedProducts } from "../../lib/product";
import TestimonialSix from "../../components/Testimonial/TestimonialSix";
import testimonialSixData from "../../data/testimonials/testimonial-six.json";

const GridLeftSidebar = ({ products, data }) => {
  console.log(data);
  // photos  = photos,map((photo) => photo.url )
  // products = [...products, ...photos];
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
    <LayoutSix>
      <BreadcrumbOne>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">My Account</li>
        </ol>
      </BreadcrumbOne>
      <div className="shop-content space-pb--50">
        <div className="custom-container5">
          <Row>
            <Col lg={10}>
              <TestimonialSix testimonialDataSix={testimonialSixData} />
              <div className="card">
                <div class="pageTitle">
                  <h1>Allopathy </h1>
                  <span>14758 Items</span>
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

                <ShopProducts layout={layout} products={currentData} />
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
                <Sidebar products={products} getSortParams={getSortParams} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </LayoutSix>
  );
};

export async function getStaticProps() {
  // const BASE_URL = "https://dummyapi.io/data/api/post";
  // const APP_ID = "60fbefc1f2e85e041021bded";
  let photos = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=12"
  );
  let res = await photos.json();

  // let res = await response.json();
  // console.log(await response.json());
  return {
    props: {
      data: {
        name: "Umar",
        photos: res,
      },
      revalidate: 3600,
    },
  };
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    products: state.productData,
  };
};

export default connect(mapStateToProps)(GridLeftSidebar);
