import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { getDiscountPrice } from "../../lib/product";
import { getProducts } from "../../lib/product";
import { LayoutSix } from "../../layouts";
import {
  ImageGalleryBottomThumb,
  ProductDescription,
  ProductDescriptionTab,
} from "../../components/ProductDetails";
import { addToCart } from "../../redux/actions/cartActions";
import {
  addToWishlist,
  deleteFromWishlist,
} from "../../redux/actions/wishlistActions";
import products from "../../data/products.json";
import { ProductSliderTwo } from "../../components/ProductSlider";
import { getAllProducts, getProduct, getNavBarItems } from "../../api/listings";

const ProductBasic = ({
  product,
  cartItems,
  wishlistItems,
  addToCart,
  addToWishlist,
  deleteFromWishlist,
  navBarItems,
  // relatedProducts,
  data,
}) => {
  console.log(data);
  const {
    productDetails,
    latestProduct,
    relatedProducts,
    tags,
    sizes,
    productReview,
  } = data;
  const { addToast } = useToasts();
  //   const discountedPrice = getDiscountPrice(
  //     product.price,
  //     product.discount
  //   ).toFixed(2);

  //   const productPrice = product.price.toFixed(2);
  const discountedPrice = data?.productDetails?.discount_price || 20;
  const productPrice = data?.productDetails?.small_size?.regular_price || 20;

  //   const cartItem = cartItems.filter(
  //     (cartItem) => cartItem.id === product.id
  //   )[0];
  //   const wishlistItem = wishlistItems.filter(
  //     (wishlistItem) => wishlistItem.id === product.id
  //   )[0];

  return (
    <LayoutSix item={navBarItems}>
      {/* product details */}
      <BreadcrumbOne>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">My Account</li>
        </ol>
      </BreadcrumbOne>
      <div className="product-details space-pt--50 space-pb--50">
        <div className="custom-container5">
          <Row>
            <Col lg={10}>
              <Row>
                <Col lg={4} className="space-mb-mobile-only--40 pad10">
                  {/* image gallery */}
                  <ImageGalleryBottomThumb
                    product={data?.productDetails?.file_locations}
                  />
                </Col>
                <Col lg={8}>
                  {/* product description */}
                  <ProductDescription
                    product={productDetails}
                    productPrice={productPrice}
                    discountedPrice={discountedPrice}
                    // cartItems={cartItems}
                    // cartItem={cartItem}
                    // wishlistItem={wishlistItem}
                    addToast={addToast}
                    addToCart={addToCart}
                    addToWishlist={addToWishlist}
                    deleteFromWishlist={deleteFromWishlist}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  {/* product description tab */}
                  <ProductDescriptionTab product={data?.productDetails} />
                </Col>
              </Row>

              {/* related product slider */}
            </Col>
            <Col lg={2} className="discsidebar">
              <img src="/assets/images/sidebar.png" alt="side_img1" />
              <ProductSliderTwo
                title="Related Products"
                products={relatedProducts}
              />
            </Col>
          </Row>
        </div>
      </div>
    </LayoutSix>
  );
};

const mapStateToProps = (state, ownProps) => {
  // const products = state.productData;
  // const category = ownProps.product.category[0];
  return {
    // relatedProducts: getProducts(products, category, "popular", 8),
    // cartItems: state.cartData,
    // wishlistItems: state.wishlistData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (
      item,
      addToast,
      quantityCount,
      selectedProductColor,
      selectedProductSize
    ) => {
      dispatch(
        addToCart(
          item,
          addToast,
          quantityCount,
          selectedProductColor,
          selectedProductSize
        )
      );
    },
    addToWishlist: (item, addToast) => {
      dispatch(addToWishlist(item, addToast));
    },
    deleteFromWishlist: (item, addToast) => {
      dispatch(deleteFromWishlist(item, addToast));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductBasic);

// export async function getStaticPaths() {
//   // get the paths we want to pre render based on products
//   try {
//     // const paths = products.map((product) => ({
//     //     params: { product_id: product.slug },
//     //   }));
//     const response = await getAllProducts();
//     const paths = response.products.map((product) => ({
//       params: { id: product._id },
//     }));

//     return { paths: paths, fallback: true };
//   } catch (error) {
//     console.log(error);
//     return { paths: [{ params: "" }], fallback: true };
//   }
// }

// export async function getStaticProps({ params }) {
//   // get product data based on slug
//   try {
//     const response = await getProduct(params.id);
//     let navBarItems = await getNavBarItems();
//     console.log("static props", response);

//     return { props: { data: response?.returnedObject || "",navBarItems } };
//   } catch (error) {
//     console.log(error);
//     return { props: {} };
//   }
// }
export async function getServerSideProps({ params }) {
  // get product data based on slug
  try {
    const response = await getProduct(params.id);
    let navBarItems = await getNavBarItems();
    console.log("static props", response, Array.isArray(response));
    if (Array.isArray(response) && !response.length > 0) {
      return { notFound: true };
    }
    return { props: { data: response?.returnedObject || "", navBarItems } };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
}
