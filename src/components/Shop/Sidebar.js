import { Fragment } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import {
  getIndividualCategories,
  getIndividualTags,
  getProductsIndividualSizes,
  getProducts,
  getDiscountPrice,
  setActiveSort,
} from "../../lib/product";
import { ProductRating } from "../../components/Product";

const Sidebar = ({
  products,
  getSortParams,
  setFilterBrand,
  subcategory,
  selectedSubcategory,
  setSubcategory,
  brands,
  setPrice,
}) => {
  // const categories = getIndividualCategories(products);
  // const sizes = getProductsIndividualSizes(products);
  // const tags = getIndividualTags(products);
  // const popularProducts = getProducts(products, "fashion", "popular", 3);
  // const popularProducts = products;
  console.log(">>>>>>>>>", brands);
  const price = [
    { value: { min: 0, max: 200 }, label: "Below 200" },
    { value: { min: 201, max: 500 }, label: "201-500" },
    { value: { min: 501, max: 1000 }, label: "501-1000" },
    { value: { min: 1000, max: "" }, label: "Above 1000" },
  ];
  return (
    <div className="sidebar">
      <h4 className="widget__title">Filter By</h4>
      <div className="widget">
        <h5 className="widget__title">Categories</h5>
        {subcategory && subcategory.length > 0 ? (
          <ul className="widget__categories">
            {subcategory &&
              subcategory.map((category, key) => {
                return (
                  <li key={key}>
                    <button
                      onClick={(e) => {
                        setSubcategory(category?._id);
                        // getSortParams("category", category.name);
                        // setActiveSort(e);
                      }}
                    >
                      <IoIosArrowForward />
                      <span
                        className="categories-name"
                        style={
                          selectedSubcategory === category._id
                            ? { color: "green" }
                            : {}
                        }
                      >
                        {category.name}
                      </span>
                      {/* <span className="categories-num">
                        ({category?.count || 0})
                      </span> */}
                    </button>
                  </li>
                );
              })}
          </ul>
        ) : (
          "No categories found"
        )}
      </div>

      <div className="widget">
        <h5 className="widget__title">Price</h5>
        <Form>
          {price.map((p, index) => (
            <div key={index} className="mb-3">
              <Form.Check
                type={"checkbox"}
                label={p.label}
                onClick={() => setPrice(p.value.max, p.value.min)}
              />
            </div>
          ))}
          {/* {["checkbox"].map((type) => (
            <div key={`default-${type}`} className="mb-3">
              <Form.Check
                type={type}
                id={`default-${type}`}
                label={`Below 200`}
                value={200}
              />
              <Form.Check
                type={type}
                id={`default-${type}`}
                label={`200-500`}
                value={"200-500"}
              />
              <Form.Check
                type={type}
                id={`default-${type}`}
                label={`500-1000`}
                value={"500-1000"}

              />
              <Form.Check
                type={type}
                id={`default-${type}`}
                label={`Above 1000`}
                value={"1000"}
              />
            </div>
          ))} */}
        </Form>
      </div>

      <div className="widget">
        <h5 className="widget__title">Brand</h5>
        <Form>
          {brands &&
            brands.brands?.map((brand, index) => (
              <div key={index} className="mb-3">
                <Form.Check
                  type={"checkbox"}
                  id={`default-checkbox`}
                  label={brand.name}
                  // onClick={() => setFilterBrand("Poxi")}
                  onClick={() => setFilterBrand(brand?._id)}
                />
              </div>
            ))}
          {/* {["checkbox"].map((type) => (
            <div key={`default-${type}`} className="mb-3">
              <Form.Check
                type={type}
                id={`default-${type}`}
                label={`Poxi`}
                onClick={() => setFilterBrand("Poxi")}
              />
              <Form.Check
                type={type}
                id={`default-${type}`}
                label={`HamDard`}
                onClick={() => setFilterBrand("hamdard")}
              />
              <Form.Check
                type={type}
                id={`default-${type}`}
                label={`Dabar`}
                onClick={() => setFilterBrand("Dabar")}
              />
            </div>
          ))} */}
        </Form>
      </div>

      {/* <div className="widget">
        <h5 className="widget__title">Sizes</h5>
        {sizes.length > 0 ? (
          <ul className="widget__sizes">
            <li>
              <button
                onClick={(e) => {
                  getSortParams("size", "");
                  setActiveSort(e);
                }}
              >
                All sizes
              </button>
            </li>
            {sizes.map((size, i) => {
              return (
                <li key={i}>
                  <button
                    onClick={(e) => {
                      getSortParams("size", size);
                      setActiveSort(e);
                    }}
                  >
                    {size}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          "No sizes found"
        )}
      </div>  */}

      {/* <div className="widget">
        <h5 className="widget__title">Popular Items</h5>
        {console.log(popularProducts)}
        {popularProducts.length > 0 ? (
          <ul className="widget-recent-post-wrapper">
            {popularProducts &&
              popularProducts.map((product, key) => {
                const discountedPrice = getDiscountPrice(
                  product.price,
                  product.discount
                ).toFixed(2);
                const productPrice = product.price.toFixed(2);
                const discountedPrice = product?.discount_price;
                const productPrice = product?.small_size?.regular_price;

                return (
                  <li className="widget-product-post" key={key}>
                    <div className="widget-product-post__image">
                      <Link
                        href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                        as={"/shop/product-basic/" + product.slug}
                      >
                        <a>
                          <img src={product.file_locations[0]} alt="shop_small1" />
                        </a>
                      </Link>
                    </div>
                    <div className="widget-product-post__content">
                      <h6 className="product-title">
                        <Link
                          href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                          as={"/shop/product-basic/" + product.slug}
                        >
                          <a>{product.name}</a>
                        </Link>
                      </h6>
                      <div className="product-price">
                        {product.discount_price ? (
                          <Fragment>
                            <span className="price">{discountedPrice}</span>
                            <del>{productPrice}</del>
                          </Fragment>
                        ) : (
                          <span className="price">{productPrice}</span>
                        )}
                      </div>
                      <div className="rating-wrap">
                        <ProductRating ratingValue={product.rating} />
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        ) : (
          "No products found"
        )}
      </div> */}

      {/* <div className="widget">
        <h5 className="widget__title">tags</h5>
        {tags.length > 0 ? (
          <div className="widget__tags">
            {tags &&
              tags.map((tag, key) => {
                return (
                  <button
                    key={key}
                    onClick={(e) => {
                      getSortParams("tag", tag);
                      setActiveSort(e);
                    }}
                  >
                    {tag}
                  </button>
                );
              })}
          </div>
        ) : (
          "No tags found"
        )}
      </div> */}
    </div>
  );
};

export default Sidebar;
