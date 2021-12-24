import { useState, Fragment, useEffect } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import {
  addToCart,
  decreaseQuantity,
  deleteFromCart,
  deleteAllFromCart,
  cartItemStock,
} from "../../redux/actions/cartActions";
import { getDiscountPrice } from "../../lib/product";
import { Container, Row, Col } from "react-bootstrap";
import { LayoutSix } from "../../layouts";
import { BsTrash } from "react-icons/bs";
import {
  deleteAllCartItems,
  deleteCartItem,
  getCartItems,
} from "../../api/cart";

const Cart = ({
  cartItems,
  decreaseQuantity,
  addToCart,
  deleteFromCart,
  deleteAllFromCart,
}) => {
  const [quantityCount] = useState(1);
  const [items, setItems] = useState([]);
  const { addToast } = useToasts();

  let cartTotalPrice = () => {
    let total = 0;
    if (items.length > 0) {
      items.forEach((item) => {
        const { product_variants } = item;
        // console.log(product_variants);
        let price =
          product_variants[0]?.discount_percentage *
          product_variants[0]?.origional_price;
        total += price;
      });
      // return total;
    }
    return total;
  };
  cartTotalPrice();

  useEffect(() => {
    const get = async () => {
      const response = await getCartItems();
      console.log("====================================");
      console.log(response);
      console.log("====================================");
      if (!response) alert("Invalid Token Please Login");
      if (response?.returnedProducts.length > 0) {
        setItems(response.returnedProducts);
      }
      // return response?.data
      // if (typeof window !== "undefined") {
      //   const response = await getCartItems();
      //   console.log("============cart========================");
      //   console.log(context);
      //   console.log(response);
      //   console.log("====================================");
      //   return {
      //     props: {}, // will be passed to the page component as props
      //   };
      // }
    };
    get();
  }, []);

  console.log("items>>>>>>", items);
  // const calculatePrice = () => {};
  return (
    <LayoutSix>
      {/* cart content */}
      <div className="cart-content space-pt--50 space-pb--50">
        <Container>
          {/* {cartItems && cartItems.length >= 1 ? ( */}
          {items?.length > 0 ? (
            <Fragment>
              <Row>
                <Col lg={12} className="bg-white">
                  {/* const discountedPrice = getDiscountPrice(
                      product.price,
                      product.discount
                    ).toFixed(2); */}
                  {items?.map((product, key) => {
                    const discountedPrice =
                      product?.product_variants[0]?.discount_percentage *
                        product?.product_variants[0]?.origional_price || 10;
                    {
                      /* cartTotalPrice += discountedPrice * product.quantity; */
                    }
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
                                src={product?.file_locations[0]}
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
                          <div className="product-content__quantity">
                            <div className="cart-plus-minus cartbox1">
                              <button
                                onClick={() => {
                                  decreaseQuantity(product, addToast);
                                }}
                                className="qtybutton"
                              >
                                -
                              </button>
                              <input
                                className="cart-plus-minus-box"
                                type="text"
                                value={product.quantity}
                                readOnly
                              />
                              <button
                                onClick={() =>
                                  addToCart(product, addToast, quantityCount)
                                }
                                disabled={
                                  product !== undefined &&
                                  product.quantity &&
                                  product.quantity >=
                                    cartItemStock(
                                      product,
                                      product.selectedProductColor,
                                      product.selectedProductSize
                                    )
                                }
                                className="qtybutton"
                              >
                                +
                              </button>
                            </div>
                          </div>

                          <p className="cartspan2">
                            Sub Total : Rs {discountedPrice * 1}
                          </p>
                          <button
                            className="cartbtn2"
                            onClick={() => {
                              // deleteFromCart(product, addToast);
                              deleteCartItem(product?._id);
                              setItems(() =>
                                items?.filter((p) => p?._id !== product?._id)
                              );
                            }}
                          >
                            <BsTrash />
                          </button>
                          <p className="cartp1">
                            Item will be delivered within 2-4 business days
                          </p>
                        </Col>
                      </Row>
                    );
                  })}
                </Col>
              </Row>

              <Row className="no-gutters align-items-center">
                <Col lg={12} className="mb-3 mb-md-0 cartbox3">
                  <div className="coupon field-form input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Enter Coupon Code.."
                    />
                    <div className="input-group-append">
                      <button className="btn btn-fill-out btn-sm" type="submit">
                        Apply Coupon
                      </button>
                    </div>
                  </div>
                </Col>
                <Col lg={8} md={6} className="text-left text-md-right">
                  <button
                    className="btn btn-line-fill btn-sm"
                    type="submit"
                    onClick={() => {
                      // deleteAllFromCart(addToast);
                      deleteAllCartItems();
                    }}
                  >
                    Clear Cart
                  </button>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div className="divider center-icon space-mt--30 space-mb--30">
                    <i className="icon-basket-loaded" />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <div className="cartbox4">
                    <div className="heading-s1 mb-3">
                      <h6>Calculate Shipping</h6>
                    </div>
                    <form className="field-form shipping-calculator">
                      <div className="form-row">
                        <div className="form-group col-lg-12">
                          <select className="form-control">
                            <option value>Choose a option...</option>
                            <option value="AX">Aland Islands</option>
                            <option value="AF">Afghanistan</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AQ">Antarctica</option>
                            <option value="AG">Antigua and Barbuda</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-lg-6">
                          <input
                            required="required"
                            placeholder="State / Country"
                            className="form-control"
                            name="name"
                            type="text"
                          />
                        </div>
                        <div className="form-group col-lg-6">
                          <input
                            required="required"
                            placeholder="PostCode / ZIP"
                            className="form-control"
                            name="name"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-lg-12">
                          <button className="btn btn-fill-line" type="submit">
                            Update Totals
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="border cartbox5 p-3 p-md-4">
                    <div className="heading-s1 mb-3">
                      <h6>Cart Totals</h6>
                    </div>
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td className="cart-total-label">Cart Subtotal</td>
                            <td className="cart-total-amount">
                              Rs {cartTotalPrice()}
                            </td>
                          </tr>
                          <tr>
                            <td className="cart-total-label">Shipping</td>
                            <td className="cart-total-amount">Free Shipping</td>
                          </tr>
                          <tr>
                            <td className="cart-total-label">Total</td>
                            <td className="cart-total-amount">
                              <strong>Rs {cartTotalPrice()}</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <Link href="/other/checkout">
                      <a className="btn btn-fill-out">Proceed To CheckOut</a>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Fragment>
          ) : (
            <Row>
              <Col>
                <div className="item-empty-area text-center">
                  <div className="item-empty-area__icon space-mb--30">
                    <i className="icon-basket-loaded" />
                  </div>
                  <div className="item-empty-area__text">
                    <p className="space-mb--30">No items found in cart</p>
                    <Link href="/">
                      <a className="btn btn-fill-out">Shop Now</a>
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
    cartItems: state.cartData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item, addToast, quantityCount) => {
      dispatch(addToCart(item, addToast, quantityCount));
    },
    decreaseQuantity: (item, addToast) => {
      dispatch(decreaseQuantity(item, addToast));
    },
    deleteFromCart: (item, addToast) => {
      dispatch(deleteFromCart(item, addToast));
    },
    deleteAllFromCart: (addToast) => {
      dispatch(deleteAllFromCart(addToast));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

// export async function getServerSideProps(context) {

//   return { props: {} };
// }
