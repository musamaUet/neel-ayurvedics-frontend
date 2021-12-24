import { Fragment, useState } from "react";
import Link from "next/link";

const ProductGridTwo = ({
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
      <div
        className={`${sliderClass ? sliderClass : ""} ${
          bottomSpace ? bottomSpace : ""
        }`}
      >
        <div className="product-grid">
          <div className="product-grid__image">
            <Link
              href={`/shop/product-basic/[slug]?slug=${product.slug}`}
              as={"/shop/product-basic/" + product.slug}
            >
              <a>
                <img src={product?.file_locations[0]} alt="product_img1" />
              </a>
            </Link>
            <div className="product-grid__badge-wrapper">
              {product.discount_percentage ? (
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
                    <button disabled>
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
                      wishlistItem !== undefined
                        ? () => deleteFromWishlist(product, addToast)
                        : () => addToWishlist(product, addToast)
                    }
                    className={wishlistItem !== undefined ? "active" : ""}
                  >
                    <i className="icon-heart" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-grid__info">
            <h6 className="product-title">
              <Link
                href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                as={"/shop/product-basic/" + product.slug}
              >
                <a>{product.name}</a>
              </Link>
            </h6>
            <div className="product-price">
              {product.discount_percentage ? (
                <Fragment>
                  <span className="price">${discountedPrice}</span>
                  <del>{productPrice}</del>
                  <span className="on-sale">
                    {product.discount_percentage}% Off
                  </span>
                </Fragment>
              ) : (
                <span className="price">{productPrice}</span>
              )}
            </div>

            {product.variation ? (
              <div className="product-switch-wrap">
                <ul>
                  {product.variation.map((single, key) => {
                    return (
                      <li key={key}>
                        <button
                          style={{ backgroundColor: `${single.colorCode}` }}
                          onClick={() => setColorImage(single.image)}
                          className={
                            colorImage === single.image ? "active" : ""
                          }
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {/* product modal */}
    </Fragment>
  );
};

export default ProductGridTwo;
