
DAY 6
CE
productsList.js
import React from "react";

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.name} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <img src={product.imageUrl} alt={product.name} style={{ width: "100px", height: "100px" }} />
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

WithProductList.jsx
import React from "react";

const withProductList = (WrappedComponent, products) => {
  return function WithProductList(props) {
    return <WrappedComponent {...props} products={products} />;
  };
};

export default withProductList;
