import React, { useState, useEffect } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { Container, Row, Col } from "react-bootstrap";
import Paginator from "react-hooks-paginator";
import { LayoutSix } from "../../layouts";
import { Sidebar, ShopHeader, ShopProducts } from "../../components/Shop";
import { getSortedProducts } from "../../lib/product";
import { getAllProducts, getNavBarItems } from "../../api/listings";

import categorySliderData1 from "../../data/category-sliders/category-slider-one.json";
import { get } from "react-scroll/modules/mixins/scroller";

const newProduct = ({ products, data, navbarItems }) => {
  console.log(">>>>>>>>>", data);

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
    <LayoutSix item={navbarItems}>
      <BreadcrumbOne>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">New Products</li>
        </ol>
      </BreadcrumbOne>
      <div className="shop-content space-pt--50 space-pb--50">
        <div className="custom-container5">
          <Row>
            <Col lg={10}>
              {/* shop page header  item={navBarItems}*/}
              <ShopHeader
                getLayout={getLayout}
                getFilterSortParams={getFilterSortParams}
                shopTopFilterStatus={shopTopFilterStatus}
                setShopTopFilterStatus={setShopTopFilterStatus}
                layout={layout}
              />
              {/* shop products */}
              <ShopProducts layout={layout} products={data?.products} />

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
            </Col>
            <Col lg={2} className="order-lg-first mt-4 pt-2 mt-lg-0 pt-lg-0">
              {/* sidebar */}
              {/* <Sidebar products={category_name?.latestProduct} getSortParams={getSortParams} /> */}
              <Sidebar
                products={data?.latestProduct}
                getSortParams={getSortParams}
              />
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

export default connect(mapStateToProps)(newProduct);

export async function getServerSideProps({ params }) {
  // console.log(params)
  // get product data based on slug
  // const categoryName = categorySliderData1.filter((single) => single.pera === params.category_name)[0];
  // console.log(params);
  try {
    // const data = await getProductsBySubcategory(params.id);
    const data = await getAllProducts();
    const navbarItems = await getNavBarItems();
    console.log(">>>>>>>>subcat data", data);
    if (Array.isArray(data) && data.length > 0) {
      return { notFound: true };
    }
    return { props: { data, navbarItems } };
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
//     // const data = await getProductsBySubcategory(params.id);
//     const data = await getAllProducts();
//     console.log(">>>>>>>>subcat data", data);

//     return { props: { data: data } };
//   } catch (error) {
//     console.log(error);
//     return { props: {} };
//   }
// }
