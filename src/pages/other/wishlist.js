import { useState } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import {
  addToWishlist,
  deleteFromWishlist,
} from "../../redux/actions/wishlistActions";
import { addToCart } from "../../redux/actions/cartActions";
import { getDiscountPrice } from "../../lib/product";
import { Container, Row, Col } from "react-bootstrap";
import { LayoutSix } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { BsTrash } from "react-icons/bs";
import { useEffect } from "react";
import { deleteWishlistItem, getWishlistItems } from "../../api/wishlist";
import { addItemToCart } from "../../api/cart";

const Wishlist = ({
  wishlistItems,
  cartItems,
  addToCart,
  deleteFromWishlist,
}) => {
  const { addToast } = useToasts();
  const [items, setItems] = useState([]);
  useEffect(() => {
    const get = async () => {
      const response = await getWishlistItems();
      console.log("res>>>", response);
      if (!response) alert("Invalid Token.Please Login");
      if (response?.returnedProducts?.length > 0)
        setItems(response?.returnedProducts);
    };
    get();
  }, []);
  console.log("itesms>>>>>>>>>", items);
  return (
    <LayoutSix>
      <div className="wishlist-content space-pt--50 space-pb--50">
        <Container>
          {items && items.length >= 1 ? (
            <Row>
              <Col lg={12} className="bg-white">
                {items.map((product, key) => {
                  {
                    /* const discountedPrice = getDiscountPrice(
                    product.price,
                    product.discount
                  ).toFixed(2);
                  const cartItem = cartItems.filter(
                    (item) => item.id === product.id
                  )[0]; */
                  }
                  const discountedPrice =
                    product.product_variants[0]?.origional_price -
                    (product.product_variants[0]?.discount_percentage / 100) *
                      product.product_variants[0]?.origional_price;

                  return (
                    <Row className="cartpad">
                      <Col xs={3} key={key}>
                        <Link
                          href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                          as={"/shop/product-basic/" + product.slug}
                        >
                          <a>
                            {" "}
                            <img
                              src={product.file_locations[0]}
                              alt="product1"
                            />{" "}
                          </a>
                        </Link>
                      </Col>

                      <Col xs={9} className="cartbox2">
                        <Link
                          href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                          as={"/shop/product-basic/" + product.slug}
                        >
                          <a className="carta1">{product.name}</a>
                        </Link>

                        <p className="cartspan1">Rs {discountedPrice}</p>
                        <div className="cartbox6">
                          {product.affiliateLink ? (
                            <a
                              href={product.affiliateLink}
                              target="_blank"
                              className="btn btn-fill-out"
                            >
                              Buy now
                            </a>
                          ) : (
                            <button
                              onClick={() => {
                                // addToCart(product, addToast);
                                addItemToCart(product?._id);
                                deleteFromWishlist(product?._id);
                                setItems(() =>
                                  items.filter((p) => p?._id !== product?._id)
                                );
                              }}
                              // className={` btn btn-fill-out ${
                              //   cartItem !== undefined && cartItem.quantity > 0
                              //     ? "active"
                              //     : ""
                              // } `}
                              // disabled={
                              //   cartItem !== undefined && cartItem.quantity > 0
                              // }
                              title={
                                product !== undefined
                                  ? "Added to cart"
                                  : "Add to cart"
                              }
                            >
                              {/* {cartItem !== undefined && cartItem.quantity > 0
                                ? "Added"
                                : "Add to cart"} */}
                              Add to cart
                            </button>
                          )}
                        </div>

                        <button
                          className="cartbtn2"
                          onClick={() => {
                            deleteWishlistItem(product?._id);
                            setItems(() =>
                              items.filter((p) => p._id !== product._id)
                            );
                            // deleteFromWishlist(product, addToast);
                          }}
                        >
                          <BsTrash />
                        </button>
                      </Col>
                    </Row>
                  );
                })}
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <div className="item-empty-area text-center">
                  <div className="item-empty-area__icon space-mb--30">
                    <i className="icon-heart" />
                  </div>
                  <div className="item-empty-area__text">
                    <p className="space-mb--30">No items found in wishlist</p>
                    <Link href="/">
                      <a className="btn btn-fill-out">Add Some</a>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </LayoutSix>
  );
};

const mapStateToProps = (state) => {
  return {
    wishlistItems: state.wishlistData,
    cartItems: state.cartData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item, addToast, quantityCount) => {
      dispatch(addToCart(item, addToast, quantityCount));
    },
    addToWishlist: (item, addToast) => {
      dispatch(addToWishlist(item, addToast));
    },
    deleteFromWishlist: (item, addToast) => {
      dispatch(deleteFromWishlist(item, addToast));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
