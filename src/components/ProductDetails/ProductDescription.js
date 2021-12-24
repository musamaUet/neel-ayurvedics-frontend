import { Fragment, useState } from "react";
import Link from "next/link";
import { getProductCartQuantity } from "../../lib/product";
import { ProductRating } from "../Product";
// import { BsShield } from "react-icons/bs";
import { AiFillGift, AiFillHeart } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { MdLocalOffer } from "react-icons/md";
import { GiSwapBag } from "react-icons/gi";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  // IoLogoGoogleplus,
  // IoLogoYoutube,
  // IoLogoInstagram,
} from "react-icons/io";

const ProductDescription = ({
  product,
  productPrice,
  discountedPrice,
  cartItems,
  wishlistItem,
  addToast,
  addToWishlist,
  deleteFromWishlist,
  productContentButtonStyleClass,
}) => {
  console.log("==============product======================");
  console.log(product);
  console.log("====================================");
  // const [selectedProductColor, setSelectedProductColor] = useState(
  //   product.variation ? product.variation[0].color : ""
  // );
  const [selectedProductSize, setSelectedProductSize] = useState(
    product.variation ? product.variation[0].size[0].name : ""
  );
  const [productStock, setProductStock] = useState(
    product.variation ? product.variation[0].size[0].stock : product.stock
  );
  const [quantityCount, setQuantityCount] = useState(1);

  // const productCartQty = getProductCartQuantity(
  //   cartItems,
  //   product,

  //   selectedProductSize
  // );
  return (
    <div className="product-content pad10">
      <span class="productDetailShare">
        <Link href="#">
          <a class="fa fa-facebook socialIcon">
            <IoLogoFacebook />
          </a>
        </Link>
        <Link href="#">
          <a class="fa fa-twitter socialIcon">
            <IoLogoTwitter />
          </a>
        </Link>
      </span>
      <h2 className="product-content__title space-mb--10">{product.name}</h2>
      <h2 className="product-content__tags space-mb--10">
        Acne, Pimples, Skin Darkening, Dark Circles Below Eyes, Dry Skin
      </h2>
      <div className="product-content__price-rating-wrapper space-mb--10">
        {/* {product.rating && product.rating > 0 ? (
          <div className="product-content__rating-wrap">
            <div className="product-content__rating">
              <ProductRating ratingValue={product.rating} />
              <span>({product.ratingCount})</span>
            </div>
          </div>
        ) : (
          ""
        )} */}
      </div>
      <div class="priceOfferWrap">
        <div className="product-content__price-rating-wrapper price-box space-mb--10">
          <div className="product-content__price d-flex-align-items-center">
            {product.discount_price ? (
              <Fragment>
                <del>MRP : {productPrice || "₹" + 200}</del>
                <span className="price">{discountedPrice}</span>
                <span className="on-sale">
                  {product.discount_percentage || 10} % Off
                </span>
              </Fragment>
            ) : (
              <span className="price">{productPrice}</span>
            )}
          </div>
        </div>
        {/* <div className="product-content__description space-mb--20">
        <p>{product.shortDescription}</p>
      </div> */}


      <div className="product-content__sort-info offersbox">
      <p class="offerTitle"><AiFillGift className="icon" /> Offers Applicable</p>
      <div class="offerContent">
      <p>
      <MdLocalOffer className="icon" /> Additional 5% off on orders with value greater than Rs. 1000*
      </p>
      </div>
        {/* <ul>

        <div className="product-content__sort-info offersbox">
          <p class="offerTitle">Offers Applicable</p>
          <div class="offerContent">
            <p>
              <GiSwapBag className="icon" /> Additional 5% off on orders with
              value greater than Rs. 1000*
            </p>
          </div>
          {/* <ul>

          <li>
            <BsShield /> 1 Year Brand Warranty
          </li>
          <li>
            <AiOutlineReload /> 30 Days Return Policy
          </li>
          <li>
            <GiSwapBag /> Cash on Delivery available
          </li>
        </ul> */}
        </div>
      </div>
      {product.variation ? (
        <div className="product-content__size-color">
          {/* <div className="product-content__color space-mb--10">
            <div className="product-content__color__title">Color</div>
            <div className="product-content__color__content">
              {product.variation.map((single, i) => {
                return (
                  <Fragment key={i}>
                    <input
                      type="radio"
                      value={single.color}
                      name="product-color"
                      id={single.color}
                      checked={
                        single.color === selectedProductColor ? "checked" : ""
                      }
                      onChange={() => {
                        setSelectedProductColor(single.color);
                        setSelectedProductSize(single.size[0].name);
                        setProductStock(single.size[0].stock);
                        setQuantityCount(1);
                      }}
                    />
                    <label
                      htmlFor={single.color}
                      style={{ backgroundColor: single.colorCode }}
                    ></label>
                  </Fragment>
                );
              })}
            </div>
          </div> */}
          <div className="product-content__size space-mb--20">
            <div className="product-content__size__title">Size</div>
            <div className="product-content__size__content">
              {product.variation &&
                product.variation.map((single) => {
                  return single.color === selectedProductColor
                    ? single.size.map((singleSize, i) => {
                        return (
                          <Fragment key={i}>
                            <input
                              type="radio"
                              value={singleSize.name}
                              checked={
                                singleSize.name === selectedProductSize
                                  ? "checked"
                                  : ""
                              }
                              id={singleSize.name}
                              onChange={() => {
                                setSelectedProductSize(singleSize.name);
                                setProductStock(singleSize.stock);
                                setQuantityCount(1);
                              }}
                            />
                            <label htmlFor={singleSize.name}>
                              {singleSize.name}
                            </label>
                          </Fragment>
                        );
                      })
                    : "";
                })}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {product.affiliateLink ? (
        <div className="product-content__quality">
          <div className="product-content__cart btn-hover">
            <a
              href={product.affiliateLink}
              target="_blank"
              className="btn btn-fill-out btn-addtocart"
            >
              Buy Now
            </a>
          </div>
        </div>
      ) : (
        <Fragment>
          <div
            className={`${
              productContentButtonStyleClass
                ? productContentButtonStyleClass
                : "product-content__button-wrapper d-flex align-items-center"
            }`}
          >
            <div className="product-content__quantity">
              <div className="cart-plus-minus">
                <button
                  onClick={() =>
                    setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1)
                  }
                  className="qtybutton"
                >
                  -
                </button>
                <input
                  className="cart-plus-minus-box"
                  type="text"
                  value={quantityCount}
                  readOnly
                />
                <button
                  onClick={() =>
                    setQuantityCount(
                      quantityCount < productStock - productCartQty
                        ? quantityCount + 1
                        : quantityCount
                    )
                  }
                  className="qtybutton"
                >
                  +
                </button>
              </div>
              <button
                className={`product-content__wishlist abs3btn ${
                  wishlistItem !== undefined ? "active" : ""
                }`}
                title={
                  wishlistItem !== undefined
                    ? "Added to wishlist"
                    : "Add to wishlist"
                }
                onClick={
                  wishlistItem !== undefined
                    ? () => deleteFromWishlist(product, addToast)
                    : () => addToWishlist(product, addToast)
                }
              >
                <i>
                  <AiFillHeart />
                </i>
              </button>
            </div>
            {productStock && productStock > 0 ? (
              <button
                onClick={() =>
                  addToCart(
                    product,
                    addToast,
                    quantityCount,
                    // selectedProductColor,
                    selectedProductSize
                  )
                }
                // disabled={productCartQty >= productStock}
                className="btn btn-fill-out btn-addtocart space-ml--10 abs2btn"
              >
                <i className="icon-basket-loaded" /> Add To Cart
              </button>
            ) : (
              <button
                className="btn btn-fill-out btn-addtocart abs2btn"
                disabled
              >
                Out of Stock
              </button>
            )}

            <button
              className={`product-content__wishlist abs2btn ${
                wishlistItem !== undefined ? "active" : ""
              }`}
              title={
                wishlistItem !== undefined
                  ? "Added to wishlist"
                  : "Add to wishlist"
              }
              onClick={
                wishlistItem !== undefined
                  ? () => deleteFromWishlist(product, addToast)
                  : () => addToWishlist(product, addToast)
              }
            >
              <i>
                <AiFillHeart />
              </i>
            </button>
          </div>

          <div
            className={`${
              productContentButtonStyleClass
                ? productContentButtonStyleClass
                : "product-content__button-wrapper abs2 d-flex align-items-center"
            }`}
          >
            {productStock && productStock > 0 ? (
              <button
                onClick={() =>
                  addToCart(
                    product,
                    addToast,
                    quantityCount,
                    // selectedProductColor,
                    selectedProductSize
                  )
                }
                // disabled={productCartQty >= productStock}
                className="btn btn-fill-out btn-addtocart space-ml--10"
              >
                <i className="icon-basket-loaded" /> Add To Cart
              </button>
            ) : (
              <button className="btn btn-fill-out btn-addtocart" disabled>
                Out of Stock
              </button>
            )}

            <div className="product-content__quality">
              <div className="product-content__cart btn-hover">
                <a
                  href={product.affiliateLink}
                  target="_blank"
                  className="btn btn-fill-out"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </Fragment>
      )}
      <div class="mobileDeliverCheck">

      <div class="row availabilityWrap">
      <div class="col-xs-12 col-lg-2">
      <span class="label">
      <ImLocation /> Delivery</span>
      </div>
      <div class="col-xs-12 col-lg-10">
      <div class="availabilityResult">Item is available at <span>121003</span>&nbsp;&nbsp;<a class="brandtxtColor">Change</a>
      <ul>
      <li>Standard Delivery in 2 - 4 day(s)</li>
      <li>Cash on Delivery also available for this location @ 50</li>
      <li>Guaranteed Refunds / Returns available within 15 days of delivery</li>
      </ul>
      <div class="availabilityResultNote">* Actual time may vary depending on other items in your order</div>
      </div>
      </div>
      </div>
      {/* <div class="row availabilityWrap">

        <div class="row availabilityWrap">
          <div class="col-xs-12 col-lg-2">
            <span class="label">
              <AiOutlineReload /> Delivery
            </span>
          </div>
          <div class="col-xs-12 col-lg-10">
            <div class="availabilityResult">
              Item is available at <span>121003</span>&nbsp;&nbsp;
              <a class="brandtxtColor">Change</a>
              <ul>
                <li>Standard Delivery in 2 - 4 day(s)</li>
                <li>Cash on Delivery also available for this location @ 50</li>
                <li>
                  Guaranteed Refunds / Returns available within 15 days of
                  delivery
                </li>
              </ul>
              <div class="availabilityResultNote">
                * Actual time may vary depending on other items in your order
              </div>
            </div>
          </div>
        </div>
        {/* <div class="row availabilityWrap">

      <div class="col-xs-12 col-lg-2">
      <span class="label"><AiOutlineReload />Delivery</span>
      </div>
      <div class="col-xs-12 col-lg-10">
      <div class="checkAvailability">
      <input type="number" placeholder="Enter Pincode" aria-label="Enter pincode to check availability" class="noOutline" required="" />
      <button>Check</button>
      <span class="availabilityResult"> Generally delivered in 3 - 7 days</span>
      </div>
      <div class="checkAvailability"><div>
      </div>
      </div>
      <p>Enter pincode to check estimated delivery time and COD availability</p>
      </div>
      </div> */}
      </div>
      {/* <ul className="product-content__product-meta">
        <li>
          SKU: <span>{product.sku}</span>
        </li>
        <li>
          Category:
          {product.category &&
            product.category.map((item, index, arr) => {
              return (
                <Link
                  href="/shop/grid-left-sidebar"
                  as={"/shop/grid-left-sidebar"}
                  key={index}
                >
                  <a>{item + (index !== arr.length - 1 ? ", " : "")}</a>
                </Link>
              );
            })}
        </li>
        <li>
          Tags:
          {product.tag &&
            product.tag.map((item, index, arr) => {
              return (
                <Link
                  href="/shop/grid-left-sidebar"
                  as={"/shop/grid-left-sidebar"}
                  key={index}
                >
                  <a>{item + (index !== arr.length - 1 ? ", " : "")}</a>
                </Link>
              );
            })}
        </li>
      </ul> */}
      {/* <div className="product-content__product-share space-mt--15">
        <span>Share:</span>
        <ul className="social-icons">
          <li>
            <a href="#">
              <IoLogoFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <IoLogoTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <IoLogoGoogleplus />
            </a>
          </li>
          <li>
            <a href="#">
              <IoLogoYoutube />
            </a>
          </li>
          <li>
            <a href="#">
              <IoLogoInstagram />
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default ProductDescription;
