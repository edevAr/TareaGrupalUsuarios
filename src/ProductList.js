// src/ProductList.js
import React from "react";

function ProductList(props) {
  if (props.products.length === 0) {
    return <p>No hay productos registrados.</p>;
  }

  return (
    <ul>
      {props.products.map(function (product, index) {
        return (
          <li key={index}>
            <strong>{product.name}</strong> {product.description} ${product.price}, Unidades en stock: {product.stock}
          </li>
        );
      })}
    </ul>
  );
}

export default ProductList;
