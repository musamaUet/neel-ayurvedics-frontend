import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import ProductRating from "../Product/ProductRating";
import { useState, useEffect } from "react";
import { AddReview, getReviews } from "../../api/reviews";
import { useRouter } from "next/router";

const ProductDescriptionTab = ({ product }) => {
  const [reviews, setReviews] = useState([]);
  const [clicked, setClicked] = useState(true);
  let [reviewForm, setReviewForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  let [rating, setRating] = useState(0);
  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      name: reviewForm.name,
      email: reviewForm.email,
      description: reviewForm.message,
      product_id: product?._id,
      rating,
    };
    try {
      const response = await AddReview(data);
      if (response?.status === 401) {
        alert("Youre Not Logged In Plz Login To Add Review");
        return;
      }
      setClicked(!clicked);
      setReviewForm({ name: "", message: "", email: "" });
      setRating(0);
    } catch (error) {
      console.log("====================================");
      console.log(error?.response?.data);
      console.log("====================================");
    }
  };
  const handleChange = ({ target }) => {
    let data = { ...reviewForm };
    data[target.name] = target.value;
    setReviewForm(data);
  };

  useEffect(() => {
    const get = async () => {
      // alert("under use effect");
      try {
        const response = await getReviews(product?._id);
        if (
          response?.status === 200 &&
          response?.data?.productReview?.length > 0
        )
          setReviews(response?.data?.productReview);
        console.log("resposne-------->reviews", response);
      } catch (error) {
        console.log("========error======");
        console.log(error);
      }
    };
    get();
  }, [clicked]);

  return (
    <div className="product-description-tab pad10 space-pt--20 space-pb--20">
      <div id="description">
        <h2 class="groupTitle">Description</h2>
        <div class="boxWhite productDetailDesc">
          <div class="productDetailFull">
            <div>
              <h2>Properties</h2>
              <div class="properties">
                <div class="propertyRow">
                  <div class="propertyLable">Weight</div>
                  <div class="propertyValue">384 (gms)</div>
                </div>
                <div class="propertyRow">
                  <div class="propertyLable">Dimensions</div>
                  <div class="propertyValue">6 (cm) x 6 (cm) x 15 (cm)</div>
                </div>
              </div>
            </div>
            <div>
              <h2>About GlaxoSmithKline Ostocalcium B12 Child Syrup Banana</h2>
              {<p>{product.description}</p>}
              {<p>{product.feature_description}</p>}

              <p>
                Adequate Calcium is required for maintaining bone &amp; teeth
                strength. If your child's daily diet does not have adequate
                calcium, your child may need calcium supplementation. Indian
                dietary habits contribute to low intake of calcium &amp; vitamin
                D increases the risk of deficiency. Deficiency of calcium &amp;
                vitamin D negatively affects bone &amp; teeth health. Indian
                Academy of Pediatrics recommends calcium along with Vitamin D
                for growing children. Calcium &amp; Vitamin D are critical for
                bone &amp; teeth development. Ostocalcium B12 Suspension gives
                your growing child calcium which is required to maintain the
                strength of bones &amp; teeth. It has Vitamin D3 that aids
                calcium absorption in the body. Without Vitamin D3, calcium
                absorption is not optimum. It also contains Vitamin B12 which is
                important for the release of energy in the body. &nbsp;Every 5
                ml (1 teaspoonful) of Ostocalcium B12 suspension contains 82 mg
                of elemental calcium; 200IU of Vitamin D3 &amp; 2.5 mcg of
                Vitamin B12. Ostocalcium B12 Suspension comes in a tasty Banana
                flavour which your kids will enjoy. Consult your doctor before
                administering Ostocalcium B12 Suspension to children below 1
                year of age. For children more than 1 year of age, the
                recommended dosage is 1-2 teaspoon daily.
              </p>
              <h3>
                Key ingredients of GlaxoSmithKline Ostocalcium B12 Child Syrup
                Banana
              </h3>
              <ul>
                <li>Vitamin D3</li>
                <li>Vitamin B12</li>
                <li>Tribasic Calcium Phosphate</li>
              </ul>
              <h3>
                Benefits of GlaxoSmithKline Ostocalcium B12 Child Syrup Banana
              </h3>
              <ul>
                <li>
                  Ostocalcium gives your growing child calcium and vitamin D
                  which are the building blocks of bones
                </li>
                <li>
                  Ostocalcium helps replenish calcium daily and helps build
                  strong bones for your child
                </li>
              </ul>
              <h3>
                How to use GlaxoSmithKline Ostocalcium B12 Child Syrup Banana
              </h3>
              <p>
                Use as directed on the label or as prescribed by the physician.
              </p>
              <h3>
                Precautions regarding GlaxoSmithKline Ostocalcium B12 Child
                Syrup Banana
              </h3>
              <ul>
                <li>Read the label carefully before use.</li>
                <li>
                  Store in a cool and dry place away from direct sunlight.
                </li>
              </ul>
              <h3>
                Additional information regarding GlaxoSmithKline Ostocalcium B12
                Child Syrup Banana
              </h3>
              <ul>
                <li>100% Genuine Product</li>
                <li>Results may vary with lifestyle and diet adopted.</li>
                <li>
                  Depending upon the lighting and screen resolution, the color
                  of the product may slightly vary.
                </li>
              </ul>
            </div>
            <div>
              <h2>Terms and Conditions</h2>
              <p>
                We have assumed that you have consulted a physician before
                purchasing this medicine and are not self medicating.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="description" eventKey="reviews">
        <h2 class="groupTitle">Ratings & Reviews</h2>
        <div className="product-description-tab__review bg-white">
          <div className="comments">
            <h5 className="product-tab-title">
              {product.ratingCount} Review For <span>{product.name}</span>
            </h5>
            {!reviews?.length > 0 && <h3>No Reviews Available</h3>}
            <ul className="list-none comment-list mt-2">
              {reviews?.map((prod) => (
                <li>
                  <div className="comment-block">
                    <div className="rating-wrap">
                      <div className="rating">
                        <ProductRating ratingValue={prod?.rating || 0} />
                      </div>
                    </div>
                    <p className="customer-meta">
                      <span className="review-author">{prod?.name}</span>
                      <span className="comment-date">March 5, 2020</span>
                    </p>
                    <div className="description">
                      <p>{prod?.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="review-form field-form">
            <h5>Add a review</h5>
            <form className="row mt-2">
              <div className="form-group col-12 mb-2">
                <span className="product-rating">
                  <ProductRating
                    ratingValue={rating}
                    increaseRating={(count) => setRating(count)}
                    decreaseRating={() => setRating(--rating)}
                    editable
                  />
                </span>
              </div>
              <div className="form-group col-12 mb-2">
                <textarea
                  required="required"
                  placeholder="Your review *"
                  className="form-control"
                  name="message"
                  rows={4}
                  onChange={handleChange}
                  value={reviewForm.message}
                  defaultValue={""}
                />
              </div>
              <div className="form-group col-md-6 mb-2">
                <input
                  required="required"
                  placeholder="Enter Name *"
                  className="form-control"
                  name="name"
                  type="text"
                  onChange={handleChange}
                  value={reviewForm.name}
                />
              </div>
              <div className="form-group col-md-6 mb-2">
                <input
                  required="required"
                  placeholder="Enter Email *"
                  className="form-control"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={reviewForm.email}
                />
              </div>
              <div className="form-group col-12">
                <button
                  type="submit"
                  className="btn btn-fill-out"
                  name="submit"
                  value="Submit"
                  onClick={handleSubmit}
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <Tab.Container defaultActiveKey="description">
        <Nav
          variant="pills"
          className="product-description-tab__navigation space-mb--10"
        >
          <Nav.Item>
            <Nav.Link eventKey="description">DESCRIPTION</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="additionalInfo">ADDITIONAL INFO</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="reviews">
              REVIEWS {product.ratingCount ? `(${product.ratingCount})` : ""}
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="description">
            <div className="product-description-tab__details">
              {product.description}
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="additionalInfo">
            <div className="product-description-tab__additional-info">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>Capacity</td>
                    <td>5 Kg</td>
                  </tr>
                  <tr>
                    <td>Color</td>
                    <td>Black, Brown, Red,</td>
                  </tr>
                  <tr>
                    <td>Water Resistant</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Material</td>
                    <td>Artificial Leather</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="reviews">
            <div className="product-description-tab__review">
              <div className="comments">
                <h5 className="product-tab-title">
                  {product.ratingCount} Review For <span>{product.name}</span>
                </h5>
                {!reviews?.length > 0 && <h3>No Reviews Available</h3>}
                <ul className="list-none comment-list mt-4">
                  {reviews?.map((prod) => (
                    <li>
                      <div className="comment-img">
                        <img src="/assets/images/users/user1.jpg" alt="user1" />
                      </div>
                      <div className="comment-block">
                        <div className="rating-wrap">
                          <div className="rating">
                            <ProductRating ratingValue={prod?.rating || 0} />
                          </div>
                        </div>
                        <p className="customer-meta">
                          <span className="review-author">{prod?.name}</span>
                          <span className="comment-date">March 5, 2020</span>
                        </p>
                        <div className="description">
                          <p>{prod?.description}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="review-form field-form">
                <h5>Add a review</h5>
                <form className="row mt-3">
                  <div className="form-group col-12">
                    <span className="product-rating">
                      <ProductRating
                        ratingValue={rating}
                        increaseRating={(count) => setRating(count)}
                        decreaseRating={() => setRating(--rating)}
                        editable
                      />
                    </span>
                  </div>
                  <div className="form-group col-12">
                    <textarea
                      required="required"
                      placeholder="Your review *"
                      className="form-control"
                      name="message"
                      rows={4}
                      onChange={handleChange}
                      value={reviewForm.message}
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      required="required"
                      placeholder="Enter Name *"
                      className="form-control"
                      name="name"
                      type="text"
                      onChange={handleChange}
                      value={reviewForm.name}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      required="required"
                      placeholder="Enter Email *"
                      className="form-control"
                      name="email"
                      type="email"
                      onChange={handleChange}
                      value={reviewForm.email}
                    />
                  </div>
                  <div className="form-group col-12">
                    <button
                      type="submit"
                      className="btn btn-fill-out"
                      name="submit"
                      value="Submit"
                      onClick={handleSubmit}
                    >
                      Submit Review
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container> */}
    </div>
  );
};

export default ProductDescriptionTab;
//   <li>
{
  /* <div className="comment-img">
<img src="/assets/images/users/user2.jpg" alt="user2" />
</div>
<div className="comment-block">
<div className="rating-wrap">
  <div className="rating">
    {/* <IoIosStar />
    <IoIosStar />
    <IoIosStar />
    <IoIosStar />
    <IoIosStarOutline /> */
}
// <ProductRating ratingValue={4} />
//   </div>
// </div>
// <p className="customer-meta">
//   <span className="review-author">Grace Wong</span>
//   <span className="comment-date">June 17, 2020</span>
// </p>
// <div className="description">
//   {/* <p>
//     It is a long established fact that a reader will be
//     distracted by the readable content of a page when
//     looking at its layout. The point of using Lorem Ipsum
//     is that it has a more-or-less normal distribution of
//     letters
//   </p>
// </div>
// </div> */}
// </li> */}
