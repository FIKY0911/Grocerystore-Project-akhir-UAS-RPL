import { StarIcon } from "@sanity/icons";

const ProductRating = ({ rating = 4, reviews = 5 }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <StarIcon
            key={index}
            className={index < rating ? "text-shop_light_green" : "text-lightText"}
            fill={index < rating ? "#93D991" : "#ababab"}
          />
        ))}
      </div>
      <p className="text-lightText text-xs tracking-wide">{reviews} Reviews</p>
    </div>
  );
};

export default ProductRating;
