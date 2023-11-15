import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {products.map((product) => {
        let discountedPrice =
          product.price - product.price * (product.discountPercentage / 100);

        return (
          <Product key={product.id} product={{ ...product, discountedPrice }} />
        );
      })}
    </div>
  );
};

ProductList.propTypes;

export default ProductList;
