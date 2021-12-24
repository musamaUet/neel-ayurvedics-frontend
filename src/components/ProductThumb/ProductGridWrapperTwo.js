import { Fragment } from "react";

import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { getDiscountPrice } from "../../lib/product";
import { addToCart } from "../../redux/actions/cartActions";
import {
  addToWishlist,
  deleteFromWishlist,
} from "../../redux/actions/wishlistActions";
import ProductGridTwo from "./ProductGridTwo";

const ProductGridWrapperTwo = ({
  products,
  bottomSpace,
  addToCart,
  addToWishlist,
  deleteFromWishlist,
  cartItems,
  wishlistItems,
  sliderClass,
}) => {
  const { addToast } = useToasts();
  return (
    <Fragment>
      {products &&
        products.map((product) => {
          const discountedPrice = product?.discount_price;
          const productPrice = product?.small_size?.regular_price;
          {
            /* const discountedPrice = getDiscountPrice(
            product.price,
            product.discount
          ).toFixed(2);
          const productPrice = product.price.toFixed(2); */
          }
          const cartItem = cartItems.filter(
            (cartItem) => cartItem.id === product.id
          )[0];
          const wishlistItem = wishlistItems.filter(
            (wishlistItem) => wishlistItem.id === product.id
          )[0];

          return (
            <ProductGridTwo
              key={product?._id}
              product={product}
              discountedPrice={discountedPrice}
              productPrice={productPrice}
              // cartItem={cartItem}
              // wishlistItem={wishlistItem}
              // bottomSpace={bottomSpace}
              // addToCart={addToCart}
              // addToWishlist={addToWishlist}
              // deleteFromWishlist={deleteFromWishlist}
              // addToast={addToast}
              // cartItems={cartItems}
              sliderClass={sliderClass}
            />
          );
        })}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductGridWrapperTwo);
