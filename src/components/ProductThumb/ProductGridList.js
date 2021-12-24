import { Fragment, useState } from "react";
import Link from "next/link";
import { Col } from "react-bootstrap";
import ProductModal from "./elements/ProductModal";
import { AiFillHeart } from "react-icons/ai";
import ProductRating from "../Product/ProductRating";
import { addItemToCart } from "../../api/cart";
import { AddItemToWishlist } from "../../api/wishlist";
const ProductGridList = ({
  product,
  discountedPrice,
  productPrice,
  cartItem,
  wishlistItem,
  bottomSpace,
  addToCart,
  addToWishlist,
  deleteFromWishlist,
  addToast,
  cartItems,
  sliderClass,
}) => {
  const [modalShow, setModalShow] = useState(false);
  const [colorImage, setColorImage] = useState("");

  return (
    <Fragment>
      <Col
        lg={3}
        sm={4}
        xs={6}
        className={`${sliderClass ? sliderClass : ""} ${
          bottomSpace ? bottomSpace : ""
        }`}
      >
        <div className="product-grid">
          <div className="product-grid__image productimg">
            <Link
              href={`/shop/product-basic/[slug]?slug=${product.slug}`}
              as={"/shop/product-basic/" + product.slug}
            >
              <a className="mt-2 d-block">
                <img
                  src={
                    product.file_locations
                      ? product.file_locations[0]
                      : product.file_location
                  }
                  alt="product_img1"
                />
              </a>
            </Link>
            <div className="product-grid__badge-wrapper">
              {product.discount ? (
                <span className="pr-flash bg-success">SALE</span>
              ) : (
                ""
              )}
            </div>
            <div className="product-grid__action-box">
              <ul>
                <li>
                  {product.affiliateLink ? (
                    <a href={product.affiliateLink} target="_blank">
                      <i className="icon-action-redo" />
                    </a>
                  ) : product.variation && product.variation.length >= 1 ? (
                    <Link
                      href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                      as={"/shop/product-basic/" + product.slug}
                    >
                      <a>
                        <i className="icon-wrench" />
                      </a>
                    </Link>
                  ) : product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => addToCart(product, addToast)}
                      disabled={
                        cartItem !== undefined &&
                        cartItem.quantity >= cartItem.stock
                      }
                      className={cartItem !== undefined ? "active" : ""}
                    >
                      <i className="icon-basket-loaded" />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        AddItemToWishlist(product?._id);
                        alert("Item Added Successfully To Wishlist");
                      }}
                    >
                      <i className="icon-basket-loaded" />
                    </button>
                  )}
                </li>
                <li>
                  <button
                    onClick={() => setModalShow(true)}
                    className="d-none d-lg-block"
                  >
                    <i className="icon-magnifier-add" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={
                      () => {
                        addItemToCart(product?._id);

                        alert("Item Added To Cart");
                      }
                      // wishlistItem !== undefined
                      //   ? () => deleteFromWishlist(product, addToast)
                      //   : () => addToWishlist(product, addToast)
                    }
                  >
                    <i className="icon-heart" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-grid__info">
            <h6 className="product-title">
              <Link href={`/product/${product._id}`}>
                <a>{product.name}</a>
              </Link>
            </h6>
            <p className="product-description">
              {product.sortDescription}
              Relieves Painful, Bleeding, Burning Piles, Anal Fissure, Itching
              at anus
            </p>
            <div className="rating-wrap">
              <ProductRating ratingValue={product.rating} />
              {/* <span className="rating-num">({product.ratingCount || 0})</span> */}
            </div>
            <div className="product-price">
              {product.discount_price ? (
                <Fragment>
                  <del>{productPrice}</del>
                  <span className="price">{discountedPrice}</span>
                  <p className="on-sale">{product.discount_percentage} %</p>
                </Fragment>
              ) : (
                <Fragment>
                  <del>Rs {product.product_variants[0].origional_price}</del>
                  <span className="price">
                    Rs
                    {product.product_variants[0].origional_price -
                      (product.product_variants[0].discount_percentage / 100) *
                        product.product_variants[0].origional_price}
                  </span>
                  <p className="on-sale">
                    {product.product_variants[0].discount_percentage} %
                  </p>
                </Fragment>
              )}
            </div>

            <div className="product-list__actions newpedo">
              <ul>
                <li>
                  {product.affiliateLink ? (
                    <a
                      href={product.affiliateLink}
                      className="btn btn-fill-out btn-addtocart cart1"
                      target="_blank"
                    >
                      <i className="icon-action-redo" />
                    </a>
                  ) : product.variation && product.variation.length >= 1 ? (
                    <Link
                      href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                      as={"/shop/product-basic/" + product.slug}
                    >
                      <a className="btn btn-fill-out btn-addtocart cart1">
                        <i className="icon-wrench" />
                      </a>
                    </Link>
                  ) : product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => addToCart(product, addToast)}
                      // disabled={
                      //   cartItem !== undefined &&
                      //   cartItem.quantity >= cartItem.stock
                      // }
                      className={`cart1 btn btn-fill-out btn-addtocart ${
                        cartItem !== undefined ? "active" : ""
                      }`}
                    >
                      <i className="icon-basket-loaded" />
                    </button>
                  ) : (
                    <button className=" cart1 btn btn-fill-out btn-addtocart">
                      <i className="icon-basket-loaded" />
                    </button>
                  )}
                </li>
                <li className="wishlist1">
                  <button
                    onClick={() => alert("hello")}
                    //   wishlistItem !== undefined
                    //     ? () => deleteFromWishlist(product, addToast)
                    //     : () => addToWishlist(product, addToast)
                    // }
                    // className={wishlistItem !== undefined ? "active" : ""}
                  >
                    <i>
                      <AiFillHeart />
                    </i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Col>
      {/* product modal */}
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        discountedprice={discountedPrice}
        productprice={productPrice}
        cartitems={cartItems}
        cartitem={cartItem}
        wishlistitem={wishlistItem}
        addtocart={addToCart}
        addtowishlist={addToWishlist}
        deletefromwishlist={deleteFromWishlist}
        addtoast={addToast}
      />
    </Fragment>
  );
};

export default ProductGridList;
