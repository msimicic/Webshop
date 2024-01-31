import { useContext } from "react";
import { Context } from "../../App";

function Product() {
  const { products, shortenedString, selectedProductId } = useContext(Context);
  return (
    <>
      <div className="d-flex flex-wrap justify-content-evenly mt-4">
        {products.map((product, product_id) => {
          if (product.product_id === selectedProductId) {
            return (
              <div className="product-card mb-4 p-3" key={product_id}>
                <div>{shortenedString(product.product_name)}</div>
                <img
                  className="product-image"
                  src={`/${product.product_image}`}
                  alt={product.product_name}
                />
                <div className="product-price">{product.product_price} €</div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </>
  );
}

export default Product;
