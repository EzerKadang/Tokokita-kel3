import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helpers";

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product?.id}`} key={product?.id}>
      <div className="relative bg-primarybg shadow-xl rounded-lg w-[220px] h-[320px]">
        <div className="absolute bg-primary text-xs mt-2 px-2 py-1 text-white capitalize font-roboto rounded-r-sm">
          {product?.category}
        </div>
        <div className="">
          <img
            src={product?.images[0]}
            alt={product.title}
            className="object-cover w-[220px] h-[230px] rounded-lg"
          />
        </div>
        <div className="font-roboto text-sm capitalize mt-4">
          <div className="flex items-center justify-center font-bold">
            {product?.brand}
          </div>
          <div className="flex items-center justify-center">
            {product?.title}
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="line-through">{formatPrice(product?.price)}</span>
            <span className="font-bold text-primary">
              {formatPrice(product?.discountedPrice)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

Product.propTypes;

export default Product;
