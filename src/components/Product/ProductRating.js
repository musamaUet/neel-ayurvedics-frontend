import { Fragment } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const ProductRating = ({
  ratingValue,
  increaseRating,
  decreaseRating,
  editable,
}) => {
  let rating = [];

  for (let i = 0; i < 5; i++) {
    rating.push(<FaRegStar key={i} onClick={() => increaseRating(i + 1)} />);
  }

  if (ratingValue && ratingValue > 0) {
    for (let i = 0; i <= ratingValue - 1; i++) {
      rating[i] = (
        <FaStar
          className="yellow"
          key={i}
          onClick={() => editable && decreaseRating()}
        />
      );
    }
  }
  return <Fragment>{rating}</Fragment>;
};

export default ProductRating;
