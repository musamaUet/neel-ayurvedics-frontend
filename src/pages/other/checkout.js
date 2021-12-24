import Link from "next/link";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { getDiscountPrice } from "../../lib/product";
import { IoMdCash } from "react-icons/io";
import { LayoutSix } from "../../layouts";
import { useState } from "react";
import { createOrder, SendOrderCredentials } from "../../api/order";

const Checkout = ({ cartItems }) => {
  // let cartTotalPrice = 0;

  const handleClick = async (e) => {
    e.preventDefault();
    const response = await createOrder(1000);
    console.log("====================================");
    console.log(response?.data?.order_data?.amount);
    console.log(response?.data?.order_data?.amount == 100000);
    console.log("====================================");

    var options = {
      key: "rzp_test_C93Cp8w7vlTx7q", // Enter the Key ID generated from the Dashboard
      amount: response?.data?.order_data?.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Neel Ayuvedics",
      description: "Test Transaction",
      order_id: response?.data?.order_data?.id,
      //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
        await SendOrderCredentials({
          order_id: response?.razorpay_order_id,
          transaction_id: response?.razorpay_payment_id,
        });
        // router.push("/")
        alert("Payment Successfull");
        console.log(response);
      },

      theme: {
        color: "#3C9E98",
        // color: "black",
      },
    };

    const rzp1 = new Razorpay(options);
    rzp1.open();
  };
  const [formField, setFormField] = useState({
    fname: "",
    lname: "",
    cname: "",
    billing_address: "",
    billing_address2: "",
    city: "",
    zipcode: "",
    phone: "",
    email: "",
    order_notes: "",
  });

  const handleChange = ({ target }) => {
    let data = { ...formField };
    data[target.name] = target.value;
    setFormField(data);
  };

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </Head>
      <LayoutSix>
        <div className="checkout-content space-pt--20 space-pb--20">
          <Container>
            {true ? (
              <Row>
                <Col md={6}>
                  <div className="border checkout1 cartbox5 p-3 p-md-4">
                    <div className="heading-s1 mb-3">
                      <h4>Billing Details</h4>
                    </div>
                    <form>
                      <div className="form-group">
                        <input
                          type="text"
                          required
                          className="form-control"
                          name="fname"
                          placeholder="First name *"
                          value={formField.fname}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          required
                          className="form-control"
                          name="lname"
                          placeholder="Last name *"
                          value={formField.lname}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          required
                          type="text"
                          name="cname"
                          placeholder="Company Name"
                          value={formField.cname}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <div className="custom_select">
                          <select className="form-control">
                            <option value="">Select an option...</option>
                            <option value="AX">Aland Islands</option>
                            <option value="AF">Afghanistan</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AQ">Antarctica</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="billing_address"
                          required=""
                          placeholder="Address *"
                          value={formField.billing_address}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="billing_address2"
                          required=""
                          placeholder="Address line2"
                          value={formField.billing_address2}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          required
                          type="text"
                          name="city"
                          placeholder="City / Town *"
                          value={formField.city}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          required
                          type="text"
                          name="zipcode"
                          placeholder="Postcode / ZIP *"
                          value={formField.zipcode}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          required
                          type="text"
                          name="phone"
                          placeholder="Phone *"
                          value={formField.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          required
                          type="text"
                          name="email"
                          placeholder="Email address *"
                          value={formField.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="heading-s1 space-mb--20">
                        <h4>Additional information</h4>
                      </div>
                      <div className="form-group mb-0">
                        <textarea
                          rows="5"
                          className="form-control"
                          placeholder="Order notes"
                          name="order_notes"
                          value={formField.order_notes}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </form>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="order-review space-mt-mobile-only--40 border cartbox5 p-3 p-md-4">
                    <div className="heading-s1 mb-3">
                      <h4>Your Orders</h4>
                    </div>
                    <div className="table-responsive order_table">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartItems.map((product, i) => {
                            {
                              /* const discountedPrice = getDiscountPrice(
                              product.price,
                              product.discount
                            ).toFixed(2);

                            cartTotalPrice +=
                              discountedPrice * product.quantity; */
                            }

                            const discountedPrice = 1000;
                            return (
                              <tr key={i}>
                                <td>
                                  {product?.name || "Fake Product"}{" "}
                                  <span className="product-qty">
                                    x {product?.quantity || 3}
                                  </span>
                                </td>
                                <td>
                                  Rs
                                  {discountedPrice * 3}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                        <tfoot>
                          <tr>
                            <th>SubTotal</th>
                            <td className="product-subtotal">Rs {9000}</td>
                          </tr>
                          <tr>
                            <th>Shipping</th>
                            <td>Free Shipping</td>
                          </tr>
                          <tr>
                            <th>Total</th>
                            <td className="product-subtotal">Rs {9000}</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                    {/* <div className="payment-method">
                    <div className="heading-s1 space-mb--20">
                      <h4>Payment</h4>
                    </div>
                    <div className="payment-option space-mb--20">
                      <div className="custom-radio space-mb--20">
                        <input
                          className="form-check-input"
                          required
                          type="radio"
                          name="payment-option"
                          id="exampleRadios3"
                          defaultValue="option3"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios3"
                        >
                          Direct Bank Transfer
                        </label>
                        <p data-method="option3" className="payment-text">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration.{" "}
                        </p>
                      </div>
                      <div className="custom-radio space-mb--20">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="payment-option"
                          id="exampleRadios4"
                          defaultValue="option4"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios4"
                        >
                          Check Payment
                        </label>
                        <p data-method="option4" className="payment-text">
                          Please send your cheque to Store Name, Store Street,
                          Store Town, Store State / County, Store Postcode.
                        </p>
                      </div>
                      <div className="custom-radio space-mb--20">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="payment-option"
                          id="exampleRadios5"
                          defaultValue="option5"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios5"
                        >
                          Paypal
                        </label>
                        <p data-method="option5" className="payment-text">
                          Pay via PayPal; you can pay with your credit card if
                          you don't have a PayPal account.
                        </p>
                      </div>
                    </div>
                  </div> */}
                    <button
                      className="btn btn-fill-out btn-block"
                      onClick={handleClick}
                    >
                      Place Order
                    </button>
                  </div>
                </Col>
              </Row>
            ) : (
              <Row>
                <Col>
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon space-mb--30">
                      <IoMdCash />
                    </div>
                    <div className="item-empty-area__text">
                      <p className="space-mb--30">
                        No items found in cart to checkout
                      </p>
                      <Link href="/shop/grid-left-sidebar">
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
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData,
  };
};

export default connect(mapStateToProps)(Checkout);
