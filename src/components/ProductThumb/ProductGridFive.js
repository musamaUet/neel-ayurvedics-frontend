import { Fragment, useState } from "react";
import Link from "next/link";
import ProductModal from "./elements/ProductModal";
import { addItemToCart } from "../../api/cart";
import { AddItemToWishlist, deleteWishlistItem } from "../../api/wishlist";

const ProductGridFive = ({
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

  return (
    <Fragment>
      <div
        className={`${sliderClass ? sliderClass : ""} ${
          bottomSpace ? bottomSpace : ""
        }`}
      >
        <div className="product-grid product-grid--style-three">
          <div className="product-grid__image">
            <Link href={`/product/${product?._id}`}>
              <a>
                <img src={product?.file_locations[0]} alt="product_img1" />
              </a>
            </Link>
            <div className="product-grid__badge-wrapper">
              {product.new ? <span className="pr-flash">-5</span> : ""}
            </div>
            <div className="product-grid__action-box">
              <ul>
                <li>
                  {product.affiliateLink ? (
                    <a href={product.affiliateLink} target="_blank">
                      <i className="icon-action-redo" />
                    </a>
                  ) : product?.variation && product?.variation.length >= 1 ? (
                    <Link href={`/product/${product?._id}`}>
                      <a>
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
                      className={cartItem !== undefined ? "active" : ""}
                    >
                      <i className="icon-basket-loaded" />
                    </button>
                  ) : (
                    <button
                      onClick={
                        async () => {
                          await addItemToCart(product?._id);
                          alert("Item Added To Cart");
                        }
                        // addToCart(product, addToast)
                      }
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
                      wishlistItem !== undefined
                        ? () => {
                            deleteFromWishlist(product, addToast);
                            deleteWishlistItem(product?._id);
                            // alert("Item Deleted From  The Wishlist");
                          }
                        : () => {
                            // addToWishlist(product, addToast);
                            AddItemToWishlist(product?._id);
                            alert("Item Added To Wishlist");
                          }
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
              <Link href={`/product/${product?._id}`}>
                <a>{product.name}</a>
              </Link>
            </h6>
            <div className="product-price">
              {product.discount_price ? (
                <Fragment>
                  <del>{productPrice}</del>
                  <span className="price">{discountedPrice}</span>
                  <p className="on-sale">
                    {product.discount_percentage || 10} %
                  </p>
                </Fragment>
              ) : (
                <span className="price">{productPrice}</span>
              )}
            </div>
          </div>
        </div>
      </div>
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

export default ProductGridFive;
